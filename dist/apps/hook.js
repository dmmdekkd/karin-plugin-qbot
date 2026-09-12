globalThis.__KTR_BUNDLED__ = true;
import { M as md, N as config$1, d as isQqbot, g as recordMessage } from "../model-xZ4cLE8E.js";
import { getBot, hooks, segment } from "node-karin";

//#region src/apps/hook.ts
/**
* 全局消息统计
* 收到任何消息都会先经过此处（不影响后续插件执行），用于统计消息数/日活/群列表
*/
const messageHook = hooks.message(async (e, next) => {
	if (e.isGroup && !e.atBot) return next();
	const { statistics, welcome } = config$1();
	if (!statistics.enable) return next();
	const result = await recordMessage(e.userId, e.selfId, e.isGroup ? e.contact.peer : void 0);
	if (!result.isNewUser || !welcome.enable) return next();
	const avatarUrl = await getBot(e.selfId)?.getAvatarUrl(e.userId, 100) ?? "";
	if (isQqbot(e)) await e.reply(segment.markdown(md`
      ${e.isGroup ? `<qqbot-at-user id="${e.userId}" />` : void 0}
      ${avatarUrl ? `![头像](${avatarUrl})` : void 0}
      > 欢迎！您是第${result.userCount}位使用${e.bot.selfName}的用户！
      > 可以把${e.bot.selfName}邀请到任意群使用哦！
    `));
	else await e.reply([
		md`
        欢迎！您是第${result.userCount}位使用${e.bot.selfName}的用户！
        可以把${e.bot.selfName}邀请到任意群使用哦！
      `,
		...avatarUrl ? [segment.image(avatarUrl)] : [],
		segment.at(e.userId)
	]);
	next();
});

//#endregion
export { messageHook };