import type { AgtkSwitch } from './switch';

/**
 * References project common variables.
 *
 * Preset reference ID definition.
 */
export interface AgtkSwitches {
  /**
   *
   */
  readonly InitId: 1;

  /**
   *
   */
  readonly ResetId: 2;

  /**
   *
   */
  readonly SaveFileId: 6;

  /**
   *
   */
  readonly LoadFileId: 7;

  /**
   *
   */
  readonly CopyFileId: 8;

  /**
   *
   */
  readonly DeleteFileId: 9;

  /**
   *
   */
  readonly InitialCameraId: 10;

  /**
   *
   */
  readonly LoadingSceneId: 11;

  /**
   *
   */
  readonly QuitTheGameId: 12;

  /**
   *
   */
  readonly FileExistsId: 13;

  /**
   * Return objects with Agtk.switch.
   *
   * @param arg1 Switch ID.
   */
  get(arg1: number): AgtkSwitch;

  /**
   * Acquire switch ID by name.
   *
   * If not found, return -1.
   *
   * *Since preset variable identifiers are language dependent,
   *  it is best to avoid using them
   *
   * @param arg1 Switch name.
   */
  getIdByName(arg1: string): number;
}
