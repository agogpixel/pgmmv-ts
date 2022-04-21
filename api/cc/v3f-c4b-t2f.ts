import type { CCColor } from './color';
import type { CCTex2F } from './tex-2f';
import type { CCVertex3F } from './vertex-3f';

export type CCV3F_C4B_T2FNamespace = {
  /**
   * @param tl
   * @param bl
   * @param tr
   * @param br
   * @param arrayBuffer
   * @param offset
   */
  new (
    vertices: CCVertex3F,
    colors: CCColor,
    texCoords: CCTex2F,
    arrayBuffer: unknown[],
    offset: number
  ): CCV3F_C4B_T2F;

  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 24;
};

/**
 *
 */
export type CCV3F_C4B_T2F = Record<string, never>;
