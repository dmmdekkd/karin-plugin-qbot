import { karin, segment } from 'node-karin'
import { md } from '@/utils'
import { RE_UPIP } from '@/utils/constants'
import { checkLogin, createQr, QBot, isQqbot, qbotButtons, getBotName } from '@/model'

/** 获取本机公网 IP */
const getPublicIp = async () => {
  const res = await fetch('https://ip.3322.net/')
  return (await res.text()).trim()
}

/** 开放平台更新 IP 白名单：#qbot更新ip [IP]（仅私聊） */
export const upip = karin.command(RE_UPIP, async (e) => {
  const login = await checkLogin(e)
  if (!login) return
  const botName = await getBotName(e)

  if (e.isGroup) {
    return e.reply(isQqbot(e) ? segment.markdown('当前命令仅支持私聊,请私聊使用') : '当前命令仅支持私聊,请私聊使用')
  }

  const [, ip] = e.msg.match(RE_UPIP) ?? []
  let target = ip
  if (!target) {
    if (e.isMaster) target = await getPublicIp()
    else {
      return e.reply(isQqbot(e) ? segment.markdown('须手动拼接IP地址 #qbot更新ip 11.11.11.11') : '须手动拼接IP地址 #qbot更新ip 11.11.11.11')
    }
  }

  const { ck, appId } = login
  const { qr, link } = await createQr(51, appId, ck)

  // qqbot：markdown 文本 + keyboard 授权按钮；其他：纯文本 + 明文链接
  if (isQqbot(e)) {
    await e.reply([
      segment.markdown(md`
        ### QQ开放平台授权
        > 授权具有时效性, 请尽快授权
        > 当你选择授权
        > 代表你已经同意将数据托管给${botName}Bot
      `),
      segment.keyboard([[{ text: '点击授权', link }]]),
    ])
  } else {
    await e.reply(md`
      QQ开放平台授权
      授权具有时效性, 请尽快授权
      当你选择授权
      代表你已经同意将数据托管给${botName}Bot
      ${link}
    `)
  }

  let i = 0
  while (i < 20) {
    const res = await QBot.getqrcode(qr)
    if (res?.code === 0) {
      const data = res.data?.data
      await QBot.updateip(ck.uin, ck.developerId, ck.ticket, appId, target, qr)
      if (isQqbot(e)) {
        return e.reply([
          segment.markdown(md`
            ### ${res.message}
            > 授权人：${data?.uin}
            > 已设置IP：**${target}**
          `),
          ...qbotButtons(),
        ])
      }
      return e.reply(md`
        ${res.message}
        授权人：${data?.uin}
        已设置IP：${target}
      `)
    }
    i++
    await QBot.sleep(3000)
  }
  return isQqbot(e)
    ? e.reply([segment.markdown('授权失效'), ...qbotButtons()])
    : e.reply('授权失效')
}, {
  name: 'qbot更新IP',
  permission: 'all',
})
