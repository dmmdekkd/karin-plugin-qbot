import { gt as semverGt } from 'semver'
import { config, getRemotePkgVersion } from 'node-karin'
import { dir } from '@/dir'

/** 插件版本（package.json 的 version，由 dir 统一读取） */
export const pluginVersion = dir.version

/** Node 运行环境版本 */
export const nodeVersion = process.version

/** Node 全平台 → 显示名（统一为首字母大写品牌名） */
const platformNames: Record<NodeJS.Platform, string> = {
  aix: 'AIX',
  android: 'Android',
  darwin: 'macOS',
  freebsd: 'FreeBSD',
  haiku: 'Haiku',
  linux: 'Linux',
  openbsd: 'OpenBSD',
  sunos: 'SunOS',
  win32: 'Windows',
  cygwin: 'Cygwin',
  netbsd: 'NetBSD',
}

/** 系统平台名称（服务端真实环境） */
export const platformName = platformNames[process.platform]

/** Karin 框架版本（node-karin 的 package.json） */
export const karinVersion = config.pkg().version

/** npm 远端版本查询缓存：5 分钟内不重复请求（帮助图/版本页共用，避免高频触发 npm） */
const versionCache = new Map<string, { time: number; value: string }>()

/** 查询 npm 包最新版本（带 TTL 缓存），失败返回 null */
export const getRemoteVersion = async (pkg: string): Promise<string | null> => {
  const hit = versionCache.get(pkg)
  if (hit && Date.now() - hit.time < 5 * 60_000) return hit.value
  const value = await getRemotePkgVersion(pkg).catch(() => null)
  if (value) versionCache.set(pkg, { time: Date.now(), value })
  return value
}

/** 严格 semver 比较：remote 是否晚于 current（无效版本一律 false，避免 'unknown' 等干扰） */
export const isNewerVersion = (remote: string, current: string): boolean => {
  try {
    return semverGt(remote, current)
  } catch {
    return false
  }
}