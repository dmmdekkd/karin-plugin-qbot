import { karin } from 'node-karin'
import type { Contact } from 'node-karin'

/** QQBot 媒体上传接口（仅声明用到的部分） */
interface MediaLike {
  /** 新版适配器：上传并取回公网直链（直链已声明 content-type）；source 为 base64:// 字符串 */
  uploadForUrl?: (scene: 'group' | 'user', peer: string, type: 'image', source: string, fileName?: string) => Promise<{ url: string }>
  /** 旧版适配器：分片上传，合并响应含 raw_url 临时直链 */
  uploadChunked?: (scene: 'group' | 'user', peer: string, type: 'image', source: { kind: 'buffer', buffer: Buffer, size: number, fileName: string }) => Promise<{ raw_url?: string }>
}

/** 具备媒体上传能力的 QQBot 实例 */
type BotLike = { selfId: string, adapter?: { protocol?: string }, super?: { media?: MediaLike } }

/**
 * 借 QQBot 官方上传通道（COS）将 base64 图片换为临时直链（ttl 86400s），
 * 使本地图片能以 markdown 图片语法进入消息正文。
 * @returns 直链；scene 无效 / 无可用 bot / 上传失败时返回 undefined
 */
export const uploadImageToCos = async (
  contact: Contact,
  selfId: string,
  file: string,
  fileName = 'help.png'
): Promise<string | undefined> => {
  const scene = contact.scene === 'group' ? 'group' : contact.scene === 'friend' ? 'user' : undefined
  if (!scene) return undefined

  const media = (karin.getAllBot() as unknown as BotLike[]).find(
    b => b.selfId === selfId && b.adapter?.protocol === 'qqbot' && b.super?.media
  )?.super?.media
  if (!media) return undefined

  const buffer = Buffer.from(String(file).replace(/^base64:\/\//, ''), 'base64')
  try {
    if (typeof media.uploadForUrl === 'function') {
      // uploadForUrl 的 source 为字符串（base64:// 前缀），内部再归一为 buffer
      const { url } = await media.uploadForUrl(scene, contact.peer, 'image', `base64://${buffer.toString('base64')}`, fileName)
      return url
    }
    // 旧版 uploadChunked：直链需手动补齐 content-type 声明
    const { raw_url } = (await media.uploadChunked?.(scene, contact.peer, 'image', { kind: 'buffer', buffer, size: buffer.length, fileName })) ?? {}
    if (raw_url) {
      const parsed = new URL(raw_url)
      parsed.searchParams.set('response-content-type', 'image/png')
      return parsed.toString()
    }
  } catch { /* 上传失败，交由调用方兜底 */ }
  return undefined
}