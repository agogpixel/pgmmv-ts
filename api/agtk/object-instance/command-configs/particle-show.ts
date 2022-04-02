import type { AgtkConstants } from '../../constants';

type ParticleShow = AgtkConstants['actionCommands']['particleShow'];

export interface AgtkCommandParticleShowConfig {
  particleId: number;
  positionType: ParticleShow[keyof ParticleShow];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  duration300: number;
  durationUnlimited: boolean;
}
