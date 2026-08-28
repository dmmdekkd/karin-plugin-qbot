import { karin, segment, type Message } from 'node-karin'
import { md } from '@/utils'
import type { AppItem, AppRow } from '@/types/type'
import { RE_SWITCH } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot, switchApp } from '@/model'

/** 群聊按钮仅本人可点，私聊不加权限（加了会导致按钮无权限） */
const ownerLimit = (e: Message) => (e.isGroup ? { list: [e.userId] } : {})

/** 应用列表 → 面板行与按钮（当前使用加 ✔ 前缀） */
const buildRows = (apps: string[], all: AppItem[], currentAppId: string) => {
  const rows: AppRow[] = apps.map((id) => {
    const app = all.find((a) => String(a.app_id) === id)
    return { id, name: app?.app_name || id, current: id === currentAppId }
  })
  const text = rows.map((r) => `${r.current ? '✔' : '·'} ${r.name}（${r.id}）`).join('\r')
  const buttons = rows.map((r) => ({
    text: `${r.current ? '✔ ' : ''}${r.name}`,
    data: `#qbot切换 ${r.id}`,
    callback: true,
  }))
  const keyboard: typeof buttons[] = []
  for (let i = 0; i < buttons.length; i += 2) keyboard.push(buttons.slice(i, i + 2))
  return { text, keyboard }
}

/** 开放平台多应用切换：#qbot切换（面板）/ #qbot切换 <appId>（按钮回调） */
export const switchBot = karin.command(RE_SWITCH, async (e) => {
  const login = await checkLogin(e)
  if (!login) return

  const [, appId] = e.msg.match(RE_SWITCH) ?? []

  // 带参：按钮回调，切换当前激活 bot
  if (appId) {
    const ck = await switchApp(e.userId, appId)
    if (!ck) {
      return e.reply(isQqbot(e)
        ? [segment.markdown('切换失败，该应用还没有登录哦～ (๑•́ω•̀๑)'), ...qbotButtons()]
        : '切换失败，该应用还没有登录哦～ (๑•́ω•̀๑)')
    }
    const data = await QBot.getlists(ck.uin, ck.developerId, ck.ticket)
    const name = data?.data?.apps?.find((app: AppItem) => String(app.app_id) === appId)?.app_name || appId
    return e.reply(isQqbot(e)
      ? [segment.markdown(md`
        ### 切换成功
        > 当前 bot：**${name}**
      `), ...qbotButtons()]
      : md`
        切换成功
        当前 bot：${name}
      `)
  }

  // 无参：展示切换面板（开发者名下所有应用）
  const data = await QBot.getlists(login.ck.uin, login.ck.developerId, login.ck.ticket)
  const all = data?.data?.apps ?? []
  const apps = all.map((app: AppItem) => String(app.app_id))
  if (apps.length <= 1) {
    return e.reply(isQqbot(e)
      ? [segment.markdown('只有一个 bot，不需要切换哦～ (๑•́ω•̀๑)'), ...qbotButtons()]
      : '只有一个 bot，不需要切换哦～ (๑•́ω•̀๑)')
  }

  const { text, keyboard } = buildRows(apps, all, login.appId)

  return e.reply(isQqbot(e)
    ? [
      segment.markdown(md`
        ### bot切换
        > 点击按钮切换当前使用的 bot
        \`\`\`
        ${text}
        \`\`\`
      `),
      segment.keyboard(keyboard.map((row) => row.map((btn) => ({ ...btn, ...ownerLimit(e) })))),
    ]
    : md`
      bot切换
      发送 #qbot切换 <appId> 切换当前 bot
      ${text}
    `)
}, {
  name: 'qbot切换',
  permission: 'all',
})
