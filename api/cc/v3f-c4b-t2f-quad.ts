import type { CCV3F_C4B_T2F } from './v3f-c4b-t2f';

export type CCV3F_C4B_T2F_QuadNamespace = {
  /**
   * @param tl
   * @param bl
   * @param tr
   * @param br
   * @param arrayBuffer
   * @param offset
   */
  new (
    tl: CCV3F_C4B_T2F,
    bl: CCV3F_C4B_T2F,
    tr: CCV3F_C4B_T2F,
    br: CCV3F_C4B_T2F,
    arrayBuffer: unknown[],
    offset: number
  ): CCV3F_C4B_T2F_Quad;

  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 96;
};

/**
 *
 */
export type CCV3F_C4B_T2F_Quad = Record<string, never>;
