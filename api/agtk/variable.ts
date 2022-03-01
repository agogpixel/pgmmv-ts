/**
 *
 */
export interface AgtkVariable {
  /**
   * Retrieves variable value.
   */
  getValue(): number;

  /**
   * Assigns value to variable.
   *
   * @param arg1 Setting value.
   */
  setValue(arg1: number): void;
}
