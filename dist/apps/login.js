globalThis.__KTR_BUNDLED__ = true;
import { b as RE_LOGIN, i as runLogin } from "../model-xZ4cLE8E.js";
import { karin as karin$1 } from "node-karin";

//#region src/apps/login.ts
/**
* 开放平台登录：#qbot登录
* 发送二维码链接/按钮 → 用户扫码 → 轮询获取票据存入 KV
*/
const login = karin$1.command(RE_LOGIN, async (e) => {
	await runLogin(e);
}, {
	name: "qbot登录",
	permission: "all"
});

//#endregion
export { login };