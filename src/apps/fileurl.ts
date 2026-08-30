import { karin } from 'node-karin'
import type { Contact } from 'node-karin'
import type { FileToUrlPayload, ImageSize, MarkdownImageContext, MarkdownImageScene, QQBotLike, QQBotMediaApi, UploadSource } from '@/types/type'

/**
 * 内置式 fileToUrl 处理器：借 QQ 官方分片上传通道（COS）充当临时图床，
 * 将 base64 图片上传为带 response-content-type 的临时直链（ttl 86400s），
 * 使本地图片能以 markdown 图片语法进入消息正文。
 *
 * 适配器 3.1.0 的 fileToUrl 调用不携带目标会话，由发送方命令在 e.reply 前
 * 通过 setMarkdownImageContext 登记本次会话（60s 内有效），本处理器按登记执行。
 */

/** 发送方登记的本次 markdown 图片上传会话 */
let context: MarkdownImageContext | undefined

/** 事件场景 → 上传场景；friend/group 之外视为无效（清空登记） */
const toScene = (contact: Contact): MarkdownImageScene | undefined =>
  contact.scene === 'group' ? 'group' : contact.scene === 'friend' ? 'user' : undefined

/**
 * 登记 markdown 图片上传的目标会话，返回清理函数，调用后立即释放登记。
 * @param contact 本次事件的目标会话
 * @param selfId 执行发送的 bot appId
 */
export const setMarkdownImageContext = (contact: Contact, selfId: string): () => void => {
  const scene = toScene(contact)
  context = scene ? { selfId, scene, peer: contact.peer, time: Date.now() } : undefined
  return clearMarkdownImageContext
}

/** 清除登记，避免陈旧会话被后续无关发送误用 */
export const clearMarkdownImageContext = (): void => {
  context = undefined
}

/** 解析 PNG 宽高（IHDR 前 24 字节内），失败回落兜底尺寸 */
const pngSize = (buffer: Buffer): ImageSize => {
  try {
    if (buffer.length > 24 && buffer.toString('ascii', 12, 16) === 'IHDR') {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
    }
  } catch { /* 忽略，走兜底 */ }
  return { width: 100, height: 100 }
}

/**
 * 借 bot 媒体接口换取图片直链：
 * 优先新版 uploadForUrl（直链自带 content-type），否则 uploadChunked 手动补 query。
 */
const uploadImageUrl = async (
  media: QQBotMediaApi,
  session: MarkdownImageContext,
  buffer: Buffer,
  fileName: string
): Promise<string | undefined> => {
  const source: UploadSource = { kind: 'buffer', buffer, size: buffer.length, fileName }
  if (typeof media.uploadForUrl === 'function') {
    const { url } = await media.uploadForUrl(session.scene, session.peer, 'image', source, fileName)
    return url
  }
  if (typeof media.uploadChunked === 'function') {
    const { raw_url: rawUrl } = await media.uploadChunked(session.scene, session.peer, 'image', source)
    if (rawUrl) {
      const parsed = new URL(rawUrl)
      parsed.searchParams.set('response-content-type', 'image/png')
      return parsed.toString()
    }
  }
  return undefined
}

export const markdownImageFileToUrl = karin.handler('fileToUrl', async (payload, next) => {
  const { file, type, filename } = payload as FileToUrlPayload
  /** QQ 只对图片 / 视频 / 语音返回下载直链；这里只处理图片 */
  if (type !== 'image') return next()
  /** 会话登记必须新鲜（60s 内），避免陈旧上下文误伤后续无关发送 */
  const session = context
  if (!session || Date.now() - session.time > 60_000) return next()

  const bot = (karin.getAllBot() as unknown as QQBotLike[]).find(bot =>
    bot.selfId === session.selfId &&
    bot.adapter?.protocol === 'qqbot' &&
    bot.super?.media
  )
  if (!bot?.super?.media) return next()

  try {
    const buffer = Buffer.from(String(file).replace(/^base64:\/\//, ''), 'base64')
    const url = await uploadImageUrl(bot.super.media, session, buffer, filename || 'help.png')
    if (!url) return next()

    const { width, height } = pngSize(buffer)
    bot.logger?.('debug', `[qbot图床] 已取得直链: ${url}`)
    return { url, width, height }
  } catch (e) {
    bot.logger?.('debug', `[qbot图床] 取直链失败，交给后续处理器: ${e instanceof Error ? e.message : String(e)}`)
    return next()
  }
}, { name: 'qbot 分片上传图床', rank: 20000 })
