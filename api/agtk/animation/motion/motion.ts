import type { AgtkAnimationMotionDirections } from './directions';

/**
 * ID/Name.
 */
export interface AgtkAnimationMotion {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Display direction data.
   */
  directions: AgtkAnimationMotionDirections;
}
