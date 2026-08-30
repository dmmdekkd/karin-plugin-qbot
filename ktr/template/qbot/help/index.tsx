import { defineTemplate } from '@karinjs/template-react'

import { Help } from './components/Help'
import type { HelpData } from './types'

/** 运行时数据兜底校验，结构异常时 SSR 直接报错而不是渲染出空白图 */
const isHelpData = (data: unknown): data is HelpData =>
  typeof data === 'object' &&
  data !== null &&
  typeof (data as HelpData).title === 'string' &&
  typeof (data as HelpData).version === 'string' &&
  Array.isArray((data as HelpData).groups)

export default defineTemplate({
  name: '帮助页面',
  description: '#qbot帮助 渲染的功能指令总览（点格画板背景 · Bento 网格 · 药丸流指令，明暗跟随配置）',
  component: Help,
  validate: isHelpData,
})
