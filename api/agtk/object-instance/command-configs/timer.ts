import type { AgtkConstants } from '../../constants';

export interface AgtkCommandTimerConfig {
  start: boolean;
  timerVariableObjectId: number;
  timerVariableQualifierId: number;
  timerVariableId: number;
  countUp: boolean;
  secondType: AgtkConstants['actionCommands']['timer'][keyof AgtkConstants['actionCommands']['timer']];
  second300: number;
  secondVariableObjectId: number;
  secondVariableQualifierId: number;
  secondVariableId: number;
}
