import type { AgtkObjectAction } from './action';

/**
 * Action program action box data.
 */
export interface AgtkObjectActions {
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
  get(arg: number): AgtkObjectAction;
}
