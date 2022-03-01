import type { AgtkConstants } from '../../../constants';

type AgtkAnimationMotionDirectionTrackType = AgtkConstants['tracks'][keyof AgtkConstants['tracks']];

/**
 * ID/Name.
 */
export interface AgtkAnimationMotionDirectionTrack {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Track type
   *
   * Agtk.constants.tracks.TimelineWall/TimelineHit/TimelineAttack/TimelineConnect
   */
  timelineType: AgtkAnimationMotionDirectionTrackType;
}
