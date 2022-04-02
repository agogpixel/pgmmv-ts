import type { AgtkConstants } from '../../constants';

export interface AgtkCommandMovieShowConfig {
  movieId: number;
  loop: boolean;
  volume: number;
  defaultSize: boolean;
  width: number;
  height: number;
  positionType: AgtkConstants['actionCommands']['movieShow'][keyof AgtkConstants['actionCommands']['movieShow']];
  useConnect: boolean;
  connectId: number;
  vertAlign: AgtkConstants['actionCommands']['movieShow'][keyof AgtkConstants['actionCommands']['movieShow']];
  horzAlign: AgtkConstants['actionCommands']['movieShow'][keyof AgtkConstants['actionCommands']['movieShow']];
  adjustX: number;
  adjustY: number;
  hideOnObjectActionChange: boolean;
  stopObject: boolean;
  stopGame: boolean;
  fillBlack: boolean;
  priority: boolean;
  /**
   * To be removed.
   */
  priorityMostFront: boolean;
  /**
   * Designate Agtk.constants.actionCommands.priorityType.PriorityBackground~PriorityMostFrontWithMenu.
   */
  priorityType: number;
}
