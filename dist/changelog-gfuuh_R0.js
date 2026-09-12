globalThis.__KTR_BUNDLED__ = true;
import { defineTemplate } from "./dist-KOZVrP3P.js";
import { i as Separator, o as require_jsx_runtime } from "./Tag.es-Bno3yQdD.js";
import { t as TechStackFooter } from "./tech-stack-footer-JsC8B71l.js";

//#region ktr/template/qbot/changelog/components/ChangelogPage.tsx
var import_jsx_runtime = require_jsx_runtime();
/** 条目圆点三色轮换（玫瑰→粉→紫红），与极光带同源 */
const dotColors = [
	"bg-rose-500",
	"bg-pink-500",
	"bg-fuchsia-500"
];
/**
* #qbot更新日志 渲染页 —— 与帮助页同族「绯红霓虹」风格：
* 点阵网格 + 极光渐变带 + 外框描边，高度随数据自然渲染。
*/
const ChangelogPage = ({ data }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-[1080px] overflow-hidden rounded-3xl bg-background text-foreground ring-1 ring-black/5 antialiased bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_15%,transparent)_1.5px,transparent_2px)] bg-[size:20px_20px] dark:ring-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-44 -left-1/4 h-[480px] w-[150%] -rotate-6 bg-[linear-gradient(90deg,transparent_0%,rgba(244,63,94,0.20)_25%,rgba(236,72,153,0.17)_50%,rgba(217,70,239,0.14)_75%,transparent_100%)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 left-0 h-[320px] w-[130%] rotate-3 bg-[linear-gradient(90deg,transparent_0%,rgba(236,72,153,0.13)_30%,rgba(217,70,239,0.12)_65%,transparent_100%)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-36 -right-1/4 h-[400px] w-[140%] rotate-2 bg-[linear-gradient(90deg,transparent_0%,rgba(217,70,239,0.10)_35%,rgba(244,63,94,0.10)_70%,transparent_100%)] blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-end justify-between px-16 pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[44px] leading-none font-bold tracking-[0.06em]",
					children: "CHANGELOG"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted pb-1.5 text-xl tracking-wider",
					children: "Qbot更新日志"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "relative z-10 mx-16 mt-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 mt-16 px-16",
				children: data.entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-20",
					children: data.entries.map((entry, entryIndex) => {
						const dotColor = dotColors[entryIndex % dotColors.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted text-sm font-semibold tracking-[0.3em]",
								children: "VERSION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-2 text-4xl font-bold tracking-wide",
								children: ["v", entry.version]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-linear-to-r from-foreground/25 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 space-y-6",
								children: entry.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-3 h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 text-xl leading-relaxed",
										children: item
									})]
								}, item))
							})
						] }, entry.version);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border py-24 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-bold tracking-wide",
						children: data.emptyText ?? "暂无更新日志"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted text-base",
						children: "该插件还没有发布过版本更新"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 mt-24 px-16 pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStackFooter, {
					version: data.version,
					karinVersion: data.karinVersion,
					pluginLatest: data.pluginLatest,
					karinLatest: data.karinLatest
				})]
			})
		]
	});
};

//#endregion
//#region ktr/template/qbot/changelog/index.tsx
/** 运行时数据兜底校验，结构异常时 SSR 直接报错而不是渲染出空白图 */
const isChangelogData = (data) => typeof data === "object" && data !== null && typeof data.pluginName === "string" && Array.isArray(data.entries);
var changelog_default = defineTemplate({
	name: "更新日志页面",
	description: "#qbot更新日志 渲染的插件更新日志页（与帮助页同族风格）",
	component: ChangelogPage,
	validate: isChangelogData
});

//#endregion
export { changelog_default as default };