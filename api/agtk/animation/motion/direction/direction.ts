import type { AgtkAnimationMotionDirectionTracks } from './tracks';

/**
 * ID/Name.
 */
export interface AgtkAnimationMotionDirection {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Track data.
   */
  tracks: AgtkAnimationMotionDirectionTracks;
}
