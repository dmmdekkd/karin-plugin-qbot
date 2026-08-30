/** 帮助页面数据类型（src/apps/help.ts 与模板共用，字段以本文件为单一来源） */

/** 单条指令 */
export interface HelpItem {
  /** 指令，如 `#qbot登录` */
  cmd: string
  /** 功能描述 */
  desc: string
  /** 图标 key，映射见 components/icons.tsx */
  icon?: string
}

/** 指令分组 */
export interface HelpGroup {
  /** 分组标题，如 `开放平台` */
  title: string
  /** 分组英文小标，如 `OPEN PLATFORM` */
  en?: string
  items: HelpItem[]
}

/** 帮助页面整体数据 */
export interface HelpData {
  /** 头部大标题，如 `COMMANDS` */
  title: string
  /** 插件版本 */
  version: string
  groups: HelpGroup[]
}
