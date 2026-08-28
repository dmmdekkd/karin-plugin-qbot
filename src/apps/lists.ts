import { karin, segment } from 'node-karin'
import { md } from '@/utils'
import { RE_LIST } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot } from '@/model'
import { AppInfo, AppStatusMap, AppTypeMap } from '@/types/type'

/** 开放平台应用列表：#qbot列表 */
export const lists = karin.command(RE_LIST, async (e) => {
  const login = await checkLogin(e)
  if (!login) return

  const data = await QBot.getlists(login.ck.uin, login.ck.developerId, login.ck.ticket)
  const apps: AppInfo[] = data?.data?.apps ?? []
  if (!apps.length) {
    return isQqbot(e)
      ? e.reply([segment.markdown('没有数据哦～ (๑•́ω•̀๑)'), ...qbotButtons()])
      : e.reply('没有数据哦～ (๑•́ω•̀๑)')
  }

  // 类型与标题取当前管理应用（切换指针），查不到时回退第一个；名称缺失时不加前缀
  const current = apps.find((app) => String(app.app_id) === login.appId) ?? apps[0]
  const types = AppTypeMap[current.app_type]
  const botName = current.app_name || ''

  // 应用文本行（状态/描述查不到映射或为空则不显示该行）
  const appRows = apps.map((app) => [
    app.app_name,
    `ID: ${app.app_id}`,
    AppStatusMap[app.bot_status],
    app.app_desc,
  ].filter(Boolean).join('\r'))

  // 应用文本直接用，代码块内原样换行，应用之间用分割线隔开
  const body = appRows.join('\r\r---\r')

  // qqbot：markdown + 键盘按钮；其他：纯文本
  return isQqbot(e)
    ? e.reply([
      segment.markdown(md`
          ### ${botName}账号列表
          >共 **${apps.length} 个应用** 
          >类型：${types}
          \`\`\`
          ${body}
          \`\`\`
        `),
      ...qbotButtons(),
    ])
    : e.reply(md`
        ${botName}账号列表
        共 ${apps.length} 个应用 
        ${types}
        ${body}
      `)
}, {
  name: 'qbot列表',
  permission: 'all',
})
