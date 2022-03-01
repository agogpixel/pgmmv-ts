import type { AgtkObjectSwitch } from './switch';

/**
 * Object switch information.
 *
 * The object switch's preset ID is defined in Agtk.constants.switches.
 *
 * * The content is identical to the preset ID defined in Agtk.objectInstance.switches.
 */
export interface AgtkObjectSwitches {
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
  get(arg: number): AgtkObjectSwitch;
}
