import type { AgtkConstants } from '../../constants';

export interface AgtkCommandObjectPushPullConfig {
  effectRangeBaseConnect: boolean;
  effectRangeBaseConnectId: number;
  rectangle: boolean;
  rectangleDistance: number;
  rectangleHeight: number;
  circleDistance: number;
  arcAngle: number;
  effectDirectionType: AgtkConstants['actionCommands']['objectPushPull'][keyof AgtkConstants['actionCommands']['objectPushPull']];
  effectDirection: number;
  directionType: AgtkConstants['actionCommands']['objectPushPull'][keyof AgtkConstants['actionCommands']['objectPushPull']];
  angle: number;
  connectId: number;
  effectValue: number;
  distanceEffect: boolean;
  nearValue: number;
  farValue: number;
  oneTimeEffect: boolean;
  targettingType: AgtkConstants['actionCommands']['objectPushPull'][keyof AgtkConstants['actionCommands']['objectPushPull']];
  targetObjectGroup: number;
  targetObjectId: number;
  targetQualifierId: number;
  excludeObjectGroupBit: number;
}
