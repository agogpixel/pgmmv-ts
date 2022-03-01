import type { AgtkPlayerCharacter } from './player-character';

/**
 *
 */
export interface AgtkPlayerCharacters {
  /**
   * Returns number of slots for managing player characters.
   *
   * * Currently fixed at 4
   */
  getCount(): number;

  /**
   * Returns playerCharacter of the specified slot.
   *
   * @param arg Index.
   */
  get(arg: number): AgtkPlayerCharacter;
}
