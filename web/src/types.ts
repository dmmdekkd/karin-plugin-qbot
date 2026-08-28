/** 开放平台应用（镜像 src/types/type.ts） */
export interface AppItem {
  app_id: string | number
  app_name?: string
  app_type?: number
  [key: string]: unknown
}

/** 已登录账号（后端 /qbot/overview） */
export interface WebAccount {
  /** 发起扫码的用户 */
  userId: string
  /** 当前管理指针应用 */
  appId: string
  /** 开发者名下全部应用 */
  apps: AppItem[]
}

/** 本地统计概览（按机器人 selfId 隔离） */
export interface BotStat {
  selfId: string
  /** 累计消息数 */
  total: number
  /** 今日消息数 */
  todayMsg: number
  /** 今日活跃用户 */
  todayDau: number
  /** 累计用户 */
  users: number
  /** 群组数 */
  groups: number
}

export interface OverviewData {
  accounts: WebAccount[]
  stats: BotStat[]
}

/** 开放平台 DAU 单日数据（消息） */
export interface DauDay {
  report_date?: string
  up_msg_cnt?: number
  up_msg_uv?: number
  down_msg_cnt?: number
  bot_msg_cnt?: number
  next_day_retention?: number
}

/** 开放平台 DAU 单日数据（群聊） */
export interface DauGroup {
  report_date?: string
  existing_groups?: number
  used_groups?: number
  added_groups?: number
  removed_groups?: number
}

/** 开放平台 DAU 单日数据（好友） */
export interface DauFriend {
  report_date?: string
  stock_added_friends?: number
  used_friends?: number
  new_added_friends?: number
  new_removed_friends?: number
}

/** 开放平台 DAU 单日数据（频道） */
export interface DauGuild {
  report_date?: string
  in_guild_cnt?: number
  used_guild_cnt?: number
  add_guild_cnt?: number
  removed_guild_cnt?: number
}

/** 后端 /qbot/stats 响应 */
export interface StatsData {
  day: number
  appId: string
  remote: {
    guild: DauGuild[]
    msg: DauDay[]
    group: DauGroup[]
    friend: DauFriend[]
  }
  local: { date: string; msg: number; dau: number }[]
}

/** 插件配置（config.json） */
export interface PluginConfig {
  statistics: { enable: boolean }
  welcome: { enable: boolean }
  qbot: { day: number }
}
