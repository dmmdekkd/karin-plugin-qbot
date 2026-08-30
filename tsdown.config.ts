import { readdirSync } from 'node:fs'
import { ktrBuildPlugin } from '@karinjs/template-react/plugin'
import { defineConfig } from 'tsdown'
import type { UserConfig } from 'tsdown'

/** src/apps 下的命令文件 → apps/<name> 入口 */
const appEntries = Object.fromEntries(
  readdirSync(new URL('./src/apps', import.meta.url))
    .filter(file => file.endsWith('.ts'))
    .map(file => [`apps/${file.replace(/\.ts$/, '')}`, `src/apps/${file}`])
)

/**
 * @description `tsdown` configuration options
 */
export const options: UserConfig = {
  entry: {
    app: 'src/app.ts',
    dir: 'src/dir.ts',
    index: 'src/index.ts',
    'web.config': 'src/web.config.ts',
    ...appEntries,
  },
  format: ['esm'], // 输出格式
  target: 'node18', // 目标环境
  sourcemap: false, // 是否生成 sourcemap
  clean: true, // 是否清理输出目录
  dts: false, // 是否生成 .d.ts 文件 没啥事可以不需要生成类型，除非你的插件会被其他插件调用。
  outDir: 'dist', // 输出目录
  treeshake: true, // 树摇优化：模板依赖（react/heroui）按需打包，控制产物体积
  minify: false, // 压缩代码
  plugins: [ktrBuildPlugin()], // ktr 模板：构建时同步注册表并编译 style.css 进产物
  deps: {
    neverBundle: [
      'node-karin',
      /^node-karin\//,
    ],
  },
  shims: true,
  outExtensions () {
    return {
      js: '.js',
    }
  },
}

export default defineConfig(options)
