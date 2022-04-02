import type { AgtkConstants } from '../../constants';

export interface AgtkCommandObjectLockConfig {
  lockTouchedObject: boolean;
  lockViewportLightObject: boolean;
  lockObjectOnScreen: boolean;
  objectType: AgtkConstants['actionCommands']['objectLock'][keyof AgtkConstants['actionCommands']['objectLock']];
  /**
   * Specify the index of the object group set The object groups
   * prepared by the system are Agtk.constants.objectGroup.ObjectGroupPlayer,
   * Can be specified with Agtk.constants.objectGroup.ObjectGroupEnemy
   */
  objectGroup: number;
  objectId: number;
  useType: AgtkConstants['actionCommands']['objectLock'][keyof AgtkConstants['actionCommands']['objectLock']];
  switchId: number;
  switchCondition: number;
  variableId: number;
  compareVariableOperator: number;
  compareValueType: AgtkConstants['actionCommands']['objectLock'][keyof AgtkConstants['actionCommands']['objectLock']];
  compareValue: number;
  compareVariableObjectId: number;
  /**
   * Use either an Object’s instance ID or one of the following:
   * - Agtk.constants.qualifier.QualifierSingle
   * - Agtk.constants.qualifier.QualifierWhole
   */
  compareVariableQualifierId: number;
  compareVariableId: number;
}
