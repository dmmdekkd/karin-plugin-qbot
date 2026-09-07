import { checkPkgUpdate, db, karin, segment, type Contact } from 'node-karin'
import { dir } from '@/dir'
import { isNewerVersion, pluginVersion } from '@/utils/version'
import { uploadImageToCos } from '@/apps/fileurl'
import type { BotGroup, BotToOwners, ChangelogElements } from '@/types/type'

/**
 * 更新检测与主人通知链路（#qbot更新 定时检测的后端逻辑）：
 * 检测新版 → 版本提醒锁去重 → 按 Bot 匹配主人 → 渲染日志私聊推送。
 * 与命令层（src/apps/update.ts）解耦，便于复用与测试。
 */

/** 获取插件远程最新版（用于更新检测）：无新版或异常时返回 undefined */
export const getPluginRemote = async (): Promise<string | undefined> => {
  const upd = await checkPkgUpdate(dir.name, { compare: 'semver' }).catch(() => null)
  if (!upd || upd.status !== 'yes' || !isNewerVersion(upd.remote, upd.local)) return undefined
  return upd.remote
}

/** 版本提醒锁：已推送过相同或更高版本则跳过，否则记录本次版本 */
export const acquireUpdateLock = async (remote: string): Promise<boolean> => {
  const locked = await db.get('qbot:update:lock')
  if (typeof locked === 'string') {
    if (isNewerVersion(locked, pluginVersion)) {
      if (!isNewerVersion(remote, locked)) return false
    } else {
      await db.del('qbot:update:lock').catch(() => { })
    }
  }
  await db.set('qbot:update:lock', remote).catch(() => { })
  return true
}

/** 为每个主人匹配可用 Bot 并按 Bot 分组（好友命中优先，QQBot 无好友体系则回落 qqbot 机器人） */
export const matchMasterBots = async (masters: string[]): Promise<BotToOwners> => {
  const botItems = karin.getAllBotList().filter((b) => b.bot.account.name !== 'console')
  const friendList = await Promise.all(botItems.map((it) => it.bot.getFriendList().catch(() => [])))

  const defaultBot = botItems.find((it) => it.bot.adapter.protocol === 'qqbot')?.bot
  const botToOwners = new Map<string, BotGroup>()
  for (const owner of masters) {
    const matched = botItems.find((_, i) => friendList[i].some((f) => f.userId === owner))
    const bot = matched?.bot ?? defaultBot
    if (!bot) continue
    const group = botToOwners.get(bot.account.selfId)
    if (group) {
      group.owners.push(owner)
    } else {
      botToOwners.set(bot.account.selfId, { bot, owners: [owner] })
    }
  }
  return botToOwners
}

/** 构建更新日志图片的发送元素：QQBot 上传 COS 直链走 markdown，其余平台直接 base64 图片（上传失败回落纯文本） */
export const buildChangelogImage = async (
  image: string,
  qqbot: boolean,
  contact: Contact,
  selfId: string,
): Promise<ChangelogElements> => {
  if (qqbot) {
    const uploaded = await uploadImageToCos(contact, selfId, image, 'changelog.png')
    if (!uploaded) return []
    return [segment.markdown(`![changelog](${uploaded})`)]
  }
  return [segment.image(`base64://${image}`)]
}

/**
 * 定时检测到新版时，私聊主人发送简短文字提示。
 * 更新日志不在此发送，由 `#qbot更新日志` 或更新成功后发送，避免重复。
 * 记录首条消息ID，供主人回复「更新」触发更新链路。
 */
export const notifyMasters = async (botToOwners: BotToOwners, remote: string): Promise<void> => {
  let storedMsgId: string | undefined
  for (const { bot, owners } of botToOwners.values()) {
    const text = `${dir.name} 有新版 v${remote}，回复「更新」或发送 #qbot更新 更新`
    const elements = bot.adapter.protocol === 'qqbot' ? [segment.markdown(text)] : [segment.text(text)]
    for (const owner of owners) {
      const msg = await karin.sendMaster(bot.account.selfId, owner, elements)
      if (!storedMsgId && msg?.messageId) storedMsgId = msg.messageId
    }
  }
  if (storedMsgId) {
    await db.set('qbot:update:msgId', storedMsgId).catch(() => { })
  }
}