import type { CCActionNamespace } from './action';
import type { CCActionManagerNamespace } from './action-manager';
import type { CCAffineTransformNamespace } from './affine-transform';
import type { CCClassNamespace } from './class';
import type { CCColorNamespace } from './color';
import type { CCComponentNamespace } from './component';
import type { CCEventNamespace } from './event';
import type { CCEventListenerNamespace } from './event-listener';
import type { CCEventManager } from './event-manager';
import type { CCGLProgramNamespace } from './gl-program';
import type { CCGridBaseNamespace } from './grid-base';
import type { CCNodeNamespace } from './node';
import type { CCPointNamespace } from './point';
import type { CCRectNamespace } from './rect';
import type { CCSchedulerNamespace } from './scheduler';
import type { CCSizeNamespace } from './size';
import type { CCTexture2DNamespace } from './texture-2d';
import type { CCTouchNamespace } from './touch';

export interface cc {
  Action: CCActionNamespace;
  ActionManager: CCActionManagerNamespace;
  AffineTransform: CCAffineTransformNamespace;
  Class: CCClassNamespace;
  Color: CCColorNamespace;
  Component: CCComponentNamespace;
  Event: CCEventNamespace;
  EventListener: CCEventListenerNamespace;
  eventManager: CCEventManager;
  GLProgram: CCGLProgramNamespace;
  GridBase: CCGridBaseNamespace;
  Node: CCNodeNamespace;
  Point: CCPointNamespace;
  Rect: CCRectNamespace;
  Scheduler: CCSchedulerNamespace;
  Size: CCSizeNamespace;
  Texture2D: CCTexture2DNamespace;
  Touch: CCTouchNamespace;
}
