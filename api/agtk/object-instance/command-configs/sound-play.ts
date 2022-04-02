import type { AgtkConstants } from '../../constants';

type SoundPlay = AgtkConstants['actionCommands']['soundPlay'];

export interface AgtkCommandSoundPlayConfig {
  soundType: SoundPlay[keyof SoundPlay];
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
