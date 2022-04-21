export type CCBlendFuncNamespace = {
  /**
   * Blend Function used for textures.
   *
   * @param src1 Source blend function.
   * @param dst1 Destination blend function.
   */
  new (src1: number, dst1: number): CCBlendFunc;
};

/**
 * Blend Function used for textures.
 */
export interface CCBlendFunc {
  /**
   * Source blend function.
   */
  src1: number;

  /**
   * Destination blend function.
   */
  dst1: number;
}
