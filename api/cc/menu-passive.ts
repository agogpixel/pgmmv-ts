import type { CCColor } from './color';
import type { CCLayer, CCLayerNamespace } from './layer';
import type { CCMenuItem } from './menu-item';

export type CCMenuPassiveNamespace = {
  /**
   * MenuPassive: The menu passive ui component.
   */
  new (): CCMenuPassive;

  /**
   * Creates an empty CCMenu.
   */
  create(...item: CCMenuItem[]): CCMenuPassive;
  create(): CCMenuPassive;

  /**
   * Creates a CCMenu with it's item, then use addChild() to add other items. It
   * is used for script, it can't init with undetermined number of variables.
   *
   * @param item
   */
  createWithItem(...item: CCMenuItem[]): CCMenuPassive;
} & CCLayerNamespace;

/**
 * MenuPassive: The menu passive ui component.
 */
export interface CCMenuPassive extends CCLayer {
  /**
   * Align items horizontally.
   */
  alignItemsHorizontally(): void;

  /**
   * Align items horizontally with specified padding.
   *
   * @param padding
   * @since v0.7.2
   */
  alignItemsHorizontallyWithPadding(padding: number): void;

  /**
   * Align items in columns.
   *
   * @param args
   */
  alignItemsInColumns(...args: number[]): void;

  /**
   * Align menu items in rows
   *
   * @param args
   */
  alignItemsInRows(...args: number[]): void;

  /**
   * Align items vertically with default padding.
   */
  alignItemsVertically(): void;

  /**
   * Align items vertically with specified padding.
   *
   * @param padding
   * @since v0.7.2
   */
  alignItemsVerticallyWithPadding(padding: number): void;

  /**
   * Color: conforms with CCRGBAProtocol protocol.
   */
  getColor(): CCColor;

  /**
   * Opacity: conforms with CCRGBAProtocol protocol.
   */
  getOpacity(): number;

  /**
   * Initializes a CCMenu with it's items.
   *
   * @param item
   * @param args
   */
  initWithItems(item: CCMenuItem, args: CCMenuItem[]): boolean;
}
