import type { AgtkSceneInstance } from './scene-instance';

/**
 *
 */
export interface AgtkSceneInstances {
  /**
   * Retrieves current scene.
   */
  getCurrent(): AgtkSceneInstance;
}
