import type { AgtkConstants } from '../../constants';

type ParticleRemove = AgtkConstants['actionCommands']['particleRemove'];

export interface AgtkCommandParticleRemoveConfig {
  particleId: number;
  targettingType: ParticleRemove[keyof ParticleRemove];
  targetObjectGroup: number;
  targetObjectId: number;
}
