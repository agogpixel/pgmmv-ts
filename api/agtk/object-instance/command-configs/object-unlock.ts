import type { AgtkConstants } from '../../constants';

type ObjectUnlock = AgtkConstants['actionCommands']['objectUnlock'];

export interface AgtkCommandObjectUnlockConfig {
  objectType: ObjectUnlock[keyof ObjectUnlock];
  /**
   * * Specify the index for the object group configured in Object Group Administration
   * for objectGroup. Object groups prepared by the system can be specified by
   * Agtk.constants.objectGroup.ObjectGroupPlayer, Agtk.constants.objectGroup.ObjectGroupEnemy.
   */
  objectGroup: number;
  objectId: number;
}
