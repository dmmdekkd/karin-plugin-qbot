'use strict'
const test = require('node:test')
const assert = require('node:assert/strict')
const { parseSections, validateIssue } = require('./issue-quality.cjs')
const bugConfirmation = `- [x] 已阅读文档
- [x] 已搜索
- [x] 已更新
- [x] 已脱敏
- [x] 理解关闭规则`
const featureConfirmation = `- [x] 已阅读并搜索
- [x] 不是个人排障
- [x] 会描述场景
- [x] 理解不承诺实现`
test('parseSections parses Issue Form markdown fields', () => {
  const sections = parseSections('### 问题描述\n\n详细描述\n\n### 预期行为\n\n正常返回')
  assert.equal(sections.get('问题描述'), '详细描述')
  assert.equal(sections.get('预期行为'), '正常返回')
})
test('validateIssue ignores legacy forms when they are edited later', () => {
  const body = `### 提交前检查
- [x] 我已经搜索过现有的 Issues
### 功能描述
旧版模板中的功能描述`
  assert.deepEqual(validateIssue({ title: 'Feature: 旧版功能建议仍需补充', body, labels: ['enhancement'] }).problems, [])
})
test('validateIssue accepts a complete bug report', () => {
  const body = `### 提交前确认
${bugConfirmation}
### 问题类型
事件订阅
### 涉及平台
QQ 开放平台
### 问题描述
更新插件后，启用的事件订阅会重复收到同一条回调，且可能在多个会话中重复处理。
### 复现步骤
1. 在开放平台配置事件订阅并启用
2. 触发一次事件回调
3. 查看机器人处理记录
### 实际结果与完整日志
日志显示同一个事件 ID 在同一分钟内进入两次处理流程。\n\`\`\`text\n[10:00:01] event 123 processed\n[10:00:02] event 123 processed\n\`\`\`
### 预期行为
同一个事件 ID 只被处理一次。
### 相关配置
event.subscriptions: [...]\nnotify.enable: true
### 运行环境
- 插件版本（#qbot版本）：1.0.6\n- Karin 版本：1.17.0\n- Node.js 版本：24.13.0\n- 操作系统：Ubuntu 24.04\n- 适配器 / 协议端：adapter-qqbot / 官方开放平台\n- 安装方式（插件市场 / npm / Git / Docker）：插件市场
### 复现频率
必现（每次都能复现）`
  assert.deepEqual(validateIssue({ title: 'Bug: 事件订阅回调会重复处理', body, labels: [{ name: 'bug' }] }).problems, [])
})
test('validateIssue rejects placeholder content and incomplete environment', () => {
  const body = `### 提交前确认
${bugConfirmation}
### 问题类型
事件订阅
### 涉及平台
QQ 开放平台
### 问题描述
test
### 复现步骤
*
### 实际结果与完整日志
如图
### 预期行为
无
### 相关配置
*
### 运行环境
- 插件版本（#qbot版本）：最新版\n- Karin 版本：\n- Node.js 版本：\n- 操作系统：\n- 适配器 / 协议端：\n- 安装方式（插件市场 / npm / Git / Docker）：
### 复现频率
仅出现一次`
  const result = validateIssue({ title: 'Bug:', body, labels: ['bug'] })
  assert.ok(result.problems.length >= 10)
  assert.ok(result.problems.some((problem) => problem.includes('标题过短')))
  assert.ok(result.problems.some((problem) => problem.includes('插件版本')))
})
test('validateIssue accepts a complete feature proposal', () => {
  const body = `### 提交前确认
${featureConfirmation}
### 建议类型
WebUI 或配置体验
### 涉及平台
QQ 开放平台
### 需求背景
管理多个用途不同的应用时，每个应用需要接收不同内容，但当前推送内容只能使用同一份全局配置。
### 功能建议
允许为指定应用覆盖发送内容配置；没有单独配置的应用继续继承全局设置，并能随时恢复继承。
### 使用场景
测试应用只发送信息卡片，生产应用发送卡片和视频；管理员保存后，两个应用分别按自己的配置发送。
### 现有方案与不足
目前只能部署多个插件实例或每次手工切换全局配置，维护成本高且容易误发。
### 预期受益范围
使用该平台或模块的用户会受益
### 兼容性与风险
未配置的应用必须继续沿用现有全局行为。
### 补充材料
愿意协助测试。`
  assert.deepEqual(validateIssue({ title: 'Feature: 支持按应用覆盖推送内容', body, labels: ['enhancement'] }).problems, [])
})
test('validateIssue rejects duplicated feature answers', () => {
  const repeated = '希望增加按应用配置推送内容的功能，满足不同应用分别发送不同内容的实际使用需求。'
  const body = `### 提交前确认
${featureConfirmation}
### 建议类型
WebUI 或配置体验
### 涉及平台
QQ 开放平台
### 需求背景
${repeated}
### 功能建议
${repeated}
### 使用场景
管理员维护多个用途不同的应用，需要让不同的应用收到不同消息。
### 现有方案与不足
当前只能部署多个实例，维护成本过高。
### 预期受益范围
使用该平台或模块的用户会受益`
  const result = validateIssue({ title: 'Feature: 支持按应用覆盖推送内容', body, labels: ['enhancement'] })
  assert.ok(result.problems.some((problem) => problem.includes('内容完全重复')))
})
