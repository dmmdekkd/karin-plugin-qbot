import karin, { checkPkgUpdate, config, db, hooks, restart, segment, updatePkg } from 'node-karin'
import type { Message } from 'node-karin'
import { dir } from '@/dir'
import { RE_UPDATE } from '@/utils/constants'
import { isQqbot } from '@/model'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'
import { config as pluginConfig } from '@/utils/config'
import { getRemoteVersion } from '@/utils/version'
import { renderChangelog } from '@/utils/changelog'
import {
  acquireUpdateLock,
  buildChangelogImage,
  getPluginRemote,
  matchMasterBots,
  notifyMasters,
} from '@/utils/update'

/** 更新成功三行文案（Hook 与命令共用） */
const successText = (local?: string, remote?: string) =>
  `${dir.name} 更新成功！\n${local ?? '未知'} -> ${remote ?? '未知'}\n开始执行重启......`

/** 更新失败文案：无更新时提示已是最新版，其余统一简洁失败信息（不透出 karin 内部 data） */
const failText = (data?: string | object): string => {
  if (typeof data === 'string' && data.includes('无更新')) return '当前已是最新版本'
  return `${dir.name} 更新失败: 更新执行失败`
}

/** 渲染并发送指定版本的更新日志（仅该版本段落），失败返回 false */
const sendVersionChangelog = async (e: Message, version: string): Promise<boolean> => {
  const image = await renderChangelog(version)
  if (!image) return false
  await e.reply(await buildChangelogImage(image, isQqbot(e), e.contact, e.selfId))
  return true
}

/** 执行更新：成功后先发「更新成功」再发当前已更新版本的更新日志，最后重启 */
const applyUpdate = async (e: Message): Promise<void> => {
  const result = await updatePkg(dir.name)
  if (result.status !== 'ok') {
    await e.reply(failText(result.data))
    return
  }
  const successMsg = await e.reply(successText(result.local, result.remote))
  await sendVersionChangelog(e, result.remote)
  if (successMsg?.messageId) {
    await db.del('qbot:update:msgId').catch(() => { })
    await db.del('qbot:update:lock').catch(() => { })
  }
  await restart(e.selfId, e.contact, successMsg.messageId)
}

/** 回复「更新」提醒消息触发更新 */
const handleUpdateHook = async (e: Message) => {
  await e.reply(`开始更新 ${dir.name} ...`, { reply: true })
  const upd = await checkPkgUpdate(dir.name, { compare: 'semver' })
  if (upd.status === 'yes') {
    await applyUpdate(e)
  } else {
    await e.reply(upd.status === 'no' ? '未检测到可更新版本。' : `${dir.name} 更新失败: ${upd.error?.message ?? String(upd.error)}`)
  }
}

export const qbotUpdate = hooks.message.friend(
  async (e, next) => {
    if (e.msg.includes('更新')) {
      const msgId = (await db.get('qbot:update:msgId')) as string
      if (e.replyId === msgId) {
        await handleUpdateHook(e)
      }
    }
    next()
  },
  { priority: 100 }
)

/** 按平台构建消息：QQBot 使用 markdown 段，其余平台直接文本 */
const withPlatform = (e: Message, text: string) => (isQqbot(e) ? segment.markdown(text) : text)

/** #qbot更新日志：获取远端最新版并渲染发送完整全部更新日志 */
const sendChangelog = async (e: Message): Promise<boolean> => {
  const remote = await getRemoteVersion(dir.name)
  if (!remote) {
    await e.reply('获取远程版本失败')
    return true
  }
  const image = await renderChangelog(dir.version, false)
  if (!image) {
    await e.reply('获取更新日志失败')
    return true
  }
  await e.reply([
    ...(await buildChangelogImage(image, isQqbot(e), e.contact, e.selfId)),
  ])
  return true
}

/**
 * 插件更新：#qbot更新 / #qbot强制更新 / #qbot更新日志
 * 本插件通过 npm 安装，更新统一走 updatePkg，完成后自动重启
 */
export const updateCommand = karin.command(RE_UPDATE, async (e) => {
  const [, , , isLog] = e.msg.match(RE_UPDATE) ?? []

  /** 耗时前先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)
  if (isLog) return await sendChangelog(e)

  const res = await updatePkg(dir.name)
  if (res.status === 'failed') {
    return await e.reply(withPlatform(e, failText(res.data)))
  }
  await e.reply(withPlatform(e, successText(res.local, res.remote)))
  if (!(await sendVersionChangelog(e, res.remote))) {
    await e.reply('获取更新日志失败，更新进程继续......')
  }
  await restart(e.selfId, e.contact, e.messageId, true, true)
  return true
}, {
  name: '插件更新',
  permission: 'master',
})

/** 定时更新检测：检查新版并私聊短提示通知所有主人（后端链路已下沉至 utils/update） */
const Handler = async (): Promise<boolean> => {
  if (!pluginConfig().autoUpdate?.enable) return true
  const remote = await getPluginRemote()
  if (!remote || !(await acquireUpdateLock(remote))) return true

  const masters = config.master().filter((id) => id !== 'console')
  await notifyMasters(await matchMasterBots(masters), remote)
  return true
}

export const update = karin.task('qbot-更新检测', pluginConfig().autoUpdate?.cron || '0 0 4 * * *', Handler, {
  name: 'qbot-更新检测',
  log: false,
  type: 'skip'
})