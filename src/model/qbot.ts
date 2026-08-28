import { karin, logger, segment, type Event, type KeyboardElement } from 'node-karin'
import { sleep } from '@/utils/common'

/**
 * QQ 开放平台网页端管理 API（对齐 QBot-Plugin 的 model/QBot.js）
 * 所有接口均需携带扫码登录获取的会话 Cookie：quin/quid/qticket
 */
export const QBot = {
  api: 'https://q.qq.com',
  bot: 'https://bot.q.qq.com',

  /**
   * 发起请求并解析 JSON
   * @param url 请求地址
   * @param method 请求方法
   * @param body 请求体
   * @param uin 开放平台主号
   * @param uid 开发者 ID
   * @param ticket 登录票据
   */
  async request (url: string, method: 'GET' | 'POST', body?: unknown, uin?: string, uid?: string, ticket?: string) {
    const headers: Record<string, string> = {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
    }
    if (uin && uid && ticket) headers.Cookie = `quin=${uin};quid=${uid};qticket=${ticket}`

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15_000)
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })
      const data = await response.json()
      logger.debug(`[QBot] ${method} ${url} => ${JSON.stringify(data)}`)
      return data
    } finally {
      clearTimeout(timer)
    }
  },

  /** 创建登录/授权二维码，返回 { qr, validTime }（qr 自带 markdown 反引号需清洗，validTime 为有效期秒数） */
  async getlogin (type: number, appId: string | null = null, uin?: string, uid?: string, ticket?: string) {
    const data = await this.request(
      `${this.api}/qrcode/create`,
      'POST',
      { type, miniAppId: appId },
      uin,
      uid,
      ticket,
    )
    const qr = data?.data?.QrCode?.replace(/`/g, '')
    if (!qr) return null
    return { qr, validTime: data?.data?.validTime ?? 300 }
  },

  /** 轮询二维码登录/授权状态 */
  async getqrcode (qrcode: string) {
    return this.request(`${this.api}/qrcode/get`, 'POST', { qrcode })
  },

  /** 获取开发者信息 */
  async getinfo (uin: string, uid: string, ticket: string) {
    return this.request(`${this.api}/pb/GetDeveloper`, 'GET', undefined, uin, uid, ticket)
  },

  /** 获取站内通知（站内私信） */
  async getnotice (uin: string, uid: string, ticket: string) {
    return this.request(
      `${this.api}/pb/AppFetchPrivateMsg`,
      'POST',
      { page_num: 0, page_size: 10, receiver: uid, appType: 2 },
      uin,
      uid,
      ticket,
    )
  },

  /** 获取开发者应用列表 */
  async getlists (uin: string, uid: string, ticket: string) {
    return this.request(
      `${this.api}/homepagepb/GetAppListForLogin`,
      'POST',
      { uin, developer_id: uid, ticket, app_type: [2] },
      uin,
      uid,
      ticket,
    )
  },

  /** 获取应用数据统计（type: 0频道 1消息 2群聊 3好友） */
  async getdau (uin: string, uid: string, ticket: string, appid: string, type: number) {
    return this.request(
      `${this.bot}/cgi-bin/datareport/read?bot_appid=${appid}&data_type=${type}&data_range=2&scene_id=1`,
      'GET',
      undefined,
      uin,
      uid,
      ticket,
    )
  },

  /** 获取消息模板列表 */
  async getmsg_tpl (uin: string, uid: string, ticket: string, appid: string) {
    return this.request(
      `${this.bot}/cgi-bin/msg_tpl/list`,
      'POST',
      { bot_appid: appid, limit: 30 },
      uin,
      uid,
      ticket,
    )
  },

  /** 获取事件订阅列表 */
  async getwhlist (uin: string, uid: string, ticket: string, appid: string) {
    return this.request(
      `${this.bot}/cgi-bin/event_subscirption/list_event`,
      'POST',
      { bot_appid: appid },
      uin,
      uid,
      ticket,
    )
  },

  /** 更新 IP 白名单，ip 传 0.0.0.0 表示停用 */
  async updateip (uin: string, uid: string, ticket: string, appid: string, ip: string, qrcode: string) {
    const disable = ip === '0.0.0.0'
    return this.request(
      `${this.bot}/cgi-bin/dev_info/update_white_ip_config`,
      'POST',
      {
        bot_appid: appid,
        ip_white_infos: { prod: { ip_list: disable ? [] : [ip], use: !disable } },
        qr_code: qrcode,
      },
      uin,
      uid,
      ticket,
    )
  },

  sleep: sleep as (ms: number) => Promise<void>,
}

/** 当前消息是否来自 QQ 官方机器人（开放平台协议），是则发送 markdown+keyboard，否则发送纯文本 */
export const isQqbot = (e: Event) => karin.getBot('qqbot', true)?.selfId === e.selfId

/**
 * 生成 QQBot 快捷按钮（回调按钮：点击静默触发命令，不展示指令文本；仅 qqbot 协议可用，由命令内 isQqbot 判断后附加）
 * 官方限制：最多 5 行、每行最多 5 个按钮；"更多管理"点击发送 #qbot管理，由管理面板展示更多功能
 */
export const qbotButtons = (): KeyboardElement[] => [
  segment.keyboard([
    [{ text: '管理登录', data: '#qbot登录', callback: true }],
    [{ text: '列表', data: '#qbot列表', callback: true }, { text: '数据', data: '#qbot数据' }, { text: '通知', data: '#qbot通知', callback: true }],
    [{ text: '更多管理', data: '#qbot管理', callback: true }],
  ]),
]

/** 管理面板快捷按钮（#qbot管理：切换/模板/订阅/统计/版本/帮助） */
export const manageButtons = (): KeyboardElement[] => [
  segment.keyboard([
    [{ text: '切换', data: '#qbot切换', callback: true }, { text: '模板', data: '#qbot模板', callback: true }, { text: '订阅', data: '#qbot订阅', callback: true }],
    [{ text: '统计', data: '#qbot统计', callback: true }, { text: '版本', data: '#qbot版本', callback: true }, { text: '帮助', data: '#qbot帮助', callback: true }],
  ]),
]