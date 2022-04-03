import type { CCActionNamespace } from './action';
import type { CCActionManager, CCActionManagerNamespace } from './action-manager';
import type { CCAffineTransformNamespace } from './affine-transform';
import type { CCAsyncNamespace } from './async';
import type { CCAsyncPoolNamespace } from './async-pool';
import type { CCClassNamespace } from './class';
import type { CCColorNamespace } from './color';
import type { CCComponentNamespace } from './component';
import type { CCEventNamespace } from './event';
import type { CCEventListenerNamespace } from './event-listener';
import type { CCEventManager } from './event-manager';
import type { CCGLProgramNamespace } from './gl-program';
import type { CCGridBase, CCGridBaseNamespace } from './grid-base';
import type { CCLoaderNamespace } from './loader';
import type { CCMathNamespace } from './math';
import type { CCNode, CCNodeNamespace } from './node';
import type { CCPathNamespace } from './path';
import type { CCPoint, CCPointNamespace } from './point';
import type { CCRect, CCRectNamespace } from './rect';
import type { CCScheduler, CCSchedulerNamespace } from './scheduler';
import type { CCSize, CCSizeNamespace } from './size';
import type { CCTexture2DNamespace } from './texture-2d';
import type { CCTouchNamespace } from './touch';
import type { CCViewNamespace } from './view';

/**
 * Convert union type to an intersection type.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export interface cc {
  /**
   *
   */
  container: unknown | null;

  /**
   *
   * @param obj
   * @param iterator
   * @param context
   */
  each<T>(
    obj: T,
    iterator: (value: unknown, index: T extends Array<unknown> ? number : string) => boolean,
    context: unknown
  ): void;

  /**
   *
   * @param target
   * @param sources
   */
  extend<T, U>(target: T, ...sources: U[]): T & UnionToIntersection<U>;

  /**
   *
   * @param obj
   */
  isFunction(obj: unknown): boolean;

  /**
   *
   * @param obj
   */
  isNumber(obj: unknown): boolean;

  /**
   *
   * @param obj
   */
  isString(obj: unknown): boolean;

  /**
   *
   * @param obj
   */
  isArray(obj: unknown): boolean;

  /**
   *
   * @param obj
   */
  isUndefinedfunction(obj: unknown): boolean;

  /**
   *
   * @param obj
   */
  isObject(obj: unknown): boolean;

  /**
   *
   * @param url
   */
  isCrossOrigin(url: string): boolean;

  /**
   *
   * @param proto
   * @param prop
   * @param getter
   * @param setter
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  defineGetterSetter(proto: unknown, prop: string, getter: Function, setter: Function): void;

  /**
   *
   * @param jsobj
   * @param superclass_or_instance
   */
  associateWithNative(jsobj: unknown, superclass_or_instance: unknown): void;

  /**
   *
   * @param childCtor
   * @param parentCtor
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  inherits(childCtor: Function, parentCtor: Function): void;

  /**
   *
   * @param me
   * @param opt_methodName
   * @param var_args
   */
  base<T>(me: unknown, opt_methodName: string, ...var_args: unknown[]): T;

  /**
   *
   */
  Class: CCClassNamespace;

  /**
   *
   */
  math: CCMathNamespace;

  /**
   *
   */
  AsyncPool: CCAsyncPoolNamespace;

  /**
   *
   */
  async: CCAsyncNamespace;

  /**
   *
   */
  path: CCPathNamespace;

  /**
   *
   */
  loader: CCLoaderNamespace;

  /**
   *
   * @param args
   */
  formatStr(...args: string[]): string;

  /**
   * TODO: cc.Director typings missing...
   */
  director: {
    /**
     *
     */
    _actionManager: unknown | CCActionManager;

    /**
     *
     */
    _scheduler: unknown | CCScheduler;
  };

  /**
   *
   */
  winSize: {
    /**
     *
     */
    width: number;

    /**
     *
     */
    height: number;
  };

  /**
   *
   */
  view: CCViewNamespace;

  /**
   *
   */
  DENSITYDPI_DEVICE: 'device-dpi';

  /**
   *
   */
  DENSITYDPI_HIGH: 'high-dpi';

  /**
   *
   */
  DENSITYDPI_MEDIUM: 'medium-dpi';

  /**
   *
   */
  DENSITYDPI_LOW: 'low-dpi';

  /**
   *
   */
  eventManager: CCEventManager;

  /**
   *
   * @param x
   * @param y
   * @param ref
   */
  swap(x: string, y: string, ref: object): void;

  /**
   *
   * @param a
   * @param b
   * @param r
   */
  lerp(a: number, b: number, r: number): number;

  /**
   *
   */
  rand(): number;

  /**
   *
   */
  randomMinus1To1(): number;

  /**
   *
   */
  random0To1(): number;

  /**
   *
   * @param angle
   */
  degreesToRadians(angle: number): number;

  /**
   *
   * @param angle
   */
  radiansToDegrees(angle: number): number;

  /**
   *
   */
  REPEAT_FOREVER: 4294967295;

  /**
   *
   * @param node
   */
  nodeDrawSetup(node: CCNode): void;

  /**
   *
   */
  enableDefaultGLStates(): void;

  /**
   *
   */
  disableDefaultGLStates(): void;

  /**
   *
   * @param addNumber
   */
  incrementGLDraws(addNumber: number): void;

  /**
   *
   */
  FLT_EPSILON: 1.192092896e-7;

  /**
   *
   */
  contentScaleFactor(): number;

  /**
   *
   * @param points
   */
  pointPointsToPixels(points: CCPoint): CCPoint;

  /**
   *
   * @param pixels
   */
  pointPixelsToPoints(pixels: CCPoint): CCPoint;

  /**
   *
   * @param pixels
   * @param outPoint
   */
  _pointPixelsToPointsOut(pixels: CCPoint, outPoint: CCPoint): void;

  /**
   *
   * @param sizeInPoints
   */
  sizePointsToPixels(sizeInPoints: CCSize): CCSize;

  /**
   *
   * @param sizeInPixels
   */
  sizePixelsToPoints(sizeInPixels: CCSize): CCSize;

  /**
   *
   * @param sizeInPixels
   * @param outSize
   */
  _sizePixelsToPointsOut(sizeInPixels: CCSize, outSize: CCSize): void;

  /**
   *
   * @param pixel
   */
  rectPixelsToPoints(pixel: CCRect): CCRect;

  /**
   *
   * @param point
   */
  rectPointsToPixels(point: CCRect): CCRect;

  /**
   *
   */
  checkGLErrorDebug(): void;

  /**
   *
   */
  _reuse_p: CCPoint[];

  /**
   *
   */
  _reuse_p_index: number;

  /**
   *
   */
  _reuse_size: CCSize;

  /**
   *
   */
  _reuse_rect: CCRect;

  /**
   *
   */
  _reuse_color3b: {
    r: number;
    g: number;
    b: number;
  };

  /**
   *
   */
  _reuse_color4b: {
    r: number;
    g: number;
    b: number;
    a: number;
  };

  /**
   *
   * @param x
   * @param y
   */
  p(x?: number | CCPoint, y?: number): CCPoint;

  /**
   *
   * @param x
   * @param y
   */
  _p(x: number, y: number): CCPoint;

  /**
   *
   * @param point1
   * @param point2
   */
  pointEqualToPoint(point1: CCPoint, point2: CCPoint): boolean;

  /**
   *
   */
  PointZero(): CCPoint;

  /**
   *
   * @param v1
   * @param v2
   */
  pUnrotate(v1: CCPoint, v2: CCPoint): CCPoint;

  /**
   *
   * @param a
   */
  pForAngle(a: number): CCPoint;

  /**
   *
   * @param v
   */
  pToAngle(v: CCPoint): number;

  /**
   *
   * @param value
   * @param min_inclusive
   * @param max_inclusive
   */
  clampf(value: number, min_inclusive: number, max_inclusive: number): number;

  /**
   *
   * @param s
   */
  pFromSize(s: CCSize): CCPoint;

  /**
   *
   * @param p
   * @param opFunc
   */
  pCompOp(p: CCPoint, opFunc: (n: number) => number): CCPoint;

  /**
   *
   * @param a
   * @param b
   * @param alpha
   */
  pLerp(a: CCPoint, b: CCPoint, alpha: number): CCPoint;

  /**
   *
   * @param a
   * @param b
   * @param variance
   */
  pFuzzyEqual(a: CCPoint, b: CCPoint, variance: number): boolean;

  /**
   *
   * @param a
   * @param b
   */
  pCompMult(a: CCPoint, b: CCPoint): CCPoint;

  /**
   *
   * @param a
   * @param b
   */
  pAngleSigned(a: CCPoint, b: CCPoint): number;

  /**
   *
   * @param a
   * @param b
   */
  pAngle(a: CCPoint, b: CCPoint): number;

  /**
   *
   * @param v
   * @param pivot
   * @param angle
   */
  pRotateByAngle(v: CCPoint, pivot: CCPoint, angle: number): CCPoint;

  /**
   *
   * @param A
   * @param B
   * @param C
   * @param D
   * @param retP
   */
  pLineIntersect(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint, retP: CCPoint): boolean;

  /**
   *
   * @param A
   * @param B
   * @param C
   * @param D
   */
  pSegmentIntersect(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint): boolean;

  /**
   *
   * @param A
   * @param B
   * @param C
   * @param D
   */
  pIntersectPoint(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint): CCPoint;

  /**
   *
   * @param A
   * @param B
   */
  pSameAs(A: CCPoint, B: CCPoint): boolean;

  /**
   *
   * @param v
   */
  pZeroIn(v: CCPoint): void;

  /**
   *
   * @param v1
   * @param v2
   */
  pIn(v1: CCPoint, v2: CCPoint): void;

  /**
   *
   * @param point
   * @param floatVar
   */
  pMultIn(point: CCPoint, floatVar: number): void;

  /**
   *
   * @param v1
   * @param v2
   */
  pSubIn(v1: CCPoint, v2: CCPoint): void;

  /**
   *
   * @param v1
   * @param v2
   */
  pAddIn(v1: CCPoint, v2: CCPoint): void;

  /**
   *
   * @param v
   */
  pNormalizeIn(v: CCPoint): CCPoint;

  /**
   *
   * @param x
   * @param y
   */
  _g(x: number, y: number): CCGridBase;

  /**
   *
   * @param w
   * @param h
   */
  size(w: number, h: number): CCSize;

  /**
   *
   * @param w
   * @param h
   */
  _size(w: number, h: number): CCSize;

  /**
   *
   * @param size1
   * @param size2
   */
  sizeEqualToSize(size1: CCSize, size2: CCSize): boolean;

  /**
   *
   */
  SizeZero(): CCSize;

  /**
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  rect(x: number, y: number, w: number, h: number): CCRect;

  /**
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  _rect(x: number, y: number, w: number, h: number): CCRect;

  /**
   *
   * @param rect1
   * @param rect2
   */
  rectEqualToRect(rect1: CCRect, rect2: CCRect): boolean;

  /**
   *
   * @param rect1
   * @param rect2
   */
  rectContainsRect(rect1: CCRect, rect2: CCRect): boolean;

  /**
   *
   * @param rect
   */
  rectGetMaxX(rect: CCRect): number;

  /**
   *
   * @param rect
   */
  rectGetMidX(rect: CCRect): number;

  /**
   *
   * @param rect
   */
  rectGetMinX(rect: CCRect): number;

  /**
   *
   * @param rect
   */
  rectGetMaxY(rect: CCRect): number;

  /**
   *
   * @param rect
   */
  rectGetMidY(rect: CCRect): number;

  /**
   *
   * @param rect
   */
  rectGetMinY(rect: CCRect): number;

  /**
   *
   * @param rect
   * @param point
   */
  rectContainsPoint(rect: CCRect, point: CCPoint): boolean;

  /**
   *
   * @param rectA
   * @param rectB
   */
  rectIntersectsRect(rectA: CCRect, rectB: CCRect): boolean;

  /**
   *
   * @param rectA
   * @param rectB
   */
  rectOverlapsRect(rectA: CCRect, rectB: CCRect): boolean;

  /**
   *
   * @param rectA
   * @param rectB
   */
  rectUnion(rectA: CCRect, rectB: CCRect): CCRect;

  /**
   *
   * @param rectA
   * @param rectB
   */
  rectIntersection(rectA: CCRect, rectB: CCRect): CCRect;

  /**
   *
   */
  RectZero(): CCRect;

  /**
   *
   */
  Color: CCColorNamespace;

  //
  Action: CCActionNamespace;
  ActionManager: CCActionManagerNamespace;
  AffineTransform: CCAffineTransformNamespace;
  Component: CCComponentNamespace;
  Event: CCEventNamespace;
  EventListener: CCEventListenerNamespace;
  GLProgram: CCGLProgramNamespace;
  GridBase: CCGridBaseNamespace;
  Node: CCNodeNamespace;
  Point: CCPointNamespace;
  Rect: CCRectNamespace;
  Scheduler: CCSchedulerNamespace;
  Size: CCSizeNamespace;
  Texture2D: CCTexture2DNamespace;
  Touch: CCTouchNamespace;

  //

  TMX_ORIENTATION_HEX: 1;
  TMX_ORIENTATION_ISO: 2;
  TMX_ORIENTATION_ORTHO: 0;
  Z_COMPRESSION_BZIP2: 1;
  Z_COMPRESSION_GZIP: 2;
  Z_COMPRESSION_NONE: 3;
  Z_COMPRESSION_ZLIB: 0;
  BLEND_DST: 771;
  BLEND_SRC: 770;
  DIRECTOR_IOS_USE_BACKGROUND_THREAD: 0;
  DIRECTOR_MAC_THREAD: 0;
  DIRECTOR_STATS_INTERVAL: 0.1;
  ENABLE_BOX2_D_INTEGRATION: 0;
  ENABLE_DEPRECATED: 1;
  ENABLE_GL_STATE_CACHE: 1;
  ENABLE_PROFILERS: 0;
  ENABLE_STACKABLE_ACTIONS: 1;
  FIX_ARTIFACTS_BY_STRECHING_TEXEL: 0;
  GL_ALL: 0;
  LABELATLAS_DEBUG_DRAW: 0;
  LABELBMFONT_DEBUG_DRAW: 0;
  MAC_USE_DISPLAY_LINK_THREAD: 0;
  MAC_USE_MAIN_THREAD: 2;
  MAC_USE_OWN_THREAD: 1;
  NODE_RENDER_SUBPIXEL: 1;
  PVRMIPMAP_MAX: 16;
  SPRITEBATCHNODE_RENDER_SUBPIXEL: 1;
  SPRITE_DEBUG_DRAW: 0;
  TEXTURE_ATLAS_USE_TRIANGLE_STRIP: 0;
  TEXTURE_ATLAS_USE_VAO: 0;
  USE_L_A88_LABELS: 1;
  ACTION_TAG_INVALID: -1;
  DEVICE_MAC: 6;
  DEVICE_MAC_RETINA_DISPLAY: 7;
  DEVICEI_PAD: 4;
  DEVICEI_PAD_RETINA_DISPLAY: 5;
  DEVICEI_PHONE: 0;
  DEVICEI_PHONE5: 2;
  DEVICEI_PHONE5_RETINA_DISPLAY: 3;
  DEVICEI_PHONE_RETINA_DISPLAY: 1;
  FILE_UTILS_SEARCH_DIRECTORY_MODE: 1;
  FILE_UTILS_SEARCH_SUFFIX_MODE: 0;
  FLIPED_ALL: 3758096384;
  FLIPPED_MASK: 536870911;
  IMAGE_FORMAT_JPEG: 0;
  IMAGE_FORMAT_PNG: 1;
  ITEM_SIZE: 32;
  LABEL_AUTOMATIC_WIDTH: -1;
  LINE_BREAK_MODE_CHARACTER_WRAP: 1;
  LINE_BREAK_MODE_CLIP: 2;
  LINE_BREAK_MODE_HEAD_TRUNCATION: 3;
  LINE_BREAK_MODE_MIDDLE_TRUNCATION: 5;
  LINE_BREAK_MODE_TAIL_TRUNCATION: 4;
  LINE_BREAK_MODE_WORD_WRAP: 0;
  MAC_VERSION_10_6: 168165376;
  MAC_VERSION_10_7: 168230912;
  MAC_VERSION_10_8: 168296448;
  MENU_HANDLER_PRIORITY: -128;
  MENU_STATE_TRACKING_TOUCH: 1;
  MENU_STATE_WAITING: 0;
  NODE_TAG_INVALID: -1;
  PRIORITY_NON_SYSTEM_MIN: -2147483647;
  RESOLUTION_MAC: 1;
  RESOLUTION_MAC_RETINA_DISPLAY: 2;
  RESOLUTION_UNKNOWN: 0;
  TMX_TILE_DIAGONAL_FLAG: 536870912;
  TMX_TILE_HORIZONTAL_FLAG: 2147483648;
  TMX_TILE_VERTICAL_FLAG: 1073741824;
  TEXT_ALIGNMENT_CENTER: 1;
  TEXT_ALIGNMENT_RIGHT: 2;
  TEXT_ALIGNMENT_LEFT: 0;
  VERTICAL_TEXT_ALIGNMENT_TOP: 0;
  VERTICAL_TEXT_ALIGNMENT_CENTER: 1;
  VERTICAL_TEXT_ALIGNMENT_BOTTOM: 2;
  TOUCHES_ALL_AT_ONCE: 0;
  TOUCHES_ONE_BY_ONE: 1;
  TRANSITION_ORIENTATION_DOWN_OVER: 1;
  TRANSITION_ORIENTATION_LEFT_OVER: 0;
  TRANSITION_ORIENTATION_RIGHT_OVER: 1;
  TRANSITION_ORIENTATION_UP_OVER: 0;
  UNIFORM_COS_TIME: 5;
  UNIFORM_MV_MATRIX: 1;
  UNIFORM_MVP_MATRIX: 2;
  UNIFORM_P_MATRIX: 0;
  UNIFORM_RANDOM01: 6;
  UNIFORM_SAMPLER: 7;
  UNIFORM_SIN_TIME: 4;
  UNIFORM_TIME: 3;
  UNIFORM_MAX: 8;
  OS_VERSION_4_0: 67108864;
  OS_VERSION_4_0_1: 67109120;
  OS_VERSION_4_1: 67174400;
  OS_VERSION_4_2: 67239936;
  OS_VERSION_4_2_1: 67240192;
  OS_VERSION_4_3: 67305472;
  OS_VERSION_4_3_1: 67305728;
  OS_VERSION_4_3_2: 67305984;
  OS_VERSION_4_3_3: 67306240;
  OS_VERSION_4_3_4: 67306496;
  OS_VERSION_4_3_5: 67306752;
  OS_VERSION_5_0: 83886080;
  OS_VERSION_5_0_1: 83886336;
  OS_VERSION_5_1_0: 83951616;
  OS_VERSION_6_0_0: 100663296;
  ANIMATION_FRAME_DISPLAYED_NOTIFICATION: 'CCAnimationFrameDisplayedNotification';
  CHIPMUNK_IMPORT: 'chipmunk.h';
  ATTRIBUTE_NAME_COLOR: 'a_color';
  ATTRIBUTE_NAME_POSITION: 'a_position';
  ATTRIBUTE_NAME_TEX_COORD: 'a_texCoord';
  ATTRIBUTE_NAME_TEX_COORD1: 'a_texCoord1';
  ATTRIBUTE_NAME_TEX_COORD2: 'a_texCoord2';
  ATTRIBUTE_NAME_TEX_COORD3: 'a_texCoord3';
  ATTRIBUTE_NAME_NORMAL: 'a_normal';
  ATTRIBUTE_NAME_BLEND_WEIGHT: 'a_blendWeight';
  ATTRIBUTE_NAME_BLEND_INDEX: 'a_blendIndex';
  ENGINE_VERSION: 'Cocos2d-JS v3.15';
  DIRECTOR_STATS_POSITION: {
    x: 0;
    y: 0;
  };
  DIRECTOR_FPS_INTERVAL: 0.5;
  COCOSNODE_RENDER_SUBPIXEL: 1;
  OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA: 0;
  TEXTURE_NPOT_SUPPORT: 0;
  RETINA_DISPLAY_SUPPORT: 1;
  RETINA_DISPLAY_FILENAME_SUFFIX: '-hd';
  USE_LA88_LABELS: 1;
  SPRITEBATCHNODE_DEBUG_DRAW: 0;
  IS_RETINA_DISPLAY_SUPPORTED: 1;
  DEFAULT_ENGINE: 'Cocos2d-JS v3.15-native';
  ResolutionPolicy: {
    EXACT_FIT: 0;
    NO_BORDER: 1;
    SHOW_ALL: 2;
    FIXED_HEIGHT: 3;
    FIXED_WIDTH: 4;
    UNKNOWN: 5;
  };
  LANGUAGE_ENGLISH: 0;
  LANGUAGE_CHINESE: 1;
  LANGUAGE_FRENCH: 2;
  LANGUAGE_ITALIAN: 3;
  LANGUAGE_GERMAN: 4;
  LANGUAGE_SPANISH: 5;
  LANGUAGE_RUSSIAN: 6;
  LANGUAGE_KOREAN: 7;
  LANGUAGE_JAPANESE: 8;
  LANGUAGE_HUNGARIAN: 9;
  LANGUAGE_PORTUGUESE: 10;
  LANGUAGE_ARABIC: 11;
  DEVICE_ORIENTATION_PORTRAIT: 0;
  DEVICE_ORIENTATION_LANDSCAPE_LEFT: 1;
  DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN: 2;
  DEVICE_ORIENTATION_LANDSCAPE_RIGHT: 3;
  DEVICE_MAX_ORIENTATIONS: 2;
  IMAGE_FORMAT_RAWDATA: 2;
  TOUCH_ALL_AT_ONCE: 0;
  TOUCH_ONE_BY_ONE: 1;
  RED: {
    r: 255;
    g: 0;
    b: 0;
  };
  GREEN: {
    r: 0;
    g: 255;
    b: 0;
  };
  BLUE: {
    r: 0;
    g: 0;
    b: 255;
  };
  BLACK: {
    r: 0;
    g: 0;
    b: 0;
  };
  WHITE: {
    r: 255;
    g: 255;
    b: 255;
  };
  YELLOW: {
    r: 255;
    g: 255;
    b: 0;
  };
  POINT_ZERO: {
    x: 0;
    y: 0;
  };
  PARTICLE_DEFAULT_CAPACITY: 500;
  DEFAULT_PADDING: 5;
  ONE: 1;
  ZERO: 0;
  SRC_ALPHA: 770;
  SRC_ALPHA_SATURATE: 776;
  SRC_COLOR: 768;
  DST_ALPHA: 772;
  DST_COLOR: 774;
  ONE_MINUS_SRC_ALPHA: 771;
  ONE_MINUS_SRC_COLOR: 769;
  ONE_MINUS_DST_ALPHA: 773;
  ONE_MINUS_DST_COLOR: 775;
  ONE_MINUS_CONSTANT_ALPHA: 32772;
  ONE_MINUS_CONSTANT_COLOR: 32770;
  LINEAR: 9729;
  REPEAT: 10497;
  CLAMP_TO_EDGE: 33071;
  MIRRORED_REPEAT: 33648;
  VERTEX_ATTRIB_FLAG_NONE: 0;
  VERTEX_ATTRIB_FLAG_POSITION: 1;
  VERTEX_ATTRIB_FLAG_COLOR: 2;
  VERTEX_ATTRIB_FLAG_TEX_COORDS: 4;
  VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: 7;
  VERTEX_ATTRIB_POSITION: 0;
  VERTEX_ATTRIB_COLOR: 1;
  VERTEX_ATTRIB_TEX_COORDS: 2;
  VERTEX_ATTRIB_MAX: 3;
  UNIFORM_PMATRIX: 0;
  UNIFORM_MVMATRIX: 1;
  UNIFORM_MVPMATRIX: 2;
  UNIFORM_SINTIME: 4;
  UNIFORM_COSTIME: 5;
  UNIFORM_TIME_S: 'CC_Time';
  UNIFORM_COS_TIME_S: 'CC_CosTime';
  UNIFORM_COSTIME_S: 'CC_CosTime';
  UNIFORM_SIN_TIME_S: 'CC_SinTime';
  UNIFORM_SINTIME_S: 'CC_SinTime';
  UNIFORM_PMATRIX_S: 'CC_PMatrix';
  UNIFORM_MVMATRIX_S: 'CC_MVMatrix';
  UNIFORM_MVPMATRIX_S: 'CC_MVPMatrix';
  UNIFORM_P_MATRIX_S: 'CC_PMatrix';
  UNIFORM_MV_MATRIX_S: 'CC_MVMatrix';
  UNIFORM_MVP_MATRIX_S: 'CC_MVPMatrix';
  UNIFORM_RANDOM01_S: 'CC_Random01';
  UNIFORM_SAMPLER_S: 'CC_Texture0';
  UNIFORM_ALPHA_TEST_VALUE_S: 'CC_AlphaValue';
  CURRENT_ITEM: 3233828865;
  ZOOM_ACTION_TAG: 3233828866;
  NORMAL_TAG: 8801;
  SELECTED_TAG: 8802;
  DISABLE_TAG: 8803;
  stencilBits: -1;
  g_NumberOfDraws: 0;
  s_globalOrderOfArrival: 1;
  TMX_PROPERTY_NONE: 0;
  TMX_PROPERTY_MAP: 1;
  TMX_PROPERTY_LAYER: 2;
  TMX_PROPERTY_OBJECTGROUP: 3;
  TMX_PROPERTY_OBJECT: 4;
  TMX_PROPERTY_TILE: 5;
  SCENE_FADE: 4208917214;
  SCENE_RADIAL: 49153;
  INVALID_INDEX: -1;
  PI: 3.141592653589793;
  FLT_MAX: 3.402823466e38;
  RAD: 0.017453292519943295;
  DEG: 57.29577951308232;
  UINT_MAX: 4294967295;

  KEYBOARD_RETURNTYPE_DEFAULT: 0;
  KEYBOARD_RETURNTYPE_DONE: 1;
  KEYBOARD_RETURNTYPE_SEND: 2;
  KEYBOARD_RETURNTYPE_SEARCH: 3;
  KEYBOARD_RETURNTYPE_GO: 4;
  EDITBOX_INPUT_MODE_ANY: 0;
  EDITBOX_INPUT_MODE_EMAILADDR: 1;
  EDITBOX_INPUT_MODE_NUMERIC: 2;
  EDITBOX_INPUT_MODE_PHONENUMBER: 3;
  EDITBOX_INPUT_MODE_URL: 4;
  EDITBOX_INPUT_MODE_DECIMAL: 5;
  EDITBOX_INPUT_MODE_SINGLELINE: 6;
  EDITBOX_INPUT_FLAG_PASSWORD: 0;
  EDITBOX_INPUT_FLAG_SENSITIVE: 1;
  EDITBOX_INPUT_FLAG_INITIAL_CAPS_WORD: 2;
  EDITBOX_INPUT_FLAG_INITIAL_CAPS_SENTENCE: 3;
  EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS: 4;

  SCROLLVIEW_DIRECTION_NONE: -1;
  SCROLLVIEW_DIRECTION_HORIZONTAL: 0;
  SCROLLVIEW_DIRECTION_VERTICAL: 1;
  SCROLLVIEW_DIRECTION_BOTH: 2;
  TABLEVIEW_FILL_TOPDOWN: 0;
  TABLEVIEW_FILL_BOTTOMUP: 1;
  CONTROL_EVENT_TOTAL_NUMBER: 9;
  CONTROL_EVENT_TOUCH_DOWN: 1;
  CONTROL_EVENT_TOUCH_DRAG_INSIDE: 2;
  CONTROL_EVENT_TOUCH_DRAG_OUTSIDE: 4;
  CONTROL_EVENT_TOUCH_DRAG_ENTER: 8;
  CONTROL_EVENT_TOUCH_DRAG_EXIT: 16;
  CONTROL_EVENT_TOUCH_UP_INSIDE: 32;
  CONTROL_EVENT_TOUCH_UP_OUTSIDE: 64;
  CONTROL_EVENT_TOUCH_CANCEL: 128;
  CONTROL_EVENT_VALUECHANGED: 256;
  CONTROL_STATE_NORMAL: 1;
  CONTROL_STATE_HIGHLIGHTED: 2;
  CONTROL_STATE_DISABLED: 4;
  CONTROL_STATE_SELECTED: 8;
  CONTROL_STATE_INITIAL: 8;
  CONTROL_ZOOM_ACTION_TAG: 3435855873;
  CONTROL_STEPPER_PARTMINUS: 0;
  CONTROL_STEPPER_PARTPLUS: 1;
  CONTROL_STEPPER_PARTNONE: 2;
  CONTROL_STEPPER_LABELCOLOR_ENABLED: {
    r: 55;
    g: 55;
    b: 55;
    a: 255;
  };
  CONTROL_STEPPER_LABELCOLOR_DISABLED: {
    r: 147;
    g: 147;
    b: 147;
    a: 255;
  };
  CONTROL_STEPPER_LABELFONT: 'CourierNewPSMT';
  AUTOREPEAT_DELTATIME: 0.15;
  AUTOREPEAT_INCREASETIME_INCREMENT: 12;
  SHADER_POSITION_TEXTURECOLOR: 'ShaderPositionTextureColor';
  SHADER_POSITION_TEXTURECOLORALPHATEST: 'ShaderPositionTextureColorAlphaTest';
  SHADER_POSITION_COLOR: 'ShaderPositionColor';
  SHADER_POSITION_TEXTURE: 'ShaderPositionTexture';
  SHADER_POSITION_TEXTURE_UCOLOR: 'ShaderPositionTexture_uColor';
  SHADER_POSITION_TEXTUREA8COLOR: 'ShaderPositionTextureA8Color';
  SHADER_POSITION_UCOLOR: 'ShaderPosition_uColor';
  SHADER_POSITION_LENGTHTEXTURECOLOR: 'ShaderPositionLengthTextureColor';

  KEY: {
    '0': 48;
    '1': 49;
    '2': 50;
    '3': 51;
    '4': 52;
    '5': 53;
    '6': 54;
    '7': 55;
    '8': 56;
    '9': 57;
    none: 0;
    back: 6;
    menu: 18;
    backspace: 8;
    tab: 9;
    enter: 13;
    shift: 16;
    ctrl: 17;
    alt: 18;
    pause: 19;
    capslock: 20;
    escape: 27;
    space: 32;
    pageup: 33;
    pagedown: 34;
    end: 35;
    home: 36;
    left: 37;
    up: 38;
    right: 39;
    down: 40;
    select: 41;
    insert: 45;
    Delete: 46;
    a: 65;
    b: 66;
    c: 67;
    d: 68;
    e: 69;
    f: 70;
    g: 71;
    h: 72;
    i: 73;
    j: 74;
    k: 75;
    l: 76;
    m: 77;
    n: 78;
    o: 79;
    p: 80;
    q: 81;
    r: 82;
    s: 83;
    t: 84;
    u: 85;
    v: 86;
    w: 87;
    x: 88;
    y: 89;
    z: 90;
    num0: 96;
    num1: 97;
    num2: 98;
    num3: 99;
    num4: 100;
    num5: 101;
    num6: 102;
    num7: 103;
    num8: 104;
    num9: 105;
    '*': 106;
    '+': 107;
    '-': 109;
    numdel: 110;
    '/': 111;
    f1: 112;
    f2: 113;
    f3: 114;
    f4: 115;
    f5: 116;
    f6: 117;
    f7: 118;
    f8: 119;
    f9: 120;
    f10: 121;
    f11: 122;
    f12: 123;
    numlock: 144;
    scrolllock: 145;
    ';': 186;
    semicolon: 186;
    equal: 187;
    '=': 187;
    ',': 188;
    comma: 188;
    dash: 189;
    '.': 190;
    period: 190;
    forwardslash: 191;
    grave: 192;
    '[': 219;
    openbracket: 219;
    backslash: 220;
    ']': 221;
    closebracket: 221;
    quote: 222;
    dpadLeft: 1000;
    dpadRight: 1001;
    dpadUp: 1003;
    dpadDown: 1004;
    dpadCenter: 1005;
  };

  CameraFlag: {
    DEFAULT: 1;
    USER1: 2;
    USER2: 4;
    USER3: 8;
    USER4: 16;
    USER5: 32;
    USER6: 64;
    USER7: 128;
    USER8: 256;
  };
  LightType: {
    DIRECTIONAL: 0;
    POINT: 1;
    SPOT: 2;
    AMBIENT: 3;
  };
  LightFlag: {
    LIGHT0: 1;
    LIGHT1: 2;
    LIGHT2: 4;
    LIGHT3: 8;
    LIGHT4: 16;
    LIGHT5: 32;
    LIGHT6: 64;
    LIGHT7: 128;
    LIGHT8: 256;
    LIGHT9: 512;
    LIGHT10: 1024;
    LIGHT11: 2048;
    LIGHT12: 4096;
    LIGHT13: 8192;
    LIGHT14: 16384;
    LIGHT15: 32768;
  };
  attributeNames: [
    'a_position',
    'a_color',
    'a_texCoord',
    'a_texCoord1',
    'a_texCoord2',
    'a_texCoord3',
    'a_normal',
    'a_blendWeight',
    'a_blendIndex'
  ];
}
