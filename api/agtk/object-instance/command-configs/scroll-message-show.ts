import type { AgtkConstants } from '../../constants';

export interface AgtkCommandScrollMessageShowConfig {
  textId: number;
  scrollSpeed: number;
  scrollUp: boolean;
  colorA: number;
  colorR: number;
  colorG: number;
  colorB: number;
  backgroundWidth: number;
  backgroundHeight: number;
  backgroundType: AgtkConstants['actionCommands']['scrollMessageShow'][keyof AgtkConstants['actionCommands']['scrollMessageShow']];
  templateId: AgtkConstants['actionCommands']['scrollMessageShow'][keyof AgtkConstants['actionCommands']['scrollMessageShow']];
  imageId: number;
  backgroundTransparency: number;
  topBottomMargin: number;
  leftRightMargin: number;
  horzAlign: AgtkConstants['actionCommands']['scrollMessageShow'][keyof AgtkConstants['actionCommands']['scrollMessageShow']];
  positionType: AgtkConstants['actionCommands']['scrollMessageShow'][keyof AgtkConstants['actionCommands']['scrollMessageShow']];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  actionChangeHide: boolean;
  speedUpByKey: boolean;
  keyId: number;
  objectStop: boolean;
  gameStop: boolean;
  /**
   * To be removed.
   */
  priorityMostFront: boolean;
  priority: boolean;
  /**
   * Designate Agtk.constants.actionCommands.priorityType.PriorityBackground~PriorityMostFrontWithMenu.
   */
  priorityType: number;
}
