import type { AgtkLayer } from './layer';

export interface AgtkLayers {
  getCount(): number;

  getIdByIndex(arg: number): number;

  getIdByName(arg: string): number;

  getById(arg: number): AgtkLayer;
}
