import type { AgtkBGM } from './bgm';

export interface AgtkBGMS {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkBGM;
}
