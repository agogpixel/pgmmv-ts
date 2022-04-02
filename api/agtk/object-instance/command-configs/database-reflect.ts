import type { AgtkConstants } from '../../constants';

type Assignments = AgtkConstants['assignments'];

export interface AgtkCommandDatabaseReflectConfig {
  columnIndex: number;
  columnIndexFromName: boolean;
  columnNumberFromValue: boolean;
  columnVariableId: number;
  columnVariableObjectId: number;
  columnVariableQualifierId: number;
  databaseId: number;
  fromObject: boolean;
  fromRow: boolean;
  objectId: number;
  reflectObjectId: number;
  reflectQualifierId: number;
  reflectVariableAssignOperator: Assignments[keyof Assignments];
  reflectVariableId: number;
  rowIndexFromName: boolean;
  rowNumberFromValue: boolean;
  rowIndex: number;
  rowVariableObjectId: number;
  rowVariableQualifierId: number;
  rowVariableId: number;
}
