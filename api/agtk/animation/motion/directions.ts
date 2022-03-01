import type { AgtkAnimationMotionDirection } from './direction';

/**
 * Display direction data
 */
export interface AgtkAnimationMotionDirections {
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
  get(arg: number): AgtkAnimationMotionDirection;
}
