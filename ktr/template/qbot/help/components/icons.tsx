import type { Icon } from '@phosphor-icons/react'
import {
  ArrowsLeftRightIcon,
  BellIcon,
  ChartBarIcon,
  ChartLineIcon,
  DownloadSimpleIcon,
  FrameCornersIcon,
  GlobeIcon,
  KeyIcon,
  ListBulletsIcon,
  RssIcon,
  ScrollIcon,
  ShieldCheckIcon,
  TagIcon,
  UsersIcon,
  WrenchIcon,
} from '@phosphor-icons/react'

/** duotone 双色调字重，放在 accent-soft 底色块上层次更好 */
export const iconWeight = 'duotone' as const

/**
 * 图标 key → Phosphor Icons 组件映射
 * 数据侧只写 key（types.ts HelpItem.icon），模板侧统一在这里解析
 */
export const icons: Record<string, Icon> = {
  chart: ChartBarIcon,
  globe: GlobeIcon,
  wrench: WrenchIcon,
  users: UsersIcon,
  login: KeyIcon,
  list: ListBulletsIcon,
  switch: ArrowsLeftRightIcon,
  data: ChartLineIcon,
  notify: BellIcon,
  subscribe: RssIcon,
  template: FrameCornersIcon,
  ip: ShieldCheckIcon,
  version: TagIcon,
  update: DownloadSimpleIcon,
  changelog: ScrollIcon,
}

/** 兜底图标：数据里给了未知 key 时使用 */
export const fallbackIcon: Icon = KeyIcon
