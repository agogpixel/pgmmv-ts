import type { AgtkObject } from './object';

/**
 *
 */
export interface AgtkObjects {
  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkObject;
}
