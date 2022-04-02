import type { AgtkConstants } from '../../constants';

type ObjectMove = AgtkConstants['actionCommands']['objectMove'];
type ObjectMoveValue = ObjectMove[keyof ObjectMove];

export interface AgtkCommandObjectMoveConfig {
  moveType: ObjectMoveValue;
  angle: number;
  moveDistance: number;
  posX: number;
  posY: number;
  moveInDisplayCoordinates: boolean;
  followCameraMoving: boolean;
  centerObjectId: number;
  centerQualifierId: number;
  centerAdjustX: number;
  centerAdjustY: number;
  connectId: number;
  useObjectParameter: boolean;
  changeMoveSpeed: number;
  moveDuration300: number;
  targettingType: ObjectMoveValue;

  targetObjectGroup: number;
  targetObjectId: number;
  targetQualifierId: number;
  /**
   * The 1 left shift number of the target group’s index value.
   * Use a logical OR to allow multiple groups.
   * For example, to exclude the player and enemy groups, the code is
   * (1 << Agtk.constants.objectGroup.ObjectGroupPlayer) | (1 << Agtk.constants.objectGroup.ObjectGroupEnemy)
   */
  excludeObjectGroupBit: number;
  fitDispDirToMoveDir: boolean;
  /**
   * * Opposite of Editor.
   */
  dispWhileMoving: boolean;
  stopActionWhileMoving: boolean;
  stopAnimWhileMoving: boolean;
  finalGridMagnet: boolean;
}
