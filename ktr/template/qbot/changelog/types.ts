/** 更新日志页面数据类型（src/apps/update.ts 与模板共用） */

export interface ChangelogEntry {
  /** 版本号，如 `1.0.0` */
  version: string
  /** 该版本的变更条目 */
  items: string[]
}

export interface ChangelogData {
  /** 插件包名 */
  pluginName: string
  /** 插件当前版本（页脚展示） */
  version: string
  /** 更新日志条目（按版本倒序）；为空时渲染空状态 */
  entries: ChangelogEntry[]
  /** 无日志时的空状态文案 */
  emptyText?: string
}
