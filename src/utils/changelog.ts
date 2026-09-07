import { marked, type Tokens } from 'marked'
import { dir } from '@/dir'
import { renderTemplateImage } from '@/utils/render'
import type { ChangelogData, ChangelogEntry } from '../../ktr/template/qbot/changelog/types'
import { getRemoteVersion, isNewerVersion, karinVersion, pluginVersion } from '@/utils/version'

/** 解析 CHANGELOG.md：`## 版本` 为分组，`- 条目` 为变更项（基于 marked AST） */
export const parseChangelog = (markdown: string): ChangelogEntry[] => {
  const entries: ChangelogEntry[] = []
  let current: ChangelogEntry | undefined
  for (const token of marked.lexer(markdown)) {
    if (token.type === 'heading' && token.depth === 2) {
      current = { version: token.text, items: [] }
      entries.push(current)
    } else if (token.type === 'list' && current) {
      current.items.push(...(token as Tokens.List).items.map((item) => item.text))
    }
  }
  return entries
}

/** 从 npm CDN 拉取指定版本 CHANGELOG.md 并解析，失败返回 undefined */
export const fetchRemoteChangelog = async (version: string): Promise<ChangelogEntry[] | undefined> => {
  const urls = [
    `https://unpkg.com/${dir.name}@${version}/CHANGELOG.md`,
    `https://cdn.jsdelivr.net/npm/${dir.name}@${version}/CHANGELOG.md`,
  ]
  for (const url of urls) {
    const entries = await fetch(url)
      .then((res) => (res.ok ? res.text() : ''))
      .then(parseChangelog)
      .catch(() => [])
    if (entries.length > 0) return entries
  }
  return undefined
}

/**
 * 渲染更新日志图片（注入远端版本供页脚更新提示），失败返回 undefined
 * @param version 用于页脚展示的插件版本
 * @param onlyVersion true=仅展示该版本条目（更新成功后）；false=展示全部历史日志（#qbot更新日志）
 */
export const renderChangelog = async (version: string, onlyVersion = true): Promise<string | undefined> => {
  const entries = await fetchRemoteChangelog(version)
  const [pluginLatest, karinLatest] = await Promise.all([
    getRemoteVersion(dir.name),
    getRemoteVersion('node-karin'),
  ])
  const data: ChangelogData = {
    pluginName: dir.name,
    version,
    karinVersion,
    pluginLatest: pluginLatest && isNewerVersion(pluginLatest, pluginVersion) ? pluginLatest : undefined,
    karinLatest: karinLatest && isNewerVersion(karinLatest, karinVersion) ? karinLatest : undefined,
    /** onlyVersion 时只保留该版本条目；否则展示全部历史日志 */
    entries: onlyVersion ? (entries ?? []).filter((entry) => entry.version === version) : (entries ?? []),
    emptyText: '该版本暂无更新日志',
  }
  return renderTemplateImage('qbot/changelog', data).catch(() => undefined)
}