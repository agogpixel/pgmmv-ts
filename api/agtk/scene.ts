import type { AgtkLayer } from './layer';

/**
 *
 */
export interface AgtkScene {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Scene size (width).
   */
  horzScreenCount: number;

  /**
   * Scene size (height).
   */
  vertScreenCount: number;

  /**
   *
   * @param arg
   */
  getLayerByIndex(arg: number): AgtkLayer;

  /**
   *
   */
  getLayerIdList(): number[];

  /**
   *
   * @param arg
   */
  getLayerIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  getLayerIndexById(arg: number): number;

  /**
   *
   * @param arg
   */
  getLayerById(arg: number): AgtkLayer;
}
