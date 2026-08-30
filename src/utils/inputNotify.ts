import { logger } from 'node-karin'
import type { Contact } from 'node-karin'

/** adapter-qqbot 裸请求入口（仅声明本工具用到的部分） */
interface RequestApiLike {
  post (path: string, body?: Record<string, unknown>): Promise<unknown>
}

/** adapter-qqbot bot 的最小结构（super.request 裸请求入口） */
export interface QQBotLike {
  selfId: string
  adapter?: { protocol?: string }
  super?: { request?: RequestApiLike }
}

/**
 * 发送 QQ 官方「输入状态通知」（msg_type=6），仅支持私聊场景：
 * 好友会话气泡区显示"对方正在输入中…"，适合耗时操作开始前调用。
 * 官方无「结束输入」字段（input_second=0 不生效），固定持续 4 秒自然结束；
 * 群聊及非 qqbot 协议静默跳过，失败降级为 debug 日志，不影响主流程。
 *
 * @param bot 当前事件的 bot（需为 qqbot 协议）
 * @param contact 目标会话（仅 friend 生效），peer 即 openid
 */
export const sendInputNotify = async (
  bot: QQBotLike,
  contact: Contact,
): Promise<void> => {
  const request = bot.super?.request
  /** 官方输入状态仅在单聊场景下发，私聊（friend）之外一律跳过 */
  if (!request || contact.scene !== 'friend') return
  const path = `/v2/users/${contact.peer}/messages`
  logger.debug(`[qbot输入状态] 发送中: ${path} 持续4s`)
  try {
    await request.post(path, {
      msg_type: 6,
      input_notify: { input_type: 1, input_second: 4 },
    })
    logger.debug(`[qbot输入状态] 发送成功: ${path}`)
  } catch (error) {
    logger.debug(`[qbot输入状态] 发送失败已忽略: ${error instanceof Error ? error.message : String(error)}`)
  }
}