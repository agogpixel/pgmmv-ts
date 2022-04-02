import type { AgtkConstants } from '../../constants';

export interface AgtkCommandMessageShowConfig {
  textFlag: boolean;
  textId: number;
  variableObjectId: number;
  variableQualifierId: number;
  variableId: number;
  fontId: number;
  digitFlag: boolean;
  digits: number;
  zeroPadding: boolean;
  comma: boolean;
  withoutDecimalPlaces: boolean;
  duration300: number;
  durationUnlimited: boolean;
  colorA: number;
  colorR: number;
  colorG: number;
  colorB: number;
  windowWidth: number;
  windowHeight: number;
  windowType: AgtkConstants['actionCommands']['messageShow'][keyof AgtkConstants['actionCommands']['messageShow']];
  templateId: AgtkConstants['actionCommands']['messageShow'][keyof AgtkConstants['actionCommands']['messageShow']];
  imageId: number;
  windowTransparency: number;
  positionType: AgtkConstants['actionCommands']['messageShow'][keyof AgtkConstants['actionCommands']['messageShow']];
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  topBottomMargin: number;
  leftRightMargin: number;
  horzAlign: AgtkConstants['actionCommands']['messageShow'][keyof AgtkConstants['actionCommands']['messageShow']];
  vertAlign: AgtkConstants['actionCommands']['messageShow'][keyof AgtkConstants['actionCommands']['messageShow']];
  actionChangeHide: boolean;
  closeByKey: boolean;
  keyId: number;
  objectStop: boolean;
  gameStop: boolean;
  /**
   * To be removed
   */
  priorityMostFront: boolean;
  priority: boolean;
  /**
   * Designate Agtk.constants.actionCommands.priorityType.PriorityBackground~PriorityMostFrontWithMenu.
   */
  priorityType: number;
}
