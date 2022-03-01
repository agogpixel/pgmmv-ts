import type { AgtkVariable } from './variable';

/**
 *
 */
export interface AgtkVariables {
  /**
   *
   */
  readonly PlayerCountId: 6;

  /**
   *
   */
  readonly _1PObjectId: 7;

  /**
   *
   */
  readonly _2PObjectId: 8;

  /**
   *
   */
  readonly _3PObjectId: 9;

  /**
   *
   */
  readonly _4PObjectId: 10;

  /**
   *
   */
  readonly _1PInstanceId: 14;

  /**
   *
   */
  readonly _2PInstanceId: 15;

  /**
   *
   */
  readonly _3PInstanceId: 16;

  /**
   *
   */
  readonly _4PInstanceId: 17;

  /**
   *
   */
  readonly _1PControllerId: 18;

  /**
   *
   */
  readonly _2PControllerId: 19;

  /**
   *
   */
  readonly _3PControllerId: 20;

  /**
   *
   */
  readonly _4PControllerId: 21;

  /**
   *
   */
  readonly PortalMoveStartTimeId: 11;

  /**
   *
   */
  readonly FileSlotId: 12;

  /**
   *
   */
  readonly CopyDestinationFileSlotId: 13;

  /**
   *
   */
  readonly MouseXId: 22;

  /**
   *
   */
  readonly MouseYId: 23;

  /**
   *
   */
  readonly BgmVolume: 24;

  /**
   *
   */
  readonly SeVolume: 25;

  /**
   *
   */
  readonly VoiceVolume: 26;

  /**
   * Returns Atgk.variable object.
   *
   * @param arg1 Variable ID.
   */
  get(arg1: number): AgtkVariable;

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
