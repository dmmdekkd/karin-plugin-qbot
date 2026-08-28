import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { karin, updatePkg, restart, segment } from 'node-karin'
import { dir } from '@/dir'
import { md } from '@/utils'
import { RE_UPDATE } from '@/utils/constants'
import { isQqbot } from '@/model'

/**
 * 插件更新：#qbot更新 / #qbot强制更新 / #qbot更新日志
 * 本插件通过 npm 安装，更新统一走 updatePkg，完成后自动重启
 */
export const update = karin.command(RE_UPDATE, async (e) => {
  const [, , , isLog] = e.msg.match(RE_UPDATE) ?? []

  // 更新日志：npm 包没有 git 历史，读取包内 CHANGELOG.md 展示
  if (isLog) {
    const file = path.join(dir.pluginDir, 'CHANGELOG.md')
    if (!existsSync(file)) {
      return await e.reply(isQqbot(e) ? segment.markdown('暂无更新日志') : '暂无更新日志')
    }
    let log = readFileSync(file, 'utf-8').trim()
    if (log.length > 1500) log = `${log.slice(0, 1500)}\n...（日志过长，已截断）`
    return await e.reply(isQqbot(e)
      ? segment.markdown(md`
        ### ${dir.name} 更新日志
        \`\`\`
        ${log}
        \`\`\`
      `)
      : md`
        ${dir.name} 更新日志
        ${log}
      `)
  }

  const res = await updatePkg(dir.name)
  if (res.status === 'failed') {
    return await e.reply(isQqbot(e) ? segment.markdown(`更新失败：${res.data}`) : `更新失败：${res.data}`)
  }
  await e.reply(isQqbot(e)
    ? segment.markdown(md`
      ${dir.name} 更新完成

      ${res.data}（${res.local ?? '未知'} → ${res.remote ?? '未知'}）
    `)
    : md`
      ${dir.name} 更新完成

      ${res.data}（${res.local ?? '未知'} → ${res.remote ?? '未知'}）
    `)
  await restart(e.selfId, e.contact, e.messageId, true, true)
  return true
}, {
  name: '插件更新',
  permission: 'master',
})
