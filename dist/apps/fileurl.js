globalThis.__KTR_BUNDLED__ = true;
import { karin as karin$1 } from "node-karin";

//#region src/apps/fileurl.ts
/**
* 借 QQBot 官方上传通道（COS）将 base64 图片换为临时直链（ttl 86400s），
* 使本地图片能以 markdown 图片语法进入消息正文。
* @returns 直链；scene 无效 / 无可用 bot / 上传失败时返回 undefined
*/
const uploadImageToCos = async (contact, selfId, file, fileName = "help.png") => {
	const scene = contact.scene === "group" ? "group" : contact.scene === "friend" ? "user" : void 0;
	if (!scene) return void 0;
	const media = karin$1.getAllBot().find((b) => b.selfId === selfId && b.adapter?.protocol === "qqbot" && b.super?.media)?.super?.media;
	if (!media) return void 0;
	const buffer = Buffer.from(String(file).replace(/^base64:\/\//, ""), "base64");
	try {
		if (typeof media.uploadForUrl === "function") {
			const { url } = await media.uploadForUrl(scene, contact.peer, "image", `base64://${buffer.toString("base64")}`, fileName);
			return url;
		}
		const { raw_url } = await media.uploadChunked?.(scene, contact.peer, "image", {
			kind: "buffer",
			buffer,
			size: buffer.length,
			fileName
		}) ?? {};
		if (raw_url) {
			const parsed = new URL(raw_url);
			parsed.searchParams.set("response-content-type", "image/png");
			return parsed.toString();
		}
	} catch {}
};

//#endregion
export { uploadImageToCos };