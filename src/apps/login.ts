import { karin } from 'node-karin'
import { RE_LOGIN } from '@/utils/constants'
import { runLogin } from '@/model'

/**
 * 开放平台登录：#qbot登录
 * 发送二维码链接/按钮 → 用户扫码 → 轮询获取票据存入 KV
 */
export const login = karin.command(RE_LOGIN, async (e) => {
  await runLogin(e)
}, {
  name: 'qbot登录',
  permission: 'all',
})
