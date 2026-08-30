import fs from 'node:fs'
import path from 'node:path'
import { createElement } from 'react'
import type { ComponentType } from 'react'
import type { RenderContext } from '@karinjs/template-react'
import { HtmlWrapper } from '@karinjs/template-react'
import { renderToStaticMarkup } from 'react-dom/server'
import { karinPathHtml, render } from 'node-karin'
import type { Options } from 'node-karin'

import { dir } from '@/dir'
import HelpTemplate from '../../ktr/template/qbot/help/index'
import VersionTemplate from '../../ktr/template/qbot/version/index'
import ChangelogTemplate from '../../ktr/template/qbot/changelog/index'

/** 模板路由 → 模板定义；新模板在此注册（组件随插件产物打包，无注册表文件） */
const templates = {
  'qbot/help': HelpTemplate,
  'qbot/version': VersionTemplate,
  'qbot/changelog': ChangelogTemplate,
}

export type TemplateRoute = keyof typeof templates & string

/**
 * 按当前时间决定明暗主题：白天（6:00–18:00）浅色，夜间深色。
 * 所有渲染默认跟随昼夜；调用方可通过 options.ctx 显式覆盖。
 */
const themeByTime = (): 'light' | 'dark' => {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

/**
 * 解析截图模板 CSS：
 * ktrBuildPlugin 编译产物是 dist/style.css（本插件产物目录），
 * dev 面板/ktr dev 实时编译缓存是 node_modules/.cache/ktr/style.css，
 * 两者都存在时按 mtime 取较新，保证改完模板不重建也能预览到新样式。
 * 每次渲染时解析（而非模块加载时冻结），构建完成后无需重启进程。
 */
const resolveTemplateCss = (): string | undefined => {
  const distPath = path.join(dir.pluginDir, 'dist/style.css')
  const cachePath = path.join(dir.pluginDir, 'node_modules/.cache/ktr/style.css')
  if (!fs.existsSync(distPath)) return fs.existsSync(cachePath) ? cachePath : undefined
  if (!fs.existsSync(cachePath)) return distPath
  return fs.statSync(cachePath).mtimeMs >= fs.statSync(distPath).mtimeMs ? cachePath : distPath
}

/** / 开头的资源引用改写到 ktr/public（小图内联 base64，大图转 file:// 绝对路径） */
const assetsDir = path.join(dir.pluginDir, 'ktr/public')

/** 渲染调用参数 */
export interface RenderTemplateOptions {
  /** 传给模板的渲染上下文（明暗主题等），缺省按昼夜自动切换（白天浅色 / 夜间深色） */
  ctx?: Partial<RenderContext>
  /** karin 截图参数（setViewport 等），覆盖默认值 */
  screenshot?: Omit<Partial<Options>, 'file' | 'data' | 'name'>
}

/**
 * 渲染截图模板并截图：直接 SSR 模板组件（react-dom/server），
 * 经 HtmlWrapper 包成完整 HTML 后交给 karin puppeteer 截图。
 * @param route 模板路由（templates 中的 key，如 `qbot/help`）
 * @param data 模板数据，结构由各模板 `types.ts` 定义
 * @param options 渲染上下文与截图参数
 * @returns 图片 base64；渲染失败直接抛出异常
 */
export const renderTemplateImage = async (
  route: TemplateRoute,
  data: unknown,
  options: RenderTemplateOptions = {}
): Promise<string> => {
  const template = templates[route]
  const ctx: RenderContext = {
    scale: 1,
    ...options.ctx,
    theme: { mode: themeByTime(), ...options.ctx?.theme },
  }
  if (template.validate && !template.validate(data)) {
    throw new Error('模板数据结构校验失败')
  }
  /** CSS 路径每次渲染时解析：dist 缺失时抛错提示构建，而不是渲染出无样式页面 */
  const cssPath = resolveTemplateCss()
  if (!cssPath) {
    throw new Error('未找到截图模板 CSS，请先执行 pnpm build（或 pnpm template 生成开发缓存）')
  }
  const wrapper = new HtmlWrapper({
    cssPath,
    assetsDir,
  })
  const Component = template.component as ComponentType<{ data: unknown; ctx: RenderContext }>
  const markup = renderToStaticMarkup(createElement(Component, { data, ctx }))
  const html = wrapper.wrapContent(markup, ctx)
  const outputDir = path.join(karinPathHtml, dir.name)
  fs.mkdirSync(outputDir, { recursive: true })
  const htmlPath = path.join(outputDir, `${route.replaceAll('/', '_')}.html`)
  fs.writeFileSync(htmlPath, html, 'utf-8')
  return (await render.render({
    file: htmlPath,
    name: 'help',
    selector: '#container',
    type: 'png',
    fullPage: false,
    setViewport: { width: 1100, deviceScaleFactor: 2 },
    ...options.screenshot,
  })) as unknown as string
}
