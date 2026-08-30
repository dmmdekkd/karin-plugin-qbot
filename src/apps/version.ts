import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { karin, getRemotePkgVersion, segment } from 'node-karin'
import type { VersionData } from '../../ktr/template/qbot/version/types'
import versionData from '../../ktr/template/qbot/version/data/default.json'
import { dir } from '@/dir'
import { RE_VERSION } from '@/utils/constants'
import { isQqbot } from '@/model'
import { renderTemplateImage } from '@/utils/render'
import { setMarkdownImageContext } from './fileurl'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'

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
const platformName = platformNames[process.platform]

/** Karin 框架版本（node-karin 与框架同版本号） */
const karinVersion = (() => {
  try {
    const require = createRequire(import.meta.url)
    const entry = require.resolve('node-karin')
    return JSON.parse(
      fs.readFileSync(path.join(entry, '../../package.json'), 'utf-8')
    ).version as string
  } catch {
    return 'unknown'
  }
})()

/**
 * 插件版本：#qbot版本
 * 渲染版本信息页图片（Node / 平台 / Karin 版本为服务器真实环境；
 * npm 最新版本通过 node-karin 从 npm 获取）。
 * QQBot 平台用 markdown 包裹图片发送，其他平台直接发送图片。
 */
export const version = karin.command(RE_VERSION, async (e) => {
  /** 渲染耗时，先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)

  const remote = await getRemotePkgVersion(dir.name).catch(() => null)
  const latestText = remote
    ? remote === dir.version
      ? '已是最新版本'
      : `存在新版本 v${remote}`
    : 'npm 查询失败'

  const data: VersionData = {
    ...versionData,
    version: dir.version,
    pluginName: dir.name,
    latestText,
    latestOk: remote === dir.version,
    nodeVersion: process.version,
    platformName,
    karinVersion,
  }

  const image = await renderTemplateImage('qbot/version', data)

  /** QQBot：md 图片需公网直链，登记会话后由 file-to-url.ts 借分片上传换取临时直链 */
  if (isQqbot(e)) {
    const clear = setMarkdownImageContext(e.contact, e.selfId)
    try {
      await e.reply(segment.markdown(`![version](${image})`))
    } finally {
      clear()
    }
    return true
  }
  await e.reply(segment.image(image))
  return true
}, {
  name: 'qbot版本',
  permission: 'all',
})
