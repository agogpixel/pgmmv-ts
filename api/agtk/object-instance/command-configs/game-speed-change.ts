import type { AgtkConstants } from '../../constants';

export interface AgtkCommandGameSpeedChangeConfig {
  gameSpeed: number;
  duration300: number;
  durationUnlimited: boolean;
  targetObject: boolean;
  targetEffect: boolean;
  targetTile: boolean;
  targetMenu: boolean;
  targettingType: AgtkConstants['actionCommands']['gameSpeedChange'][keyof AgtkConstants['actionCommands']['gameSpeedChange']];
  targetObjectGroup: number;
  targetObjectId: number;
  targetQualifierId: number;
  excludeObjectGroupBit: number;
}
