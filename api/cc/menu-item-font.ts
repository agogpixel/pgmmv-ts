/* eslint-disable @typescript-eslint/ban-types */
import type { CCMenuItemLabel, CCMenuItemLabelNamespace } from './menu-item-label';
import type { CCNode } from './node';

export type CCMenuItemFontNamespace = {
  /**
   * Helper class that creates a CCMenuItemLabel class with a Label.
   *
   * @param value Text for the menu item.
   * @param callback the callback to run, either in function name or pass in the
   * actual function.
   * @param target The target to run callback.
   */
  new (value?: string, callback?: Function | string, target?: CCNode): CCMenuItemFont;

  /**
   * Create a menu item from string.
   *
   * @param value Text for the menu item.
   * @param callback the callback to run, either in function name or pass in the
   * actual function.
   * @param target The target to run callback.
   * @deprecated Since v3.0, please use new construction instead.
   */
  create(value?: string, callback?: Function | string, target?: CCNode): CCMenuItemFont;

  /**
   * A shared function to get the font name for menuitem font.
   */
  fontName(): string;

  /**
   * A shared function to get the font size for menuitem font.
   */
  fontSize(): number;

  /**
   * A shared function to set the fontsize for menuitem font.
   *
   * @param name
   */
  setFontName(name: string): void;

  /**
   * A shared function to set the fontSize for menuitem font.
   *
   * @param fontSize
   */
  setFontSize(fontSize: number): void;
} & CCMenuItemLabelNamespace;

/**
 * Helper class that creates a CCMenuItemLabel class with a Label.
 *
 * ```
 * var menuItem = new cc.MenuItemFont(value, callback, target);
 * ```
 */
export interface CCMenuItemFont extends CCMenuItemLabel {
  /**
   * Font name of font item.
   */
  fontName: string;

  /**
   * Font size of font item.
   */
  fontSize: number;

  /**
   * Return the font name for cc.MenuItemFont.
   */
  getFontName(): string;

  /**
   * Return the font size of cc.MenuItemFont.
   */
  getFontSize(): number;

  /**
   * Initializes cc.MenuItemFont with string.
   *
   * @param value Text for the menu item.
   * @param callback the callback to run, either in function name or pass in the
   * actual function.
   * @param target The target to run callback.
   */
  initWithString(value: string, callback?: Function | string, target?: CCNode): boolean;

  /**
   * Set the font name for cc.MenuItemFont.
   *
   * @param name
   */
  setFontName(name: string): void;

  /**
   * Set the font size for cc.MenuItemFont.
   *
   * @param s
   */
  setFontSize(s: number): void;
}
