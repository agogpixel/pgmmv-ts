import type { AgtkConstants } from '../../constants';

import type { AgtkCommandObjectFilterEffectConfig } from './object-filter-effect';

type FilterEffects = AgtkConstants['filterEffects'];

export interface AgtkCommandSceneEffectConfig {
  layerIndex: number;
  filterEffect: AgtkCommandObjectFilterEffectConfig;
  effectType: FilterEffects[keyof FilterEffects];
  noise: number;
  mosaic: number;
  monochrome: number;
  sepia: number;
  negaPosiReverse: number;
  defocus: number;
  chromaticAberration: number;
  darkness: number;
  imageId: number;
  imageTransparency: number;
  imagePlacement: number;
  fillA: number;
  fillR: number;
  fillG: number;
  fillB: number;
  duration300: number;
}
