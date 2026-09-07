import { karin, segment } from 'node-karin'
import type { VersionData } from '../../ktr/template/qbot/version/types'
import versionData from '../../ktr/template/qbot/version/data/default.json'
import { dir } from '@/dir'
import { RE_VERSION } from '@/utils/constants'
import { isQqbot } from '@/model'
import { renderTemplateImage } from '@/utils/render'
import { getRemoteVersion, karinVersion, nodeVersion, platformName, pluginVersion } from '@/utils/version'
import { uploadImageToCos } from './fileurl'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'

/**
 * 插件版本：#qbot版本
 * 渲染版本信息页图片（Node / 平台 / Karin 版本为服务器真实环境；
 * npm 最新版本通过 node-karin 从 npm 获取）。
 * QQBot 平台用 markdown 包裹图片发送，其他平台直接发送图片。
 */
export const version = karin.command(RE_VERSION, async (e) => {
  /** 渲染耗时，先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)

  const remote = await getRemoteVersion(dir.name)
  const latestText = remote
    ? remote === pluginVersion
      ? '已是最新版本'
      : `存在新版本 v${remote}`
    : 'npm 查询失败'

  const data: VersionData = {
    ...versionData,
    version: pluginVersion,
    pluginName: dir.name,
    latestText,
    latestOk: remote === pluginVersion,
    nodeVersion,
    platformName,
    karinVersion,
  }

  const image = await renderTemplateImage('qbot/version', data)

  /** QQBot：md 图片需公网直链，主动分片上传换取 COS 临时直链（ttl 86400s） */
  if (isQqbot(e)) {
    const uploaded = await uploadImageToCos(e.contact, e.selfId, image)
    await e.reply(segment.markdown(`![version](${uploaded})`))
    return true
  }
  await e.reply(segment.image(`base64://${image}`))
  return true
}, {
  name: 'qbot版本',
  permission: 'all',
})
