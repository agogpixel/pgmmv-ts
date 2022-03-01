import type { AgtkSlope } from './slope';

/**
 *
 */
export interface AgtkLayer {
  /**
   * Retrieves tile information set in scene.
   *
   * @param arg1 x
   * @param arg2 y
   */
  getTileInfo(arg1: number, arg2: number): { tilesetId: number; x: number; y: number };

  /**
   * Configures subtile information set in scene.
   *
   * @param arg1 sx
   * @param arg2 sy
   * @param arg3 subtileX
   * @param arg4 subtileY
   */
  setSubtileInfo(arg1: number, arg2: number, arg3: number, arg4: number): void;

  /**
   *
   */
  getSlopeIdList(): number[];

  /**
   *
   * @param arg
   */
  getSlopeById(arg: number): AgtkSlope;
}
