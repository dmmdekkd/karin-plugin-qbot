globalThis.__KTR_BUNDLED__ = true;
import { o as __toESM } from "./inputNotify-DBpkbcIo.js";
import { t as require_react } from "./react-DR7gtnlh.js";
import { defineTemplate } from "./dist-DZ5KfO5v.js";
import { a as tv, c as $c4867b2f328c2698$export$e5c5a5f917a5871c, i as Separator, o as require_jsx_runtime, s as $4064df0d6f9620e1$export$c9058316764c140e } from "./Tag.es-sH2cGfL0.js";
import { t as TechStackFooter } from "./tech-stack-footer-DP7vvM_R.js";
import { n as iconWeight, r as icons, t as fallbackIcon } from "./icons-DAgtqtwV.js";

//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/utils/dom.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function DOMElement(ElementType, props) {
	const { ref: forwardedRef, render, ...otherProps } = props;
	const elementRef = (0, import_react.useRef)(null);
	const ref = (0, import_react.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(forwardedRef, elementRef), [forwardedRef, elementRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (typeof process !== "undefined" && process.env?.["NODE_ENV"] !== "production" && render) {
			if (!elementRef.current) console.warn("Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?");
		}
	}, [ElementType, render]);
	const domProps = {
		...otherProps,
		ref
	};
	if (render) return render(domProps, void 0);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ElementType, { ...domProps });
}
const domComponentCache = {};
const dom = new Proxy({}, { get(_target, elementType) {
	if (typeof elementType !== "string") return;
	let res = domComponentCache[elementType];
	if (!res) {
		res = DOMElement.bind(null, elementType);
		domComponentCache[elementType] = res;
	}
	return res;
} });

//#endregion
//#region node_modules/.pnpm/@heroui+styles@3.2.4_tailwind-merge@3.4.0_tailwindcss@4.3.3/node_modules/@heroui/styles/dist/components/kbd/kbd.styles.js
const kbdVariants = tv({
	defaultVariants: {},
	slots: {
		abbr: "kbd__abbr",
		base: "kbd",
		content: "kbd__content"
	},
	variants: { variant: {
		default: "kbd--default",
		light: "kbd--light"
	} }
});

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/utils/compose.js
const composeSlotClassName = (slotFn, className, variants) => {
	return typeof slotFn === "function" ? slotFn({
		...variants ?? {},
		className
	}) : className;
};

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/components/kbd/kbd.constants.js
const kbdKeysMap = {
	command: "⌘",
	shift: "⇧",
	ctrl: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌫",
	escape: "⎋",
	tab: "⇥",
	capslock: "⇪",
	up: "↑",
	right: "→",
	down: "↓",
	left: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘",
	help: "?",
	space: "␣",
	fn: "Fn",
	win: "⌘",
	alt: "⌥"
};
const kbdKeysLabelMap = {
	command: "Command",
	shift: "Shift",
	ctrl: "Control",
	option: "Option",
	enter: "Enter",
	delete: "Delete",
	escape: "Escape",
	tab: "Tab",
	capslock: "Caps Lock",
	up: "Up",
	right: "Right",
	down: "Down",
	left: "Left",
	pageup: "Page Up",
	pagedown: "Page Down",
	home: "Home",
	end: "End",
	help: "Help",
	space: "Space",
	fn: "Fn",
	win: "Win",
	alt: "Alt"
};

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/components/kbd/kbd.js
const KbdContext = /*#__PURE__*/ (0, import_react.createContext)({});
const KbdRoot = ({ children, className, variant, ...props }) => {
	const slots = import_react.useMemo(() => kbdVariants({ variant }), [variant]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(KbdContext, {
		value: { slots },
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(dom.kbd, {
			...props,
			className: slots.base({ className }),
			children
		})
	});
};
const KbdAbbr = ({ className, keyValue, ...props }) => {
	const { slots } = (0, import_react.use)(KbdContext);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(dom.abbr, {
		className: composeSlotClassName(slots?.abbr, className),
		title: kbdKeysLabelMap[keyValue],
		...props,
		children: kbdKeysMap[keyValue]
	});
};
const KbdContent = ({ children, className, ...props }) => {
	const { slots } = (0, import_react.use)(KbdContext);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(dom.span, {
		className: composeSlotClassName(slots?.content, className),
		...props,
		children
	});
};

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/components/kbd/index.js
const Kbd = Object.assign(KbdRoot, {
	Root: KbdRoot,
	Abbr: KbdAbbr,
	Content: KbdContent
});

//#endregion
//#region ktr/template/qbot/help/components/HelpGroup.tsx
/** 指令中的 [参数] 片段渲染为 HeroUI Kbd 键帽，与固定指令区分 */
const renderCmd = (cmd) => cmd.split(/(\[[^\]]+\])/).map((part, index) => /^\[[^\]]+\]$/.test(part) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd.Root, {
	className: "mx-1 px-2 text-base",
	children: part
}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index));
/** 分组图标颜色轮换（玫瑰→粉→紫红），与极光带同源，深浅模式同一套配色 */
const palettes = [
	"text-rose-500",
	"text-pink-500",
	"text-fuchsia-500"
];
/** 指令分组：英文小标 + 渐变淡出分隔线 + 双列指令网格（裸彩色图标，纯排版） */
const HelpGroup = ({ group, groupIndex }) => {
	const iconColor = palettes[groupIndex % palettes.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		group.en && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted text-sm font-semibold tracking-[0.3em]",
			children: group.en
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-4xl font-bold tracking-wide",
			children: group.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-linear-to-r from-foreground/25 to-transparent" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid grid-cols-2 gap-x-12 gap-y-10",
			children: group.items.map((item) => {
				const ItemIcon = icons[item.icon ?? ""] ?? fallbackIcon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, {
						size: 56,
						weight: iconWeight,
						className: `shrink-0 ${iconColor}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-mono text-2xl font-semibold",
							children: renderCmd(item.cmd)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted mt-2 truncate text-xl",
							children: item.desc
						})]
					})]
				}, item.cmd);
			})
		})
	] });
};

//#endregion
//#region ktr/template/qbot/help/components/Help.tsx
/**
* #qbot帮助 渲染页 —— 1080 宽，高度随数据自然渲染，手机阅读优先。
* 统一「绯红霓虹」渐变色系：极光带（玫瑰→粉→紫红）与图标颜色同源，
* 分组英文小标 + 渐变淡出分隔线 + 页面外框描边。
* HeroUI 组件：Chip / Separator / Kbd；明暗跟随配置 help.theme。
*/
const Help = ({ data }) => {
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
					children: data.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted pb-1.5 text-xl tracking-wider",
					children: "Qbot插件帮助页"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "relative z-10 mx-16 mt-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 mt-16 space-y-24 px-16",
				children: data.groups.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpGroup, {
					group,
					groupIndex: index
				}, group.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 mt-28 px-16 pb-20",
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
//#region ktr/template/qbot/help/index.tsx
/** 运行时数据兜底校验，结构异常时 SSR 直接报错而不是渲染出空白图 */
const isHelpData = (data) => typeof data === "object" && data !== null && typeof data.title === "string" && typeof data.version === "string" && Array.isArray(data.groups);
var help_default = defineTemplate({
	name: "帮助页面",
	description: "#qbot帮助 渲染的功能指令总览（点格画板背景 · Bento 网格 · 药丸流指令，明暗跟随配置）",
	component: Help,
	validate: isHelpData
});

//#endregion
export { help_default as default };