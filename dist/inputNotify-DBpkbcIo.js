globalThis.__KTR_BUNDLED__ = true;
import { dir } from "./dir.js";
import { createRequire } from "node:module";
import path from "node:path";
import { karinPathHtml, logger, render } from "node-karin";
import fs from "node:fs";

//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();

//#endregion
//#region src/utils/render.ts
/**
* 模板懒加载器。注意：动态导入参数必须是完整静态字符串。
* 若用变量拼接（如 `../../ktr/template/${key}/index`），打包器无法静态分析，
* 模板源码不会被打进 dist —— 安装后运行时会从 dist/ 向上解析
* `node_modules/ktr/template/...` 导致 ERR_MODULE_NOT_FOUND（发布前在 src 下能解析到仓库根，故本地验证不到）。
* 写成静态字符串后，tsdown 会把每个模板打成独立 chunk 随发布包分发。
*/
const lazyTemplates = {
	"qbot/help": () => import("./help-CYCTjKMo.js"),
	"qbot/version": () => import("./version-CDRstHaK.js"),
	"qbot/changelog": () => import("./changelog-DF90aeVe.js")
};
/**
* 按当前时间决定明暗主题：白天（6:00–18:00）浅色，夜间深色。
* 所有渲染默认跟随昼夜；调用方可通过 options.ctx 显式覆盖。
*/
const themeByTime = () => {
	const hour = (/* @__PURE__ */ new Date()).getHours();
	return hour >= 6 && hour < 18 ? "light" : "dark";
};
/**
* 解析截图模板 CSS：优先静态拷贝的 ktr/public/style.css（dev 模式无需构建产物），
* 缺失时回退发布包固定分发的 dist/style.css。
* 两种都是 Tailwind 编译产物、字体已内联为 data URI，样式完全自洽。
*/
const resolveTemplateCss = () => {
	const candidates = [path.join(dir.pluginDir, "ktr/public/style.css"), path.join(dir.pluginDir, "dist/style.css")];
	/** 全都不存在时返回最后一个候选，由调用方抛错提示（避免直接抛 undefined） */
	return candidates.find((p) => fs.existsSync(p)) ?? candidates[candidates.length - 1];
};
/**
* / 开头的资源引用改写目标目录：优先 ktr/public（源码内直接存在），
* 其次构建复制的 dist/assets（copyAssets 开启后随包发布），最后回退 dist。
* 全部缺失时 HtmlWrapper 会告警并保留原路径，不阻塞渲染。
*/
const resolveAssetsDir = () => {
	const candidates = [
		path.join(dir.pluginDir, "ktr/public"),
		path.join(dir.pluginDir, "dist/assets"),
		path.join(dir.pluginDir, "dist")
	];
	return candidates.find((p) => fs.existsSync(p)) ?? candidates[candidates.length - 1];
};
/**
* 渲染截图模板并截图：直接 SSR 模板组件（react-dom/server），
* 经 HtmlWrapper 包成完整 HTML 后交给 karin puppeteer 截图。
* @param route 模板路由（templates 中的 key，如 `qbot/help`）
* @param data 模板数据，结构由各模板 `types.ts` 定义
* @param options 渲染上下文与截图参数
* @returns 图片 base64；渲染失败直接抛出异常
*/
const renderTemplateImage = async (route, data, options = {}) => {
	const loadTemplate = lazyTemplates[route];
	if (!loadTemplate) throw new Error(`未知模板路由: ${route}`);
	/** 懒加载模板及其重型依赖链（react / react-dom/server / @karinjs/template-react / 图标库） */
	const template = (await loadTemplate()).default;
	const ctx = {
		scale: 1,
		...options.ctx,
		theme: {
			mode: themeByTime(),
			...options.ctx?.theme
		}
	};
	if (template.validate && !template.validate(data)) throw new Error("模板数据结构校验失败");
	/** 模板 CSS：ktr/public/style.css 优先，回退发布包固定分发的 dist/style.css；缺失时抛错而不是渲染出无样式页面 */
	const cssPath = resolveTemplateCss();
	if (!fs.existsSync(cssPath)) throw new Error(`未找到模板样式文件: ${cssPath}`);
	const [{ HtmlWrapper }, { createElement }, { renderToStaticMarkup }] = await Promise.all([
		import("./dist-DZ5KfO5v.js"),
		import("./react-DR7gtnlh.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1)),
		import("./server.node-DN4ZySii.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1))
	]);
	const wrapper = new HtmlWrapper({
		cssPath,
		/** 资源改写目录：ktr/public 优先，缺失时回退 dist/assets（copyAssets 产物）或 dist */
		assetsDir: resolveAssetsDir()
	});
	const Component = template.component;
	const markup = renderToStaticMarkup(createElement(Component, {
		data,
		ctx
	}));
	const html = wrapper.wrapContent(markup, ctx);
	const outputDir = path.join(karinPathHtml, dir.name);
	fs.mkdirSync(outputDir, { recursive: true });
	const htmlPath = path.join(outputDir, `${route.replaceAll("/", "_")}.html`);
	fs.writeFileSync(htmlPath, html, "utf-8");
	return await render.render({
		file: htmlPath,
		name: "help",
		selector: "#container",
		type: "png",
		fullPage: false,
		setViewport: {
			width: 1100,
			deviceScaleFactor: 2
		},
		...options.screenshot
	});
};

//#endregion
//#region src/utils/inputNotify.ts
/**
* 发送 QQ 官方「输入状态通知」（msg_type=6），仅支持私聊场景：
* 好友会话气泡区显示"对方正在输入中…"，适合耗时操作开始前调用。
* 官方无「结束输入」字段（input_second=0 不生效），固定持续 4 秒自然结束；
* 群聊及非 qqbot 协议静默跳过，失败降级为 debug 日志，不影响主流程。
*
* @param bot 当前事件的 bot（需为 qqbot 协议）
* @param contact 目标会话（仅 friend 生效），peer 即 openid
*/
const sendInputNotify = async (bot, contact) => {
	const request = bot.super?.request;
	/** 官方输入状态仅在单聊场景下发，私聊（friend）之外一律跳过 */
	if (!request || contact.scene !== "friend") return;
	const path = `/v2/users/${contact.peer}/messages`;
	logger.debug(`[qbot输入状态] 发送中: ${path} 持续4s`);
	try {
		await request.post(path, {
			msg_type: 6,
			input_notify: {
				input_type: 1,
				input_second: 4
			}
		});
		logger.debug(`[qbot输入状态] 发送成功: ${path}`);
	} catch (error) {
		logger.debug(`[qbot输入状态] 发送失败已忽略: ${error instanceof Error ? error.message : String(error)}`);
	}
};

//#endregion
export { __require as a, __esmMin as i, renderTemplateImage as n, __toESM as o, __commonJSMin as r, sendInputNotify as t };