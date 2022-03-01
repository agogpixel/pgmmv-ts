import type { AgtkObjectVariable } from './variable';

/**
 * Object variable information.
 *
 * The object variable's preset ID is defined in Agtk.constants.variables.
 *
 * * The content is identical to the preset ID defined in Agtk.objectInstance.variables.
 */
export interface AgtkObjectVariables {
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
  get(arg: number): AgtkObjectVariable;
}
