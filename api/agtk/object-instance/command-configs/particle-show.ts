import type { AgtkConstants } from '../../constants';

export interface AgtkCommandParticleShowConfig {
  particleId: number;
  positionType: AgtkConstants['actionCommands']['particleShow'][keyof AgtkConstants['actionCommands']['particleShow']];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  duration300: number;
  durationUnlimited: boolean;
}
