import type { AgtkObjectInstanceVariable } from './variable';

/**
 *
 */
export interface AgtkObjectInstanceVariables {
  /**
   * Returns Atgk.objectInstance.variable object.
   *
   * @param arg1 Variable ID.
   */
  get(arg1: number): AgtkObjectInstanceVariable;

  /**
   * Retrieves variable ID using variable name.
   *
   * Returns -1 if ID is not found.
   *
   * * Preset variable may change according to language, so avoid using this method if possible.
   *
   * @param arg1 Variable name.
   */
  getIdByName(arg1: string): number;
}
