import type { AgtkConstants } from '../../constants';

export interface AgtkCommandImageShowConfig {
  imageId: number;
  duration300: number;
  durationUnlimited: boolean;
  defaultSize: boolean;
  width: number;
  height: number;
  positionType: AgtkConstants['actionCommands']['imageShow'][keyof AgtkConstants['actionCommands']['imageShow']];
  useConnect: boolean;
  connectId: number;
  vertAlign: AgtkConstants['actionCommands']['imageShow'][keyof AgtkConstants['actionCommands']['imageShow']];
  horzAlign: AgtkConstants['actionCommands']['imageShow'][keyof AgtkConstants['actionCommands']['imageShow']];
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
