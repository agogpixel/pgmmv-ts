import type { AgtkObjectInstance } from './object-instance';

export interface AgtkObjectInstances {
  /**
   * Returns Agtk.objectInstance object.
   *
   * @param arg1 Instance ID
   */
  get(arg1: number): AgtkObjectInstance;
}
