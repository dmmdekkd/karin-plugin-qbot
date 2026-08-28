/**
 * 插件命令正则以集中管理，保持命令入口一致
 */

/** 帮助菜单 */
export const RE_HELP = /^#?qbot(帮助|菜单)$/

/** 版本查询 */
export const RE_VERSION = /^#?qbot(插件)?版本$/

/** 使用人数/群数统计（对齐 QBot）：`#qbot统计` / `#qbot用户统计` / `#qbot群聊统计` */
export const RE_STAT = /^#?qbot(用户|群聊)?统计$/

/** 插件更新：`#qbot更新` / `#qbot强制更新` / `#qbot更新日志` */
export const RE_UPDATE = /^#?qbot(插件)?(强制)?更新(日志)?$/

/** 开放平台登录：`#qbot登录` / `#管理登录` */
export const RE_LOGIN = /^#?(?:qbot登录|管理登录)$/

/** 开放平台数据统计：`#qbot数据` / `#qbot数据 7` */
export const RE_DATA = /^#?qbot数据\s*(\d+)?$/

/** 开放平台应用列表：`#qbot列表` */
export const RE_LIST = /^#?qbot列表$/

/** 开放平台多应用切换：`#qbot切换`（面板）/ `#qbot切换 <appId>`（按钮回调） */
export const RE_SWITCH = /^#?qbot切换(?:\s+(\d+))?$/

/** 开放平台站内通知：`#qbot通知` */
export const RE_OPEN_NOTICE = /^#?qbot通知$/

/** 开放平台事件订阅：`#qbot订阅` */
export const RE_WHLIST = /^#?qbot订阅$/

/** 开放平台消息模板：`#qbot模板` / `#qbot消息模板` / `#qbot模板列表` */
export const RE_MSG_TPL = /^#?qbot(消息)?模板(列表)?$/

/** 开放平台更新 IP 白名单：`#qbot更新ip` / `#qbot更新ip 1.2.3.4` */
export const RE_UPIP = /^#?qbot更新ip\s*((?:\d{1,3}\.){3}\d{1,3})?$/

/** 更多管理面板：`#qbot管理` */
export const RE_MANAGE = /^#?qbot管理$/

/**
 * KV 存储键前缀
 * 所有 keys 均以 `qbot:` 开头，便于统一管理与清理
 */
export const KV_PREFIX = 'qbot:'

/** 总消息数（按机器人隔离） */
export const KV_COUNT_TOTAL = (selfId: string) => `${KV_PREFIX}count:total:${selfId}`

/** 单日消息数，拼接机器人 + 日期 */
export const KV_COUNT_DAY = (selfId: string, date: string) => `${KV_PREFIX}count:day:${selfId}:${date}`

/** 单日活跃用户，拼接机器人 + 日期 */
export const KV_DAU_DAY = (selfId: string, date: string) => `${KV_PREFIX}dau:day:${selfId}:${date}`

/** 使用过的用户 openid 列表（去重，按机器人隔离） */
export const KV_USERS = (selfId: string) => `${KV_PREFIX}count:users:${selfId}`

/** 已记录的群号列表（按机器人隔离） */
export const KV_GROUPS = (selfId: string) => `${KV_PREFIX}groups:${selfId}`

/** 开放平台登录票据：user 当前管理的 appId */
export const KV_APPID = (userId: string) => `${KV_PREFIX}login:${userId}`

/** 开放平台登录 Cookie：userId + appId（票据为开发者账号级，同一账号名下应用通用） */
export const KV_COOKIE = (userId: string, appId: string) => `${KV_PREFIX}cookie:${userId}:${appId}`