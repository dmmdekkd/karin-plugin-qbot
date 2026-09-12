import { dir } from './dir'
import { pluginVersion } from './utils/version'
import { logger } from 'node-karin'

/** 记录模块加载开始时间，用于输出初始化耗时 */
const startTime = performance.now()

/** 请不要在这编写插件 不会有任何效果~ */
logger.info(`${logger.violet(`[插件:${dir.name}]`)} ${logger.green(`v${pluginVersion}`)} 初始化完成 ~ 耗时 ${logger.green(`${Math.round(performance.now() - startTime)}ms`)}`)