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
const templateRoutes = ['qbot/help', 'qbot/version', 'qbot/changelog'] as const

/**
 * 模板懒加载器。注意：动态导入参数必须是完整静态字符串。
 * 若用变量拼接（如 `../../ktr/template/${key}/index`），打包器无法静态分析，
 * 模板源码不会被打进 dist —— 安装后运行时会从 dist/ 向上解析
 * `node_modules/ktr/template/...` 导致 ERR_MODULE_NOT_FOUND（发布前在 src 下能解析到仓库根，故本地验证不到）。
 * 写成静态字符串后，tsdown 会把每个模板打成独立 chunk 随发布包分发。
 */
const lazyTemplates = {
  'qbot/help': () => import('../../ktr/template/qbot/help/index'),
  'qbot/version': () => import('../../ktr/template/qbot/version/index'),
  'qbot/changelog': () => import('../../ktr/template/qbot/changelog/index'),
} as const

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
 * 解析截图模板 CSS：优先静态拷贝的 ktr/public/style.css（dev 模式无需构建产物），
 * 缺失时回退发布包固定分发的 dist/style.css。
 * 两种都是 Tailwind 编译产物、字体已内联为 data URI，样式完全自洽。
 */
const resolveTemplateCss = (): string => {
  const candidates = [
    path.join(dir.pluginDir, 'ktr/public/style.css'),
    path.join(dir.pluginDir, 'dist/style.css'),
  ]
  /** 全都不存在时返回最后一个候选，由调用方抛错提示（避免直接抛 undefined） */
  return candidates.find((p) => fs.existsSync(p)) ?? candidates[candidates.length - 1]
}

/**
 * / 开头的资源引用改写目标目录：优先 ktr/public（源码内直接存在），
 * 其次构建复制的 dist/assets（copyAssets 开启后随包发布），最后回退 dist。
 * 全部缺失时 HtmlWrapper 会告警并保留原路径，不阻塞渲染。
 */
const resolveAssetsDir = (): string => {
  const candidates = [
    path.join(dir.pluginDir, 'ktr/public'),
    path.join(dir.pluginDir, 'dist/assets'),
    path.join(dir.pluginDir, 'dist'),
  ]
  return candidates.find((p) => fs.existsSync(p)) ?? candidates[candidates.length - 1]
}

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
  /** 模板 CSS：ktr/public/style.css 优先，回退发布包固定分发的 dist/style.css；缺失时抛错而不是渲染出无样式页面 */
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
    /** 资源改写目录：ktr/public 优先，缺失时回退 dist/assets（copyAssets 产物）或 dist */
    assetsDir: resolveAssetsDir(),
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
