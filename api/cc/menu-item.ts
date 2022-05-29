/* eslint-disable @typescript-eslint/ban-types */
import type { CCNode, CCNodeNamespace } from './node';
import type { CCRect } from './rect';

export type CCMenuItemNamespace = {
  /**
   * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem
   * objects.
   *
   * @param callback
   * @param target
   */
  new (callback: Function | string, target: CCNode): CCMenuItem;

  /**
   * Creates an empty menu item with target and callback. Not recommended to use
   * the base class, should use more defined menu item classes.
   *
   * @param callback
   * @param target
   * @deprecated Since v3.0, please use new cc.MenuItem(callback,target)
   * instead.
   */
  create(callback: Function | string, target: CCNode): CCMenuItem;
} & CCNodeNamespace;

/**
 * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem
 * objects.
 */
export interface CCMenuItem extends CCNode {
  /**
   * Call the selector with target.
   */
  activate(): void;

  /**
   * Initializes a cc.MenuItem with callback.
   *
   * @param callback
   * @param target
   */
  initWithCallback(callback: Function | string, target: CCNode): boolean;

  /**
   * Return whether MenuItem is Enabled.
   */
  isEnabled(): boolean;

  /**
   * Only use for jsbinding.
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Return whether MenuItem is selected.
   */
  isSelected(): boolean;

  /**
   * Return rect value of cc.MenuItem.
   */
  rect(): CCRect;

  /**
   * Set the cc.MenuItem selected same as setIsSelected(true).
   */
  selected(): void;

  /**
   * Set the callback to the menu item.
   *
   * @param callback
   * @param target
   */
  setCallback(callback: Function | string, target: CCNode): void;

  /**
   * Set enable value of MenuItem.
   *
   * @param enable
   */
  setEnabled(enable: boolean): void;

  /**
   * Only use for jsbinding.
   *
   * @param value
   */
  setOpacityModifyRGB(value: unknown): void;

  /**
   * Set the target/selector of the menu item.
   *
   * @param selector
   * @param rec
   * @deprecated Since v3.0
   */
  setTarget(selector: Function | string, rec: CCNode): void;

  /**
   * Set the cc.MenuItem unselected same as setIsSelected(false).
   */
  unselected(): void;
}
