import type { OverviewData, PluginConfig, StatsData } from './types'

const BASE = '/api/v1/qbot'

/** 同源 iframe 内读取 Karin WebUI 的登录态（localStorage 键名与 karin 面板一致） */
const authHeaders = () => {
  const token = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')
  const headers: Record<string, string> = {}
  if (token) headers.Authorization = `Bearer ${token}`
  if (userId) headers['x-user-id'] = userId
  return headers
}

async function request<T> (path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
  })
  if (res.status === 401) throw new Error('登录态已过期，请刷新 Karin 面板后重试')
  const body = await res.json().catch(() => null)
  if (!res.ok || !body?.ok) throw new Error(body?.message || `请求失败（${res.status}）`)
  return body.data as T
}

/** 获取插件配置 */
export const getConfig = () => request<PluginConfig>('/config')

/** 保存插件配置 */
export const saveConfig = (data: PluginConfig) =>
  request<PluginConfig>('/config', { method: 'POST', body: JSON.stringify(data) })

/** 获取概览：已登录账号 + 本地统计 */
export const getOverview = () => request<OverviewData>('/overview')

/** 获取近 N 天数据（远端 DAU + 本地每日统计） */
export const getStats = (userId: string, day: number) =>
  request<StatsData>(`/stats?userId=${encodeURIComponent(userId)}&day=${day}`)
