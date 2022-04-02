export type CCSizeNamespace = {
  /**
   * cc.Size is the class for size object, please do not use its
   * constructor to create sizes, use cc.size() alias function instead.
   */
  new (width: number, height: number): CCSize;
};

/**
 * cc.Size is the class for size object, please do not use its
 * constructor to create sizes, use cc.size() alias function instead.
 */
export interface CCSize {
  width: number;
  height: number;
}
