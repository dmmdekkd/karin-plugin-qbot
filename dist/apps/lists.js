globalThis.__KTR_BUNDLED__ = true;
import { M as md, d as isQqbot, o as AppStatusMap, p as qbotButtons, s as AppTypeMap, t as checkLogin, u as QBot, y as RE_LIST } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/lists.ts
/** 开放平台应用列表：#qbot列表 */
const lists = karin$1.command(RE_LIST, async (e) => {
	const login = await checkLogin(e);
	if (!login) return;
	const apps = (await QBot.getlists(login.ck.uin, login.ck.developerId, login.ck.ticket))?.data?.apps ?? [];
	if (!apps.length) return isQqbot(e) ? e.reply([segment.markdown("没有数据哦～ (๑•́ω•̀๑)"), ...qbotButtons()]) : e.reply("没有数据哦～ (๑•́ω•̀๑)");
	const current = apps.find((app) => String(app.app_id) === login.appId) ?? apps[0];
	const types = AppTypeMap[current.app_type];
	const botName = current.app_name || "";
	const body = apps.map((app) => [
		app.app_name,
		`ID: ${app.app_id}`,
		AppStatusMap[app.bot_status],
		app.app_desc
	].filter(Boolean).join("\r")).join("\r\r---\r");
	return isQqbot(e) ? e.reply([segment.markdown(md`
          ### ${botName}账号列表
          >共 **${apps.length} 个应用** 
          >类型：${types}
          \`\`\`
          ${body}
          \`\`\`
        `), ...qbotButtons()]) : e.reply(md`
        ${botName}账号列表
        共 ${apps.length} 个应用 
        ${types}
        ${body}
      `);
}, {
	name: "qbot列表",
	permission: "all"
});

//#endregion
export { lists };