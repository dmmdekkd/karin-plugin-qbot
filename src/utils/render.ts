import fs from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'
import type { RenderContext } from '@karinjs/template-react'
import { karinPathHtml, render } from 'node-karin'
import type { Options } from 'node-karin'
import { dir } from '@/dir'

/**
 * 模板路由 → 模板定义（懒加载）；新模板在此注册（组件随插件产物打包，无注册表文件）。
 *
 * 必须懒加载的原因：模板组件依赖 @heroui/react、@phosphor-icons/react、
 * @icons-pack/react-simple-icons 等重型库。若在模块顶层静态导入，tsx（dev 模式）
 * 每次启动都要逐文件转换整个依赖图，实测约 35s 同步阻塞 CPU —— 表现为 dev 启动
 * 卡在 adapter 初始化、而 app 模式（加载 tsdown 预打包产物）不卡。
 * 改为按需动态 import 后，启动期 0 成本，仅首次渲染对应模板时才加载。
 */
const base = '../../ktr/template'

/** 模板路由表；新模板在此注册（组件随插件产物打包，无注册表文件） */
const templateRoutes = ['qbot/help', 'qbot/version', 'qbot/changelog'] as const

const lazyTemplates = Object.fromEntries(
  templateRoutes.map(key => [
    key,
    () => import(`${base}/${key}/index`),
  ])
)

export type TemplateRoute = typeof templateRoutes[number]

/**
 * 按当前时间决定明暗主题：白天（6:00–18:00）浅色，夜间深色。
 * 所有渲染默认跟随昼夜；调用方可通过 options.ctx 显式覆盖。
 */
const themeByTime = (): 'light' | 'dark' => {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

/**
 * 解析截图模板 CSS：使用静态拷贝的构建产物 ktr/public/style.css（Tailwind 编译后版本，
 * 字体已内联为 data URI，随插件源码/发布包分发，不依赖 dist 构建产物）。
 */
const resolveTemplateCss = (): string => path.join(dir.pluginDir, 'ktr/public/style.css')

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
  const loadTemplate = lazyTemplates[route]
  if (!loadTemplate) throw new Error(`未知模板路由: ${route}`)
  /** 懒加载模板及其重型依赖链（react / react-dom/server / @karinjs/template-react / 图标库） */
  const template = (await loadTemplate()).default
  const ctx: RenderContext = {
    scale: 1,
    ...options.ctx,
    theme: { mode: themeByTime(), ...options.ctx?.theme },
  }
  if (template.validate && !template.validate(data)) {
    throw new Error('模板数据结构校验失败')
  }
  /** 模板 CSS（构建产物 dist/style.css）；缺失时抛错而不是渲染出无样式页面 */
  const cssPath = resolveTemplateCss()
  if (!fs.existsSync(cssPath)) {
    throw new Error(`未找到模板样式文件: ${cssPath}`)
  }
  const [{ HtmlWrapper }, { createElement }, { renderToStaticMarkup }] = await Promise.all([
    import('@karinjs/template-react'),
    import('react'),
    import('react-dom/server'),
  ])
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
