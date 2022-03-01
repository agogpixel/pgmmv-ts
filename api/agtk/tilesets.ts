import type { AgtkTileset } from './tileset';

/**
 *
 */
export interface AgtkTilesets {
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
   * Returns tileset.
   *
   * @param arg Tilest ID.
   */
  getById(arg: number): AgtkTileset;

  /**
   *
   */
  getIdList(): number[];

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkTileset;
}
