import type { AgtkConstants } from '../../constants';

type ImageShow = AgtkConstants['actionCommands']['imageShow'];
type ImageShowValue = ImageShow[keyof ImageShow];

export interface AgtkCommandImageShowConfig {
  imageId: number;
  duration300: number;
  durationUnlimited: boolean;
  defaultSize: boolean;
  width: number;
  height: number;
  positionType: ImageShowValue;
  useConnect: boolean;
  connectId: number;
  vertAlign: ImageShowValue;
  horzAlign: ImageShowValue;
  adjustX: number;
  adjustY: number;
  hideOnObjectActionChange: boolean;
  closeByOk: boolean;
  stopObject: boolean;
  stopGame: boolean;
  priority: boolean;
  /**
   * To be removed.
   */
  priorityMostFront: boolean;
  /**
   * Designate Agtk.constants.actionCommands.priorityType.PriorityBackground~PriorityMostFrontWithMenu.
   */
  priorityType: number;
}
