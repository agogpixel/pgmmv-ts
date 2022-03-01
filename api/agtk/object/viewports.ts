import type { AgtkObjectViewport } from './viewport';

/**
 * Field of vision, lighting data set in "Field of Vision, Lighting".
 */
export interface AgtkObjectViewports {
  /**
   *
   */
  getIdList(): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkObjectViewport;
}
