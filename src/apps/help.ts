import { karin, segment } from 'node-karin'
import type { HelpData } from '../../ktr/template/qbot/help/types'
import helpData from '../../ktr/template/qbot/help/data/default.json'
import { dir } from '@/dir'
import { RE_HELP, RE_MANAGE } from '@/utils/constants'
import { isQqbot, getBotName, manageButtons } from '@/model'
import { md } from '@/utils'
import { renderTemplateImage } from '@/utils/render'
import { getRemoteVersion, isNewerVersion, karinVersion, pluginVersion } from '@/utils/version'
import { uploadImageToCos } from './fileurl'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'

/**
 * 构建帮助页数据：mock JSON 基础上注入真实版本与远端更新状态。
 * 插件/Karin 任一存在新版本时注入对应的远端版本，底部由共享页脚渲染更新提示。
 * item.icon 与 ktr/template/qbot/help/components/icons.tsx 对应。
 */
const buildHelpData = async (): Promise<HelpData> => {
  const [pluginLatest, karinLatest] = await Promise.all([
    getRemoteVersion(dir.name),
    getRemoteVersion('node-karin'),
  ])
  return {
    ...helpData,
    version: pluginVersion,
    karinVersion,
    pluginLatest: pluginLatest && isNewerVersion(pluginLatest, pluginVersion) ? pluginLatest : undefined,
    karinLatest: karinLatest && isNewerVersion(karinLatest, karinVersion) ? karinLatest : undefined,
  }
}

export const help = karin.command(RE_HELP, async (e) => {
  /** 渲染耗时，先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)

  const image = await renderTemplateImage('qbot/help', await buildHelpData())
  /** QQBot：md 图片需公网直链，主动分片上传换取 COS 临时直链（ttl 86400s） */
  if (isQqbot(e)) {
    const uploaded = await uploadImageToCos(e.contact, e.selfId, image)
    await e.reply(segment.markdown(`![help](${uploaded})`))
    return true
  }
  await e.reply(segment.image(`base64://${image}`))
  return true
}, {
  name: 'qbot帮助',
  permission: 'all',
})

/** 更多管理面板：#qbot管理（主按钮面板的"更多管理"指向这里） */
export const manage = karin.command(RE_MANAGE, async (e) => {
  const botName = await getBotName(e)
  await e.reply(isQqbot(e)
    ? [
      segment.markdown(md`
          ### ${botName}管理
          > 点击按钮使用对应功能
        `),
      ...manageButtons(),
    ]
    : md`
      ${botName}更多管理
      #qbot切换         切换当前 bot（多应用）
      #qbot数据 [N]     最近 N 天数据统计
      #qbot模板         查看消息模板
      #qbot订阅         查看事件订阅
      #qbot统计         查看使用人数/群组数
      #qbot版本         查看插件版本
    `)
  return true
}, {
  name: 'qbot管理',
  permission: 'all',
})
