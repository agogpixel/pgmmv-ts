import type { AgtkConstants } from '../constants';

import type {
  AgtkCommandAttackSettingConfig,
  AgtkCommandBulletFireConfig,
  AgtkCommandCameraAreaChangeConfig,
  AgtkCommandDisableObjectEnableConfig,
  AgtkCommandDisappearObjectRecoverConfig,
  AgtkCommandEffectRemoveConfig,
  AgtkCommandEffectShowConfig,
  AgtkCommandGameSpeedChangeConfig,
  AgtkCommandImageShowConfig,
  AgtkCommandLayerMoveConfig,
  AgtkCommandMessageShowConfig,
  AgtkCommandMovieShowConfig,
  AgtkCommandObjectChangeConfig,
  AgtkCommandObjectCreateConfig,
  AgtkCommandObjectFilterEffectConfig,
  AgtkCommandObjectFilterEffectRemoveConfig,
  AgtkCommandObjectLockConfig,
  AgtkCommandObjectMoveConfig,
  AgtkCommandObjectPushPullConfig,
  AgtkCommandParticleRemoveConfig,
  AgtkCommandParticleShowConfig,
  AgtkCommandSceneEffectConfig,
  AgtkCommandSceneEffectRemoveConfig,
  AgtkCommandSceneGravityChangeConfig,
  AgtkCommandSceneRotateFlipConfig,
  AgtkCommandScrollMessageShowConfig,
  AgtkCommandSoundPlayConfig,
  AgtkCommandSwitchVariableChangeConfig,
  AgtkCommandSwitchVariableResetConfig,
  AgtkCommandTemplateMoveConfig,
  AgtkCommandTimerConfig
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

  /**
   * Executes "Delete Screen Effects from Scene".
   *
   * @param arg1
   */
  execCommandSceneEffectRemove(
    arg1: AgtkCommandSceneEffectRemoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Change Scene Gravity Effect".
   *
   * @param arg1
   */
  execCommandSceneGravityChange(
    arg1: AgtkCommandSceneGravityChangeConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Rotate/Flip Scene".
   *
   * @param arg1
   */
  execCommandSceneRotateFlip(
    arg1: AgtkCommandSceneRotateFlipConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Change Camera Display Area".
   *
   * @param arg1
   */
  execCommandCameraAreaChange(
    arg1: AgtkCommandCameraAreaChangeConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Audio Playback".
   *
   * @param arg1
   */
  execCommandSoundPlay(
    arg1: AgtkCommandSoundPlayConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Show Text".
   *
   * @param arg1
   */
  execCommandMessageShow(
    arg1: AgtkCommandMessageShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Show Scrolling Text".
   *
   * @param arg1
   */
  execCommandScrollMessageShow(
    arg1: AgtkCommandScrollMessageShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Show Effect".
   *
   * @param arg1
   */
  execCommandEffectShow(
    arg1: AgtkCommandEffectShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Hide Effects".
   *
   * @param arg1
   */
  execCommandEffectRemove(
    arg1: AgtkCommandEffectRemoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Show Particles".
   *
   * @param arg1
   */
  execCommandParticleShow(
    arg1: AgtkCommandParticleShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Hide Particles".
   *
   * @param arg1
   */
  execCommandParticleRemove(
    arg1: AgtkCommandParticleRemoveConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Play Video".
   *
   * @param arg1
   */
  execCommandMovieShow(
    arg1: AgtkCommandMovieShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Display Image".
   *
   * @param arg1
   */
  execCommandImageShow(
    arg1: AgtkCommandImageShowConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Change Switch/Variable".
   *
   * @param arg1
   */
  execCommandSwitchVariableChange(
    arg1: AgtkCommandSwitchVariableChangeConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Reset Switch/Variable".
   *
   * @param arg1
   */
  execCommandSwitchVariableReset(
    arg1: AgtkCommandSwitchVariableResetConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Change Game Speed".
   *
   * @param arg1
   */
  execCommandGameSpeedChange(
    arg1: AgtkCommandGameSpeedChangeConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "Timer Function".
   *
   * @param arg1
   */
  execCommandTimer(
    arg1: AgtkCommandTimerConfig
  ): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];

  /**
   * Executes "End Scene".
   *
   * @param arg1 Not used.
   */
  execCommandSceneTerminate(arg1?: unknown): AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];
}
