/**
 *
 */
export interface AgtkPlayerCharacter {
  /**
   * Returns number of objects set in the player character slot.
   */
  getCount(): number;

  /**
   * Returns Object ID.
   *
   * @param arg Index.
   */
  get(arg: number): number;
}
