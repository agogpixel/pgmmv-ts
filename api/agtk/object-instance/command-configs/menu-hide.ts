import type { AgtkConstants } from '../../constants';

type MenuHide = AgtkConstants['actionCommands']['menuHide'];

export interface AgtkCommandMenuHideConfig {
  hideExceptInitial: boolean;
  useEffect: boolean;
  effectType: MenuHide[keyof MenuHide];
  fadeout: boolean;
  duration300: number;
  disableObjects: boolean;
}
