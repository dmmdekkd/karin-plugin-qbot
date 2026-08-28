import { useEffect, useState } from 'react'
import { getOverview } from '../api'
import type { OverviewData } from '../types'

const fmt = (n: number): string => n.toLocaleString('zh-CN')

export default function OverviewTab () {
  const [data, setData] = useState<OverviewData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOverview()
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="qbot-loading">加载中...</div>

  if (error) {
    return (
      <div className="t-alert t-alert--error" style={{ marginTop: 16 }}>
        <div className="t-alert__content">
          <div className="t-alert__message">
            <div className="t-alert__description">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  const accounts = data?.accounts ?? []
  const stats = data?.stats ?? []

  if (!accounts.length) {
    return (
      <div className="t-alert t-alert--warning" style={{ marginTop: 16 }}>
        <div className="t-alert__content">
          <div className="t-alert__message">
            <div className="t-alert__description">
              尚未登录 QQ 开放平台哦～ 请在机器人对话里发送「#qbot登录」开始配置，完成后点击右上角「刷新」。
            </div>
          </div>
        </div>
      </div>
    )
  }

  const totals = stats.reduce(
    (acc, s) => ({
      total: acc.total + s.total,
      todayMsg: acc.todayMsg + s.todayMsg,
      todayDau: Math.max(acc.todayDau, s.todayDau),
      users: acc.users + s.users,
      groups: acc.groups + s.groups,
    }),
    { total: 0, todayMsg: 0, todayDau: 0, users: 0, groups: 0 },
  )

  return (
    <div className="qbot-tab-body">
      <div className="qbot-overview-grid">
        {/* 账号卡片：两列网格，仅一个账号时占满整行 */}
        {accounts.map(account => (
          <div className={`qbot-card ${accounts.length === 1 ? 'is-span-full' : ''}`} key={account.userId}>
            <div className="qbot-card-header">
              <div className="qbot-card-title">
                <span className="config-name">{account.userId}</span>
                <span className="qbot-card-sub">扫码登录的用户</span>
              </div>
              <span className="t-tag t-tag--success t-tag--light">已登录</span>
            </div>
            <div className="qbot-app-list">
              {account.apps.map(app => {
                const current = String(app.app_id) === account.appId
                return (
                  <div className={`qbot-app-item ${current ? 'is-current' : ''}`} key={String(app.app_id)}>
                    <span className="qbot-app-check">{current ? '✔' : ''}</span>
                    <span className="qbot-app-name">{app.app_name || String(app.app_id)}</span>
                    <span className="qbot-app-id">ID: {String(app.app_id)}</span>
                    {current && <span className="t-tag t-tag--primary t-tag--light t-size-s">当前</span>}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* 本地统计：跨全列铺满 */}
        <div className="qbot-card is-span-full">
          <div className="qbot-card-header">
            <div className="qbot-card-title">
              <span className="config-name">本地统计</span>
              {stats.length > 0 && (
                <span className="qbot-card-sub">{stats.length} 个机器人 · 每日自动累计</span>
              )}
            </div>
            <span className={`t-tag t-size-s ${stats.length ? 't-tag--success t-tag--light' : 't-tag--default'}`}>
              {stats.length ? '统计运行中' : '暂无数据'}
            </span>
          </div>
          <div className="qbot-stats-grid">
            <div className="qbot-stat">
              <div className="qbot-stat-value">{fmt(totals.total)}</div>
              <div className="qbot-stat-label">累计消息</div>
            </div>
            <div className="qbot-stat">
              <div className="qbot-stat-value">{fmt(totals.todayMsg)}</div>
              <div className="qbot-stat-label">今日消息</div>
            </div>
            <div className="qbot-stat">
              <div className="qbot-stat-value">{fmt(totals.todayDau)}</div>
              <div className="qbot-stat-label">今日活跃用户</div>
            </div>
            <div className="qbot-stat">
              <div className="qbot-stat-value">{fmt(totals.users)}</div>
              <div className="qbot-stat-label">累计用户</div>
            </div>
            <div className="qbot-stat">
              <div className="qbot-stat-value">{fmt(totals.groups)}</div>
              <div className="qbot-stat-label">群组数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
