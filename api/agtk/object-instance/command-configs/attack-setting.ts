import type { AgtkConstants } from '../../constants';

export interface AgtkCommandAttackSettingConfig {
  attackChange: number;
  hitObjectFlag: boolean;
  /**
   * The 1-left shift number of the targetgroup’s index value.
   * Use a logical OR to allow multiple groups.
   * For example, to allow the objectGroupBit: number; player and enemy groups to tileAttackArea: boolean; be
   * affected, the code is (1 << Agtk.constants.objectGoup.ObjectGroupPlayer) | (1 << Agtk.constants.objectGroup.ObjectGroupEnemy).
   */
  objectGroupBit: number;
  hitTileFlag: boolean;
  tileGroupBit: number;
  attributeType: AgtkConstants['actionCommands']['attackSetting'][keyof AgtkConstants['actionCommands']['attackSetting']];
  attributePresetId: AgtkConstants['attackAttributes'][keyof AgtkConstants['attackAttributes']];
  attributeValue: number;
}
