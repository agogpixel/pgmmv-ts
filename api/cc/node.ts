/**
 * cc.Node is the root class of all node. Anything that gets drawn or contains things that get drawn is a cc.Node.
 * The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu.
 *
 * The main features of a cc.Node are:
 * - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc)
 * - They can schedule periodic callback (schedule, unschedule, etc)
 * - They can execute actions (runAction, stopAction, etc)
 *
 * Some cc.Node nodes provide extra functionality for them or their children.
 *
 * Subclassing a cc.Node usually means (one/all) of:
 * - overriding constructor function "ctor" to initialize resources and schedule callbacks
 * - create callbacks to handle the advancement of time
 *
 * Features of cc.Node:
 * - position
 * - scale (x, y)
 * - rotation (in degrees, clockwise)
 * - anchor point
 * - size
 * - color
 * - opacity
 * - visible
 * - z-order
 * - WebGL z position
 *
 * Default values:
 * - rotation: 0
 * - position: (x=0,y=0)
 * - scale: (x=1,y=1)
 * - contentSize: (x=0,y=0)
 * - anchorPoint: (x=0,y=0)
 * - color: (r=255,g=255,b=255)
 * - opacity: 255
 *
 * Limitations:
 * - A cc.Node is a "void" object. It doesn't have a texture
 *
 * Order in transformations with grid disabled
 * -# The node will be translated (position)
 * -# The node will be rotated (rotation)
 * -# The node will be scaled (scale)
 *
 * Order in transformations with grid enabled
 * -# The node will be translated (position)
 * -# The node will be rotated (rotation)
 * -# The node will be scaled (scale)
 * -# The grid will capture the screen
 * -# The grid will render the captured screen
 */
export type CCNode = {
  /**
   * cc.Node is the root class of all node.
   */
  new (): CCNode;

  /**
   * The CCActionManager object that is used by all actions.
   * TODO: Implement cc.ActionManager typings...
   */
  actionManager: unknown;

  /**
   * Anchor point's position on x axis.
   */
  anchorX: number;

  /**
   * Anchor point's position on y axis.
   */
  anchorY: number;

  /**
   * The arrival order, indicates which children is added previously.
   */
  arrivalOrder: number;

  /**
   * Indicate whether node's color value affect its child nodes, default value is false.
   */
  cascadeColor: boolean;

  /**
   * Indicate whether node's opacity value affect its child nodes, default value is false.
   */
  cascadeOpacity: boolean;

  /**
   * All children nodes.
   */
  readonly children: CCNode[];

  /**
   * Number of children.
   */
  readonly childrenCount: number;

  /**
   * Color of node, default value is white: (255, 255, 255).
   * TODO: Implement cc.Color typings...
   */
  color: unknown;

  /**
   * The state of OpenGL server side.
   */
  glServerState: number;

  /**
   * Grid object that is used when applying effects.
   * TODO: Implement cc.GridBase typings...
   */
  grid: unknown;

  /**
   * Height of node.
   */
  height: number;

  /**
   * Indicate whether ignore the anchor point property for positioning.
   */
  ignoreAnchor: boolean;

  /**
   * Opacity of node, default value is 255.
   */
  opacity: number;

  /**
   * Indicate whether opacity affect the color value, default value is false;
   */
  opacityModifyRGB: boolean;

  /**
   * Parent node.
   */
  parent: CCNode;

  /**
   * Rotation of node.
   */
  rotation: number;

  /**
   * Rotation on x axis.
   */
  rotationX: number;

  /**
   * Rotation on y axis.
   */
  rotationY: number;

  /**
   * Indicate whether node is running or not.
   */
  readonly running: boolean;

  /**
   * Scale of node.
   */
  scale: number;

  /**
   * Scale on x axis.
   */
  scaleX: number;

  /**
   * Scale on y axis.
   */
  scaleY: number;

  /**
   * cc.Scheduler used to schedule all "updates" and timers.
   * TODO: Implement cc.Scheduler typings...
   */
  scheduler: unknown;

  /**
   * The shader program currently used for this node.
   * TODO: Implement cc.GLProgram typings...
   */
  shaderProgram: unknown;

  /**
   * Skew x.
   */
  skewX: number;

  /**
   * Skew y.
   */
  skewY: number;

  /**
   * Tag of node.
   */
  tag: number;

  /**
   * Custom user data.
   */
  userData: Record<string, unknown>;

  /**
   * User assigned CCObject, similar to userData, but instead of holding a void* it holds an id.
   */
  userObject: Record<string, unknown>;

  /**
   * WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex.
   */
  vertexZ: number;

  /**
   *  Indicate whether node is visible or not.
   */
  visible: boolean;

  /**
   * Width of node.
   */
  width: number;

  /**
   * x axis position of node.
   */
  x: number;

  /**
   * y axis position of node.
   */
  y: number;

  /**
   * Z order in depth which stands for the drawing order.
   */
  zIndex: number;
};
