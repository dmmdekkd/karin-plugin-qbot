import { defineTemplate } from '@karinjs/template-react'

import { ChangelogPage } from './components/ChangelogPage'
import type { ChangelogData } from './types'

/** 运行时数据兜底校验，结构异常时 SSR 直接报错而不是渲染出空白图 */
const isChangelogData = (data: unknown): data is ChangelogData =>
  typeof data === 'object' &&
  data !== null &&
  typeof (data as ChangelogData).pluginName === 'string' &&
  Array.isArray((data as ChangelogData).entries)

export default defineTemplate({
  name: '更新日志页面',
  description: '#qbot更新日志 渲染的插件更新日志页（与帮助页同族风格）',
  component: ChangelogPage,
  validate: isChangelogData,
})
