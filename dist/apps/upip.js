globalThis.__KTR_BUNDLED__ = true;
import { D as RE_UPIP, M as md, d as isQqbot, n as createQr, p as qbotButtons, r as getBotName, t as checkLogin, u as QBot } from "../model-xZ4cLE8E.js";
import { karin as karin$1, segment } from "node-karin";

//#region src/apps/upip.ts
/** 获取本机公网 IP */
const getPublicIp = async () => {
	return (await (await fetch("https://ip.3322.net/")).text()).trim();
};
/** 开放平台更新 IP 白名单：#qbot更新ip [IP]（仅私聊） */
const upip = karin$1.command(RE_UPIP, async (e) => {
	const login = await checkLogin(e);
	if (!login) return;
	const botName = await getBotName(e);
	if (e.isGroup) return e.reply(isQqbot(e) ? segment.markdown("当前命令仅支持私聊,请私聊使用") : "当前命令仅支持私聊,请私聊使用");
	const [, ip] = e.msg.match(RE_UPIP) ?? [];
	let target = ip;
	if (!target) {
		if (e.isMaster) target = await getPublicIp();
		else return e.reply(isQqbot(e) ? segment.markdown("须手动拼接IP地址 #qbot更新ip 11.11.11.11") : "须手动拼接IP地址 #qbot更新ip 11.11.11.11");
	}
	const { ck, appId } = login;
	const { qr, link } = await createQr(51, appId, ck);
	if (isQqbot(e)) await e.reply([segment.markdown(md`
        ### QQ开放平台授权
        > 授权具有时效性, 请尽快授权
        > 当你选择授权
        > 代表你已经同意将数据托管给${botName}Bot
      `), segment.keyboard([[{
		text: "点击授权",
		link
	}]])]);
	else await e.reply(md`
      QQ开放平台授权
      授权具有时效性, 请尽快授权
      当你选择授权
      代表你已经同意将数据托管给${botName}Bot
      ${link}
    `);
	let i = 0;
	while (i < 20) {
		const res = await QBot.getqrcode(qr);
		if (res?.code === 0) {
			const data = res.data?.data;
			await QBot.updateip(ck.uin, ck.developerId, ck.ticket, appId, target, qr);
			if (isQqbot(e)) return e.reply([segment.markdown(md`
            ### ${res.message}
            > 授权人：${data?.uin}
            > 已设置IP：**${target}**
          `), ...qbotButtons()]);
			return e.reply(md`
        ${res.message}
        授权人：${data?.uin}
        已设置IP：${target}
      `);
		}
		i++;
		await QBot.sleep(3e3);
	}
	return isQqbot(e) ? e.reply([segment.markdown("授权失效"), ...qbotButtons()]) : e.reply("授权失效");
}, {
	name: "qbot更新IP",
	permission: "all"
});

//#endregion
export { upip };