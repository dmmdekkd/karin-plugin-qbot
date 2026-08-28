import { dir } from '@/dir'
import type { Config } from '@/types/type'
import { watch, logger, filesByExt, copyConfigSync, requireFileSync } from 'node-karin'

/**
 * @description 初始化配置文件
 */
copyConfigSync(dir.defConfigDir, dir.ConfigDir, ['.json'])

/**
 * @description 配置文件
 */
export const config = (): Config => {
  const cfg = requireFileSync(`${dir.ConfigDir}/config.json`)
  const def = requireFileSync(`${dir.defConfigDir}/config.json`)
  return { ...def, ...cfg }
}

/**
 * @description 监听配置文件
 */
setTimeout(() => {
  const list = filesByExt(dir.ConfigDir, '.json', 'abs')
  list.forEach(file => watch(file, () => {
    logger.info(`${logger.violet(`[插件:${dir.version}]`)} ${logger.green(dir.name)} 检测到配置更新啦～ (๑•̀ㅂ•́)و✧`)
  }))
}, 2000)
