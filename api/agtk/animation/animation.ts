import type { AgtkConstants } from '../constants';

import type { AgtkAnimationMotions } from './motions';

type AgtkAnimationType = AgtkConstants['animations'][keyof AgtkConstants['animations']];

/**
 *
 */
export interface AgtkAnimation {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Animation type.
   *
   * Agtk.constants.animations.Motion/Agtk.constants.animations.Effect/Agtk.constants.animations.Particle
   */
  type: AgtkAnimationType;

  /**
   * Motion data.
   *
   * Undefined when type != Agtk.constants.animations.Motion
   */
  motions: AgtkAnimationMotions;

  /**
   * Resource set name array.
   */
  getResourceSetIdList(): number[];

  /**
   * Resource set name array.
   *
   * *Each element is compatible with the respective getResourceSetIdList() array.
   */
  getResourceSetNameList(): string[];
}
