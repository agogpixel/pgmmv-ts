import type { AgtkObjectBullet } from './bullet';

/**
 * Bullet data set in "Bullet Settings".
 */
export interface AgtkObjectBullets {
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
  get(arg: number): AgtkObjectBullet;
}
