import type { CCNode, CCNodeNamespace } from './node';

export type CCSceneNamespace = {
  /**
   * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
   */
  new (): CCScene;

  /**
   * Creates a scene.
   *
   * @deprecated since v3.0, please use new cc.Scene() instead.
   */
  create(): CCScene;
} & CCNodeNamespace;

/**
 * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
 *
 * cc.Scene an cc.Node are almost identical with the difference that cc.Scene
 * has it's anchor point (by default) at the center of the screen.
 *
 * For the moment cc.Scene has no other logic than that, but in future releases
 * it might have additional logic.
 *
 * It is a good practice to use and cc.Scene as the parent of all your nodes.
 *
 * ```
 * var scene = new cc.Scene();
 * ```
 */
export type CCScene = CCNode;
