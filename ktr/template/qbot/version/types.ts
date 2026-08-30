/** 版本页面数据类型（src/apps/version.ts 与模板共用） */

export interface VersionData {
  /** 头部大标题，固定 `VERSION` */
  title: string
  /** 插件当前版本 */
  version: string
  /** 插件包名 */
  pluginName: string
  /** npm 最新版本状态文案 */
  latestText: string
  /** 是否已是最新版本 */
  latestOk: boolean
  /** Node 版本（服务端真实环境） */
  nodeVersion: string
  /** 系统平台名称（服务端真实环境） */
  platformName: string
  /** Karin 框架版本（服务端真实环境） */
  karinVersion: string
}
