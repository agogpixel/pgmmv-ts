import type { AgtkConstants } from '../../constants';

/**
 * * 300 specifies a numerical value equivalent to 1 second in duration300.
 * (Same for other instances of '300').
 */
export interface AgtkCommandTemplateMoveConfig {
  /**
   * * MoveNearPlayer and MoveApartNearPlayer are scheduled to be removed
   * from Agtk.constants.actionCommands.templateMove definitions.
   *
   * MoveNearObject and MoveApartNearObject will be used in their place.
   */
  moveType: AgtkConstants['actionCommands']['templateMove'][keyof AgtkConstants['actionCommands']['templateMove']];
  horizontalMoveStartRight: boolean;
  horizontalMoveDuration300: number;
  horizontalInfinite: boolean;
  verticalMoveStartDown: boolean;
  verticalMoveDuration300: number;
  verticalInfinite: boolean;
  randomMoveDuration300: number;
  randomMoveStop300: number;
  nearPlayerGroup: number;
  nearObjectLockedObjectPrior: boolean;
  /**
   * * Scheduled for removal.
   */
  nearPlayerLockedPlayerPrior: boolean;
  apartNearObjectGroup: number;
  apartNearPlayerLockedPlayerPrior: boolean;
  /**
   * * Scheduled for removal.
   */
  apartNearObjectLockedObjectPrior: boolean;
  /**
   * * Opposite of Editor.
   */
  fallFromStep: boolean;
  ignoreOtherObjectWallArea: boolean;
  ignoreWall: boolean;
}
