/**
 *
 */
export interface AgtkSwitch {
  /**
   *
   */
  getValue(): boolean;

  /**
   * Assigns value to the switch.
   *
   * @param arg1 Settings value.
   */
  setValue(arg1: boolean): void;
}
