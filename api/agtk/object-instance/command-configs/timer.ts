import type { AgtkConstants } from '../../constants';

type Timer = AgtkConstants['actionCommands']['timer'];

export interface AgtkCommandTimerConfig {
  start: boolean;
  timerVariableObjectId: number;
  timerVariableQualifierId: number;
  timerVariableId: number;
  countUp: boolean;
  secondType: Timer[keyof Timer];
  second300: number;
  secondVariableObjectId: number;
  secondVariableQualifierId: number;
  secondVariableId: number;
}
