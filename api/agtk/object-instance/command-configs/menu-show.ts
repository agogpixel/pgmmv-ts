import type { AgtkConstants } from '../../constants';

type MenuShow = AgtkConstants['actionCommands']['menuShow'];

export interface AgtkCommandMenuShowConfig {
  layerId: number;
  useEffect: boolean;
  effectType: MenuShow[keyof MenuShow];
  fadein: boolean;
  duration300: number;
}
