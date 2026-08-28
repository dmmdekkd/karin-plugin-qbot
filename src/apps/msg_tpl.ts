import { karin, segment } from 'node-karin'
import { md } from '@/utils'
import { RE_MSG_TPL } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot, getBotName } from '@/model'
import { TplStatusMap, TplTypeMap } from '@/types/type'
import type { MsgTplResp } from '@/types/type'

/** 开放平台消息模板列表：#qbot模板 */
export const msg_tpl = karin.command(RE_MSG_TPL, async (e) => {
  const login = await checkLogin(e)
  if (!login) return

  const data: MsgTplResp | undefined = await QBot.getmsg_tpl(login.ck.uin, login.ck.developerId, login.ck.ticket, login.appId)
  const tpls = data?.data?.list ?? []
  if (!tpls.length) {
    return isQqbot(e)
      ? e.reply([segment.markdown('没有数据哦～ (๑•́ω•̀๑)'), ...qbotButtons()])
      : e.reply('没有数据哦～ (๑•́ω•̀๑)')
  }

  const botName = await getBotName(e)

  // 模板行（纯数据）
  const tplRows: string[] = tpls.map((tpl) => md`
    ${tpl.tpl_name}
    ID: ${tpl.tpl_id}
    类型: ${TplTypeMap[tpl.tpl_type] || `未知(${tpl.tpl_type})`}
    状态: ${TplStatusMap[tpl.status] || `未知(${tpl.status})`}
  `)

  // qqbot：markdown 标题/加粗/代码块 + 键盘按钮；其他：纯文本，无按钮
  if (isQqbot(e)) {
    return e.reply([
      segment.markdown(md`
        ### ${botName}消息模板
        > 共 **${tpls.length}/${data?.data?.max_msg_tpl_count ?? '-'} 个模板**
        \`\`\`
        ${tplRows.join('\r\r---\r')}
        \`\`\`
      `),
      ...qbotButtons(),
    ])
  }
  return e.reply(md`
    ${botName}消息模板
    共 ${tpls.length}/${data?.data?.max_msg_tpl_count ?? '-'} 个模板
    ${tplRows.join('\r\r---\r')}
  `)
}, {
  name: 'qbot模板',
  permission: 'all',
})
