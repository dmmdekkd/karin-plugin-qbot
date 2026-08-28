import { useEffect, useMemo, useState } from 'react'
import { getOverview, getStats } from '../api'
import type { StatsData, WebAccount } from '../types'

interface MergeRow {
  date: string
  upMsg: number
  upUv: number
  downMsg: number
  groups: number
  usedGroups: number
  addedGroups: number
  friends: number
  newFriends: number
  guilds: number
  usedGuilds: number
  localMsg: number
  localDau: number
}

const num = (v: unknown): number => typeof v === 'number' && Number.isFinite(v) ? v : 0
const fmt = (v: unknown): string => {
  const n = num(v)
  return n || v === 0 ? n.toLocaleString('zh-CN') : '-'
}

/** 把远端四类 DAU 与本地统计按日期合并成一张表 */
function mergeRows (data: StatsData): MergeRow[] {
  const map = new Map<string, MergeRow>()
  const ensure = (date: string): MergeRow => {
    let row = map.get(date)
    if (!row) {
      row = {
        date, upMsg: 0, upUv: 0, downMsg: 0,
        groups: 0, usedGroups: 0, addedGroups: 0,
        friends: 0, newFriends: 0, guilds: 0, usedGuilds: 0,
        localMsg: 0, localDau: 0,
      }
      map.set(date, row)
    }
    return row
  }
  for (const r of data.remote.msg) ensure(String(r.report_date)).upMsg = num(r.up_msg_cnt)
  for (const r of data.remote.msg) ensure(String(r.report_date)).upUv = num(r.up_msg_uv)
  for (const r of data.remote.msg) ensure(String(r.report_date)).downMsg = num(r.down_msg_cnt)
  for (const r of data.remote.group) {
    const row = ensure(String(r.report_date))
    row.groups = num(r.existing_groups)
    row.usedGroups = num(r.used_groups)
    row.addedGroups = num(r.added_groups)
  }
  for (const r of data.remote.friend) {
    const row = ensure(String(r.report_date))
    row.friends = num(r.stock_added_friends)
    row.newFriends = num(r.new_added_friends)
  }
  for (const r of data.remote.guild) {
    const row = ensure(String(r.report_date))
    row.guilds = num(r.in_guild_cnt)
    row.usedGuilds = num(r.used_guild_cnt)
  }
  for (const r of data.local) {
    const row = ensure(String(r.date))
    row.localMsg = num(r.msg)
    row.localDau = num(r.dau)
  }
  return [...map.values()].sort((a, b) => a.date.localeCompare(b.date))
}

const COLUMNS: { key: keyof MergeRow; label: string }[] = [
  { key: 'date', label: '日期' },
  { key: 'upMsg', label: '主动消息' },
  { key: 'upUv', label: '主动人数' },
  { key: 'downMsg', label: '被动消息' },
  { key: 'groups', label: '现有群' },
  { key: 'usedGroups', label: '活跃群' },
  { key: 'addedGroups', label: '新增群' },
  { key: 'friends', label: '累计好友' },
  { key: 'newFriends', label: '新增好友' },
  { key: 'guilds', label: '加入频道' },
  { key: 'usedGuilds', label: '活跃频道' },
  { key: 'localMsg', label: '本地消息' },
  { key: 'localDau', label: '本地活跃' },
]

export default function StatsTab () {
  const [accounts, setAccounts] = useState<WebAccount[]>([])
  const [userId, setUserId] = useState('')
  const [day, setDay] = useState('7')
  const [data, setData] = useState<StatsData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOverview()
      .then(ov => {
        setAccounts(ov.accounts)
        if (ov.accounts.length) setUserId(ov.accounts[0].userId)
        else setError('尚未登录 QQ 开放平台哦～ 请先在机器人对话里发送「#qbot登录」')
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!userId) return
    setData(null)
    getStats(userId, Number(day))
      .then(setData)
      .catch((e: Error) => setError(e.message))
  }, [userId, day])

  const rows = useMemo(() => (data ? mergeRows(data) : []), [data])
  const avgUv = useMemo(() => {
    if (!rows.length) return 0
    const days = data?.remote.msg.filter(m => num(m.up_msg_uv) > 0).length || rows.length
    const sum = rows.reduce((acc, r) => acc + r.upUv, 0)
    return days ? Math.round(sum / days) : 0
  }, [rows, data])

  if (loading) return <div className="qbot-loading">加载中...</div>

  if (error && !rows.length) {
    return (
      <div className="t-alert t-alert--warning" style={{ marginTop: 16 }}>
        <div className="t-alert__content">
          <div className="t-alert__message">
            <div className="t-alert__description">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  const maxLocal = Math.max(...rows.map(r => Math.max(r.localMsg, r.localDau)), 1)

  return (
    <div className="qbot-tab-body">
      {/* 工具行 */}
      <div className="qbot-toolbar">
        {accounts.length > 1 && (
          <div className="qbot-toolbar-item">
            <span>账号</span>
            <div className="t-radio-group t-size-m t-radio-group__outline" role="radiogroup">
              {accounts.map(a => (
                <label key={a.userId} className={`t-radio-button ${a.userId === userId ? 't-is-checked' : ''}`}>
                  <input
                    type="radio"
                    className="t-radio-button__former"
                    name="stats-account"
                    value={a.userId}
                    checked={a.userId === userId}
                    onChange={() => setUserId(a.userId)}
                  />
                  {a.userId}
                </label>
              ))}
            </div>
          </div>
        )}
        <div className="qbot-toolbar-item">
          <span>统计天数</span>
          <div className="t-radio-group t-size-m t-radio-group__outline" role="radiogroup">
            <label className={`t-radio-button ${day === '7' ? 't-is-checked' : ''}`}>
              <input
                type="radio"
                className="t-radio-button__former"
                name="stats-day"
                value="7"
                checked={day === '7'}
                onChange={() => setDay('7')}
              />
              近 7 天
            </label>
            <label className={`t-radio-button ${day === '14' ? 't-is-checked' : ''}`}>
              <input
                type="radio"
                className="t-radio-button__former"
                name="stats-day"
                value="14"
                checked={day === '14'}
                onChange={() => setDay('14')}
              />
              近 14 天
            </label>
            <label className={`t-radio-button ${day === '30' ? 't-is-checked' : ''}`}>
              <input
                type="radio"
                className="t-radio-button__former"
                name="stats-day"
                value="30"
                checked={day === '30'}
                onChange={() => setDay('30')}
              />
              近 30 天
            </label>
          </div>
        </div>
        <span className="qbot-toolbar-avg">平均日活跃：{fmt(avgUv)}</span>
      </div>

      {/* 本地每日柱状图（旧 → 新） */}
      <div className="qbot-card">
        <div className="qbot-card-header">
          <div className="qbot-card-title">
            <span className="config-name">本地趋势</span>
            <span className="qbot-card-sub">蓝 = 消息数 · 绿 = 活跃用户</span>
          </div>
        </div>
        <div className="qbot-bars">
          {[...rows].reverse().map(row => (
            <div
              className="qbot-bar-col"
              key={row.date}
              title={`${row.date}｜消息 ${row.localMsg} · 活跃 ${row.localDau}`}
            >
              <div className="qbot-bar-pair">
                <div className="qbot-bar bar-msg" style={{ height: `${(row.localMsg / maxLocal) * 100}%` }} />
                <div className="qbot-bar bar-dau" style={{ height: `${(row.localDau / maxLocal) * 100}%` }} />
              </div>
              <div className="qbot-bar-date">{row.date.slice(5)}</div>
            </div>
          ))}
          {!rows.length && <div className="qbot-empty">暂无本地统计数据</div>}
        </div>
      </div>

      {/* 开放平台数据表 */}
      <div className="qbot-card">
        <div className="qbot-card-header">
          <div className="qbot-card-title">
            <span className="config-name">开放平台数据</span>
            <span className="qbot-card-sub">数据来源：QQ 开放平台 DAU 日报</span>
          </div>
        </div>
        <div className="qbot-table-wrap">
          <div className="t-table">
            <table>
              <thead>
                <tr>
                  {COLUMNS.map(col => <th key={col.key}>{col.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {[...rows].reverse().map(row => (
                  <tr key={row.date}>
                    {COLUMNS.map(col => <td key={col.key}>{col.key === 'date' ? row.date : fmt(row[col.key])}</td>)}
                  </tr>
                ))}
                {!rows.length && (
                  <tr><td colSpan={COLUMNS.length} className="qbot-empty">暂无数据</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
