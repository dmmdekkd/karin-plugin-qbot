globalThis.__KTR_BUNDLED__ = true;
import { C as RE_OPEN_NOTICE, M as md, d as isQqbot, j as fmtTime, p as qbotButtons, r as getBotName, t as checkLogin, u as QBot } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/notify.ts
/** 开放平台站内通知：#qbot通知 */
const notify = karin$1.command(RE_OPEN_NOTICE, async (e) => {
	const login = await checkLogin(e);
	if (!login) return;
	const notices = (await QBot.getnotice(login.ck.uin, login.ck.developerId, login.ck.ticket))?.data?.privateMsgs ?? [];
	if (!notices.length) return isQqbot(e) ? e.reply([segment.markdown("没有数据哦～ (๑•́ω•̀๑)"), ...qbotButtons()]) : e.reply("没有数据哦～ (๑•́ω•̀๑)");
	const botName = await getBotName(e);
	const noticeRows = notices.map((msgs, index) => {
		const title = msgs.title.replace(/<[^>]*>?/gm, "");
		return md`
      通知 ${index + 1}
      标题：${title}
      时间：${fmtTime(msgs.send_time)}
    `;
	});
	if (isQqbot(e)) return e.reply([segment.markdown(md`
        ### ${botName}通知
        > 共 **${notices.length} 条通知**
        \`\`\`
        ${noticeRows.map((r) => r.split("\r").map((l) => `${l}`).join("\r")).join("\r\r---\r")}
        \`\`\`
      `), ...qbotButtons()]);
	return e.reply(md`
    ${botName}通知
    共 ${notices.length} 条通知
    ${noticeRows.join("\r\r---\r")}
  `);
}, {
	name: "qbot通知",
	permission: "all"
});

//#endregion
export { notify };