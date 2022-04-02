import type { AgtkConstants } from '../constants';

import type {
  AgtkCommandAttackSettingConfig,
  AgtkCommandBulletFireConfig,
  AgtkCommandDisableObjectEnableConfig,
  AgtkCommandDisappearObjectRecoverConfig,
  AgtkCommandLayerMoveConfig,
  AgtkCommandObjectChangeConfig,
  AgtkCommandObjectCreateConfig,
  AgtkCommandObjectFilterEffectConfig,
  AgtkCommandObjectFilterEffectRemoveConfig,
  AgtkCommandObjectLockConfig,
  AgtkCommandObjectMoveConfig,
  AgtkCommandObjectPushPullConfig,
  AgtkCommandSceneEffectConfig,
  AgtkCommandTemplateMoveConfig
} from './command-configs';
import type { AgtkObjectInstanceSwitches } from './switches';
import type { AgtkObjectInstanceVariables } from './variables';

export interface AgtkObjectInstance {
  readonly id: number;

  readonly objectId: number;

  /**
   * Object location layer ID.
   */
  layerId: number;

  /**
   * Object location layer index.
   */
  layerIndex: number;

  /**
   * References object switches.
   */
  switches: AgtkObjectInstanceSwitches;

  /**
   * References object variables.
   */
  variables: AgtkObjectInstanceVariables;

  /**
   * Returns instance ID list of object instance that attacked this
   * object instance.
   *
   * * Information for 1 frame before can be acquired.
   */
  getAttackerInstanceIdList(): number[];

  /**
   * Executes "Template movement settings".
   *
   * @param arg1
   */
  execCommandTemplateMove(
    arg1: AgtkCommandTemplateMoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Lock Object";
   *
   * @param arg1
   */
  execCommandObjectLock(
    arg1: AgtkCommandObjectLockConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Generate Object".
   *
   * @param arg1
   */
  execCommandObjectCreate(
    arg1: AgtkCommandObjectCreateConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Change Object".
   *
   * @param arg1
   */
  execCommandObjectChange(
    arg1: AgtkCommandObjectChangeConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Move Object".
   *
   * @param arg1
   */
  execCommandObjectMove(
    arg1: AgtkCommandObjectMoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Push/Pull Object".
   *
   * @param arg1
   */
  execCommandObjectPushPull(
    arg1: AgtkCommandObjectPushPullConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorLoop'];

  /**
   * Executes "Move Layer".
   *
   * @param arg1
   */
  execCommandLayerMove(
    arg1: AgtkCommandLayerMoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Attack Settings".
   *
   * @param arg1
   */
  execCommandAttackSetting(
    arg1: AgtkCommandAttackSettingConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Fire Bullet".
   *
   * @param arg1
   */
  execCommandBulletFire(
    arg1: AgtkCommandBulletFireConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Destroy Object".
   *
   * @param arg1 Not used.
   */
  execCommandDisappear(arg1?: unknown): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param arg1
   */
  execCommandDisappearObjectRecover(
    arg1: AgtkCommandDisappearObjectRecoverConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Disable Object".
   *
   * @param arg1 Not used.
   */
  execCommandDisable(arg1?: unknown): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param arg1
   */
  execCommandDisableObjectEnable(
    arg1: AgtkCommandDisableObjectEnableConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Apply Filter Effects on Object".
   *
   * @param arg1
   */
  execCommandObjectFilterEffect(
    arg1: AgtkCommandObjectFilterEffectConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Delete Filter Effects from Objects".
   *
   * @param arg1
   */
  execCommandObjectFilterEffectRemove(
    arg1: AgtkCommandObjectFilterEffectRemoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Apply Screen Effect to Scene".
   *
   * @param arg1
   */
  execCommandSceneEffect(
    arg1: AgtkCommandSceneEffectConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];
}
