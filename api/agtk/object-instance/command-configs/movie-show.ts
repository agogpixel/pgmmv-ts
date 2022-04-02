import type { AgtkConstants } from '../../constants';

type MovieShow = AgtkConstants['actionCommands']['movieShow'];
type MovieShowValue = MovieShow[keyof MovieShow];

export interface AgtkCommandMovieShowConfig {
  movieId: number;
  loop: boolean;
  volume: number;
  defaultSize: boolean;
  width: number;
  height: number;
  positionType: MovieShowValue;
  useConnect: boolean;
  connectId: number;
  vertAlign: MovieShowValue;
  horzAlign: MovieShowValue;
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
