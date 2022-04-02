import type { AgtkConstants } from '../../constants';

type ObjectLock = AgtkConstants['actionCommands']['objectLock'];
type ObjectLockValue = ObjectLock[keyof ObjectLock];

export interface AgtkCommandObjectLockConfig {
  lockTouchedObject: boolean;
  lockViewportLightObject: boolean;
  lockObjectOnScreen: boolean;
  objectType: ObjectLockValue;
  /**
   * Specify the index of the object group set The object groups
   * prepared by the system are Agtk.constants.objectGroup.ObjectGroupPlayer,
   * Can be specified with Agtk.constants.objectGroup.ObjectGroupEnemy
   */
  objectGroup: number;
  objectId: number;
  useType: ObjectLockValue;
  switchId: number;
  switchCondition: number;
  variableId: number;
  compareVariableOperator: number;
  compareValueType: ObjectLockValue;
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
