import { karin, segment } from 'node-karin'
import type { HelpData } from '../../ktr/template/qbot/help/types'
import helpData from '../../ktr/template/qbot/help/data/default.json'
import { dir } from '@/dir'
import { RE_HELP, RE_MANAGE } from '@/utils/constants'
import { isQqbot, getBotName, manageButtons } from '@/model'
import { md } from '@/utils'
import { renderTemplateImage } from '@/utils/render'
import { setMarkdownImageContext } from './fileurl'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'

/**
 * 帮助页面数据统一维护在 ktr/template/qbot/help/data/default.json
 * （同一份 JSON 也是 ktr 开发面板的 mock 数据），此处仅注入真实插件版本。
 * item.icon 与 ktr/template/qbot/help/components/icons.tsx 对应。
 */
const data: HelpData = { ...helpData, version: dir.version }

/**
 * 渲染帮助页面图片（ktr React 模板，HeroUI 原生风格，明暗按昼夜自动切换）
 * @returns 图片 base64，渲染失败直接抛出
 */
const renderHelpImage = (): Promise<string> => {
  return renderTemplateImage('qbot/help', data)
}

export const help = karin.command(RE_HELP, async (e) => {
  /** 渲染耗时，先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)

  const image = await renderHelpImage()
  /** QQBot：md 图片需公网直链，登记会话后由 file-to-url.ts 借分片上传换取临时直链 */
  if (isQqbot(e)) {
    const clear = setMarkdownImageContext(e.contact, e.selfId)
    try {
      await e.reply(segment.markdown(`![help](${image})`))
    } finally {
      clear()
    }
    return true
  }
  await e.reply(segment.image(image))
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
