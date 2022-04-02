import type { AgtkConstants } from '../../constants';

export interface AgtkCommandParticleRemoveConfig {
  particleId: number;
  targettingType: AgtkConstants['actionCommands']['particleRemove'][keyof AgtkConstants['actionCommands']['particleRemove']];
  targetObjectGroup: number;
  targetObjectId: number;
}
