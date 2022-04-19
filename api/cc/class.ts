export interface CCClassNamespace {
  /**
   * The base Class implementation (does nothing).
   */
  new (): CCClass;

  /**
   * Create a new Class that inherits from this Class.
   *
   * @param props
   */
  extend<T>(props: Record<string, unknown>): T;
}

/**
 * The base Class implementation (does nothing).
 */
export interface CCClass {
  /**
   * @protected
   */
  _super(): void;
}
