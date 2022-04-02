import type { AgtkConstants } from '../../constants';

type DirectionMove = AgtkConstants['actionCommands']['directionMove'];

export interface AgtkCommandDirectionMoveConfig {
  direction: number;
  /**
   * Designate direction of movement and move (Match Move Direction).
   */
  directionId: DirectionMove[keyof DirectionMove];
  moveDistance: number;
  moveDistanceEnabled: boolean;
}
