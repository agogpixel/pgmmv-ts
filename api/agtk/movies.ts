import type { AgtkMovie } from './movie';

export interface AgtkMovies {
  getIdList(): number;
  getIdByName(arg: string): number;
  get(arg: number): AgtkMovie;
}
