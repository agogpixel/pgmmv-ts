import type { AgtkObjectInstanceSwitches } from './switches';
import type { AgtkObjectInstanceVariables } from './variables';

export interface AgtkObjectInstance {
  readonly id: number;

  readonly objectId: number;

  /**
   * Object location layer ID.
   */
  layerId: number;

  /**
   * Object location layer index.
   */
  layerIndex: number;

  /**
   * References object switches.
   */
  switches: AgtkObjectInstanceSwitches;

  /**
   * References object variables.
   */
  variables: AgtkObjectInstanceVariables;

  /**
   * Returns instance ID list of object instance that attacked this
   * object instance.
   *
   * * Information for 1 frame before can be acquired.
   */
  getAttackerInstanceIdList(): number[];
}
