globalThis.__KTR_BUNDLED__ = true;
import { dir } from "./dir.js";
import { o as pluginVersion } from "./version-DGe663pF.js";
import { logger } from "node-karin";

//#region src/index.ts
/** 请不要在这编写插件 不会有任何效果~ */
logger.info(`${logger.violet(`[插件:${pluginVersion}]`)} ${logger.green(dir.name)} 初始化完成~`);

//#endregion
export {  };