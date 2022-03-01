import type { AgtkAnimationMotionDirectionTrack } from './track';

/**
 * Track data.
 */
export interface AgtkAnimationMotionDirectionTracks {
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
  get(arg: number): AgtkAnimationMotionDirectionTrack;
}
