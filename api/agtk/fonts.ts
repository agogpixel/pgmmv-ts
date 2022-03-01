import type { AgtkFont } from './font';

export interface AgtkFonts {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkFont;
}
