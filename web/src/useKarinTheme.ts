import { useEffect } from 'react'

interface ThemeMessage {
  type?: string
  theme?: string
  appliedTheme?: string
}

/** 应用主题到 <html theme-mode>，驱动 styles.css / components.css 的变量切换 */
const applyTheme = (theme?: string): void => {
  document.documentElement.setAttribute('theme-mode', theme === 'dark' ? 'dark' : 'light')
}

/**
 * 同源探测 Karin 面板当前应用主题（html.dark）。
 * Karin 面板在 iframe 挂载时推送的首条 karin-theme-change 可能早于本页
 * addEventListener 注册而丢失，因此挂载时主动读取父页面状态兜底。
 */
const detectParentTheme = (): string | undefined => {
  try {
    const parent = window.parent
    if (!parent || parent === window) return undefined
    return parent.document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  } catch {
    return undefined
  }
}

/**
 * 主题跟随：嵌入 Karin 面板时初始探测父页 + 监听 karin-theme-change postMessage；
 * 独立打开时跟随系统偏好。
 */
export function useKarinTheme (): void {
  useEffect(() => {
    const parentTheme = detectParentTheme()
    if (parentTheme) applyTheme(parentTheme)

    const onMessage = (event: MessageEvent): void => {
      const data = event.data as ThemeMessage | null
      if (!data || data.type !== 'karin-theme-change') return
      applyTheme(data.appliedTheme || data.theme)
    }
    window.addEventListener('message', onMessage)

    const standalone = !parentTheme && window.self === window.top
    const mq = standalone ? window.matchMedia?.('(prefers-color-scheme: dark)') : undefined
    const onSystem = (e: MediaQueryListEvent): void => { applyTheme(e.matches ? 'dark' : 'light') }
    mq?.addEventListener?.('change', onSystem)

    return () => {
      window.removeEventListener('message', onMessage)
      mq?.removeEventListener?.('change', onSystem)
    }
  }, [])
}
