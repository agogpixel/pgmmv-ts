import type { AgtkObjectBullets } from './bullets';

export interface AgtkObject {
  /**
   * Readonly.
   */
  readonly id: number;

  /**
   * Readonly.
   */
  readonly name: string;

  /**
   * Operable via input device.
   */
  operatable: boolean;

  /**
   * Bullet data set in "Bullet Settings".
   */
  bullets: AgtkObjectBullets;

  /**
   * Action program action box data.
   */
  actions: unknown;

  /**
   * Animation ID set by "Select Animation".
   */
  animationId: number;
}
