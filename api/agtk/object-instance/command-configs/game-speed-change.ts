import type { AgtkConstants } from '../../constants';

type GameSpeedChange = AgtkConstants['actionCommands']['gameSpeedChange'];

export interface AgtkCommandGameSpeedChangeConfig {
  gameSpeed: number;
  duration300: number;
  durationUnlimited: boolean;
  targetObject: boolean;
  targetEffect: boolean;
  targetTile: boolean;
  targetMenu: boolean;
  targettingType: GameSpeedChange[keyof GameSpeedChange];
  targetObjectGroup: number;
  targetObjectId: number;
  targetQualifierId: number;
  excludeObjectGroupBit: number;
}
