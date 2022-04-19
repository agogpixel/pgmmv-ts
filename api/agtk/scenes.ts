import type { AgtkLayer } from './layer';
import type { AgtkScene } from './scene';

/**
 *
 */
export interface AgtkScenes {
  /**
   *
   */
  getCount(): number;

  /**
   *
   * @param arg
   */
  getIdByIndex(arg: number): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   */
  getIdList(): number[];

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkScene;

  /**
   *
   * @param arg
   */
  getLayerById(arg: number): AgtkLayer;
}
