import { karin, segment } from 'node-karin'
import { config, md, fmtDate } from '@/utils'
import { RE_DATA } from '@/utils/constants'
import { checkLogin, QBot, qbotButtons, isQqbot, getBotName } from '@/model'
import type { DauDay, DauFriend, DauGroup, DauGuild } from '@/types/type'

/** 单日四类数据 → 多行文本（消息/群聊/好友/频道），缺失项显示 - */
const formatRow = (m?: DauDay, g?: DauGroup, f?: DauFriend, qd?: DauGuild) => md`
  ${fmtDate(m?.report_date)}
  消息  上行:${m?.up_msg_cnt ?? '-'}  人数:${m?.up_msg_uv ?? '-'}  下行:${m?.down_msg_cnt ?? '-'}  总:${m?.bot_msg_cnt ?? '-'}  留存:${m?.next_day_retention == null ? '-' : `${m.next_day_retention}%`}
  群聊  存在:${g?.existing_groups ?? '-'}  使用:${g?.used_groups ?? '-'}  新添:${g?.added_groups ?? '-'}  新移:${g?.removed_groups ?? '-'}
  好友  存在:${f?.stock_added_friends ?? '-'}  使用:${f?.used_friends ?? '-'}  新添:${f?.new_added_friends ?? '-'}  新移:${f?.new_removed_friends ?? '-'}
  频道  存在:${qd?.in_guild_cnt ?? '-'}  使用:${qd?.used_guild_cnt ?? '-'}  新添:${qd?.add_guild_cnt ?? '-'}  新移:${qd?.removed_guild_cnt ?? '-'}
`
export const dau = karin.command(RE_DATA, async (e) => {
  const login = await checkLogin(e)
  if (!login) return
  const { ck, appId } = login
  const [, daysArg] = e.msg.match(RE_DATA) ?? []
  const days = Math.min(daysArg ? parseInt(daysArg) : config().qbot.day, 30)

  const read = (type: number) => QBot.getdau(ck.uin, ck.developerId, ck.ticket, appId, type)
  const [guildRes, msgRes, groupRes, friendRes] = await Promise.all([read(0), read(1), read(2), read(3)])
  const qg_data: DauGuild[] = guildRes?.data?.guild_data ?? []
  const msg_data: DauDay[] = msgRes?.data?.msg_data ?? []
  const group_data: DauGroup[] = groupRes?.data?.group_data ?? []
  const friend_data: DauFriend[] = friendRes?.data?.friend_data ?? []

  const totalDays = msg_data.length
  const upUv = msg_data.reduce((sum, day) => sum + day.up_msg_uv, 0)
  const avg = (totalDays > 0 ? upUv / totalDays : 0).toFixed(2)

  const botName = await getBotName(e)
  const rows = Array.from({ length: days }, (_, i) => formatRow(msg_data[i], group_data[i], friend_data[i], qg_data[i]))
  if (isQqbot(e)) {
    return e.reply([
      segment.markdown(md`
        ### ${botName}数据统计
        > **最近${days}天数据概览**

        \`\`\`
        ${rows.join('\r\r---\r')}
        \`\`\`

        > 近${totalDays}天平均活跃：**${avg} 人**
      `),
      ...qbotButtons(),
    ])
  }
  return e.reply(md`
    ${botName}数据统计
    最近${days}天数据概览
    ${rows.join('\r\r---\r')}
    近${totalDays}天平均活跃：${avg} 人
  `)
}, {
  name: 'QBot数据',
  permission: 'all',
})
