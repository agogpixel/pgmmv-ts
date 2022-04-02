import type { AgtkConstants } from '../../constants';

type SoundPositionRemember = AgtkConstants['actionCommands']['soundPositionRemember'];

export interface AgtkCommandSoundPositionRememberConfig {
  soundType: SoundPositionRemember[keyof SoundPositionRemember];
  variableObjectId: number;
  variableQualifierId: number;
  variableId: number;
}
