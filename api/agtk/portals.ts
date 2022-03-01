import type { AgtkPortal } from './portal';

export interface AgtkPortals {
  getIdList(): number[];
  getIdByName(arg: string): number;
  get(arg: number): AgtkPortal;
}
