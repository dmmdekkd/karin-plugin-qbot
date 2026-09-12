globalThis.__KTR_BUNDLED__ = true;
import { M as md, N as config$1, d as isQqbot, h as getUserCount, m as getGroups, p as qbotButtons, w as RE_STAT } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/count.ts
/**
* 使用统计：#qbot统计（对齐 QBot-Plugin 的 #统计 回复格式）
*/
const count = karin$1.command(RE_STAT, async (e) => {
	const { statistics } = config$1();
	if (!statistics.enable) return e.reply(isQqbot(e) ? [segment.markdown("统计功能还没有开启哦～请小主先在配置中开启哦 (๑•́ω•̀๑)"), ...qbotButtons()] : "统计功能还没有开启哦～请小主先在配置中开启哦 (๑•́ω•̀๑)");
	const userCount = await getUserCount(e.selfId);
	const groupCount = (await getGroups(e.selfId)).length;
	if (isQqbot(e)) return e.reply([segment.markdown(md`
        ### ${e.bot.selfName}统计
        > 用户：**${userCount}**
        > 群组：**${groupCount}**
      `), ...qbotButtons()]);
	return e.reply(md`
    ${e.bot.selfName}统计
    用户：${userCount}
    群组：${groupCount}
  `);
}, {
	name: "qbot统计",
	permission: "master"
});

//#endregion
export { count };