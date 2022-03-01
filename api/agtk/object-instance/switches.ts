import type { AgtkObjectInstanceSwitch } from './switch';

/**
 * References project common variables.
 *
 * Preset reference ID definition.
 */
export interface AgtkObjectInstanceSwitches {
  /**
   * Returns Agtk.objectInstance.switch object.
   *
   * @param arg1 Switch ID.
   */
  get(arg1: number): AgtkObjectInstanceSwitch;

  /**
   * Retrieves switch ID using switch name.
   *
   * Returns -1 if ID is not found.
   *
   * * Preset variable names may change according to language, so avoid using this if possible.
   *
   * @param arg1 Switch name.
   */
  getIdByName(arg1: string): number;
}
