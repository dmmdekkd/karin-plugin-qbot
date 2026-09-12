globalThis.__KTR_BUNDLED__ = true;
import { n as renderTemplateImage, t as sendInputNotify } from "../inputNotify-DSiR3tSn.js";
import { dir } from "../dir.js";
import { n as isNewerVersion, o as pluginVersion, r as karinVersion, t as getRemoteVersion } from "../version-DGe663pF.js";
import { E as RE_UPDATE, N as config$1, d as isQqbot } from "../model-xZ4cLE8E.js";
import { uploadImageToCos } from "./fileurl.js";
import karin, { checkPkgUpdate, config, db, hooks, karin as karin$1, restart, segment, updatePkg } from "node-karin";
import { marked } from "marked";

//#region src/utils/changelog.ts
/** 解析 CHANGELOG.md：`## 版本` 为分组，`- 条目` 为变更项（基于 marked AST） */
const parseChangelog = (markdown) => {
	const entries = [];
	let current;
	for (const token of marked.lexer(markdown)) if (token.type === "heading" && token.depth === 2) {
		current = {
			version: token.text,
			items: []
		};
		entries.push(current);
	} else if (token.type === "list" && current) current.items.push(...token.items.map((item) => item.text));
	return entries;
};
/** 从 npm CDN 拉取指定版本 CHANGELOG.md 并解析，失败返回 undefined */
const fetchRemoteChangelog = async (version) => {
	const urls = [`https://unpkg.com/${dir.name}@${version}/CHANGELOG.md`, `https://cdn.jsdelivr.net/npm/${dir.name}@${version}/CHANGELOG.md`];
	for (const url of urls) {
		const entries = await fetch(url).then((res) => res.ok ? res.text() : "").then(parseChangelog).catch(() => []);
		if (entries.length > 0) return entries;
	}
};
/**
* 渲染更新日志图片（注入远端版本供页脚更新提示），失败返回 undefined
* @param version 用于页脚展示的插件版本
* @param onlyVersion true=仅展示该版本条目（更新成功后）；false=展示全部历史日志（#qbot更新日志）
*/
const renderChangelog = async (version, onlyVersion = true) => {
	const entries = await fetchRemoteChangelog(version);
	const [pluginLatest, karinLatest] = await Promise.all([getRemoteVersion(dir.name), getRemoteVersion("node-karin")]);
	const data = {
		pluginName: dir.name,
		version,
		karinVersion,
		pluginLatest: pluginLatest && isNewerVersion(pluginLatest, pluginVersion) ? pluginLatest : void 0,
		karinLatest: karinLatest && isNewerVersion(karinLatest, karinVersion) ? karinLatest : void 0,
		/** onlyVersion 时只保留该版本条目；否则展示全部历史日志 */
		entries: onlyVersion ? (entries ?? []).filter((entry) => entry.version === version) : entries ?? [],
		emptyText: "该版本暂无更新日志"
	};
	return renderTemplateImage("qbot/changelog", data).catch(() => void 0);
};

//#endregion
//#region src/utils/update.ts
/**
* 更新检测与主人通知链路（#qbot更新 定时检测的后端逻辑）：
* 检测新版 → 版本提醒锁去重 → 按 Bot 匹配主人 → 渲染日志私聊推送。
* 与命令层（src/apps/update.ts）解耦，便于复用与测试。
*/
/** 获取插件远程最新版（用于更新检测）：无新版或异常时返回 undefined */
const getPluginRemote = async () => {
	const upd = await checkPkgUpdate(dir.name, { compare: "semver" }).catch(() => null);
	if (!upd || upd.status !== "yes" || !isNewerVersion(upd.remote, upd.local)) return void 0;
	return upd.remote;
};
/** 版本提醒锁：已推送过相同或更高版本则跳过，否则记录本次版本 */
const acquireUpdateLock = async (remote) => {
	const locked = await db.get("qbot:update:lock");
	if (typeof locked === "string") {
		if (isNewerVersion(locked, pluginVersion)) {
			if (!isNewerVersion(remote, locked)) return false;
		} else await db.del("qbot:update:lock").catch(() => {});
	}
	await db.set("qbot:update:lock", remote).catch(() => {});
	return true;
};
/** 为每个主人匹配可用 Bot 并按 Bot 分组（好友命中优先，QQBot 无好友体系则回落 qqbot 机器人） */
const matchMasterBots = async (masters) => {
	const botItems = karin$1.getAllBotList().filter((b) => b.bot.account.name !== "console");
	const friendList = await Promise.all(botItems.map((it) => it.bot.getFriendList().catch(() => [])));
	const defaultBot = botItems.find((it) => it.bot.adapter.protocol === "qqbot")?.bot;
	const botToOwners = /* @__PURE__ */ new Map();
	for (const owner of masters) {
		const bot = botItems.find((_, i) => friendList[i].some((f) => f.userId === owner))?.bot ?? defaultBot;
		if (!bot) continue;
		const group = botToOwners.get(bot.account.selfId);
		if (group) group.owners.push(owner);
		else botToOwners.set(bot.account.selfId, {
			bot,
			owners: [owner]
		});
	}
	return botToOwners;
};
/** 构建更新日志图片的发送元素：QQBot 上传 COS 直链走 markdown，其余平台直接 base64 图片（上传失败回落纯文本） */
const buildChangelogImage = async (image, qqbot, contact, selfId) => {
	if (qqbot) {
		const uploaded = await uploadImageToCos(contact, selfId, image, "changelog.png");
		if (!uploaded) return [];
		return [segment.markdown(`![changelog](${uploaded})`)];
	}
	return [segment.image(`base64://${image}`)];
};
/**
* 定时检测到新版时，私聊主人发送简短文字提示。
* 更新日志不在此发送，由 `#qbot更新日志` 或更新成功后发送，避免重复。
* 记录首条消息ID，供主人回复「更新」触发更新链路。
*/
const notifyMasters = async (botToOwners, remote) => {
	let storedMsgId;
	for (const { bot, owners } of botToOwners.values()) {
		const text = `${dir.name} 有新版 v${remote}，回复「更新」或发送 #qbot更新 更新`;
		const elements = bot.adapter.protocol === "qqbot" ? [segment.markdown(text)] : [segment.text(text)];
		for (const owner of owners) {
			const msg = await karin$1.sendMaster(bot.account.selfId, owner, elements);
			if (!storedMsgId && msg?.messageId) storedMsgId = msg.messageId;
		}
	}
	if (storedMsgId) await db.set("qbot:update:msgId", storedMsgId).catch(() => {});
};

//#endregion
//#region src/apps/update.ts
/** 更新成功三行文案（Hook 与命令共用） */
const successText = (local, remote) => `${dir.name} 更新成功！\n${local ?? "未知"} -> ${remote ?? "未知"}\n开始执行重启......`;
/** 更新失败文案：无更新时提示已是最新版，其余统一简洁失败信息（不透出 karin 内部 data） */
const failText = (data) => {
	if (typeof data === "string" && data.includes("无更新")) return "当前已是最新版本";
	return `${dir.name} 更新失败: 更新执行失败`;
};
/** 渲染并发送指定版本的更新日志（仅该版本段落），失败返回 false */
const sendVersionChangelog = async (e, version) => {
	const image = await renderChangelog(version);
	if (!image) return false;
	await e.reply(await buildChangelogImage(image, isQqbot(e), e.contact, e.selfId));
	return true;
};
/** 执行更新：成功后先发「更新成功」再发当前已更新版本的更新日志，最后重启 */
const applyUpdate = async (e) => {
	const result = await updatePkg(dir.name);
	if (result.status !== "ok") {
		await e.reply(failText(result.data));
		return;
	}
	const successMsg = await e.reply(successText(result.local, result.remote));
	await sendVersionChangelog(e, result.remote);
	if (successMsg?.messageId) {
		await db.del("qbot:update:msgId").catch(() => {});
		await db.del("qbot:update:lock").catch(() => {});
	}
	await restart(e.selfId, e.contact, successMsg.messageId);
};
/** 回复「更新」提醒消息触发更新 */
const handleUpdateHook = async (e) => {
	await e.reply(`开始更新 ${dir.name} ...`, { reply: true });
	const upd = await checkPkgUpdate(dir.name, { compare: "semver" });
	if (upd.status === "yes") await applyUpdate(e);
	else await e.reply(upd.status === "no" ? "未检测到可更新版本。" : `${dir.name} 更新失败: ${upd.error?.message ?? String(upd.error)}`);
};
const qbotUpdate = hooks.message.friend(async (e, next) => {
	if (e.msg.includes("更新")) {
		const msgId = await db.get("qbot:update:msgId");
		if (e.replyId === msgId) await handleUpdateHook(e);
	}
	next();
}, { priority: 100 });
/** 按平台构建消息：QQBot 使用 markdown 段，其余平台直接文本 */
const withPlatform = (e, text) => isQqbot(e) ? segment.markdown(text) : text;
/** #qbot更新日志：获取远端最新版并渲染发送完整全部更新日志 */
const sendChangelog = async (e) => {
	if (!await getRemoteVersion(dir.name)) {
		await e.reply("获取远程版本失败");
		return true;
	}
	const image = await renderChangelog(dir.version, false);
	if (!image) {
		await e.reply("获取更新日志失败");
		return true;
	}
	await e.reply([segment.text(`${dir.name} 的更新日志：`), ...await buildChangelogImage(image, isQqbot(e), e.contact, e.selfId)]);
	return true;
};
/**
* 插件更新：#qbot更新 / #qbot强制更新 / #qbot更新日志
* 本插件通过 npm 安装，更新统一走 updatePkg，完成后自动重启
*/
const updateCommand = karin.command(RE_UPDATE, async (e) => {
	const [, , , isLog] = e.msg.match(RE_UPDATE) ?? [];
	/** 耗时前先发输入状态，避免用户干等 */
	await sendInputNotify(e.bot, e.contact);
	if (isLog) return await sendChangelog(e);
	const res = await updatePkg(dir.name);
	if (res.status === "failed") return await e.reply(withPlatform(e, failText(res.data)));
	await e.reply(withPlatform(e, successText(res.local, res.remote)));
	if (!await sendVersionChangelog(e, res.remote)) await e.reply("获取更新日志失败，更新进程继续......");
	await restart(e.selfId, e.contact, e.messageId, true, true);
	return true;
}, {
	name: "插件更新",
	permission: "master"
});
/** 定时更新检测：检查新版并私聊短提示通知所有主人（后端链路已下沉至 utils/update） */
const Handler = async () => {
	if (!config$1().autoUpdate?.enable) return true;
	const remote = await getPluginRemote();
	if (!remote || !await acquireUpdateLock(remote)) return true;
	const masters = config.master().filter((id) => id !== "console");
	await notifyMasters(await matchMasterBots(masters), remote);
	return true;
};
const update = karin.task("qbot-更新检测", config$1().autoUpdate?.cron || "0 0 4 * * *", Handler, {
	name: "qbot-更新检测",
	log: false,
	type: "skip"
});

//#endregion
export { qbotUpdate, update, updateCommand };