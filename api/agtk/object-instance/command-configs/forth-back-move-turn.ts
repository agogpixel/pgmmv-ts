import type { AgtkConstants } from '../../constants';

type ForthBackMoveTurn = AgtkConstants['actionCommands']['forthBackMoveTurn'];
type ForthBackMoveTurnValue = ForthBackMoveTurn[keyof ForthBackMoveTurn];

export interface AgtkCommandForthBackMoveTurnConfig {
  moveType: ForthBackMoveTurnValue;
  turnType: ForthBackMoveTurnValue;
  directionId: number;
}
