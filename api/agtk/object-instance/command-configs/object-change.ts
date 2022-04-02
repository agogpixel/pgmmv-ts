export interface AgtkCommandObjectChangeConfig {
  objectId: number;
  actionId: number;
  takeOverVariables: boolean;
  takeOverSwitches: boolean;
  takeOverParentChild: boolean;
  createPosition: number;
  useConnect: boolean;
  connectId: number;
  adjustX: number;
  adjustY: number;
  probability: number;
}
