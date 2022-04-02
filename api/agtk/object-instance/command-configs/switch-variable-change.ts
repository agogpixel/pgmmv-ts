import type { AgtkConstants } from '../../constants';

/**
 * See: Agtk.constants.assignments.
 */
export interface AgtkCommandSwitchVariableChangeConfig {
  swtch: boolean;
  switchObjectId: number;
  switchQualifierId: number;
  switchId: number;
  switchValue: AgtkConstants['assignments'][keyof AgtkConstants['assignments']];
  variableObjectId: number;
  variableQualifierId: number;
  variableId: number;
  variableAssignOperator: AgtkConstants['assignments'][keyof AgtkConstants['assignments']];
  /**
   * * Do NOT specify Agtk.constants.assignments.VariableAssignScript
   */
  variableAssignValueType: AgtkConstants['assignments'][keyof AgtkConstants['assignments']];
  assignValue: number;
  assignVariableObjectId: number;
  assignVariableQualifierId: number;
  assignVariableId: number;
  randomMin: number;
  randomMax: number;
  assignScript: string;
}
