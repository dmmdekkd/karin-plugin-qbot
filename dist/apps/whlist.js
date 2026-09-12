globalThis.__KTR_BUNDLED__ = true;
import { M as md, d as isQqbot, k as RE_WHLIST, p as qbotButtons, r as getBotName, t as checkLogin, u as QBot } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/whlist.ts
/** 开放平台事件订阅列表：#qbot订阅 */
const whlist = karin$1.command(RE_WHLIST, async (e) => {
	const login = await checkLogin(e);
	if (!login) return;
	const events = (await QBot.getwhlist(login.ck.uin, login.ck.developerId, login.ck.ticket, login.appId))?.data?.events ?? [];
	if (!events.length) return isQqbot(e) ? e.reply([segment.markdown("暂无事件订阅数据"), ...qbotButtons()]) : e.reply("暂无事件订阅数据");
	const grouped = {};
	for (const event of events) (grouped[event.type] ??= []).push(event);
	const botName = await getBotName(e);
	const sections = Object.entries(grouped).map(([type, items]) => md`
    ${type}
    ${items.map((event) => `[${event.id}] ${event.name}${event.is_subscribed ? "（已订阅）" : void 0}`).join("\r")}
  `);
	if (isQqbot(e)) return e.reply([segment.markdown(md`
        ### ${botName}事件订阅
        \`\`\`
        ${sections.map((s) => s.split("\r").map((l) => `${l}`).join("\r")).join("\r\r---\r")}
        \`\`\`
      `), ...qbotButtons()]);
	return e.reply(md`
    ${botName}事件订阅
    ${sections.join("\r\r---\r")}
  `);
}, {
	name: "qbot订阅",
	permission: "all"
});

//#endregion
export { whlist };