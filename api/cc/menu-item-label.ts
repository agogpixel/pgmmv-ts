/* eslint-disable @typescript-eslint/ban-types */
import type { CCColor } from './color';
import type { CCMenuItem, CCMenuItemNamespace } from './menu-item';
import type { CCNode } from './node';

export type CCMenuItemLabelNamespace = {
  /**
   * Any cc.Node that supports the cc.LabelProtocol protocol can be added.
   *
   * @param label
   * @param selector
   * @param target
   */
  new (label?: CCNode, selector?: Function | string, target?: CCNode): CCMenuItemLabel;

  /**
   * @param label
   * @param selector
   * @param target
   * @deprecated since v3.0 ,please use
   * new cc.MenuItemLabel(label,selector,target) instead.
   */
  create(label?: CCNode, selector?: Function | string, target?: CCNode): CCMenuItemLabel;
} & CCMenuItemNamespace;

export interface CCMenuItemLabel extends CCMenuItem {
  /**
   * Color of label when it's disabled.
   */
  disabledColor: CCColor;

  /**
   * Label of label item.
   */
  label: CCNode;

  /**
   * Content string of label item.
   */
  string: string;

  /**
   * Return the disable color for this cc.MenuItemLabel.
   */
  getDisabledColor(): CCColor;

  /**
   * Return label of cc.MenuItemLabel.
   */
  getLabel(): CCNode;

  /**
   * Return the string of cc.MenuItemLabel.
   */
  getString(): string;

  /**
   * Initializes a cc.MenuItemLabel with a label.
   *
   * @param label
   * @param selector
   * @param target
   */
  initWithLabel(label: CCNode, selector?: Function | string, target?: CCNode): boolean;

  /**
   * Set the disable color for this cc.MenuItemLabel.
   *
   * @param color
   */
  setDisabledColor(color: CCColor): void;

  /**
   * Set a label for cc.MenuItemLabel.
   *
   * @param label
   */
  setLabel(label: CCNode): void;

  /**
   * Set the string for cc.MenuItemLabel.
   *
   * @param label
   */
  setString(label: string): void;
}
