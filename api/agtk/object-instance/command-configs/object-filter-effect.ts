import type { AgtkConstants } from '../../constants';

export interface AgtkCommandObjectFilterEffectConfig {
  effectType: AgtkConstants['filterEffects'][keyof AgtkConstants['filterEffects']];
  noise: number;
  mosaic: number;
  monochrome: number;
  sepia: number;
  negaPosiReverse: number;
  defocus: number;
  chromaticAberration: number;
  darkness: number;
  transparency: number;
  imageId: number;
  imageTransparency: number;
  fillA: number;
  fillR: number;
  fillG: number;
  fillB: number;
  duration300: number;
}
