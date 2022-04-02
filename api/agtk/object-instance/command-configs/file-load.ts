import type { AgtkConstants } from '../../constants';

type FileLoad = AgtkConstants['actionCommands']['fileLoad'];

export interface AgtkCommandFileLoadConfig {
  projectCommonVariables: boolean;
  projectCommonSwitches: boolean;
  sceneAtTimeOfSave: boolean;
  objectsStatesInSceneAtTimeOfSave: boolean;
  effectType: FileLoad[keyof FileLoad];
  duration300: number;
}
