import type { AgtkConstants } from '../../constants';

type FilterEffects = AgtkConstants['filterEffects'];

export interface AgtkCommandObjectFilterEffectConfig {
  effectType: FilterEffects[keyof FilterEffects];
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
