import { karin, segment } from 'node-karin'
import { md } from '@/utils'
import { RE_WHLIST } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot, getBotName } from '@/model'
import { SubEvent } from '@/types/type'

/** 开放平台事件订阅列表：#qbot订阅 */
export const whlist = karin.command(RE_WHLIST, async (e) => {
  const login = await checkLogin(e)
  if (!login) return

  const data = await QBot.getwhlist(login.ck.uin, login.ck.developerId, login.ck.ticket, login.appId)
  const events = data?.data?.events ?? []
  if (!events.length) {
    return isQqbot(e)
      ? e.reply([segment.markdown('暂无事件订阅数据'), ...qbotButtons()])
      : e.reply('暂无事件订阅数据')
  }

  const grouped: Record<string, SubEvent[]> = {}
  for (const event of events) {
    ; (grouped[event.type] ??= []).push(event)
  }

  const botName = await getBotName(e)

  // 分类行（纯数据）
  const sections = Object.entries(grouped).map(([type, items]) => md`
    ${type}
    ${items.map((event) => `[${event.id}] ${event.name}${event.is_subscribed ? '（已订阅）' : undefined}`).join('\r')}
  `)

  // qqbot：markdown 标题/代码块 + 键盘按钮；其他：纯文本，无按钮
  if (isQqbot(e)) {
    return e.reply([
      segment.markdown(md`
        ### ${botName}事件订阅
        \`\`\`
        ${sections.map((s) => s.split('\r').map((l) => `${l}`).join('\r')).join('\r\r---\r')}
        \`\`\`
      `),
      ...qbotButtons(),
    ])
  }
  return e.reply(md`
    ${botName}事件订阅
    ${sections.join('\r\r---\r')}
  `)
}, {
  name: 'qbot订阅',
  permission: 'all',
})
