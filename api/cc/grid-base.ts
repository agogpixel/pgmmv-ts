import type { CCClass, CCClassNamespace } from './class';
import type { CCPoint } from './point';
import type { CCRect } from './rect';
import type { CCSize } from './size';

export type CCGridBaseNamespace = {
  /**
   * Base class for cc.Grid.
   */
  new (): CCGridBase;

  /**
   * Create one cc.GridBase Object.
   * TODO: Define cc.Texture2D typings...
   */
  create(gridSize: CCSize, texture?: unknown, flipped?: boolean, rect?: CCRect): CCGridBase;
} & CCClassNamespace;

/**
 * Base class for cc.Grid.
 */
export interface CCGridBase extends CCClass {
  /**
   * Create one cc.GridBase Object Constructor of cc.GridBase.
   * TODO: Define cc.Texture2D typings...
   *
   * @param gridSize
   * @param texture
   * @param flipped
   * @param rect
   */
  ctor(gridSize: CCSize, texture?: unknown, flipped?: boolean, rect?: CCRect): void;

  /**
   * Get rect of the grid.
   */
  getGridRect(): CCRect;

  /**
   * Get size of the grid.
   */
  getGridSize(): CCSize;

  /**
   * Get number of times that the grid will be reused.
   */
  getReuseGrid(): number;

  /**
   * Get pixels between the grids.
   */
  getStep(): CCPoint;

  /**
   * TODO: Define cc.Texture2D typings...
   *
   * @param gridSize
   * @param texture
   * @param flipped
   * @param rect
   */
  initWithSize(gridSize: CCSize, texture?: unknown, flipped?: boolean, rect?: CCRect): boolean;

  /**
   * Whether or not the grid is active.
   */
  isActive(): boolean;

  /**
   * Get whether or not the texture is flipped.
   */
  isTextureFlipped(): boolean;

  /**
   * Whether or not the grid is active.
   *
   * @param active
   */
  setActive(active: number): void;

  /**
   * Set rect of the grid.
   *
   * @param rect
   */
  setGridRect(rect: CCRect): void;

  /**
   * Set size of the grid.
   *
   * @param gridSize
   */
  setGridSize(gridSize: CCSize): void;

  /**
   * Set number of times that the grid will be reused.
   *
   * @param reuseGrid
   */
  setReuseGrid(reuseGrid: number): void;

  /**
   * Set pixels between the grids.
   *
   * @param step
   */
  setStep(step: CCPoint): void;

  /**
   * Set whether or not the texture is flipped.
   *
   * @param flipped
   */
  setTextureFlipped(flipped: boolean): void;
}
