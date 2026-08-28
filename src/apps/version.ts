import { karin, getRemotePkgVersion, segment } from 'node-karin'
import { dir } from '@/dir'
import { RE_VERSION } from '@/utils/constants'
import { isQqbot } from '@/model'
import { md } from '@/utils'

/**
 * 插件版本：#qbot版本
 * 展示本地版本与 npm 最新版本（最新版本通过 node-karin 从 npm 获取）
 */
export const version = karin.command(RE_VERSION, async (e) => {
  const remote = await getRemotePkgVersion(dir.name).catch(() => null)
  const latest = remote
    ? `v${remote}${remote === dir.version ? '（已是最新）' : '（存在新版本，可发送 #qbot更新）'}`
    : '获取失败'

  await e.reply(isQqbot(e)
    ? segment.markdown(md`
      ### 插件版本

      当前版本：v${dir.version}
      插件名称：${dir.name}
      最新版本：${latest}
    `)
    : md`
      插件版本
      当前版本：v${dir.version}
      插件名称：${dir.name}
      最新版本：${latest}
    `)
  return true
}, {
  name: 'qbot版本',
  permission: 'all',
})
