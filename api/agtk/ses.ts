import type { AgtkSE } from './se';

export interface AgtkSES {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkSE;
}
