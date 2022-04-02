import type { AgtkConstants } from '../../constants';

export interface AgtkCommandSoundPlayConfig {
  soundType: AgtkConstants['actionCommands']['soundPlay'][keyof AgtkConstants['actionCommands']['soundPlay']];
  seId: number;
  voiceId: number;
  bgmId: number;
  loop: boolean;
  fadein: boolean;
  specifyAudioPosition: boolean;
  audioPositionVariableObjectId: number;
  audioPositionVariableQualifierId: number;
  audioPositionVariableId: number;
  duration300: number;
  volume: number;
  pan: number;
  pitch: number;
}
