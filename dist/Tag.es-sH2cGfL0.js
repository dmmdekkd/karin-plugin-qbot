globalThis.__KTR_BUNDLED__ = true;
import { o as __toESM, r as __commonJSMin } from "./inputNotify-DBpkbcIo.js";
import { t as require_react } from "./react-DR7gtnlh.js";
import { n as require_react_dom } from "./server.node-DN4ZySii.js";

//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? import_react.useLayoutEffect : () => {};

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
const $c7eafbbe1ea5834e$var$defaultContext = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
};
const $c7eafbbe1ea5834e$var$SSRContext = /*#__PURE__*/ import_react.createContext($c7eafbbe1ea5834e$var$defaultContext);
const $c7eafbbe1ea5834e$var$IsSSRContext = /*#__PURE__*/ import_react.createContext(false);
let $c7eafbbe1ea5834e$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $c7eafbbe1ea5834e$var$componentIds = /* @__PURE__ */ new WeakMap();
function $c7eafbbe1ea5834e$var$useCounter(isDisabled = false) {
	let ctx = (0, import_react.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	let ref = (0, import_react.useRef)(null);
	if (ref.current === null && !isDisabled) {
		let currentOwner = import_react.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (currentOwner) {
			let prevComponentValue = $c7eafbbe1ea5834e$var$componentIds.get(currentOwner);
			if (prevComponentValue == null) $c7eafbbe1ea5834e$var$componentIds.set(currentOwner, {
				id: ctx.current,
				state: currentOwner.memoizedState
			});
			else if (currentOwner.memoizedState !== prevComponentValue.state) {
				ctx.current = prevComponentValue.id;
				$c7eafbbe1ea5834e$var$componentIds.delete(currentOwner);
			}
		}
		ref.current = ++ctx.current;
	}
	return ref.current;
}
function $c7eafbbe1ea5834e$var$useLegacySSRSafeId(defaultId) {
	let ctx = (0, import_react.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	if (ctx === $c7eafbbe1ea5834e$var$defaultContext && !$c7eafbbe1ea5834e$var$canUseDOM && process.env.NODE_ENV !== "production") console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
	let counter = $c7eafbbe1ea5834e$var$useCounter(!!defaultId);
	let prefix = ctx === $c7eafbbe1ea5834e$var$defaultContext && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ctx.prefix}`;
	return defaultId || `${prefix}-${counter}`;
}
function $c7eafbbe1ea5834e$var$useModernSSRSafeId(defaultId) {
	let id = import_react.useId();
	let [didSSR] = (0, import_react.useState)($c7eafbbe1ea5834e$export$535bd6ca7f90a273());
	let prefix = didSSR || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${$c7eafbbe1ea5834e$var$defaultContext.prefix}`;
	return defaultId || `${prefix}-${id}`;
}
const $c7eafbbe1ea5834e$export$619500959fc48b26 = typeof import_react.useId === "function" ? $c7eafbbe1ea5834e$var$useModernSSRSafeId : $c7eafbbe1ea5834e$var$useLegacySSRSafeId;
function $c7eafbbe1ea5834e$var$getSnapshot() {
	return false;
}
function $c7eafbbe1ea5834e$var$getServerSnapshot() {
	return true;
}
function $c7eafbbe1ea5834e$var$subscribe(onStoreChange) {
	return () => {};
}
function $c7eafbbe1ea5834e$export$535bd6ca7f90a273() {
	if (typeof import_react.useSyncExternalStore === "function") return import_react.useSyncExternalStore($c7eafbbe1ea5834e$var$subscribe, $c7eafbbe1ea5834e$var$getSnapshot, $c7eafbbe1ea5834e$var$getServerSnapshot);
	return (0, import_react.useContext)($c7eafbbe1ea5834e$var$IsSSRContext);
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/useId.mjs
let $390e54f620492c70$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $390e54f620492c70$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
let $390e54f620492c70$var$registry;
if (typeof FinalizationRegistry !== "undefined") $390e54f620492c70$var$registry = new FinalizationRegistry((heldValue) => {
	$390e54f620492c70$export$d41a04c74483c6ef.delete(heldValue);
});
function $390e54f620492c70$export$cd8c9cb68f842629(idA, idB) {
	if (idA === idB) return idA;
	let setIdsA = $390e54f620492c70$export$d41a04c74483c6ef.get(idA);
	if (setIdsA) {
		setIdsA.forEach((ref) => ref.current = idB);
		return idB;
	}
	let setIdsB = $390e54f620492c70$export$d41a04c74483c6ef.get(idB);
	if (setIdsB) {
		setIdsB.forEach((ref) => ref.current = idA);
		return idA;
	}
	return idB;
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/chain.mjs
/**
* Calls all functions in the order they were chained with the same arguments.
*/ function $a4e76a5424781910$export$e08e3b67e392101e(...callbacks) {
	return (...args) => {
		for (let callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/mergeRefs.mjs
function $4064df0d6f9620e1$export$c9058316764c140e(...refs) {
	if (refs.length === 1 && refs[0]) return refs[0];
	return (value) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = $4064df0d6f9620e1$var$setRef(ref, value);
			hasCleanup ||= typeof cleanup == "function";
			return cleanup;
		});
		if (hasCleanup) return () => {
			cleanups.forEach((cleanup, i) => {
				if (typeof cleanup === "function") cleanup();
				else $4064df0d6f9620e1$var$setRef(refs[i], null);
			});
		};
	};
}
function $4064df0d6f9620e1$var$setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref != null) ref.current = value;
}

//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r$1(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r$1(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r$1(e)) && (n && (n += " "), n += t);
	return n;
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/mergeProps.mjs
function $bbaa08b3cd72f041$export$9d1611c77c2fe928(...args) {
	let result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		let props = args[i];
		for (let key in props) {
			let a = result[key];
			let b = props[key];
			if (typeof a === "function" && typeof b === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90) result[key] = $a4e76a5424781910$export$e08e3b67e392101e(a, b);
			else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx(a, b);
			else if (key === "id" && a && b) result.id = $390e54f620492c70$export$cd8c9cb68f842629(a, b);
			else if (key === "ref" && a && b) result.ref = $4064df0d6f9620e1$export$c9058316764c140e(a, b);
			else result[key] = b !== void 0 ? b : a;
		}
	}
	return result;
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
const $8e9d2fae0ecb9001$var$DOMPropNames = /* @__PURE__ */ new Set(["id"]);
const $8e9d2fae0ecb9001$var$labelablePropNames = /* @__PURE__ */ new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]);
const $8e9d2fae0ecb9001$var$linkPropNames = /* @__PURE__ */ new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]);
const $8e9d2fae0ecb9001$var$globalAttrs = /* @__PURE__ */ new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate"
]);
const $8e9d2fae0ecb9001$var$globalEvents = /* @__PURE__ */ new Set([
	"onClick",
	"onAuxClick",
	"onContextMenu",
	"onDoubleClick",
	"onMouseDown",
	"onMouseEnter",
	"onMouseLeave",
	"onMouseMove",
	"onMouseOut",
	"onMouseOver",
	"onMouseUp",
	"onTouchCancel",
	"onTouchEnd",
	"onTouchMove",
	"onTouchStart",
	"onPointerDown",
	"onPointerMove",
	"onPointerUp",
	"onPointerCancel",
	"onPointerEnter",
	"onPointerLeave",
	"onPointerOver",
	"onPointerOut",
	"onGotPointerCapture",
	"onLostPointerCapture",
	"onScroll",
	"onWheel",
	"onAnimationStart",
	"onAnimationEnd",
	"onAnimationIteration",
	"onTransitionCancel",
	"onTransitionEnd",
	"onTransitionRun",
	"onTransitionStart"
]);
const $8e9d2fae0ecb9001$var$propRe = /^(data-.*)$/;
function $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, opts = {}) {
	let { labelable, isLink, global, events = global, propNames } = opts;
	let filteredProps = {};
	for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($8e9d2fae0ecb9001$var$DOMPropNames.has(prop) || labelable && $8e9d2fae0ecb9001$var$labelablePropNames.has(prop) || isLink && $8e9d2fae0ecb9001$var$linkPropNames.has(prop) || global && $8e9d2fae0ecb9001$var$globalAttrs.has(prop) || events && ($8e9d2fae0ecb9001$var$globalEvents.has(prop) || prop.endsWith("Capture") && $8e9d2fae0ecb9001$var$globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || $8e9d2fae0ecb9001$var$propRe.test(prop))) filteredProps[prop] = props[prop];
	return filteredProps;
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function $03e8ab2d84d7657a$export$4338b53315abf666(ref) {
	const objRef = (0, import_react.useRef)(null);
	const cleanupRef = (0, import_react.useRef)(void 0);
	const refEffect = (0, import_react.useCallback)((instance) => {
		if (typeof ref === "function") {
			const refCallback = ref;
			const refCleanup = refCallback(instance);
			return () => {
				if (typeof refCleanup === "function") refCleanup();
				else refCallback(null);
			};
		} else if (ref) {
			ref.current = instance;
			return () => {
				ref.current = null;
			};
		}
	}, [ref]);
	return (0, import_react.useMemo)(() => ({
		get current() {
			return objRef.current;
		},
		set current(value) {
			objRef.current = value;
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = void 0;
			}
			if (value != null) cleanupRef.current = refEffect(value);
		}
	}), [refEffect]);
}

//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));

//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.development.js
/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
				case REACT_VIEW_TRANSITION_TYPE: return "ViewTransition";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
			var children = config.children;
			if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
				for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
				Object.freeze && Object.freeze(children);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else validateChildKeys(children);
			if (hasOwnProperty.call(config, "key")) {
				children = getComponentNameFromType(type);
				var keys = Object.keys(config).filter(function(k) {
					return "key" !== k;
				});
				isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
				didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
			}
			children = null;
			void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
			hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		React = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutKeySpread = {};
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			if (trackActualOwner) {
				var previousStackTraceLimit = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var debugStackDEV = Error("react-stack-top-frame");
				Error.stackTraceLimit = previousStackTraceLimit;
			} else debugStackDEV = unknownOwnerDebugStack;
			return jsxDEVImpl(type, config, maybeKey, !1, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.jsxs = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			if (trackActualOwner) {
				var previousStackTraceLimit = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var debugStackDEV = Error("react-stack-top-frame");
				Error.stackTraceLimit = previousStackTraceLimit;
			} else debugStackDEV = unknownOwnerDebugStack;
			return jsxDEVImpl(type, config, maybeKey, !0, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
	})();
}));

//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_react_jsx_runtime_production();
	else module.exports = require_react_jsx_runtime_development();
}));

//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.4.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-OYFAXDFZ.js
var isArray = Array.isArray;
var joinClassValue = (value) => {
	if (!value && value !== 0 && value !== 0n) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number") {
		if (value !== value) return "";
		return "" + value;
	}
	if (typeof value === "bigint") return "" + value;
	let result = "";
	if (isArray(value)) {
		const length = value.length;
		for (let index = 0; index < length; index++) {
			const item = value[index];
			if (!item && item !== 0 && item !== 0n) continue;
			const resolved = typeof item === "string" ? item : joinClassValue(item);
			if (resolved) {
				if (result) result += " ";
				result += resolved;
			}
		}
		return result;
	}
	if (typeof value === "object") {
		for (const key in value) if (value[key]) {
			if (result) result += " ";
			result += key;
		}
	}
	return result;
};
var SPACE_REGEX = /\s+/g;
var isArray2 = Array.isArray;
var removeExtraSpaces = (str) => {
	if (typeof str !== "string" || !str) return str;
	return str.replace(SPACE_REGEX, " ").trim();
};
var stringNeedsNormalize = (str) => {
	const len = str.length;
	if (len === 0) return false;
	const first = str.charCodeAt(0);
	const last = str.charCodeAt(len - 1);
	if (first === 32 || last === 32 || first >= 9 && first <= 13 || first === 160 || last >= 9 && last <= 13 || last === 160) return true;
	for (let i = 0; i < len; i++) {
		const code = str.charCodeAt(i);
		if (code >= 9 && code <= 13 || code === 160) return true;
		if (code === 32 && i + 1 < len && str.charCodeAt(i + 1) === 32) return true;
	}
	return false;
};
var cx = (...classnames) => {
	const result = joinClassValue(classnames);
	if (!result) return void 0;
	return stringNeedsNormalize(result) ? removeExtraSpaces(result) : result;
};
var falsyToString = (value) => value === false ? "false" : value === true ? "true" : value === 0 ? "0" : value;
var isEmptyObject = (obj) => {
	if (!obj || typeof obj !== "object") return true;
	for (const _ in obj) return false;
	return true;
};
var isEqual = (obj1, obj2) => {
	if (obj1 === obj2) return true;
	if (!obj1 || !obj2) return false;
	const record1 = obj1;
	const record2 = obj2;
	const keys1 = Object.keys(record1);
	const keys2 = Object.keys(record2);
	if (keys1.length !== keys2.length) return false;
	for (let i = 0; i < keys1.length; i++) {
		const key = keys1[i];
		if (!keys2.includes(key)) return false;
		if (record1[key] !== record2[key]) return false;
	}
	return true;
};
var joinObjects = (obj1, obj2) => {
	const target = obj1;
	for (const key in obj2) if (Object.hasOwn(obj2, key)) {
		const val2 = obj2[key];
		if (key in target) target[key] = cx(target[key], val2);
		else target[key] = val2;
	}
	return obj1;
};
var flat = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		if (isArray2(el)) flat(el, target);
		else if (el) target.push(el);
	}
};
var flatMergeArrays = (...arrays) => {
	const result = [];
	flat(arrays, result);
	const filtered = [];
	for (let i = 0; i < result.length; i++) if (result[i]) filtered.push(result[i]);
	return filtered;
};
var mergeObjects = (obj1, obj2) => {
	const record1 = obj1;
	const record2 = obj2;
	const result = {};
	for (const key in record1) {
		const val1 = record1[key];
		if (key in record2) {
			const val2 = record2[key];
			if (isArray2(val1) || isArray2(val2)) result[key] = flatMergeArrays(val2, val1);
			else if (typeof val1 === "object" && typeof val2 === "object" && val1 && val2) result[key] = mergeObjects(val1, val2);
			else result[key] = val2 + " " + val1;
		} else result[key] = val1;
	}
	for (const key in record2) if (!(key in record1)) result[key] = record2[key];
	return result;
};

//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.4.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/chunk-SUL6UUW2.js
var defaultConfig = {
	twMerge: true,
	twMergeConfig: {}
};
var VARIANT_CACHE_LIMIT = 256;
var OVERRIDE_CACHE_LIMIT = 128;
var CACHE_MISS = /* @__PURE__ */ Symbol("tv-cache-miss");
var hasClassOverride = (props) => (props == null ? void 0 : props.class) != null && props.class !== "" || (props == null ? void 0 : props.className) != null && props.className !== "";
var serializeFingerprintValue = (value) => {
	if (value === void 0) return "";
	if (value === null) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") return value === 0 ? "0" : String(value);
	if (typeof value === "bigint") return String(value);
	const mapped = falsyToString(value);
	const mappedType = typeof mapped;
	if (mappedType === "string" || mappedType === "number" || mappedType === "boolean" || mappedType === "bigint") return String(mapped);
	if (mappedType === "object") try {
		return JSON.stringify(mapped);
	} catch {
		return null;
	}
	return null;
};
var appendSignatureValue = (out, value) => {
	if (value === void 0) return out;
	if (value === null) return out + "null";
	const type = typeof value;
	if (type === "string" || type === "number" || type === "boolean" || type === "bigint") return out + String(value);
	if (Array.isArray(value)) return out + value.join("\0");
	try {
		return out + JSON.stringify(value);
	} catch {
		return out + "?";
	}
};
var buildPropsFingerprint = (variantKeys, defaultVariants, props, slotProps) => {
	let fingerprint = "";
	const seen = /* @__PURE__ */ Object.create(null);
	for (let i = 0; i < variantKeys.length; i++) {
		const key = variantKeys[i];
		seen[key] = 1;
		let value = defaultVariants[key];
		if (props && props[key] !== void 0) value = props[key];
		const serialized = serializeFingerprintValue(value);
		if (serialized === null) return null;
		fingerprint += key + ":" + serialized + ";";
	}
	const extras = [];
	for (const key in defaultVariants) {
		if (key === "class" || key === "className" || seen[key]) continue;
		seen[key] = 1;
		extras.push(key);
	}
	if (props) for (const key in props) {
		if (key === "class" || key === "className" || seen[key] || props[key] === void 0) continue;
		seen[key] = 1;
		extras.push(key);
	}
	if (extras.length > 1) extras.sort();
	for (let i = 0; i < extras.length; i++) {
		const key = extras[i];
		let value = defaultVariants[key];
		if (props && props[key] !== void 0) value = props[key];
		const serialized = serializeFingerprintValue(value);
		if (serialized === null) return null;
		fingerprint += key + ":" + serialized + ";";
	}
	return fingerprint;
};
var buildCompoundsSignature = (compoundVariants, compoundSlots) => {
	let signature = "";
	for (let i = 0; i < compoundVariants.length; i++) {
		const { conditionKeys, source } = compoundVariants[i];
		for (let j = 0; j < conditionKeys.length; j++) {
			const key = conditionKeys[j];
			signature += key + "=";
			signature = appendSignatureValue(signature, source[key]);
			signature += ",";
		}
		signature += "c=";
		signature = appendSignatureValue(signature, source.class);
		signature += "|cn=";
		signature = appendSignatureValue(signature, source.className);
		signature += ";";
	}
	for (let i = 0; i < compoundSlots.length; i++) {
		const { conditionKeys, source } = compoundSlots[i];
		for (let j = 0; j < conditionKeys.length; j++) {
			const key = conditionKeys[j];
			signature += key + "=";
			signature = appendSignatureValue(signature, source[key]);
			signature += ",";
		}
		if (Array.isArray(source.slots)) signature += "slots=" + source.slots.join(",") + ",";
		signature += "c=";
		signature = appendSignatureValue(signature, source.class);
		signature += "|cn=";
		signature = appendSignatureValue(signature, source.className);
		signature += ";";
	}
	return signature;
};
var createBoundedCache = (limit = VARIANT_CACHE_LIMIT) => {
	let primary = /* @__PURE__ */ new Map();
	let secondary = null;
	return {
		get(key) {
			if (primary.has(key)) return primary.get(key);
			if (secondary == null ? void 0 : secondary.has(key)) {
				const value = secondary.get(key);
				primary.set(key, value);
				return value;
			}
			return CACHE_MISS;
		},
		set(key, value) {
			if (primary.size >= limit) {
				secondary = primary;
				primary = /* @__PURE__ */ new Map();
			}
			primary.set(key, value);
		}
	};
};
var createResultCache = (limit = VARIANT_CACHE_LIMIT) => {
	const cache = createBoundedCache(limit);
	return {
		get(key) {
			return cache.get(key);
		},
		set(key, value) {
			cache.set(key, value);
		}
	};
};
var createNestedOverrideCache = (limit = OVERRIDE_CACHE_LIMIT) => {
	let primary = /* @__PURE__ */ new Map();
	let secondary = null;
	let size = 0;
	return {
		get(coreKey, overrideKey) {
			const primaryInner = primary.get(coreKey);
			if (primaryInner) {
				const value = primaryInner.get(overrideKey);
				if (value !== void 0 || primaryInner.has(overrideKey)) return value;
			}
			if (secondary) {
				const secondaryInner = secondary.get(coreKey);
				if (secondaryInner) {
					const value = secondaryInner.get(overrideKey);
					if (value !== void 0 || secondaryInner.has(overrideKey)) {
						let promoteInner = primary.get(coreKey);
						if (!promoteInner) {
							promoteInner = /* @__PURE__ */ new Map();
							primary.set(coreKey, promoteInner);
						}
						if (!promoteInner.has(overrideKey)) size++;
						promoteInner.set(overrideKey, value);
						return value;
					}
				}
			}
			return CACHE_MISS;
		},
		set(coreKey, overrideKey, value) {
			if (size >= limit) {
				secondary = primary;
				primary = /* @__PURE__ */ new Map();
				size = 0;
			}
			let inner = primary.get(coreKey);
			if (!inner) {
				inner = /* @__PURE__ */ new Map();
				primary.set(coreKey, inner);
			}
			if (!inner.has(overrideKey)) size++;
			inner.set(overrideKey, value);
		}
	};
};
var createLazyOverrideMerge = (cn, config) => {
	let cache = null;
	return (core, props) => {
		if (!hasClassOverride(props)) return core;
		const classVal = props.class;
		const classNameVal = props.className;
		if (classVal != null && classVal !== "" && typeof classVal !== "string" || classNameVal != null && classNameVal !== "" && typeof classNameVal !== "string") return cn(config, core, classVal, classNameVal);
		cache ??= createNestedOverrideCache();
		const coreKey = core ?? "";
		const overrideKey = (typeof classVal === "string" ? classVal : "") + "\0" + (typeof classNameVal === "string" ? classNameVal : "");
		const cached = cache.get(coreKey, overrideKey);
		if (cached !== CACHE_MISS) return cached;
		const merged = cn(config, core, classVal, classNameVal);
		cache.set(coreKey, overrideKey, merged);
		return merged;
	};
};
function createState() {
	let cachedTwMerge = null;
	let cachedTwMergeConfig = {};
	let didTwMergeConfigChange = false;
	return {
		get cachedTwMerge() {
			return cachedTwMerge;
		},
		set cachedTwMerge(value) {
			cachedTwMerge = value;
		},
		get cachedTwMergeConfig() {
			return cachedTwMergeConfig;
		},
		set cachedTwMergeConfig(value) {
			cachedTwMergeConfig = value;
		},
		get didTwMergeConfigChange() {
			return didTwMergeConfigChange;
		},
		set didTwMergeConfigChange(value) {
			didTwMergeConfigChange = value;
		},
		reset() {
			cachedTwMerge = null;
			cachedTwMergeConfig = {};
			didTwMergeConfigChange = false;
		}
	};
}
var state = createState();
var synchronizeTwMergeConfig = (config) => {
	if (!isEmptyObject(config.twMergeConfig) && !isEqual(config.twMergeConfig, state.cachedTwMergeConfig)) {
		state.didTwMergeConfigChange = true;
		state.cachedTwMergeConfig = config.twMergeConfig;
	}
};
var compileVariants = (variants, variantKeys) => {
	const compiledVariants = [];
	for (let i = 0; i < variantKeys.length; i++) {
		const key = variantKeys[i];
		const values = variants[key];
		compiledVariants.push({
			key,
			values,
			isEmpty: isEmptyObject(values)
		});
	}
	return compiledVariants;
};
var compileCompoundVariants = (compoundVariants) => {
	if (!Array.isArray(compoundVariants) || compoundVariants.length === 0) return [];
	const result = [];
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		const conditionKeys = [];
		for (const key in compoundVariant) if (key !== "class" && key !== "className") conditionKeys.push(key);
		result.push({
			conditionKeys,
			source: compoundVariant
		});
	}
	return result;
};
var compileCompoundSlots = (compoundSlots) => {
	if (!Array.isArray(compoundSlots) || compoundSlots.length === 0) return [];
	const result = [];
	for (let i = 0; i < compoundSlots.length; i++) {
		const compoundSlot = compoundSlots[i];
		const conditionKeys = [];
		for (const key in compoundSlot) if (key !== "slots" && key !== "class" && key !== "className") conditionKeys.push(key);
		result.push({
			conditionKeys,
			source: compoundSlot
		});
	}
	return result;
};
var indexCompoundSlotsBySlot = (compiledCompoundSlots) => {
	const index = {};
	for (let i = 0; i < compiledCompoundSlots.length; i++) {
		const compoundSlot = compiledCompoundSlots[i];
		const slots = compoundSlot.source.slots;
		if (!Array.isArray(slots)) continue;
		for (let j = 0; j < slots.length; j++) {
			const slotKey = slots[j];
			if (!index[slotKey]) index[slotKey] = [];
			index[slotKey].push(compoundSlot);
		}
	}
	return index;
};
var resolveOptions = (options, configProp) => {
	const { extend = null, slots: slotProps = {}, variants: variantsProps = {}, compoundVariants: compoundVariantsProps = [], compoundSlots: compoundSlotsProps = [], defaultVariants: defaultVariantsProps = {} } = options;
	const config = {
		...defaultConfig,
		...configProp
	};
	const hasSlots = options.slots !== void 0;
	const base = (extend == null ? void 0 : extend.base) ? cx(extend.base, options == null ? void 0 : options.base) : options == null ? void 0 : options.base;
	const variants = (extend == null ? void 0 : extend.variants) && !isEmptyObject(extend.variants) ? mergeObjects(variantsProps, extend.variants) : variantsProps;
	const defaultVariants = (extend == null ? void 0 : extend.defaultVariants) && !isEmptyObject(extend.defaultVariants) ? {
		...extend.defaultVariants,
		...defaultVariantsProps
	} : defaultVariantsProps;
	synchronizeTwMergeConfig(config);
	const isExtendedSlotsEmpty = !(extend == null ? void 0 : extend.slots) || isEmptyObject(extend.slots);
	const componentBase = hasSlots ? isExtendedSlotsEmpty && (extend == null ? void 0 : extend.base) ? cx(options == null ? void 0 : options.base, extend.base) : typeof (options == null ? void 0 : options.base) === "string" || (options == null ? void 0 : options.base) == null ? options.base : cx(options.base) : void 0;
	const componentSlots = hasSlots ? {
		base: componentBase,
		...slotProps
	} : {};
	const slots = isExtendedSlotsEmpty ? componentSlots : joinObjects({ ...extend == null ? void 0 : extend.slots }, isEmptyObject(componentSlots) ? { base: options == null ? void 0 : options.base } : componentSlots);
	const compoundVariants = !(extend == null ? void 0 : extend.compoundVariants) || isEmptyObject(extend.compoundVariants) ? compoundVariantsProps : flatMergeArrays(extend == null ? void 0 : extend.compoundVariants, compoundVariantsProps);
	const compoundSlots = !(extend == null ? void 0 : extend.compoundSlots) || isEmptyObject(extend.compoundSlots) ? compoundSlotsProps : flatMergeArrays(extend == null ? void 0 : extend.compoundSlots, compoundSlotsProps);
	const variantKeys = Object.keys(variants);
	return {
		config,
		extend,
		base,
		variants,
		defaultVariants,
		slots,
		compoundVariants,
		compoundSlots,
		compiledVariants: null,
		compiledCompoundVariants: null,
		compiledCompoundSlots: null,
		compiledCompoundSlotsBySlot: null,
		deferredError: compoundVariants && !Array.isArray(compoundVariants) ? /* @__PURE__ */ new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof compoundVariants}`) : compoundSlots && !Array.isArray(compoundSlots) ? /* @__PURE__ */ new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof compoundSlots}`) : null,
		mode: hasSlots || !isExtendedSlotsEmpty ? "slots" : variantKeys.length === 0 ? "plain" : "variants",
		slotKeys: null,
		variantKeys
	};
};
var compileResolvedOptions = (resolved) => {
	if (resolved.compiledVariants !== null) return resolved;
	resolved.compiledVariants = compileVariants(resolved.variants, resolved.variantKeys);
	resolved.compiledCompoundVariants = compileCompoundVariants(resolved.compoundVariants);
	resolved.compiledCompoundSlots = compileCompoundSlots(resolved.compoundSlots);
	resolved.compiledCompoundSlotsBySlot = indexCompoundSlotsBySlot(resolved.compiledCompoundSlots);
	resolved.slotKeys = resolved.slots && typeof resolved.slots === "object" ? Object.keys(resolved.slots) : [];
	return resolved;
};
var EMPTY_ARRAY = [];
var variantClassesScratch = [];
var compoundClassesScratch = [];
var compoundVariantBySlotScratch = [];
var compoundSlotClassesScratch = [];
var getCompleteProps = (defaultVariants, props, slotProps) => {
	const result = {};
	for (const key in defaultVariants) result[key] = defaultVariants[key];
	if (props) {
		for (const key in props) if (props[key] !== void 0) result[key] = props[key];
	}
	if (slotProps) {
		for (const key in slotProps) if (slotProps[key] !== void 0) result[key] = slotProps[key];
	}
	return result;
};
var isNullishOrFalse = (value) => value == null || value === false;
var matchesCompoundValue = (expected, actual) => {
	if (!Array.isArray(expected)) return expected === actual || isNullishOrFalse(expected) && isNullishOrFalse(actual);
	for (let i = 0; i < expected.length; i++) {
		const expectedValue = expected[i];
		if (expectedValue === actual || isNullishOrFalse(expectedValue) && isNullishOrFalse(actual)) return true;
	}
	return false;
};
var getVariantValue = (variant, defaultVariants, props, slotProps) => {
	if (variant.isEmpty) return null;
	const variantProp = (slotProps == null ? void 0 : slotProps[variant.key]) ?? (props == null ? void 0 : props[variant.key]);
	if (variantProp === null) return null;
	const variantKey = falsyToString(variantProp);
	if (typeof variantKey === "object") return null;
	const defaultVariantProp = defaultVariants == null ? void 0 : defaultVariants[variant.key];
	const key = variantKey != null ? variantKey : falsyToString(defaultVariantProp);
	return variant.values[key || "false"];
};
var matchesConditions = (compound, completeProps) => {
	const { conditionKeys, source } = compound;
	for (let i = 0; i < conditionKeys.length; i++) {
		const key = conditionKeys[i];
		if (!matchesCompoundValue(source[key], completeProps[key])) return false;
	}
	return true;
};
var pushCompoundClassForSlot = (result, slotKey, classValue) => {
	if (typeof classValue === "string") {
		if (slotKey === "base") result.push(classValue);
	} else if (classValue && typeof classValue === "object" && classValue[slotKey]) result.push(classValue[slotKey]);
};
var getVariantClassNames = (variants, defaultVariants, props) => {
	const result = variantClassesScratch;
	result.length = 0;
	for (let i = 0; i < variants.length; i++) {
		const value = getVariantValue(variants[i], defaultVariants, props);
		if (value) result.push(value);
	}
	return result;
};
var getVariantClassNamesBySlot = (slotKey, variants, defaultVariants, props, slotProps) => {
	const result = variantClassesScratch;
	result.length = 0;
	for (let i = 0; i < variants.length; i++) {
		const variantValue = getVariantValue(variants[i], defaultVariants, props, slotProps);
		const value = slotKey === "base" && typeof variantValue === "string" ? variantValue : variantValue && variantValue[slotKey];
		if (value) result.push(value);
	}
	return result;
};
var getCompoundVariantClasses = (compoundVariants, completeProps) => {
	const result = compoundClassesScratch;
	result.length = 0;
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		if (!matchesConditions(compoundVariant, completeProps)) continue;
		if (compoundVariant.source.class) result.push(compoundVariant.source.class);
		if (compoundVariant.source.className) result.push(compoundVariant.source.className);
	}
	return result;
};
var getCompoundVariantClassesBySlot = (slotKey, compoundVariants, completeProps) => {
	const result = compoundVariantBySlotScratch;
	result.length = 0;
	for (let i = 0; i < compoundVariants.length; i++) {
		const compoundVariant = compoundVariants[i];
		if (!matchesConditions(compoundVariant, completeProps)) continue;
		pushCompoundClassForSlot(result, slotKey, compoundVariant.source.class);
		pushCompoundClassForSlot(result, slotKey, compoundVariant.source.className);
	}
	return result;
};
var getCompoundSlotClasses = (compoundSlotsForKey, completeProps) => {
	const result = compoundSlotClassesScratch;
	result.length = 0;
	for (let i = 0; i < compoundSlotsForKey.length; i++) {
		const compoundSlot = compoundSlotsForKey[i];
		if (!matchesConditions(compoundSlot, completeProps)) continue;
		if (compoundSlot.source.class) result.push(compoundSlot.source.class);
		if (compoundSlot.source.className) result.push(compoundSlot.source.className);
	}
	return result;
};
var createPlainResolver = (resolved, cn) => {
	const { base, config } = resolved;
	let core = CACHE_MISS;
	const mergeOverride = createLazyOverrideMerge(cn, config);
	return ((props) => {
		if (core === CACHE_MISS) core = cn(config, base);
		return mergeOverride(core, props);
	});
};
var createVariantResolver = (resolved, cn) => {
	const { base, config, defaultVariants, deferredError, variantKeys } = resolved;
	let compiledCompoundVariants = resolved.compiledCompoundVariants;
	let compiledVariants = resolved.compiledVariants;
	let compiledCompoundSlots = EMPTY_ARRAY;
	let cache = null;
	const mergeOverride = createLazyOverrideMerge(cn, config);
	let coldInvokesRemaining = 1;
	const computeCore = (props) => {
		const compoundClasses = compiledCompoundVariants.length > 0 ? getCompoundVariantClasses(compiledCompoundVariants, getCompleteProps(defaultVariants, props)) : void 0;
		return cn(config, base, getVariantClassNames(compiledVariants, defaultVariants, props), compoundClasses);
	};
	return ((props) => {
		if (deferredError) throw deferredError;
		if (compiledVariants === null || compiledCompoundVariants === null) {
			compileResolvedOptions(resolved);
			compiledVariants = resolved.compiledVariants;
			compiledCompoundVariants = resolved.compiledCompoundVariants;
			compiledCompoundSlots = resolved.compiledCompoundSlots ?? EMPTY_ARRAY;
		}
		let core;
		if (coldInvokesRemaining > 0) {
			coldInvokesRemaining--;
			core = computeCore(props);
		} else {
			cache ??= createResultCache();
			const propsFingerprint = buildPropsFingerprint(variantKeys, defaultVariants, props);
			if (propsFingerprint !== null) {
				const compoundsSig = compiledCompoundVariants.length > 0 || compiledCompoundSlots.length > 0 ? buildCompoundsSignature(compiledCompoundVariants, compiledCompoundSlots) : "";
				const cacheKey = propsFingerprint + "#" + compoundsSig;
				const cached = cache.get(cacheKey);
				if (cached !== CACHE_MISS) core = cached;
				else {
					core = computeCore(props);
					cache.set(cacheKey, core);
				}
			} else core = computeCore(props);
		}
		return mergeOverride(core, props);
	});
};
var createSlotsResolver = (resolved, cn) => {
	const { config, defaultVariants, deferredError, slots, variantKeys } = resolved;
	let compoundVariants = null;
	let compoundSlots = null;
	let keys = null;
	let slotComputers = null;
	let hasCompounds = false;
	let mergeOverride = null;
	let parentCache = null;
	let coldParentInvokesRemaining = 1;
	const ensureCompiled = () => {
		if (keys !== null) return;
		if (resolved.compiledVariants === null || resolved.compiledCompoundVariants === null || resolved.compiledCompoundSlots === null || resolved.compiledCompoundSlotsBySlot === null || resolved.slotKeys === null) compileResolvedOptions(resolved);
		const variants = resolved.compiledVariants;
		compoundVariants = resolved.compiledCompoundVariants;
		compoundSlots = resolved.compiledCompoundSlots;
		const compoundSlotsBySlot = resolved.compiledCompoundSlotsBySlot;
		keys = resolved.slotKeys;
		hasCompounds = compoundVariants.length > 0 || compoundSlots.length > 0;
		mergeOverride = createLazyOverrideMerge(cn, config);
		const computers = new Array(keys.length);
		for (let i = 0; i < keys.length; i++) {
			const slotKey = keys[i];
			const compoundSlotsForKey = compoundSlotsBySlot[slotKey] ?? EMPTY_ARRAY;
			computers[i] = (propsRef, slotProps) => {
				const completeProps = hasCompounds ? getCompleteProps(defaultVariants, propsRef, slotProps) : void 0;
				const compoundVariantClasses = completeProps ? getCompoundVariantClassesBySlot(slotKey, compoundVariants, completeProps) : void 0;
				const compoundSlotClasses = completeProps ? getCompoundSlotClasses(compoundSlotsForKey, completeProps) : void 0;
				return cn(config, slots[slotKey], getVariantClassNamesBySlot(slotKey, variants, defaultVariants, propsRef, slotProps), compoundVariantClasses, compoundSlotClasses);
			};
		}
		slotComputers = computers;
	};
	const createSlotsResult = (props) => {
		const slotKeys = keys;
		const computers = slotComputers;
		const overrideMerge = mergeOverride;
		const result = {};
		for (let i = 0; i < slotKeys.length; i++) {
			const compute = computers[i];
			const core = compute(props);
			result[slotKeys[i]] = (slotProps) => {
				if (slotProps == null) return core;
				let hasVariantOverride = false;
				for (const key in slotProps) {
					if (key === "class" || key === "className") continue;
					if (slotProps[key] !== void 0) {
						hasVariantOverride = true;
						break;
					}
				}
				if (!hasVariantOverride) return overrideMerge(core, slotProps);
				return overrideMerge(compute(props, slotProps), slotProps);
			};
		}
		return result;
	};
	return ((props) => {
		if (deferredError) throw deferredError;
		ensureCompiled();
		if (coldParentInvokesRemaining > 0) {
			coldParentInvokesRemaining--;
			return createSlotsResult(props);
		}
		const propsFingerprint = buildPropsFingerprint(variantKeys, defaultVariants, props);
		if (propsFingerprint === null) return createSlotsResult(props);
		const compoundsSig = hasCompounds ? buildCompoundsSignature(compoundVariants, compoundSlots) : "";
		const cacheKey = propsFingerprint + "#" + compoundsSig;
		parentCache ??= createBoundedCache();
		const cached = parentCache.get(cacheKey);
		if (cached !== CACHE_MISS) return cached;
		const next = createSlotsResult(props);
		parentCache.set(cacheKey, next);
		return next;
	});
};
var createClassResolver = (resolved, cn) => {
	if (resolved.mode === "plain") return createPlainResolver(resolved, cn);
	let resolver;
	return ((props) => {
		resolver ??= resolved.mode === "slots" ? createSlotsResolver(resolved, cn) : createVariantResolver(resolved, cn);
		return resolver(props);
	});
};
var attachComponentMetadata = (component, resolved) => {
	component.variantKeys = resolved.variantKeys;
	component.extend = resolved.extend;
	component.base = resolved.base;
	component.slots = resolved.slots;
	component.variants = resolved.variants;
	component.defaultVariants = resolved.defaultVariants;
	component.compoundSlots = resolved.compoundSlots;
	component.compoundVariants = resolved.compoundVariants;
};
var getTailwindVariants = (cn) => {
	const tv = (options, configProp) => {
		const resolved = resolveOptions(options, configProp);
		const component = createClassResolver(resolved, cn);
		attachComponentMetadata(component, resolved);
		return component;
	};
	const createTV = (configProp) => {
		return (options, config) => tv(options, config ? mergeObjects(configProp, config) : configProp);
	};
	return {
		tv,
		createTV
	};
};

//#endregion
//#region node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.4.0_tailwindcss@4.3.3/node_modules/tailwind-variants/dist/index.js
var concatArrays = (array1, array2) => {
	const length1 = array1.length;
	const length2 = array2.length;
	const combined = new Array(length1 + length2);
	for (let i = 0; i < length1; i++) combined[i] = array1[i];
	for (let i = 0; i < length2; i++) combined[length1 + i] = array2[i];
	return combined;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className[0] === "[" && className[className.length - 1] === "]") return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let index = 0; index < validatorsLength; index++) {
		const validatorObject = validators[index];
		if (validatorObject.validator(classRest)) return validatorObject.classGroupId;
	}
};
var getGroupIdForArbitraryProperty = (className) => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	if (colonIndex === -1) return;
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
};
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const length = classGroup.length;
	for (let index = 0; index < length; index++) {
		const classDefinition = classGroup[index];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const length = entries.length;
	for (let index = 0; index < length; index++) {
		const [key, value] = entries[index];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const length = parts.length;
	for (let index = 0; index < length; index++) {
		const part = parts[index];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (classDefinition) => "isThemeGetter" in classDefinition && classDefinition.isThemeGetter === true;
var IMPORTANT_MODIFIER = "!";
var CHAR_MODIFIER_SEPARATOR = 58;
var CHAR_POSTFIX_SEPARATOR = 47;
var CHAR_OPEN_BRACKET = 91;
var CHAR_CLOSE_BRACKET = 93;
var CHAR_OPEN_PAREN = 40;
var CHAR_CLOSE_PAREN = 41;
var CHAR_IMPORTANT = 33;
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal: void 0
});
var parseClassName = (className) => {
	const modifiers = [];
	let bracketDepth = 0;
	let parenDepth = 0;
	let modifierStart = 0;
	let postfixModifierPosition;
	const len = className.length;
	for (let index = 0; index < len; index++) {
		const charCode = className.charCodeAt(index);
		if (bracketDepth === 0 && parenDepth === 0) {
			if (charCode === CHAR_MODIFIER_SEPARATOR) {
				modifiers.push(className.slice(modifierStart, index));
				modifierStart = index + 1;
				continue;
			}
			if (charCode === CHAR_POSTFIX_SEPARATOR) {
				postfixModifierPosition = index;
				continue;
			}
		}
		if (charCode === CHAR_OPEN_BRACKET) bracketDepth++;
		else if (charCode === CHAR_CLOSE_BRACKET) bracketDepth--;
		else if (charCode === CHAR_OPEN_PAREN) parenDepth++;
		else if (charCode === CHAR_CLOSE_PAREN) parenDepth--;
	}
	const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
	let baseClassName = baseClassNameWithImportantModifier;
	let hasImportantModifier = false;
	const lastIndex = baseClassNameWithImportantModifier.length - 1;
	if (baseClassNameWithImportantModifier.charCodeAt(lastIndex) === CHAR_IMPORTANT) {
		baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
		hasImportantModifier = true;
	} else if (baseClassNameWithImportantModifier.charCodeAt(0) === CHAR_IMPORTANT) {
		baseClassName = baseClassNameWithImportantModifier.slice(1);
		hasImportantModifier = true;
	}
	const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
	return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
};
var createSortModifiers = (config) => {
	const orderSensitiveModifiers = new Set(config.orderSensitiveModifiers);
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let index = 0; index < modifiers.length; index++) {
			const modifier = modifiers[index];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = orderSensitiveModifiers.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					for (let segmentIndex = 0; segmentIndex < currentSegment.length; segmentIndex++) result.push(currentSegment[segmentIndex]);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			for (let segmentIndex = 0; segmentIndex < currentSegment.length; segmentIndex++) result.push(currentSegment[segmentIndex]);
		}
		return result;
	};
};
var EXTERNAL_DESCRIPTOR = {
	isExternal: true,
	classId: -1,
	conflictIds: []
};
var DESCRIPTOR_CACHE_SIZE = 4096;
var MAX_CONFLICT_KEYS = 16384;
var createConfigUtils = (config) => {
	const sortModifiers = createSortModifiers(config);
	const postfixLookupClassGroupIds = createPostfixLookupClassGroupIds(config);
	const { getClassGroupId, getConflictingClassGroupIds } = createClassGroupUtils(config);
	let descriptorCache = /* @__PURE__ */ Object.create(null);
	let previousDescriptorCache = /* @__PURE__ */ Object.create(null);
	let descriptorCacheSize = 0;
	let claimedGeneration = /* @__PURE__ */ new Int32Array(256);
	let currentGeneration = 0;
	let keepFlags = /* @__PURE__ */ new Uint8Array(64);
	let splitSawNonSpaceWhitespace = false;
	const splitClassList = (classList) => {
		const tokens = [];
		const length = classList.length;
		let tokenStart = -1;
		splitSawNonSpaceWhitespace = false;
		for (let index = 0; index < length; index++) {
			const charCode = classList.charCodeAt(index);
			if (charCode === 32) {
				if (tokenStart !== -1) {
					tokens.push(classList.slice(tokenStart, index));
					tokenStart = -1;
				}
			} else if (charCode >= 9 && charCode <= 13) {
				splitSawNonSpaceWhitespace = true;
				if (tokenStart !== -1) {
					tokens.push(classList.slice(tokenStart, index));
					tokenStart = -1;
				}
			} else if (tokenStart === -1) tokenStart = index;
		}
		if (tokenStart !== -1) tokens.push(classList.slice(tokenStart));
		return tokens;
	};
	const conflictKeyIds = /* @__PURE__ */ new Map();
	let nextConflictKeyId = 0;
	const internConflictKey = (conflictKey) => {
		let id = conflictKeyIds.get(conflictKey);
		if (id === void 0) {
			id = nextConflictKeyId++;
			conflictKeyIds.set(conflictKey, id);
			if (id >= claimedGeneration.length) {
				const grown = new Int32Array(claimedGeneration.length * 2);
				grown.set(claimedGeneration);
				claimedGeneration = grown;
			}
		}
		return id;
	};
	const computeClassDescriptor = (originalClassName) => {
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) return EXTERNAL_DESCRIPTOR;
		let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
		let classGroupId;
		if (hasPostfixModifier) {
			const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
			classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) return EXTERNAL_DESCRIPTOR;
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) return EXTERNAL_DESCRIPTOR;
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		const conflictIds = [];
		for (let index = 0; index < conflictGroups.length; index++) conflictIds.push(internConflictKey(modifierId + conflictGroups[index]));
		return {
			isExternal: false,
			classId: internConflictKey(modifierId + classGroupId),
			conflictIds
		};
	};
	const getClassDescriptor = (originalClassName) => {
		let descriptor = descriptorCache[originalClassName];
		if (descriptor !== void 0) return descriptor;
		descriptor = previousDescriptorCache[originalClassName];
		if (descriptor === void 0) descriptor = computeClassDescriptor(originalClassName);
		descriptorCache[originalClassName] = descriptor;
		if (++descriptorCacheSize > DESCRIPTOR_CACHE_SIZE) {
			descriptorCacheSize = 0;
			previousDescriptorCache = descriptorCache;
			descriptorCache = /* @__PURE__ */ Object.create(null);
		}
		return descriptor;
	};
	const mergeClassList = (classList) => {
		const classNames = splitClassList(classList);
		const classCount = classNames.length;
		if (classCount === 1) return classNames[0];
		if (nextConflictKeyId > MAX_CONFLICT_KEYS) {
			conflictKeyIds.clear();
			nextConflictKeyId = 0;
			descriptorCache = /* @__PURE__ */ Object.create(null);
			previousDescriptorCache = /* @__PURE__ */ Object.create(null);
			descriptorCacheSize = 0;
		}
		currentGeneration = currentGeneration + 1 | 0;
		if (currentGeneration === 0) currentGeneration = 1;
		const generation = currentGeneration;
		if (classCount > keepFlags.length) {
			let capacity = keepFlags.length;
			while (capacity < classCount) capacity *= 2;
			keepFlags = new Uint8Array(capacity);
		}
		let didDrop = false;
		let tokenCharCount = 0;
		for (let index = classCount - 1; index >= 0; index -= 1) {
			const className = classNames[index];
			tokenCharCount += className.length;
			const descriptor = getClassDescriptor(className);
			if (descriptor.isExternal) {
				keepFlags[index] = 1;
				continue;
			}
			const classId = descriptor.classId;
			if (claimedGeneration[classId] === generation) {
				keepFlags[index] = 0;
				didDrop = true;
				continue;
			}
			claimedGeneration[classId] = generation;
			const conflictIds = descriptor.conflictIds;
			for (let conflictIndex = 0; conflictIndex < conflictIds.length; conflictIndex++) claimedGeneration[conflictIds[conflictIndex]] = generation;
			keepFlags[index] = 1;
		}
		if (!didDrop && !splitSawNonSpaceWhitespace && classList.length === tokenCharCount + classCount - 1) return classList;
		let result = "";
		for (let index = 0; index < classCount; index++) if (keepFlags[index] === 1) {
			if (result) result += " ";
			result += classNames[index];
		}
		return result;
	};
	return {
		parseClassName,
		sortModifiers,
		postfixLookupClassGroupIds,
		getClassGroupId,
		getConflictingClassGroupIds,
		getClassDescriptor,
		mergeClassList
	};
};
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = /* @__PURE__ */ Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let index = 0; index < classGroupIds.length; index++) lookup[classGroupIds[index]] = true;
	return lookup;
};
var MERGE_CACHE_SIZE = 500;
var createTailwindMerge = (createConfig) => {
	let configUtils;
	let mergeClassList;
	let cache = /* @__PURE__ */ Object.create(null);
	let previousCache = /* @__PURE__ */ Object.create(null);
	let cacheSize = 0;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfig());
		mergeClassList = configUtils.mergeClassList;
		merge.mergeString = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		let result = cache[classList];
		if (result !== void 0) return result;
		result = previousCache[classList];
		if (result === void 0) result = mergeClassList(classList);
		cache[classList] = result;
		if (++cacheSize > MERGE_CACHE_SIZE) {
			cacheSize = 0;
			previousCache = cache;
			cache = /* @__PURE__ */ Object.create(null);
		}
		return result;
	};
	const merge = (...args) => merge.mergeString(joinClassValue(args));
	merge.mergeString = initTailwindMerge;
	return merge;
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var toNumber = Number;
var numberIsNaN = Number.isNaN;
var numberIsInteger = Number.isInteger;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => Boolean(value) && !numberIsNaN(toNumber(value));
var isInteger = (value) => Boolean(value) && numberIsInteger(toNumber(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/width
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/height
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				(
				/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
				{ screen: [themeBreakpoint] }),
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var mergeConfigs = (baseConfig, { extend = {}, override = {} }) => {
	overrideConfigProperties(baseConfig.theme, override.theme);
	overrideConfigProperties(baseConfig.classGroups, override.classGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
	overrideProperty(baseConfig, "postfixLookupClassGroups", override.postfixLookupClassGroups);
	overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
	mergeConfigProperties(baseConfig.theme, extend.theme);
	mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
	mergeArrayProperties(baseConfig, extend, "postfixLookupClassGroups");
	mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
	return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
	if (overrideValue !== void 0) baseObject[overrideKey] = overrideValue;
};
var overrideConfigProperties = (baseObject, overrideObject) => {
	if (overrideObject) for (const key in overrideObject) overrideProperty(baseObject, key, overrideObject[key]);
};
var mergeConfigProperties = (baseObject, mergeObject) => {
	if (mergeObject) for (const key in mergeObject) mergeArrayProperties(baseObject, mergeObject, key);
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
	const mergeValue = mergeObject[key];
	if (mergeValue !== void 0) baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
};
var createMerger = (config) => {
	if (!config) return createTailwindMerge(getDefaultConfig);
	return createTailwindMerge(typeof config === "function" ? () => config(getDefaultConfig()) : () => mergeConfigs(getDefaultConfig(), config));
};
var toMergerConfig = (config) => {
	if (isEmptyObject(config)) return void 0;
	const source = config;
	const extend = { ...source.extend ?? {} };
	for (const key of [
		"theme",
		"classGroups",
		"conflictingClassGroups",
		"conflictingClassGroupModifiers",
		"postfixLookupClassGroups",
		"orderSensitiveModifiers",
		"cacheSize",
		"prefix",
		"separator",
		"experimentalParseClassName"
	]) if (source[key] !== void 0 && extend[key] === void 0) extend[key] = source[key];
	const result = {};
	if (Object.keys(extend).length > 0) result.extend = extend;
	if (source.override != null && !isEmptyObject(source.override)) result.override = source.override;
	if (!result.extend && !result.override) return void 0;
	return result;
};
var createTwMerge = (cachedTwMergeConfig) => {
	const merger = createMerger(toMergerConfig(cachedTwMergeConfig));
	return (classList) => merger.mergeString(classList);
};
var defaultMerger;
var getDefaultMerger = () => {
	if (!defaultMerger) defaultMerger = createMerger();
	return defaultMerger;
};
var ensureConfiguredMerger = () => {
	if (!state.cachedTwMerge || state.didTwMergeConfigChange) {
		state.didTwMergeConfigChange = false;
		state.cachedTwMerge = createTwMerge(state.cachedTwMergeConfig);
	}
	return state.cachedTwMerge;
};
var syncTwMergeConfig = (config) => {
	const next = config == null ? void 0 : config.twMergeConfig;
	if (!next || isEmptyObject(next)) return;
	if (!isEqual(next, state.cachedTwMergeConfig)) {
		state.cachedTwMergeConfig = next;
		state.didTwMergeConfigChange = true;
	}
};
var joinArgs = (classnames) => joinClassValue(classnames);
var IS_V8 = (() => {
	const error = /* @__PURE__ */ new Error();
	return !("line" in error) && !("lineNumber" in error);
})();
var argCache = /* @__PURE__ */ new Map();
var previousArgCache = /* @__PURE__ */ new Map();
var argCacheCount = 0;
var clearArgCache = () => {
	argCache = /* @__PURE__ */ new Map();
	previousArgCache = /* @__PURE__ */ new Map();
	argCacheCount = 0;
};
var originalStateReset = state.reset.bind(state);
state.reset = () => {
	defaultMerger = void 0;
	clearArgCache();
	originalStateReset();
};
var executeMerge = (classnames, config) => {
	const base = joinArgs(classnames);
	if (!base || !((config == null ? void 0 : config.twMerge) ?? true)) return base || void 0;
	if (base.indexOf(" ") === -1) return base;
	syncTwMergeConfig(config);
	return (Boolean((config == null ? void 0 : config.twMergeConfig) && !isEmptyObject(config.twMergeConfig)) ? ensureConfiguredMerger() : getDefaultMerger().mergeString)(base) || void 0;
};
var cnAdapter = (config, ...classnames) => executeMerge(classnames, config);
var runtime = getTailwindVariants(cnAdapter);
var tv = runtime.tv;
var createTV = runtime.createTV;

//#endregion
//#region node_modules/.pnpm/@heroui+styles@3.2.4_tailwind-merge@3.4.0_tailwindcss@4.3.3/node_modules/@heroui/styles/dist/components/separator/separator.styles.js
const separatorVariants = tv({
	base: "separator",
	defaultVariants: {
		orientation: "horizontal",
		variant: "default"
	},
	variants: {
		orientation: {
			horizontal: "separator--horizontal",
			vertical: "separator--vertical"
		},
		variant: {
			default: "separator--default",
			secondary: "separator--secondary",
			tertiary: "separator--tertiary"
		}
	}
});

//#endregion
//#region node_modules/.pnpm/react-aria-components@1.21.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria-components/dist/private/utils.mjs
const $7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = Symbol("default");
function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
	let ctx = (0, import_react.useContext)(context);
	if (slot === null) return null;
	if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
		let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
		if (!ctx.slots[slotKey]) {
			let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
			let errorMessage = slot ? `Invalid slot "${slot}".` : "A slot prop is required.";
			throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
		}
		return ctx.slots[slotKey];
	}
	return ctx;
}
function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
	let { ref: contextRef, ...contextProps } = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
	let mergedRef = $03e8ab2d84d7657a$export$4338b53315abf666((0, import_react.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(ref, contextRef), [ref, contextRef]));
	let mergedProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
	if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
		if (typeof contextProps.style === "function" || typeof props.style === "function") mergedProps.style = (renderProps) => {
			let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
			let defaultStyle = {
				...renderProps.defaultStyle,
				...contextStyle
			};
			let style = typeof props.style === "function" ? props.style({
				...renderProps,
				defaultStyle
			}) : props.style;
			return {
				...defaultStyle,
				...style
			};
		};
		else mergedProps.style = {
			...contextProps.style,
			...props.style
		};
	}
	return [mergedProps, mergedRef];
}
function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
	let { render, ...otherProps } = props;
	let elementRef = (0, import_react.useRef)(null);
	let ref = (0, import_react.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(forwardedRef, elementRef), [forwardedRef, elementRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (process.env.NODE_ENV !== "production" && render) {
			if (!elementRef.current) console.warn("Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?");
			else if (elementRef.current.localName !== ElementType) console.warn(`Unexpected DOM element returned by custom \`render\` function. Expected <${ElementType}>, got <${elementRef.current.localName}>. This may break the component behavior and accessibility.`);
		}
	}, [ElementType, render]);
	let domProps = {
		...otherProps,
		ref
	};
	if (render) return render(domProps, void 0);
	return /*#__PURE__*/ import_react.createElement(ElementType, domProps);
}
const $7230ffa83bc0c2cf$var$domComponentCache = {};
const $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, { get(target, elementType) {
	if (typeof elementType !== "string") return void 0;
	let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
	if (!res) {
		res = /*#__PURE__*/ (0, import_react.forwardRef)($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
		$7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
	}
	return res;
} });

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/interactions/useFocusable.mjs
let $d1116acdf220c2da$export$f9762fab77588ecb = /*#__PURE__*/ import_react.createContext(null);

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var $6f0c29017aeec335$export$d68d59712b04d9d1 = class {
	constructor(key) {
		this.value = null;
		this.level = 0;
		this.hasChildNodes = false;
		this.rendered = null;
		this.textValue = "";
		this["aria-label"] = void 0;
		this.index = 0;
		this.parentKey = null;
		this.prevKey = null;
		this.nextKey = null;
		this.firstChildKey = null;
		this.lastChildKey = null;
		this.props = {};
		this.colSpan = null;
		this.colIndex = null;
		this.type = this.constructor.type;
		this.key = key;
	}
	get childNodes() {
		throw new Error("childNodes is not supported");
	}
	clone() {
		let node = new this.constructor(this.key);
		node.value = this.value;
		node.level = this.level;
		node.hasChildNodes = this.hasChildNodes;
		node.rendered = this.rendered;
		node.textValue = this.textValue;
		node["aria-label"] = this["aria-label"];
		node.index = this.index;
		node.parentKey = this.parentKey;
		node.prevKey = this.prevKey;
		node.nextKey = this.nextKey;
		node.firstChildKey = this.firstChildKey;
		node.lastChildKey = this.lastChildKey;
		node.props = this.props;
		node.render = this.render;
		node.colSpan = this.colSpan;
		node.colIndex = this.colIndex;
		return node;
	}
	filter(collection, newCollection, filterFn) {
		let clone = this.clone();
		newCollection.addDescendants(clone, collection);
		return clone;
	}
};
var $6f0c29017aeec335$export$b1918e978f1ee46f = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	filter(collection, newCollection, filterFn) {
		let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(collection, newCollection, this.firstChildKey, filterFn);
		let newNode = this.clone();
		newNode.firstChildKey = firstKey;
		newNode.lastChildKey = lastKey;
		return newNode;
	}
};
var $6f0c29017aeec335$export$5ae2504e948afce5 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "header";
	}
};
var $6f0c29017aeec335$export$8258a0665a675899 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "loader";
	}
};
var $6f0c29017aeec335$export$fd11f34e1d07f134 = class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
	static {
		this.type = "item";
	}
	filter(collection, newCollection, filterFn) {
		if (filterFn(this.textValue, this)) {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
		return null;
	}
};
var $6f0c29017aeec335$export$437f11dc9b403b78 = class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
	static {
		this.type = "section";
	}
	filter(collection, newCollection, filterFn) {
		let filteredSection = super.filter(collection, newCollection, filterFn);
		if (filteredSection) {
			if (filteredSection.lastChildKey !== null) {
				let lastChild = collection.getItem(filteredSection.lastChildKey);
				if (lastChild && lastChild.type !== "header") return filteredSection;
			}
		}
		return null;
	}
};
function $6f0c29017aeec335$var$filterChildren(collection, newCollection, firstChildKey, filterFn) {
	if (firstChildKey == null) return [null, null];
	let firstNode = null;
	let lastNode = null;
	let currentNode = collection.getItem(firstChildKey);
	while (currentNode != null) {
		let newNode = currentNode.filter(collection, newCollection, filterFn);
		if (newNode != null) {
			newNode.nextKey = null;
			if (lastNode) {
				newNode.prevKey = lastNode.key;
				lastNode.nextKey = newNode.key;
			}
			if (firstNode == null) firstNode = newNode;
			newCollection.addNode(newNode);
			lastNode = newNode;
		}
		currentNode = currentNode.nextKey != null ? collection.getItem(currentNode.nextKey) : null;
	}
	if (lastNode && lastNode.type === "separator") {
		let prevKey = lastNode.prevKey;
		newCollection.removeNode(lastNode.key);
		if (prevKey != null) {
			lastNode = newCollection.getItem(prevKey);
			lastNode.nextKey = null;
		} else lastNode = null;
	}
	return [firstNode?.key ?? null, lastNode?.key ?? null];
}

//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));

//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
/**
* @license React
* use-sync-external-store-shim.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var value = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedValue = getSnapshot();
				objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
			}
			cachedValue = useState({ inst: {
				value,
				getSnapshot
			} });
			var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
			useLayoutEffect(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe,
				value,
				getSnapshot
			]);
			useEffect(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe, getSnapshot) {
			return getSnapshot();
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));

//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_use_sync_external_store_shim_production();
	else module.exports = require_use_sync_external_store_shim_development();
}));

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs
var import_shim = require_shim();
const $42ceafc619f9c3ba$var$ShallowRenderContext = /*#__PURE__*/ (0, import_react.createContext)(false);
function $42ceafc619f9c3ba$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let isSSRRef = (0, import_react.useRef)(isSSR);
	isSSRRef.current = isSSR;
	let getSnapshotWrapper = (0, import_react.useCallback)(() => {
		return isSSRRef.current ? getServerSnapshot() : getSnapshot();
	}, [getSnapshot, getServerSnapshot]);
	return (0, import_shim.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const $42ceafc619f9c3ba$var$useSyncExternalStore = typeof import_react.useSyncExternalStore === "function" ? import_react.useSyncExternalStore : $42ceafc619f9c3ba$var$useSyncExternalStoreFallback;
const $42ceafc619f9c3ba$var$SSRContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function $42ceafc619f9c3ba$var$createCollectionNodeClass(type) {
	let NodeClass = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = type;
		}
	};
	return NodeClass;
}
function $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
	if (typeof CollectionNodeClass === "string") CollectionNodeClass = $42ceafc619f9c3ba$var$createCollectionNodeClass(CollectionNodeClass);
	let itemRef = (0, import_react.useCallback)((element) => {
		element?.setProps(props, ref, CollectionNodeClass, rendered, render);
	}, [
		props,
		ref,
		rendered,
		render,
		CollectionNodeClass
	]);
	let parentNode = (0, import_react.useContext)($42ceafc619f9c3ba$var$SSRContext);
	if (parentNode) {
		let element = parentNode.ownerDocument.nodesByProps.get(props);
		if (!element) {
			element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
			element.setProps(props, ref, CollectionNodeClass, rendered, render);
			parentNode.appendChild(element);
			parentNode.ownerDocument.updateCollection();
			parentNode.ownerDocument.nodesByProps.set(props, element);
		}
		return children ? /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$var$SSRContext.Provider, { value: element }, children) : null;
	}
	return /*#__PURE__*/ import_react.createElement(CollectionNodeClass.type, { ref: itemRef }, children);
}
function $42ceafc619f9c3ba$export$18af5c7a9e9b3664(CollectionNodeClass, render) {
	let Component = ({ node }) => render(node.props, node.props.ref, node);
	let Result = (0, import_react.forwardRef)((props, ref) => {
		let focusableProps = (0, import_react.useContext)($d1116acdf220c2da$export$f9762fab77588ecb);
		if (!(0, import_react.useContext)($42ceafc619f9c3ba$var$ShallowRenderContext)) {
			if (render.length >= 3) throw new Error(render.name + " cannot be rendered outside a collection.");
			return render(props, ref);
		}
		return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, "children" in props ? props.children : null, null, (node) => /*#__PURE__*/ import_react.createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, { value: focusableProps }, /*#__PURE__*/ import_react.createElement(Component, { node })));
	});
	Result.displayName = render.name;
	return Result;
}

//#endregion
//#region node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/separator/useSeparator.mjs
function $dc321dbb6473ef33$export$52210f68a14655d0(props) {
	let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { labelable: true });
	let ariaOrientation;
	if (props.orientation === "vertical") ariaOrientation = "vertical";
	if (props.elementType !== "hr") return { separatorProps: {
		...domProps,
		role: "separator",
		"aria-orientation": ariaOrientation
	} };
	return { separatorProps: domProps };
}

//#endregion
//#region node_modules/.pnpm/react-aria-components@1.21.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria-components/dist/private/Separator.mjs
const $e28ab3efe3e87743$export$6615d83f6de245ce = /*#__PURE__*/ (0, import_react.createContext)({});
var $e28ab3efe3e87743$export$7750289ca694c0b5 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
	static {
		this.type = "separator";
	}
	filter(collection, newCollection) {
		let prevItem = newCollection.getItem(this.prevKey);
		if (prevItem && prevItem.type !== "separator") {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
		return null;
	}
};
const $e28ab3efe3e87743$export$1ff3c3f08ae963c0 = /*#__PURE__*/ $42ceafc619f9c3ba$export$18af5c7a9e9b3664($e28ab3efe3e87743$export$7750289ca694c0b5, function Separator(props, ref) {
	[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $e28ab3efe3e87743$export$6615d83f6de245ce);
	let { elementType, orientation, style, className, slot, ...otherProps } = props;
	let Element = elementType || "hr";
	if (Element === "hr" && orientation === "vertical") Element = "div";
	let ElementType = $7230ffa83bc0c2cf$export$df3a06d6289f983e[Element];
	let { separatorProps } = $dc321dbb6473ef33$export$52210f68a14655d0({
		...otherProps,
		elementType,
		orientation
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	return /*#__PURE__*/ import_react.createElement(ElementType, {
		render: props.render,
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, separatorProps),
		style,
		className: className ?? "react-aria-Separator",
		ref,
		slot: slot || void 0
	});
});

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/components/separator/separator.js
var import_jsx_runtime = require_jsx_runtime();
const SeparatorRoot = ({ className, orientation, variant, ...props }) => {
	const context = $7230ffa83bc0c2cf$export$fabf2dc03a41866e($e28ab3efe3e87743$export$6615d83f6de245ce);
	const resolvedOrientation = orientation ?? context?.orientation ?? "horizontal";
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)($e28ab3efe3e87743$export$1ff3c3f08ae963c0, {
		"data-orientation": resolvedOrientation,
		"data-slot": "separator",
		orientation: resolvedOrientation,
		className: separatorVariants({
			orientation: resolvedOrientation,
			variant,
			className
		}),
		...props
	});
};

//#endregion
//#region node_modules/.pnpm/@heroui+react@3.2.4_@react-aria+i18n@3.13.1_react-dom@19.3.0_react@19.3.0__react@19.3.0_d12245ef3d3111c14852d2d592028790/node_modules/@heroui/react/dist/components/separator/index.js
const Separator = Object.assign(SeparatorRoot, { Root: SeparatorRoot });

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/PuzzlePiece.es.js
const e = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M222.41,155.16a12,12,0,0,0-11.56-.69A16,16,0,0,1,188,139,16.2,16.2,0,0,1,202.8,124a15.83,15.83,0,0,1,8,1.5A12,12,0,0,0,228,114.7V72a20,20,0,0,0-20-20H176a40.15,40.15,0,0,0-12.62-29.16,39.67,39.67,0,0,0-29.94-10.76,40.08,40.08,0,0,0-37.34,37C96,50.07,96,51,96,52H64A20,20,0,0,0,44,72v28a40.15,40.15,0,0,0-29.16,12.62A40,40,0,0,0,41.1,179.9a28.3,28.3,0,0,0,2.9.1v28a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V165.31A12,12,0,0,0,222.41,155.16ZM204,204H68V165.31a12,12,0,0,0-17.15-10.84A15.9,15.9,0,0,1,42.8,156,16.2,16.2,0,0,1,28,141.06a16,16,0,0,1,22.82-15.52A12,12,0,0,0,68,114.7V76h42.7a12,12,0,0,0,10.83-17.15A15.9,15.9,0,0,1,120,50.8,16.19,16.19,0,0,1,134.94,36a16,16,0,0,1,15.53,22.81A12,12,0,0,0,161.31,76H204v24c-1,0-1.93,0-2.9.11A40,40,0,0,0,204,180h0Z" }))],
	["duotone", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", {
		d: "M204,168a28,28,0,0,0,12-2.69V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V165.31a28,28,0,1,1,0-50.62V72a8,8,0,0,1,8-8h46.69a28,28,0,1,1,50.61,0H208a8,8,0,0,1,8,8v42.69A28,28,0,1,0,204,168Z",
		opacity: "0.2"
	}), /* @__PURE__ */ import_react.createElement("path", { d: "M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.15,36.15,0,0,0-11.36-26.25,36,36,0,0,0-60.55,23.63,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,36.56,36.56,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z" }))],
	["fill", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M165.78,224H208a16,16,0,0,0,16-16V170.35A8,8,0,0,0,212.94,163a23.37,23.37,0,0,1-8.94,1.77c-13.23,0-24-11.1-24-24.73s10.77-24.73,24-24.73a23.37,23.37,0,0,1,8.94,1.77A8,8,0,0,0,224,109.65V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36,36,0,0,0-72,0,35.36,35.36,0,0,0,.22,4H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36,36,0,0,0,0,72,35.36,35.36,0,0,0,4-.22V208a16,16,0,0,0,16,16h42.22" }))],
	["light", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M219.21,160.24a6,6,0,0,0-5.78-.35,22,22,0,1,1-11.05-41.83,22.15,22.15,0,0,1,11.05,2.06A6,6,0,0,0,222,114.7V72a14,14,0,0,0-14-14H169.48a35,35,0,0,0,.52-6,34.1,34.1,0,0,0-10.73-24.78,33.64,33.64,0,0,0-25.45-9.15A34,34,0,0,0,102.54,58H64A14,14,0,0,0,50,72v34.53a34,34,0,0,0-30.79,10.2,34,34,0,0,0,22.31,57.18,34.34,34.34,0,0,0,8.48-.44V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V165.31A6,6,0,0,0,219.21,160.24ZM210,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V165.31a6,6,0,0,0-6-6,5.92,5.92,0,0,0-2.57.58,22,22,0,0,1-31.38-18.46,22,22,0,0,1,31.38-21.31A6,6,0,0,0,62,114.7V72a2,2,0,0,1,2-2h46.69a6,6,0,0,0,5.42-8.57,22.25,22.25,0,0,1-2-11,22,22,0,1,1,41.83,11A6,6,0,0,0,161.3,70H208a2,2,0,0,1,2,2v34.54a34,34,0,0,0-39.93,31.28,33.71,33.71,0,0,0,9.14,25.45A34.15,34.15,0,0,0,210,173.48Z" }))],
	["regular", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z" }))],
	["thin", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M218.14,161.93a4,4,0,0,0-3.86-.24,24,24,0,0,1-34.23-23.25,24,24,0,0,1,34.23-20.13A4,4,0,0,0,220,114.7V72a12,12,0,0,0-12-12H167a32,32,0,1,0-62.91-10.33A32.57,32.57,0,0,0,105,60H64A12,12,0,0,0,52,72v37a32,32,0,1,0-10.33,62.91A32.28,32.28,0,0,0,52,171v37a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V165.31A4,4,0,0,0,218.14,161.93ZM212,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V165.31a4,4,0,0,0-1.86-3.38,4,4,0,0,0-3.85-.24,24,24,0,0,1-34.24-20.13,24,24,0,0,1,34.24-23.25A4,4,0,0,0,60,114.7V72a4,4,0,0,1,4-4h46.69a4,4,0,0,0,3.62-5.71,24,24,0,0,1,20.13-34.24,24,24,0,0,1,23.25,34.24A4,4,0,0,0,161.31,68H208a4,4,0,0,1,4,4v37a32.57,32.57,0,0,0-10.33-.94A32,32,0,1,0,212,171Z" }))]
]);

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/defs/Tag.es.js
const a$1 = /* @__PURE__ */ new Map([
	["bold", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM104,88A16,16,0,1,1,88,72,16,16,0,0,1,104,88Z" }))],
	["duotone", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", {
		d: "M237.66,153,153,237.66a8,8,0,0,1-11.31,0L42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32A8,8,0,0,1,237.66,153Z",
		opacity: "0.2"
	}), /* @__PURE__ */ import_react.createElement("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z" }))],
	["fill", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z" }))],
	["light", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z" }))],
	["regular", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z" }))],
	["thin", /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("path", { d: "M240.49,138.83,141.17,39.51A11.93,11.93,0,0,0,132.69,36H40a4,4,0,0,0-4,4v92.69a11.93,11.93,0,0,0,3.51,8.48l99.32,99.32a12,12,0,0,0,17,0l84.69-84.69a12,12,0,0,0,0-17Zm-5.66,11.31-84.69,84.69a4,4,0,0,1-5.65,0L45.17,135.51A4,4,0,0,1,44,132.69V44h88.69a4,4,0,0,1,2.82,1.17l99.32,99.32A4,4,0,0,1,234.83,150.14ZM92,84a8,8,0,1,1-8-8A8,8,0,0,1,92,84Z" }))]
]);

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/lib/context.es.js
const o$1 = (0, import_react.createContext)({
	color: "currentColor",
	size: "1em",
	weight: "regular",
	mirrored: !1
});

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js
const p = import_react.forwardRef((s, a) => {
	const { alt: n, color: r, size: t, weight: o, mirrored: c, children: i, weights: m, ...x } = s, { color: d = "currentColor", size: l, weight: f = "regular", mirrored: g = !1, ...w } = import_react.useContext(o$1);
	return /* @__PURE__ */ import_react.createElement("svg", {
		ref: a,
		xmlns: "http://www.w3.org/2000/svg",
		width: t != null ? t : l,
		height: t != null ? t : l,
		fill: r != null ? r : d,
		viewBox: "0 0 256 256",
		transform: c || g ? "scale(-1, 1)" : void 0,
		...w,
		...x
	}, !!n && /* @__PURE__ */ import_react.createElement("title", null, n), i, m.get(o != null ? o : f));
});
p.displayName = "IconBase";

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/csr/PuzzlePiece.es.js
const o = import_react.forwardRef((c, r) => /* @__PURE__ */ import_react.createElement(p, {
	ref: r,
	...c,
	weights: e
}));
o.displayName = "PuzzlePieceIcon";

//#endregion
//#region node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@phosphor-icons/react/dist/csr/Tag.es.js
const a = import_react.forwardRef((e, r) => /* @__PURE__ */ import_react.createElement(p, {
	ref: r,
	...e,
	weights: a$1
}));
a.displayName = "TagIcon";

//#endregion
export { tv as a, $c4867b2f328c2698$export$e5c5a5f917a5871c as c, Separator as i, o as n, require_jsx_runtime as o, p as r, $4064df0d6f9620e1$export$c9058316764c140e as s, a as t };