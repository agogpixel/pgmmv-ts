import type { AgtkPlayerCharacters } from './player-characters';

/**
 *
 */
export interface AgtkSettings {
  /**
   * Tile width (unit: dots).
   */
  tileWidth: number;

  /**
   * Tile height (unit: dots).
   */
  tileHeight: number;

  /**
   * Screen width (unit: dots).
   */
  screenWidth: number;

  /**
   * Screen height (unit: dots).
   */
  screenHeight: number;

  /**
   * The playerCharacters object.
   */
  playerCharacters: AgtkPlayerCharacters;

  /**
   * Project path.
   */
  projectPath: string;
}
