globalThis.__KTR_BUNDLED__ = true;
import { n as renderTemplateImage, t as sendInputNotify } from "../inputNotify-DSiR3tSn.js";
import { dir } from "../dir.js";
import { n as isNewerVersion, o as pluginVersion, r as karinVersion, t as getRemoteVersion } from "../version-DGe663pF.js";
import { M as md, d as isQqbot, f as manageButtons, r as getBotName, v as RE_HELP, x as RE_MANAGE } from "../model-xZ4cLE8E.js";
import { uploadImageToCos } from "./fileurl.js";
import { karin as karin$1, segment } from "node-karin";

//#region ktr/template/qbot/help/data/default.json
var default_default = {
	title: "COMMANDS",
	version: "1.0.6",
	groups: [
		{
			"title": "统计",
			"en": "STATISTICS",
			"items": [{
				"cmd": "#qbot统计",
				"desc": "查看使用人数/群组数",
				"icon": "users"
			}]
		},
		{
			"title": "开放平台",
			"en": "OPEN PLATFORM",
			"items": [
				{
					"cmd": "#qbot登录",
					"desc": "扫码登录",
					"icon": "login"
				},
				{
					"cmd": "#qbot列表",
					"desc": "查看应用列表",
					"icon": "list"
				},
				{
					"cmd": "#qbot切换",
					"desc": "切换当前 bot",
					"icon": "switch"
				},
				{
					"cmd": "#qbot数据 [N]",
					"desc": "最近 N 天统计",
					"icon": "data"
				},
				{
					"cmd": "#qbot通知",
					"desc": "站内通知",
					"icon": "notify"
				},
				{
					"cmd": "#qbot订阅",
					"desc": "事件订阅",
					"icon": "subscribe"
				},
				{
					"cmd": "#qbot模板",
					"desc": "消息模板",
					"icon": "template"
				},
				{
					"cmd": "#qbot更新ip [IP]",
					"desc": "更新 IP 白名单（仅私聊）",
					"icon": "ip"
				}
			]
		},
		{
			"title": "其他",
			"en": "OTHER",
			"items": [
				{
					"cmd": "#qbot版本",
					"desc": "插件版本",
					"icon": "version"
				},
				{
					"cmd": "#qbot更新",
					"desc": "更新插件",
					"icon": "update"
				},
				{
					"cmd": "#qbot更新日志",
					"desc": "更新日志",
					"icon": "changelog"
				}
			]
		}
	]
};

//#endregion
//#region src/apps/help.ts
/**
* 构建帮助页数据：mock JSON 基础上注入真实版本与远端更新状态。
* 插件/Karin 任一存在新版本时注入对应的远端版本，底部由共享页脚渲染更新提示。
* item.icon 与 ktr/template/qbot/help/components/icons.tsx 对应。
*/
const buildHelpData = async () => {
	const [pluginLatest, karinLatest] = await Promise.all([getRemoteVersion(dir.name), getRemoteVersion("node-karin")]);
	return {
		...default_default,
		version: pluginVersion,
		karinVersion,
		pluginLatest: pluginLatest && isNewerVersion(pluginLatest, pluginVersion) ? pluginLatest : void 0,
		karinLatest: karinLatest && isNewerVersion(karinLatest, karinVersion) ? karinLatest : void 0
	};
};
const help = karin$1.command(RE_HELP, async (e) => {
	/** 渲染耗时，先发输入状态，避免用户干等 */
	await sendInputNotify(e.bot, e.contact);
	const image = await renderTemplateImage("qbot/help", await buildHelpData());
	/** QQBot：md 图片需公网直链，主动分片上传换取 COS 临时直链（ttl 86400s） */
	if (isQqbot(e)) {
		const uploaded = await uploadImageToCos(e.contact, e.selfId, image);
		await e.reply(segment.markdown(`![help](${uploaded})`));
		return true;
	}
	await e.reply(segment.image(`base64://${image}`));
	return true;
}, {
	name: "qbot帮助",
	permission: "all"
});
/** 更多管理面板：#qbot管理（主按钮面板的"更多管理"指向这里） */
const manage = karin$1.command(RE_MANAGE, async (e) => {
	const botName = await getBotName(e);
	await e.reply(isQqbot(e) ? [segment.markdown(md`
          ### ${botName}管理
          > 点击按钮使用对应功能
        `), ...manageButtons()] : md`
      ${botName}更多管理
      #qbot切换         切换当前 bot（多应用）
      #qbot数据 [N]     最近 N 天数据统计
      #qbot模板         查看消息模板
      #qbot订阅         查看事件订阅
      #qbot统计         查看使用人数/群组数
      #qbot版本         查看插件版本
    `);
	return true;
}, {
	name: "qbot管理",
	permission: "all"
});

//#endregion
export { help, manage };