/* eslint-disable @typescript-eslint/ban-types */
import type { XMLHttpRequest } from '../types/dom';

import type { CCAsyncPool } from './async-pool';

interface LoadDisabled {
  load(realUrl: string, url: string, res: string, cb: Function): unknown | null;
}

export interface CCLoaderNamespace {
  _resPath: string;
  _audioPath: string;
  _register: {
    '.ogg': {
      load: LoadDisabled;
    };
    '.wav': LoadDisabled;
    '.mp4': LoadDisabled;
    '.m4a': LoadDisabled;
    '.font': LoadDisabled;
    '.eot': LoadDisabled;
    '.ttf': LoadDisabled;
    '.woff': LoadDisabled;
    '.svg': LoadDisabled;
    '.gaf': LoadDisabled;
    '.txt': {
      load(realUrl: string, url: string, res: string, cb: Function): string;
    };
    '.xml': LoadDisabled;
    '.vsh': LoadDisabled;
    '.fsh': LoadDisabled;
    '.tmx': LoadDisabled;
    '.tsx': LoadDisabled;
    '.json': {
      load(realUrl: string, url: string, res: string, cb: Function): string;
    };
    '.exportjson': LoadDisabled;
    '.png': {
      load(realUrl: string, url: string, res: string, cb: Function): void;
    };
    '.jpg': LoadDisabled;
    '.bmp': LoadDisabled;
    '.jpeg': LoadDisabled;
    '.gif': LoadDisabled;
    '.webp': LoadDisabled;
    '.plist': {
      load(realUrl: string, url: string, res: string, cb: Function): string;
    };
    '.ccbi': {
      load(realUrl: string, url: string, res: string, cb: Function): unknown;
    };
    '.fnt': {
      INFO_EXP: object;
      COMMON_EXP: object;
      PAGE_EXP: object;
      CHAR_EXP: object;
      KERNING_EXP: object;
      ITEM_EXP: object;
      INT_EXP: object;
      _parseStrToObj(str: string): object;
      parseFnt(fntStr: string, url: string): object;
      load(realUrl: string, url: string, res: string, cb: Function): string;
    };
  };
  cache: object;
  _langPathCache: object;
  getXMLHttpRequest(): XMLHttpRequest;
  _jsCache: object;
  _getArgs4Js(...args: unknown[]): unknown[];
  loadJs(baseDir: string, jsList: string[], cb: Function): void;
  loadJsWithImg(baseDir: string, jsList: string[], cb: Function): void;
  loadTxt(url: string, cb: Function): void;
  loadJson(url: string, cb: Function): void;
  loadImg(url: string, option: object | Function, cb?: Function): void;
  loadBinary(url: string, cb: Function): void;
  loadBinarySync(url: string): unknown;
  _loadResIterator(item: object, index: number, cb: Function): unknown;
  getUrl(basePath: string, url: string): string;
  load(resources: unknown[], option?: object | Function, loadCallback?: Function): CCAsyncPool;
  loadAliases(url: string, cb: Function): void;
  register(extNames: string | string[], loader: unknown): void;
  getRes(url: string): unknown;
  release(url: string): void;
  releaseAll(): void;
}
