import { karin, segment } from 'node-karin'
import { dir } from '@/dir'
import { RE_HELP, RE_MANAGE } from '@/utils/constants'
import { isQqbot, getBotName, manageButtons } from '@/model'
import { md } from '@/utils'

export const help = karin.command(RE_HELP, async (e) => {
  await e.reply(isQqbot(e)
    ? segment.markdown(md`
      ### ${dir.name} v${dir.version} 帮助菜单

      统计
        #qbot统计              查看使用人数/群组数

      开放平台（需先 #qbot登录）
        #qbot登录              扫码登录 QQ 开放平台管理端
        #qbot列表              查看应用列表
        #qbot切换              切换当前 bot（多应用）
        #qbot数据 [N]          最近 N 天数据统计
        #qbot通知              查看站内通知
        #qbot订阅              查看事件订阅
        #qbot模板              查看消息模板
        #qbot更新ip [IP]       更新 IP 白名单（仅私聊）

      维护
        #qbot版本              查看插件版本
        #qbot更新              更新插件
        #qbot更新日志          查看更新日志
    `)
    : md`
      ${dir.name} v${dir.version} 帮助菜单

      统计
        #qbot统计              查看使用人数/群组数

      开放平台（需先 #qbot登录）
        #qbot登录              扫码登录 QQ 开放平台管理端
        #qbot列表              查看应用列表
        #qbot切换              切换当前 bot（多应用）
        #qbot数据 [N]          最近 N 天数据统计
        #qbot通知              查看站内通知
        #qbot订阅              查看事件订阅
        #qbot模板              查看消息模板
        #qbot更新ip [IP]       更新 IP 白名单（仅私聊）

      维护
        #qbot版本              查看插件版本
        #qbot更新              更新插件
        #qbot更新日志          查看更新日志
    `)
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
