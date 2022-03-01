import type { AgtkActionCommands } from './action-commands';
import type { AgtkAnimations } from './animations';
import type { AgtkBGMS } from './bgms';
import type { AgtkConstants } from './constants';
import type { AgtkControllers } from './controllers';
import type { AgtkDatabases } from './databases';
import type { AgtkFonts } from './fonts';
import type { AgtkImages } from './images';
import type { AgtkLayers } from './layers';
import type { AgtkMovies } from './movies';
import type { AgtkObjectInstances } from './object-instances';
import type { AgtkObjects } from './objects';
import type { AgtkPlayerCharacters } from './player-characters';
import type { AgtkPlugins } from './plugins';
import type { AgtkPortals } from './portals';
import type { AgtkSceneInstances } from './scene-instances';
import type { AgtkScenes } from './scenes';
import type { AgtkSES } from './ses';
import type { AgtkSettings } from './settings';
import type { AgtkSwitches } from './switches';
import type { AgtkTexts } from './texts';
import type { AgtkTilesets } from './tilesets';
import type { AgtkVariables } from './variables';
import type { AgtkVoices } from './voices';

/**
 *
 */
export interface Agtk {
  /**
   * Text string that displays execution engine version.
   *
   * ```
   * Notes:
   * PGMMV <Version Number>
   * player <Version Number>
   * runtime <Version Numbe
   * ```
   */
  version: string;

  /**
   * Outputs log.
   *
   * In the player, it is output in the "Runtime Log Console".
   *
   * @param arg1 Output string.
   */
  log(arg1: string): void;

  /**
   * Resets the game. Performs same operation as resetting with F5 key.
   */
  reset(): void;

  /**
   *
   */
  settings: AgtkSettings;

  /**
   *
   */
  playerCharacters: AgtkPlayerCharacters;

  /**
   *
   */
  scenes: AgtkScenes;

  /**
   *
   */
  layers: AgtkLayers;

  /**
   *
   */
  sceneInstances: AgtkSceneInstances;

  /**
   *
   */
  plugins: AgtkPlugins;

  /**
   *
   */
  objects: AgtkObjects;

  /**
   * Animation data.
   */
  animations: AgtkAnimations;

  /**
   *
   */
  images: AgtkImages;

  /**
   *
   */
  tilesets: AgtkTilesets;

  /**
   *
   */
  switches: AgtkSwitches;

  /**
   *
   */
  variables: AgtkVariables;

  /**
   *
   */
  actionCommands: AgtkActionCommands;

  /**
   *
   */
  portals: AgtkPortals;

  /**
   *
   */
  controllers: AgtkControllers;

  /**
   *
   */
  objectInstances: AgtkObjectInstances;

  /**
   *
   */
  fonts: AgtkFonts;

  /**
   *
   */
  texts: AgtkTexts;

  /**
   *
   */
  movies: AgtkMovies;

  /**
   *
   */
  bgms: AgtkBGMS;

  /**
   *
   */
  ses: AgtkSES;

  /**
   *
   */
  voices: AgtkVoices;

  /**
   *
   */
  databases: AgtkDatabases;

  /**
   *
   */
  constants: AgtkConstants;
}
