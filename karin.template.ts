import { defineConfig } from '@karinjs/template-react'

/** ktr 截图模板工具链配置（模板在 ktr/template，目录即路由） */
export default defineConfig({
  dir: {
    /**
     * 构建时把 ktr/public/** 复制到 dist/assets/，随包固定分发，
     * 运行时（含缺失 ktr/public 的安装包）从 dist/assets 读取资源。
     */
    assets: 'ktr/public',
    copyAssets: true,
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
