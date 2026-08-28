import { karin, segment } from 'node-karin'
import { md, fmtTime } from '@/utils'
import { RE_OPEN_NOTICE } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot, getBotName } from '@/model'
import { NoticeMsg } from '@/types/type'

/** 开放平台站内通知：#qbot通知 */
export const notify = karin.command(RE_OPEN_NOTICE, async (e) => {
  const login = await checkLogin(e)
  if (!login) return

  const data = await QBot.getnotice(login.ck.uin, login.ck.developerId, login.ck.ticket)
  const notices = data?.data?.privateMsgs ?? []
  if (!notices.length) {
    return isQqbot(e)
      ? e.reply([segment.markdown('没有数据哦～ (๑•́ω•̀๑)'), ...qbotButtons()])
      : e.reply('没有数据哦～ (๑•́ω•̀๑)')
  }

  const botName = await getBotName(e)

  // 通知行（纯数据）
  const noticeRows: string[] = notices.map((msgs: NoticeMsg, index: number) => {
    const title = msgs.title.replace(/<[^>]*>?/gm, '')
    return md`
      通知 ${index + 1}
      标题：${title}
      时间：${fmtTime(msgs.send_time)}
    `
  })

  // qqbot：markdown 标题/加粗/代码块 + 键盘按钮；其他：纯文本，无按钮
  if (isQqbot(e)) {
    return e.reply([
      segment.markdown(md`
        ### ${botName}通知
        > 共 **${notices.length} 条通知**
        \`\`\`
        ${noticeRows.map((r) => r.split('\r').map((l) => `${l}`).join('\r')).join('\r\r---\r')}
        \`\`\`
      `),
      ...qbotButtons(),
    ])
  }
  return e.reply(md`
    ${botName}通知
    共 ${notices.length} 条通知
    ${noticeRows.join('\r\r---\r')}
  `)
}, {
  name: 'qbot通知',
  permission: 'all',
})
