globalThis.__KTR_BUNDLED__ = true;
import { a as __require, i as __esmMin, r as __commonJSMin } from "./inputNotify-CJF-Vpbt.js";
import $ from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs, { existsSync, readFileSync, writeSync } from "node:fs";
import en from "node:crypto";
import { MessageChannel } from "node:worker_threads";
import { createRequire as createRequire$1 } from "module";
import o from "node:os";
import jt from "fs";
import Tt from "os";
import St from "path";
import g from "node:net";
import { inspect } from "node:util";
import { readFile } from "node:fs/promises";

//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/node-features-JeyyvQz6.mjs
var i$4 = Object.defineProperty;
var o$3 = (e, t) => i$4(e, "name", {
	value: t,
	configurable: !0
});
const n$1 = o$3((e, t) => {
	const s = e[0] - t[0];
	if (s === 0) {
		const r = e[1] - t[1];
		return r === 0 ? e[2] >= t[2] : r > 0;
	}
	return s > 0;
}, "isVersionGreaterOrEqual");
const a$2 = process.versions.node.split(".").map(Number);
const c$2 = o$3((e, t = a$2) => {
	for (let s = 0; s < e.length; s += 1) {
		const r = e[s];
		if (s === e.length - 1 || t[0] === r[0]) return n$1(t, r);
	}
	return !1;
}, "isFeatureSupported");
const l$1 = [
	[
		22,
		22,
		3
	],
	[
		24,
		11,
		1
	],
	[
		25,
		1,
		0
	],
	[
		26,
		0,
		0
	]
];
const m$3 = [
	[
		18,
		19,
		0
	],
	[
		20,
		10,
		0
	],
	[
		21,
		0,
		0
	]
];
const p$2 = [[
	20,
	11,
	0
], [
	21,
	3,
	0
]];
const d$1 = [[
	20,
	11,
	0
], [
	21,
	2,
	0
]];
const R$2 = [
	[
		20,
		19,
		0
	],
	[
		22,
		12,
		0
	],
	[
		23,
		0,
		0
	]
];

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/temporary-directory-BDDVQOvU.mjs
const { geteuid: r } = process, t$3 = r ? r() : o.userInfo().username, e$2 = path.join(o.tmpdir(), `tsx-${t$3}`);

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/get-pipe-path-_tAJyU_v.mjs
var o$2 = Object.defineProperty;
var t$2 = (e, r) => o$2(e, "name", {
	value: r,
	configurable: !0
});
var m$2 = createRequire$1(import.meta.url);
const i$3 = process.platform === "win32";
const n = t$2((e) => {
	const r = path.join(e$2, `${e}.pipe`);
	return i$3 ? `\\\\?\\pipe\\${r}` : r;
}, "getPipePath");

//#endregion
//#region node_modules/.pnpm/tsdown@0.22.14_tsx@4.23.13_typescript@5.9.3/node_modules/tsdown/esm-shims.js
var getFilename, getDirname, __dirname, __filename;
var init_esm_shims = __esmMin((() => {
	getFilename = () => fileURLToPath(import.meta.url);
	getDirname = () => path.dirname(getFilename());
	__dirname = /* @__PURE__ */ getDirname();
	__filename = /* @__PURE__ */ getFilename();
}));

//#endregion
//#region node_modules/.pnpm/esbuild@0.28.2/node_modules/esbuild/lib/main.js
var require_main = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_esm_shims();
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var node_exports = {};
	__export(node_exports, {
		analyzeMetafile: () => analyzeMetafile,
		analyzeMetafileSync: () => analyzeMetafileSync,
		build: () => build,
		buildSync: () => buildSync,
		context: () => context,
		default: () => node_default,
		formatMessages: () => formatMessages,
		formatMessagesSync: () => formatMessagesSync,
		initialize: () => initialize,
		stop: () => stop,
		transform: () => transform,
		transformSync: () => transformSync,
		version: () => version
	});
	module.exports = __toCommonJS(node_exports);
	function encodePacket(packet) {
		let visit = (value) => {
			if (value === null) bb.write8(0);
			else if (typeof value === "boolean") {
				bb.write8(1);
				bb.write8(+value);
			} else if (typeof value === "number") {
				bb.write8(2);
				bb.write32(value | 0);
			} else if (typeof value === "string") {
				bb.write8(3);
				bb.write(encodeUTF8(value));
			} else if (value instanceof Uint8Array) {
				bb.write8(4);
				bb.write(value);
			} else if (value instanceof Array) {
				bb.write8(5);
				bb.write32(value.length);
				for (let item of value) visit(item);
			} else {
				let keys = Object.keys(value);
				bb.write8(6);
				bb.write32(keys.length);
				for (let key of keys) {
					bb.write(encodeUTF8(key));
					visit(value[key]);
				}
			}
		};
		let bb = new ByteBuffer();
		bb.write32(0);
		bb.write32(packet.id << 1 | +!packet.isRequest);
		visit(packet.value);
		writeUInt32LE(bb.buf, bb.len - 4, 0);
		return bb.buf.subarray(0, bb.len);
	}
	function decodePacket(bytes) {
		let visit = () => {
			switch (bb.read8()) {
				case 0: return null;
				case 1: return !!bb.read8();
				case 2: return bb.read32();
				case 3: return decodeUTF8(bb.read());
				case 4: return bb.read();
				case 5: {
					let count = bb.read32();
					let value2 = [];
					for (let i = 0; i < count; i++) value2.push(visit());
					return value2;
				}
				case 6: {
					let count = bb.read32();
					let value2 = {};
					for (let i = 0; i < count; i++) value2[decodeUTF8(bb.read())] = visit();
					return value2;
				}
				default: throw new Error("Invalid packet");
			}
		};
		let bb = new ByteBuffer(bytes);
		let id = bb.read32();
		let isRequest = (id & 1) === 0;
		id >>>= 1;
		let value = visit();
		if (bb.ptr !== bytes.length) throw new Error("Invalid packet");
		return {
			id,
			isRequest,
			value
		};
	}
	var ByteBuffer = class {
		constructor(buf = /* @__PURE__ */ new Uint8Array(1024)) {
			this.buf = buf;
			this.len = 0;
			this.ptr = 0;
		}
		_write(delta) {
			if (this.len + delta > this.buf.length) {
				let clone = new Uint8Array((this.len + delta) * 2);
				clone.set(this.buf);
				this.buf = clone;
			}
			this.len += delta;
			return this.len - delta;
		}
		write8(value) {
			let offset = this._write(1);
			this.buf[offset] = value;
		}
		write32(value) {
			let offset = this._write(4);
			writeUInt32LE(this.buf, value, offset);
		}
		write(bytes) {
			let offset = this._write(4 + bytes.length);
			writeUInt32LE(this.buf, bytes.length, offset);
			this.buf.set(bytes, offset + 4);
		}
		_read(delta) {
			if (this.ptr + delta > this.buf.length) throw new Error("Invalid packet");
			this.ptr += delta;
			return this.ptr - delta;
		}
		read8() {
			return this.buf[this._read(1)];
		}
		read32() {
			return readUInt32LE(this.buf, this._read(4));
		}
		read() {
			let length = this.read32();
			let bytes = new Uint8Array(length);
			let ptr = this._read(bytes.length);
			bytes.set(this.buf.subarray(ptr, ptr + length));
			return bytes;
		}
	};
	var encodeUTF8;
	var decodeUTF8;
	var encodeInvariant;
	if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
		let encoder = new TextEncoder();
		let decoder = new TextDecoder();
		encodeUTF8 = (text) => encoder.encode(text);
		decodeUTF8 = (bytes) => decoder.decode(bytes);
		encodeInvariant = "new TextEncoder().encode(\"\")";
	} else if (typeof Buffer !== "undefined") {
		encodeUTF8 = (text) => Buffer.from(text);
		decodeUTF8 = (bytes) => {
			let { buffer, byteOffset, byteLength } = bytes;
			return Buffer.from(buffer, byteOffset, byteLength).toString();
		};
		encodeInvariant = "Buffer.from(\"\")";
	} else throw new Error("No UTF-8 codec found");
	if (!(encodeUTF8("") instanceof Uint8Array)) throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
	function readUInt32LE(buffer, offset) {
		return (buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24) >>> 0;
	}
	function writeUInt32LE(buffer, value, offset) {
		buffer[offset++] = value;
		buffer[offset++] = value >> 8;
		buffer[offset++] = value >> 16;
		buffer[offset++] = value >> 24;
	}
	var fromCharCode = String.fromCharCode;
	function throwSyntaxError(bytes, index, message) {
		const c = bytes[index];
		let line = 1;
		let column = 0;
		for (let i = 0; i < index; i++) if (bytes[i] === 10) {
			line++;
			column = 0;
		} else column++;
		throw new SyntaxError(message ? message : index === bytes.length ? "Unexpected end of input while parsing JSON" : c >= 32 && c <= 126 ? `Unexpected character ${fromCharCode(c)} in JSON at position ${index} (line ${line}, column ${column})` : `Unexpected byte 0x${c.toString(16)} in JSON at position ${index} (line ${line}, column ${column})`);
	}
	function JSON_parse(bytes) {
		if (!(bytes instanceof Uint8Array)) throw new Error(`JSON input must be a Uint8Array`);
		const propertyStack = [];
		const objectStack = [];
		const stateStack = [];
		const length = bytes.length;
		let property = null;
		let state = 0;
		let object;
		let i = 0;
		while (i < length) {
			let c = bytes[i++];
			if (c <= 32) continue;
			let value;
			if (state === 2 && property === null && c !== 34 && c !== 125) throwSyntaxError(bytes, --i);
			switch (c) {
				case 116:
					if (bytes[i++] !== 114 || bytes[i++] !== 117 || bytes[i++] !== 101) throwSyntaxError(bytes, --i);
					value = true;
					break;
				case 102:
					if (bytes[i++] !== 97 || bytes[i++] !== 108 || bytes[i++] !== 115 || bytes[i++] !== 101) throwSyntaxError(bytes, --i);
					value = false;
					break;
				case 110:
					if (bytes[i++] !== 117 || bytes[i++] !== 108 || bytes[i++] !== 108) throwSyntaxError(bytes, --i);
					value = null;
					break;
				case 45:
				case 46:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57: {
					let index = i;
					value = fromCharCode(c);
					c = bytes[i];
					while (true) {
						switch (c) {
							case 43:
							case 45:
							case 46:
							case 48:
							case 49:
							case 50:
							case 51:
							case 52:
							case 53:
							case 54:
							case 55:
							case 56:
							case 57:
							case 101:
							case 69:
								value += fromCharCode(c);
								c = bytes[++i];
								continue;
						}
						break;
					}
					value = +value;
					if (isNaN(value)) throwSyntaxError(bytes, --index, "Invalid number");
					break;
				}
				case 34:
					value = "";
					while (true) {
						if (i >= length) throwSyntaxError(bytes, length);
						c = bytes[i++];
						if (c === 34) break;
						else if (c === 92) switch (bytes[i++]) {
							case 34:
								value += "\"";
								break;
							case 47:
								value += "/";
								break;
							case 92:
								value += "\\";
								break;
							case 98:
								value += "\b";
								break;
							case 102:
								value += "\f";
								break;
							case 110:
								value += "\n";
								break;
							case 114:
								value += "\r";
								break;
							case 116:
								value += "	";
								break;
							case 117: {
								let code = 0;
								for (let j = 0; j < 4; j++) {
									c = bytes[i++];
									code <<= 4;
									if (c >= 48 && c <= 57) code |= c - 48;
									else if (c >= 97 && c <= 102) code |= c + -87;
									else if (c >= 65 && c <= 70) code |= c + -55;
									else throwSyntaxError(bytes, --i);
								}
								value += fromCharCode(code);
								break;
							}
							default: throwSyntaxError(bytes, --i);
						}
						else if (c <= 127) value += fromCharCode(c);
						else if ((c & 224) === 192) value += fromCharCode((c & 31) << 6 | bytes[i++] & 63);
						else if ((c & 240) === 224) value += fromCharCode((c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63);
						else if ((c & 248) == 240) {
							let codePoint = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
							if (codePoint > 65535) {
								codePoint -= 65536;
								value += fromCharCode(codePoint >> 10 & 1023 | 55296);
								codePoint = 56320 | codePoint & 1023;
							}
							value += fromCharCode(codePoint);
						}
					}
					value[0];
					break;
				case 91:
					value = [];
					propertyStack.push(property);
					objectStack.push(object);
					stateStack.push(state);
					property = null;
					object = value;
					state = 1;
					continue;
				case 123:
					value = {};
					propertyStack.push(property);
					objectStack.push(object);
					stateStack.push(state);
					property = null;
					object = value;
					state = 2;
					continue;
				case 93:
					if (state !== 1) throwSyntaxError(bytes, --i);
					value = object;
					property = propertyStack.pop();
					object = objectStack.pop();
					state = stateStack.pop();
					break;
				case 125:
					if (state !== 2) throwSyntaxError(bytes, --i);
					value = object;
					property = propertyStack.pop();
					object = objectStack.pop();
					state = stateStack.pop();
					break;
				default: throwSyntaxError(bytes, --i);
			}
			c = bytes[i];
			while (c <= 32) c = bytes[++i];
			switch (state) {
				case 0:
					if (i === length) return value;
					break;
				case 1:
					object.push(value);
					if (c === 44) {
						i++;
						continue;
					}
					if (c === 93) continue;
					break;
				case 2: if (property === null) {
					property = value;
					if (c === 58) {
						i++;
						continue;
					}
				} else {
					object[property] = value;
					property = null;
					if (c === 44) {
						i++;
						continue;
					}
					if (c === 125) continue;
				}
			}
			break;
		}
		throwSyntaxError(bytes, i);
	}
	var quote = JSON.stringify;
	var buildLogLevelDefault = "warning";
	var transformLogLevelDefault = "silent";
	function validateAndJoinStringArray(values, what) {
		const toJoin = [];
		for (const value of values) {
			validateStringValue(value, what);
			if (value.indexOf(",") >= 0) throw new Error(`Invalid ${what}: ${value}`);
			toJoin.push(value);
		}
		return toJoin.join(",");
	}
	var canBeAnything = () => null;
	var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
	var mustBeString = (value) => typeof value === "string" ? null : "a string";
	var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
	var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
	var mustBeValidPortNumber = (value) => typeof value === "number" && value === (value | 0) && value >= 0 && value <= 65535 ? null : "a valid port number";
	var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
	var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
	var mustBeArrayOfStrings = (value) => Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "an array of strings";
	var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
	var mustBeEntryPoints = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
	var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
	var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
	var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
	var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
	var mustBeStringOrArrayOfStrings = (value) => typeof value === "string" || Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "a string or an array of strings";
	var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
	var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
	function getFlag(object, keys, key, mustBeFn) {
		let value = object[key];
		keys[key + ""] = true;
		if (value === void 0) return void 0;
		let mustBe = mustBeFn(value);
		if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
		return value;
	}
	function checkForInvalidFlags(object, keys, where) {
		for (let key in object) if (!(key in keys)) throw new Error(`Invalid option ${where}: ${quote(key)}`);
	}
	function validateInitializeOptions(options) {
		let keys = /* @__PURE__ */ Object.create(null);
		let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
		let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
		let worker = getFlag(options, keys, "worker", mustBeBoolean);
		checkForInvalidFlags(options, keys, "in initialize() call");
		return {
			wasmURL,
			wasmModule,
			worker
		};
	}
	function validateMangleCache(mangleCache) {
		let validated;
		if (mangleCache !== void 0) {
			validated = /* @__PURE__ */ Object.create(null);
			for (let key in mangleCache) {
				let value = mangleCache[key];
				if (typeof value === "string" || value === false) validated[key] = value;
				else throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
			}
		}
		return validated;
	}
	function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
		let color = getFlag(options, keys, "color", mustBeBoolean);
		let logLevel = getFlag(options, keys, "logLevel", mustBeString);
		let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
		let logStyle = getFlag(options, keys, "logStyle", mustBeString);
		if (color !== void 0) flags.push(`--color=${color}`);
		else if (isTTY2) flags.push(`--color=true`);
		flags.push(`--log-level=${logLevel || logLevelDefault}`);
		flags.push(`--log-limit=${logLimit || 0}`);
		if (logStyle) flags.push(`--log-style=${logStyle}`);
	}
	function validateStringValue(value, what, key) {
		if (typeof value !== "string") throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
		return value;
	}
	function pushCommonFlags(flags, options, keys) {
		let legalComments = getFlag(options, keys, "legalComments", mustBeString);
		let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
		let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
		let target = getFlag(options, keys, "target", mustBeStringOrArrayOfStrings);
		let format = getFlag(options, keys, "format", mustBeString);
		let globalName = getFlag(options, keys, "globalName", mustBeString);
		let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
		let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
		let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
		let minify = getFlag(options, keys, "minify", mustBeBoolean);
		let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
		let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
		let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
		let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
		let drop = getFlag(options, keys, "drop", mustBeArrayOfStrings);
		let dropLabels = getFlag(options, keys, "dropLabels", mustBeArrayOfStrings);
		let charset = getFlag(options, keys, "charset", mustBeString);
		let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
		let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
		let jsx = getFlag(options, keys, "jsx", mustBeString);
		let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
		let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
		let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
		let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
		let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
		let define = getFlag(options, keys, "define", mustBeObject);
		let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
		let supported = getFlag(options, keys, "supported", mustBeObject);
		let pure = getFlag(options, keys, "pure", mustBeArrayOfStrings);
		let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
		let platform = getFlag(options, keys, "platform", mustBeString);
		let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
		let absPaths = getFlag(options, keys, "absPaths", mustBeArrayOfStrings);
		if (legalComments) flags.push(`--legal-comments=${legalComments}`);
		if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
		if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
		if (target) flags.push(`--target=${validateAndJoinStringArray(Array.isArray(target) ? target : [target], "target")}`);
		if (format) flags.push(`--format=${format}`);
		if (globalName) flags.push(`--global-name=${globalName}`);
		if (platform) flags.push(`--platform=${platform}`);
		if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
		if (minify) flags.push("--minify");
		if (minifySyntax) flags.push("--minify-syntax");
		if (minifyWhitespace) flags.push("--minify-whitespace");
		if (minifyIdentifiers) flags.push("--minify-identifiers");
		if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
		if (charset) flags.push(`--charset=${charset}`);
		if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
		if (ignoreAnnotations) flags.push(`--ignore-annotations`);
		if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
		if (dropLabels) flags.push(`--drop-labels=${validateAndJoinStringArray(dropLabels, "drop label")}`);
		if (absPaths) flags.push(`--abs-paths=${validateAndJoinStringArray(absPaths, "abs paths")}`);
		if (mangleProps) flags.push(`--mangle-props=${jsRegExpToGoRegExp(mangleProps)}`);
		if (reserveProps) flags.push(`--reserve-props=${jsRegExpToGoRegExp(reserveProps)}`);
		if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
		if (jsx) flags.push(`--jsx=${jsx}`);
		if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
		if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
		if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
		if (jsxDev) flags.push(`--jsx-dev`);
		if (jsxSideEffects) flags.push(`--jsx-side-effects`);
		if (define) for (let key in define) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
			flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
		}
		if (logOverride) for (let key in logOverride) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
			flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
		}
		if (supported) for (let key in supported) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
			const value = supported[key];
			if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
			flags.push(`--supported:${key}=${value}`);
		}
		if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
		if (keepNames) flags.push(`--keep-names`);
	}
	function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
		var _a2;
		let flags = [];
		let entries = [];
		let keys = /* @__PURE__ */ Object.create(null);
		let stdinContents = null;
		let stdinResolveDir = null;
		pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
		pushCommonFlags(flags, options, keys);
		let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
		let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
		let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
		let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
		let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
		let outfile = getFlag(options, keys, "outfile", mustBeString);
		let outdir = getFlag(options, keys, "outdir", mustBeString);
		let outbase = getFlag(options, keys, "outbase", mustBeString);
		let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
		let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArrayOfStrings);
		let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArrayOfStrings);
		let mainFields = getFlag(options, keys, "mainFields", mustBeArrayOfStrings);
		let conditions = getFlag(options, keys, "conditions", mustBeArrayOfStrings);
		let external = getFlag(options, keys, "external", mustBeArrayOfStrings);
		let packages = getFlag(options, keys, "packages", mustBeString);
		let alias = getFlag(options, keys, "alias", mustBeObject);
		let loader = getFlag(options, keys, "loader", mustBeObject);
		let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
		let publicPath = getFlag(options, keys, "publicPath", mustBeString);
		let entryNames = getFlag(options, keys, "entryNames", mustBeString);
		let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
		let assetNames = getFlag(options, keys, "assetNames", mustBeString);
		let inject = getFlag(options, keys, "inject", mustBeArrayOfStrings);
		let banner = getFlag(options, keys, "banner", mustBeObject);
		let footer = getFlag(options, keys, "footer", mustBeObject);
		let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
		let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
		let stdin = getFlag(options, keys, "stdin", mustBeObject);
		let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
		let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
		let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
		keys.plugins = true;
		checkForInvalidFlags(options, keys, `in ${callName}() call`);
		if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
		if (bundle) flags.push("--bundle");
		if (allowOverwrite) flags.push("--allow-overwrite");
		if (splitting) flags.push("--splitting");
		if (preserveSymlinks) flags.push("--preserve-symlinks");
		if (metafile) flags.push(`--metafile`);
		if (outfile) flags.push(`--outfile=${outfile}`);
		if (outdir) flags.push(`--outdir=${outdir}`);
		if (outbase) flags.push(`--outbase=${outbase}`);
		if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
		if (packages) flags.push(`--packages=${packages}`);
		if (resolveExtensions) flags.push(`--resolve-extensions=${validateAndJoinStringArray(resolveExtensions, "resolve extension")}`);
		if (publicPath) flags.push(`--public-path=${publicPath}`);
		if (entryNames) flags.push(`--entry-names=${entryNames}`);
		if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
		if (assetNames) flags.push(`--asset-names=${assetNames}`);
		if (mainFields) flags.push(`--main-fields=${validateAndJoinStringArray(mainFields, "main field")}`);
		if (conditions) flags.push(`--conditions=${validateAndJoinStringArray(conditions, "condition")}`);
		if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
		if (alias) for (let old in alias) {
			if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
			flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
		}
		if (banner) for (let type in banner) {
			if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
			flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
		}
		if (footer) for (let type in footer) {
			if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
			flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
		}
		if (inject) for (let path3 of inject) flags.push(`--inject:${validateStringValue(path3, "inject")}`);
		if (loader) for (let ext in loader) {
			if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
			flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
		}
		if (outExtension) for (let ext in outExtension) {
			if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
			flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
		}
		if (entryPoints) {
			if (Array.isArray(entryPoints)) for (let i = 0, n = entryPoints.length; i < n; i++) {
				let entryPoint = entryPoints[i];
				if (typeof entryPoint === "object" && entryPoint !== null) {
					let entryPointKeys = /* @__PURE__ */ Object.create(null);
					let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
					let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
					checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
					if (input === void 0) throw new Error("Missing property \"in\" for entry point at index " + i);
					if (output === void 0) throw new Error("Missing property \"out\" for entry point at index " + i);
					entries.push([output, input]);
				} else entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
			}
			else for (let key in entryPoints) entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
		}
		if (stdin) {
			let stdinKeys = /* @__PURE__ */ Object.create(null);
			let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
			let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
			let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
			let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
			checkForInvalidFlags(stdin, stdinKeys, "in \"stdin\" object");
			if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
			if (loader2) flags.push(`--loader=${loader2}`);
			if (resolveDir) stdinResolveDir = resolveDir;
			if (typeof contents === "string") stdinContents = encodeUTF8(contents);
			else if (contents instanceof Uint8Array) stdinContents = contents;
		}
		let nodePaths = [];
		if (nodePathsInput) for (let value of nodePathsInput) {
			value += "";
			nodePaths.push(value);
		}
		return {
			entries,
			flags,
			write,
			stdinContents,
			stdinResolveDir,
			absWorkingDir,
			nodePaths,
			mangleCache: validateMangleCache(mangleCache)
		};
	}
	function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
		let flags = [];
		let keys = /* @__PURE__ */ Object.create(null);
		pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
		pushCommonFlags(flags, options, keys);
		let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
		let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
		let loader = getFlag(options, keys, "loader", mustBeString);
		let banner = getFlag(options, keys, "banner", mustBeString);
		let footer = getFlag(options, keys, "footer", mustBeString);
		let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
		checkForInvalidFlags(options, keys, `in ${callName}() call`);
		if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
		if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
		if (loader) flags.push(`--loader=${loader}`);
		if (banner) flags.push(`--banner=${banner}`);
		if (footer) flags.push(`--footer=${footer}`);
		return {
			flags,
			mangleCache: validateMangleCache(mangleCache)
		};
	}
	function createChannel(streamIn) {
		const requestCallbacksByKey = {};
		const closeData = {
			didClose: false,
			reason: ""
		};
		let responseCallbacks = {};
		let nextRequestID = 0;
		let nextBuildKey = 0;
		let stdout = /* @__PURE__ */ new Uint8Array(16384);
		let stdoutUsed = 0;
		let readFromStdout = (chunk) => {
			let limit = stdoutUsed + chunk.length;
			if (limit > stdout.length) {
				let swap = new Uint8Array(limit * 2);
				swap.set(stdout);
				stdout = swap;
			}
			stdout.set(chunk, stdoutUsed);
			stdoutUsed += chunk.length;
			let offset = 0;
			while (offset + 4 <= stdoutUsed) {
				let length = readUInt32LE(stdout, offset);
				if (offset + 4 + length > stdoutUsed) break;
				offset += 4;
				handleIncomingPacket(stdout.subarray(offset, offset + length));
				offset += length;
			}
			if (offset > 0) {
				stdout.copyWithin(0, offset, stdoutUsed);
				stdoutUsed -= offset;
			}
		};
		let afterClose = (error) => {
			closeData.didClose = true;
			if (error) closeData.reason = ": " + (error.message || error);
			const text = "The service was stopped" + closeData.reason;
			for (let id in responseCallbacks) responseCallbacks[id](text, null);
			responseCallbacks = {};
		};
		let sendRequest = (refs, value, callback) => {
			if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
			let id = nextRequestID++;
			responseCallbacks[id] = (error, response) => {
				try {
					callback(error, response);
				} finally {
					if (refs) refs.unref();
				}
			};
			if (refs) refs.ref();
			streamIn.writeToStdin(encodePacket({
				id,
				isRequest: true,
				value
			}));
		};
		let sendResponse = (id, value) => {
			if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
			streamIn.writeToStdin(encodePacket({
				id,
				isRequest: false,
				value
			}));
		};
		let handleRequest = async (id, request) => {
			try {
				if (request.command === "ping") {
					sendResponse(id, {});
					return;
				}
				if (typeof request.key === "number") {
					const requestCallbacks = requestCallbacksByKey[request.key];
					if (!requestCallbacks) return;
					const callback = requestCallbacks[request.command];
					if (callback) {
						await callback(id, request);
						return;
					}
				}
				throw new Error(`Invalid command: ` + request.command);
			} catch (e) {
				const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
				try {
					sendResponse(id, { errors });
				} catch {}
			}
		};
		let isFirstPacket = true;
		let handleIncomingPacket = (bytes) => {
			if (isFirstPacket) {
				isFirstPacket = false;
				let binaryVersion = String.fromCharCode(...bytes);
				if (binaryVersion !== "0.28.2") throw new Error(`Cannot start service: Host version "0.28.2" does not match binary version ${quote(binaryVersion)}`);
				return;
			}
			let packet = decodePacket(bytes);
			if (packet.isRequest) handleRequest(packet.id, packet.value);
			else {
				let callback = responseCallbacks[packet.id];
				delete responseCallbacks[packet.id];
				if (packet.value.error) callback(packet.value.error, {});
				else callback(null, packet.value);
			}
		};
		let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback }) => {
			let refCount = 0;
			const buildKey = nextBuildKey++;
			const requestCallbacks = {};
			const buildRefs = {
				ref() {
					if (++refCount === 1) {
						if (refs) refs.ref();
					}
				},
				unref() {
					if (--refCount === 0) {
						delete requestCallbacksByKey[buildKey];
						if (refs) refs.unref();
					}
				}
			};
			requestCallbacksByKey[buildKey] = requestCallbacks;
			buildRefs.ref();
			buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, buildRefs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, (err, res) => {
				try {
					callback(err, res);
				} finally {
					buildRefs.unref();
				}
			});
		};
		let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback }) => {
			const details = createObjectStash();
			let start = (inputPath) => {
				try {
					if (typeof input !== "string" && !(input instanceof Uint8Array)) throw new Error("The input to \"transform\" must be a string or a Uint8Array");
					let { flags, mangleCache } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
					let request = {
						command: "transform",
						flags,
						inputFS: inputPath !== null,
						input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
					};
					if (mangleCache) request.mangleCache = mangleCache;
					sendRequest(refs, request, (error, response) => {
						if (error) return callback(new Error(error), null);
						let errors = replaceDetailsInMessages(response.errors, details);
						let warnings = replaceDetailsInMessages(response.warnings, details);
						let outstanding = 1;
						let next = () => {
							if (--outstanding === 0) {
								let result = {
									warnings,
									code: response.code,
									map: response.map,
									mangleCache: void 0,
									legalComments: void 0
								};
								if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
								if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
								callback(null, result);
							}
						};
						if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
						if (response.codeFS) {
							outstanding++;
							fs3.readFile(response.code, (err, contents) => {
								if (err !== null) callback(err, null);
								else {
									response.code = contents;
									next();
								}
							});
						}
						if (response.mapFS) {
							outstanding++;
							fs3.readFile(response.map, (err, contents) => {
								if (err !== null) callback(err, null);
								else {
									response.map = contents;
									next();
								}
							});
						}
						next();
					});
				} catch (e) {
					let flags = [];
					try {
						pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
					} catch {}
					const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
					sendRequest(refs, {
						command: "error",
						flags,
						error
					}, () => {
						error.detail = details.load(error.detail);
						callback(failureErrorWithLog("Transform failed", [error], []), null);
					});
				}
			};
			if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1048576) {
				let next = start;
				start = () => fs3.writeFile(input, next);
			}
			start(null);
		};
		let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
			if (!options) throw new Error(`Missing second argument in ${callName}() call`);
			let keys = {};
			let kind = getFlag(options, keys, "kind", mustBeString);
			let color = getFlag(options, keys, "color", mustBeBoolean);
			let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
			let logStyle = getFlag(options, keys, "logStyle", mustBeString);
			checkForInvalidFlags(options, keys, `in ${callName}() call`);
			if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
			if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
			let request = {
				command: "format-msgs",
				messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
				isWarning: kind === "warning"
			};
			if (color !== void 0) request.color = color;
			if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
			if (logStyle !== void 0) request.logStyle = logStyle;
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				callback(null, response.messages);
			});
		};
		let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
			if (options === void 0) options = {};
			let keys = {};
			let color = getFlag(options, keys, "color", mustBeBoolean);
			let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
			checkForInvalidFlags(options, keys, `in ${callName}() call`);
			let request = {
				command: "analyze-metafile",
				metafile
			};
			if (color !== void 0) request.color = color;
			if (verbose !== void 0) request.verbose = verbose;
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				callback(null, response.result);
			});
		};
		return {
			readFromStdout,
			afterClose,
			service: {
				buildOrContext,
				transform: transform2,
				formatMessages: formatMessages2,
				analyzeMetafile: analyzeMetafile2
			}
		};
	}
	function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
		const details = createObjectStash();
		const isContext = callName === "context";
		const handleError = (e, pluginName) => {
			const flags = [];
			try {
				pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
			} catch {}
			const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
			sendRequest(refs, {
				command: "error",
				flags,
				error: message
			}, () => {
				message.detail = details.load(message.detail);
				callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
			});
		};
		let plugins;
		if (typeof options === "object") {
			const value = options.plugins;
			if (value !== void 0) {
				if (!Array.isArray(value)) return handleError(/* @__PURE__ */ new Error(`"plugins" must be an array`), "");
				plugins = value;
			}
		}
		if (plugins && plugins.length > 0) {
			if (streamIn.isSync) return handleError(/* @__PURE__ */ new Error("Cannot use plugins in synchronous API calls"), "");
			handlePlugins(buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, plugins, details).then((result) => {
				if (!result.ok) return handleError(result.error, result.pluginName);
				try {
					buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
				} catch (e) {
					handleError(e, "");
				}
			}, (e) => handleError(e, ""));
			return;
		}
		try {
			buildOrContextContinue(null, (result, done) => done([], []), () => {});
		} catch (e) {
			handleError(e, "");
		}
		function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
			const writeDefault = streamIn.hasFS;
			const { entries, flags, write, stdinContents, stdinResolveDir, absWorkingDir, nodePaths, mangleCache } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
			if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
			const request = {
				command: "build",
				key: buildKey,
				entries,
				flags,
				write,
				stdinContents,
				stdinResolveDir,
				absWorkingDir: absWorkingDir || defaultWD2,
				nodePaths,
				context: isContext
			};
			if (requestPlugins) request.plugins = requestPlugins;
			if (mangleCache) request.mangleCache = mangleCache;
			const buildResponseToResult = (response, callback2) => {
				const result = {
					errors: replaceDetailsInMessages(response.errors, details),
					warnings: replaceDetailsInMessages(response.warnings, details),
					outputFiles: void 0,
					metafile: void 0,
					mangleCache: void 0
				};
				const originalErrors = result.errors.slice();
				const originalWarnings = result.warnings.slice();
				if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
				if (response.metafile && response.metafile.length) result.metafile = parseJSON(response.metafile);
				if (response.mangleCache) result.mangleCache = response.mangleCache;
				if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
				runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
					if (originalErrors.length > 0 || onEndErrors.length > 0) return callback2(failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings)), null, onEndErrors, onEndWarnings);
					callback2(null, result, onEndErrors, onEndWarnings);
				});
			};
			let latestResultPromise;
			let provideLatestResult;
			if (isContext) requestCallbacks["on-end"] = (id, request2) => new Promise((resolve) => {
				buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
					const response = {
						errors: onEndErrors,
						warnings: onEndWarnings
					};
					if (provideLatestResult) provideLatestResult(err, result);
					latestResultPromise = void 0;
					provideLatestResult = void 0;
					sendResponse(id, response);
					resolve();
				});
			});
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				if (!isContext) return buildResponseToResult(response, (err, res) => {
					scheduleOnDisposeCallbacks();
					return callback(err, res);
				});
				if (response.errors.length > 0) return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
				let didDispose = false;
				const result = {
					rebuild: () => {
						if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject) => {
							let settlePromise;
							provideLatestResult = (err, result2) => {
								if (!settlePromise) settlePromise = () => err ? reject(err) : resolve(result2);
							};
							const triggerAnotherBuild = () => {
								sendRequest(refs, {
									command: "rebuild",
									key: buildKey
								}, (error2, response2) => {
									if (error2) reject(new Error(error2));
									else if (settlePromise) settlePromise();
									else triggerAnotherBuild();
								});
							};
							triggerAnotherBuild();
						});
						return latestResultPromise;
					},
					watch: (options2 = {}) => new Promise((resolve, reject) => {
						if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
						const keys = {};
						const delay = getFlag(options2, keys, "delay", mustBeInteger);
						checkForInvalidFlags(options2, keys, `in watch() call`);
						const request2 = {
							command: "watch",
							key: buildKey
						};
						if (delay) request2.delay = delay;
						sendRequest(refs, request2, (error2) => {
							if (error2) reject(new Error(error2));
							else resolve(void 0);
						});
					}),
					serve: (options2 = {}) => new Promise((resolve, reject) => {
						if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
						const keys = {};
						const port = getFlag(options2, keys, "port", mustBeValidPortNumber);
						const host = getFlag(options2, keys, "host", mustBeString);
						const servedir = getFlag(options2, keys, "servedir", mustBeString);
						const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
						const certfile = getFlag(options2, keys, "certfile", mustBeString);
						const fallback = getFlag(options2, keys, "fallback", mustBeString);
						const cors = getFlag(options2, keys, "cors", mustBeObject);
						const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
						checkForInvalidFlags(options2, keys, `in serve() call`);
						const request2 = {
							command: "serve",
							key: buildKey,
							onRequest: !!onRequest
						};
						if (port !== void 0) request2.port = port;
						if (host !== void 0) request2.host = host;
						if (servedir !== void 0) request2.servedir = servedir;
						if (keyfile !== void 0) request2.keyfile = keyfile;
						if (certfile !== void 0) request2.certfile = certfile;
						if (fallback !== void 0) request2.fallback = fallback;
						if (cors) {
							const corsKeys = {};
							const origin = getFlag(cors, corsKeys, "origin", mustBeStringOrArrayOfStrings);
							checkForInvalidFlags(cors, corsKeys, `on "cors" object`);
							if (Array.isArray(origin)) request2.corsOrigin = origin;
							else if (origin !== void 0) request2.corsOrigin = [origin];
						}
						sendRequest(refs, request2, (error2, response2) => {
							if (error2) return reject(new Error(error2));
							if (onRequest) requestCallbacks["serve-request"] = (id, request3) => {
								onRequest(request3.args);
								sendResponse(id, {});
							};
							resolve(response2);
						});
					}),
					cancel: () => new Promise((resolve) => {
						if (didDispose) return resolve();
						sendRequest(refs, {
							command: "cancel",
							key: buildKey
						}, () => {
							resolve();
						});
					}),
					dispose: () => new Promise((resolve) => {
						if (didDispose) return resolve();
						didDispose = true;
						sendRequest(refs, {
							command: "dispose",
							key: buildKey
						}, () => {
							resolve();
							scheduleOnDisposeCallbacks();
							refs.unref();
						});
					})
				};
				refs.ref();
				callback(null, result);
			});
		}
	}
	var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => {
		let onStartCallbacks = [];
		let onEndCallbacks = [];
		let onResolveCallbacks = {};
		let onLoadCallbacks = {};
		let onDisposeCallbacks = [];
		let nextCallbackID = 0;
		let i = 0;
		let requestPlugins = [];
		let isSetupDone = false;
		plugins = [...plugins];
		for (let item of plugins) {
			let keys = {};
			if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
			const name = getFlag(item, keys, "name", mustBeString);
			if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
			try {
				let setup = getFlag(item, keys, "setup", mustBeFunction);
				if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
				checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
				let plugin = {
					name,
					onStart: false,
					onEnd: false,
					onResolve: [],
					onLoad: []
				};
				i++;
				let resolve = (path3, options = {}) => {
					if (!isSetupDone) throw new Error("Cannot call \"resolve\" before plugin setup has completed");
					if (typeof path3 !== "string") throw new Error(`The path to resolve must be a string`);
					let keys2 = /* @__PURE__ */ Object.create(null);
					let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
					let importer = getFlag(options, keys2, "importer", mustBeString);
					let namespace = getFlag(options, keys2, "namespace", mustBeString);
					let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
					let kind = getFlag(options, keys2, "kind", mustBeString);
					let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
					let importAttributes = getFlag(options, keys2, "with", mustBeObject);
					checkForInvalidFlags(options, keys2, "in resolve() call");
					return new Promise((resolve2, reject) => {
						const request = {
							command: "resolve",
							path: path3,
							key: buildKey,
							pluginName: name
						};
						if (pluginName != null) request.pluginName = pluginName;
						if (importer != null) request.importer = importer;
						if (namespace != null) request.namespace = namespace;
						if (resolveDir != null) request.resolveDir = resolveDir;
						if (kind != null) request.kind = kind;
						else throw new Error(`Must specify "kind" when calling "resolve"`);
						if (pluginData != null) request.pluginData = details.store(pluginData);
						if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
						sendRequest(refs, request, (error, response) => {
							if (error !== null) reject(new Error(error));
							else resolve2({
								errors: replaceDetailsInMessages(response.errors, details),
								warnings: replaceDetailsInMessages(response.warnings, details),
								path: response.path,
								external: response.external,
								sideEffects: response.sideEffects,
								namespace: response.namespace,
								suffix: response.suffix,
								pluginData: details.load(response.pluginData)
							});
						});
					});
				};
				let promise = setup({
					initialOptions,
					resolve,
					onStart(callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onStart" callback registered here:`), streamIn, "onStart");
						onStartCallbacks.push({
							name,
							callback,
							note: registeredNote
						});
						plugin.onStart = true;
					},
					onEnd(callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onEnd" callback registered here:`), streamIn, "onEnd");
						onEndCallbacks.push({
							name,
							callback,
							note: registeredNote
						});
						plugin.onEnd = true;
					},
					onResolve(options, callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onResolve" callback registered here:`), streamIn, "onResolve");
						let keys2 = {};
						let filter = getFlag(options, keys2, "filter", mustBeRegExp);
						let namespace = getFlag(options, keys2, "namespace", mustBeString);
						checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
						if (filter == null) throw new Error(`onResolve() call is missing a filter`);
						let id = nextCallbackID++;
						onResolveCallbacks[id] = {
							name,
							callback,
							note: registeredNote
						};
						plugin.onResolve.push({
							id,
							filter: jsRegExpToGoRegExp(filter),
							namespace: namespace || ""
						});
					},
					onLoad(options, callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onLoad" callback registered here:`), streamIn, "onLoad");
						let keys2 = {};
						let filter = getFlag(options, keys2, "filter", mustBeRegExp);
						let namespace = getFlag(options, keys2, "namespace", mustBeString);
						checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
						if (filter == null) throw new Error(`onLoad() call is missing a filter`);
						let id = nextCallbackID++;
						onLoadCallbacks[id] = {
							name,
							callback,
							note: registeredNote
						};
						plugin.onLoad.push({
							id,
							filter: jsRegExpToGoRegExp(filter),
							namespace: namespace || ""
						});
					},
					onDispose(callback) {
						onDisposeCallbacks.push(callback);
					},
					esbuild: streamIn.esbuild
				});
				if (promise) await promise;
				requestPlugins.push(plugin);
			} catch (e) {
				return {
					ok: false,
					error: e,
					pluginName: name
				};
			}
		}
		requestCallbacks["on-start"] = async (id, request) => {
			details.clear();
			let response = {
				errors: [],
				warnings: []
			};
			await Promise.all(onStartCallbacks.map(async ({ name, callback, note }) => {
				try {
					let result = await callback();
					if (result != null) {
						if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
						let keys = {};
						let errors = getFlag(result, keys, "errors", mustBeArray);
						let warnings = getFlag(result, keys, "warnings", mustBeArray);
						checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
						if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
						if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
					}
				} catch (e) {
					response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
				}
			}));
			sendResponse(id, response);
		};
		requestCallbacks["on-resolve"] = async (id, request) => {
			let response = {}, name = "", callback, note;
			for (let id2 of request.ids) try {
				({name, callback, note} = onResolveCallbacks[id2]);
				let result = await callback({
					path: request.path,
					importer: request.importer,
					namespace: request.namespace,
					resolveDir: request.resolveDir,
					kind: request.kind,
					pluginData: details.load(request.pluginData),
					with: request.with
				});
				if (result != null) {
					if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
					let keys = {};
					let pluginName = getFlag(result, keys, "pluginName", mustBeString);
					let path3 = getFlag(result, keys, "path", mustBeString);
					let namespace = getFlag(result, keys, "namespace", mustBeString);
					let suffix = getFlag(result, keys, "suffix", mustBeString);
					let external = getFlag(result, keys, "external", mustBeBoolean);
					let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
					let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
					let errors = getFlag(result, keys, "errors", mustBeArray);
					let warnings = getFlag(result, keys, "warnings", mustBeArray);
					let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
					let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
					checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
					response.id = id2;
					if (pluginName != null) response.pluginName = pluginName;
					if (path3 != null) response.path = path3;
					if (namespace != null) response.namespace = namespace;
					if (suffix != null) response.suffix = suffix;
					if (external != null) response.external = external;
					if (sideEffects != null) response.sideEffects = sideEffects;
					if (pluginData != null) response.pluginData = details.store(pluginData);
					if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
					if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
					if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
					if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
					break;
				}
			} catch (e) {
				response = {
					id: id2,
					errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)]
				};
				break;
			}
			sendResponse(id, response);
		};
		requestCallbacks["on-load"] = async (id, request) => {
			let response = {}, name = "", callback, note;
			for (let id2 of request.ids) try {
				({name, callback, note} = onLoadCallbacks[id2]);
				let result = await callback({
					path: request.path,
					namespace: request.namespace,
					suffix: request.suffix,
					pluginData: details.load(request.pluginData),
					with: request.with
				});
				if (result != null) {
					if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
					let keys = {};
					let pluginName = getFlag(result, keys, "pluginName", mustBeString);
					let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
					let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
					let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
					let loader = getFlag(result, keys, "loader", mustBeString);
					let errors = getFlag(result, keys, "errors", mustBeArray);
					let warnings = getFlag(result, keys, "warnings", mustBeArray);
					let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
					let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
					checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
					response.id = id2;
					if (pluginName != null) response.pluginName = pluginName;
					if (contents instanceof Uint8Array) response.contents = contents;
					else if (contents != null) response.contents = encodeUTF8(contents);
					if (resolveDir != null) response.resolveDir = resolveDir;
					if (pluginData != null) response.pluginData = details.store(pluginData);
					if (loader != null) response.loader = loader;
					if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
					if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
					if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
					if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
					break;
				}
			} catch (e) {
				response = {
					id: id2,
					errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)]
				};
				break;
			}
			sendResponse(id, response);
		};
		let runOnEndCallbacks = (result, done) => done([], []);
		if (onEndCallbacks.length > 0) runOnEndCallbacks = (result, done) => {
			(async () => {
				const onEndErrors = [];
				const onEndWarnings = [];
				for (const { name, callback, note } of onEndCallbacks) {
					let newErrors;
					let newWarnings;
					try {
						const value = await callback(result);
						if (value != null) {
							if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
							let keys = {};
							let errors = getFlag(value, keys, "errors", mustBeArray);
							let warnings = getFlag(value, keys, "warnings", mustBeArray);
							checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
							if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
							if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
						}
					} catch (e) {
						newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
					}
					if (newErrors) {
						onEndErrors.push(...newErrors);
						try {
							result.errors.push(...newErrors);
						} catch {}
					}
					if (newWarnings) {
						onEndWarnings.push(...newWarnings);
						try {
							result.warnings.push(...newWarnings);
						} catch {}
					}
				}
				done(onEndErrors, onEndWarnings);
			})();
		};
		let scheduleOnDisposeCallbacks = () => {
			for (const cb of onDisposeCallbacks) setTimeout(() => cb(), 0);
		};
		isSetupDone = true;
		return {
			ok: true,
			requestPlugins,
			runOnEndCallbacks,
			scheduleOnDisposeCallbacks
		};
	};
	function createObjectStash() {
		const map = /* @__PURE__ */ new Map();
		let nextID = 0;
		return {
			clear() {
				map.clear();
			},
			load(id) {
				return map.get(id);
			},
			store(value) {
				if (value === void 0) return -1;
				const id = nextID++;
				map.set(id, value);
				return id;
			}
		};
	}
	function extractCallerV8(e, streamIn, ident) {
		let note;
		let tried = false;
		return () => {
			if (tried) return note;
			tried = true;
			try {
				let lines = (e.stack + "").split("\n");
				lines.splice(1, 1);
				let location = parseStackLinesV8(streamIn, lines, ident);
				if (location) {
					note = {
						text: e.message,
						location
					};
					return note;
				}
			} catch {}
		};
	}
	function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
		let text = "Internal error";
		let location = null;
		try {
			text = (e && e.message || e) + "";
		} catch {}
		try {
			location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
		} catch {}
		return {
			id: "",
			pluginName,
			text,
			location,
			notes: note ? [note] : [],
			detail: stash ? stash.store(e) : -1
		};
	}
	function parseStackLinesV8(streamIn, lines, ident) {
		let at = "    at ";
		if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) for (let i = 1; i < lines.length; i++) {
			let line = lines[i];
			if (!line.startsWith(at)) continue;
			line = line.slice(7);
			while (true) {
				let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
				if (match) {
					line = match[1];
					continue;
				}
				match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
				if (match) {
					line = match[1];
					continue;
				}
				match = /^(\S+):(\d+):(\d+)$/.exec(line);
				if (match) {
					let contents;
					try {
						contents = streamIn.readFileSync(match[1], "utf8");
					} catch {
						break;
					}
					let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
					let column = +match[3] - 1;
					let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
					return {
						file: match[1],
						namespace: "file",
						line: +match[2],
						column: encodeUTF8(lineText.slice(0, column)).length,
						length: encodeUTF8(lineText.slice(column, column + length)).length,
						lineText: lineText + "\n" + lines.slice(1).join("\n"),
						suggestion: ""
					};
				}
				break;
			}
		}
		return null;
	}
	function failureErrorWithLog(text, errors, warnings) {
		let limit = 5;
		text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, 6).map((e, i) => {
			if (i === limit) return "\n...";
			if (!e.location) return `
error: ${e.text}`;
			let { file, line, column } = e.location;
			return `
${file}:${line}:${column}: ERROR: ${e.pluginName ? `[plugin: ${e.pluginName}] ` : ""}${e.text}`;
		}).join("");
		let error = new Error(text);
		for (const [key, value] of [["errors", errors], ["warnings", warnings]]) Object.defineProperty(error, key, {
			configurable: true,
			enumerable: true,
			get: () => value,
			set: (value2) => Object.defineProperty(error, key, {
				configurable: true,
				enumerable: true,
				value: value2
			})
		});
		return error;
	}
	function replaceDetailsInMessages(messages, stash) {
		for (const message of messages) message.detail = stash.load(message.detail);
		return messages;
	}
	function sanitizeLocation(location, where, terminalWidth) {
		if (location == null) return null;
		let keys = {};
		let file = getFlag(location, keys, "file", mustBeString);
		let namespace = getFlag(location, keys, "namespace", mustBeString);
		let line = getFlag(location, keys, "line", mustBeInteger);
		let column = getFlag(location, keys, "column", mustBeInteger);
		let length = getFlag(location, keys, "length", mustBeInteger);
		let lineText = getFlag(location, keys, "lineText", mustBeString);
		let suggestion = getFlag(location, keys, "suggestion", mustBeString);
		checkForInvalidFlags(location, keys, where);
		if (lineText) {
			const relevantASCII = lineText.slice(0, (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80));
			if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) lineText = relevantASCII;
		}
		return {
			file: file || "",
			namespace: namespace || "",
			line: line || 0,
			column: column || 0,
			length: length || 0,
			lineText: lineText || "",
			suggestion: suggestion || ""
		};
	}
	function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
		let messagesClone = [];
		let index = 0;
		for (const message of messages) {
			let keys = {};
			let id = getFlag(message, keys, "id", mustBeString);
			let pluginName = getFlag(message, keys, "pluginName", mustBeString);
			let text = getFlag(message, keys, "text", mustBeString);
			let location = getFlag(message, keys, "location", mustBeObjectOrNull);
			let notes = getFlag(message, keys, "notes", mustBeArray);
			let detail = getFlag(message, keys, "detail", canBeAnything);
			let where = `in element ${index} of "${property}"`;
			checkForInvalidFlags(message, keys, where);
			let notesClone = [];
			if (notes) for (const note of notes) {
				let noteKeys = {};
				let noteText = getFlag(note, noteKeys, "text", mustBeString);
				let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
				checkForInvalidFlags(note, noteKeys, where);
				notesClone.push({
					text: noteText || "",
					location: sanitizeLocation(noteLocation, where, terminalWidth)
				});
			}
			messagesClone.push({
				id: id || "",
				pluginName: pluginName || fallbackPluginName,
				text: text || "",
				location: sanitizeLocation(location, where, terminalWidth),
				notes: notesClone,
				detail: stash ? stash.store(detail) : -1
			});
			index++;
		}
		return messagesClone;
	}
	function sanitizeStringArray(values, property) {
		const result = [];
		for (const value of values) {
			if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
			result.push(value);
		}
		return result;
	}
	function sanitizeStringMap(map, property) {
		const result = /* @__PURE__ */ Object.create(null);
		for (const key in map) {
			const value = map[key];
			if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
			result[key] = value;
		}
		return result;
	}
	function convertOutputFiles({ path: path3, contents, hash }) {
		let text = null;
		return {
			path: path3,
			contents,
			hash,
			get text() {
				const binary = this.contents;
				if (text === null || binary !== contents) {
					contents = binary;
					text = decodeUTF8(binary);
				}
				return text;
			}
		};
	}
	function jsRegExpToGoRegExp(regexp) {
		let result = regexp.source;
		if (regexp.flags) result = `(?${regexp.flags})${result}`;
		return result;
	}
	function parseJSON(bytes) {
		let text;
		try {
			text = decodeUTF8(bytes);
		} catch {
			return JSON_parse(bytes);
		}
		return JSON.parse(text);
	}
	var fs$1 = __require("fs");
	var os = __require("os");
	var path$1 = __require("path");
	var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
	var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
	var packageDarwin_arm64 = "@esbuild/darwin-arm64";
	var packageDarwin_x64 = "@esbuild/darwin-x64";
	var knownWindowsPackages = {
		"win32 arm64 LE": "@esbuild/win32-arm64",
		"win32 ia32 LE": "@esbuild/win32-ia32",
		"win32 x64 LE": "@esbuild/win32-x64"
	};
	var knownUnixlikePackages = {
		"aix ppc64 BE": "@esbuild/aix-ppc64",
		"android arm64 LE": "@esbuild/android-arm64",
		"darwin arm64 LE": "@esbuild/darwin-arm64",
		"darwin x64 LE": "@esbuild/darwin-x64",
		"freebsd arm64 LE": "@esbuild/freebsd-arm64",
		"freebsd x64 LE": "@esbuild/freebsd-x64",
		"linux arm LE": "@esbuild/linux-arm",
		"linux arm64 LE": "@esbuild/linux-arm64",
		"linux ia32 LE": "@esbuild/linux-ia32",
		"linux mips64el LE": "@esbuild/linux-mips64el",
		"linux ppc64 LE": "@esbuild/linux-ppc64",
		"linux riscv64 LE": "@esbuild/linux-riscv64",
		"linux s390x BE": "@esbuild/linux-s390x",
		"linux x64 LE": "@esbuild/linux-x64",
		"linux loong64 LE": "@esbuild/linux-loong64",
		"netbsd arm64 LE": "@esbuild/netbsd-arm64",
		"netbsd x64 LE": "@esbuild/netbsd-x64",
		"openbsd arm64 LE": "@esbuild/openbsd-arm64",
		"openbsd x64 LE": "@esbuild/openbsd-x64",
		"sunos x64 LE": "@esbuild/sunos-x64"
	};
	var knownWebAssemblyFallbackPackages = {
		"android arm LE": "@esbuild/android-arm",
		"android x64 LE": "@esbuild/android-x64",
		"openharmony arm64 LE": "@esbuild/openharmony-arm64"
	};
	function pkgAndSubpathForCurrentPlatform() {
		let pkg;
		let subpath;
		let isWASM = false;
		let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
		if (platformKey in knownWindowsPackages) {
			pkg = knownWindowsPackages[platformKey];
			subpath = "esbuild.exe";
		} else if (platformKey in knownUnixlikePackages) {
			pkg = knownUnixlikePackages[platformKey];
			subpath = "bin/esbuild";
		} else if (platformKey in knownWebAssemblyFallbackPackages) {
			pkg = knownWebAssemblyFallbackPackages[platformKey];
			subpath = "bin/esbuild";
			isWASM = true;
		} else throw new Error(`Unsupported platform: ${platformKey}`);
		return {
			pkg,
			subpath,
			isWASM
		};
	}
	function pkgForSomeOtherPlatform() {
		const libMainJS = __require.resolve("esbuild");
		const nodeModulesDirectory = path$1.dirname(path$1.dirname(path$1.dirname(libMainJS)));
		if (path$1.basename(nodeModulesDirectory) === "node_modules") {
			for (const unixKey in knownUnixlikePackages) try {
				const pkg = knownUnixlikePackages[unixKey];
				if (fs$1.existsSync(path$1.join(nodeModulesDirectory, pkg))) return pkg;
			} catch {}
			for (const windowsKey in knownWindowsPackages) try {
				const pkg = knownWindowsPackages[windowsKey];
				if (fs$1.existsSync(path$1.join(nodeModulesDirectory, pkg))) return pkg;
			} catch {}
		}
		return null;
	}
	function downloadedBinPath(pkg, subpath) {
		const esbuildLibDir = path$1.dirname(__require.resolve("esbuild"));
		return path$1.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path$1.basename(subpath)}`);
	}
	function generateBinPath() {
		if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
			if (!fs$1.existsSync(ESBUILD_BINARY_PATH)) console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
			else return {
				binPath: ESBUILD_BINARY_PATH,
				isWASM: false
			};
		}
		const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
		let binPath;
		try {
			binPath = __require.resolve(`${pkg}/${subpath}`);
		} catch (e) {
			binPath = downloadedBinPath(pkg, subpath);
			if (!fs$1.existsSync(binPath)) {
				try {
					__require.resolve(pkg);
				} catch {
					const otherPkg = pkgForSomeOtherPlatform();
					if (otherPkg) {
						let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
						if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
						throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
					}
					throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
				}
				throw e;
			}
		}
		if (/\.zip\//.test(binPath)) {
			let pnpapi;
			try {
				pnpapi = __require("pnpapi");
			} catch (e) {}
			if (pnpapi) {
				const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
				const binTargetPath = path$1.join(root, "node_modules", ".cache", "esbuild", `pnpapi-${pkg.replace("/", "-")}-0.28.2-${path$1.basename(subpath)}`);
				if (!fs$1.existsSync(binTargetPath)) {
					fs$1.mkdirSync(path$1.dirname(binTargetPath), { recursive: true });
					fs$1.copyFileSync(binPath, binTargetPath);
					fs$1.chmodSync(binTargetPath, 493);
				}
				return {
					binPath: binTargetPath,
					isWASM
				};
			}
		}
		return {
			binPath,
			isWASM
		};
	}
	var child_process = __require("child_process");
	var crypto = __require("crypto");
	var path2 = __require("path");
	var fs2 = __require("fs");
	var os2 = __require("os");
	var tty = __require("tty");
	var worker_threads;
	if (process.env.ESBUILD_WORKER_THREADS !== "0") {
		try {
			worker_threads = __require("worker_threads");
		} catch {}
		let [major, minor] = process.versions.node.split(".");
		if (+major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13) worker_threads = void 0;
	}
	var _a;
	var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.28.2";
	var esbuildCommandAndArgs = () => {
		if ((!ESBUILD_BINARY_PATH || false) && (path2.basename(__filename) !== "main.js" || path2.basename(__dirname) !== "lib")) throw new Error(`The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`);
		{
			const { binPath, isWASM } = generateBinPath();
			if (isWASM) return ["node", [binPath]];
			else return [binPath, []];
		}
	};
	var isTTY = () => tty.isatty(2);
	var fsSync = {
		readFile(tempFile, callback) {
			try {
				let contents = fs2.readFileSync(tempFile, "utf8");
				try {
					fs2.unlinkSync(tempFile);
				} catch {}
				callback(null, contents);
			} catch (err) {
				callback(err, null);
			}
		},
		writeFile(contents, callback) {
			try {
				let tempFile = randomFileName();
				fs2.writeFileSync(tempFile, contents);
				callback(tempFile);
			} catch {
				callback(null);
			}
		}
	};
	var fsAsync = {
		readFile(tempFile, callback) {
			try {
				fs2.readFile(tempFile, "utf8", (err, contents) => {
					try {
						fs2.unlink(tempFile, () => callback(err, contents));
					} catch {
						callback(err, contents);
					}
				});
			} catch (err) {
				callback(err, null);
			}
		},
		writeFile(contents, callback) {
			try {
				let tempFile = randomFileName();
				fs2.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
			} catch {
				callback(null);
			}
		}
	};
	var version = "0.28.2";
	var build = (options) => ensureServiceIsRunning().build(options);
	var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
	var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
	var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
	var analyzeMetafile = (messages, options) => ensureServiceIsRunning().analyzeMetafile(messages, options);
	var buildSync = (options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.buildSync(options);
		}
		let result;
		runServiceSync((service) => service.buildOrContext({
			callName: "buildSync",
			refs: null,
			options,
			isTTY: isTTY(),
			defaultWD,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var transformSync = (input, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.transformSync(input, options);
		}
		let result;
		runServiceSync((service) => service.transform({
			callName: "transformSync",
			refs: null,
			input,
			options: options || {},
			isTTY: isTTY(),
			fs: fsSync,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var formatMessagesSync = (messages, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.formatMessagesSync(messages, options);
		}
		let result;
		runServiceSync((service) => service.formatMessages({
			callName: "formatMessagesSync",
			refs: null,
			messages,
			options,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var analyzeMetafileSync = (metafile, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.analyzeMetafileSync(metafile, options);
		}
		let result;
		runServiceSync((service) => service.analyzeMetafile({
			callName: "analyzeMetafileSync",
			refs: null,
			metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
			options,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var stop = () => {
		if (stopService) stopService();
		if (workerThreadService) workerThreadService.stop();
		return Promise.resolve();
	};
	var initializeWasCalled = false;
	var initialize = (options) => {
		options = validateInitializeOptions(options || {});
		if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
		if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
		if (options.worker) throw new Error(`The "worker" option only works in the browser`);
		if (initializeWasCalled) throw new Error("Cannot call \"initialize\" more than once");
		ensureServiceIsRunning();
		initializeWasCalled = true;
		return Promise.resolve();
	};
	var defaultWD = process.cwd();
	var longLivedService;
	var stopService;
	var ensureServiceIsRunning = () => {
		if (longLivedService) return longLivedService;
		let [command, args] = esbuildCommandAndArgs();
		let child = child_process.spawn(command, args.concat(`--service=0.28.2`, "--ping"), {
			windowsHide: true,
			stdio: [
				"pipe",
				"pipe",
				"inherit"
			],
			cwd: defaultWD
		});
		let { readFromStdout, afterClose, service } = createChannel({
			writeToStdin(bytes) {
				child.stdin.write(bytes, (err) => {
					if (err) afterClose(err);
				});
			},
			readFileSync: fs2.readFileSync,
			isSync: false,
			hasFS: true,
			esbuild: node_exports
		});
		child.stdin.on("error", afterClose);
		child.on("error", afterClose);
		const stdin = child.stdin;
		const stdout = child.stdout;
		stdout.on("data", readFromStdout);
		stdout.on("end", afterClose);
		stopService = () => {
			stdin.destroy();
			stdout.destroy();
			child.kill();
			initializeWasCalled = false;
			longLivedService = void 0;
			stopService = void 0;
		};
		let refCount = 0;
		child.unref();
		if (stdin.unref) stdin.unref();
		if (stdout.unref) stdout.unref();
		const refs = {
			ref() {
				if (++refCount === 1) child.ref();
			},
			unref() {
				if (--refCount === 0) child.unref();
			}
		};
		longLivedService = {
			build: (options) => new Promise((resolve, reject) => {
				service.buildOrContext({
					callName: "build",
					refs,
					options,
					isTTY: isTTY(),
					defaultWD,
					callback: (err, res) => err ? reject(err) : resolve(res)
				});
			}),
			context: (options) => new Promise((resolve, reject) => service.buildOrContext({
				callName: "context",
				refs,
				options,
				isTTY: isTTY(),
				defaultWD,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			transform: (input, options) => new Promise((resolve, reject) => service.transform({
				callName: "transform",
				refs,
				input,
				options: options || {},
				isTTY: isTTY(),
				fs: fsAsync,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
				callName: "formatMessages",
				refs,
				messages,
				options,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
				callName: "analyzeMetafile",
				refs,
				metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
				options,
				callback: (err, res) => err ? reject(err) : resolve(res)
			}))
		};
		return longLivedService;
	};
	var runServiceSync = (callback) => {
		let [command, args] = esbuildCommandAndArgs();
		let stdin = /* @__PURE__ */ new Uint8Array();
		let { readFromStdout, afterClose, service } = createChannel({
			writeToStdin(bytes) {
				if (stdin.length !== 0) throw new Error("Must run at most one command");
				stdin = bytes;
			},
			isSync: true,
			hasFS: true,
			esbuild: node_exports
		});
		callback(service);
		readFromStdout(child_process.execFileSync(command, args.concat(`--service=0.28.2`), {
			cwd: defaultWD,
			windowsHide: true,
			input: stdin,
			maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16777216
		}));
		afterClose(null);
	};
	var randomFileName = () => {
		return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
	};
	var workerThreadService = null;
	var startWorkerThreadService = (worker_threads2) => {
		let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
		let worker = new worker_threads2.Worker(__filename, {
			workerData: {
				workerPort,
				defaultWD,
				esbuildVersion: "0.28.2"
			},
			transferList: [workerPort],
			execArgv: []
		});
		let nextID = 0;
		let fakeBuildError = (text) => {
			let error = /* @__PURE__ */ new Error(`Build failed with 1 error:
error: ${text}`);
			error.errors = [{
				id: "",
				pluginName: "",
				text,
				location: null,
				notes: [],
				detail: void 0
			}];
			error.warnings = [];
			return error;
		};
		let validateBuildSyncOptions = (options) => {
			if (!options) return;
			let plugins = options.plugins;
			if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
		};
		let applyProperties = (object, properties) => {
			for (let key in properties) object[key] = properties[key];
		};
		let runCallSync = (command, args) => {
			let id = nextID++;
			let sharedBuffer = new SharedArrayBuffer(8);
			let sharedBufferView = new Int32Array(sharedBuffer);
			let msg = {
				sharedBuffer,
				id,
				command,
				args
			};
			worker.postMessage(msg);
			let status = Atomics.wait(sharedBufferView, 0, 0);
			if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
			let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
			if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
			if (reject) {
				applyProperties(reject, properties);
				throw reject;
			}
			return resolve;
		};
		worker.unref();
		return {
			buildSync(options) {
				validateBuildSyncOptions(options);
				return runCallSync("build", [options]);
			},
			transformSync(input, options) {
				return runCallSync("transform", [input, options]);
			},
			formatMessagesSync(messages, options) {
				return runCallSync("formatMessages", [messages, options]);
			},
			analyzeMetafileSync(metafile, options) {
				return runCallSync("analyzeMetafile", [metafile, options]);
			},
			stop() {
				worker.terminate();
				workerThreadService = null;
			}
		};
	};
	var startSyncServiceWorker = () => {
		let workerPort = worker_threads.workerData.workerPort;
		let parentPort = worker_threads.parentPort;
		let extractProperties = (object) => {
			let properties = {};
			if (object && typeof object === "object") for (let key in object) properties[key] = object[key];
			return properties;
		};
		try {
			let service = ensureServiceIsRunning();
			defaultWD = worker_threads.workerData.defaultWD;
			parentPort.on("message", (msg) => {
				(async () => {
					let { sharedBuffer, id, command, args } = msg;
					let sharedBufferView = new Int32Array(sharedBuffer);
					try {
						switch (command) {
							case "build":
								workerPort.postMessage({
									id,
									resolve: await service.build(args[0])
								});
								break;
							case "transform":
								workerPort.postMessage({
									id,
									resolve: await service.transform(args[0], args[1])
								});
								break;
							case "formatMessages":
								workerPort.postMessage({
									id,
									resolve: await service.formatMessages(args[0], args[1])
								});
								break;
							case "analyzeMetafile":
								workerPort.postMessage({
									id,
									resolve: await service.analyzeMetafile(args[0], args[1])
								});
								break;
							default: throw new Error(`Invalid command: ${command}`);
						}
					} catch (reject) {
						workerPort.postMessage({
							id,
							reject,
							properties: extractProperties(reject)
						});
					}
					Atomics.add(sharedBufferView, 0, 1);
					Atomics.notify(sharedBufferView, 0, Infinity);
				})();
			});
		} catch (reject) {
			parentPort.on("message", (msg) => {
				let { sharedBuffer, id } = msg;
				let sharedBufferView = new Int32Array(sharedBuffer);
				workerPort.postMessage({
					id,
					reject,
					properties: extractProperties(reject)
				});
				Atomics.add(sharedBufferView, 0, 1);
				Atomics.notify(sharedBufferView, 0, Infinity);
			});
		}
	};
	if (isInternalWorkerThread) startSyncServiceWorker();
	var node_default = node_exports;
	0 && (module.exports = {
		analyzeMetafile,
		analyzeMetafileSync,
		build,
		buildSync,
		context,
		formatMessages,
		formatMessagesSync,
		initialize,
		stop,
		transform,
		transformSync,
		version
	});
}));

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/index-DCefr8NP.mjs
var import_main = require_main();
var Yt$1 = Object.defineProperty;
var u$1 = (s, e) => Yt$1(s, "name", {
	value: e,
	configurable: !0
});
const ve$2 = u$1((s) => en.createHash("sha1").update(s).digest("hex"), "sha1");
let _$1;
let se$1;
let xe$1;
let Y$1 = 2 << 19;
const Pe$1 = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1 ? function(s, e) {
	const n = s.length;
	let i = 0;
	for (; i < n;) e[i] = s.charCodeAt(i++);
} : function(s, e) {
	const n = s.length;
	let i = 0;
	for (; i < n;) {
		const o = s.charCodeAt(i);
		e[i++] = (255 & o) << 8 | o >>> 8;
	}
};
const on$1 = "xportmportlassforetaourceromsyncunctionssertvoyiedelecontininstantybreareturdebuggeawaithrwhileifcatcfinallels";
let L$1;
let We$2;
let y;
function an$1(s, e = "@") {
	L$1 = s, We$2 = e;
	const n = 2 * L$1.length + (2 << 18);
	if (n > Y$1 || !_$1) {
		for (; n > Y$1;) Y$1 *= 2;
		se$1 = new ArrayBuffer(Y$1), Pe$1(on$1, new Uint16Array(se$1, 16, 110)), _$1 = function(l, p, g) {
			var b = new l.Int8Array(g), d = new l.Int16Array(g), r = new l.Int32Array(g), S = new l.Uint8Array(g);
			new l.Uint16Array(g);
			var E = 1040;
			function I() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, C = 0;
				C = E, E = E + 10240 | 0, b[804] = 1, b[803] = 0, d[399] = 0, d[400] = 0, r[69] = r[2], b[805] = 0, r[68] = 0, b[802] = 0, r[70] = C + 2048, r[71] = C, b[806] = 0, t = (r[3] | 0) + -2 | 0, r[72] = t, a = t + (r[66] << 1) | 0, r[73] = a;
				e: for (;;) {
					if (h = t + 2 | 0, r[72] = h, t >>> 0 >= a >>> 0) {
						f = 18;
						break;
					}
					t: do
						switch (d[h >> 1] | 0) {
							case 9:
							case 10:
							case 11:
							case 12:
							case 13:
							case 32: break;
							case 101:
								if (!(d[400] | 0) && K(h) | 0 && !(R(t + 4 | 0, 16, 10) | 0) && (M(), (b[804] | 0) == 0)) {
									f = 9;
									break e;
								} else f = 17;
								break;
							case 105:
								K(h) | 0 && !(R(t + 4 | 0, 26, 10) | 0) && F(), f = 17;
								break;
							case 59:
								f = 17;
								break;
							case 47: switch (d[t + 4 >> 1] | 0) {
								case 47:
									pe();
									break t;
								case 42:
									ge(1);
									break t;
								default:
									f = 16;
									break e;
							}
							default:
								f = 16;
								break e;
						}
					while (!1);
					(f | 0) == 17 && (f = 0, r[69] = r[72]), t = r[72] | 0, a = r[73] | 0;
				}
				(f | 0) == 9 ? (t = r[72] | 0, r[69] = t, f = 19) : (f | 0) == 16 ? (b[804] = 0, r[72] = t, f = 19) : (f | 0) == 18 && (b[802] | 0 ? t = 0 : (t = h, f = 19));
				do
					if ((f | 0) == 19) {
						e: for (;;) {
							if (a = t + 2 | 0, r[72] = a, t >>> 0 >= (r[73] | 0) >>> 0) {
								f = 92;
								break;
							}
							t: do
								switch (d[a >> 1] | 0) {
									case 9:
									case 10:
									case 11:
									case 12:
									case 13:
									case 32: break;
									case 101:
										!(d[400] | 0) && K(a) | 0 && !(R(t + 4 | 0, 16, 10) | 0) && M(), f = 91;
										break;
									case 105:
										K(a) | 0 && !(R(t + 4 | 0, 26, 10) | 0) && F(), f = 91;
										break;
									case 99:
										K(a) | 0 && !(R(t + 4 | 0, 36, 8) | 0) && W(d[t + 12 >> 1] | 0) | 0 && (b[806] = 1), f = 91;
										break;
									case 40:
										h = r[70] | 0, t = d[400] | 0, f = t & 65535, r[h + (f << 3) >> 2] = 1, a = r[69] | 0, d[400] = t + 1 << 16 >> 16, r[h + (f << 3) + 4 >> 2] = a, f = 91;
										break;
									case 41:
										if (a = d[400] | 0, !(a << 16 >> 16)) {
											f = 36;
											break e;
										}
										h = a + -1 << 16 >> 16, d[400] = h, f = d[399] | 0, a = f & 65535, f << 16 >> 16 && (r[(r[70] | 0) + ((h & 65535) << 3) >> 2] | 0) == 5 && (a = r[(r[71] | 0) + (a + -1 << 2) >> 2] | 0, h = a + 4 | 0, r[h >> 2] | 0 || (r[h >> 2] = (r[69] | 0) + 2), r[a + 12 >> 2] = t + 4, d[399] = f + -1 << 16 >> 16), f = 91;
										break;
									case 123:
										f = r[69] | 0, h = r[63] | 0, t = f;
										do
											if ((d[f >> 1] | 0) == 41 & (h | 0) != 0 && (r[h + 4 >> 2] | 0) == (f | 0)) if (a = r[64] | 0, r[63] = a, a) {
												r[a + 32 >> 2] = 0;
												break;
											} else {
												r[59] = 0;
												break;
											}
										while (!1);
										h = r[70] | 0, a = d[400] | 0, f = a & 65535, r[h + (f << 3) >> 2] = b[806] | 0 ? 6 : 2, d[400] = a + 1 << 16 >> 16, r[h + (f << 3) + 4 >> 2] = t, b[806] = 0, f = 91;
										break;
									case 125:
										if (t = d[400] | 0, !(t << 16 >> 16)) {
											f = 49;
											break e;
										}
										h = r[70] | 0, f = t + -1 << 16 >> 16, d[400] = f, (r[h + ((f & 65535) << 3) >> 2] | 0) == 4 && Ue(), f = 91;
										break;
									case 39:
										N(39), f = 91;
										break;
									case 34:
										N(34), f = 91;
										break;
									case 47: switch (d[t + 4 >> 1] | 0) {
										case 47:
											pe();
											break t;
										case 42:
											ge(1);
											break t;
										default:
											t = r[69] | 0, a = d[t >> 1] | 0;
											n: do
												if (!(Lt(a) | 0)) a << 16 >> 16 == 41 ? (h = d[400] | 0, It(r[(r[70] | 0) + ((h & 65535) << 3) + 4 >> 2] | 0) | 0 || (f = 65)) : f = 64;
												else switch (a << 16 >> 16) {
													case 46: if (((d[t + -2 >> 1] | 0) + -48 & 65535) < 10) {
														f = 64;
														break n;
													} else break n;
													case 43: if ((d[t + -2 >> 1] | 0) == 43) {
														f = 64;
														break n;
													} else break n;
													case 45: if ((d[t + -2 >> 1] | 0) == 45) {
														f = 64;
														break n;
													} else break n;
													default: break n;
												}
											while (!1);
											(f | 0) == 64 && (h = d[400] | 0, f = 65);
											n: do
												if ((f | 0) == 65) {
													if (f = 0, h << 16 >> 16 && (m = r[70] | 0, w = (h & 65535) + -1 | 0, a << 16 >> 16 == 102 ? (r[m + (w << 3) >> 2] | 0) == 1 : 0)) {
														if ((d[t + -2 >> 1] | 0) == 111 && O(r[m + (w << 3) + 4 >> 2] | 0, 44, 3) | 0) break;
													} else f = 69;
													if ((f | 0) == 69 && a << 16 >> 16 == 125 && (f = r[70] | 0, h = h & 65535, Et(r[f + (h << 3) + 4 >> 2] | 0) | 0 || (r[f + (h << 3) >> 2] | 0) == 6)) break;
													if (!(xt(t) | 0)) {
														switch (a << 16 >> 16) {
															case 0: break n;
															case 47: if (b[805] | 0) break n;
														}
														if (f = r[65] | 0, f | 0 && t >>> 0 >= (r[f >> 2] | 0) >>> 0 && t >>> 0 <= (r[f + 4 >> 2] | 0) >>> 0) {
															de(), b[805] = 0, f = 91;
															break t;
														}
														h = r[3] | 0;
														do {
															if (t >>> 0 <= h >>> 0) break;
															t = t + -2 | 0, r[69] = t, a = d[t >> 1] | 0;
														} while (!(be(a) | 0));
														if (ie(a) | 0) {
															do {
																if (t >>> 0 <= h >>> 0) break;
																t = t + -2 | 0, r[69] = t;
															} while (ie(d[t >> 1] | 0) | 0);
															if (At(t) | 0) {
																de(), b[805] = 0, f = 91;
																break t;
															}
														}
														b[805] = 1, f = 91;
														break t;
													}
												}
											while (!1);
											de(), b[805] = 0, f = 91;
											break t;
									}
									case 96:
										h = r[70] | 0, a = d[400] | 0, f = a & 65535, r[h + (f << 3) + 4 >> 2] = r[69], d[400] = a + 1 << 16 >> 16, r[h + (f << 3) >> 2] = 3, Ue(), f = 91;
										break;
									default: f = 91;
								}
							while (!1);
							(f | 0) == 91 && (f = 0, r[69] = r[72]), t = r[72] | 0;
						}
						if ((f | 0) == 36) {
							$(), t = 0;
							break;
						} else if ((f | 0) == 49) {
							$(), t = 0;
							break;
						} else if ((f | 0) == 92) {
							t = b[802] | 0 ? 0 : (d[399] | d[400]) << 16 >> 16 == 0;
							break;
						}
					}
				while (!1);
				return E = C, t | 0;
			}
			u$1(I, "b");
			function M() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, C = 0, D = 0, we = 0, ke = 0, ye = 0, Ce = 0, v = 0, x = 0;
				D = r[72] | 0, we = r[65] | 0, x = D + 12 | 0, r[72] = x, h = k(1) | 0, t = r[72] | 0, (t | 0) == (x | 0) && !(re(h) | 0) || (v = 3);
				e: do
					if ((v | 0) == 3) {
						t: do
							switch (h << 16 >> 16) {
								case 123:
									for (r[72] = t + 2, t = k(1) | 0, a = r[72] | 0;;) {
										if (X(t) | 0 ? (N(t), t = (r[72] | 0) + 2 | 0, r[72] = t) : (j(t) | 0, t = r[72] | 0), k(1) | 0, t = Te(a, t) | 0, t << 16 >> 16 == 44 && (r[72] = (r[72] | 0) + 2, t = k(1) | 0), t << 16 >> 16 == 125) {
											v = 15;
											break;
										}
										if (x = a, a = r[72] | 0, (a | 0) == (x | 0)) {
											v = 12;
											break;
										}
										if (a >>> 0 > (r[73] | 0) >>> 0) {
											v = 14;
											break;
										}
									}
									if ((v | 0) == 12) {
										$();
										break e;
									} else if ((v | 0) == 14) {
										$();
										break e;
									} else if ((v | 0) == 15) {
										b[803] = 1, r[72] = (r[72] | 0) + 2;
										break t;
									}
									break;
								case 42:
									r[72] = t + 2, k(1) | 0, x = r[72] | 0, Te(x, x) | 0;
									break;
								default:
									switch (b[804] = 0, h << 16 >> 16) {
										case 100:
											switch (D = t + 14 | 0, r[72] = D, (k(1) | 0) << 16 >> 16) {
												case 97:
													a = r[72] | 0, !(R(a + 2 | 0, 72, 8) | 0) && (m = a + 10 | 0, ie(d[m >> 1] | 0) | 0) && (r[72] = m, k(0) | 0, v = 22);
													break;
												case 102:
													v = 22;
													break;
												case 99: a = r[72] | 0, !(R(a + 2 | 0, 36, 8) | 0) && (f = a + 10 | 0, x = d[f >> 1] | 0, W(x) | 0 | x << 16 >> 16 == 123) && (r[72] = f, w = k(1) | 0, w << 16 >> 16 != 123) && (Ce = w, v = 31);
											}
											n: do
												if ((v | 0) == 22 && (C = r[72] | 0, (R(C + 2 | 0, 80, 14) | 0) == 0)) {
													if (h = C + 16 | 0, a = d[h >> 1] | 0, !(W(a) | 0)) switch (a << 16 >> 16) {
														case 40:
														case 42: break;
														default: break n;
													}
													r[72] = h, a = k(1) | 0, a << 16 >> 16 == 42 && (r[72] = (r[72] | 0) + 2, a = k(1) | 0), a << 16 >> 16 != 40 && (Ce = a, v = 31);
												}
											while (!1);
											if ((v | 0) == 31 && (ke = r[72] | 0, j(Ce) | 0, ye = r[72] | 0, ye >>> 0 > ke >>> 0)) {
												P(t, D, ke, ye), r[72] = (r[72] | 0) + -2;
												break e;
											}
											P(t, D, 0, 0), r[72] = t + 12;
											break e;
										case 97:
											r[72] = t + 10, k(0) | 0, t = r[72] | 0, v = 35;
											break;
										case 102:
											v = 35;
											break;
										case 99:
											if (!(R(t + 2 | 0, 36, 8) | 0) && (a = t + 10 | 0, be(d[a >> 1] | 0) | 0)) {
												r[72] = a, x = k(1) | 0, v = r[72] | 0, j(x) | 0, x = r[72] | 0, P(v, x, v, x), r[72] = (r[72] | 0) + -2;
												break e;
											}
											t = t + 4 | 0, r[72] = t;
											break;
										case 108:
										case 118: break;
										default: break e;
									}
									if ((v | 0) == 35) {
										r[72] = t + 16, t = k(1) | 0, t << 16 >> 16 == 42 && (r[72] = (r[72] | 0) + 2, t = k(1) | 0), v = r[72] | 0, j(t) | 0, x = r[72] | 0, P(v, x, v, x), r[72] = (r[72] | 0) + -2;
										break e;
									}
									r[72] = t + 6, b[804] = 0, h = k(1) | 0, t = r[72] | 0, h = (j(h) | 32) << 16 >> 16 == 123, f = r[72] | 0, h && (r[72] = f + 2, x = k(1) | 0, t = r[72] | 0, j(x) | 0);
									n: for (; a = r[72] | 0, (a | 0) != (t | 0);) {
										if (P(t, a, t, a), a = k(1) | 0, h) switch (a << 16 >> 16) {
											case 93:
											case 125: break e;
										}
										if (t = r[72] | 0, a << 16 >> 16 != 44) {
											v = 51;
											break;
										}
										switch (r[72] = t + 2, a = k(1) | 0, t = r[72] | 0, a << 16 >> 16) {
											case 91:
											case 123:
												v = 51;
												break n;
										}
										j(a) | 0;
									}
									if ((v | 0) == 51 && (r[72] = t + -2), !h) break e;
									r[72] = f + -2;
									break e;
							}
						while (!1);
						if (x = (k(1) | 0) << 16 >> 16 == 102, t = r[72] | 0, x && !(R(t + 2 | 0, 66, 6) | 0)) for (r[72] = t + 8, H(D, k(1) | 0, 0), t = we | 0 ? we + 16 | 0 : 240;;) {
							if (t = r[t >> 2] | 0, !t) break e;
							r[t + 12 >> 2] = 0, r[t + 8 >> 2] = 0, t = t + 16 | 0;
						}
						r[72] = t + -2;
					}
				while (!1);
			}
			u$1(M, "k");
			function F() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, C = 0;
				m = r[72] | 0, h = m + 12 | 0, r[72] = h, f = k(1) | 0, a = r[72] | 0;
				e: do
					if (f << 16 >> 16 != 46) f << 16 >> 16 == 115 & a >>> 0 > h >>> 0 ? !(R(a + 2 | 0, 56, 10) | 0) && (t = a + 12 | 0, W(d[t >> 1] | 0) | 0) ? w = 14 : (a = 6, h = 0, w = 46) : (t = f, h = 0, w = 15);
					else switch (r[72] = a + 2, (k(1) | 0) << 16 >> 16) {
						case 109:
							if (t = r[72] | 0, R(t + 2 | 0, 50, 6) | 0 || (a = r[69] | 0, !(me(a) | 0) && (d[a >> 1] | 0) == 46)) break e;
							he(m, m, t + 8 | 0, 2);
							break e;
						case 115:
							if (t = r[72] | 0, R(t + 2 | 0, 56, 10) | 0 || (a = r[69] | 0, !(me(a) | 0) && (d[a >> 1] | 0) == 46)) break e;
							t = t + 12 | 0, w = 14;
							break e;
						default: break e;
					}
				while (!1);
				(w | 0) == 14 && (r[72] = t, t = k(1) | 0, h = 1, w = 15);
				e: do
					if ((w | 0) == 15) switch (t << 16 >> 16) {
						case 40:
							if (a = r[70] | 0, C = d[400] | 0, f = C & 65535, r[a + (f << 3) >> 2] = 5, t = r[72] | 0, d[400] = C + 1 << 16 >> 16, r[a + (f << 3) + 4 >> 2] = t, (d[r[69] >> 1] | 0) == 46) break e;
							switch (r[72] = t + 2, a = k(1) | 0, he(m, r[72] | 0, 0, t), h ? (t = r[63] | 0, r[t + 28 >> 2] = 5) : t = r[63] | 0, m = r[71] | 0, C = d[399] | 0, d[399] = C + 1 << 16 >> 16, r[m + ((C & 65535) << 2) >> 2] = t, a << 16 >> 16) {
								case 39:
									N(39);
									break;
								case 34:
									N(34);
									break;
								default:
									r[72] = (r[72] | 0) + -2;
									break e;
							}
							switch (t = (r[72] | 0) + 2 | 0, r[72] = t, (k(1) | 0) << 16 >> 16) {
								case 44:
									r[72] = (r[72] | 0) + 2, k(1) | 0, m = r[63] | 0, r[m + 4 >> 2] = t, C = r[72] | 0, r[m + 16 >> 2] = C, b[m + 24 >> 0] = 1, r[72] = C + -2;
									break e;
								case 41:
									d[400] = (d[400] | 0) + -1 << 16 >> 16, C = r[63] | 0, r[C + 4 >> 2] = t, r[C + 12 >> 2] = (r[72] | 0) + 2, b[C + 24 >> 0] = 1, d[399] = (d[399] | 0) + -1 << 16 >> 16;
									break e;
								default:
									r[72] = (r[72] | 0) + -2;
									break e;
							}
						case 123:
							if (h) {
								a = 12, h = 1, w = 46;
								break e;
							}
							if (t = r[72] | 0, d[400] | 0) {
								r[72] = t + -2;
								break e;
							}
							for (; !(t >>> 0 >= (r[73] | 0) >>> 0);) {
								if (t = k(1) | 0, X(t) | 0) N(t);
								else if (t << 16 >> 16 == 125) {
									w = 36;
									break;
								}
								t = (r[72] | 0) + 2 | 0, r[72] = t;
							}
							if ((w | 0) == 36 && (r[72] = (r[72] | 0) + 2), C = (k(1) | 0) << 16 >> 16 == 102, t = r[72] | 0, C && R(t + 2 | 0, 66, 6) | 0) {
								$();
								break e;
							}
							if (r[72] = t + 8, t = k(1) | 0, X(t) | 0) {
								H(m, t, 0);
								break e;
							} else {
								$();
								break e;
							}
						default:
							if (h) {
								a = 12, h = 1, w = 46;
								break e;
							}
							switch (t << 16 >> 16) {
								case 42:
								case 39:
								case 34:
									h = 0, w = 48;
									break e;
								default:
									a = 6, h = 0, w = 46;
									break e;
							}
					}
				while (!1);
				(w | 0) == 46 && (t = r[72] | 0, (t | 0) == (m + (a << 1) | 0) ? r[72] = t + -2 : w = 48);
				do
					if ((w | 0) == 48) {
						if (d[400] | 0) {
							r[72] = (r[72] | 0) + -2;
							break;
						}
						for (t = r[73] | 0, a = r[72] | 0;;) {
							if (a >>> 0 >= t >>> 0) {
								w = 55;
								break;
							}
							if (f = d[a >> 1] | 0, X(f) | 0) {
								w = 53;
								break;
							}
							C = a + 2 | 0, r[72] = C, a = C;
						}
						if ((w | 0) == 53) {
							H(m, f, h);
							break;
						} else if ((w | 0) == 55) {
							$();
							break;
						}
					}
				while (!1);
			}
			u$1(F, "l");
			function H(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				switch (f = (r[72] | 0) + 2 | 0, a << 16 >> 16) {
					case 39:
						N(39), m = 5;
						break;
					case 34:
						N(34), m = 5;
						break;
					default: $();
				}
				do
					if ((m | 0) == 5) {
						if (he(t, f, r[72] | 0, 1), h && (r[(r[63] | 0) + 28 >> 2] = 4), r[72] = (r[72] | 0) + 2, a = k(0) | 0, h = a << 16 >> 16 == 97, h ? (f = r[72] | 0, R(f + 2 | 0, 94, 10) | 0 && (m = 13)) : (f = r[72] | 0, a << 16 >> 16 == 119 && (d[f + 2 >> 1] | 0) == 105 && (d[f + 4 >> 1] | 0) == 116 && (d[f + 6 >> 1] | 0) == 104 || (m = 13)), (m | 0) == 13) {
							r[72] = f + -2;
							break;
						}
						if (r[72] = f + ((h ? 6 : 4) << 1), (k(1) | 0) << 16 >> 16 != 123) {
							r[72] = f;
							break;
						}
						h = r[72] | 0, a = h;
						e: for (;;) {
							switch (r[72] = a + 2, a = k(1) | 0, a << 16 >> 16) {
								case 39:
									N(39), r[72] = (r[72] | 0) + 2, a = k(1) | 0;
									break;
								case 34:
									N(34), r[72] = (r[72] | 0) + 2, a = k(1) | 0;
									break;
								default: a = j(a) | 0;
							}
							if (a << 16 >> 16 != 58) {
								m = 22;
								break;
							}
							switch (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 39:
									N(39);
									break;
								case 34:
									N(34);
									break;
								default:
									m = 26;
									break e;
							}
							switch (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 125:
									m = 31;
									break e;
								case 44: break;
								default:
									m = 30;
									break e;
							}
							if (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16 == 125) {
								m = 31;
								break;
							}
							a = r[72] | 0;
						}
						if ((m | 0) == 22) {
							r[72] = f;
							break;
						} else if ((m | 0) == 26) {
							r[72] = f;
							break;
						} else if ((m | 0) == 30) {
							r[72] = f;
							break;
						} else if ((m | 0) == 31) {
							m = r[63] | 0, r[m + 16 >> 2] = h, r[m + 12 >> 2] = (r[72] | 0) + 2;
							break;
						}
					}
				while (!1);
			}
			u$1(H, "u");
			function xt(t) {
				t = t | 0;
				e: do
					switch (d[t >> 1] | 0) {
						case 100: switch (d[t + -2 >> 1] | 0) {
							case 105:
								t = O(t + -4 | 0, 104, 2) | 0;
								break e;
							case 108:
								t = O(t + -4 | 0, 108, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 101: switch (d[t + -2 >> 1] | 0) {
							case 115: switch (d[t + -4 >> 1] | 0) {
								case 108:
									t = G(t + -6 | 0, 101) | 0;
									break e;
								case 97:
									t = G(t + -6 | 0, 99) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							case 116:
								t = O(t + -4 | 0, 114, 4) | 0;
								break e;
							case 117:
								t = O(t + -4 | 0, 122, 6) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 102:
							if ((d[t + -2 >> 1] | 0) == 111 && (d[t + -4 >> 1] | 0) == 101) switch (d[t + -6 >> 1] | 0) {
								case 99:
									t = O(t + -8 | 0, 134, 6) | 0;
									break e;
								case 112:
									t = O(t + -8 | 0, 146, 2) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							else t = 0;
							break;
						case 107:
							t = O(t + -2 | 0, 150, 4) | 0;
							break;
						case 110:
							t = t + -2 | 0, G(t, 105) | 0 ? t = 1 : t = O(t, 158, 5) | 0;
							break;
						case 111:
							t = G(t + -2 | 0, 100) | 0;
							break;
						case 114:
							t = O(t + -2 | 0, 168, 7) | 0;
							break;
						case 116:
							t = O(t + -2 | 0, 182, 4) | 0;
							break;
						case 119: switch (d[t + -2 >> 1] | 0) {
							case 101:
								t = G(t + -4 | 0, 110) | 0;
								break e;
							case 111:
								t = O(t + -4 | 0, 190, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						default: t = 0;
					}
				while (!1);
				return t | 0;
			}
			u$1(xt, "o");
			function Ue() {
				var t = 0, a = 0, h = 0, f = 0;
				a = r[73] | 0, h = r[72] | 0;
				e: for (;;) {
					if (t = h + 2 | 0, h >>> 0 >= a >>> 0) {
						a = 10;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 96:
							a = 7;
							break e;
						case 36:
							if ((d[h + 4 >> 1] | 0) == 123) {
								a = 6;
								break e;
							}
							break;
						case 92: t = h + 4 | 0;
					}
					h = t;
				}
				(a | 0) == 6 ? (t = h + 4 | 0, r[72] = t, a = r[70] | 0, f = d[400] | 0, h = f & 65535, r[a + (h << 3) >> 2] = 4, d[400] = f + 1 << 16 >> 16, r[a + (h << 3) + 4 >> 2] = t) : (a | 0) == 7 ? (r[72] = t, h = r[70] | 0, f = (d[400] | 0) + -1 << 16 >> 16, d[400] = f, (r[h + ((f & 65535) << 3) >> 2] | 0) != 3 && $()) : (a | 0) == 10 && (r[72] = t, $());
			}
			u$1(Ue, "h");
			function k(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0;
				h = r[72] | 0;
				e: do {
					a = d[h >> 1] | 0;
					t: do
						if (a << 16 >> 16 != 47) if (t) {
							if (W(a) | 0) break;
							break e;
						} else {
							if (ie(a) | 0) break;
							break e;
						}
						else switch (d[h + 2 >> 1] | 0) {
							case 47:
								pe();
								break t;
							case 42:
								ge(t);
								break t;
							default:
								a = 47;
								break e;
						}
					while (!1);
					f = r[72] | 0, h = f + 2 | 0, r[72] = h;
				} while (f >>> 0 < (r[73] | 0) >>> 0);
				return a | 0;
			}
			u$1(k, "w");
			function he(t, a, h, f) {
				t = t | 0, a = a | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				w = r[67] | 0, r[67] = w + 36, m = r[63] | 0, r[(m | 0 ? m + 32 | 0 : 236) >> 2] = w, r[64] = m, r[63] = w, r[w + 8 >> 2] = t, (f | 0) == 2 ? (t = 3, m = h) : (m = (f | 0) == 1, t = m ? 1 : 2, m = m ? h + 2 | 0 : 0), r[w + 12 >> 2] = m, r[w + 28 >> 2] = t, r[w >> 2] = a, r[w + 4 >> 2] = h, r[w + 16 >> 2] = 0, r[w + 20 >> 2] = f, a = (f | 0) == 1, b[w + 24 >> 0] = a & 1, r[w + 32 >> 2] = 0, a | (f | 0) == 2 && (b[803] = 1);
			}
			u$1(he, "d");
			function N(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0;
				for (m = r[73] | 0, a = r[72] | 0;;) {
					if (f = a + 2 | 0, a >>> 0 >= m >>> 0) {
						a = 9;
						break;
					}
					if (h = d[f >> 1] | 0, h << 16 >> 16 == t << 16 >> 16) {
						a = 10;
						break;
					}
					if (h << 16 >> 16 == 92) h = a + 4 | 0, (d[h >> 1] | 0) == 13 ? (a = a + 6 | 0, a = (d[a >> 1] | 0) == 10 ? a : h) : a = h;
					else if (Be(h) | 0) {
						a = 9;
						break;
					} else a = f;
				}
				(a | 0) == 9 ? (r[72] = f, $()) : (a | 0) == 10 && (r[72] = f);
			}
			u$1(N, "v");
			function Te(t, a) {
				t = t | 0, a = a | 0;
				var h = 0, f = 0, m = 0, w = 0;
				return h = r[72] | 0, f = d[h >> 1] | 0, w = (t | 0) == (a | 0), m = w ? 0 : t, w = w ? 0 : a, f << 16 >> 16 == 97 && (r[72] = h + 4, h = k(1) | 0, t = r[72] | 0, X(h) | 0 ? (N(h), a = (r[72] | 0) + 2 | 0, r[72] = a) : (j(h) | 0, a = r[72] | 0), f = k(1) | 0, h = r[72] | 0), (h | 0) != (t | 0) && P(t, a, m, w), f | 0;
			}
			u$1(Te, "A");
			function _t() {
				var t = 0, a = 0, h = 0;
				h = r[73] | 0, a = r[72] | 0;
				e: for (;;) {
					if (t = a + 2 | 0, a >>> 0 >= h >>> 0) {
						a = 6;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 13:
						case 10:
							a = 6;
							break e;
						case 93:
							a = 7;
							break e;
						case 92: t = a + 4 | 0;
					}
					a = t;
				}
				return (a | 0) == 6 ? (r[72] = t, $(), t = 0) : (a | 0) == 7 && (r[72] = t, t = 93), t | 0;
			}
			u$1(_t, "C");
			function de() {
				var t = 0, a = 0, h = 0;
				e: for (;;) {
					if (t = r[72] | 0, a = t + 2 | 0, r[72] = a, t >>> 0 >= (r[73] | 0) >>> 0) {
						h = 7;
						break;
					}
					switch (d[a >> 1] | 0) {
						case 13:
						case 10:
							h = 7;
							break e;
						case 47: break e;
						case 91:
							_t() | 0;
							break;
						case 92: r[72] = t + 4;
					}
				}
				(h | 0) == 7 && $();
			}
			u$1(de, "g");
			function Et(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 62:
						t = (d[t + -2 >> 1] | 0) == 61;
						break;
					case 41:
					case 59:
						t = 1;
						break;
					case 104:
						t = O(t + -2 | 0, 210, 4) | 0;
						break;
					case 121:
						t = O(t + -2 | 0, 218, 6) | 0;
						break;
					case 101:
						t = O(t + -2 | 0, 230, 3) | 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(Et, "p");
			function ge(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0, w = 0;
				for (m = (r[72] | 0) + 2 | 0, r[72] = m, h = r[73] | 0; a = m + 2 | 0, !(m >>> 0 >= h >>> 0 || (f = d[a >> 1] | 0, !t && Be(f) | 0));) {
					if (f << 16 >> 16 == 42 && (d[m + 4 >> 1] | 0) == 47) {
						w = 8;
						break;
					}
					m = a;
				}
				(w | 0) == 8 && (r[72] = a, a = m + 4 | 0), r[72] = a;
			}
			u$1(ge, "y");
			function R(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				e: do
					if (!h) t = 0;
					else {
						for (; f = b[t >> 0] | 0, m = b[a >> 0] | 0, f << 24 >> 24 == m << 24 >> 24;) if (h = h + -1 | 0, h) t = t + 1 | 0, a = a + 1 | 0;
						else {
							t = 0;
							break e;
						}
						t = (f & 255) - (m & 255) | 0;
					}
				while (!1);
				return t | 0;
			}
			u$1(R, "m");
			function re(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33:
							t = 1;
							break;
						default: if ((t & -8) << 16 >> 16 == 40 | (t + -58 & 65535) < 6) t = 1;
						else {
							switch (t << 16 >> 16) {
								case 91:
								case 93:
								case 94:
									t = 1;
									break e;
							}
							t = (t + -123 & 65535) < 4;
						}
					}
				while (!1);
				return t | 0;
			}
			u$1(re, "I");
			function Lt(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33: break;
						default: if (!((t + -58 & 65535) < 6 | (t + -40 & 65535) < 7 & t << 16 >> 16 != 41)) {
							switch (t << 16 >> 16) {
								case 91:
								case 94: break e;
							}
							return t << 16 >> 16 != 125 & (t + -123 & 65535) < 4 | 0;
						}
					}
				while (!1);
				return 1;
			}
			u$1(Lt, "U");
			function De(t) {
				t = t | 0;
				var a = 0;
				a = d[t >> 1] | 0;
				e: do
					if ((a + -9 & 65535) >= 5) {
						switch (a << 16 >> 16) {
							case 160:
							case 32:
								a = 1;
								break e;
						}
						if (re(a) | 0) return a << 16 >> 16 != 46 | (me(t) | 0) | 0;
						a = 0;
					} else a = 1;
				while (!1);
				return a | 0;
			}
			u$1(De, "x");
			function Ot(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0;
				return h = E, E = E + 16 | 0, f = h, r[f >> 2] = 0, r[66] = t, a = r[3] | 0, m = a + (t << 1) | 0, t = m + 2 | 0, d[m >> 1] = 0, r[f >> 2] = t, r[67] = t, r[59] = 0, r[63] = 0, r[61] = 0, r[60] = 0, r[65] = 0, r[62] = 0, E = h, a | 0;
			}
			u$1(Ot, "S");
			function P(t, a, h, f) {
				t = t | 0, a = a | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				m = r[67] | 0, r[67] = m + 20, w = r[65] | 0, r[(w | 0 ? w + 16 | 0 : 240) >> 2] = m, r[65] = m, r[m >> 2] = t, r[m + 4 >> 2] = a, r[m + 8 >> 2] = h, r[m + 12 >> 2] = f, r[m + 16 >> 2] = 0, b[803] = 1;
			}
			u$1(P, "O");
			function O(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				return f = t + (0 - h << 1) | 0, m = f + 2 | 0, t = r[3] | 0, m >>> 0 >= t >>> 0 && !(R(m, a, h << 1) | 0) ? (m | 0) == (t | 0) ? t = 1 : t = De(f) | 0 : t = 0, t | 0;
			}
			u$1(O, "$");
			function At(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 107:
						t = O(t + -2 | 0, 150, 4) | 0;
						break;
					case 101:
						(d[t + -2 >> 1] | 0) == 117 ? t = O(t + -4 | 0, 122, 6) | 0 : t = 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(At, "j");
			function G(t, a) {
				t = t | 0, a = a | 0;
				var h = 0;
				return h = r[3] | 0, h >>> 0 <= t >>> 0 && (d[t >> 1] | 0) == a << 16 >> 16 ? (h | 0) == (t | 0) ? h = 1 : h = be(d[t + -2 >> 1] | 0) | 0 : h = 0, h | 0;
			}
			u$1(G, "B");
			function be(t) {
				t = t | 0;
				e: do
					if ((t + -9 & 65535) < 5) t = 1;
					else {
						switch (t << 16 >> 16) {
							case 32:
							case 160:
								t = 1;
								break e;
						}
						t = t << 16 >> 16 != 46 & (re(t) | 0);
					}
				while (!1);
				return t | 0;
			}
			u$1(be, "E");
			function pe() {
				var t = 0, a = 0, h = 0;
				t = r[73] | 0, h = r[72] | 0;
				e: for (; a = h + 2 | 0, !(h >>> 0 >= t >>> 0);) switch (d[a >> 1] | 0) {
					case 13:
					case 10: break e;
					default: h = a;
				}
				r[72] = a;
			}
			u$1(pe, "P");
			function j(t) {
				for (t = t | 0; !(W(t) | 0 || re(t) | 0);) if (t = (r[72] | 0) + 2 | 0, r[72] = t, t = d[t >> 1] | 0, !(t << 16 >> 16)) {
					t = 0;
					break;
				}
				return t | 0;
			}
			u$1(j, "q");
			function Rt() {
				var t = 0;
				switch (t = r[(r[61] | 0) + 20 >> 2] | 0, t | 0) {
					case 1:
						t = -1;
						break;
					case 2:
						t = -2;
						break;
					default: t = t - (r[3] | 0) >> 1;
				}
				return t | 0;
			}
			u$1(Rt, "z");
			function It(t) {
				return t = t | 0, !(O(t, 196, 5) | 0) && !(O(t, 44, 3) | 0) ? t = O(t, 206, 2) | 0 : t = 1, t | 0;
			}
			u$1(It, "D");
			function ie(t) {
				switch (t = t | 0, t << 16 >> 16) {
					case 160:
					case 32:
					case 12:
					case 11:
					case 9:
						t = 1;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(ie, "F");
			function me(t) {
				return t = t | 0, (d[t >> 1] | 0) == 46 && (d[t + -2 >> 1] | 0) == 46 ? t = (d[t + -4 >> 1] | 0) == 46 : t = 0, t | 0;
			}
			u$1(me, "G");
			function K(t) {
				return t = t | 0, (r[3] | 0) == (t | 0) ? t = 1 : t = De(t + -2 | 0) | 0, t | 0;
			}
			u$1(K, "H");
			function Nt() {
				var t = 0;
				return t = r[(r[62] | 0) + 12 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Nt, "J");
			function $t() {
				var t = 0;
				return t = r[(r[61] | 0) + 12 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1($t, "K");
			function Mt() {
				var t = 0;
				return t = r[(r[62] | 0) + 8 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Mt, "L");
			function jt() {
				var t = 0;
				return t = r[(r[61] | 0) + 16 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(jt, "M");
			function Ut() {
				var t = 0;
				return t = r[(r[61] | 0) + 4 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Ut, "N");
			function Tt() {
				var t = 0;
				return t = r[61] | 0, t = r[(t | 0 ? t + 32 | 0 : 236) >> 2] | 0, r[61] = t, (t | 0) != 0 | 0;
			}
			u$1(Tt, "Q");
			function Dt() {
				var t = 0;
				return t = r[62] | 0, t = r[(t | 0 ? t + 16 | 0 : 240) >> 2] | 0, r[62] = t, (t | 0) != 0 | 0;
			}
			u$1(Dt, "R");
			function $() {
				b[802] = 1, r[68] = (r[72] | 0) - (r[3] | 0) >> 1, r[72] = (r[73] | 0) + 2;
			}
			u$1($, "T");
			function W(t) {
				return t = t | 0, (t | 128) << 16 >> 16 == 160 | (t + -9 & 65535) < 5 | 0;
			}
			u$1(W, "V");
			function X(t) {
				return t = t | 0, t << 16 >> 16 == 39 | t << 16 >> 16 == 34 | 0;
			}
			u$1(X, "W");
			function Bt() {
				return (r[(r[61] | 0) + 8 >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Bt, "X");
			function Ft() {
				return (r[(r[62] | 0) + 4 >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Ft, "Y");
			function Be(t) {
				return t = t | 0, t << 16 >> 16 == 13 | t << 16 >> 16 == 10 | 0;
			}
			u$1(Be, "Z");
			function Pt() {
				return (r[r[61] >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Pt, "_");
			function Wt() {
				return (r[r[62] >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Wt, "ee");
			function zt() {
				return S[(r[61] | 0) + 24 >> 0] | 0;
			}
			u$1(zt, "ae");
			function Jt(t) {
				t = t | 0, r[3] = t;
			}
			u$1(Jt, "re");
			function qt() {
				return r[(r[61] | 0) + 28 >> 2] | 0;
			}
			u$1(qt, "ie");
			function Ht() {
				return (b[803] | 0) != 0 | 0;
			}
			u$1(Ht, "se");
			function Gt() {
				return (b[804] | 0) != 0 | 0;
			}
			u$1(Gt, "fe");
			function Kt() {
				return r[68] | 0;
			}
			u$1(Kt, "te");
			function Xt(t) {
				return t = t | 0, E = t + 992 + 15 & -16, 992;
			}
			return u$1(Xt, "ce"), {
				su: Xt,
				ai: jt,
				e: Kt,
				ee: Ft,
				ele: Nt,
				els: Mt,
				es: Wt,
				f: Gt,
				id: Rt,
				ie: Ut,
				ip: zt,
				is: Pt,
				it: qt,
				ms: Ht,
				p: I,
				re: Dt,
				ri: Tt,
				sa: Ot,
				se: $t,
				ses: Jt,
				ss: Bt
			};
		}(typeof self < "u" ? self : global, {}, se$1), xe$1 = _$1.su(Y$1 - (2 << 17));
	}
	const i = L$1.length + 1;
	_$1.ses(xe$1), _$1.sa(i - 1), Pe$1(L$1, new Uint16Array(se$1, xe$1, i)), _$1.p() || (y = _$1.e(), T$2());
	const o = [], c = [];
	for (; _$1.ri();) {
		const l = _$1.is(), p = _$1.ie(), g = _$1.ai(), b = _$1.id(), d = _$1.ss(), r = _$1.se(), S = _$1.it();
		let A;
		_$1.ip() && (A = _e$1(b === -1 ? l : l + 1, L$1.charCodeAt(b === -1 ? l - 1 : l))), o.push({
			t: S,
			n: A,
			s: l,
			e: p,
			ss: d,
			se: r,
			d: b,
			a: g
		});
	}
	for (; _$1.re();) {
		const l = _$1.es(), p = _$1.ee(), g = _$1.els(), b = _$1.ele(), d = L$1.charCodeAt(l), r = g >= 0 ? L$1.charCodeAt(g) : -1;
		c.push({
			s: l,
			e: p,
			ls: g,
			le: b,
			n: d === 34 || d === 39 ? _e$1(l + 1, d) : L$1.slice(l, p),
			ln: g < 0 ? void 0 : r === 34 || r === 39 ? _e$1(g + 1, r) : L$1.slice(g, b)
		});
	}
	return [
		o,
		c,
		!!_$1.f(),
		!!_$1.ms()
	];
}
u$1(an$1, "parse");
function _e$1(s, e) {
	y = s;
	let n = "", i = y;
	for (;;) {
		y >= L$1.length && T$2();
		const o = L$1.charCodeAt(y);
		if (o === e) break;
		o === 92 ? (n += L$1.slice(i, y), n += cn$1(), i = y) : (o === 8232 || o === 8233 || ze$1(o) && T$2(), ++y);
	}
	return n += L$1.slice(i, y++), n;
}
u$1(_e$1, "b");
function cn$1() {
	let s = L$1.charCodeAt(++y);
	switch (++y, s) {
		case 110: return `
`;
		case 114: return "\r";
		case 120: return String.fromCharCode(Ee$2(2));
		case 117: return function() {
			const e = L$1.charCodeAt(y);
			let n;
			return e === 123 ? (++y, n = Ee$2(L$1.indexOf("}", y) - y), ++y, n > 1114111 && T$2()) : n = Ee$2(4), n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)));
		}();
		case 116: return "	";
		case 98: return "\b";
		case 118: return "\v";
		case 102: return "\f";
		case 13: L$1.charCodeAt(y) === 10 && ++y;
		case 10: return "";
		case 56:
		case 57: T$2();
		default:
			if (s >= 48 && s <= 55) {
				let e = L$1.substr(y - 1, 3).match(/^[0-7]+/)[0], n = parseInt(e, 8);
				return n > 255 && (e = e.slice(0, -1), n = parseInt(e, 8)), y += e.length - 1, s = L$1.charCodeAt(y), e === "0" && s !== 56 && s !== 57 || T$2(), String.fromCharCode(n);
			}
			return ze$1(s) ? "" : String.fromCharCode(s);
	}
}
u$1(cn$1, "k");
function Ee$2(s) {
	const e = y;
	let n = 0, i = 0;
	for (let o = 0; o < s; ++o, ++y) {
		let c, l = L$1.charCodeAt(y);
		if (l !== 95) {
			if (l >= 97) c = l - 97 + 10;
			else if (l >= 65) c = l - 65 + 10;
			else {
				if (!(l >= 48 && l <= 57)) break;
				c = l - 48;
			}
			if (c >= 16) break;
			i = l, n = 16 * n + c;
		} else i !== 95 && o !== 0 || T$2(), i = l;
	}
	return i !== 95 && y - e === s || T$2(), n;
}
u$1(Ee$2, "l");
function ze$1(s) {
	return s === 13 || s === 10;
}
u$1(ze$1, "u");
function T$2() {
	throw Object.assign(Error(`Parse error ${We$2}:${L$1.slice(0, y).split(`
`).length}:${y - L$1.lastIndexOf(`
`, y - 1)}`), { idx: y });
}
u$1(T$2, "o");
let Le$2;
typeof WebAssembly < "u" && (async () => {
	const { parse: s, init: e } = await import("./lexer-DQCqS3nf-DbXj0fds.js");
	await e, Le$2 = s;
})();
const oe$1 = u$1((s, e) => Le$2 ? Le$2(s, e) : an$1(s, e), "parseEsm");
const ln$1 = u$1((s) => {
	if (!s.includes("import") && !s.includes("export")) return !1;
	try {
		return oe$1(s)[3];
	} catch {
		return !0;
	}
}, "isESM");
var un$1 = 44;
var fn$1 = 59;
var Je$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var qe$2 = /* @__PURE__ */ new Uint8Array(64);
var hn$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < Je$2.length; s++) {
	const e = Je$2.charCodeAt(s);
	qe$2[s] = e, hn$1[e] = s;
}
function Q$1(s, e, n) {
	let i = e - n;
	i = i < 0 ? -i << 1 | 1 : i << 1;
	do {
		let o = i & 31;
		i >>>= 5, i > 0 && (o |= 32), s.write(qe$2[o]);
	} while (i > 0);
	return e;
}
u$1(Q$1, "encodeInteger$1");
var He$1 = 16384;
var Ge$1 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let n = 0; n < s.length; n++) e += String.fromCharCode(s[n]);
	return e;
} };
var dn$1 = class {
	static {
		u$1(this, "StringWriter");
	}
	constructor() {
		this.pos = 0, this.out = "", this.buffer = new Uint8Array(He$1);
	}
	write(s) {
		const { buffer: e } = this;
		e[this.pos++] = s, this.pos === He$1 && (this.out += Ge$1.decode(e), this.pos = 0);
	}
	flush() {
		const { buffer: s, out: e, pos: n } = this;
		return n > 0 ? e + Ge$1.decode(s.subarray(0, n)) : e;
	}
};
function gn$1(s) {
	const e = new dn$1();
	let n = 0, i = 0, o = 0, c = 0;
	for (let l = 0; l < s.length; l++) {
		const p = s[l];
		if (l > 0 && e.write(fn$1), p.length === 0) continue;
		let g = 0;
		for (let b = 0; b < p.length; b++) {
			const d = p[b];
			b > 0 && e.write(un$1), g = Q$1(e, d[0], g), d.length !== 1 && (n = Q$1(e, d[1], n), i = Q$1(e, d[2], i), o = Q$1(e, d[3], o), d.length !== 4 && (c = Q$1(e, d[4], c)));
		}
	}
	return e.flush();
}
u$1(gn$1, "encode$1");
var fe$2 = class fe$2 {
	static {
		u$1(this, "BitSet");
	}
	constructor(e) {
		this.bits = e instanceof fe$2 ? e.bits.slice() : [];
	}
	add(e) {
		this.bits[e >> 5] |= 1 << (e & 31);
	}
	has(e) {
		return !!(this.bits[e >> 5] & 1 << (e & 31));
	}
};
var ne$1 = class ne$1 {
	static {
		u$1(this, "Chunk");
	}
	constructor(e, n, i) {
		this.start = e, this.end = n, this.original = i, this.intro = "", this.outro = "", this.content = i, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
	}
	appendLeft(e) {
		this.outro += e;
	}
	appendRight(e) {
		this.intro = this.intro + e;
	}
	clone() {
		const e = new ne$1(this.start, this.end, this.original);
		return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
	}
	contains(e) {
		return this.start < e && e < this.end;
	}
	eachNext(e) {
		let n = this;
		for (; n;) e(n), n = n.next;
	}
	eachPrevious(e) {
		let n = this;
		for (; n;) e(n), n = n.previous;
	}
	edit(e, n, i) {
		return this.content = e, i || (this.intro = "", this.outro = ""), this.storeName = n, this.edited = !0, this;
	}
	prependLeft(e) {
		this.outro = e + this.outro;
	}
	prependRight(e) {
		this.intro = e + this.intro;
	}
	reset() {
		this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
	}
	split(e) {
		const n = e - this.start, i = this.original.slice(0, n), o = this.original.slice(n);
		this.original = i;
		const c = new ne$1(e, this.end, o);
		return c.outro = this.outro, this.outro = "", this.end = e, this.edited ? (c.edit("", !1), this.content = "") : this.content = i, c.next = this.next, c.next && (c.next.previous = c), c.previous = this, this.next = c, c;
	}
	toString() {
		return this.intro + this.content + this.outro;
	}
	trimEnd(e) {
		if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
		const n = this.content.replace(e, "");
		if (n.length) return n !== this.content && (this.split(this.start + n.length).edit("", void 0, !0), this.edited && this.edit(n, this.storeName, !0)), !0;
		if (this.edit("", void 0, !0), this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
	}
	trimStart(e) {
		if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
		const n = this.content.replace(e, "");
		if (n.length) {
			if (n !== this.content) {
				const i = this.split(this.end - n.length);
				this.edited && i.edit(n, this.storeName, !0), this.edit("", void 0, !0);
			}
			return !0;
		} else if (this.edit("", void 0, !0), this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
	}
};
function bn$1() {
	return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (s) => globalThis.btoa(unescape(encodeURIComponent(s))) : typeof Buffer == "function" ? (s) => Buffer.from(s, "utf-8").toString("base64") : () => {
		throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
	};
}
u$1(bn$1, "getBtoa");
const pn$1 = bn$1();
let mn$1 = class {
	static {
		u$1(this, "SourceMap");
	}
	constructor(e) {
		this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = gn$1(e.mappings), typeof e.x_google_ignoreList < "u" && (this.x_google_ignoreList = e.x_google_ignoreList), typeof e.debugId < "u" && (this.debugId = e.debugId);
	}
	toString() {
		return JSON.stringify(this);
	}
	toUrl() {
		return "data:application/json;charset=utf-8;base64," + pn$1(this.toString());
	}
};
function wn(s) {
	const e = s.split(`
`), n = e.filter((c) => /^\t+/.test(c)), i = e.filter((c) => /^ {2,}/.test(c));
	if (n.length === 0 && i.length === 0) return null;
	if (n.length >= i.length) return "	";
	const o = i.reduce((c, l) => {
		const p = /^ +/.exec(l)[0].length;
		return Math.min(p, c);
	}, 1 / 0);
	return new Array(o + 1).join(" ");
}
u$1(wn, "guessIndent");
function kn$1(s, e) {
	const n = s.split(/[/\\]/), i = e.split(/[/\\]/);
	for (n.pop(); n[0] === i[0];) n.shift(), i.shift();
	if (n.length) {
		let o = n.length;
		for (; o--;) n[o] = "..";
	}
	return n.concat(i).join("/");
}
u$1(kn$1, "getRelativePath");
const yn$1 = Object.prototype.toString;
function Cn$1(s) {
	return yn$1.call(s) === "[object Object]";
}
u$1(Cn$1, "isObject");
function Ke$1(s) {
	const e = s.split(`
`), n = [];
	for (let i = 0, o = 0; i < e.length; i++) n.push(o), o += e[i].length + 1;
	return u$1(function(o) {
		let c = 0, l = n.length;
		for (; c < l;) {
			const b = c + l >> 1;
			o < n[b] ? l = b : c = b + 1;
		}
		const p = c - 1;
		return {
			line: p,
			column: o - n[p]
		};
	}, "locate");
}
u$1(Ke$1, "getLocator");
const Sn$1 = /\w/;
var vn$1 = class {
	static {
		u$1(this, "Mappings");
	}
	constructor(e) {
		this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
	}
	addEdit(e, n, i, o) {
		if (n.length) {
			const c = n.length - 1;
			let l = n.indexOf(`
`, 0), p = -1;
			for (; l >= 0 && c > l;) {
				const b = [
					this.generatedCodeColumn,
					e,
					i.line,
					i.column
				];
				o >= 0 && b.push(o), this.rawSegments.push(b), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = l, l = n.indexOf(`
`, l + 1);
			}
			const g = [
				this.generatedCodeColumn,
				e,
				i.line,
				i.column
			];
			o >= 0 && g.push(o), this.rawSegments.push(g), this.advance(n.slice(p + 1));
		} else this.pending && (this.rawSegments.push(this.pending), this.advance(n));
		this.pending = null;
	}
	addUneditedChunk(e, n, i, o, c) {
		let l = n.start, p = !0, g = !1;
		for (; l < n.end;) {
			if (i[l] === `
`) o.line += 1, o.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = !0, g = !1;
			else {
				if (this.hires || p || c.has(l)) {
					const b = [
						this.generatedCodeColumn,
						e,
						o.line,
						o.column
					];
					this.hires === "boundary" ? Sn$1.test(i[l]) ? g || (this.rawSegments.push(b), g = !0) : (this.rawSegments.push(b), g = !1) : this.rawSegments.push(b);
				}
				o.column += 1, this.generatedCodeColumn += 1, p = !1;
			}
			l += 1;
		}
		this.pending = null;
	}
	advance(e) {
		if (!e) return;
		const n = e.split(`
`);
		if (n.length > 1) {
			for (let i = 0; i < n.length - 1; i++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
			this.generatedCodeColumn = 0;
		}
		this.generatedCodeColumn += n[n.length - 1].length;
	}
};
const Z = `
`;
const J$2 = {
	insertLeft: !1,
	insertRight: !1,
	storeName: !1
};
var je$2 = class je$2 {
	static {
		u$1(this, "MagicString");
	}
	constructor(e, n = {}) {
		const i = new ne$1(0, e.length, e);
		Object.defineProperties(this, {
			original: {
				writable: !0,
				value: e
			},
			outro: {
				writable: !0,
				value: ""
			},
			intro: {
				writable: !0,
				value: ""
			},
			firstChunk: {
				writable: !0,
				value: i
			},
			lastChunk: {
				writable: !0,
				value: i
			},
			lastSearchedChunk: {
				writable: !0,
				value: i
			},
			byStart: {
				writable: !0,
				value: {}
			},
			byEnd: {
				writable: !0,
				value: {}
			},
			filename: {
				writable: !0,
				value: n.filename
			},
			indentExclusionRanges: {
				writable: !0,
				value: n.indentExclusionRanges
			},
			sourcemapLocations: {
				writable: !0,
				value: new fe$2()
			},
			storedNames: {
				writable: !0,
				value: {}
			},
			indentStr: {
				writable: !0,
				value: void 0
			},
			ignoreList: {
				writable: !0,
				value: n.ignoreList
			},
			offset: {
				writable: !0,
				value: n.offset || 0
			}
		}), this.byStart[0] = i, this.byEnd[e.length] = i;
	}
	addSourcemapLocation(e) {
		this.sourcemapLocations.add(e);
	}
	append(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.outro += e, this;
	}
	appendLeft(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.appendLeft(n) : this.intro += n, this;
	}
	appendRight(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.appendRight(n) : this.outro += n, this;
	}
	clone() {
		const e = new je$2(this.original, {
			filename: this.filename,
			offset: this.offset
		});
		let n = this.firstChunk, i = e.firstChunk = e.lastSearchedChunk = n.clone();
		for (; n;) {
			e.byStart[i.start] = i, e.byEnd[i.end] = i;
			const o = n.next, c = o && o.clone();
			c && (i.next = c, c.previous = i, i = c), n = o;
		}
		return e.lastChunk = i, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new fe$2(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
	}
	generateDecodedMap(e) {
		e = e || {};
		const n = 0, i = Object.keys(this.storedNames), o = new vn$1(e.hires), c = Ke$1(this.original);
		return this.intro && o.advance(this.intro), this.firstChunk.eachNext((l) => {
			const p = c(l.start);
			l.intro.length && o.advance(l.intro), l.edited ? o.addEdit(n, l.content, p, l.storeName ? i.indexOf(l.original) : -1) : o.addUneditedChunk(n, l, this.original, p, this.sourcemapLocations), l.outro.length && o.advance(l.outro);
		}), {
			file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
			sources: [e.source ? kn$1(e.file || "", e.source) : e.file || ""],
			sourcesContent: e.includeContent ? [this.original] : void 0,
			names: i,
			mappings: o.raw,
			x_google_ignoreList: this.ignoreList ? [n] : void 0
		};
	}
	generateMap(e) {
		return new mn$1(this.generateDecodedMap(e));
	}
	_ensureindentStr() {
		this.indentStr === void 0 && (this.indentStr = wn(this.original));
	}
	_getRawIndentString() {
		return this._ensureindentStr(), this.indentStr;
	}
	getIndentString() {
		return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
	}
	indent(e, n) {
		const i = /^[^\r\n]/gm;
		if (Cn$1(e) && (n = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
		n = n || {};
		const o = {};
		n.exclude && (typeof n.exclude[0] == "number" ? [n.exclude] : n.exclude).forEach((d) => {
			for (let r = d[0]; r < d[1]; r += 1) o[r] = !0;
		});
		let c = n.indentStart !== !1;
		const l = u$1((b) => c ? `${e}${b}` : (c = !0, b), "replacer");
		this.intro = this.intro.replace(i, l);
		let p = 0, g = this.firstChunk;
		for (; g;) {
			const b = g.end;
			if (g.edited) o[p] || (g.content = g.content.replace(i, l), g.content.length && (c = g.content[g.content.length - 1] === `
`));
			else for (p = g.start; p < b;) {
				if (!o[p]) {
					const d = this.original[p];
					d === `
` ? c = !0 : d !== "\r" && c && (c = !1, p === g.start || (this._splitChunk(g, p), g = g.next), g.prependRight(e));
				}
				p += 1;
			}
			p = g.end, g = g.next;
		}
		return this.outro = this.outro.replace(i, l), this;
	}
	insert() {
		throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
	}
	insertLeft(e, n) {
		return J$2.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), J$2.insertLeft = !0), this.appendLeft(e, n);
	}
	insertRight(e, n) {
		return J$2.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), J$2.insertRight = !0), this.prependRight(e, n);
	}
	move(e, n, i) {
		if (e = e + this.offset, n = n + this.offset, i = i + this.offset, i >= e && i <= n) throw new Error("Cannot move a selection inside itself");
		this._split(e), this._split(n), this._split(i);
		const o = this.byStart[e], c = this.byEnd[n], l = o.previous, p = c.next, g = this.byStart[i];
		if (!g && c === this.lastChunk) return this;
		const b = g ? g.previous : this.lastChunk;
		return l && (l.next = p), p && (p.previous = l), b && (b.next = o), g && (g.previous = c), o.previous || (this.firstChunk = c.next), c.next || (this.lastChunk = o.previous, this.lastChunk.next = null), o.previous = b, c.next = g || null, b || (this.firstChunk = o), g || (this.lastChunk = c), this;
	}
	overwrite(e, n, i, o) {
		return o = o || {}, this.update(e, n, i, {
			...o,
			overwrite: !o.contentOnly
		});
	}
	update(e, n, i, o) {
		if (e = e + this.offset, n = n + this.offset, typeof i != "string") throw new TypeError("replacement content must be a string");
		if (this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (n > this.original.length) throw new Error("end is out of bounds");
		if (e === n) throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");
		this._split(e), this._split(n), o === !0 && (J$2.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), J$2.storeName = !0), o = { storeName: !0 });
		const c = o !== void 0 ? o.storeName : !1, l = o !== void 0 ? o.overwrite : !1;
		if (c) {
			const b = this.original.slice(e, n);
			Object.defineProperty(this.storedNames, b, {
				writable: !0,
				value: !0,
				enumerable: !0
			});
		}
		const p = this.byStart[e], g = this.byEnd[n];
		if (p) {
			let b = p;
			for (; b !== g;) {
				if (b.next !== this.byStart[b.end]) throw new Error("Cannot overwrite across a split point");
				b = b.next, b.edit("", !1);
			}
			p.edit(i, c, !l);
		} else {
			const b = new ne$1(e, n, "").edit(i, c);
			g.next = b, b.previous = g;
		}
		return this;
	}
	prepend(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.intro = e + this.intro, this;
	}
	prependLeft(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.prependLeft(n) : this.intro = n + this.intro, this;
	}
	prependRight(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.prependRight(n) : this.outro = n + this.outro, this;
	}
	remove(e, n) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (e === n) return this;
		if (e < 0 || n > this.original.length) throw new Error("Character is out of bounds");
		if (e > n) throw new Error("end must be greater than start");
		this._split(e), this._split(n);
		let i = this.byStart[e];
		for (; i;) i.intro = "", i.outro = "", i.edit(""), i = n > i.end ? this.byStart[i.end] : null;
		return this;
	}
	reset(e, n) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (e === n) return this;
		if (e < 0 || n > this.original.length) throw new Error("Character is out of bounds");
		if (e > n) throw new Error("end must be greater than start");
		this._split(e), this._split(n);
		let i = this.byStart[e];
		for (; i;) i.reset(), i = n > i.end ? this.byStart[i.end] : null;
		return this;
	}
	lastChar() {
		if (this.outro.length) return this.outro[this.outro.length - 1];
		let e = this.lastChunk;
		do {
			if (e.outro.length) return e.outro[e.outro.length - 1];
			if (e.content.length) return e.content[e.content.length - 1];
			if (e.intro.length) return e.intro[e.intro.length - 1];
		} while (e = e.previous);
		return this.intro.length ? this.intro[this.intro.length - 1] : "";
	}
	lastLine() {
		let e = this.outro.lastIndexOf(Z);
		if (e !== -1) return this.outro.substr(e + 1);
		let n = this.outro, i = this.lastChunk;
		do {
			if (i.outro.length > 0) {
				if (e = i.outro.lastIndexOf(Z), e !== -1) return i.outro.substr(e + 1) + n;
				n = i.outro + n;
			}
			if (i.content.length > 0) {
				if (e = i.content.lastIndexOf(Z), e !== -1) return i.content.substr(e + 1) + n;
				n = i.content + n;
			}
			if (i.intro.length > 0) {
				if (e = i.intro.lastIndexOf(Z), e !== -1) return i.intro.substr(e + 1) + n;
				n = i.intro + n;
			}
		} while (i = i.previous);
		return e = this.intro.lastIndexOf(Z), e !== -1 ? this.intro.substr(e + 1) + n : this.intro + n;
	}
	slice(e = 0, n = this.original.length - this.offset) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		let i = "", o = this.firstChunk;
		for (; o && (o.start > e || o.end <= e);) {
			if (o.start < n && o.end >= n) return i;
			o = o.next;
		}
		if (o && o.edited && o.start !== e) throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
		const c = o;
		for (; o;) {
			o.intro && (c !== o || o.start === e) && (i += o.intro);
			const l = o.start < n && o.end >= n;
			if (l && o.edited && o.end !== n) throw new Error(`Cannot use replaced character ${n} as slice end anchor.`);
			const p = c === o ? e - o.start : 0, g = l ? o.content.length + n - o.end : o.content.length;
			if (i += o.content.slice(p, g), o.outro && (!l || o.end === n) && (i += o.outro), l) break;
			o = o.next;
		}
		return i;
	}
	snip(e, n) {
		const i = this.clone();
		return i.remove(0, e), i.remove(n, i.original.length), i;
	}
	_split(e) {
		if (this.byStart[e] || this.byEnd[e]) return;
		let n = this.lastSearchedChunk, i = n;
		const o = e > n.end;
		for (; n;) {
			if (n.contains(e)) return this._splitChunk(n, e);
			if (n = o ? this.byStart[n.end] : this.byEnd[n.start], n === i) return;
			i = n;
		}
	}
	_splitChunk(e, n) {
		if (e.edited && e.content.length) {
			const o = Ke$1(this.original)(n);
			throw new Error(`Cannot split a chunk that has already been edited (${o.line}:${o.column} \u2013 "${e.original}")`);
		}
		const i = e.split(n);
		return this.byEnd[n] = e, this.byStart[n] = i, this.byEnd[i.end] = i, e === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = e, !0;
	}
	toString() {
		let e = this.intro, n = this.firstChunk;
		for (; n;) e += n.toString(), n = n.next;
		return e + this.outro;
	}
	isEmpty() {
		let e = this.firstChunk;
		do
			if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim()) return !1;
		while (e = e.next);
		return !0;
	}
	length() {
		let e = this.firstChunk, n = 0;
		do
			n += e.intro.length + e.content.length + e.outro.length;
		while (e = e.next);
		return n;
	}
	trimLines() {
		return this.trim("[\\r\\n]");
	}
	trim(e) {
		return this.trimStart(e).trimEnd(e);
	}
	trimEndAborted(e) {
		const n = new RegExp((e || "\\s") + "+$");
		if (this.outro = this.outro.replace(n, ""), this.outro.length) return !0;
		let i = this.lastChunk;
		do {
			const o = i.end, c = i.trimEnd(n);
			if (i.end !== o && (this.lastChunk === i && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), c) return !0;
			i = i.previous;
		} while (i);
		return !1;
	}
	trimEnd(e) {
		return this.trimEndAborted(e), this;
	}
	trimStartAborted(e) {
		const n = new RegExp("^" + (e || "\\s") + "+");
		if (this.intro = this.intro.replace(n, ""), this.intro.length) return !0;
		let i = this.firstChunk;
		do {
			const o = i.end, c = i.trimStart(n);
			if (i.end !== o && (i === this.lastChunk && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), c) return !0;
			i = i.next;
		} while (i);
		return !1;
	}
	trimStart(e) {
		return this.trimStartAborted(e), this;
	}
	hasChanged() {
		return this.original !== this.toString();
	}
	_replaceRegexp(e, n) {
		function i(c, l) {
			return typeof n == "string" ? n.replace(/\$(\$|&|\d+)/g, (p, g) => g === "$" ? "$" : g === "&" ? c[0] : +g < c.length ? c[+g] : `$${g}`) : n(...c, c.index, l, c.groups);
		}
		u$1(i, "getReplacement");
		function o(c, l) {
			let p;
			const g = [];
			for (; p = c.exec(l);) g.push(p);
			return g;
		}
		if (u$1(o, "matchAll"), e.global) o(e, this.original).forEach((l) => {
			if (l.index != null) {
				const p = i(l, this.original);
				p !== l[0] && this.overwrite(l.index, l.index + l[0].length, p);
			}
		});
		else {
			const c = this.original.match(e);
			if (c && c.index != null) {
				const l = i(c, this.original);
				l !== c[0] && this.overwrite(c.index, c.index + c[0].length, l);
			}
		}
		return this;
	}
	_replaceString(e, n) {
		const { original: i } = this, o = i.indexOf(e);
		return o !== -1 && this.overwrite(o, o + e.length, n), this;
	}
	replace(e, n) {
		return typeof e == "string" ? this._replaceString(e, n) : this._replaceRegexp(e, n);
	}
	_replaceAllString(e, n) {
		const { original: i } = this, o = e.length;
		for (let c = i.indexOf(e); c !== -1; c = i.indexOf(e, c + o)) i.slice(c, c + o) !== n && this.overwrite(c, c + o, n);
		return this;
	}
	replaceAll(e, n) {
		if (typeof e == "string") return this._replaceAllString(e, n);
		if (!e.global) throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
		return this._replaceRegexp(e, n);
	}
};
const Oe$2 = "2";
const _n$1 = `.then(${((s) => {
	const e = "default";
	return s[e] && typeof s[e] == "object" && "__esModule" in s[e] ? s[e] : s;
}).toString()})`;
const ae$1 = u$1((s, e, n) => {
	if (n) {
		if (!e.includes("import(")) return;
	} else if (!e.includes("import")) return;
	const o = oe$1(e, s)[0].filter((g) => g.d > -1);
	if (o.length === 0) return;
	const c = new je$2(e);
	for (const g of o) c.appendRight(g.se, _n$1);
	return {
		code: c.toString(),
		map: c.generateMap({
			source: s,
			includeContent: !1,
			hires: "boundary"
		})
	};
}, "transformDynamicImport");
const Xe$1 = u$1((s) => {
	try {
		const e = fs.readFileSync(s, "utf8");
		return JSON.parse(e);
	} catch {}
}, "readJsonFile");
const ce$2 = u$1(() => {}, "noop");
const Ae$1 = u$1(() => Math.floor(Date.now() / 1e8), "getTime");
const En$1 = /^(\d+)-[^-]+$/;
const Ye$1 = 7;
const Ln$1 = 64;
var On$1 = class extends Map {
	static {
		u$1(this, "FileCache");
	}
	cacheDirectory;
	oldCacheDirectory;
	initialized = !1;
	constructor(e = e$2, n = path.join(o.tmpdir(), "tsx")) {
		super(), this.cacheDirectory = e, this.oldCacheDirectory = n;
	}
	initialize() {
		this.initialized || (fs.mkdirSync(this.cacheDirectory, { recursive: !0 }), this.initialized = !0, setImmediate(() => {
			this.expireDiskCache().catch(ce$2), this.removeOldCacheDirectory().catch(ce$2);
		}).unref());
	}
	get(e) {
		const n = super.get(e);
		if (n) return n;
		const i = Ae$1();
		for (let o = 0; o <= Ye$1; o += 1) {
			const c = Xe$1(path.join(this.cacheDirectory, `${i - o}-${e}`));
			if (c) return super.set(e, c), c;
		}
	}
	set(e, n) {
		if (super.set(e, n), n) {
			const o = `${Ae$1()}-${e}`;
			this.initialize(), fs.promises.writeFile(path.join(this.cacheDirectory, o), JSON.stringify(n)).catch(ce$2);
		}
		return this;
	}
	async expireDiskCache() {
		this.initialize();
		const e = Ae$1(), n = await fs.promises.opendir(this.cacheDirectory), i = [];
		let o = 0;
		for await (const c of n) {
			const l = En$1.exec(c.name);
			if (l) {
				const p = Number(l[1]);
				Number.isSafeInteger(p) && e - p > Ye$1 && i.push(fs.promises.unlink(path.join(this.cacheDirectory, c.name)).catch(ce$2));
			}
			o += 1, o === Ln$1 && (await Promise.all(i), i.length = 0, o = 0);
		}
		await Promise.all(i);
	}
	async removeOldCacheDirectory() {
		try {
			await fs.promises.access(this.oldCacheDirectory).then(() => !0) && ("rm" in fs.promises ? await fs.promises.rm(this.oldCacheDirectory, {
				recursive: !0,
				force: !0
			}) : await fs.promises.rmdir(this.oldCacheDirectory, { recursive: !0 }));
		} catch {}
	}
};
var q = process.env.TSX_DISABLE_CACHE ? /* @__PURE__ */ new Map() : new On$1();
const Qe$1 = 44;
const An$1 = 59;
const Ze$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const Ve$1 = /* @__PURE__ */ new Uint8Array(64);
const et$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < 64; s++) {
	const e = Ze$1.charCodeAt(s);
	Ve$1[s] = e, et$1[e] = s;
}
const Re$2 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let n = 0; n < s.length; n++) e += String.fromCharCode(s[n]);
	return e;
} };
function Rn$1(s) {
	const e = /* @__PURE__ */ new Int32Array(5), n = [];
	let i = 0;
	do {
		const o = In$1(s, i), c = [];
		let l = !0, p = 0;
		e[0] = 0;
		for (let g = i; g < o; g++) {
			let b;
			g = V$2(s, g, e, 0);
			const d = e[0];
			d < p && (l = !1), p = d, tt$1(s, g, o) ? (g = V$2(s, g, e, 1), g = V$2(s, g, e, 2), g = V$2(s, g, e, 3), tt$1(s, g, o) ? (g = V$2(s, g, e, 4), b = [
				d,
				e[1],
				e[2],
				e[3],
				e[4]
			]) : b = [
				d,
				e[1],
				e[2],
				e[3]
			]) : b = [d], c.push(b);
		}
		l || Nn$1(c), n.push(c), i = o + 1;
	} while (i <= s.length);
	return n;
}
u$1(Rn$1, "decode");
function In$1(s, e) {
	const n = s.indexOf(";", e);
	return n === -1 ? s.length : n;
}
u$1(In$1, "indexOf");
function V$2(s, e, n, i) {
	let o = 0, c = 0, l = 0;
	do {
		const g = s.charCodeAt(e++);
		l = et$1[g], o |= (l & 31) << c, c += 5;
	} while (l & 32);
	const p = o & 1;
	return o >>>= 1, p && (o = -2147483648 | -o), n[i] += o, e;
}
u$1(V$2, "decodeInteger");
function tt$1(s, e, n) {
	return e >= n ? !1 : s.charCodeAt(e) !== Qe$1;
}
u$1(tt$1, "hasMoreVlq");
function Nn$1(s) {
	s.sort($n$1);
}
u$1(Nn$1, "sort");
function $n$1(s, e) {
	return s[0] - e[0];
}
u$1($n$1, "sortComparator$1");
function Mn$1(s) {
	const e = /* @__PURE__ */ new Int32Array(5), n = 16384, i = 16348, o = new Uint8Array(n), c = o.subarray(0, i);
	let l = 0, p = "";
	for (let g = 0; g < s.length; g++) {
		const b = s[g];
		if (g > 0 && (l === n && (p += Re$2.decode(o), l = 0), o[l++] = An$1), b.length !== 0) {
			e[0] = 0;
			for (let d = 0; d < b.length; d++) {
				const r = b[d];
				l > i && (p += Re$2.decode(c), o.copyWithin(0, i, l), l -= i), d > 0 && (o[l++] = Qe$1), l = ee(o, l, e, r, 0), r.length !== 1 && (l = ee(o, l, e, r, 1), l = ee(o, l, e, r, 2), l = ee(o, l, e, r, 3), r.length !== 4 && (l = ee(o, l, e, r, 4)));
			}
		}
	}
	return p + Re$2.decode(o.subarray(0, l));
}
u$1(Mn$1, "encode");
function ee(s, e, n, i, o) {
	const c = i[o];
	let l = c - n[o];
	n[o] = c, l = l < 0 ? -l << 1 | 1 : l << 1;
	do {
		let p = l & 31;
		l >>>= 5, l > 0 && (p |= 32), s[e++] = Ve$1[p];
	} while (l > 0);
	return e;
}
u$1(ee, "encodeInteger");
const jn$1 = /^[\w+.-]+:\/\//;
const Un$1 = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
const Tn$1 = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
function Dn$1(s) {
	return jn$1.test(s);
}
u$1(Dn$1, "isAbsoluteUrl");
function Bn$1(s) {
	return s.startsWith("//");
}
u$1(Bn$1, "isSchemeRelativeUrl");
function nt$2(s) {
	return s.startsWith("/");
}
u$1(nt$2, "isAbsolutePath");
function Fn$1(s) {
	return s.startsWith("file:");
}
u$1(Fn$1, "isFileUrl");
function rt$2(s) {
	return /^[.?#]/.test(s);
}
u$1(rt$2, "isRelative");
function le$2(s) {
	const e = Un$1.exec(s);
	return it$2(e[1], e[2] || "", e[3], e[4] || "", e[5] || "/", e[6] || "", e[7] || "");
}
u$1(le$2, "parseAbsoluteUrl");
function Pn$1(s) {
	const e = Tn$1.exec(s), n = e[2];
	return it$2("file:", "", e[1] || "", "", nt$2(n) ? n : "/" + n, e[3] || "", e[4] || "");
}
u$1(Pn$1, "parseFileUrl");
function it$2(s, e, n, i, o, c, l) {
	return {
		scheme: s,
		user: e,
		host: n,
		port: i,
		path: o,
		query: c,
		hash: l,
		type: 7
	};
}
u$1(it$2, "makeUrl");
function st$2(s) {
	if (Bn$1(s)) {
		const n = le$2("http:" + s);
		return n.scheme = "", n.type = 6, n;
	}
	if (nt$2(s)) {
		const n = le$2("http://foo.com" + s);
		return n.scheme = "", n.host = "", n.type = 5, n;
	}
	if (Fn$1(s)) return Pn$1(s);
	if (Dn$1(s)) return le$2(s);
	const e = le$2("http://foo.com/" + s);
	return e.scheme = "", e.host = "", e.type = s ? s.startsWith("?") ? 3 : s.startsWith("#") ? 2 : 4 : 1, e;
}
u$1(st$2, "parseUrl");
function Wn$1(s) {
	if (s.endsWith("/..")) return s;
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$1(Wn$1, "stripPathFilename");
function zn$1(s, e) {
	ot$2(e, e.type), s.path === "/" ? s.path = e.path : s.path = Wn$1(e.path) + s.path;
}
u$1(zn$1, "mergePaths");
function ot$2(s, e) {
	const n = e <= 4, i = s.path.split("/");
	let o = 1, c = 0, l = !1;
	for (let g = 1; g < i.length; g++) {
		const b = i[g];
		if (!b) {
			l = !0;
			continue;
		}
		if (l = !1, b !== ".") {
			if (b === "..") {
				c ? (l = !0, c--, o--) : n && (i[o++] = b);
				continue;
			}
			i[o++] = b, c++;
		}
	}
	let p = "";
	for (let g = 1; g < o; g++) p += "/" + i[g];
	(!p || l && !p.endsWith("/..")) && (p += "/"), s.path = p;
}
u$1(ot$2, "normalizePath");
function Jn$1(s, e) {
	if (!s && !e) return "";
	const n = st$2(s);
	let i = n.type;
	if (e && i !== 7) {
		const c = st$2(e), l = c.type;
		switch (i) {
			case 1: n.hash = c.hash;
			case 2: n.query = c.query;
			case 3:
			case 4: zn$1(n, c);
			case 5: n.user = c.user, n.host = c.host, n.port = c.port;
			case 6: n.scheme = c.scheme;
		}
		l > i && (i = l);
	}
	ot$2(n, i);
	const o = n.query + n.hash;
	switch (i) {
		case 2:
		case 3: return o;
		case 4: {
			const c = n.path.slice(1);
			return c ? rt$2(e || s) && !rt$2(c) ? "./" + c + o : c + o : o || ".";
		}
		case 5: return n.path + o;
		default: return n.scheme + "//" + n.user + n.host + n.port + n.path + o;
	}
}
u$1(Jn$1, "resolve$1");
function at$2(s, e) {
	return e && !e.endsWith("/") && (e += "/"), Jn$1(s, e);
}
u$1(at$2, "resolve");
function qn$1(s) {
	if (!s) return "";
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$1(qn$1, "stripFilename");
const B$1 = 0;
function Hn$1(s, e) {
	const n = ct$2(s, 0);
	if (n === s.length) return s;
	e || (s = s.slice());
	for (let i = n; i < s.length; i = ct$2(s, i + 1)) s[i] = Kn$1(s[i], e);
	return s;
}
u$1(Hn$1, "maybeSort");
function ct$2(s, e) {
	for (let n = e; n < s.length; n++) if (!Gn$1(s[n])) return n;
	return s.length;
}
u$1(ct$2, "nextUnsortedSegmentLine");
function Gn$1(s) {
	for (let e = 1; e < s.length; e++) if (s[e][B$1] < s[e - 1][B$1]) return !1;
	return !0;
}
u$1(Gn$1, "isSorted");
function Kn$1(s, e) {
	return e || (s = s.slice()), s.sort(Xn$1);
}
u$1(Kn$1, "sortSegments");
function Xn$1(s, e) {
	return s[B$1] - e[B$1];
}
u$1(Xn$1, "sortComparator");
let ue$2 = !1;
function Yn$1(s, e, n, i) {
	for (; n <= i;) {
		const o = n + (i - n >> 1), c = s[o][B$1] - e;
		if (c === 0) return ue$2 = !0, o;
		c < 0 ? n = o + 1 : i = o - 1;
	}
	return ue$2 = !1, n - 1;
}
u$1(Yn$1, "binarySearch");
function Qn$1(s, e, n) {
	for (let i = n - 1; i >= 0 && s[i][B$1] === e; n = i--);
	return n;
}
u$1(Qn$1, "lowerBound");
function Zn$1() {
	return {
		lastKey: -1,
		lastNeedle: -1,
		lastIndex: -1
	};
}
u$1(Zn$1, "memoizedState");
function Vn$1(s, e, n, i) {
	const { lastKey: o, lastNeedle: c, lastIndex: l } = n;
	let p = 0, g = s.length - 1;
	if (i === o) {
		if (e === c) return ue$2 = l !== -1 && s[l][B$1] === e, l;
		e >= c ? p = l === -1 ? 0 : l : g = l;
	}
	return n.lastKey = i, n.lastNeedle = e, n.lastIndex = Yn$1(s, e, p, g);
}
u$1(Vn$1, "memoizedBinarySearch");
var lt$1 = class {
	static {
		u$1(this, "TraceMap");
	}
	constructor(e, n) {
		const i = typeof e == "string";
		if (!i && e._decodedMemo) return e;
		const o = i ? JSON.parse(e) : e, { version: c, file: l, names: p, sourceRoot: g, sources: b, sourcesContent: d } = o;
		this.version = c, this.file = l, this.names = p || [], this.sourceRoot = g, this.sources = b, this.sourcesContent = d, this.ignoreList = o.ignoreList || o.x_google_ignoreList || void 0;
		const r = at$2(g || "", qn$1(n));
		this.resolvedSources = b.map((A) => at$2(A || "", r));
		const { mappings: S } = o;
		typeof S == "string" ? (this._encoded = S, this._decoded = void 0) : (this._encoded = void 0, this._decoded = Hn$1(S, i)), this._decodedMemo = Zn$1(), this._bySources = void 0, this._bySourceMemos = void 0;
	}
};
function Kr(s) {
	return s;
}
u$1(Kr, "cast$2");
function ut$1(s) {
	var e;
	return (e = s)._decoded || (e._decoded = Rn$1(s._encoded));
}
u$1(ut$1, "decodedMappings");
function er$1(s, e, n) {
	const i = ut$1(s);
	if (e >= i.length) return null;
	const o = i[e], c = tr$1(o, s._decodedMemo, e, n);
	return c === -1 ? null : o[c];
}
u$1(er$1, "traceSegment");
function tr$1(s, e, n, i, o) {
	let c = Vn$1(s, i, e, n);
	return ue$2 && (c = Qn$1(s, i, c)), c === -1 || c === s.length ? -1 : c;
}
u$1(tr$1, "traceSegmentInternal");
var Ie$2 = class {
	static {
		u$1(this, "SetArray");
	}
	constructor() {
		this._indexes = { __proto__: null }, this.array = [];
	}
};
function Xr(s) {
	return s;
}
u$1(Xr, "cast$1");
function ft$1(s, e) {
	return s._indexes[e];
}
u$1(ft$1, "get");
function te$1(s, e) {
	const n = ft$1(s, e);
	if (n !== void 0) return n;
	const { array: i, _indexes: o } = s;
	return o[e] = i.push(e) - 1;
}
u$1(te$1, "put");
function nr$1(s, e) {
	const n = ft$1(s, e);
	if (n === void 0) return;
	const { array: i, _indexes: o } = s;
	for (let c = n + 1; c < i.length; c++) {
		const l = i[c];
		i[c - 1] = l, o[l]--;
	}
	o[e] = void 0, i.pop();
}
u$1(nr$1, "remove");
const rr$1 = 0;
const ir = 1;
const sr$1 = 2;
const or$1 = 3;
const ar$1 = 4;
const ht$1 = -1;
var cr = class {
	static {
		u$1(this, "GenMapping");
	}
	constructor({ file: e, sourceRoot: n } = {}) {
		this._names = new Ie$2(), this._sources = new Ie$2(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = n, this._ignoreList = new Ie$2();
	}
};
function Yr(s) {
	return s;
}
u$1(Yr, "cast");
const lr = u$1((s, e, n, i, o, c, l, p) => dr(!0, s, e, n, i, o, c, l), "maybeAddSegment");
function ur(s, e, n) {
	const { _sources: i, _sourcesContent: o } = s, c = te$1(i, e);
	o[c] = n;
}
u$1(ur, "setSourceContent");
function fr(s, e, n = !0) {
	const { _sources: i, _sourcesContent: o, _ignoreList: c } = s, l = te$1(i, e);
	l === o.length && (o[l] = null), n ? te$1(c, l) : nr$1(c, l);
}
u$1(fr, "setIgnore");
function dt$1(s) {
	const { _mappings: e, _sources: n, _sourcesContent: i, _names: o, _ignoreList: c } = s;
	return pr(e), {
		version: 3,
		file: s.file || void 0,
		names: o.array,
		sourceRoot: s.sourceRoot || void 0,
		sources: n.array,
		sourcesContent: i,
		mappings: e,
		ignoreList: c.array
	};
}
u$1(dt$1, "toDecodedMap");
function hr(s) {
	const e = dt$1(s);
	return Object.assign(Object.assign({}, e), { mappings: Mn$1(e.mappings) });
}
u$1(hr, "toEncodedMap");
function dr(s, e, n, i, o, c, l, p, g) {
	const { _mappings: b, _sources: d, _sourcesContent: r, _names: S } = e, A = gr(b, n), E = br(A, i);
	if (!o) return mr(A, E) ? void 0 : gt$1(A, E, [i]);
	const I = te$1(d, o), M = p ? te$1(S, p) : ht$1;
	if (I === r.length && (r[I] = null), !wr(A, E, I, c, l, M)) return gt$1(A, E, p ? [
		i,
		I,
		c,
		l,
		M
	] : [
		i,
		I,
		c,
		l
	]);
}
u$1(dr, "addSegmentInternal");
function gr(s, e) {
	for (let n = s.length; n <= e; n++) s[n] = [];
	return s[e];
}
u$1(gr, "getLine");
function br(s, e) {
	let n = s.length;
	for (let i = n - 1; i >= 0; n = i--) if (e >= s[i][rr$1]) break;
	return n;
}
u$1(br, "getColumnIndex");
function gt$1(s, e, n) {
	for (let i = s.length; i > e; i--) s[i] = s[i - 1];
	s[e] = n;
}
u$1(gt$1, "insert");
function pr(s) {
	const { length: e } = s;
	let n = e;
	for (let i = n - 1; i >= 0 && !(s[i].length > 0); n = i, i--);
	n < e && (s.length = n);
}
u$1(pr, "removeEmptyFinalLines");
function mr(s, e) {
	return e === 0 ? !0 : s[e - 1].length === 1;
}
u$1(mr, "skipSourceless");
function wr(s, e, n, i, o, c) {
	if (e === 0) return !1;
	const l = s[e - 1];
	return l.length === 1 ? !1 : n === l[ir] && i === l[sr$1] && o === l[or$1] && c === (l.length === 5 ? l[ar$1] : ht$1);
}
u$1(wr, "skipSource");
const bt$2 = pt$1("", -1, -1, "", null, !1);
const kr = [];
function pt$1(s, e, n, i, o, c) {
	return {
		source: s,
		line: e,
		column: n,
		name: i,
		content: o,
		ignore: c
	};
}
u$1(pt$1, "SegmentObject");
function mt$2(s, e, n, i, o) {
	return {
		map: s,
		sources: e,
		source: n,
		content: i,
		ignore: o
	};
}
u$1(mt$2, "Source");
function wt$2(s, e) {
	return mt$2(s, e, "", null, !1);
}
u$1(wt$2, "MapSource");
function yr(s, e, n) {
	return mt$2(null, kr, s, e, n);
}
u$1(yr, "OriginalSource");
function Cr(s) {
	const e = new cr({ file: s.map.file }), { sources: n, map: i } = s, o = i.names, c = ut$1(i);
	for (let l = 0; l < c.length; l++) {
		const p = c[l];
		for (let g = 0; g < p.length; g++) {
			const b = p[g], d = b[0];
			let r = bt$2;
			if (b.length !== 1) {
				const H = n[b[1]];
				if (r = kt$1(H, b[2], b[3], b.length === 5 ? o[b[4]] : ""), r == null) continue;
			}
			const { column: S, line: A, name: E, content: I, source: M, ignore: F } = r;
			lr(e, l, d, M, A, S, E), M && I != null && ur(e, M, I), F && fr(e, M, !0);
		}
	}
	return e;
}
u$1(Cr, "traceMappings");
function kt$1(s, e, n, i) {
	if (!s.map) return pt$1(s.source, e, n, i, s.content, s.ignore);
	const o = er$1(s.map, e, n);
	return o == null ? null : o.length === 1 ? bt$2 : kt$1(s.sources[o[1]], o[2], o[3], o.length === 5 ? s.map.names[o[4]] : i);
}
u$1(kt$1, "originalPositionFor");
function Sr(s) {
	return Array.isArray(s) ? s : [s];
}
u$1(Sr, "asArray");
function vr(s, e) {
	const n = Sr(s).map((c) => new lt$1(c, "")), i = n.pop();
	for (let c = 0; c < n.length; c++) if (n[c].sources.length > 1) throw new Error(`Transformation map ${c} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
	let o = yt$1(i, e, "", 0);
	for (let c = n.length - 1; c >= 0; c--) o = wt$2(n[c], [o]);
	return o;
}
u$1(vr, "buildSourceMapTree");
function yt$1(s, e, n, i) {
	const { resolvedSources: o, sourcesContent: c, ignoreList: l } = s, p = i + 1;
	return wt$2(s, o.map((b, d) => {
		const r = {
			importer: n,
			depth: p,
			source: b || "",
			content: void 0,
			ignore: void 0
		}, S = e(r.source, r), { source: A, content: E, ignore: I } = r;
		if (S) return yt$1(new lt$1(S, A), e, A, p);
		return yr(A, E !== void 0 ? E : c ? c[d] : null, I !== void 0 ? I : l ? l.includes(d) : !1);
	}));
}
u$1(yt$1, "build");
var xr = class {
	static {
		u$1(this, "SourceMap");
	}
	constructor(e, n) {
		const i = n.decodedMappings ? dt$1(e) : hr(e);
		this.version = i.version, this.file = i.file, this.mappings = i.mappings, this.names = i.names, this.ignoreList = i.ignoreList, this.sourceRoot = i.sourceRoot, this.sources = i.sources, n.excludeContent || (this.sourcesContent = i.sourcesContent);
	}
	toString() {
		return JSON.stringify(this);
	}
};
function Ct$1(s, e, n) {
	const i = {
		excludeContent: !!n,
		decodedMappings: !1
	}, o = vr(s, e);
	return new xr(Cr(o), i);
}
u$1(Ct$1, "remapping");
const St$1 = u$1((s, e, n) => {
	const i = [], o = { code: e };
	for (const c of n) {
		const l = c(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct$1(i, () => null)
	};
}, "applyTransformersSync");
const _r = u$1(async (s, e, n) => {
	const i = [], o = { code: e };
	for (const c of n) {
		const l = await c(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct$1(i, () => null)
	};
}, "applyTransformers");
const Er = u$1((s) => {
	const e = [];
	let n = !1, i = !0;
	for (let o = 0; o < s.length; o += 1) {
		let c = s[o];
		if (c === "\\" && n) {
			if (o + 1 === s.length) return e;
			o += 1, c = s[o];
		} else if (c === " " && !n) {
			i = !0;
			continue;
		} else if (c === "\"") {
			n = !n;
			continue;
		}
		i ? (e.push(c), i = !1) : e[e.length - 1] += c;
	}
	return e;
}, "tokenizeNodeOptionsEnv");
const vt = u$1((s, e, n) => {
	for (let i = 0; i < e.length; i += 1) {
		const o = e[i];
		if (o.length <= 1 || o[0] !== "-") continue;
		const c = o[1] === "-" ? o.indexOf("=") : -1;
		let l = c === -1 ? o : o.slice(0, c);
		l.includes("_", 2) && (l = l.slice(0, 2) + l.slice(2).replaceAll("_", "-"));
		for (const p of s.forms) {
			const [g, b] = p;
			if (l !== g || (b === 3 || b === 5) && c === -1) continue;
			const d = b === 4 || b === 5, r = b >= 3 ? 0 : b;
			let S = d ? p[2] : "";
			r === 0 && !d && (c === -1 ? (i += 1, S = e[i] ?? "", S[0] === "\\" && S[1] === "-" && (S = S.slice(1))) : S = o.slice(c + 1)), n = s.fold(S, n, r);
			break;
		}
	}
	return n;
}, "scanSource");
const Lr = u$1((s) => {
	let e = s.init();
	const n = process.env.NODE_OPTIONS;
	return n && (e = vt(s, Er(n), e)), e = vt(s, process.execArgv, e), e;
}, "getOptionValue");
const Or = u$1((s, e, n) => n === 1, "setByEffect");
const Rr = u$1((s, e) => ({
	forms: e,
	init: u$1(() => s, "init"),
	fold: Or
}), "booleanFlag")(!1, [
	["--inspect-brk-node", 1],
	["--inspect-brk", 1],
	["--inspect-wait", 1],
	["--inspect", 1],
	["--no-inspect", 2]
]);
const Ir = Object.freeze({
	target: `node${process.versions.node}`,
	loader: "default"
});
const Nr = Lr(Rr);
const Ne$2 = {
	...Ir,
	sourcemap: !0,
	sourcesContent: !!process.env.NODE_V8_COVERAGE || Nr,
	minifyWhitespace: !0,
	keepNames: !0
};
const $e$1 = u$1((s) => {
	const e = s.sourcefile;
	if (e) {
		const n = path.extname(e.split("?")[0]);
		n ? n === ".cts" || n === ".mts" ? s.sourcefile = `${e.slice(0, -3)}ts` : n === ".mjs" && (s.sourcefile = `${e.slice(0, -3)}js`) : s.sourcefile += ".js";
	}
	return (n) => (n.map && (s.sourcefile !== e && (n.map = n.map.replace(JSON.stringify(s.sourcefile), JSON.stringify(e))), n.map = JSON.parse(n.map)), n);
}, "patchOptions");
const Me$2 = u$1((s) => {
	throw s.name = "TransformError", delete s.errors, delete s.warnings, s;
}, "formatEsbuildError");
const $r = u$1((s, e) => ({
	...c$2(d$1) ? {
		dirname: path.dirname(s),
		filename: s
	} : {},
	url: e
}), "getImportMeta");
const Mr = u$1((s, e) => {
	if (!s.includes("import")) return !1;
	try {
		return oe$1(s, e)[0].some((n) => n.d === -2);
	} catch {
		return !0;
	}
}, "hasImportMeta");
const jr = u$1((s, e, n) => {
	let i, o, c;
	if (e.startsWith("file://")) {
		i = e;
		const r = new URL(e);
		o = fileURLToPath(r);
	} else [o, c] = e.split("?"), i = pathToFileURL(o) + (c ? `?${c}` : "");
	const { cjsBanner: l, ...p } = n ?? {}, g = {
		...Ne$2,
		format: "cjs",
		sourcefile: o,
		banner: `__filename=${JSON.stringify(o)};(()=>{${l ?? ""}`,
		footer: "})()",
		platform: "node",
		...p
	};
	g.format === "cjs" && !o.endsWith(".cjs") && !o.endsWith(".cts") && Mr(s, o) && (g.define = {
		...g.define,
		"import.meta": JSON.stringify($r(o, i))
	});
	const b = ve$2([
		s,
		i,
		JSON.stringify(g),
		import_main.version,
		Oe$2
	].join("-"));
	let d = q.get(b);
	return d || (d = St$1(e, s, [(r, S) => {
		const A = $e$1(g);
		let E;
		try {
			E = (0, import_main.transformSync)(S, g);
		} catch (I) {
			throw Me$2(I);
		}
		return A(E);
	}, (r, S) => ae$1(r, S, !0)]), q.set(b, d)), d;
}, "transformSync");
const Ur = u$1(async (s, e, n) => {
	const i = {
		...Ne$2,
		format: "esm",
		sourcefile: e,
		...n
	}, o = ve$2([
		s,
		JSON.stringify(i),
		import_main.version,
		Oe$2
	].join("-"));
	let c = q.get(o);
	return c || (c = await _r(e, s, [async (l, p) => {
		const g = $e$1(i);
		let b;
		try {
			b = await (0, import_main.transform)(p, i);
		} catch (d) {
			throw Me$2(d);
		}
		return g(b);
	}, (l, p) => ae$1(l, p, !0)]), q.set(o, c)), c;
}, "transform");
const Tr = u$1((s, e, n) => {
	const i = {
		...Ne$2,
		format: "esm",
		sourcefile: e,
		...n
	}, o = ve$2([
		s,
		JSON.stringify(i),
		import_main.version,
		Oe$2
	].join("-"));
	let c = q.get(o);
	return c || (c = St$1(e, s, [(l, p) => {
		const g = $e$1(i);
		let b;
		try {
			b = (0, import_main.transformSync)(p, i);
		} catch (d) {
			throw Me$2(d);
		}
		return g(b);
	}, (l, p) => ae$1(l, p, !0)]), q.set(o, c)), c;
}, "transformEsmSync");

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/client-D_mPDF5S.mjs
var p$1 = Object.defineProperty;
var t$1 = (e, n) => p$1(e, "name", {
	value: n,
	configurable: !0
});
let o$1 = [];
const m$1 = t$1(() => new Promise((e) => {
	const n$2 = n(process.ppid), r = g.createConnection(n$2, () => {
		e(t$1((i) => {
			const c = Buffer.from(JSON.stringify(i)), f = Buffer.alloc(4);
			f.writeInt32BE(c.length, 0), r.write(Buffer.concat([f, c]));
		}, "sendToParent"));
	});
	r.on("error", () => {
		e();
	}), r.unref();
}), "connectToServer");
const s$2 = { send: t$1((e) => {
	o$1.push(e);
}, "send") };
const a$1 = m$1();
a$1.then((e) => {
	if (e) for (const n of o$1) e(n);
	o$1 = [], s$2.send = e;
}, () => {
	o$1 = [], s$2.send = void 0;
});

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/index-gbaejti9.mjs
var u = Object.defineProperty;
var g$1 = (s, n) => u(s, "name", {
	value: n,
	configurable: !0
});
let t = !0;
const l = typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
let i$2 = 0;
if (l.process && l.process.env && l.process.stdout) {
	const { FORCE_COLOR: s, NODE_DISABLE_COLORS: n, NO_COLOR: r, TERM: o, COLORTERM: c } = l.process.env;
	n || r || s === "0" ? t = !1 : s === "1" || s === "2" || s === "3" ? t = !0 : o === "dumb" ? t = !1 : "CI" in l.process.env && [
		"TRAVIS",
		"CIRCLECI",
		"APPVEYOR",
		"GITLAB_CI",
		"GITHUB_ACTIONS",
		"BUILDKITE",
		"DRONE"
	].some((a) => a in l.process.env) ? t = !0 : t = process.stdout.isTTY, t && (process.platform === "win32" || c && (c === "truecolor" || c === "24bit") ? i$2 = 3 : o && (o.endsWith("-256color") || o.endsWith("256")) ? i$2 = 2 : i$2 = 1);
}
let f = {
	enabled: t,
	supportLevel: i$2
};
function e$1(s, n, r = 1) {
	const o = `\x1B[${s}m`, c = `\x1B[${n}m`, a = new RegExp(`\\x1b\\[${n}m`, "g");
	return (p) => f.enabled && f.supportLevel >= r ? o + ("" + p).replace(a, o) + c : "" + p;
}
g$1(e$1, "kolorist");
const b$1 = e$1(30, 39);
const d = e$1(33, 39);
const O$1 = e$1(90, 39);
const C$1 = e$1(92, 39);
const R$1 = e$1(95, 39);
const I$2 = e$1(96, 39);
const L = e$1(44, 49);
const E$1 = e$1(100, 49);
const T$1 = e$1(103, 49);

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/register-DHgpdRjs.mjs
var wt$1 = Object.defineProperty;
var p = (e, t) => wt$1(e, "name", {
	value: t,
	configurable: !0
});
const De = p((e) => {
	if (!e.startsWith("data:text/javascript,")) return;
	const t = e.indexOf("?");
	if (t === -1) return;
	const n = new URLSearchParams(e.slice(t + 1)).get("filePath");
	if (n) return n;
}, "getOriginalFilePath");
const Le$1 = p((e) => {
	const t = De(e);
	return t && ($._cache[t] = $._cache[e], delete $._cache[e], e = t), e;
}, "interopCjsExports");
const Ue$1 = p((e) => e !== null && typeof e == "object", "A");
const B = p((e, t) => Object.assign(/* @__PURE__ */ new Error(`[${e}]: ${t}`), { code: e }), "a");
const Re$1 = "ERR_INVALID_PACKAGE_CONFIG";
const ue$1 = "ERR_INVALID_PACKAGE_TARGET";
const It$1 = "ERR_PACKAGE_PATH_NOT_EXPORTED";
const Nt$1 = /^\d+$/;
const Wt$1 = /^(\.{1,2}|node_modules)$/i;
const Bt$1 = /\/|\\/;
var Fe$1 = ((e) => (e.Export = "exports", e.Import = "imports", e))(Fe$1 || {});
const fe$1 = p((e, t, r, n, s) => {
	if (t == null) return [];
	if (typeof t == "string") {
		const [o, ...a] = t.split(Bt$1);
		if (o === ".." || a.some((i) => Wt$1.test(i))) throw B(ue$1, `Invalid "${e}" target "${t}" defined in the package config`);
		return [s ? t.replace(/\*/g, s) : t];
	}
	if (Array.isArray(t)) return t.flatMap((o) => fe$1(e, o, r, n, s));
	if (Ue$1(t)) {
		for (const o of Object.keys(t)) {
			if (Nt$1.test(o)) throw B(Re$1, "Cannot contain numeric property keys");
			if (o === "default" || n.includes(o)) return fe$1(e, t[o], r, n, s);
		}
		return [];
	}
	throw B(ue$1, `Invalid "${e}" target "${t}"`);
}, "f");
const G$1 = "*";
const Mt$1 = p((e, t) => {
	const r = e.indexOf(G$1), n = t.indexOf(G$1);
	return r === n ? t.length > e.length : n > r;
}, "m");
function Jt$1(e, t) {
	if (!t.includes(G$1) && e.hasOwnProperty(t)) return [t];
	let r, n;
	for (const s of Object.keys(e)) if (s.includes(G$1)) {
		const [o, a, i] = s.split(G$1);
		if (i === void 0 && t.startsWith(o) && t.endsWith(a)) {
			const m = t.slice(o.length, -a.length || void 0);
			m && (!r || Mt$1(r, s)) && (r = s, n = m);
		}
	}
	return [r, n];
}
p(Jt$1, "d");
const Vt = p((e) => Object.keys(e).reduce((t, r) => {
	const n = r === "" || r[0] !== ".";
	if (t === void 0 || t === n) return n;
	throw B(Re$1, "\"exports\" cannot contain some keys starting with \".\" and some not");
}, void 0), "p");
const Qt$1 = /^\w+:/;
const Gt$1 = p((e, t, r) => {
	if (!e) throw new Error("\"exports\" is required");
	t = t === "" ? "." : `./${t}`, (typeof e == "string" || Array.isArray(e) || Ue$1(e) && Vt(e)) && (e = { ".": e });
	const [n, s] = Jt$1(e, t), o = fe$1(Fe$1.Export, e[n], t, r, s);
	if (o.length === 0) throw B(It$1, t === "." ? "No \"exports\" main defined" : `Package subpath '${t}' is not defined by "exports"`);
	for (const a of o) if (!a.startsWith("./") && !Qt$1.test(a)) throw B(ue$1, `Invalid "exports" target "${a}" defined in the package config`);
	return o;
}, "v");
var Kt = Object.defineProperty;
var c$1 = p((e, t) => Kt(e, "name", {
	value: t,
	configurable: !0
}), "i");
function A(e) {
	return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
p(A, "x"), c$1(A, "slash");
const zt = c$1((e, t) => {
	const r = `readFileSync:${t}`;
	let n = e?.get(r);
	return n === void 0 && (n = fs.readFileSync(t, "utf8"), e?.set(r, n)), n;
}, "readFile");
const _ = c$1((e, t) => {
	const r = `tryStat:${t}`;
	let n = e?.get(r);
	if (n === void 0) {
		try {
			n = fs.statSync(t);
		} catch {
			n = null;
		}
		e?.set(r, n);
	}
	return n ?? void 0;
}, "tryStat");
const K$1 = c$1((e, t, r) => {
	for (;;) {
		const n = path.posix.join(e, t);
		if (_(r, n)) return n;
		const s = path.dirname(e);
		if (s === e) return;
		e = s;
	}
}, "findUp");
function Ie$1(e, t = !1) {
	const r = e.length;
	let n = 0, s = "", o = 0, a = 16, i = 0, m = 0, u = 0, y = 0, f = 0;
	function E(l, C) {
		let S = 0, x = 0;
		for (; S < l;) {
			let w = e.charCodeAt(n);
			if (w >= 48 && w <= 57) x = x * 16 + w - 48;
			else if (w >= 65 && w <= 70) x = x * 16 + w - 65 + 10;
			else if (w >= 97 && w <= 102) x = x * 16 + w - 97 + 10;
			else break;
			n++, S++;
		}
		return S < l && (x = -1), x;
	}
	p(E, "A"), c$1(E, "scanHexDigits");
	function b(l) {
		n = l, s = "", o = 0, a = 16, f = 0;
	}
	p(b, "O"), c$1(b, "setPosition");
	function k() {
		let l = n;
		if (e.charCodeAt(n) === 48) n++;
		else for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
		if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && I$1(e.charCodeAt(n))) for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
		else return f = 3, e.substring(l, n);
		let C = n;
		if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && I$1(e.charCodeAt(n))) {
			for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
			C = n;
		} else f = 3;
		return e.substring(l, C);
	}
	p(k, "h"), c$1(k, "scanNumber");
	function v() {
		let l = "", C = n;
		for (;;) {
			if (n >= r) {
				l += e.substring(C, n), f = 2;
				break;
			}
			const S = e.charCodeAt(n);
			if (S === 34) {
				l += e.substring(C, n), n++;
				break;
			}
			if (S === 92) {
				if (l += e.substring(C, n), n++, n >= r) {
					f = 2;
					break;
				}
				switch (e.charCodeAt(n++)) {
					case 34:
						l += "\"";
						break;
					case 92:
						l += "\\";
						break;
					case 47:
						l += "/";
						break;
					case 98:
						l += "\b";
						break;
					case 102:
						l += "\f";
						break;
					case 110:
						l += `
`;
						break;
					case 114:
						l += "\r";
						break;
					case 116:
						l += "	";
						break;
					case 117:
						const x = E(4);
						x >= 0 ? l += String.fromCharCode(x) : f = 4;
						break;
					default: f = 5;
				}
				C = n;
				continue;
			}
			if (S >= 0 && S <= 31) if (M(S)) {
				l += e.substring(C, n), f = 2;
				break;
			} else f = 6;
			n++;
		}
		return l;
	}
	p(v, "D"), c$1(v, "scanString");
	function d() {
		if (s = "", f = 0, o = n, m = i, y = u, n >= r) return o = r, a = 17;
		let l = e.charCodeAt(n);
		if (te(l)) {
			do
				n++, s += String.fromCharCode(l), l = e.charCodeAt(n);
			while (te(l));
			return a = 15;
		}
		if (M(l)) return n++, s += String.fromCharCode(l), l === 13 && e.charCodeAt(n) === 10 && (n++, s += `
`), i++, u = n, a = 14;
		switch (l) {
			case 123: return n++, a = 1;
			case 125: return n++, a = 2;
			case 91: return n++, a = 3;
			case 93: return n++, a = 4;
			case 58: return n++, a = 6;
			case 44: return n++, a = 5;
			case 34: return n++, s = v(), a = 10;
			case 47:
				const C = n - 1;
				if (e.charCodeAt(n + 1) === 47) {
					for (n += 2; n < r && !M(e.charCodeAt(n));) n++;
					return s = e.substring(C, n), a = 12;
				}
				if (e.charCodeAt(n + 1) === 42) {
					n += 2;
					const S = r - 1;
					let x = !1;
					for (; n < S;) {
						const w = e.charCodeAt(n);
						if (w === 42 && e.charCodeAt(n + 1) === 47) {
							n += 2, x = !0;
							break;
						}
						n++, M(w) && (w === 13 && e.charCodeAt(n) === 10 && n++, i++, u = n);
					}
					return x || (n++, f = 1), s = e.substring(C, n), a = 13;
				}
				return s += String.fromCharCode(l), n++, a = 16;
			case 45: if (s += String.fromCharCode(l), n++, n === r || !I$1(e.charCodeAt(n))) return a = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return s += k(), a = 11;
			default:
				for (; n < r && g(l);) n++, l = e.charCodeAt(n);
				if (o !== n) {
					switch (s = e.substring(o, n), s) {
						case "true": return a = 8;
						case "false": return a = 9;
						case "null": return a = 7;
					}
					return a = 16;
				}
				return s += String.fromCharCode(l), n++, a = 16;
		}
	}
	p(d, "c"), c$1(d, "scanNext");
	function g(l) {
		if (te(l) || M(l)) return !1;
		switch (l) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	p(g, "p"), c$1(g, "isUnknownContentCharacter");
	function T() {
		let l;
		do
			l = d();
		while (l >= 12 && l <= 15);
		return l;
	}
	return p(T, "b"), c$1(T, "scanNextNonTrivia"), {
		setPosition: b,
		getPosition: c$1(() => n, "getPosition"),
		scan: t ? T : d,
		getToken: c$1(() => a, "getToken"),
		getTokenValue: c$1(() => s, "getTokenValue"),
		getTokenOffset: c$1(() => o, "getTokenOffset"),
		getTokenLength: c$1(() => n - o, "getTokenLength"),
		getTokenStartLine: c$1(() => m, "getTokenStartLine"),
		getTokenStartCharacter: c$1(() => o - y, "getTokenStartCharacter"),
		getTokenError: c$1(() => f, "getTokenError")
	};
}
p(Ie$1, "Ne"), c$1(Ie$1, "createScanner");
function te(e) {
	return e === 32 || e === 9;
}
p(te, "X"), c$1(te, "isWhiteSpace");
function M(e) {
	return e === 10 || e === 13;
}
p(M, "P"), c$1(M, "isLineBreak");
function I$1(e) {
	return e >= 48 && e <= 57;
}
p(I$1, "S"), c$1(I$1, "isDigit");
var Ne$1;
(function(e) {
	e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(Ne$1 || (Ne$1 = {})), new Array(20).fill(0).map((e, t) => " ".repeat(t));
const J$1 = 200;
new Array(J$1).fill(0).map((e, t) => `
` + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => "\r" + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => `\r
` + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => `
` + "	".repeat(t)), new Array(J$1).fill(0).map((e, t) => "\r" + "	".repeat(t)), new Array(J$1).fill(0).map((e, t) => `\r
` + "	".repeat(t));
var ne;
(function(e) {
	e.DEFAULT = { allowTrailingComma: !1 };
})(ne || (ne = {}));
function We$1(e, t = [], r = ne.DEFAULT) {
	let n = null, s = [];
	const o = [];
	function a(i) {
		Array.isArray(s) ? s.push(i) : n !== null && (s[n] = i);
	}
	return p(a, "l"), c$1(a, "onValue"), Be$1(e, {
		onObjectBegin: c$1(() => {
			const i = {};
			a(i), o.push(s), s = i, n = null;
		}, "onObjectBegin"),
		onObjectProperty: c$1((i) => {
			n = i;
		}, "onObjectProperty"),
		onObjectEnd: c$1(() => {
			s = o.pop();
		}, "onObjectEnd"),
		onArrayBegin: c$1(() => {
			const i = [];
			a(i), o.push(s), s = i, n = null;
		}, "onArrayBegin"),
		onArrayEnd: c$1(() => {
			s = o.pop();
		}, "onArrayEnd"),
		onLiteralValue: a,
		onError: c$1((i, m, u) => {
			t.push({
				error: i,
				offset: m,
				length: u
			});
		}, "onError")
	}, r), s[0];
}
p(We$1, "Re"), c$1(We$1, "parse$1");
function Be$1(e, t, r = ne.DEFAULT) {
	const n = Ie$1(e, !1), s = [];
	let o = 0;
	function a(j) {
		return j ? () => o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	p(a, "l"), c$1(a, "toNoArgVisit");
	function i(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	p(i, "g"), c$1(i, "toOneArgVisit");
	function m(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) : () => !0;
	}
	p(m, "m"), c$1(m, "toOneArgVisitWithPath");
	function u(j) {
		return j ? () => {
			o > 0 ? o++ : j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) === !1 && (o = 1);
		} : () => !0;
	}
	p(u, "k"), c$1(u, "toBeginVisit");
	function y(j) {
		return j ? () => {
			o > 0 && o--, o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
		} : () => !0;
	}
	p(y, "w"), c$1(y, "toEndVisit");
	const f = u(t.onObjectBegin), E = m(t.onObjectProperty), b = y(t.onObjectEnd), k = u(t.onArrayBegin), v = y(t.onArrayEnd), d = m(t.onLiteralValue), g = i(t.onSeparator), T = a(t.onComment), l = i(t.onError), C = r && r.disallowComments, S = r && r.allowTrailingComma;
	function x() {
		for (;;) {
			const j = n.scan();
			switch (n.getTokenError()) {
				case 4:
					w(14);
					break;
				case 5:
					w(15);
					break;
				case 3:
					w(13);
					break;
				case 1:
					C || w(11);
					break;
				case 2:
					w(12);
					break;
				case 6: w(16);
			}
			switch (j) {
				case 12:
				case 13:
					C ? w(10) : T();
					break;
				case 16:
					w(1);
					break;
				case 15:
				case 14: break;
				default: return j;
			}
		}
	}
	p(x, "v"), c$1(x, "scanNext");
	function w(j, O = [], $e = []) {
		if (l(j), O.length + $e.length > 0) {
			let q = n.getToken();
			for (; q !== 17;) {
				if (O.indexOf(q) !== -1) {
					x();
					break;
				} else if ($e.indexOf(q) !== -1) break;
				q = x();
			}
		}
	}
	p(w, "d"), c$1(w, "handleError");
	function D(j) {
		const O = n.getTokenValue();
		return j ? d(O) : (E(O), s.push(O)), x(), !0;
	}
	p(D, "L"), c$1(D, "parseString");
	function L() {
		switch (n.getToken()) {
			case 11:
				const j = n.getTokenValue();
				let O = Number(j);
				isNaN(O) && (w(2), O = 0), d(O);
				break;
			case 7:
				d(null);
				break;
			case 8:
				d(!0);
				break;
			case 9:
				d(!1);
				break;
			default: return !1;
		}
		return x(), !0;
	}
	p(L, "B"), c$1(L, "parseLiteral");
	function P() {
		return n.getToken() !== 10 ? (w(3, [], [2, 5]), !1) : (D(!1), n.getToken() === 6 ? (g(":"), x(), Z() || w(4, [], [2, 5])) : w(5, [], [2, 5]), s.pop(), !0);
	}
	p(P, "$"), c$1(P, "parseProperty");
	function W() {
		f(), x();
		let j = !1;
		for (; n.getToken() !== 2 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (j || w(4, [], []), g(","), x(), n.getToken() === 2 && S) break;
			} else j && w(6, [], []);
			P() || w(4, [], [2, 5]), j = !0;
		}
		return b(), n.getToken() !== 2 ? w(7, [2], []) : x(), !0;
	}
	p(W, "N"), c$1(W, "parseObject");
	function Ae() {
		k(), x();
		let j = !0, O = !1;
		for (; n.getToken() !== 4 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (O || w(4, [], []), g(","), x(), n.getToken() === 4 && S) break;
			} else O && w(6, [], []);
			j ? (s.push(0), j = !1) : s[s.length - 1]++, Z() || w(4, [], [4, 5]), O = !0;
		}
		return v(), j || s.pop(), n.getToken() !== 4 ? w(8, [4], []) : x(), !0;
	}
	p(Ae, "$e"), c$1(Ae, "parseArray");
	function Z() {
		switch (n.getToken()) {
			case 3: return Ae();
			case 1: return W();
			case 10: return D(!0);
			default: return L();
		}
	}
	return p(Z, "H"), c$1(Z, "parseValue"), x(), n.getToken() === 17 ? r.allowEmptyContent ? !0 : (w(4, [], []), !1) : Z() ? (n.getToken() !== 17 && w(9, [], []), !0) : (w(4, [], []), !1);
}
p(Be$1, "Pe"), c$1(Be$1, "visit");
var Me$1;
(function(e) {
	e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Me$1 || (Me$1 = {}));
var Je$1;
(function(e) {
	e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Je$1 || (Je$1 = {}));
const Ht$1 = We$1;
var Ve;
(function(e) {
	e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Ve || (Ve = {}));
const de$1 = c$1((e, t) => Ht$1(zt(t, e)), "readJsonc");
const Qe = c$1(() => {
	const { findPnpApi: e } = $;
	return e && e(process.cwd());
}, "getPnpApi");
const Xt$1 = "detectTypeScriptVersion:";
const Yt = c$1((e, t) => {
	const r = `${Xt$1}${e}`, n = t?.get(r);
	if (n !== void 0) return n ?? void 0;
	let s;
	const o = Qe();
	if (o) try {
		s = o.resolveRequest("typescript/package.json", e) ?? void 0;
	} catch {}
	s ??= K$1(path.resolve(e), path.join("node_modules", "typescript", "package.json"), t);
	let a;
	if (s) try {
		const i = de$1(s, t);
		typeof i?.version == "string" && (a = i.version);
	} catch {}
	return t?.set(r, a ?? null), a;
}, "detectTypeScriptVersion");
const N = "package.json";
const re = "tsconfig.json";
const Zt = c$1((e, t, r) => {
	const n = $.createRequire(path.join(r, "tsconfig.json"));
	if (e !== t) try {
		return n.resolve(e);
	} catch {}
	try {
		return n.resolve(t);
	} catch {}
	try {
		return n.resolve(`${t}/${N}`);
	} catch {}
}, "resolvePackageEntryWithNode");
const me$1 = c$1((e, t, r, n) => {
	const s = `resolveFromPackageJsonPath:${e}:${t}:${r}`;
	if (n?.has(s)) return n.get(s) || !1;
	const o = de$1(e, n);
	if (!o) return;
	let a = t || re;
	if (!r && o.exports) try {
		const [i] = Gt$1(o.exports, t, ["require", "types"]);
		a = i;
	} catch {
		return n?.set(s, ""), !1;
	}
	else !t && o.tsconfig && (a = o.tsconfig);
	return a = path.join(e, "..", a), n?.set(s, a), a;
}, "resolveFromPackageJsonPath");
const qt$1 = c$1((e, t, r) => {
	const n = `resolveExtendsPath:${e}:${t}`;
	if (r?.has(n)) return r.get(n) || void 0;
	const s = en$1(e, t, r);
	return r?.set(n, s || ""), s;
}, "resolveExtendsPath");
const en$1 = c$1((e, t, r) => {
	let n = e;
	if (e === ".." && (n = path.join(n, re)), e[0] === "." && (n = path.resolve(t, n)), path.isAbsolute(n)) {
		const d = _(r, n);
		if (d) {
			if (d.isFile()) return n;
		} else if (!n.endsWith(".json")) {
			const g = `${n}.json`;
			if (_(r, g)) return g;
		}
		return;
	}
	const [s, ...o] = e.split("/"), a = s[0] === "@" ? `${s}/${o.shift()}` : s, i = o.join("/"), m = Qe();
	if (m) {
		const { resolveRequest: d } = m;
		try {
			if (a === e) {
				const g = d(path.join(a, N), t);
				if (g) {
					const T = me$1(g, i, !1, r);
					if (T && _(r, T)) return T;
				}
			} else {
				let g;
				try {
					g = d(e, t, { extensions: [".json"] });
				} catch {
					g = d(path.join(e, re), t);
				}
				if (g) return g;
			}
		} catch {}
	}
	const u = Zt(e, a, t);
	let y;
	if (u) {
		if (path.basename(u) !== N && u.endsWith(".json")) return u;
		y = path.basename(u) === N ? u : K$1(path.dirname(u), N, r);
	}
	const f = y && path.dirname(y) || K$1(path.resolve(t), path.join("node_modules", a), r);
	if (!f || !_(r, f)?.isDirectory()) return;
	const E = path.join(f, N);
	if (_(r, E)) {
		const d = me$1(E, i, !1, r);
		if (d === !1) return;
		if (d && _(r, d)?.isFile()) return d;
	}
	const b = path.join(f, i), k = b.endsWith(".json");
	if (!k) {
		const d = `${b}.json`;
		if (_(r, d)) return d;
	}
	const v = _(r, b);
	if (v) {
		if (v.isDirectory()) {
			const d = path.join(b, N);
			if (_(r, d)) {
				const T = me$1(d, "", !0, r);
				if (T && _(r, T)) return T;
			}
			const g = path.join(b, re);
			if (_(r, g)) return g;
		} else if (k) return b;
	}
}, "resolveExtendsPathUncached");
const he$1 = Symbol("implicitBaseUrl");
const U$1 = "${configDir}";
const ge$1 = /^\.{1,2}(\/.*)?$/;
const se = c$1((e) => {
	const t = A(e);
	return ge$1.test(t) ? t : `./${t}`;
}, "normalizeRelativePath");
const tn = c$1((e) => {
	const t = { ...e };
	if (t.strict) for (const n of [
		"noImplicitAny",
		"noImplicitThis",
		"strictNullChecks",
		"strictFunctionTypes",
		"strictBindCallApply",
		"strictPropertyInitialization",
		"strictBuiltinIteratorReturn",
		"alwaysStrict",
		"useUnknownInCatchVariables"
	]) t[n] === void 0 && (t[n] = !0);
	if (t.composite && (t.declaration ??= !0, t.incremental ??= !0), t.target) {
		let r = t.target.toLowerCase();
		r === "es2015" && (r = "es6"), t.target = r, r === "esnext" && (t.module ??= "es6", t.useDefineForClassFields ??= !0), (r === "es6" || r === "es2016" || r === "es2017" || r === "es2018" || r === "es2019" || r === "es2020" || r === "es2021" || r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.module ??= "es6"), (r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.useDefineForClassFields ??= !0);
	}
	if (t.module) {
		let r = t.module.toLowerCase();
		if (r === "es2015" && (r = "es6"), t.module = r, (r === "es6" || r === "es2020" || r === "es2022" || r === "esnext" || r === "none" || r === "system" || r === "umd" || r === "amd") && (t.moduleResolution ??= "classic"), r === "system" && (t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext" || r === "preserve") && (t.esModuleInterop ??= !0, t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext") && (t.moduleDetection ??= "force"), (r === "node16" || r === "node18") && (t.target ??= "es2022", t.moduleResolution ??= "node16"), r === "node20" && (t.target ??= "es2023", t.moduleResolution ??= "node16", t.resolveJsonModule ??= !0), r === "nodenext" && (t.target ??= "esnext", t.moduleResolution ??= "nodenext", t.resolveJsonModule ??= !0), r === "node16" || r === "node18" || r === "node20" || r === "nodenext") {
			const n = t.target;
			(n === "es3" || n === "es2022" || n === "es2023" || n === "es2024" || n === "esnext") && (t.useDefineForClassFields ??= !0);
		}
		r === "preserve" && (t.moduleResolution ??= "bundler");
	}
	if (t.moduleResolution) {
		let r = t.moduleResolution.toLowerCase();
		r === "node" && (r = "node10"), t.moduleResolution = r, (r === "node16" || r === "nodenext" || r === "bundler") && (t.resolvePackageJsonExports ??= !0, t.resolvePackageJsonImports ??= !0), r === "bundler" && (t.allowSyntheticDefaultImports ??= !0, t.resolveJsonModule ??= !0);
	}
	for (const r of [
		"jsx",
		"moduleDetection",
		"importsNotUsedAsValues",
		"newLine"
	]) t[r] && (t[r] = t[r].toLowerCase());
	return t.esModuleInterop && (t.allowSyntheticDefaultImports ??= !0), t.verbatimModuleSyntax && (t.isolatedModules ??= !0, t.preserveConstEnums ??= !0), t.isolatedModules && (t.preserveConstEnums ??= !0), t.rewriteRelativeImportExtensions && (t.allowImportingTsExtensions ??= !0), t.lib && (t.lib = t.lib.map((r) => r.toLowerCase())), t.checkJs && (t.allowJs ??= !0), t;
}, "normalizeCompilerOptions");
const nn = c$1((e, t) => {
	!t.has("target") && !rn(e.module) && (e.target = "es3");
}, "applyV4Defaults");
const rn = c$1((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget$1");
const sn = c$1((e, t) => {
	!t.has("target") && !on(e.module) && (e.target = "es5");
}, "applyV5Defaults");
const on = c$1((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget");
const an = c$1((e, t) => {
	t.has("strict") || (e.strict = !0), t.has("target") || (e.target = "es2025"), t.has("module") || (e.module = "es2022"), t.has("moduleResolution") || (e.moduleResolution = "bundler"), t.has("rootDir") || (e.rootDir = "."), t.has("types") || (e.types = []), t.has("noUncheckedSideEffectImports") || (e.noUncheckedSideEffectImports = !0), t.has("libReplacement") || (e.libReplacement = !1);
}, "applyV6Defaults");
const cn = [
	[4, nn],
	[5, sn],
	[6, an]
];
const ln = c$1((e) => {
	const t = /^v?(\d+)/.exec(e);
	return t ? Number(t[1]) : void 0;
}, "parseMajor");
const pn = c$1((e, t) => {
	const r = ln(t);
	if (r === void 0) return;
	const n = new Set(Object.keys(e));
	for (const [s, o] of cn) s <= r && o(e, n);
}, "applyVersionDefaults");
const ye$1 = c$1((e, t) => se(path.relative(e, t)), "pathRelative");
const Ge = [
	"files",
	"include",
	"exclude"
];
const Ke = c$1((e, t, r) => {
	const n = path.join(t, r);
	return A(path.relative(e, n)) || "./";
}, "resolveAndRelativize");
const un = c$1((e, t, r) => {
	const n = path.relative(e, t);
	if (!n) return r;
	return A(`${n}/${r.startsWith("./") ? r.slice(2) : r}`);
}, "prefixPattern");
const ze = ["outDir", "declarationDir"];
const oe = c$1((e, t) => {
	if (e.startsWith(U$1)) return A(path.join(t, e.slice(12)));
}, "interpolateConfigDir");
const fn = [
	"outDir",
	"declarationDir",
	"outFile",
	"rootDir",
	"baseUrl",
	"tsBuildInfoFile"
];
const dn = c$1((e, t = {}) => {
	if (e.length === 0) throw new Error("Chain must not be empty");
	const { typescriptVersion: r } = t, n = new Map(e.map((f) => [f.path, f])), s = /* @__PURE__ */ new Map(), o = c$1((f) => {
		const E = s.get(f);
		if (E) return E;
		const b = n.get(f);
		if (!b) throw new Error(`Config not found in chain: ${f}`);
		const k = b.config, v = path.dirname(f);
		let d = {
			...k,
			...k.compilerOptions && { compilerOptions: { ...k.compilerOptions } },
			...k.watchOptions && { watchOptions: { ...k.watchOptions } }
		};
		if (delete d.extends, d.compilerOptions?.paths && !d.compilerOptions.baseUrl && (d.compilerOptions[he$1] = v), k.extends) {
			const g = Array.isArray(k.extends) ? k.extends : [k.extends];
			for (const T of g.toReversed()) {
				const l = o(T), C = path.dirname(T), { references: S, ...x } = l;
				if (x.compilerOptions) {
					const D = { ...x.compilerOptions };
					for (const L of [
						"baseUrl",
						"outDir",
						"declarationDir",
						"rootDir"
					]) {
						const P = D[L];
						P && !P.startsWith(U$1) && (D[L] = Ke(v, C, P));
					}
					for (const L of ["rootDirs", "typeRoots"]) {
						const P = D[L];
						P && (D[L] = P.map((W) => W.startsWith(U$1) ? W : Ke(v, C, W)));
					}
					x.compilerOptions = D;
				}
				for (const D of Ge) {
					const L = x[D];
					L && (x[D] = L.map((P) => P.startsWith(U$1) ? P : un(v, C, P)));
				}
				const w = {
					...x,
					...d,
					compilerOptions: {
						...x.compilerOptions,
						...d.compilerOptions
					}
				};
				x.watchOptions && (w.watchOptions = {
					...x.watchOptions,
					...d.watchOptions
				}), d = w;
			}
		}
		if (d.compilerOptions) {
			const { compilerOptions: g } = d;
			for (const l of ["baseUrl", "rootDir"]) {
				const C = g[l];
				if (C && !C.startsWith(U$1)) {
					const S = path.resolve(v, C);
					g[l] = ye$1(v, S);
				}
			}
			for (const l of ze) {
				let C = g[l];
				C && (Array.isArray(d.exclude) || (d.exclude = ze.map((S) => g[S]).filter(Boolean)), C.startsWith(U$1) || (C = se(C)), g[l] = C);
			}
		} else d.compilerOptions = {};
		if (d.include && (d.include = d.include.map(A)), d.files && (d.files = d.files.map((g) => g.startsWith(U$1) ? g : se(g))), d.watchOptions) {
			const { watchOptions: g } = d;
			for (const T of ["excludeDirectories", "excludeFiles"]) g[T] && (g[T] = g[T].map((l) => A(path.resolve(v, l))));
			for (const T of [
				"watchFile",
				"watchDirectory",
				"fallbackPolling"
			]) if (g[T]) {
				const l = g;
				l[T] = g[T].toLowerCase();
			}
		}
		return s.set(f, d), d;
	}, "resolveEntry"), a = e[0], i = o(a.path), m = path.dirname(a.path), u = {
		...i,
		compilerOptions: i.compilerOptions ? { ...i.compilerOptions } : {}
	}, { compilerOptions: y } = u;
	if (y) {
		for (const f of fn) {
			const E = y[f];
			if (E) {
				const b = oe(E, m);
				y[f] = b ? ye$1(m, b) : E;
			}
		}
		for (const f of ["rootDirs", "typeRoots"]) {
			const E = y[f];
			E && (y[f] = E.map((b) => {
				const k = oe(b, m);
				return k ? ye$1(m, k) : se(b);
			}));
		}
		if (y.paths) {
			const f = {};
			for (const [E, b] of Object.entries(y.paths)) f[E] = b.map((k) => oe(k, m) ?? k);
			y.paths = f;
		}
		r && pn(y, r), u.compilerOptions = tn(y);
	}
	for (const f of Ge) {
		const E = u[f];
		E && (u[f] = E.map((b) => oe(b, m) ?? b));
	}
	return {
		path: a.path,
		config: u,
		sources: e.map((f) => f.path)
	};
}, "resolveExtendsChain");
const mn = c$1((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map() } = t, n = path.resolve(e), s = [], o = /* @__PURE__ */ new Set(), a = c$1((i, m) => {
		const u = A(i);
		if (o.has(u)) return;
		o.add(u);
		let y;
		try {
			y = de$1(i, r) || {};
		} catch {
			throw new Error(`Cannot resolve tsconfig at path: ${i}`);
		}
		if (typeof y != "object") throw new SyntaxError(`Failed to parse tsconfig at: ${i}`);
		const f = path.dirname(i);
		if (y.extends) {
			const E = Array.isArray(y.extends), b = (E ? y.extends : [y.extends]).map((v) => {
				const d = qt$1(v, f, r);
				if (!d) throw new Error(`File '${v}' not found.`);
				const g = A(d);
				if (m.has(g) || g === u) throw new Error(`Circularity detected while resolving configuration: ${g}`);
				return g;
			});
			y.extends = E ? b : b[0], s.push({
				path: u,
				config: y
			});
			const k = new Set(m);
			k.add(u);
			for (const v of [...b].reverse()) a(v, k);
		} else s.push({
			path: u,
			config: y
		});
	}, "collect");
	return a(n, /* @__PURE__ */ new Set()), s;
}, "getExtendsChain");
const ke = c$1((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map(), typescriptVersion: n = "auto" } = t, s = mn(e, { cache: r });
	let o;
	return n === "auto" ? o = Yt(path.dirname(s[0].path), r) : n !== !1 && (o = n), dn(s, { typescriptVersion: o });
}, "readTsconfig");
var hn = Object.defineProperty;
var ae = c$1((e, t) => hn(e, "name", {
	value: t,
	configurable: !0
}), "s");
const He = ae((e) => {
	let t = "";
	for (let r = 0; r < e.length; r += 1) {
		const n = e[r], s = n.toUpperCase();
		t += n === s ? n.toLowerCase() : s;
	}
	return t;
}, "invertCase"), be$1 = /* @__PURE__ */ new Map(), Xe = ae((e, t) => {
	const r = St.join(e, `.is-fs-case-sensitive-test-${process.pid}`);
	try {
		return t.writeFileSync(r, ""), !t.existsSync(He(r));
	} finally {
		try {
			t.unlinkSync(r);
		} catch {}
	}
}, "checkDirectoryCaseWithWrite"), gn = ae((e, t, r) => {
	try {
		return Xe(e, r);
	} catch (n) {
		if (t === void 0) return Xe(Tt.tmpdir(), r);
		throw n;
	}
}, "checkDirectoryCaseWithFallback"), yn = ae((e, t = jt, r = !0) => {
	const n = e ?? process.cwd();
	if (r && be$1.has(n)) return be$1.get(n);
	let s;
	const o = He(n);
	return o !== n && t.existsSync(n) ? s = !t.existsSync(o) : s = gn(n, e, t), r && be$1.set(n, s), s;
}, "isFsCaseSensitive"), { join: Ye } = path.posix, we$1 = {
	ts: [
		".ts",
		".tsx",
		".d.ts"
	],
	cts: [".cts", ".d.cts"],
	mts: [".mts", ".d.mts"]
}, kn = c$1((e) => {
	const t = [...we$1.ts], r = [...we$1.cts], n = [...we$1.mts];
	return e?.allowJs && (t.push(".js", ".jsx"), r.push(".cjs"), n.push(".mjs")), [
		...t,
		...r,
		...n
	];
}, "getSupportedExtensions"), bn = c$1((e) => {
	const t = [];
	if (!e) return t;
	const { outDir: r, declarationDir: n } = e;
	return r && t.push(r), n && t.push(n), t;
}, "getDefaultExcludeSpec"), Ze = c$1((e) => e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), "escapeForRegexp"), xe = `(?!(${[
	"node_modules",
	"bower_components",
	"jspm_packages"
].join("|")})(/|$))`, xn = /(?:^|\/)[^.*?]+$/, qe$1 = "**/*", ie = "[^/]", Ee$1 = "[^./]", et = process.platform === "win32", En = c$1(({ config: e, path: t }, r) => {
	if ("extends" in e) throw new Error("tsconfig#extends must be resolved. Use getTsconfig or readTsconfig to resolve it.");
	if (!path.isAbsolute(t)) throw new Error("The tsconfig path must be absolute");
	et && (t = A(t));
	const n = path.dirname(t), { files: s, include: o, exclude: a, compilerOptions: i } = e, m = c$1((v) => path.isAbsolute(v) ? v : Ye(n, v), "resolvePattern"), u = s ? new Set(s.map(m)) : void 0, y = kn(i), f = r ? "" : "i", E = (a || bn(i)).map((v) => {
		const d = m(v), g = Ze(d).replaceAll(String.raw`\*\*/`, "(.+/)?").replaceAll(String.raw`\*`, `${ie}*`).replaceAll(String.raw`\?`, ie);
		return new RegExp(`^${g}($|/)`, f);
	}), b = s || o ? o : [qe$1];
	return {
		filesSet: u,
		extensions: y,
		excludePatterns: E,
		includePatterns: b ? b.map((v) => {
			let d = m(v);
			xn.test(d) && (d = Ye(d, qe$1));
			const g = Ze(d).replaceAll(String.raw`/\*\*`, `(/${xe}${Ee$1}${ie}*)*?`).replaceAll(/(\/)?\\\*/g, (T, l) => {
				const C = String.raw`(${Ee$1}|(\.(?!min\.js$))?)*`;
				return l ? `/${xe}${Ee$1}${C}` : C;
			}).replaceAll(/(\/)?\\\?/g, (T, l) => {
				const C = ie;
				return l ? `/${xe}${C}` : C;
			});
			return new RegExp(`^${g}$`, f);
		}) : void 0
	};
}, "compilePatterns"), tt = /* @__PURE__ */ new WeakMap(), ve$1 = c$1((e, t) => {
	if (!path.isAbsolute(t)) return !1;
	et && (t = A(t));
	let r = tt.get(e);
	r || (r = En(e, yn()), tt.set(e, r));
	const { filesSet: n, extensions: s, excludePatterns: o, includePatterns: a } = r;
	return n?.has(t) ? !0 : !s.some((i) => t.endsWith(i)) || o.some((i) => i.test(t)) ? !1 : !!(a && a.some((i) => i.test(t)));
}, "isFileIncluded"), nt$1 = c$1((e, t, r, n) => {
	const s = path.resolve(e);
	let o = A(e);
	for (;;) {
		const a = K$1(o, t, r);
		if (!a) return;
		const i = path.resolve(a), m = ke(i, {
			cache: r,
			typescriptVersion: n
		});
		if (ve$1(m, s)) return m;
		const u = path.dirname(a), y = path.dirname(u);
		if (y === u) return;
		o = y;
	}
}, "findConfigApplicable"), vn = c$1((e = process.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1 } = t;
	if (!s) {
		const o = path.resolve(e);
		return path.basename(o) === r && _(n, o)?.isFile() ? A(o) : K$1(A(e), r, n);
	}
	return nt$1(e, r, n, !1)?.path;
}, "findTsconfig"), Cn = c$1((e = process.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1, typescriptVersion: o = "auto" } = t;
	if (!s) {
		const a = vn(e, {
			configName: r,
			cache: n
		});
		return a ? ke(a, {
			cache: n,
			typescriptVersion: o
		}) : void 0;
	}
	return nt$1(e, r, n, o);
}, "getTsconfig"), jn = /\*/g, rt$1 = c$1((e, t) => {
	const r = e.match(jn);
	if (r && r.length > 1) throw new Error(t);
}, "assertStarCount"), Tn = c$1((e) => {
	if (e.includes("*")) {
		const [t, r] = e.split("*");
		return {
			prefix: t,
			suffix: r
		};
	}
	return e;
}, "parsePattern"), Sn = c$1(({ prefix: e, suffix: t }, r) => r.startsWith(e) && r.endsWith(t), "isPatternMatch"), On = c$1((e, t, r) => Object.entries(e).map(([n, s]) => (rt$1(n, `Pattern '${n}' can have at most one '*' character.`), {
	pattern: Tn(n),
	substitutions: s.map((o) => {
		if (rt$1(o, `Substitution '${o}' in pattern '${n}' can have at most one '*' character.`), !t && !ge$1.test(o) && !path.isAbsolute(o)) throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");
		return path.resolve(r, o);
	})
})), "parsePaths"), An = c$1((e) => {
	const { compilerOptions: t } = e.config;
	if (!t) return null;
	const { baseUrl: r, paths: n } = t;
	if (!r && !n) return null;
	const s = he$1 in t && t[he$1], o = path.resolve(path.dirname(e.path), r || s || "."), a = n ? On(n, r, o) : [], i = /* @__PURE__ */ new Map(), m = [];
	for (const u of a) typeof u.pattern == "string" ? i.set(u.pattern, u.substitutions) : m.push(u);
	return {
		exactEntries: i,
		patternEntries: m,
		resolvedBaseUrl: o,
		baseUrl: r
	};
}, "compilePaths"), st$1 = /* @__PURE__ */ new WeakMap(), ot$1 = c$1((e, t) => {
	let r = st$1.get(e);
	if (r === void 0 && (r = An(e), st$1.set(e, r)), !r) return [];
	if (ge$1.test(t)) return [];
	const { exactEntries: n, patternEntries: s, resolvedBaseUrl: o, baseUrl: a } = r, i = n.get(t);
	if (i) return i.map(A);
	let m, u = -1;
	for (const f of s) Sn(f.pattern, t) && f.pattern.prefix.length > u && (u = f.pattern.prefix.length, m = f);
	if (!m) return a ? [A(path.join(o, t))] : [];
	const y = t.slice(m.pattern.prefix.length, t.length - m.pattern.suffix.length);
	return m.substitutions.map((f) => A(f.replace("*", y)));
}, "resolvePathAlias"), at$1 = p((e) => {
	if (e) return ke(e);
	try {
		return Cn() ?? void 0;
	} catch {}
}, "loadTsconfig"), $n = `
//# sourceMappingURL=data:application/json;base64,`, it$1 = p(() => process.sourceMapsEnabled ?? !0, "shouldApplySourceMap"), Ce$1 = p(({ code: e, map: t }) => e + $n + Buffer.from(JSON.stringify(t), "utf8").toString("base64"), "inlineSourceMap"), z$1 = Symbol.for("tsx:global-cjs-loader-count"), H = globalThis, Pn = p(() => (H[z$1] ?? 0) > 0, "isGlobalCjsLoaderActive"), _n = p(() => (H[z$1] = (H[z$1] ?? 0) + 1, () => {
	H[z$1] = Math.max((H[z$1] ?? 1) - 1, 0);
}), "activateGlobalCjsLoader"), je$1 = p((e) => e[0] === "." && (e[1] === "/" || e[1] === "." || e[2] === "/"), "isRelativePath"), V$1 = p((e) => je$1(e) || path.isAbsolute(e), "isFilePath"), X$1 = "file://", Dn = [
	".ts",
	".tsx",
	".jsx",
	".mts",
	".cts"
], ct$1 = /\.([cm]?ts|[tj]sx)(?:$|[?#])/, Ln = /\.(?:ts|tsx|jsx)(?:$|[?#])/, Un = /[/\\].+\.(?:cts|cjs)(?:$|[?#])/, Rn = /\.json(?:$|[?#])/, ce$1 = /\/(?:$|[?#])/, Fn = /^(?:@[^/]+\/)?[^/\\]+$/, lt = `${path.sep}node_modules${path.sep}`, Te$1 = p((e) => e?.split(path.sep).includes("node_modules") ?? !1, "isDependencyPath"), le$1 = Number(process.env.TSX_DEBUG);
le$1 && (f.enabled = !0, f.supportLevel = 3);
const pt = p((e) => (t, ...r) => {
	if (!le$1 || t > le$1) return;
	const n = `${E$1(` tsx P${process.pid} `)} ${e}`, s = r.map((o) => typeof o == "string" ? o : inspect(o, { colors: !0 })).join(" ");
	writeSync(1, `${n} ${s}
`);
}, "createLog");
const Q = pt(T$1(b$1(" CJS ")));
const In = pt(L(" ESM "));
const R = /* @__PURE__ */ new Map();
const Nn = p(async (e) => {
	if (R.has(e)) return R.get(e);
	if (!await fs.promises.access(e).then(() => !0, () => !1)) {
		R.set(e, void 0);
		return;
	}
	const r = await fs.promises.readFile(e, "utf8");
	try {
		const n = JSON.parse(r);
		return R.set(e, n), n;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJson");
const Wn = p((e) => {
	if (R.has(e)) return R.get(e);
	if (!fs.existsSync(e)) {
		R.set(e, void 0);
		return;
	}
	const t = fs.readFileSync(e, "utf8");
	try {
		const r = JSON.parse(t);
		return R.set(e, r), r;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJsonSync");
const Bn = p(async (e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const r = fileURLToPath(t), n = await Nn(r);
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJson");
const ut = p((e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const r = fileURLToPath(t), n = Wn(r);
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJsonSync");
const Mn = p(async (e) => (await Bn(e))?.type ?? "commonjs", "getPackageType");
const Jn = p((e) => ut(e)?.type ?? "commonjs", "getPackageTypeSync");
const Vn = p((e) => ut(e)?.type, "getNearestPackageTypeSync");
const ft = [".js", ".json"];
const dt = [
	".ts",
	".tsx",
	".jsx"
];
const Qn = /* @__PURE__ */ new Set([".json", ".node"]);
const Gn = [...dt, ...ft];
const Kn = [...ft, ...dt];
const Y = Object.create(null);
Y[".js"] = [
	".ts",
	".tsx",
	".js",
	".jsx"
], Y[".jsx"] = [
	".tsx",
	".ts",
	".jsx",
	".js"
], Y[".cjs"] = [".cts"], Y[".mjs"] = [".mts"];
const zn = /* @__PURE__ */ new Set([
	".ts",
	".tsx",
	".mts",
	".cts"
]);
const mt$1 = p((e, t = !1) => {
	const r = e.indexOf("?"), n = r === -1 ? e : e.slice(0, r), s = r === -1 ? "" : e.slice(r);
	if (!t && !V$1(n) && !n.startsWith("file://")) return;
	const o = path.extname(n);
	if (zn.has(o)) return;
	const a = Y[o];
	if (a) {
		const m = n.slice(0, -o.length);
		return a.map((u) => m + u + s);
	}
	return Qn.has(o) ? void 0 : (!(e.startsWith("file://") || V$1(n)) || n.includes(lt) || n.includes("/node_modules/") ? Kn : Gn).map((m) => n + m + s);
}, "getExtensionResolution");
const Se$1 = p((e) => Array.from(e).length > 0 ? `?${e.toString()}` : "", "urlSearchParamsStringify");
const Hn = [
	".cts",
	".mts",
	".ts",
	".tsx",
	".jsx"
];
const Xn = [
	".js",
	".cjs",
	".mjs"
];
const ht = [
	".ts",
	".tsx",
	".jsx"
];
const gt = "module.exports";
const Yn = "Top-level await is currently not supported with the \"cjs\" output format";
const yt = p((e) => {
	const t = path.extname(e);
	return t === ".mjs" || t === ".mts" || (t === ".js" || t === ".ts") && Vn(pathToFileURL(e).toString()) !== "commonjs";
}, "isRequireEsmCandidate");
const Oe$1 = p((e, t, r, n) => {
	const s = Object.getOwnPropertyDescriptor(e, t);
	s?.set ? e[t] = r : (!s || s.configurable) && Object.defineProperty(e, t, {
		value: r,
		enumerable: s?.enumerable || n?.enumerable,
		writable: n?.writable ?? (s ? s.writable : !0),
		configurable: n?.configurable ?? (s ? s.configurable : !0)
	});
}, "safeSet");
const Zn = p((e, t, r, n) => {
	const s = t[".js"], o = process.features.require_module ?? c$2(R$2), a = p((i, m) => {
		if (e.enabled === !1) return s(i, m);
		const [u, y] = m.split("?");
		if ((new URLSearchParams(y).get("namespace") ?? void 0) !== n) return s(i, m);
		Q(2, "load", { filePath: m }), i.id?.startsWith("data:text/javascript,") && (i.path = path.dirname(u)), s$2?.send && s$2.send({
			type: "dependency",
			path: u
		});
		const E = Hn.some((l) => u.endsWith(l)), b = Xn.some((l) => u.endsWith(l));
		if (!E && !b) return s(i, u);
		let k = fs.readFileSync(u, "utf8");
		const v = b && !u.endsWith(".cjs") && !u.endsWith(".cts") && ln$1(k), d = (E || v) && r && ve$1(r, u) ? r.config : void 0;
		if (u.endsWith(".cjs")) {
			const l = ae$1(m, k);
			l && (k = it$1() ? Ce$1(l) : l.code);
		} else if (E || v) try {
			const l = jr(k, m, { tsconfigRaw: d });
			k = it$1() ? Ce$1(l) : l.code;
		} catch (l) {
			throw yt(u) && l instanceof Error && l.name === "TransformError" && l.message.includes(Yn) && Object.assign(l, { code: o ? "ERR_REQUIRE_ASYNC_MODULE" : "ERR_REQUIRE_ESM" }), l;
		}
		Q(1, "loaded", { filePath: u }), i._compile(k, u), y && $._cache[u] === i && ($._cache[m] = i, delete $._cache[u]);
		const { exports: g } = i;
		(o && g && (typeof g == "object" || typeof g == "function") ? Object.getOwnPropertyDescriptor(g, gt) : void 0)?.get && yt(u) && (i.exports = g[gt]);
	}, "transformer");
	Oe$1(t, ".js", a);
	for (const i of ht) Oe$1(t, i, a, {
		enumerable: !n,
		writable: !0,
		configurable: !0
	});
	return Oe$1(t, ".mjs", a, {
		writable: !0,
		configurable: !0
	}), () => {
		t[".js"] === a && (t[".js"] = s);
		for (const i of [...ht, ".mjs"]) t[i] === a && delete t[i];
	};
}, "createExtensions");
const qn = p((e) => (t) => {
	if ((t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), ce$1.test(t)) {
		let r = path.join(t, "index");
		t.startsWith("./") && (r = `./${r}`);
		try {
			return e(r);
		} catch {}
	}
	try {
		return e(t);
	} catch (r) {
		const n = r;
		if (n.code === "MODULE_NOT_FOUND") try {
			return e(`${t}${path.sep}index`);
		} catch {}
		throw n;
	}
}, "createImplicitResolver");
const er = p((e, t) => {
	let r;
	return path.isAbsolute(e) ? r = e : je$1(e) && t && (r = path.resolve(t, e)), r !== void 0 && !existsSync(r);
}, "candidateDoesntExist");
const pe$1 = p((e, t, r, n) => {
	if (Q(3, "resolveTsFilename", {
		request: t,
		isDirectory: ce$1.test(t)
	}), ce$1.test(t)) return;
	const s = mt$1(t, n);
	if (s) {
		for (const o of s) if (!er(o, r)) try {
			return e(o);
		} catch (a) {
			const { code: i } = a;
			if (i !== "MODULE_NOT_FOUND" && i !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw a;
		}
	}
}, "resolveTsFilename");
const tr = p((e, t, r, n) => (s) => {
	if (Q(3, "resolveTsFilename", {
		request: s,
		resolveTsExtensions: r,
		isFilePath: V$1(s)
	}), r && V$1(s)) {
		const o = pe$1(e, s, t, n);
		if (o) return o;
	}
	try {
		return e(s);
	} catch (o) {
		const a = o;
		if (r && a.code === "MODULE_NOT_FOUND") {
			if (a.path) {
				const m = a.message.match(/^Cannot find module '([^']+)'$/);
				if (m) {
					const y = m[1], f = pe$1(e, y, t, n);
					if (f) return f;
				}
				const u = a.message.match(/^Cannot find module '([^']+)'. Please verify that the package.json has a valid "main" entry$/);
				if (u) {
					const y = u[1], f = pe$1(e, y, t, n);
					if (f) return f;
				}
			}
			const i = pe$1(e, s, t, n);
			if (i) return i;
		}
		throw a;
	}
}, "createTsExtensionResolver");
const kt = "at cjsPreparseModuleExports (node:internal";
const nr = p((e) => {
	const t = e.stack.split(`
`).slice(1);
	return t[1].includes(kt) || t[2].includes(kt);
}, "isFromCjsLexer");
const rr = p((e, t) => {
	const r = e.split("?"), n = new URLSearchParams(r[1]);
	if (t?.filename) {
		const s = De(t.filename);
		let o;
		if (s) {
			const m = s.split("?"), u = m[0];
			o = m[1];
			const f = new URLSearchParams(o).get("namespace");
			t.filename = u, t.path = path.dirname(u), t.paths = $._nodeModulePaths(t.path), f || ($._cache[u] = t);
		}
		o || (o = t.filename.split("?")[1]);
		const i = new URLSearchParams(o).get("namespace");
		i && n.append("namespace", i);
	}
	return [
		r[0],
		n,
		(s, o) => (path.isAbsolute(s) && !s.endsWith(".json") && !s.endsWith(".node") && !(o === 0 && nr(/* @__PURE__ */ new Error())) && (s += Se$1(n)), s)
	];
}, "preserveQuery");
const sr = p((e, t, r, n) => {
	if (e.startsWith("file://") && (e = fileURLToPath(e)), n && !V$1(e) && !Te$1(t?.filename)) {
		const s = ot$1(n, e);
		for (const o of s) try {
			return r(o);
		} catch {}
	}
	return r(e);
}, "resolveTsPaths");
const or = p((e, t, r, n) => (s, o, ...a) => {
	if (e.enabled === !1) return t(s, o, ...a);
	s = Le$1(s);
	const [i, m, u] = rr(s, o);
	if ((m.get("namespace") ?? void 0) !== n) return t(s, o, ...a);
	Q(2, "resolve", {
		request: s,
		parent: o?.filename ?? o,
		restOfArgs: a
	});
	let y = p((v) => t(v, o, ...a), "nextResolveSimple");
	const f = Te$1(o?.filename), E = !!(n || o?.filename && ct$1.test(o.filename)), b = !!(E || r?.config.compilerOptions?.allowJs && !f);
	y = tr(y, o?.path ?? void 0, b, E), y = qn(y);
	const k = u(sr(i, o, y, r), a.length);
	return Q(1, "resolved", {
		request: s,
		parent: o?.filename ?? o,
		resolved: k
	}), k;
}, "createResolveFilename");
const bt$1 = p((e, t) => {
	if (!t) throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");
	return e.startsWith(".") ? ((typeof t == "string" && t.startsWith("file://") || t instanceof URL) && (t = fileURLToPath(t)), path.resolve(path.dirname(t), e)) : e;
}, "resolveContext");
const ar = p((e) => {
	const { sourceMapsEnabled: t } = process, r = { enabled: !0 }, n = at$1(process.env.TSX_TSCONFIG_PATH);
	process.setSourceMapsEnabled(!0);
	const s = $._resolveFilename, o = or(r, s, n, e?.namespace);
	$._resolveFilename = o;
	const a = Zn(r, $._extensions, n, e?.namespace), i = e?.namespace ? void 0 : _n(), m = p(() => {
		t === !1 && process.setSourceMapsEnabled(!1), r.enabled = !1, $._resolveFilename === o && ($._resolveFilename = s), a(), i?.();
	}, "unregister");
	if (e?.namespace) {
		m.require = p((f, E) => {
			const [k, v] = bt$1(f, E).split("?"), d = new URLSearchParams(v);
			return e.namespace && !k.startsWith("node:") && d.set("namespace", e.namespace), m$2(k + Se$1(d));
		}, "scopedRequire");
		m.resolve = p((f, E, b) => {
			const [v, d] = bt$1(f, E).split("?"), g = new URLSearchParams(d);
			return e.namespace && !v.startsWith("node:") && g.set("namespace", e.namespace), o(v + Se$1(g), module, !1, b);
		}, "scopedResolve"), m.unregister = m;
	}
	return m;
}, "register");

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/register-SoqaU4rg.mjs
var Xt = Object.defineProperty;
var c = (t, r) => Xt(t, "name", {
	value: r,
	configurable: !0
});
const ce = c(() => ({
	active: !0,
	parsedTsconfig: void 0
}), "createDefaultData");
const wt = c((t) => {
	const r = {
		active: !0,
		namespace: t?.namespace,
		onImport: t?.onImport,
		parsedTsconfig: void 0,
		port: t?.port,
		tsconfig: t?.tsconfig
	};
	return t?.tsconfig !== !1 && (r.parsedTsconfig = at$1(t?.tsconfig ?? process.env.TSX_TSCONFIG_PATH)), r;
}, "createData");
const me = c((t) => async (r) => {
	if (!r) throw new Error(`tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0`);
	Object.assign(t, wt(r)), r.port && r.port.on("message", (e) => {
		e === "deactivate" && (t.active = !1, r.port.postMessage({ type: "deactivated" }));
	});
}, "createInitialize");
const de = c((t) => () => (t.parsedTsconfig = at$1(process.env.TSX_TSCONFIG_PATH), "process.setSourceMapsEnabled(true);"), "createGlobalPreload");
const le = c((t) => {
	const { pathname: r } = new URL(t), e = path.extname(r);
	if (e === ".mts" || e === ".mjs") return "module";
	if (e === ".cts" || e === ".cjs") return "commonjs";
	if (e === ".js" || Dn.includes(e)) return Mn(t);
}, "getFormatFromFileUrl");
const ue = c((t) => {
	const { pathname: r } = new URL(t), e = path.extname(r);
	if (e === ".mts" || e === ".mjs") return "module";
	if (e === ".cts" || e === ".cjs") return "commonjs";
	if (e === ".js" || Dn.includes(e)) return Jn(t);
}, "getFormatFromFileUrlSync");
const Rt = "tsx-namespace";
const I = `${Rt}=`;
const W = "tsx-commonjs-export-preparse";
const fe = `${W}=1`;
const O = "tsx-commonjs-virtual-query";
const $$1 = /* @__PURE__ */ new Map();
const pe = /^data:/i;
const T = c((t) => pe.test(t), "isDataUrl");
const rt = c((t, r) => t.slice(1).split("&").filter((e) => e && r.every((s) => !e.startsWith(s))).join("&"), "getQueryWithoutParameters");
const x = c((t, r) => {
	const e = rt(t, r);
	return e ? `?${e}` : "";
}, "getSearchWithoutParameters");
const he = c((t) => t.replaceAll(/\/\*[\s\S]*?\*\/|\/\/[^\n\r]*/g, ""), "stripComments");
const ge = c((t) => {
	const r = he(t);
	if (/^\s*export\s*\*/.test(r)) return "named";
	if (/^\s*import\s*\*\s*as\s+[\w$]+/.test(r)) return "namespace";
	const e = r.match(/\{([^}]*)\}/)?.[1];
	if (e) return e.split(",").some((s) => {
		const n = s.trim().split(/\s+as\s+/)[0];
		return !!(n && n !== "default");
	}) ? "named" : void 0;
}, "getCommonJsImportBinding");
const ye = c((t, r, e) => {
	const s = $$1.get(t);
	if (!s) return !1;
	try {
		const [n] = oe$1(s);
		return n.some((o) => {
			if (o.d !== -1 || o.n !== r) return !1;
			const a = ge(s.slice(o.ss, o.s));
			return a === "named" || e && a === "namespace";
		});
	} catch {
		return !1;
	}
}, "parentImportsCommonJsExports");
const w = c((t) => {
	const r = t.indexOf("?"), e = t.indexOf("#");
	if (T(t)) {
		if (e === -1) return;
		const s = t.slice(e + 1), n = s.lastIndexOf("&"), o = s.slice(n + 1);
		return o.startsWith(I) ? o.slice(I.length) : void 0;
	}
	if (!(r === -1 || e !== -1 && e < r)) return new URLSearchParams(t.slice(r, e === -1 ? void 0 : e)).get(Rt) ?? void 0;
}, "getNamespace");
const It = c$2(m$3) ? "importAttributes" : "importAssertions";
const Tt$1 = c((t) => t === "commonjs" || t === "commonjs-typescript", "isCommonJsFormat");
const Et = c((t) => t === "module-typescript" || t === "typescript", "isModuleTypeScriptFormat");
const Pe = c$2(p$2);
const Se = [`${O}=`];
const G = [`${W}=`, `${O}=`];
const E = c((t, r) => r.parsedTsconfig && ve$1(r.parsedTsconfig, t) ? r.parsedTsconfig.config : void 0, "getTsconfigRaw");
const ve = c((t) => {
	if (!t.searchParams.has(O)) return;
	const { pathname: r } = t, e = r.toLowerCase().lastIndexOf("%3f");
	if (e === -1) return;
	const s = new URL(t);
	return s.pathname = r.slice(0, e), s.search = "", fileURLToPath(s);
}, "getFilePathFromVirtualQuery");
const st = c((t) => {
	const r = t.startsWith("file://") ? new URL(t) : void 0, e = r ? fileURLToPath(r) : t, s = r && ve(r), n = s || e;
	return {
		fileUrl: r,
		filePath: n,
		loadUrl: r && s ? pathToFileURL(n).toString() + x(r.search, Se) : t
	};
}, "getFileLoadContext");
const jt$1 = c((t, r) => {
	if (!r?.search) return t;
	const e = x(r.search, G);
	return e ? pathToFileURL(t).toString() + e : t;
}, "getTransformPath");
const Lt = c((t, r, e) => {
	const s = [...r ? rt(r.search, [I, ...G]).split("&").filter(Boolean) : [], ...e ? [`namespace=${encodeURIComponent(e)}`] : []].join("&");
	return s ? `${t}?${s}` : t;
}, "getFilePathWithQuery");
const Ue = new TextDecoder();
const Ft = c((t) => typeof t == "string" ? t : Ue.decode(t), "decodeSource");
const we = c((t, r) => {
	const e = new URL(r), s = r.startsWith("file://") ? st(r).filePath : void 0;
	if (T(r)) {
		if (t.namespace) {
			const o = `${I}${t.namespace}`;
			e.hash === `#${o}` ? e.hash = "" : e.hash.endsWith(`&${o}`) && (e.hash = e.hash.slice(0, -o.length - 1));
		}
	} else e.searchParams.delete("tsx-namespace"), e.searchParams.delete(W), e.searchParams.delete(O);
	s && (e.pathname = new URL(pathToFileURL(s)).pathname);
	const n = e.toString();
	return t.port && t.port.postMessage({
		type: "load",
		url: n
	}), t.onImport?.(n), n;
}, "notifyLoad");
const Wt = c((t, r) => {
	if (!t.active) return !1;
	const e = w(r);
	if (t.namespace !== e) return !1;
	const s = we(t, r);
	return s$2.send && s$2.send({
		type: "dependency",
		path: s
	}), !0;
}, "prepareLoad");
const Ot = c((t, r) => {
	if (!Rn.test(t)) return r;
	const e = r[It];
	return e?.type ? r : {
		...r,
		[It]: {
			...e,
			type: "json"
		}
	};
}, "prepareJsonAttributes");
const nt = c(({ conditions: t }) => t?.includes("require") === !0 && !t.includes("import"), "isCommonJsRequireContext$1");
const Re = c((t) => {
	const r = c(async (e, s, n) => {
		if (!Wt(t, e)) return n(e, s);
		const o = w(e), { fileUrl: a, filePath: i, loadUrl: l } = st(e), m = await n(l, Ot(l, s));
		In(3, "loaded by next loader", {
			url: e,
			loadUrl: l,
			loaded: m
		});
		const d = a?.searchParams.has(W) === !0, p = m.format, h = a ? new URL(pathToFileURL(i)) : void 0;
		if (h && a && (h.search = x(a.search, G)), Tt$1(p) && a && m.responseURL?.startsWith("file:") && !i.endsWith(".cjs")) {
			const g = await readFile(pathToFileURL(i), "utf8"), M = ln$1(g);
			if (p === "commonjs-typescript" || !i.endsWith(".js") || M) {
				if (!Pe) {
					if (d && M && Ln.test(i)) {
						const _ = await Ur(g, i, {
							define: { "import.meta.url": JSON.stringify(h.toString()) },
							tsconfigRaw: E(i, t)
						});
						return $$1.set(e, _.code), {
							format: "module",
							source: Ce$1(_)
						};
					}
					return m;
				}
				if (!o && !d && !i.endsWith(".cts")) return m;
				const dt = !!(o || d || x(a.search, G)), lt = jr(g, jt$1(i, a), {
					cjsBanner: dt ? `require = require("node:module").createRequire(${JSON.stringify(pathToFileURL(i).toString())});` : void 0,
					tsconfigRaw: E(i, t)
				});
				if (m.format = "commonjs", m.source = Ce$1(lt), dt) {
					const _ = Lt(i, a, o);
					m.responseURL = `data:text/javascript,${encodeURIComponent(lt.code)}?filePath=${encodeURIComponent(_)}`;
				}
				return In(3, "returning CJS export annotation", m), m;
			}
		}
		if (!m.source) return m;
		const y = Ft(m.source), N = p === "json" && !nt(s);
		if (p === "commonjs-typescript") {
			const g = jr(y, i, { tsconfigRaw: E(i, t) });
			return {
				...m,
				format: "commonjs",
				source: Ce$1(g)
			};
		}
		if (N || Et(p) || ct$1.test(e)) {
			const g = await Ur(y, i, { tsconfigRaw: E(i, t) });
			return $$1.set(e, g.code), {
				format: "module",
				source: Ce$1(g)
			};
		}
		if (m.format === "module") {
			const g = ae$1(i, y);
			g ? (m.source = Ce$1(g), $$1.set(e, g.code)) : $$1.set(e, y);
		}
		return m;
	}, "load");
	return le$1 ? async (e, s, n) => {
		In(2, "load", {
			url: e,
			context: s
		});
		const o = await r(e, s, n);
		return In(1, "loaded", {
			url: e,
			result: o
		}), o;
	} : r;
}, "createLoad");
const Ie = c((t) => {
	const r = c((e, s, n) => {
		if (nt(s) && Pn() || !Wt(t, e)) return n(e, s);
		const o = w(e), { fileUrl: a, filePath: i, loadUrl: l } = st(e), m = n(l, Ot(l, s));
		In(3, "loaded by next loader", {
			url: e,
			loadUrl: l,
			loaded: m
		});
		const d = m.format;
		if (Tt$1(d) && c$2(p$2) && m.responseURL?.startsWith("file:") && !i.endsWith(".cjs")) {
			const y = readFileSync(pathToFileURL(i), "utf8");
			if (d === "commonjs-typescript" || !i.endsWith(".js") || ln$1(y)) {
				const N = jr(y, jt$1(i, a), { tsconfigRaw: E(i, t) }), g = !o && Pn(), M = Lt(i, a, o);
				return m.format = "commonjs", m.shouldBeReloadedByCJSLoader = g, m.source = Ce$1(N), g || (m.responseURL = `data:text/javascript,${encodeURIComponent(N.code)}?filePath=${encodeURIComponent(M)}`), In(3, "returning CJS export annotation", m), m;
			}
		}
		if (!m.source) return m;
		const p = Ft(m.source), h = d === "json" && !nt(s);
		if (d === "commonjs-typescript") {
			const y = jr(p, i, { tsconfigRaw: E(i, t) });
			return {
				...m,
				format: "commonjs",
				shouldBeReloadedByCJSLoader: !1,
				source: Ce$1(y)
			};
		}
		if (h || Et(d) || ct$1.test(e)) {
			const y = Tr(p, i, { tsconfigRaw: E(i, t) });
			return {
				format: "module",
				source: Ce$1(y)
			};
		}
		if (m.format === "module") {
			const y = ae$1(i, p);
			y && (m.source = Ce$1(y));
		}
		return m;
	}, "load");
	return le$1 ? (e, s, n) => {
		In(2, "loadSync", {
			url: e,
			context: s
		});
		const o = r(e, s, n);
		return In(1, "loadedSync", {
			url: e,
			result: o
		}), o;
	} : r;
}, "createLoadSync");
const Te = c((t) => {
	if (V$1(t) || t.startsWith("#") || t.includes(":")) return !1;
	const r = t.split("/"), e = r[0]?.startsWith("@") ? 2 : 1;
	return r.length > e && r.slice(0, e).every(Boolean);
}, "isBarePackageSubpath");
const Ee = c((t) => {
	const r = t.lastIndexOf(lt);
	if (r === -1) return;
	const s = t.slice(r + lt.length).split(path.sep), n = s[0]?.startsWith("@") ? 2 : 1;
	if (!(s.length <= n || !s[n - 1])) return path.join(t.slice(0, r), "node_modules", ...s.slice(0, n));
}, "getPackageDirectory");
const $t = c((t, r) => {
	if (!Te(t) || !r.startsWith("file://")) return;
	const e = fileURLToPath(r), s = Ee(e);
	if (!s) return;
	if (Xe$1(path.join(s, "package.json"))?.exports != null) return { kind: "root-exports" };
	const a = Xe$1(path.join(e, "package.json"));
	return typeof a?.main != "string" || !a.main ? { kind: "legacy-directory" } : {
		kind: "legacy-directory",
		mainUrl: pathToFileURL(path.resolve(e, a.main)).toString()
	};
}, "getPackageSubpathDirectoryInfo");
const je = c$2(p$2);
const bt = /^(?:[a-z][\d+.a-z-]*:\/\/|data:|file:|node:)/i;
const Ct = c((t) => !V$1(t) && !bt.test(t), "isTsconfigPathAliasSpecifier");
const D = c((t) => {
	if (t.url) return t.url;
	const r = t.message.match(/^Cannot find module '([^']+)'/);
	if (r) {
		const [, s] = r;
		return s;
	}
	const e = t.message.match(/^Cannot find package '([^']+)'/);
	if (e) {
		const [, s] = e;
		if (!path.isAbsolute(s)) return;
		const n = pathToFileURL(s);
		if (n.pathname.endsWith("/") && (n.pathname += "package.json"), n.pathname.endsWith("/package.json")) {
			const o = Xe$1(n);
			if (o?.main) return new URL(o.main, n).toString();
		} else return n.toString();
	}
}, "getMissingPathFromNotFound");
const b = c((t) => t === "ERR_MODULE_NOT_FOUND" || t === "MODULE_NOT_FOUND", "isModuleNotFound");
const X = c((t) => t instanceof Error && (b(t.code) || t.code === "ERR_UNSUPPORTED_DIR_IMPORT"), "isDirectoryEntryMiss");
const k = c((t) => t.conditions.includes("require") && !t.conditions.includes("import"), "isCommonJsRequireContext");
const ot = c((t) => {
	const r = t.indexOf("?"), e = t.indexOf("#");
	return r === -1 ? e : e === -1 ? r : Math.min(r, e);
}, "getUrlMetadataIndex");
const Jt = c((t, r) => r || !V$1(t) && !bt.test(t) ? t.indexOf("?") : ot(t), "getSpecifierMetadataIndex");
const Nt = c((t) => {
	if (t?.startsWith("file://")) return fileURLToPath(new URL(t));
}, "getParentFilePath");
const Le = c((t) => {
	if (!t) return !1;
	const r = Nt(t);
	if (r) return ct$1.test(r);
	const e = ot(t);
	return ct$1.test(e === -1 ? t : t.slice(0, e));
}, "isTypeScriptParent");
const C = c((t) => {
	const r = Nt(t);
	return r !== void 0 && Te$1(r);
}, "isParentDependency");
const Mt = c((t) => path.extname(new URL(t).pathname) === ".js" && Te$1(fileURLToPath(t)), "isImplicitJavaScriptDependency");
const _t = c((t, r) => Le(t) || r && !C(t), "resolvesTsExtensions");
const Fe = c((t, r) => {
	const e = ot(t), s = e === -1 ? t : t.slice(0, e);
	try {
		if (s.startsWith("file://")) return fileURLToPath(s);
		if (path.isAbsolute(s)) return s;
		if (je$1(s) && r?.startsWith("file://")) return fileURLToPath(new URL(s, r));
	} catch {}
}, "getProbeFilePath");
const At = c((t, r) => {
	const e = Fe(t, r);
	return e !== void 0 && !existsSync(e);
}, "candidateDoesntExist");
const z = c(async (t, r, e, s) => {
	const n = mt$1(t);
	if (In(3, "resolveExtensions", {
		url: t,
		context: r,
		throwError: s,
		tryPaths: n
	}), !n) return;
	let o;
	for (const a of n) if (!At(a, r.parentURL)) try {
		return await e(a, r);
	} catch (i) {
		const { code: l } = i;
		if (!b(l) && l !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw i;
		o = i;
	}
	if (s) {
		if (o === void 0) return e(n[0], r);
		throw o;
	}
}, "resolveExtensions");
const J = c((t, r, e, s) => {
	const n = mt$1(t);
	if (In(3, "resolveExtensionsSync", {
		url: t,
		context: r,
		throwError: s,
		tryPaths: n
	}), !n) return;
	let o;
	for (const a of n) if (!At(a, r.parentURL)) try {
		return e(a, r);
	} catch (i) {
		const { code: l } = i;
		if (!b(l) && l !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw i;
		o = i;
	}
	if (s) {
		if (o === void 0) return e(n[0], r);
		throw o;
	}
}, "resolveExtensionsSync");
const We = c(async (t, r, e, s) => {
	const n = s.parsedTsconfig?.config.compilerOptions?.allowJs ?? !1, o = _t(r.parentURL, n);
	if (In(3, "resolveBase", {
		specifier: t,
		context: r,
		specifierStartsWithFileUrl: t.startsWith("file://"),
		isRelativePath: je$1(t),
		resolveTsExtensions: o,
		allowJs: n
	}), (t.startsWith("file://") || je$1(t)) && o) {
		const a = await z(t, r, e, void 0);
		if (In(3, "resolveBase resolved", {
			specifier: t,
			context: r,
			resolved: a
		}), a) return a;
	}
	try {
		return await e(t, r);
	} catch (a) {
		if (In(3, "resolveBase error", {
			specifier: t,
			context: r,
			error: a
		}), a instanceof Error) {
			const i = a;
			if (b(i.code)) {
				const l = D(i);
				if (l) {
					const f = await z(l, r, e, void 0);
					if (f) return f;
				}
			}
		}
		throw a;
	}
}, "resolveBase");
const at = c((t, r, e, s) => {
	const n = s.parsedTsconfig?.config.compilerOptions?.allowJs ?? !1, o = _t(r.parentURL, n);
	if (In(3, "resolveBaseSync", {
		specifier: t,
		context: r,
		specifierStartsWithFileUrl: t.startsWith("file://"),
		isRelativePath: je$1(t),
		resolveTsExtensions: o,
		allowJs: n
	}), (t.startsWith("file://") || je$1(t)) && o) {
		const a = J(t, r, e, void 0);
		if (In(3, "resolveBaseSync resolved", {
			specifier: t,
			context: r,
			resolved: a
		}), a) return a;
	}
	try {
		return e(t, r);
	} catch (a) {
		if (In(3, "resolveBaseSync error", {
			specifier: t,
			context: r,
			error: a
		}), a instanceof Error) {
			const i = a;
			if (b(i.code)) {
				const l = D(i);
				if (l) {
					const f = J(l, r, e, void 0);
					if (f) return f;
				}
			}
		}
		throw a;
	}
}, "resolveBaseSync");
const it = c(async (t, r, e, s) => {
	if (In(3, "resolveDirectory", {
		specifier: t,
		context: r,
		isDirectory: ce$1.test(t)
	}), (t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), ce$1.test(t)) {
		const n = new URL(t, r.parentURL);
		return n.pathname = path.join(n.pathname, "index"), await z(n.toString(), r, e, !0);
	}
	try {
		return await We(t, r, e, s);
	} catch (n) {
		if (n instanceof Error) {
			In(3, "resolveDirectory error", {
				specifier: t,
				context: r,
				error: n
			});
			const o = n;
			if (o.code === "ERR_UNSUPPORTED_DIR_IMPORT") {
				const a = D(o);
				if (a) {
					if (t.startsWith("#")) throw n;
					const i = $t(t, a);
					if (i?.kind === "root-exports") throw n;
					if (i?.mainUrl) {
						try {
							return await e(i.mainUrl, r);
						} catch (m) {
							if (!X(m)) throw m;
						}
						try {
							return await it(i.mainUrl, r, e, s);
						} catch (m) {
							if (!X(m)) throw m;
						}
					}
					const l = `${a}/index`, f = await z(l, r, e);
					if (f) return f;
				}
			}
		}
		throw n;
	}
}, "resolveDirectory");
const ct = c((t, r, e, s) => {
	if (In(3, "resolveDirectorySync", {
		specifier: t,
		context: r,
		isDirectory: ce$1.test(t)
	}), (t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), ce$1.test(t)) {
		const n = k(r);
		if (n && !V$1(t)) return at(t, r, e, s);
		const o = new URL(t, r.parentURL);
		return o.pathname = path.join(o.pathname, "index"), n ? J(fileURLToPath(o), r, e, !1) ?? at(t, r, e, s) : J(o.toString(), r, e, !0);
	}
	try {
		return at(t, r, e, s);
	} catch (n) {
		if (n instanceof Error) {
			In(3, "resolveDirectorySync error", {
				specifier: t,
				context: r,
				error: n
			});
			const o = n;
			if (o.code === "ERR_UNSUPPORTED_DIR_IMPORT") {
				const a = D(o);
				if (a) {
					if (t.startsWith("#")) throw n;
					const i = $t(t, a);
					if (i?.kind === "root-exports") throw n;
					if (i?.mainUrl) {
						try {
							return e(i.mainUrl, r);
						} catch (m) {
							if (!X(m)) throw m;
						}
						try {
							return ct(i.mainUrl, r, e, s);
						} catch (m) {
							if (!X(m)) throw m;
						}
					}
					const l = `${a}/index`, f = J(l, r, e);
					if (f) return f;
				}
			}
		}
		throw n;
	}
}, "resolveDirectorySync");
const Oe = c(async (t, r, e, s) => {
	const n = Ct(t);
	if (In(3, "resolveTsPaths", {
		specifier: t,
		context: r,
		tsconfigPathAliasSpecifier: n,
		tsconfig: s.parsedTsconfig,
		fromNodeModules: C(r.parentURL)
	}), n && s.parsedTsconfig && !C(r.parentURL)) {
		const o = ot$1(s.parsedTsconfig, t);
		In(3, "resolveTsPaths", { possiblePaths: o });
		for (const a of o) try {
			return await it(pathToFileURL(a).toString(), r, e, s);
		} catch {}
	}
	return it(t, r, e, s);
}, "resolveTsPaths");
const $e = c((t, r, e, s) => {
	const n = Ct(t);
	if (In(3, "resolveTsPathsSync", {
		specifier: t,
		context: r,
		tsconfigPathAliasSpecifier: n,
		tsconfig: s.parsedTsconfig,
		fromNodeModules: C(r.parentURL)
	}), n && s.parsedTsconfig && !C(r.parentURL)) {
		const o = ot$1(s.parsedTsconfig, t);
		In(3, "resolveTsPathsSync", { possiblePaths: o });
		for (const a of o) try {
			return ct(pathToFileURL(a).toString(), r, e, s);
		} catch {}
	}
	return ct(t, r, e, s);
}, "resolveTsPathsSync");
const V = "tsx://";
const mt = c((t, r) => {
	const e = t.indexOf("#"), s = e === -1 ? t : t.slice(0, e), n = e === -1 ? "" : t.slice(e);
	return `${s}${s.includes("?") ? "&" : "?"}${r}${n}`;
}, "addQuery");
const K = c((t, r) => T(t) ? `${t}${t.includes("#") ? "&" : "#"}${I}${r}` : mt(t, `${I}${r}`), "addNamespace");
const Bt = c((t, r) => {
	const e = r.indexOf("#"), s = r[0] === "?" ? r.slice(1, e === -1 ? void 0 : e) : "", n = e === -1 ? "" : r.slice(e), o = t.indexOf("#"), a = o === -1 ? t : t.slice(0, o), i = o === -1 ? "" : t.slice(o), l = s ? mt(a, s) : a;
	return new URL(`${l}${n || i}`).toString();
}, "mergeUrlMetadata");
const qt = c((t, r, e) => {
	if (r !== "commonjs" || !t.startsWith("file://") || !Ln.test(t)) return t;
	const s = new URL(t), n = [rt(s.search, [I]), ...e ? [`namespace=${encodeURIComponent(e)}`] : []].filter(Boolean).join("&");
	return n ? (s.pathname += `%3F${n}`, s.searchParams.set(O, "1"), s.toString()) : t;
}, "preserveCommonJsQueryIdentity");
const be = c((t) => {
	const r = c(async (e, s, n) => {
		if (!t.active || e.startsWith("node:")) return n(e, s);
		const o = s.parentURL && w(s.parentURL);
		let a = T(e) ? o : w(e) ?? o;
		if (t.namespace) {
			let h;
			if (e.startsWith(V)) {
				try {
					h = JSON.parse(e.slice(6));
				} catch {}
				h?.namespace && (a = h.namespace);
			}
			if (t.namespace !== a) return n(e, s);
			h && (e = h.specifier, s.parentURL = h.parentURL);
		}
		if (T(e)) {
			const h = await n(e, s);
			return t.namespace ? {
				...h,
				url: K(h.url, t.namespace)
			} : h;
		}
		const i = Jt(e, k(s)), l = i === -1 ? e : e.slice(0, i), f = i === -1 ? "" : e.slice(i), m = await Oe(l, s, n, t);
		if (In(2, "nextResolve", { resolved: m }), m.format === "builtin") return m;
		const d = { ...m };
		d.url.startsWith("file://") && (d.format === "module-typescript" ? d.format = "module" : d.format === "commonjs-typescript" ? d.format = "commonjs" : !d.format && !Mt(d.url) && (d.format = await le(d.url), In(2, "getFormatFromFileUrl", {
			resolved: d,
			format: d.format
		}))), f && (d.url = Bt(d.url, f));
		const p = s.parentURL && d.format === "commonjs" && Ln.test(d.url) && (new URL(s.parentURL).searchParams.has(W) || ye(s.parentURL, e, je));
		return a && w(d.url) === void 0 && (d.url = K(d.url, a)), p && (d.url = mt(d.url, fe)), (a || p) && (d.url = qt(d.url, d.format, a)), d;
	}, "resolve");
	return le$1 ? async (e, s, n) => {
		In(2, "resolve", {
			specifier: e,
			context: s
		});
		const o = await r(e, s, n);
		return In(1, "resolved", {
			specifier: e,
			context: s,
			result: o
		}), o;
	} : r;
}, "createResolve");
const Ce = c((t) => {
	const r = c((e, s, n) => {
		if (!t.active || e.startsWith("node:") || k(s) && Pn()) return n(e, s);
		const o = s.parentURL && w(s.parentURL);
		let a = T(e) ? o : w(e) ?? o;
		if (t.namespace) {
			let p;
			if (e.startsWith(V)) {
				try {
					p = JSON.parse(e.slice(6));
				} catch {}
				p?.namespace && (a = p.namespace);
			}
			if (t.namespace !== a) return n(e, s);
			p && (e = p.specifier, s.parentURL = p.parentURL);
		}
		if (T(e)) {
			const p = n(e, s);
			return t.namespace ? {
				...p,
				url: K(p.url, t.namespace)
			} : p;
		}
		const i = Jt(e, k(s)), l = i === -1 ? e : e.slice(0, i), f = i === -1 ? "" : e.slice(i), m = $e(l, s, n, t);
		if (In(2, "nextResolve", { resolved: m }), m.format === "builtin") return m;
		const d = { ...m };
		return d.url.startsWith("file://") && (d.format === "module-typescript" ? d.format = "module" : d.format === "commonjs-typescript" ? d.format = "commonjs" : !d.format && !Mt(d.url) && (d.format = ue(d.url), In(2, "getFormatFromFileUrlSync", {
			resolved: d,
			format: d.format
		}))), f && (d.url = Bt(d.url, f)), a && w(d.url) === void 0 && (d.url = K(d.url, a)), d.url = qt(d.url, d.format, a), d;
	}, "resolve");
	return le$1 ? (e, s, n) => {
		In(2, "resolveSync", {
			specifier: e,
			context: s
		});
		const o = r(e, s, n);
		return In(1, "resolvedSync", {
			specifier: e,
			context: s,
			result: o
		}), o;
	} : r;
}, "createResolveSync");
const Qt = c((t) => (r, e) => {
	if (!e) throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");
	const s = e.startsWith("file://") ? e : pathToFileURL(e).toString();
	return import(`tsx://${JSON.stringify({
		specifier: r,
		parentURL: s,
		namespace: t
	})}`);
}, "createScopedImport");
let Ht = !1;
const Je = c((t) => {
	const r = [];
	for (let e = 0; e < t.length; e += 1) {
		const s = t[e];
		if (s === "--import") {
			const n = t[e + 1];
			n && r.push(n), e += 1;
		} else s.startsWith("--import=") && r.push(s.slice(9));
	}
	return r;
}, "collectImportSpecifiers");
const Ne = c(() => [...(process.env.NODE_OPTIONS ?? "").matchAll(/(?:^|\s)--import(?:=|\s+)(\S+)/g)].map(([, t]) => t), "collectNodeOptionsImportSpecifiers");
const xt = [new URL("loader.mjs", import.meta.url).toString(), new URL("esm/index.mjs", import.meta.url).toString()];
const Me = /* @__PURE__ */ new Set([
	"tsx",
	"tsx/esm",
	...xt,
	...xt.map((t) => decodeURI(new URL(t).pathname))
]);
const _e = c((t) => Me.has(t), "isTsxImport");
const Gt = c((t) => /\.(?:[cm]?ts|tsx)(?:[?#].*)?$/.test(t), "isTypeScriptImport");
const Ae = c(() => {
	const t = Je(process.execArgv), r = t.findIndex(_e);
	return r > 0 && t.slice(0, r).some(Gt);
}, "hasCliTypeScriptPreload");
const Be = Ne().some(Gt) || Ae();
const Dt = typeof $.registerHooks == "function" && c$2(l$1) && !Be;
const qe = c((t) => {
	if (!$.register && !Dt) throw new Error(`This version of Node.js (${process.version}) does not support module.register(). Please upgrade to Node v18.19 or v20.6 and above.`);
	if (!Ht) {
		const { _resolveFilename: i } = $;
		$._resolveFilename = (l, ...f) => i(Le$1(l), ...f), Ht = !0;
	}
	const { sourceMapsEnabled: r } = process;
	if (process.setSourceMapsEnabled(!0), Dt) {
		const i = wt({
			namespace: t?.namespace,
			onImport: t?.onImport,
			tsconfig: t?.tsconfig
		}), l = $.registerHooks({
			load: Ie(i),
			resolve: Ce(i)
		}), f = c(async () => {
			i.active = !1, l.deregister(), r === !1 && process.setSourceMapsEnabled(!1);
		}, "unregister2");
		return t?.namespace && (f.import = Qt(t.namespace), f.unregister = f), f;
	}
	const { port1: e, port2: s } = new MessageChannel();
	$.register(`./esm/index.mjs?${en.randomUUID()}`, {
		parentURL: import.meta.url,
		data: {
			port: s,
			namespace: t?.namespace,
			tsconfig: t?.tsconfig
		},
		transferList: [s]
	});
	const n = t?.onImport, o = n && ((i) => {
		i.type === "load" && n(i.url);
	});
	o && (e.on("message", o), e.unref());
	const a = c(() => (r === !1 && process.setSourceMapsEnabled(!1), o && e.off("message", o), e.postMessage("deactivate"), new Promise((i) => {
		const l = c((f) => {
			f.type === "deactivated" && (i(), e.off("message", l));
		}, "onDeactivated");
		e.on("message", l);
	})), "unregister");
	return t?.namespace && (a.import = Qt(t.namespace), a.unregister = a), a;
}, "register");

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/require-Cuv-0BLU.mjs
var m = Object.defineProperty;
var a = (r, t) => m(r, "name", {
	value: t,
	configurable: !0
});
let e;
const s$1 = a((r, t) => (e || (e = ar({ namespace: Date.now().toString() })), e.require(r, t)), "tsxRequire");
const i$1 = a((r, t, c) => (e || (e = ar({ namespace: Date.now().toString() })), e.resolve(r, t, c)), "resolve");
i$1.paths = m$2.resolve.paths, s$1.resolve = i$1, s$1.main = m$2.main, s$1.extensions = m$2.extensions, s$1.cache = m$2.cache;

//#endregion
//#region node_modules/.pnpm/tsx@4.23.13/node_modules/tsx/dist/esm/api/index.mjs
var s = Object.defineProperty;
var i = (t, r) => s(t, "name", {
	value: r,
	configurable: !0
});
const U = i((t, r) => {
	if (!r || typeof r == "object" && !r.parentURL) throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");
	const o = typeof r == "string", e = o ? r : r.parentURL, m = en.randomUUID(), a = ar({ namespace: m });
	return !c$2(p$2) && !Fn.test(t) && Un.test(t) ? Promise.resolve(a.require(t, e)) : qe({
		namespace: m,
		...o ? {} : r
	}).import(t, e);
}, "tsImport");

//#endregion
export { qe as register };