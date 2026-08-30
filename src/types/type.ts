/**
 * 开放平台 API 响应数据结构
 * 集中定义从开放平台接口解析出的数据类型，供各命令使用
 */

/** 开放平台单日数据统计行（datareport 返回值） */
export interface DauDay {
  /** 日期 YYYYMMDD（接口实际可能返回数字） */
  report_date: string | number
  up_msg_cnt: number
  down_msg_cnt: number
  bot_msg_cnt: number
  up_msg_uv: number
  /** 对话用户次日留存（接口直接返回百分比数值，如 1 表示 1%） */
  next_day_retention?: number
}

/** 开放平台单日群聊数据行 */
export interface DauGroup {
  report_date: string | number
  existing_groups: number
  used_groups: number
  added_groups: number
  removed_groups: number
}

/** 开放平台单日好友数据行 */
export interface DauFriend {
  report_date: string | number
  stock_added_friends: number
  used_friends: number
  new_added_friends: number
  new_removed_friends: number
}

/** 开放平台单日频道数据行 */
export interface DauGuild {
  report_date: string | number
  in_guild_cnt: number
  used_guild_cnt: number
  add_guild_cnt: number
  removed_guild_cnt: number
}

/** 本地消息统计结果（recordMessage 返回值） */
export interface RecordResult {
  /** 是否为首次使用插件的新用户 */
  isNewUser: boolean
  /** 当前使用总人数 */
  userCount: number
}

/** 开放平台应用信息 */
export interface AppInfo {
  app_name: string
  app_id: string
  app_desc?: string
  bot_status: number
  app_type: number
  icon_url?: string
}

/** 开放平台应用条目（getlists 返回 any，宽松契约） */
export interface AppItem {
  app_id: string | number
  app_name: string
}

/** `#qbot切换` 面板行 */
export interface AppRow {
  id: string
  name: string
  current: boolean
}

/** 开放平台应用状态中文映射（AppInfo.bot_status） */
export const AppStatusMap: Record<number, string> = {
  0: '未知',
  1: '开发中',
  2: '审核中',
  3: '审核通过',
  4: '审核不通过',
  5: '发布中',
  6: '已发布',
  7: '封禁中',
}

/** 开放平台应用类型中文映射（AppInfo.app_type） */
export const AppTypeMap: Record<number, string> = {
  1: '小程序',
  2: '机器人',
}

/** 开放平台消息模板信息 */
export interface TplInfo {
  tpl_name: string
  tpl_id: string
  tpl_type: number
  status: number
}

/** `#qbot模板` 接口响应 */
export interface MsgTplResp {
  data?: {
    list: TplInfo[]
    max_msg_tpl_count: number
  }
}

/** 模板组件类型中文映射（TplInfo.tpl_type） */
export const TplTypeMap: Record<number, string> = {
  1: '按钮组件',
  2: 'Markdown组件',
}

/** 模板审核状态中文映射（TplInfo.status） */
export const TplStatusMap: Record<number, string> = {
  1: '未提审',
  2: '审核中',
  3: '已通过',
  4: '未通过',
}

/** 开放平台站内通知消息 */
export interface NoticeMsg {
  title: string
  send_time: string
}

/** 开放平台事件订阅项 */
export interface SubEvent {
  type: string
  id: string
  name: string
  is_subscribed?: boolean
}

/** 开放平台登录 Cookie 数据 */
export interface QBotCookie {
  uid: string
  uin: string
  ticket: string
  developerId: string
  appType: string
  appId: string
}

/** 消息统计配置 */
export interface StatisticsConfig {
  /** 是否启用消息统计 */
  enable: boolean
}

/** 新用户欢迎配置 */
export interface WelcomeConfig {
  /** 是否启用新用户欢迎语 */
  enable: boolean
}

/** QQ 开放平台管理端配置 */
export interface QBotSetConfig {
  /** `#qbot数据` 默认展示最近 N 天 */
  day: number
}

/** 插件配置文件结构（config.json） */
export interface Config {
  /** 消息统计配置 */
  statistics: StatisticsConfig
  /** 新用户欢迎配置 */
  welcome: WelcomeConfig
  /** QQ 开放平台管理端配置 */
  qbot: QBotSetConfig
}

/** 分片上传的来源描述（与 adapter-qqbot MediaApi.uploadForUrl 的入参约定一致） */
export interface UploadSource {
  kind: 'buffer'
  buffer: Buffer
  size: number
  fileName: string
}

/** QQBot 媒体上传接口（adapter-qqbot 的 MediaApi 约定） */
export interface QQBotMediaApi {
  /** 新版适配器：上传并取回公网直链（直链已声明 response-content-type） */
  uploadForUrl?(
    scene: 'group' | 'user',
    peer: string,
    type: 'image',
    source: UploadSource,
    fileName?: string,
  ): Promise<{ url: string }>
  /** 3.1.0 适配器：分片上传，合并响应含 raw_url 临时直链 */
  uploadChunked?(
    scene: 'group' | 'user',
    peer: string,
    type: 'image',
    source: UploadSource,
  ): Promise<{ raw_url?: string, ttl?: number }>
}

/** QQBot 实例的松弛类型（fileToUrl 处理器可感知的字段） */
export interface QQBotLike {
  selfId: string
  adapter?: { protocol?: string }
  super?: { media?: QQBotMediaApi }
  logger?: (level: 'debug' | 'info' | 'warn' | 'error', ...args: unknown[]) => void
}

/** fileToUrl 处理器载荷 */
export interface FileToUrlPayload {
  file: string
  type: string
  filename?: string
}

/** 图片尺寸（像素） */
export interface ImageSize {
  width: number
  height: number
}

/** markdown 图片上传场景（对照 QQ 分片上传支持的场景） */
export type MarkdownImageScene = 'group' | 'user'

/** 发送方登记的 markdown 图片上传目标会话 */
export interface MarkdownImageContext {
  selfId: string
  scene: MarkdownImageScene
  peer: string
  /** 登记时间戳（ms），60s 内有效 */
  time: number
}
