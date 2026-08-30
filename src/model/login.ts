import { db, logger, segment, type Message } from 'node-karin'
import { md } from '@/utils'
import { KV_APPID, KV_COOKIE } from '@/utils/constants'
import type { AppItem, QBotCookie } from '@/types/type'
import { QBot, isQqbot, qbotButtons } from './qbot'

/** 保存登录票据（票据为开发者账号级，同一账号名下应用通用） */
export const storeCookies = async (userId: string, cookies: QBotCookie) => {
  await db.set(KV_COOKIE(userId, cookies.appId), cookies)
  await db.set(KV_APPID(userId), cookies.appId)
  logger.info(`[QBot] ${userId} 登录成功，appId=${cookies.appId}`)
}

/** 获取某个用户的登录票据 */
export const getCookies = async (userId: string) => {
  const appId = await db.get<string>(KV_APPID(userId))
  if (!appId) return null
  // 指针应用的票据键不存在时，复用任意一份已有票据（账号级通用）
  const ck = await db.get<QBotCookie>(KV_COOKIE(userId, appId)) ?? await reuseCookie(userId, appId)
  return ck ? { ck, appId } : null
}

/** 复用任意已有票据并补建指针应用的票据副本 */
const reuseCookie = async (userId: string, appId: string) => {
  const list = await db.keys(KV_COOKIE(userId, '%'))
  for (const key of list) {
    const ck = await db.get<QBotCookie>(key)
    if (ck) {
      const copied = { ...ck, appId }
      await db.set(KV_COOKIE(userId, appId), copied)
      return copied
    }
  }
  return null
}

/** 校验票据是否仍有效（通过数据接口验证 retcode===0） */
export const validateCookies = async (ck: QBotCookie) => {
  try {
    const data = await QBot.getdau(ck.uin, ck.developerId, ck.ticket, ck.appId, 0)
    return data?.retcode === 0
  } catch {
    return false
  }
}

/** 创建二维码，返回 { qr, link, validTime }（type: 777 登录 / 51 授权，validTime 为二维码有效期秒数） */
export const createQr = async (type = 777, appId: string | null = null, ck?: QBotCookie | null) => {
  const data = await QBot.getlogin(type, appId, ck?.uin, ck?.developerId, ck?.ticket)
  if (!data) throw new Error('创建二维码失败，请稍后重试')
  const { qr, validTime } = data
  const link = type === 51
    ? `https://q.qq.com/qrcode/check?client=qq&code=${qr}&ticket=${ck?.ticket}`
    : `https://q.qq.com/login/applist?code=${qr}`
  return { qr, link, validTime }
}

/** 轮询二维码，直到登录成功或超时（按二维码有效期 validTime 秒数计算，每 3 秒查一次） */
export const pollQr = async (qr: string, validTime = 300) => {
  const maxRetry = Math.max(1, Math.floor((validTime * 1000) / 3000))
  for (let i = 0; i < maxRetry; i++) {
    const res = await QBot.getqrcode(qr)
    if (res?.code === 0 && res.data?.data) return res.data.data as QBotCookie
    await QBot.sleep(3000)
  }
  return null
}

/**
 * 完整登录流程：发送登录引导（qqbot 按钮/文本链接）→ 轮询扫码 → 存储票据 → 回复结果
 * 返回扫码得到的票据，超时未扫返回 null
 */
export const runLogin = async (e: Message) => {
  const data = await createQr(777)

  // qqbot：markdown 文本 + keyboard 登录按钮；其他：纯文本 + 明文链接（保留消息ID用于撤回）
  const guideMsg = await (isQqbot(e)
    ? e.reply([
      segment.markdown(md`
        ${e.isGroup ? `<qqbot-at-user id="${e.userId}" />` : undefined}
        ### QQ开放平台管理端登录
        > 登录具有时效性, 请尽快登录
         ---
        > 当你选择登录
        > 代表你已经同意将数据托管给${e.bot.selfName}Bot
      `),
      // 群聊：仅发起人可点；私聊：不加权限（加了会导致按钮无权限）
      segment.keyboard([[{ text: '登录', link: data.link, style: 4, ...(e.isGroup ? { list: [e.userId] } : {}) }]]),
    ])
    : e.reply([
      segment.at(e.userId),
      md`
        QQ开放平台管理端登录
        登录具有时效性, 请尽快登录
        当你选择登录
        代表你已经同意将数据托管给${e.bot.selfName}Bot
        ${data.link}
      `,
    ]))

  const cookies = await pollQr(data.qr)
  if (!cookies) {
    // 撤回登录引导，超时后二维码已失效，防止他人继续扫码
    await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => { })
    await (isQqbot(e)
      ? e.reply([segment.markdown('登录失效'), ...qbotButtons()])
      : e.reply('登录失效'))
    return null
  }

  // 校验扫码人：仅群聊判断，扫码返回的 QQ 号须与发起人一致，防止他人转发链接代扫
  // 任一侧拿不到 QQ 号（uin 缺失，如 openid 场景）则跳过校验，信任按钮 list 权限
  if (e.isGroup && cookies.uin && e.sender.uin && String(cookies.uin) !== String(e.sender.uin)) {
    // 撤回登录引导，防止他人继续扫码（部分平台不支持撤回，忽略失败）
    await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => { })
    await (isQqbot(e)
      ? e.reply([segment.markdown('诶？这不是你的登录哦 (＞﹏＜)'), ...qbotButtons()])
      : e.reply('诶？这不是你的登录哦 (＞﹏＜)'))
    return null
  }

  await storeCookies(e.userId, cookies)
  // 撤回登录引导（含二维码/按钮），登录成功后二维码即刻失效
  await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => { })
  await (isQqbot(e)
    ? e.reply([
      segment.markdown(md`
        ### 登录成功
        > AppID: ${cookies.appId}
      `),
      ...qbotButtons(),
    ])
    : e.reply(md`
      登录成功
      AppID: ${cookies.appId}
    `))
  return cookies
}

/**
 * 校验登录态：有效返回登录数据；从未登录或票据失效则现场引导扫码登录。
 * 登录成功仅回复登录结果，不再把新票据交还给原命令继续执行——
 * 避免指令调用登录后再次执行触发登录的那条指令；需要查询请让用户重新发送指令。
 * 登录失败返回 null
 */
export const checkLogin = async (e: Message) => {
  const stored = await getCookies(e.userId)
  if (stored && await validateCookies(stored.ck)) return stored

  // 现场引导登录：成功后只保留 runLogin 内部的登录结果回复，结束流程
  await runLogin(e)
  return null
}

/** 获取当前管理 bot 名称（指针应用名），未登录或查询失败时回退适配器昵称 */
export const getBotName = async (e: Message) => {
  try {
    const stored = await getCookies(e.userId)
    if (!stored) return e.bot.selfName
    const data = await QBot.getlists(stored.ck.uin, stored.ck.developerId, stored.ck.ticket)
    const apps = data?.data?.apps ?? []
    return apps.find((app: AppItem) => String(app.app_id) === stored.appId)?.app_name || e.bot.selfName
  } catch {
    return e.bot.selfName
  }
}

/**
 * 切换当前管理 bot（更新 KV_APPID 指针，数据命令自动跟随）
 * 校验 appId 在开发者名下应用列表（getlists）中，票据账号级通用，失败返回 null
 */
export const switchApp = async (userId: string, appId: string) => {
  const stored = await getCookies(userId)
  if (!stored) return null
  const data = await QBot.getlists(stored.ck.uin, stored.ck.developerId, stored.ck.ticket)
  const apps = data?.data?.apps ?? []
  if (!apps.some((app: AppItem) => String(app.app_id) === appId)) return null
  const ck = { ...stored.ck, appId }
  await db.set(KV_COOKIE(userId, appId), ck)
  await db.set(KV_APPID(userId), appId)
  return ck
}