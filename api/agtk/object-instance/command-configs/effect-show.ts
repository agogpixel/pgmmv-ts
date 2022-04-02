import type { AgtkConstants } from '../../constants';

type EffectShow = AgtkConstants['actionCommands']['effectShow'];

export interface AgtkCommandEffectShowConfig {
  effectId: number;
  positionType: EffectShow[keyof EffectShow];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  duration300: number;
  durationUnlimited: boolean;
}
