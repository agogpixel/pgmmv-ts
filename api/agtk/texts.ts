import type { AgtkText } from './text';

export interface AgtkTexts {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkText;
}
