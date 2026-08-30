import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { components, defineConfig } from 'node-karin'
import { dir } from './dir'

/**
 * Karin WebUI 配置：内置组件模式
 * Karin WebUI 直接渲染 components() 返回的表单，保存时调用 save()，
 * 不再需要自定义前端页面与后端路由（原 src/web/server.ts 与 web/ 目录已移除）
 * 文档：https://karin.wuliya.cn/guide/plugins/webui.html
 */

/** 配置文件绝对路径 */
const configFile = () => path.join(dir.ConfigDir, 'config.json')

/** 内置默认配置（文件缺失或字段缺失时的回落值） */
const DEFAULTS = {
  statistics: { enable: true },
  welcome: { enable: true },
  qbot: { day: 5 },
} as const

/** 配置类型 */
type AppConfig = {
  statistics: { enable: boolean }
  welcome: { enable: boolean }
  qbot: { day: number }
}

/** 读取当前配置：逐字段合并默认值，保证返回对象字段完整（缺失字段回落默认） */
const readConfig = (): AppConfig => {
  try {
    const data = JSON.parse(readFileSync(configFile(), 'utf-8')) as Partial<AppConfig>
    return {
      statistics: { enable: typeof data.statistics?.enable === 'boolean' ? data.statistics.enable : DEFAULTS.statistics.enable },
      welcome: { enable: typeof data.welcome?.enable === 'boolean' ? data.welcome.enable : DEFAULTS.welcome.enable },
      qbot: { day: typeof data.qbot?.day === 'number' ? data.qbot.day : DEFAULTS.qbot.day },
    }
  } catch {
    return { statistics: { ...DEFAULTS.statistics }, welcome: { ...DEFAULTS.welcome }, qbot: { ...DEFAULTS.qbot } }
  }
}

/** Karin WebUI 部分控件会把值包装为 { value }，统一解包 */
const unwrap = (value: unknown): unknown => {
  if (value && typeof value === 'object' && 'value' in value) return (value as { value: unknown }).value
  return value
}

/** 布尔值转换，非法输入回落默认值 */
const toBool = (value: unknown, fallback: boolean): boolean => {
  const raw = unwrap(value)
  return typeof raw === 'boolean' ? raw : fallback
}

/** 天数转换，限制 1~30，非法输入回落默认值 */
const toDay = (value: unknown, fallback: number): number => {
  const n = Math.trunc(Number(unwrap(value)))
  return Number.isFinite(n) ? Math.min(Math.max(n, 1), 30) : fallback
}

/** 前端提交的扁平配置（key 为组件 key） */
interface WebForm {
  statisticsEnable?: unknown
  welcomeEnable?: unknown
  statisticsDay?: unknown
}

export default defineConfig<WebForm>({
  info: {
    id: 'karin-plugin-qbot',
    name: 'QBot',
    author: { name: 'shijin' },
    icon: { name: 'settings', size: 24, color: '#B2A8D3' },
    description: 'QQ 开放平台机器人管理插件',
  },
  components: () => {
    const cfg = readConfig()
    return [
      components.divider.horizontal('statistics-section', {
        description: '消息统计',
        descPosition: 5,
      }),
      components.switch.create('statisticsEnable', {
        color: 'success',
        label: '启用消息统计',
        description: '开启后为每个机器人按日统计消息量与去重活跃用户（DAU），并记录使用用户与群组。',
        defaultSelected: cfg.statistics.enable,
      }),
      components.switch.create('welcomeEnable', {
        color: 'success',
        label: '启用新用户欢迎语',
        description: '新用户首次发送消息时回复欢迎语提示。',
        defaultSelected: cfg.welcome.enable,
      }),
      components.divider.horizontal('qbot-section', {
        description: 'QQ 开放平台管理端',
        descPosition: 5,
      }),
      components.input.number('statisticsDay', {
        color: 'success',
        label: '数据统计默认天数',
        description: '`#qbot数据` 默认展示最近 N 天（1~30）。',
        defaultValue: String(cfg.qbot.day),
      }),
    ]
  },
  save: (config) => {
    try {
      const cur = readConfig()
      const next = {
        statistics: { enable: toBool(config.statisticsEnable, cur.statistics.enable) },
        welcome: { enable: toBool(config.welcomeEnable, cur.welcome.enable) },
        qbot: { day: toDay(config.statisticsDay, cur.qbot.day) },
      }
      writeFileSync(configFile(), JSON.stringify(next, null, 2), 'utf-8')
      return { success: true, message: '保存成功' }
    } catch (error) {
      return { success: false, message: `保存失败：${error instanceof Error ? error.message : error}` }
    }
  },
})
