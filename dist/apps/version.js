globalThis.__KTR_BUNDLED__ = true;
import { n as renderTemplateImage, t as sendInputNotify } from "../inputNotify-DBpkbcIo.js";
import { dir } from "../dir.js";
import { a as platformName$1, i as nodeVersion$1, o as pluginVersion, r as karinVersion$1, t as getRemoteVersion } from "../version-DGe663pF.js";
import { O as RE_VERSION, d as isQqbot } from "../model-xZ4cLE8E.js";
import { uploadImageToCos } from "./fileurl.js";
import { karin as karin$1, segment } from "node-karin";

//#region ktr/template/qbot/version/data/default.json
var default_default = {
	title: "VERSION",
	version: "1.0.6",
	pluginName: "karin-plugin-qbot",
	latestText: "已是最新版本",
	latestOk: true,
	nodeVersion: "v24.15.0",
	platformName: "Windows",
	karinVersion: "1.0.0"
};

//#endregion
//#region src/apps/version.ts
/**
* 插件版本：#qbot版本
* 渲染版本信息页图片（Node / 平台 / Karin 版本为服务器真实环境；
* npm 最新版本通过 node-karin 从 npm 获取）。
* QQBot 平台用 markdown 包裹图片发送，其他平台直接发送图片。
*/
const version = karin$1.command(RE_VERSION, async (e) => {
	/** 渲染耗时，先发输入状态，避免用户干等 */
	await sendInputNotify(e.bot, e.contact);
	const remote = await getRemoteVersion(dir.name);
	const latestText = remote ? remote === pluginVersion ? "已是最新版本" : `存在新版本 v${remote}` : "npm 查询失败";
	const data = {
		...default_default,
		version: pluginVersion,
		pluginName: dir.name,
		latestText,
		latestOk: remote === pluginVersion,
		nodeVersion: nodeVersion$1,
		platformName: platformName$1,
		karinVersion: karinVersion$1
	};
	const image = await renderTemplateImage("qbot/version", data);
	/** QQBot：md 图片需公网直链，主动分片上传换取 COS 临时直链（ttl 86400s） */
	if (isQqbot(e)) {
		const uploaded = await uploadImageToCos(e.contact, e.selfId, image);
		await e.reply(segment.markdown(`![version](${uploaded})`));
		return true;
	}
	await e.reply(segment.image(`base64://${image}`));
	return true;
}, {
	name: "qbot版本",
	permission: "all"
});

//#endregion
export { version };