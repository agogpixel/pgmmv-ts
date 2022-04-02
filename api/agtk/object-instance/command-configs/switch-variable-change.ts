import type { AgtkConstants } from '../../constants';

type Assignments = AgtkConstants['assignments'];
type AssignmentsValue = Assignments[keyof Assignments];

/**
 * See: Agtk.constants.assignments.
 */
export interface AgtkCommandSwitchVariableChangeConfig {
  swtch: boolean;
  switchObjectId: number;
  switchQualifierId: number;
  switchId: number;
  switchValue: AssignmentsValue;
  variableObjectId: number;
  variableQualifierId: number;
  variableId: number;
  variableAssignOperator: AssignmentsValue;
  /**
   * * Do NOT specify Agtk.constants.assignments.VariableAssignScript
   */
  variableAssignValueType: AssignmentsValue;
  assignValue: number;
  assignVariableObjectId: number;
  assignVariableQualifierId: number;
  assignVariableId: number;
  randomMin: number;
  randomMax: number;
  assignScript: string;
}
