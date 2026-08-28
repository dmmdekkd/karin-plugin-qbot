import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { getConfig, saveConfig } from '../api'
import type { PluginConfig } from '../types'

function FormItem ({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div className="t-form__item">
      <div className="t-form__label" style={{ width: 104 }}>{label}</div>
      <div className="t-form__controls">
        {children}
        {hint && <div className="qbot-form-hint">{hint}</div>}
      </div>
    </div>
  )
}

function TSwitch ({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`t-switch ${checked ? 't-is-checked' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="t-switch__handle" />
      <span className="t-switch__content" />
    </button>
  )
}

export default function SettingsTab () {
  const [config, setConfig] = useState<PluginConfig | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    getConfig()
      .then(setConfig)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const save = async (): Promise<void> => {
    if (!config) return
    setSaving(true)
    setNotice('')
    try {
      const next = await saveConfig(config)
      setConfig(next)
      setNotice('保存成功啦～')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="qbot-loading">加载中...</div>
  if (error && !config) {
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
  if (!config) return null

  return (
    <div className="qbot-tab-body qbot-settings">
      <FormItem label="数据统计" hint="开启后自动统计机器人消息量与活跃用户，用于本页数据展示">
        <TSwitch
          checked={config.statistics.enable}
          onChange={v => setConfig({ ...config, statistics: { enable: v } })}
        />
      </FormItem>

      <FormItem label="入群欢迎" hint="仅关闭欢迎语发送，数据统计照常运行">
        <TSwitch
          checked={config.welcome.enable}
          onChange={v => setConfig({ ...config, welcome: { enable: v } })}
        />
      </FormItem>

      <FormItem label="统计天数" hint="数据页展示的本地趋势天数（1-30 天）">
        <div className="t-input" style={{ width: 200 }}>
          <input
            className="t-input__inner"
            type="number"
            min={1}
            max={30}
            value={config.qbot.day}
            onChange={e => {
              const day = Math.min(Math.max(Math.trunc(Number(e.target.value)) || 1, 1), 30)
              setConfig({ ...config, qbot: { day } })
            }}
          />
        </div>
      </FormItem>

      <div className="qbot-settings-footer">
        <button
          className={`t-button t-size-m t-button--variant-base t-button--theme-primary${saving ? ' t-is-disabled' : ''}`}
          type="button"
          disabled={saving}
          onClick={() => { void save() }}
        >
          <span className="t-button__text">{saving ? '保存中...' : '保存更改'}</span>
        </button>
        {notice && <span className="qbot-save-notice">{notice}</span>}
      </div>
    </div>
  )
}
