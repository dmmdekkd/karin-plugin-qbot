globalThis.__KTR_BUNDLED__ = true;
import { dir } from "./dir.js";
import { o as pluginVersion } from "./version-DGe663pF.js";
import { copyConfigSync, db, filesByExt, karin as karin$1, logger, requireFileSync, segment, watch } from "node-karin";
import "node-karin/lodash";
import "node-karin/moment";

//#region src/utils/config.ts
/**
* @description 初始化配置文件
*/
copyConfigSync(dir.defConfigDir, dir.ConfigDir, [".json"]);
/**
* @description 配置文件
*/
const config$1 = () => {
	const cfg = requireFileSync(`${dir.ConfigDir}/config.json`);
	return {
		...requireFileSync(`${dir.defConfigDir}/config.json`),
		...cfg
	};
};
/**
* @description 监听配置文件
*/
setTimeout(() => {
	filesByExt(dir.ConfigDir, ".json", "abs").forEach((file) => watch(file, () => {
		logger.info(`${logger.violet(`[插件:${pluginVersion}]`)} ${logger.green(dir.name)} 检测到配置更新啦～ (๑•̀ㅂ•́)و✧`);
	}));
}, 2e3);

//#endregion
//#region src/utils/common.ts
/**
* 睡眠函数
* @param ms - 毫秒
*/
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/**
* YYYYMMDD → M月D日（接口返回数字日期，直接用数字运算解析，无效值返回 -）
* @param ymd - 日期字符串或数字
*/
const fmtDate = (ymd) => {
	const date = Number(ymd);
	if (!(date >= 1e7 && date <= 99999999)) return "-";
	return `${Math.floor(date / 100) % 100}月${date % 100}日`;
};
/**
* 秒级时间戳 → YYYY年M月D日 HH:mm
* @param ts - 秒级时间戳字符串
*/
const fmtTime = (ts) => {
	const t = /* @__PURE__ */ new Date(parseInt(ts) * 1e3);
	const pad = (n) => String(n).padStart(2, "0");
	return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日 ${pad(t.getHours())}:${pad(t.getMinutes())}`;
};
/**
* 模板标签：多行书写消息文本，自动去除每行公共缩进、首尾空行，并将换行转为 QQ markdown 的 \r
*/
const md = (strings, ...values) => {
	const lines = strings.map((s, i) => i < values.length ? s + (values[i] == null ? "" : String(values[i])) : s).join("").split("\n");
	const indents = lines.filter((line) => line.trim()).map((line) => line.match(/^[ \t]*/)[0].length);
	const indent = indents.length ? Math.min(...indents) : 0;
	return lines.map((line) => line.slice(indent)).join("\r").trim();
};

//#endregion
//#region src/utils/constants.ts
/**
* 插件命令正则以集中管理，保持命令入口一致
*/
/** 帮助菜单 */
const RE_HELP = /^#?qbot(帮助|菜单)$/;
/** 版本查询 */
const RE_VERSION = /^#?qbot(插件)?版本$/;
/** 使用人数/群数统计（对齐 QBot）：`#qbot统计` / `#qbot用户统计` / `#qbot群聊统计` */
const RE_STAT = /^#?qbot(用户|群聊)?统计$/;
/** 插件更新：`#qbot更新` / `#qbot强制更新` / `#qbot更新日志` */
const RE_UPDATE = /^#?qbot(插件)?(强制)?更新(日志)?$/;
/** 开放平台登录：`#qbot登录` / `#管理登录` */
const RE_LOGIN = /^#?(?:qbot登录|管理登录)$/;
/** 开放平台数据统计：`#qbot数据` / `#qbot数据 7` */
const RE_DATA = /^#?qbot数据\s*(\d+)?$/;
/** 开放平台应用列表：`#qbot列表` */
const RE_LIST = /^#?qbot列表$/;
/** 开放平台多应用切换：`#qbot切换`（面板）/ `#qbot切换 <appId>`（按钮回调） */
const RE_SWITCH = /^#?qbot切换(?:\s+(\d+))?$/;
/** 开放平台站内通知：`#qbot通知` */
const RE_OPEN_NOTICE = /^#?qbot通知$/;
/** 开放平台事件订阅：`#qbot订阅` */
const RE_WHLIST = /^#?qbot订阅$/;
/** 开放平台消息模板：`#qbot模板` / `#qbot消息模板` / `#qbot模板列表` */
const RE_MSG_TPL = /^#?qbot(消息)?模板(列表)?$/;
/** 开放平台更新 IP 白名单：`#qbot更新ip` / `#qbot更新ip 1.2.3.4` */
const RE_UPIP = /^#?qbot更新ip\s*((?:\d{1,3}\.){3}\d{1,3})?$/;
/** 更多管理面板：`#qbot管理` */
const RE_MANAGE = /^#?qbot管理$/;
/**
* KV 存储键前缀
* 所有 keys 均以 `qbot:` 开头，便于统一管理与清理
*/
const KV_PREFIX = "qbot:";
/** 总消息数（按机器人隔离） */
const KV_COUNT_TOTAL = (selfId) => `${KV_PREFIX}count:total:${selfId}`;
/** 单日消息数，拼接机器人 + 日期 */
const KV_COUNT_DAY = (selfId, date) => `${KV_PREFIX}count:day:${selfId}:${date}`;
/** 单日活跃用户，拼接机器人 + 日期 */
const KV_DAU_DAY = (selfId, date) => `${KV_PREFIX}dau:day:${selfId}:${date}`;
/** 使用过的用户 openid 列表（去重，按机器人隔离） */
const KV_USERS = (selfId) => `${KV_PREFIX}count:users:${selfId}`;
/** 已记录的群号列表（按机器人隔离） */
const KV_GROUPS = (selfId) => `${KV_PREFIX}groups:${selfId}`;
/** 开放平台登录票据：user 当前管理的 appId */
const KV_APPID = (userId) => `${KV_PREFIX}login:${userId}`;
/** 开放平台登录 Cookie：userId + appId（票据为开发者账号级，同一账号名下应用通用） */
const KV_COOKIE = (userId, appId) => `${KV_PREFIX}cookie:${userId}:${appId}`;

//#endregion
//#region src/model/count.ts
/** 获取本地日期字符串 YYYY-MM-DD */
const today = () => {
	const d = /* @__PURE__ */ new Date();
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
/**
* 记录一条消息的统计：消息数、日活、用户/群名单（去重）
* 统计按机器人（selfId）隔离，每个机器人的数据互相独立
* @param userId 发送者 userId
* @param selfId 接收消息的机器人 selfId
* @param groupId 群号，私聊场景传 undefined
* @returns 是否为首次使用插件的用户
*/
const recordMessage = async (userId, selfId, groupId) => {
	const date = today();
	const total = await db.get(KV_COUNT_TOTAL(selfId)) ?? 0;
	await db.set(KV_COUNT_TOTAL(selfId), total + 1);
	const dayKey = KV_COUNT_DAY(selfId, date);
	const day = await db.get(dayKey) ?? 0;
	await db.set(dayKey, day + 1);
	const dauKey = KV_DAU_DAY(selfId, date);
	const users = await db.get(dauKey) ?? [];
	if (!users.includes(userId)) {
		users.push(userId);
		await db.set(dauKey, users);
	}
	const allUsers = await db.get(KV_USERS(selfId)) ?? [];
	let isNewUser = false;
	if (!allUsers.includes(userId)) {
		allUsers.push(userId);
		await db.set(KV_USERS(selfId), allUsers);
		isNewUser = true;
	}
	if (groupId) {
		const groups = await db.get(KV_GROUPS(selfId)) ?? [];
		if (!groups.includes(groupId)) {
			groups.push(groupId);
			await db.set(KV_GROUPS(selfId), groups);
		}
	}
	return {
		isNewUser,
		userCount: allUsers.length
	};
};
/** 获取累计使用人数（按机器人隔离） */
const getUserCount = async (selfId) => (await db.get(KV_USERS(selfId)) ?? []).length;
/** 获取已记录的群号列表及数量（按机器人隔离） */
const getGroups = async (selfId) => await db.get(KV_GROUPS(selfId)) ?? [];

//#endregion
//#region src/model/qbot.ts
/**
* QQ 开放平台网页端管理 API（对齐 QBot-Plugin 的 model/QBot.js）
* 所有接口均需携带扫码登录获取的会话 Cookie：quin/quid/qticket
*/
const QBot = {
	api: "https://q.qq.com",
	bot: "https://bot.q.qq.com",
	/**
	* 发起请求并解析 JSON
	* @param url 请求地址
	* @param method 请求方法
	* @param body 请求体
	* @param uin 开放平台主号
	* @param uid 开发者 ID
	* @param ticket 登录票据
	*/
	async request(url, method, body, uin, uid, ticket) {
		const headers = {
			"User-Agent": "request",
			"Content-Type": "application/json"
		};
		if (uin && uid && ticket) headers.Cookie = `quin=${uin};quid=${uid};qticket=${ticket}`;
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), 15e3);
		try {
			const data = await (await fetch(url, {
				method,
				headers,
				body: body ? JSON.stringify(body) : void 0,
				signal: controller.signal
			})).json();
			logger.debug(`[QBot] ${method} ${url} => ${JSON.stringify(data)}`);
			return data;
		} finally {
			clearTimeout(timer);
		}
	},
	/** 创建登录/授权二维码，返回 { qr, validTime }（qr 自带 markdown 反引号需清洗，validTime 为有效期秒数） */
	async getlogin(type, appId = null, uin, uid, ticket) {
		const data = await this.request(`${this.api}/qrcode/create`, "POST", {
			type,
			miniAppId: appId
		}, uin, uid, ticket);
		const qr = data?.data?.QrCode?.replace(/`/g, "");
		if (!qr) return null;
		return {
			qr,
			validTime: data?.data?.validTime ?? 300
		};
	},
	/** 轮询二维码登录/授权状态 */
	async getqrcode(qrcode) {
		return this.request(`${this.api}/qrcode/get`, "POST", { qrcode });
	},
	/** 获取开发者信息 */
	async getinfo(uin, uid, ticket) {
		return this.request(`${this.api}/pb/GetDeveloper`, "GET", void 0, uin, uid, ticket);
	},
	/** 获取站内通知（站内私信） */
	async getnotice(uin, uid, ticket) {
		return this.request(`${this.api}/pb/AppFetchPrivateMsg`, "POST", {
			page_num: 0,
			page_size: 10,
			receiver: uid,
			appType: 2
		}, uin, uid, ticket);
	},
	/** 获取开发者应用列表 */
	async getlists(uin, uid, ticket) {
		return this.request(`${this.api}/homepagepb/GetAppListForLogin`, "POST", {
			uin,
			developer_id: uid,
			ticket,
			app_type: [2]
		}, uin, uid, ticket);
	},
	/** 获取应用数据统计（type: 0频道 1消息 2群聊 3好友） */
	async getdau(uin, uid, ticket, appid, type) {
		return this.request(`${this.bot}/cgi-bin/datareport/read?bot_appid=${appid}&data_type=${type}&data_range=2&scene_id=1`, "GET", void 0, uin, uid, ticket);
	},
	/** 获取消息模板列表 */
	async getmsg_tpl(uin, uid, ticket, appid) {
		return this.request(`${this.bot}/cgi-bin/msg_tpl/list`, "POST", {
			bot_appid: appid,
			limit: 30
		}, uin, uid, ticket);
	},
	/** 获取事件订阅列表 */
	async getwhlist(uin, uid, ticket, appid) {
		return this.request(`${this.bot}/cgi-bin/event_subscirption/list_event`, "POST", { bot_appid: appid }, uin, uid, ticket);
	},
	/** 更新 IP 白名单，ip 传 0.0.0.0 表示停用 */
	async updateip(uin, uid, ticket, appid, ip, qrcode) {
		const disable = ip === "0.0.0.0";
		return this.request(`${this.bot}/cgi-bin/dev_info/update_white_ip_config`, "POST", {
			bot_appid: appid,
			ip_white_infos: { prod: {
				ip_list: disable ? [] : [ip],
				use: !disable
			} },
			qr_code: qrcode
		}, uin, uid, ticket);
	},
	sleep
};
/** 当前消息是否来自 QQ 官方机器人（开放平台协议），是则发送 markdown+keyboard，否则发送纯文本 */
const isQqbot = (e) => karin$1.getBot("qqbot", true)?.selfId === e.selfId;
/**
* 生成 QQBot 快捷按钮（回调按钮：点击静默触发命令，不展示指令文本；仅 qqbot 协议可用，由命令内 isQqbot 判断后附加）
* 官方限制：最多 5 行、每行最多 5 个按钮；"更多管理"点击发送 #qbot管理，由管理面板展示更多功能
*/
const qbotButtons = () => [segment.keyboard([
	[{
		text: "管理登录",
		data: "#qbot登录",
		callback: true
	}],
	[
		{
			text: "列表",
			data: "#qbot列表",
			callback: true
		},
		{
			text: "数据",
			data: "#qbot数据"
		},
		{
			text: "通知",
			data: "#qbot通知",
			callback: true
		}
	],
	[{
		text: "更多管理",
		data: "#qbot管理",
		style: 4,
		callback: true
	}]
])];
/** 管理面板快捷按钮（#qbot管理：切换/模板/订阅/统计/版本/帮助） */
const manageButtons = () => [segment.keyboard([[
	{
		text: "切换",
		data: "#qbot切换",
		callback: true
	},
	{
		text: "模板",
		data: "#qbot模板",
		callback: true
	},
	{
		text: "订阅",
		data: "#qbot订阅",
		callback: true
	}
], [
	{
		text: "统计",
		data: "#qbot统计",
		callback: true
	},
	{
		text: "版本",
		data: "#qbot版本",
		callback: true
	},
	{
		text: "帮助",
		data: "#qbot帮助",
		callback: true
	}
]])];

//#endregion
//#region src/types/type.ts
/** 开放平台应用状态中文映射（AppInfo.bot_status） */
const AppStatusMap = {
	0: "未知",
	1: "开发中",
	2: "审核中",
	3: "审核通过",
	4: "审核不通过",
	5: "发布中",
	6: "已发布",
	7: "封禁中"
};
/** 开放平台应用类型中文映射（AppInfo.app_type） */
const AppTypeMap = {
	1: "小程序",
	2: "机器人"
};
/** 模板组件类型中文映射（TplInfo.tpl_type） */
const TplTypeMap = {
	1: "按钮组件",
	2: "Markdown组件"
};
/** 模板审核状态中文映射（TplInfo.status） */
const TplStatusMap = {
	1: "未提审",
	2: "审核中",
	3: "已通过",
	4: "未通过"
};

//#endregion
//#region src/model/login.ts
/** 保存登录票据（票据为开发者账号级，同一账号名下应用通用） */
const storeCookies = async (userId, cookies) => {
	await db.set(KV_COOKIE(userId, cookies.appId), cookies);
	await db.set(KV_APPID(userId), cookies.appId);
	logger.info(`[QBot] ${userId} 登录成功，appId=${cookies.appId}`);
};
/** 获取某个用户的登录票据 */
const getCookies = async (userId) => {
	const appId = await db.get(KV_APPID(userId));
	if (!appId) return null;
	const ck = await db.get(KV_COOKIE(userId, appId)) ?? await reuseCookie(userId, appId);
	return ck ? {
		ck,
		appId
	} : null;
};
/** 复用任意已有票据并补建指针应用的票据副本 */
const reuseCookie = async (userId, appId) => {
	const list = await db.keys(KV_COOKIE(userId, "%"));
	for (const key of list) {
		const ck = await db.get(key);
		if (ck) {
			const copied = {
				...ck,
				appId
			};
			await db.set(KV_COOKIE(userId, appId), copied);
			return copied;
		}
	}
	return null;
};
/** 校验票据是否仍有效（通过数据接口验证 retcode===0） */
const validateCookies = async (ck) => {
	try {
		return (await QBot.getdau(ck.uin, ck.developerId, ck.ticket, ck.appId, 0))?.retcode === 0;
	} catch {
		return false;
	}
};
/** 创建二维码，返回 { qr, link, validTime }（type: 777 登录 / 51 授权，validTime 为二维码有效期秒数） */
const createQr = async (type = 777, appId = null, ck) => {
	const data = await QBot.getlogin(type, appId, ck?.uin, ck?.developerId, ck?.ticket);
	if (!data) throw new Error("创建二维码失败，请稍后重试");
	const { qr, validTime } = data;
	return {
		qr,
		link: type === 51 ? `https://q.qq.com/qrcode/check?client=qq&code=${qr}&ticket=${ck?.ticket}` : `https://q.qq.com/login/applist?code=${qr}`,
		validTime
	};
};
/** 轮询二维码，直到登录成功或超时（按二维码有效期 validTime 秒数计算，每 3 秒查一次） */
const pollQr = async (qr, validTime = 300) => {
	const maxRetry = Math.max(1, Math.floor(validTime * 1e3 / 3e3));
	for (let i = 0; i < maxRetry; i++) {
		const res = await QBot.getqrcode(qr);
		if (res?.code === 0 && res.data?.data) return res.data.data;
		await QBot.sleep(3e3);
	}
	return null;
};
/**
* 完整登录流程：发送登录引导（qqbot 按钮/文本链接）→ 轮询扫码 → 存储票据 → 回复结果
* 返回扫码得到的票据，超时未扫返回 null
*/
const runLogin = async (e) => {
	const data = await createQr(777);
	const guideMsg = await (isQqbot(e) ? e.reply([segment.markdown(md`
        ${e.isGroup ? `<qqbot-at-user id="${e.userId}" />` : void 0}
        ### QQ开放平台管理端登录
        > 登录具有时效性, 请尽快登录
         ---
        > 当你选择登录
        > 代表你已经同意将数据托管给${e.bot.selfName}Bot
      `), segment.keyboard([[{
		text: "登录",
		link: data.link,
		style: 4,
		...e.isGroup ? { list: [e.userId] } : {}
	}]])]) : e.reply([segment.at(e.userId), md`
        QQ开放平台管理端登录
        登录具有时效性, 请尽快登录
        当你选择登录
        代表你已经同意将数据托管给${e.bot.selfName}Bot
        ${data.link}
      `]));
	const cookies = await pollQr(data.qr, Math.min(data.validTime, 60));
	if (!cookies) {
		await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => {});
		await (isQqbot(e) ? e.reply([segment.markdown("登录失效"), ...qbotButtons()]) : e.reply("登录失效"));
		return null;
	}
	if (e.isGroup && cookies.uin && e.sender.uin && String(cookies.uin) !== String(e.sender.uin)) {
		await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => {});
		await (isQqbot(e) ? e.reply([segment.markdown("诶？这不是你的登录哦 (＞﹏＜)"), ...qbotButtons()]) : e.reply("诶？这不是你的登录哦 (＞﹏＜)"));
		return null;
	}
	await storeCookies(e.userId, cookies);
	const typeLabel = AppTypeMap[Number(cookies.appType)] ?? "未知";
	await e.bot.recallMsg(e.contact, guideMsg.messageId).catch(() => {});
	await (isQqbot(e) ? e.reply([segment.markdown(md`
        ### 登录成功
        > AppID: ${cookies.appId}
        > 类型: ${typeLabel}
      `), ...qbotButtons()]) : e.reply(md`
      登录成功
      AppID: ${cookies.appId}
      类型: ${typeLabel}
    `));
	return cookies;
};
/**
* 校验登录态：有效返回登录数据；从未登录或票据失效则现场引导扫码登录。
* 登录成功仅回复登录结果，不再把新票据交还给原命令继续执行——
* 避免指令调用登录后再次执行触发登录的那条指令；需要查询请让用户重新发送指令。
* 登录失败返回 null
*/
const checkLogin = async (e) => {
	const stored = await getCookies(e.userId);
	if (stored && await validateCookies(stored.ck)) return stored;
	await runLogin(e);
	return null;
};
/** 获取当前管理 bot 名称（指针应用名），未登录或查询失败时回退适配器昵称 */
const getBotName = async (e) => {
	try {
		const stored = await getCookies(e.userId);
		if (!stored) return e.bot.selfName;
		return ((await QBot.getlists(stored.ck.uin, stored.ck.developerId, stored.ck.ticket))?.data?.apps ?? []).find((app) => String(app.app_id) === stored.appId)?.app_name || e.bot.selfName;
	} catch {
		return e.bot.selfName;
	}
};
/**
* 切换当前管理 bot（更新 KV_APPID 指针，数据命令自动跟随）
* 校验 appId 在开发者名下应用列表（getlists）中，票据账号级通用，失败返回 null
*/
const switchApp = async (userId, appId) => {
	const stored = await getCookies(userId);
	if (!stored) return null;
	if (!((await QBot.getlists(stored.ck.uin, stored.ck.developerId, stored.ck.ticket))?.data?.apps ?? []).some((app) => String(app.app_id) === appId)) return null;
	const ck = {
		...stored.ck,
		appId
	};
	await db.set(KV_COOKIE(userId, appId), ck);
	await db.set(KV_APPID(userId), appId);
	return ck;
};

//#endregion
export { fmtDate as A, RE_OPEN_NOTICE as C, RE_UPIP as D, RE_UPDATE as E, md as M, config$1 as N, RE_VERSION as O, RE_MSG_TPL as S, RE_SWITCH as T, RE_DATA as _, switchApp as a, RE_LOGIN as b, TplStatusMap as c, isQqbot as d, manageButtons as f, recordMessage as g, getUserCount as h, runLogin as i, fmtTime as j, RE_WHLIST as k, TplTypeMap as l, getGroups as m, createQr as n, AppStatusMap as o, qbotButtons as p, getBotName as r, AppTypeMap as s, checkLogin as t, QBot as u, RE_HELP as v, RE_STAT as w, RE_MANAGE as x, RE_LIST as y };