export type CCVertex3FNamespace = {
  /**
   * @param x
   * @param y
   * @param z
   * @param arrayBuffer
   * @param offset
   */
  new (x: number, y: number, z: number, arrayBuffer: unknown[], offset: number): CCVertex3F;

  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 12;
};

/**
 *
 */
export type CCVertex3F = Record<string, never>;
