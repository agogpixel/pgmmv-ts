/* eslint-disable @typescript-eslint/ban-types */
import type { CCMenuItem, CCMenuItemNamespace } from './menu-item';
import type { CCNode } from './node';
import type { CCSprite } from './sprite';

export type CCMenuItemSpriteNamespace = {
  /**
   * CCMenuItemSprite accepts CCNode objects as items.
   *
   * @param normalSprite Normal state image.
   * @param selectedSprite Selected state image.
   * @param three Disabled state image OR target node.
   * @param four Callback function name in string or actual function, OR target Node.
   * @param five Callback function name in string or actual function.
   */
  new (
    normalSprite?: CCSprite,
    selectedSprite?: CCSprite,
    three?: CCSprite | CCNode,
    four?: Function | string | CCNode,
    five?: Function | string
  ): CCMenuItemSprite;

  /**
   * Create a menu item from sprite.
   *
   * @param normalSprite Normal state image.
   * @param selectedSprite Selected state image.
   * @param three Disabled state image OR target node.
   * @param four Callback function name in string or actual function, OR target Node.
   * @param five Callback function name in string or actual function.
   * @deprecated Since v3.0 please use
   * new cc.MenuItemSprite(normalSprite, selectedSprite, three, four, five)
   * instead.
   */
  create(
    normalSprite?: CCSprite,
    selectedSprite?: CCSprite,
    three?: CCSprite | CCNode,
    four?: Function | string | CCNode,
    five?: Function | string
  ): CCMenuItemSprite;
} & CCMenuItemNamespace;

/**
 * CCMenuItemSprite accepts CCNode objects as items.
 *
 * The images has 3 different states:
 *  - unselected image
 *  - selected image
 *  - disabled image
 *
 * ```
 * var item = new cc.MenuItemSprite(normalImage)//create a menu item from a sprite with no functionality
 * var item = new cc.MenuItemSprite(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
 * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
 * var item = new cc.MenuItemSprite(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
 * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
 * //same as above, but with disabled image, and passing in callback function
 * ```
 */
export interface CCMenuItemSprite extends CCMenuItem {
  /**
   * Sprite in disabled state.
   */
  disabledImage: CCSprite;

  /**
   * Sprite in normal state.
   */
  normalImage: CCSprite;

  /**
   * Sprite in selected state.
   */
  selectedImage: CCSprite;

  /**
   * Return the disabled status of cc.MenuItemSprite.
   */
  getDisabledImage(): CCSprite;

  /**
   * Return the normal status image(cc.Sprite).
   */
  getNormalImage(): CCSprite;

  /**
   * Return the selected status image(cc.Sprite) of cc.MenuItemSprite.
   */
  getSelectedImage(): CCSprite;

  /**
   * Initializes cc.MenuItemSprite with a cc.Sprite.
   *
   * @param normalSprite Normal state image.
   * @param selectedSprite Selected state image.
   * @param disabledSprite Disabled state image.
   * @param four Callback function name in string or actual function, OR target Node.
   * @param five Callback function name in string or actual function.
   */
  initWithNormalSprite(
    normalSprite: CCNode,
    selectedSprite: CCNode,
    disabledSprite: CCNode,
    callback: Function | string,
    target: CCNode
  ): boolean;

  /**
   * Set the disabled status image(cc.Sprite).
   *
   * @param disabledImage
   */
  setDisabledImage(disabledImage: CCSprite): void;

  /**
   * Set the normal status image(cc.Sprite).
   *
   * @param normalImage
   */
  setNormalImage(normalImage: CCSprite): void;

  /**
   * Set the selected status image(cc.Sprite).
   *
   * @param selectedImage
   */
  setSelectedImage(selectedImage: CCSprite): void;
}
