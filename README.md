# karin-plugin-qbot

基于 Karin 框架的 QQ 开放平台机器人管理插件，内置 Web 控制台，可查看机器人运行状态、消息统计与基础配置。

## ✨ 功能

- **状态总览**：机器人登录状态、统计运行状态实时展示
- **数据统计**：按账号查看近 7 / 14 / 30 天的消息量与活跃天数趋势
- **基础设置**：消息统计天数等基础配置
- **暗色模式**：Web 控制台自动跟随系统深色模式

## 📦 安装

在 karin 根目录下安装：

```bash
pnpm add karin-plugin-qbot -w
```

## 🚀 本地开发

```bash
pnpm install       # 安装根依赖（使用 pnpm）
pnpm setup:web     # 安装 web 前端依赖（npm）
pnpm dev           # 启动开发调试
pnpm build         # 编译（tsdown 后端 + vite 前端）
```

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

## 📜 License

MIT