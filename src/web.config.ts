import { defineConfig } from 'node-karin'

/**
 * Karin WebUI 配置：自定义页面模式
 * Karin WebUI 会在插件配置页内通过 iframe 加载 /qbot-web/（由 src/web/server.ts 挂载的静态路由提供）
 * 文档：https://karin.wuliya.cn/guide/plugins/webui.html
 */
export default defineConfig({
  info: {
    id: 'karin-plugin-qbot',
    name: 'QBot',
    author: { name: 'shijin' },
    icon: { name: 'settings', size: 24, color: '#B2A8D3' },
    description: 'QQ 开放平台机器人管理插件',
  },
  page: {
    url: '/qbot-web/',
    title: 'QBot 管理面板',
    description: '登录状态、数据统计与插件配置',
  },
})
