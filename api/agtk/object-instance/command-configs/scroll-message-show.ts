import type { AgtkConstants } from '../../constants';

type ScrollMessageShow = AgtkConstants['actionCommands']['scrollMessageShow'];
type ScrollMessageShowValue = ScrollMessageShow[keyof ScrollMessageShow];

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
  backgroundType: ScrollMessageShowValue;
  templateId: ScrollMessageShowValue;
  imageId: number;
  backgroundTransparency: number;
  topBottomMargin: number;
  leftRightMargin: number;
  horzAlign: ScrollMessageShowValue;
  positionType: ScrollMessageShowValue;
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
