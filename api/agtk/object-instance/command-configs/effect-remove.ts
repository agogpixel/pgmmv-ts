import type { AgtkConstants } from '../../constants';

type EffectRemove = AgtkConstants['actionCommands']['effectRemove'];

export interface AgtkCommandEffectRemoveConfig {
  effectId: number;
  targettingType: EffectRemove[keyof EffectRemove];
  targetObjectGroup: number;
  targetObjectId: number;
}
