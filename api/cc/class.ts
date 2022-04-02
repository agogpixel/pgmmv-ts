export type CCClassNamespace = {
  /**
   * The base Class implementation (does nothing).
   */
  new (): CCClass;

  /**
   * Create a new Class that inherits from this Class.
   *
   * @param props
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  extend(props: Record<string, unknown>): Function;
};

/**
 * The base Class implementation (does nothing).
 */
export interface CCClass {
  /**
   * @protected
   */
  _super(): void;
}
