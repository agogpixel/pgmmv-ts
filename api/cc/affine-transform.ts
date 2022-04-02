export type CCAffineTransformNamespace = {
  /**
   * cc.AffineTransform class represent an affine transform matrix.
   *
   * @param x
   * @param y
   */
  new (a: number, b: number, c: number, d: number, tx: number, ty: number): CCAffineTransform;
};

/**
 * cc.AffineTransform class represent an affine transform matrix.
 * It's composed basically by translation, rotation, scale transformations.
 * Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
 */
export interface CCAffineTransform {
  a: number;
  b: number;
  c: number;
  d: number;
  tx: number;
  ty: number;
}
