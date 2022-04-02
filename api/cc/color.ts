export type CCColorNamespace = {
  /**
   * Color class, please use cc.color() to construct a color.
   *
   * @param r
   * @param g
   * @param b
   * @param a
   */
  new (r: number, g: number, b: number, a: number): CCColor;
};

/**
 * Color class, please use cc.color() to construct a color.
 */
export interface CCColor {
  r: number;
  g: number;
  b: number;
  a: number;
}
