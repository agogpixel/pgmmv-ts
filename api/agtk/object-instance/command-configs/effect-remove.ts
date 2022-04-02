import type { AgtkConstants } from '../../constants';

export interface AgtkCommandEffectRemoveConfig {
  effectId: number;
  targettingType: AgtkConstants['actionCommands']['effectRemove'][keyof AgtkConstants['actionCommands']['effectRemove']];
  targetObjectGroup: number;
  targetObjectId: number;
}
