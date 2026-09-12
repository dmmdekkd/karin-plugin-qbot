globalThis.__KTR_BUNDLED__ = true;
import { M as md, S as RE_MSG_TPL, c as TplStatusMap, d as isQqbot, l as TplTypeMap, p as qbotButtons, r as getBotName, t as checkLogin, u as QBot } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/msg_tpl.ts
/** 开放平台消息模板列表：#qbot模板 */
const msg_tpl = karin$1.command(RE_MSG_TPL, async (e) => {
	const login = await checkLogin(e);
	if (!login) return;
	const data = await QBot.getmsg_tpl(login.ck.uin, login.ck.developerId, login.ck.ticket, login.appId);
	const tpls = data?.data?.list ?? [];
	if (!tpls.length) return isQqbot(e) ? e.reply([segment.markdown("没有数据哦～ (๑•́ω•̀๑)"), ...qbotButtons()]) : e.reply("没有数据哦～ (๑•́ω•̀๑)");
	const botName = await getBotName(e);
	const tplRows = tpls.map((tpl) => md`
    ${tpl.tpl_name}
    ID: ${tpl.tpl_id}
    类型: ${TplTypeMap[tpl.tpl_type] || `未知(${tpl.tpl_type})`}
    状态: ${TplStatusMap[tpl.status] || `未知(${tpl.status})`}
  `);
	if (isQqbot(e)) return e.reply([segment.markdown(md`
        ### ${botName}消息模板
        > 共 **${tpls.length}/${data?.data?.max_msg_tpl_count ?? "-"} 个模板**
        \`\`\`
        ${tplRows.join("\r\r---\r")}
        \`\`\`
      `), ...qbotButtons()]);
	return e.reply(md`
    ${botName}消息模板
    共 ${tpls.length}/${data?.data?.max_msg_tpl_count ?? "-"} 个模板
    ${tplRows.join("\r\r---\r")}
  `);
}, {
	name: "qbot模板",
	permission: "all"
});

//#endregion
export { msg_tpl };