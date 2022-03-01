import type { AgtkAnimationMotion } from './motion';

/**
 * Motion data.
 */
export interface AgtkAnimationMotions {
  /**
   *
   */
  getIdList(): number[];

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkAnimationMotion;
}
