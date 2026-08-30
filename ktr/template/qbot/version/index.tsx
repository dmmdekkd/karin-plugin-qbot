import { defineTemplate } from '@karinjs/template-react'

import { VersionPage } from './components/VersionPage'
import type { VersionData } from './types'

/** 运行时数据兜底校验，结构异常时 SSR 直接报错而不是渲染出空白图 */
const isVersionData = (data: unknown): data is VersionData =>
  typeof data === 'object' &&
  data !== null &&
  typeof (data as VersionData).title === 'string' &&
  typeof (data as VersionData).version === 'string' &&
  typeof (data as VersionData).pluginName === 'string'

export default defineTemplate({
  name: '版本页面',
  description: '#qbot版本 渲染的插件版本信息页（与帮助页同族风格）',
  component: VersionPage,
  validate: isVersionData,
})
