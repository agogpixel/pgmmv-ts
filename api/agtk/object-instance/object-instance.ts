import type { AgtkConstants } from '../constants';

import type {
  AgtkCommandActionExecConfig,
  AgtkCommandAttackSettingConfig,
  AgtkCommandBulletFireConfig,
  AgtkCommandCameraAreaChangeConfig,
  AgtkCommandDatabaseReflectConfig,
  AgtkCommandDirectionMoveConfig,
  AgtkCommandDisableObjectEnableConfig,
  AgtkCommandDisappearObjectRecoverConfig,
  AgtkCommandDisplayDirectionMoveConfig,
  AgtkCommandEffectRemoveConfig,
  AgtkCommandEffectShowConfig,
  AgtkCommandFileLoadConfig,
  AgtkCommandForthBackMoveTurnConfig,
  AgtkCommandGameSpeedChangeConfig,
  AgtkCommandImageShowConfig,
  AgtkCommandLayerDisableConfig,
  AgtkCommandLayerEnableConfig,
  AgtkCommandLayerHideConfig,
  AgtkCommandLayerMoveConfig,
  AgtkCommandLayerShowConfig,
  AgtkCommandMenuHideConfig,
  AgtkCommandMenuShowConfig,
  AgtkCommandMessageShowConfig,
  AgtkCommandMovieShowConfig,
  AgtkCommandObjectChangeConfig,
  AgtkCommandObjectCreateConfig,
  AgtkCommandObjectFilterEffectConfig,
  AgtkCommandObjectFilterEffectRemoveConfig,
  AgtkCommandObjectLockConfig,
  AgtkCommandObjectMoveConfig,
  AgtkCommandObjectPushPullConfig,
  AgtkCommandObjectUnlockConfig,
  AgtkCommandParticleRemoveConfig,
  AgtkCommandParticleShowConfig,
  AgtkCommandResourceSetChangeConfig,
  AgtkCommandSceneEffectConfig,
  AgtkCommandSceneEffectRemoveConfig,
  AgtkCommandSceneGravityChangeConfig,
  AgtkCommandSceneRotateFlipConfig,
  AgtkCommandSceneShakeConfig,
  AgtkCommandScrollMessageShowConfig,
  AgtkCommandSoundPlayConfig,
  AgtkCommandSoundPositionRememberConfig,
  AgtkCommandSwitchVariableChangeConfig,
  AgtkCommandSwitchVariableResetConfig,
  AgtkCommandTemplateMoveConfig,
  AgtkCommandTimerConfig
} from './command-configs';
import type { AgtkObjectInstanceSwitches } from './switches';
import type { AgtkObjectInstanceVariables } from './variables';

type CommandBehaviorNext = AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorNext'];
type CommandBehaviorLoop = AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorLoop'];
type CommandBehaviorBreak = AgtkConstants['actionCommands']['commandBehavior']['CommandBehaviorBreak'];

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
  execCommandTemplateMove(arg1: AgtkCommandTemplateMoveConfig): CommandBehaviorNext;

  /**
   * Executes "Lock Object";
   *
   * @param arg1
   */
  execCommandObjectLock(arg1: AgtkCommandObjectLockConfig): CommandBehaviorNext;

  /**
   * Executes "Generate Object".
   *
   * @param arg1
   */
  execCommandObjectCreate(arg1: AgtkCommandObjectCreateConfig): CommandBehaviorNext;

  /**
   * Executes "Change Object".
   *
   * @param arg1
   */
  execCommandObjectChange(arg1: AgtkCommandObjectChangeConfig): CommandBehaviorNext;

  /**
   * Executes "Move Object".
   *
   * @param arg1
   */
  execCommandObjectMove(arg1: AgtkCommandObjectMoveConfig): CommandBehaviorNext;

  /**
   * Executes "Push/Pull Object".
   *
   * @param arg1
   */
  execCommandObjectPushPull(arg1: AgtkCommandObjectPushPullConfig): CommandBehaviorLoop;

  /**
   * Executes "Move Layer".
   *
   * @param arg1
   */
  execCommandLayerMove(arg1: AgtkCommandLayerMoveConfig): CommandBehaviorNext;

  /**
   * Executes "Attack Settings".
   *
   * @param arg1
   */
  execCommandAttackSetting(arg1: AgtkCommandAttackSettingConfig): CommandBehaviorNext;

  /**
   * Executes "Fire Bullet".
   *
   * @param arg1
   */
  execCommandBulletFire(arg1: AgtkCommandBulletFireConfig): CommandBehaviorNext;

  /**
   * Executes "Destroy Object".
   *
   * @param arg1 Not used.
   */
  execCommandDisappear(arg1?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param arg1
   */
  execCommandDisappearObjectRecover(arg1: AgtkCommandDisappearObjectRecoverConfig): CommandBehaviorNext;

  /**
   * Executes "Disable Object".
   *
   * @param arg1 Not used.
   */
  execCommandDisable(arg1?: unknown): CommandBehaviorNext;

  /**
   * Executes "Restore Destroyed Object".
   *
   * @param arg1
   */
  execCommandDisableObjectEnable(arg1: AgtkCommandDisableObjectEnableConfig): CommandBehaviorNext;

  /**
   * Executes "Apply Filter Effects on Object".
   *
   * @param arg1
   */
  execCommandObjectFilterEffect(arg1: AgtkCommandObjectFilterEffectConfig): CommandBehaviorNext;

  /**
   * Executes "Delete Filter Effects from Objects".
   *
   * @param arg1
   */
  execCommandObjectFilterEffectRemove(arg1: AgtkCommandObjectFilterEffectRemoveConfig): CommandBehaviorNext;

  /**
   * Executes "Apply Screen Effect to Scene".
   *
   * @param arg1
   */
  execCommandSceneEffect(arg1: AgtkCommandSceneEffectConfig): CommandBehaviorNext;

  /**
   * Executes "Delete Screen Effects from Scene".
   *
   * @param arg1
   */
  execCommandSceneEffectRemove(arg1: AgtkCommandSceneEffectRemoveConfig): CommandBehaviorNext;

  /**
   * Executes "Change Scene Gravity Effect".
   *
   * @param arg1
   */
  execCommandSceneGravityChange(arg1: AgtkCommandSceneGravityChangeConfig): CommandBehaviorNext;

  /**
   * Executes "Rotate/Flip Scene".
   *
   * @param arg1
   */
  execCommandSceneRotateFlip(arg1: AgtkCommandSceneRotateFlipConfig): CommandBehaviorNext;

  /**
   * Executes "Change Camera Display Area".
   *
   * @param arg1
   */
  execCommandCameraAreaChange(arg1: AgtkCommandCameraAreaChangeConfig): CommandBehaviorNext;

  /**
   * Executes "Audio Playback".
   *
   * @param arg1
   */
  execCommandSoundPlay(arg1: AgtkCommandSoundPlayConfig): CommandBehaviorNext;

  /**
   * Executes "Show Text".
   *
   * @param arg1
   */
  execCommandMessageShow(arg1: AgtkCommandMessageShowConfig): CommandBehaviorNext;

  /**
   * Executes "Show Scrolling Text".
   *
   * @param arg1
   */
  execCommandScrollMessageShow(arg1: AgtkCommandScrollMessageShowConfig): CommandBehaviorNext;

  /**
   * Executes "Show Effect".
   *
   * @param arg1
   */
  execCommandEffectShow(arg1: AgtkCommandEffectShowConfig): CommandBehaviorNext;

  /**
   * Executes "Hide Effects".
   *
   * @param arg1
   */
  execCommandEffectRemove(arg1: AgtkCommandEffectRemoveConfig): CommandBehaviorNext;

  /**
   * Executes "Show Particles".
   *
   * @param arg1
   */
  execCommandParticleShow(arg1: AgtkCommandParticleShowConfig): CommandBehaviorNext;

  /**
   * Executes "Hide Particles".
   *
   * @param arg1
   */
  execCommandParticleRemove(arg1: AgtkCommandParticleRemoveConfig): CommandBehaviorNext;

  /**
   * Executes "Play Video".
   *
   * @param arg1
   */
  execCommandMovieShow(arg1: AgtkCommandMovieShowConfig): CommandBehaviorNext;

  /**
   * Executes "Display Image".
   *
   * @param arg1
   */
  execCommandImageShow(arg1: AgtkCommandImageShowConfig): CommandBehaviorNext;

  /**
   * Executes "Change Switch/Variable".
   *
   * @param arg1
   */
  execCommandSwitchVariableChange(arg1: AgtkCommandSwitchVariableChangeConfig): CommandBehaviorNext;

  /**
   * Executes "Reset Switch/Variable".
   *
   * @param arg1
   */
  execCommandSwitchVariableReset(arg1: AgtkCommandSwitchVariableResetConfig): CommandBehaviorNext;

  /**
   * Executes "Change Game Speed".
   *
   * @param arg1
   */
  execCommandGameSpeedChange(arg1: AgtkCommandGameSpeedChangeConfig): CommandBehaviorNext;

  /**
   * Executes "Timer Function".
   *
   * @param arg1
   */
  execCommandTimer(arg1: AgtkCommandTimerConfig): CommandBehaviorNext;

  /**
   * Executes "End Scene".
   *
   * @param arg1 Not used.
   */
  execCommandSceneTerminate(arg1?: unknown): CommandBehaviorNext;

  /**
   * Executes "Set Move Direction and Move".
   *
   * @param arg1
   */
  execCommandDirectionMove(arg1: AgtkCommandDirectionMoveConfig): CommandBehaviorNext;

  /**
   * Executes "Back and Forth Moving and Turning".
   *
   * @param arg1
   */
  execCommandForthBackMoveTurn(arg1: AgtkCommandForthBackMoveTurnConfig): CommandBehaviorNext;

  /**
   * Executes "Execute Object Action". When action of this object self is executed,
   * Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBreak is returned.
   *
   * @param arg1
   */
  execCommandActionExec(arg1: AgtkCommandActionExecConfig): CommandBehaviorNext | CommandBehaviorBreak;

  /**
   * Executes "Shake Scene".
   *
   * @param arg1
   */
  execCommandSceneShake(arg1: AgtkCommandSceneShakeConfig): CommandBehaviorNext;

  /**
   * Execute "Disable Layer Display".
   *
   * @param arg1
   */
  execCommandLayerHide(arg1: AgtkCommandLayerHideConfig): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Display".
   *
   * @param arg1
   */
  execCommandLayerShow(arg1: AgtkCommandLayerShowConfig): CommandBehaviorNext;

  /**
   * Executes "Disable Layer Motion".
   *
   * @param arg1
   */
  execCommandLayerDisable(arg1: AgtkCommandLayerDisableConfig): CommandBehaviorNext;

  /**
   * Executes "Enable Layer Motion".
   *
   * @param arg1
   */
  execCommandLayerEnable(arg1: AgtkCommandLayerEnableConfig): CommandBehaviorNext;

  /**
   * Executes "Show Menu Screen".
   *
   * @param arg1
   */
  execCommandMenuShow(arg1: AgtkCommandMenuShowConfig): CommandBehaviorNext;

  /**
   * Executes "Hide Menu Screen".
   *
   * @param arg1
   */
  execCommandMenuHide(arg1: AgtkCommandMenuHideConfig): CommandBehaviorNext;

  /**
   * Executes "Move Towards Display Direction"
   *
   * @param arg1
   */
  execCommandDisplayDirectionMove(arg1: AgtkCommandDisplayDirectionMoveConfig): CommandBehaviorNext;

  /**
   * Executes “File load".
   *
   * @param arg1
   */
  execCommandFileLoad(arg1: AgtkCommandFileLoadConfig): CommandBehaviorNext;

  /**
   * Execute "Save Sound Playback Location".
   *
   * @param arg1
   */
  execCommandSoundPositionRemember(arg1: AgtkCommandSoundPositionRememberConfig): CommandBehaviorNext;

  /**
   * Execute "Unlock"
   *
   * @param arg1
   */
  execCommandObjectUnlock(arg1: AgtkCommandObjectUnlockConfig): CommandBehaviorNext;

  /**
   * Execute "Change Animation Resource Set".
   *
   * @param arg1
   */
  execCommandResourceSetChange(arg1: AgtkCommandResourceSetChangeConfig): CommandBehaviorNext;

  /**
   * Run the runtime action “Object ParameterApply to Database".
   *
   * @param arg1
   */
  execCommandDatabaseReflect(arg1: AgtkCommandDatabaseReflectConfig): CommandBehaviorNext;
}
