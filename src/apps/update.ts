import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { karin, updatePkg, restart, segment } from 'node-karin'
import { dir } from '@/dir'
import { md } from '@/utils'
import { RE_UPDATE } from '@/utils/constants'
import { isQqbot } from '@/model'
import { sendInputNotify, type QQBotLike } from '@/utils/inputNotify'
import { renderTemplateImage } from '@/utils/render'
import { setMarkdownImageContext } from './fileurl'
import type { ChangelogEntry } from '../../ktr/template/qbot/changelog/types'

/** 解析 CHANGELOG.md：`## 版本` 为分组，`- 条目` 为变更项 */
const parseChangelog = (markdown: string): ChangelogEntry[] => {
  const entries: ChangelogEntry[] = []
  for (const raw of markdown.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('# ')) continue
    if (line.startsWith('## ')) {
      entries.push({ version: line.replace(/^##\s*/, ''), items: [] })
      continue
    }
    if (line.startsWith('- ') && entries.length > 0) {
      entries[entries.length - 1].items.push(line.replace(/^-\s*/, ''))
    }
  }
  return entries
}

/**
 * 插件更新：#qbot更新 / #qbot强制更新 / #qbot更新日志
 * 本插件通过 npm 安装，更新统一走 updatePkg，完成后自动重启
 */
export const update = karin.command(RE_UPDATE, async (e) => {
  const [, , , isLog] = e.msg.match(RE_UPDATE) ?? []

  /** 耗时前先发输入状态，避免用户干等 */
  await sendInputNotify(e.bot as unknown as QQBotLike, e.contact)

  // 更新日志：npm 包没有 git 历史，读取包内 CHANGELOG.md 渲染成图片（无日志时渲染空状态）
  if (isLog) {
    const file = path.join(dir.pluginDir, 'CHANGELOG.md')
    const entries = existsSync(file)
      ? parseChangelog(readFileSync(file, 'utf-8'))
      : []
    const image = await renderTemplateImage('qbot/changelog', {
      pluginName: dir.name,
      version: dir.version,
      entries,
      emptyText: '暂无更新日志',
    })
    /** QQBot：md 图片由适配器内置临时图床换取公网直链；其他平台直接发送图片 */
    if (isQqbot(e)) {
      const clear = setMarkdownImageContext(e.contact, e.selfId)
      try {
        await e.reply(segment.markdown(`![changelog](${image})`))
      } finally {
        clear()
      }
      return true
    }
    await e.reply(segment.image(image))
    return true
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
