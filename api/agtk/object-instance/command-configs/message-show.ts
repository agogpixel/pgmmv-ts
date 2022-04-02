import type { AgtkConstants } from '../../constants';

type MessageShow = AgtkConstants['actionCommands']['messageShow'];
type MessageShowValue = MessageShow[keyof MessageShow];

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
  windowType: MessageShowValue;
  templateId: MessageShowValue;
  imageId: number;
  windowTransparency: number;
  positionType: MessageShowValue;
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  topBottomMargin: number;
  leftRightMargin: number;
  horzAlign: MessageShowValue;
  vertAlign: MessageShowValue;
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
