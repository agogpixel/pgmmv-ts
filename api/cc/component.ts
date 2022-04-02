import type { CCClass, CCClassNamespace } from './class';

export type CCComponentNamespace = {
  /**
   * The base class of component in CocoStudio.
   */
  new (): CCComponent;

  /**
   * Allocates and initializes a component.
   *
   * @deprecated since v3.0, please use new construction instead.
   */
  create(): CCComponent;
} & CCClassNamespace;

/**
 * The base class of component in CocoStudio.
 */
export interface CCComponent extends CCClass {
  /**
   * Construction of cc.Component
   */
  ctor(): void;

  /**
   * Returns the name of cc.Component.
   */
  getName(): string;

  /**
   * Returns the owner of cc.Component.
   */
  getOwner(): unknown;

  /**
   * Initializes a cc.Component.
   */
  init(): boolean;

  /**
   * Returns component whether is enabled.
   */
  isEnabled(): boolean;

  /**
   * The callback when a component enter stage.
   */
  onEnter(): void;

  /**
   * The callback when a component exit stage.
   */
  onExit(): void;

  /**
   * Serialize a component object.
   *
   * @param reader
   */
  serialize(reader: unknown): void;

  /**
   * Sets component whether is enabled.
   *
   * @param enable
   */
  setEnabled(enable: boolean): void;

  /**
   * Sets the name to cc.Component.
   *
   * @param name
   */
  setName(name: string): void;

  /**
   * Sets the owner to cc.Component.
   *
   * @param owner
   */
  setOwner(owner: unknown): void;

  /**
   * The callback per every frame if it schedules update.
   *
   * @param delta
   */
  update(delta: number): void;
}
