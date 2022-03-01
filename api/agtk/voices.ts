import type { AgtkVoice } from './voice';

export interface AgtkVoices {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkVoice;
}
