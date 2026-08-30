import { defineConfig } from '@karinjs/template-react'

/** ktr 截图模板工具链配置（模板在 ktr/template，目录即路由） */
export default defineConfig({
  dir: {
    /** 静态资源随包发布在固定位置（package.json files 含 ktr/public），构建时无需再复制 */
    assets: 'ktr/public',
    copyAssets: false,
  },
  html: {
    /** karin.svg 等小资源在 SSR 时内联为 data URI，截图不依赖外部文件 */
    assetsInlineLimit: 16384,
  },
  dev: {
    host: 'localhost',
    port: 5180,
    /** 本地调试时手动打开面板即可，不自动弹浏览器 */
    open: false,
  },
})
