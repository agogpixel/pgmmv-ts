import type { CCClass, CCClassNamespace } from './class';
import type { CCColor } from './color';
import type { CCComponent } from './component';
import type { CCPoint } from './point';
import type { CCRect } from './rect';
import type { CCTouch } from './touch';

export type CCNodeNamespace = {
  /**
   * cc.Node is the root class of all node.
   */
  new (): CCNode;

  /**
   * Allocates and initializes a node.
   *
   * @deprecated since v3.0, please use new construction instead.
   */
  create(): CCNode;
} & CCClassNamespace;

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
export interface CCNode extends CCClass {
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
   */
  color: CCColor;

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

  /**
   * "add" logic MUST only be in this method.
   *
   * If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.
   *
   * @param child A child node.
   * @param localZOrder Z order for drawing priority. Please refer to setZOrder(int).
   * @param tag An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string).
   */
  addChild(child: CCNode, localZOrder?: number, tag?: number | string): void;

  /**
   * Adds a component to the node's component container.
   *
   * @param component
   */
  addComponent(component: CCComponent): void;

  /**
   * Properties configuration function. All properties in attrs will be set to the node,
   * when the setter of the node is available, the property will be set via setter function.
   *
   * @param attrs Properties to be set to node
   */
  attr(attrs: Record<string, unknown>): void;

  /**
   * Returns a "local" axis aligned bounding box of the node.
   *
   * @deprecated since v3.0, please use getBoundingBox instead.
   */
  boundingBox(): CCRect;

  /**
   * Stops all running actions and schedulers.
   */
  cleanup(): void;

  /**
   * Converts a Point to node (local) space coordinates. The result is in Points.
   *
   * @param worldPoint
   */
  convertToNodeSpace(worldPoint: CCPoint): CCPoint;

  /**
   * Converts a Point to node (local) space coordinates. The result is in Points.
   * treating the returned/received node point as anchor relative.
   *
   * @param worldPoint
   */
  convertToNodeSpaceAR(worldPoint: CCPoint): CCPoint;

  /**
   * Convenience methods which take a cc.Touch instead of cc.Point.
   *
   * @param touch The touch object.
   */
  convertTouchToNodeSpace(touch: CCTouch): CCPoint;

  /**
   * Converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
   *
   * @param touch The touch object.
   */
  convertTouchToNodeSpaceAR(touch: CCTouch): CCPoint;

  /**
   * Converts a Point to world space coordinates. The result is in Points.
   *
   * @param nodePoint
   */
  convertToWorldSpace(nodePoint: CCPoint): CCPoint;

  /**
   * Converts a local Point to world space coordinates. The result is in Points.
   * Treating the returned/received node point as anchor relative.
   *
   * @param nodePoint
   */
  convertToWorldSpaceAR(nodePoint: CCPoint): CCPoint;

  /**
   * Constructor function, override it to extend the construction behavior.
   * Remember to call "this._super()" in the extended "ctor" function.
   */
  ctor(): void;

  /**
   * Render function using the canvas 2d context or WebGL context.
   * Internal usage only, please do not call this function.
   *
   * @param ctx The render context.
   */
  draw(ctx: unknown): void;

  /**
   * Search the children of the receiving node to perform processing for nodes which share a name.
   *
   * @param name The name to search for, supports c++11 regular expression.
   * Search syntax options:
   * - `//`: Can only be placed at the begin of the search string. This indicates that it will search recursively.
   * - `..`: The search should move up to the node's parent. Can only be placed at the end of string.
   * - `/` : When placed anywhere but the start of the search string, this indicates that the search should move to the node's children.
   * @param callback A callback function to execute on nodes that match the `name` parameter.
   * The function takes the following arguments: `node` A node that matches the name and returns a boolean result.
   * Your callback can return `true` to terminate the enumeration.
   */
  enumerateChildren(name: string, callback: (node: CCNode) => boolean): void;

  /**
   * Returns an action from the running action list by its tag.
   * TODO: Implement cc.Action typings...
   *
   * @param tag
   */
  getActionByTag(tag: number): unknown;

  /**
   * Returns the CCActionManager object that is used by all actions.
   * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)
   * TODO: Implement cc.ActionManager typings...
   */
  getActionManager(): unknown;

  /**
   * Returns a copy of the anchor point.
   * Anchor point is the point around which all transformations and positioning manipulations take place.
   * It's like a pin in the node where it is "attached" to its parent.
   * The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
   * But you can use values higher than (1,1) and lower than (0,0) too.
   * The default anchor point is (0.5,0.5), so it starts at the center of the node.
   */
  getAnchorPoint(): CCPoint;

  /**
   * Returns a copy of the anchor point in absolute pixels.
   * You can only read it. If you wish to modify it, use setAnchorPoint.
   */
  getAnchorPointInPoints(): CCPoint;

  /**
   * Returns a "local" axis aligned bounding box of the node.
   * The returned box is relative only to its parent.
   */
  getBoundingBox(): CCRect;

  /**
   * Returns a "world" axis aligned bounding box of the node.
   */
  getBoundingBoxToWorld(): CCRect;

  /**
   * @deprecated since v3.0, no alternative function
   */
  getCamera(): null;

  /**
   * Returns a child from the container given its name
   *
   * @param name A name to find the child node.
   */
  getChildByName(name: string): CCNode;

  /**
   * Returns a child from the container given its tag.
   *
   * @param aTag An identifier to find the child node.
   */
  getChildByTag(aTag: number): CCNode;

  /**
   * Returns an array of all children
   * Composing a "tree" structure is a very important feature of CCNode.
   *
   * ```
   * // This sample code traverses all children nodes, and set their position to (0,0)
   * var allChildren = parent.getChildren();
   * for(var i = 0; i< allChildren.length; i++) {
   *   allChildren[i].setPosition(0,0);
   * }
   * ```
   */
  getChildren(): CCNode[];

  /**
   * Returns the amount of children.
   */
  getChildrenCount(): number;

  /**
   * Returns the color of Node.
   */
  getColor(): CCColor;

  /**
   * Returns a component identified by the name given.
   *
   * @param name The name to search for.
   */
  getComponent(name: string): CCComponent;

  /**
   * Returns a copy the untransformed size of the node.
   * The contentSize remains the same no matter the node is scaled or rotated.
   * All nodes has a size. Layer and Scene has the same size of the screen by default.
   * TODO: Implement cc.Size typings...
   */
  getContentSize(): unknown;

  /**
   * Returns the displayed color of Node, the difference between displayed color
   * and color is that displayed color is calculated based on color and
   * parent node's color when cascade color enabled.
   */
  getDisplayedColor(): CCColor;

  /**
   * Returns the displayed opacity of Node, the difference between displayed opacity
   * and opacity is that displayed opacity is calculated based on opacity and
   * parent node's opacity when cascade opacity enabled.
   */
  getDisplayedOpacity(): number;

  /**
   * Return the Node's Global Z Order.
   */
  getGlobalZOrder(): number;

  /**
   * Returns the state of OpenGL server side.
   *
   * @deprecated since v3.0, no need anymore.
   */
  getGLServerState(): number;

  /**
   * Returns a grid object that is used when applying effects.
   * This function have been deprecated, please use cc.NodeGrid to run grid actions.
   * TODO: Implement cc.GridBase typings...
   *
   * @deprecated since v3.0, no alternative function.
   */
  getGrid(): unknown;

  /**
   * Returns the local Z order of this node.
   */
  getLocalZOrder(): number;

  /**
   * Returns a string that is used to identify the node.
   */
  getName(): string;

  /**
   * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
   * TODO: Implement cc.AffineTransform typings...
   *
   * @param ancestor
   */
  getNodeToParentTransform(ancestor: CCNode): unknown;

  /**
   * Returns the world affine transform matrix. The matrix is in Pixels.
   * TODO: Implement cc.AffineTransform typings...
   */
  getNodeToWorldTransform(): unknown;

  /**
   * Returns the normalized position.
   */
  getNormalizedPosition(): CCPoint;

  /**
   * Returns the numbers of actions that are running plus the ones that
   * are schedule to run (actions in actionsToAdd and actions arrays).
   * Composable actions are counted as 1 action. Example:
   * - If you are running 1 Sequence of 7 actions, it will return 1.
   * - If you are running 7 Sequences of 2 actions, it will return 7.
   */
  getNumberOfRunningActions(): number;

  /**
   * Returns the opacity of Node.
   */
  getOpacity(): number;

  /**
   * Returns the arrival order, indicates which children should be added previously.
   */
  getOrderOfArrival(): number;

  /**
   * Returns a reference to the parent node.
   */
  getParent(): CCNode;

  /**
   * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.
   * The matrix is in Pixels.
   * TODO: Implement cc.AffineTransform typings...
   */
  getParentToNodeTransform(): unknown;

  /**
   * Returns a copy of the position (x,y) of the node in cocos2d coordinates.
   * (0,0) is the left-bottom corner.
   */
  getPosition(): CCPoint;

  /**
   * Returns the x axis position of the node in cocos2d coordinates.
   */
  getPositionX(): number;

  /**
   * Returns the y axis position of the node in cocos2d coordinates.
   */
  getPositionY(): number;

  /**
   * Returns the rotation (angle) of the node in degrees. 0 is the default rotation angle.
   * Positive values rotate node clockwise.
   */
  getRotation(): number;

  /**
   * Returns the X axis rotation (angle) which represent a horizontal rotational skew of the node in degrees.
   * 0 is the default rotation angle. Positive values rotate node clockwise (support only in WebGL rendering mode).
   */
  getRotationX(): number;

  /**
   * Returns the Y axis rotation (angle) which represent a vertical rotational skew of the node in degrees.
   * 0 is the default rotation angle. Positive values rotate node clockwise (support only in WebGL rendering mode).
   */
  getRotationY(): number;

  /**
   * Returns the scale factor of the node.
   */
  getScale(): number;

  /**
   * Returns the scale factor on X axis of this node.
   */
  getScaleX(): number;

  /**
   * Returns the scale factor on Y axis of this node.
   */
  getScaleY(): number;

  /**
   * Returns the cc.Scheduler object used to schedule all "updates" and timers.
   * TODO: Implement cc.Scheduler typings...
   */
  getScheduler(): unknown;

  /**
   * Return the shader program currently used for this node.
   * TODO: Implement cc.GLProgram typings...
   */
  getShaderProgram(): unknown;

  /**
   * Returns the skew degrees in X.
   * The X skew angle of the node in degrees.
   * This angle describes the shear distortion in the X direction.
   * Thus, it is the angle between the Y axis and the left edge of the shape.
   * The default skewX angle is 0. Positive values distort the node in a CW direction.
   */
  getSkewX(): number;

  /**
   * Returns the skew degrees in Y.
   * The Y skew angle of the node in degrees.
   * This angle describes the shear distortion in the Y direction.
   * Thus, it is the angle between the X axis and the bottom edge of the shape
   * The default skewY angle is 0. Positive values distort the node in a CCW direction.
   */
  getSkewY(): number;

  /**
   * Returns a tag that is used to identify the node easily.
   *
   * ```
   * // You can set tags to node then identify them easily.
   * // set tags
   * node1.setTag(TAG_PLAYER);
   * node2.setTag(TAG_MONSTER);
   * node3.setTag(TAG_BOSS);
   * parent.addChild(node1);
   * parent.addChild(node2);
   * parent.addChild(node3);
   * // identify by tags
   * var allChildren = parent.getChildren();
   * for(var i = 0; i < allChildren.length; i++){
   *   switch(node.getTag()) {
   *     case TAG_PLAYER:
   *       break;
   *     case TAG_MONSTER:
   *       break;
   *     case TAG_BOSS:
   *       break;
   *   }
   * }
   * ```
   */
  getTag(): number;

  /**
   * Returns a custom user data pointer.
   * You can set everything in UserData pointer, a data block, a structure or an object.
   */
  getUserData(): Record<string, unknown>;

  /**
   * Returns a user assigned cocos2d object.
   * Similar to userData, but instead of holding all kinds of data it can only hold a cocos2d object.
   */
  getUserObject(): Record<string, unknown>;

  /**
   * Returns WebGL Z vertex of this node.
   */
  getVertexZ(): number;

  /**
   * Returns the inverse world affine transform matrix. The matrix is in Pixels.
   * TODO: Implement cc.AffineTransform typings...
   */
  getWorldToNodeTransform(): unknown;

  /**
   * Returns z order of this node.
   *
   * @deprecated since 3.0, please use getLocalZOrder instead.
   */
  getZOrder(): number;

  /**
   * Sets whether the anchor point will be ignored when you position this node.
   * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
   * This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.
   * The default value is false, while in CCLayer and CCScene are true
   *
   * @param newValue
   */
  ignoreAnchorPointForPosition(newValue: boolean): void;

  /**
   * Initializes the instance of cc.Node.
   */
  init(): boolean;

  /**
   * Returns whether node's color value affect its child nodes.
   */
  isCascadeColorEnabled(): boolean;

  /**
   * Returns whether node's opacity value affect its child nodes.
   */
  isCascadeOpacityEnabled(): boolean;

  /**
   * Returns whether the anchor point will be ignored when you position this node.
   * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
   */
  isIgnoreAnchorPointForPosition(): boolean;

  /**
   * Get whether color should be changed with the opacity value.
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Returns whether or not the node accepts event callbacks.
   * Running means the node accept event callbacks like onEnter(), onExit(), update().
   */
  isRunning(): boolean;

  /**
   * Returns if the node is visible.
   */
  isVisible(): boolean;

  /**
   * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
   * The matrix is in Pixels.
   * TODO: Implement cc.AffineTransform typings...
   *
   * @deprecated since v3.0, please use getNodeToParentTransform instead
   */
  nodeToParentTransform(): unknown;

  /**
   * @deprecated since v3.0, please use getNodeToWorldTransform instead.
   */
  nodeToWorldTransform(): unknown;

  /**
   * Event callback that is invoked every time when CCNode enters the 'stage'.
   * If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.
   * During onEnter you can't access a "sister/brother" node.
   * If you override onEnter, you must call its parent's onEnter function with this._super().
   */
  onEnter(): void;

  /**
   * Event callback that is invoked when the CCNode enters in the 'stage'.
   * If the CCNode enters the 'stage' with a transition, this event is called when the transition finishes.
   * If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super().
   */
  onEnterTransitionDidFinish(): void;

  /**
   * Callback that is called every time the cc.Node leaves the 'stage'.
   * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes.
   * During onExit you can't access a sibling node.
   * If you override onExit, you shall call its parent's onExit with this._super().
   */
  onExit(): void;

  /**
   * Callback that is called every time the cc.Node leaves the 'stage'.
   * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts.
   * If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super().
   */
  onExitTransitionDidStart(): void;

  /**
   * TODO: Implement cc.AffineTransform typings...
   *
   * @deprecated since v3.0, please use getParentToNodeTransform instead.
   */
  parentToNodeTransform(): unknown;

  /**
   * Pauses all scheduled selectors and actions.
   * This method is called internally by onExit.
   */
  pause(): void;

  /**
   * Pauses all scheduled selectors and actions.
   * This method is called internally by onExit
   *
   * @deprecated since v3.0, please use pause instead.
   */
  pauseSchedulerAndActions(): void;

  /**
   * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB. This is a hack, and should be removed once JSB fixes the retain/release bug.
   * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
   * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
   * when you want to use it later, a "Invalid Native Object" error will be raised.
   * The retain function can increase a reference count for the native object to avoid it being released,
   * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
   * retain and release function call should be paired in developer's game code.
   */
  release(): void;

  /**
   * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
   * If the cleanup parameter is not passed, it will force a cleanup.
   *
   * @param cleanup Default true. All running actions on all children nodes should be cleanup, false otherwise.
   */
  removeAllChildren(cleanup?: boolean): void;

  /**
   * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
   *
   * @param cleanup Default true.
   */
  removeAllChildrenWithCleanup(cleanup?: boolean): void;

  /**
   * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
   */
  removeAllComponents(): void;

  /**
   * Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter.
   * If the cleanup parameter is not passed, it will force a cleanup.
   *
   * "remove" logic MUST only be on this method.
   * If a class wants to extend the 'removeChild' behavior it only needs
   * to override this method.
   *
   * @param child The child node which will be removed.
   * @param cleanup Default true. All running actions and callbacks on the child node will be cleanup, false otherwise.
   */
  removeChild(child: CCNode, cleanup?: boolean): void;

  /**
   * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
   * If the cleanup parameter is not passed, it will force a cleanup.
   *
   * @param tag An integer number that identifies a child node.
   * @param cleanup Default true. All running actions and callbacks on the child node will be cleanup, false otherwise.
   */
  removeChildByTag(tag: number, cleanup?: boolean): void;

  /**
   * Removes a component identified by the given name or removes the component object given.
   *
   * @param component
   */
  removeComponent(component: string | CCComponent): void;

  /**
   * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks.
   * If the cleanup parameter is not passed, it will force a cleanup.
   * If the node orphan, then nothing happens.
   *
   * @param cleanup Default true. All actions and callbacks on this node should be removed, false otherwise.
   */
  removeFromParent(cleanup?: boolean): void;

  /**
   * Removes this node itself from its parent node.
   * If the node orphan, then nothing happens.
   *
   * @param cleanup Default true. All actions and callbacks on this node should be removed, false otherwise.
   * @deprecated since v3.0, please use removeFromParent() instead.
   */
  removeFromParentAndCleanup(cleanup?: boolean): void;

  /**
   * Reorders a child according to a new z value.
   * The child MUST be already added.

   * @param child An already added child node. It MUST be already added.
   * @param zOrder Z order for drawing priority. Please refer to setZOrder(int)
   */
  reorderChild(child: CCNode, zOrder: number): void;

  /**
   * Resumes all scheduled selectors and actions.
   * This method is called internally by onEnter.
   */
  resume(): void;

  /**
   * Resumes all scheduled selectors and actions.
   * This method is called internally by onEnter.
   *
   * @deprecated since v3.0, please use resume() instead.
   */
  resumeSchedulerAndActions(): void;

  /**
   * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB. This is a hack, and should be removed once JSB fixes the retain/release bug.
   * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
   * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
   * when you want to use it later, a "Invalid Native Object" error will be raised.
   * The retain function can increase a reference count for the native object to avoid it being released,
   * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
   * retain and release function call should be paired in developer's game code.
   */
  retain(): void;

  /**
   * Executes an action, and returns the action that is executed.
   * The node becomes the action's target. Refer to cc.Action's getTarget()
   * TODO: Implement cc.Action definition...
   *
   * @param action
   */
  runAction(action: unknown): unknown;

  /*
schedule(callback, interval, repeat, delay, key)

Schedules a custom selector.
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

Parameters:
{function} callback
    A function wrapped as a selector
{Number} interval
    Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
{Number} repeat
    The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
{Number} delay
    The amount of time that the first tick will wait before execution.
{String} key
    The only string identifying the callback

scheduleOnce(callback, delay, key)
Schedules a callback function that runs only once, with a delay of 0 or larger

Parameters:
{function} callback
    A function wrapped as a selector
{Number} delay
    The amount of time that the first tick will wait before execution.
{String} key
    The only string identifying the callback

See:
    cc.Node#schedule

scheduleUpdate()

schedules the "update" method.
It will use the order number 0. This method will be called every frame.
Scheduled methods with a lower order value will be called before the ones that have a higher order value.
Only one "update" method could be scheduled per node.
scheduleUpdateWithPriority(priority)

schedules the "update" callback function with a custom priority. This callback function will be called every frame.
Scheduled callback functions with a lower priority will be called before the ones that have a higher value.
Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).

Parameters:
{Number} priority

setActionManager(actionManager)

Sets the cc.ActionManager object that is used by all actions.

Parameters:
{cc.ActionManager} actionManager
    A CCActionManager object that is used by all actions.

setAdditionalTransform(additionalTransform)

Sets the additional transform.
The additional transform will be concatenated at the end of getNodeToParentTransform.
It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).

// create a batchNode
var batch = new cc.SpriteBatchNode("Icon-114.png");
this.addChild(batch);

// create two sprites, spriteA will be added to batchNode, they are using different textures.
var spriteA = new cc.Sprite(batch->getTexture());
var spriteB = new cc.Sprite("Icon-72.png");

batch.addChild(spriteA);

// We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.
// But we want to simulate `parent-child` relationship for these two node.
this.addChild(spriteB);

//position
spriteA.setPosition(ccp(200, 200));

// Gets the spriteA's transform.
var t = spriteA.getNodeToParentTransform();

// Sets the additional transform to spriteB, spriteB's position will based on its pseudo parent i.e. spriteA.
spriteB.setAdditionalTransform(t);

//scale
spriteA.setScale(2);

// Gets the spriteA's transform.
t = spriteA.getNodeToParentTransform();

// Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA.
spriteB.setAdditionalTransform(t);

//rotation
spriteA.setRotation(20);

// Gets the spriteA's transform.
t = spriteA.getNodeToParentTransform();

// Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA.
spriteB.setAdditionalTransform(t);

Parameters:
{cc.AffineTransform} additionalTransform
    The additional transform

setAnchorPoint(point, y)

Sets the anchor point in percent.

anchor point is the point around which all transformations and positioning manipulations take place.
It's like a pin in the node where it is "attached" to its parent.
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
But you can use values higher than (1,1) and lower than (0,0) too.
The default anchor point is (0.5,0.5), so it starts at the center of the node.

Parameters:
{cc.Point|Number} point
    The anchor point of node or The x axis anchor of node.
{Number} y Optional
    The y axis anchor of node.

setCascadeColorEnabled(cascadeColorEnabled)
Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.

Parameters:
{boolean} cascadeColorEnabled

setCascadeOpacityEnabled(cascadeOpacityEnabled)
Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.

Parameters:
{boolean} cascadeOpacityEnabled

setColor(color)

Sets the color of Node.
When color doesn't include opacity value like cc.color(128,128,128), this function only change the color.
When color include opacity like cc.color(128,128,128,100), then this function will change the color and the opacity.

Parameters:
{cc.Color} color
    The new color given

setContentSize(size, height)

Sets the untransformed size of the node.

The contentSize remains the same no matter the node is scaled or rotated.
All nodes has a size. Layer and Scene has the same size of the screen.

Parameters:
{cc.Size|Number} size
    The untransformed size of the node or The untransformed size's width of the node.
{Number} height Optional
    The untransformed size's height of the node.

setGlobalZOrder(globalZOrder)

Defines the oder in which the nodes are renderer.
Nodes that have a Global Z Order lower, are renderer first.

In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.

By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.

Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.

Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.

Parameters:
{Number} globalZOrder

setGLServerState(state)
Sets the state of OpenGL server side.

Parameters:
{Number} state
    The state of OpenGL server side.

Deprecated:
since v3.0, no need anymore

setGrid(grid)

Changes a grid object that is used when applying effects
This function have been deprecated, please use cc.NodeGrid to run grid actions

Parameters:
{cc.GridBase} grid
    A CCGrid object that is used when applying effects

Deprecated:
since v3.0, no alternative function

setLocalZOrder(localZOrder)

LocalZOrder is the 'key' used to sort the node relative to its siblings.

The Node's parent will sort all its children based ont the LocalZOrder value.
If two nodes have the same LocalZOrder, then the node that was added first to the children's array
will be in front of the other node in the array.

Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )
And Nodes that have LocalZOder values < 0 are the "left" subtree
While Nodes with LocalZOder >=0 are the "right" subtree.

Parameters:
{Number} localZOrder

setName(name)
Changes the name that is used to identify the node easily.

Parameters:
{String} name

setNormalizedPosition(posOrX, y)

Sets the position (x,y) using values between 0 and 1.
The positions in pixels is calculated like the following:
_position = _normalizedPosition * parent.getContentSize()

Parameters:
{cc.Point|Number} posOrX
{Number} y Optional

setOpacity(opacity)
Sets the opacity of Node

Parameters:
{Number} opacity

setOpacityModifyRGB(opacityValue)
Set whether color should be changed with the opacity value, useless in cc.Node, but this function is override in some class to have such behavior.

Parameters:
{Boolean} opacityValue

setOrderOfArrival(Var)

Sets the arrival order when this node has a same ZOrder with other children.

A node which called addChild subsequently will take a larger arrival order,
If two children have the same Z order, the child with larger arrival order will be drawn later.

Parameters:
{Number} Var
    The arrival order.

setParent(parent)
Sets the parent node

Parameters:
{cc.Node} parent
    A reference to the parent node

setPosition(newPosOrxValue, yValue)

Changes the position (x,y) of the node in cocos2d coordinates.
The original point (0,0) is at the left-bottom corner of screen.
Usually we use cc.p(x,y) to compose CCPoint object.
and Passing two numbers (x,y) is more efficient than passing CCPoint object.

   var size = cc.winSize;
   node.setPosition(size.width/2, size.height/2);

Parameters:
{cc.Point|Number} newPosOrxValue
    The position (x,y) of the node in coordinates or the X coordinate for position
{Number} yValue Optional
    Y coordinate for position

setPositionX(x)

Sets the x axis position of the node in cocos2d coordinates.

Parameters:
{Number} x
    The new position in x axis

setPositionY(y)

Sets the y axis position of the node in cocos2d coordinates.

Parameters:
{Number} y
    The new position in y axis

setRotation(newRotation)

Sets the rotation (angle) of the node in degrees.

0 is the default rotation angle.
Positive values rotate node clockwise, and negative values for anti-clockwise.

Parameters:
{Number} newRotation
    The rotation of the node in degrees.

setRotationX(rotationX)

Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
(support only in WebGL rendering mode)
0 is the default rotation angle.
Positive values rotate node clockwise, and negative values for anti-clockwise.

Parameters:
{Number} rotationX
    The X rotation in degrees which performs a horizontal rotational skew.

setRotationY(rotationY)

Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
(support only in WebGL rendering mode)
0 is the default rotation angle.
Positive values rotate node clockwise, and negative values for anti-clockwise.

Parameters:
rotationY
    The Y rotation in degrees.

setScale(scale, scaleY)
Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.

Parameters:
{Number} scale
    or scaleX value
{Number} scaleY Optional

setScaleX(newScaleX)

Changes the scale factor on X axis of this node
The default value is 1.0 if you haven't changed it before

Parameters:
{Number} newScaleX
    The scale factor on X axis.

setScaleY(newScaleY)

Changes the scale factor on Y axis of this node
The Default value is 1.0 if you haven't changed it before.

Parameters:
{Number} newScaleY
    The scale factor on Y axis.

setScheduler(scheduler)

Sets a CCScheduler object that is used to schedule all "updates" and timers.
IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.

Parameters:
scheduler
    A cc.Scheduler object that is used to schedule all "update" and timers.

setShaderProgram(newShaderProgram)

Sets the shader program for this node Since v2.0, each rendering node must set its shader program. It should be set in initialize phase.

node.setGLProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));

Parameters:
{cc.GLProgram} newShaderProgram
    The shader program which fetches from CCShaderCache.

setSkewX(newSkewX)

Changes the X skew angle of the node in degrees.

This angle describes the shear distortion in the X direction.
Thus, it is the angle between the Y axis and the left edge of the shape
The default skewX angle is 0. Positive values distort the node in a CW direction.

Parameters:
{Number} newSkewX
    The X skew angle of the node in degrees.

setSkewY(newSkewY)

Changes the Y skew angle of the node in degrees.

This angle describes the shear distortion in the Y direction.
Thus, it is the angle between the X axis and the bottom edge of the shape
The default skewY angle is 0. Positive values distort the node in a CCW direction.

Parameters:
{Number} newSkewY
    The Y skew angle of the node in degrees.

setTag(tag)
Changes the tag that is used to identify the node easily.
Please refer to getTag for the sample code.

Parameters:
{Number} tag
    A integer that identifies the node.

See:
    cc.Node#getTag

setUserData(Var)

Sets a custom user data reference
You can set everything in UserData reference, a data block, a structure or an object, etc.

Parameters:
{object} Var
    A custom user data

setUserObject(newValue)

Sets a user assigned cocos2d object
Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object
In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
The UserObject will be released in CCNode's destruction.

Parameters:
{object} newValue
    A user cocos2d object

setVertexZ(Var)

Sets the real WebGL Z vertex.

Differences between openGL Z vertex and cocos2d Z order:
- WebGL Z modifies the Z vertex, and not the Z order in the relation between parent-children
- WebGL Z might require to set 2D projection
- cocos2d Z order works OK if all the nodes uses the same WebGL Z vertex. eg: vertexZ = 0

Parameters:
{Number} Var

setVisible(visible)
Sets whether the node is visible
The default value is true

Parameters:
{Boolean} visible
    Pass true to make the node visible, false to hide the node.

setZOrder(z)

Sets the Z order which stands for the drawing order, and reorder this node in its parent's children array.

The Z order of node is relative to its "brothers": children of the same parent.
It's nothing to do with OpenGL's z vertex. This one only affects the draw order of nodes in cocos2d.
The larger number it is, the later this node will be drawn in each message loop.
Please refer to setVertexZ(float) for the difference.

Parameters:
{Number} z
    Z order of this node.

Deprecated:
since 3.0, please use setLocalZOrder instead

sortAllChildren()

Sorts the children array once before drawing, instead of every time when a child is added or reordered.
This approach can improves the performance massively.
stopAction(action)
Stops and removes an action from the running action list.

Parameters:
{cc.Action} action
    An action object to be removed.

stopActionByTag(tag)
Removes an action from the running action list by its tag.

Parameters:
{Number} tag
    A tag that indicates the action to be removed.

stopAllActions()
Stops and removes all actions from the running action list .
transform(parentCmd, recursive)
Performs view-matrix transformation based on position, scale, rotation and other attributes.

Parameters:
{cc.Node.RenderCmd} parentCmd
    parent's render command
{boolean} recursive
    whether call its children's transform

unschedule(callback_fn)
unschedules a custom callback function.

Parameters:
{function} callback_fn
    A function wrapped as a selector

See:
    cc.Node#schedule

unscheduleAllCallbacks()

unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.
Actions are not affected by this method.
unscheduleUpdate()
Unschedules the "update" method.

See:
    cc.Node#scheduleUpdate

update(dt)
Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
The default behavior is to invoke the visit function of node's componentContainer.
Override me to implement your own update logic.

Parameters:
{Number} dt
    Delta time since last update

updateDisplayedColor(parentColor)
Update the displayed color of Node

Parameters:
{cc.Color} parentColor

updateDisplayedOpacity(parentOpacity)
Update displayed opacity

Parameters:
{Number} parentOpacity

updateTransform()

Calls children's updateTransform() method recursively.

This method is moved from CCSprite, so it's no longer specific to CCSprite.
As the result, you apply CCSpriteBatchNode's optimization on your customed CCNode.
e.g., batchNode->addChild(myCustomNode), while you can only addChild(sprite) before.
visit(parentCmd)
Recursive method that visit its children and draw them

Parameters:
{cc.Node.RenderCmd} parentCmd

worldToNodeTransform()

Deprecated:
since v3.0, please use getWorldToNodeTransform instead
*/
}
