import type { AgtkConstants } from '../../constants';

type ObjectPushPull = AgtkConstants['actionCommands']['objectPushPull'];
type ObjectPushPullValue = ObjectPushPull[keyof ObjectPushPull];

export interface AgtkCommandObjectPushPullConfig {
  effectRangeBaseConnect: boolean;
  effectRangeBaseConnectId: number;
  rectangle: boolean;
  rectangleDistance: number;
  rectangleHeight: number;
  circleDistance: number;
  arcAngle: number;
  effectDirectionType: ObjectPushPullValue;
  effectDirection: number;
  directionType: ObjectPushPullValue;
  angle: number;
  connectId: number;
  effectValue: number;
  distanceEffect: boolean;
  nearValue: number;
  farValue: number;
  oneTimeEffect: boolean;
  targettingType: ObjectPushPullValue;
  targetObjectGroup: number;
  targetObjectId: number;
  targetQualifierId: number;
  excludeObjectGroupBit: number;
}
