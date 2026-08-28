import { useState } from 'react'
import { useKarinTheme } from './useKarinTheme'
import OverviewTab from './components/OverviewTab'
import StatsTab from './components/StatsTab'
import SettingsTab from './components/SettingsTab'
import './app.css'

const MENUS = [
  { key: 'overview', label: '概览' },
  { key: 'stats', label: '数据' },
  { key: 'settings', label: '设置' },
] as const

type TabKey = typeof MENUS[number]['key']

export default function App () {
  useKarinTheme()
  const [tab, setTab] = useState<TabKey>('overview')
  const [reloadKey, setReloadKey] = useState(0)

  return (
    /* 布局完全使用官方 TDesign 结构：t-layout（row）> t-layout__sider + t-layout__content。
       侧边栏 358px/#f7f7fa、菜单项 52px/#e0f1ff 激活等均由 public/tdesign/layout.css 官方覆盖层提供 */
    <div className="t-layout t-layout--with-sider qbot-shell">
      <aside className="t-layout__sider">
        <div className="t-default-menu">
          <div className="t-default-menu__inner">
            <div className="bot-Info">
              <span className="bot-name">QQ 机器人配置</span>
            </div>
            <ul className="t-menu">
              {MENUS.map(item => (
                <li
                  key={item.key}
                  className={`t-menu__item ${tab === item.key ? 't-is-active' : ''}`}
                  onClick={() => setTab(item.key)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div className="t-layout__content">
        <div className="config-content">
          <div className="content-head">
            <span className="content-head-title">机器人管理</span>
            <button
              className="t-button t-size-m t-button--variant-outline t-button--theme-default"
              type="button"
              onClick={() => setReloadKey(key => key + 1)}
            >
              <span className="t-button__text">刷新</span>
            </button>
          </div>
          <div className="tab-content-scope">
            {tab === 'overview'
              ? <OverviewTab key={`ov-${reloadKey}`} />
              : tab === 'stats'
                ? <StatsTab key={`st-${reloadKey}`} />
                : <SettingsTab key={`se-${reloadKey}`} />}
          </div>
        </div>
      </div>
    </div>
  )
}