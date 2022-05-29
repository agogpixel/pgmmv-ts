/* eslint-disable @typescript-eslint/ban-types */
import type { CCMenuItemLabel, CCMenuItemLabelNamespace } from './menu-item-label';
import type { CCNode } from './node';

export type CCMenuItemAtlasFontNamespace = {
  /**
   * Helper class that creates a MenuItemLabel class with a LabelAtlas.
   *
   * @param value The text to display.
   * @param charMapFile The character map file.
   * @param itemWidth
   * @param itemHeight
   * @param startCharMap A single character.
   * @param callback
   * @param target
   */
  new (
    value: string,
    charMapFile: string,
    itemWidth: number,
    itemHeight: number,
    startCharMap: string,
    callback?: Function | string,
    target?: CCNode
  ): CCMenuItemAtlasFont;

  /**
   * Create menu item from string with font.
   *
   * @param value The text to display.
   * @param charMapFile The character map file.
   * @param itemWidth
   * @param itemHeight
   * @param startCharMap A single character.
   * @param callback
   * @param target
   * @deprecated Since v3.0, please use new cc.MenuItemAtlasFont() instead.
   */
  create(
    value: string,
    charMapFile: string,
    itemWidth: number,
    itemHeight: number,
    startCharMap: string,
    callback?: Function | string,
    target?: CCNode
  ): CCMenuItemAtlasFont;
} & CCMenuItemLabelNamespace;

/**
 * Helper class that creates a MenuItemLabel class with a LabelAtlas.
 *
 * ```
 * var menuItem = new cc.MenuItemAtlasFont(param1,param2...);
 * ```
 */
export interface CCMenuItemAtlasFont extends CCMenuItemLabel {
  /**
   * Initializes a cc.MenuItemAtlasFont with string.
   *
   * @param value The text to display.
   * @param charMapFile The character map file.
   * @param itemWidth
   * @param itemHeight
   * @param startCharMap A single character.
   * @param callback
   * @param target
   */
  initWithString(
    value: string,
    charMapFile: string,
    itemWidth: number,
    itemHeight: number,
    startCharMap: string,
    callback?: Function | string,
    target?: CCNode
  ): boolean;
}
