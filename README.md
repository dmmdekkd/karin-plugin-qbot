# karin-plugin-qbot

基于 [Karin](https://karin.wuliya.cn) 框架的 QQ 开放平台机器人管理插件，提供开放平台登录管理、数据统计、消息模板与事件订阅等能力；支持 QQBot 与通用协议，配置由 Karin WebUI 组件统一管理。

## ✨ 功能特性

- **登录管理**：扫码授权开放平台账号，管理名下机器人应用，支持多应用切换
- **数据统计**：`#qbot统计` 展示使用人数/群组规模；`#qbot数据 [N]` 拉取开放平台官方近 1~30 天数据
- **开放平台运维**：事件订阅（`#qbot订阅`）、消息模板（`#qbot模板`）、站内通知（`#qbot通知`）、IP 白名单（`#qbot更新ip`）
- **消息体验**：帮助页/版本页/更新日志页均为 ktr 模板渲染图片（适配 QQ 官方图片图床）；耗时命令执行时向私聊会话下发「正在输入」状态提示
- **新用户欢迎**：首次使用自动发送欢迎语（QQBot 以 Markdown + @ 呈现）
- **插件自更新**：`#qbot更新` 一键升级并自动重启，更新日志内置于包内

## 📖 命令列表

> 命令前缀 `#` 可省略；除标注外均对所有用户开放。

| 命令 | 说明 |
| --- | --- |
| `qbot帮助` / `qbot菜单` | 帮助菜单（图片渲染） |
| `qbot版本` | 版本信息页（Node/平台/Karin 框架/插件版本与 npm 最新版） |
| `qbot管理` | 更多管理面板（按钮交互） |
| `qbot登录` / `管理登录` | 扫码登录 QQ 开放平台 |
| `qbot列表` | 名下机器人应用列表 |
| `qbot切换 [appId]` | 多应用切换（面板 / 指定 appId） |
| `qbot数据 [N]` | 开放平台数据统计，默认近 N 天（1~30） |
| `qbot统计` / `qbot用户统计` / `qbot群聊统计` | 使用人数 / 群组数统计 |
| `qbot通知` | 开放平台站内通知 |
| `qbot订阅` | 事件订阅管理 |
| `qbot模板` / `qbot消息模板` / `qbot模板列表` | 消息模板列表 |
| `qbot更新ip [ip]` | 更新 IP 白名单（可附具体 IP） |
| `qbot更新` | 插件更新并自动重启（master） |
| `qbot强制更新` | 忽略缓存强制更新（master） |
| `qbot更新日志` | 查看包内更新日志（master） |

## 📦 安装

在 Karin 根目录下安装：

```bash
pnpm add karin-plugin-qbot -w
```

## ⚙️ 配置

WebUI 管理端 → 插件 → qbot 面板，可直接开关「数据统计」「新用户欢迎语」并调整统计默认天数；配置文件位于 Karin 的 `config/config.json`：

```json
{
  "statistics": { "enable": true },
  "welcome": { "enable": true },
  "qbot": { "day": 5 }
}
```

## 🚀 本地开发

```bash
pnpm install       # 安装根依赖（使用 pnpm）
pnpm dev           # 启动开发调试
pnpm build         # 编译（tsdown）
```

消息模板（帮助/版本/更新日志页）位于 `ktr/template/qbot/`，为 React/TSX 模板；`data/default.json` 同时作为 ktr 开发面板 mock 与运行时注入数据的源，修改模板后需执行 `ktr` 相关命令热更。

## 📤 发布到 npm（GitHub Actions）

版本号在 `package.json` 中**手动维护**，工作流只负责构建与发布，不自动修改版本、不更新 CHANGELOG、不创建 PR。

1. 修改 `package.json` 的 `version`（如 `1.0.0` → `1.0.1`）
2. 提交并推送（仅涉及 `package.json` 的提交才会触发发布）：

```bash
git add package.json
git commit -m "chore: v1.0.1"
git push
```

3. Actions 自动执行：pnpm 安装依赖 → 构建 → 校验版本未发布 → `npm publish`

如遇漏发，可在 Actions 页面手动运行 **Publish to npm** 兜底。

### 配置 NPM_TOKEN（首次必做）

1. 注册并登录 [npmjs](https://www.npmjs.com/)
2. 头像 → **Access Tokens** → **Generate New Token** → 类型选 **Classic Token / Automation**
3. 复制生成的 Token（仅显示一次）
4. 打开 GitHub 仓库 → **Settings → Secrets and variables → Actions** → **New repository secret**
   - Name：`NPM_TOKEN`
   - Value：粘贴复制的 Token

> 发布时使用的 npm 账号必须是当前包名的所有者或协作者，否则发布会因权限不足失败。

## ❓ 常见问题

- **发布提示版本已存在**：说明当前 `package.json` 版本号已在 npm 上，修改版本号后重新推送即可
- **构建失败**：查看 Actions 日志定位；根依赖请使用 pnpm 安装（该仓库无 package-lock.json，npm 安装会崩溃）
- **如何本地调试**：推荐 `pnpm link --global` 或本地依赖方式挂载调试
- **「正在输入」提示未出现**：输入状态仅对 QQ 官方协议私聊会话生效，群聊与其它协议不触发
- **更新日志为空**：更新日志读取包内 `CHANGELOG.md`，无该文件时渲染空状态页

## 📜 License

MIT