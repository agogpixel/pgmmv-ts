export type CCTex2FNamespace = {
  /**
   * @param u
   * @param v
   * @param arrayBuffer
   * @param offset
   */
  new (u: number, v: number, arrayBuffer: unknown[], offset: number): CCTex2F;

  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 8;
};

/**
 *
 */
export type CCTex2F = Record<string, never>;
