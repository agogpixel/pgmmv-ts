export type CCRectNamespace = {
  /**
   * cc.Rect is the class for rect object.
   * Please do not use its constructor to create rects, use cc.rect() alias function instead.
   *
   * @param x
   * @param y
   * @param width
   * @param height
   */
  new (x: number, y: number, width: number, height: number): CCRect;
};

/**
 * cc.Rect is the class for rect object.
 * Please do not use its constructor to create rects, use cc.rect() alias function instead.
 */
export interface CCRect {
  height: number;
  width: number;
  x: number;
  y: number;
}
