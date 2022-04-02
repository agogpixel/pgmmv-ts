export type CCPointNamespace = {
  /**
   * cc.Point is the class for point object.
   * Please do not use its constructor to create points, use cc.p() alias function instead.
   *
   * @param x
   * @param y
   */
  new (x: number, y: number): CCPoint;
};

/**
 * cc.Point is the class for point object.
 * Please do not use its constructor to create points, use cc.p() alias function instead.
 */
export interface CCPoint {
  x: number;
  y: number;
}
