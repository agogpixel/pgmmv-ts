import type { AgtkConstants } from '../../constants';

export interface AgtkCommandEffectShowConfig {
  effectId: number;
  positionType: AgtkConstants['actionCommands']['effectShow'][keyof AgtkConstants['actionCommands']['effectShow']];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  duration300: number;
  durationUnlimited: boolean;
}
