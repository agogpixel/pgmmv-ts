import type { CCActionNamespace } from './action';
import type { CCActionManagerNamespace } from './action-manager';
import type { CCAffineTransformNamespace } from './affine-transform';
import type { CCClassNamespace } from './class';
import type { CCColorNamespace } from './color';
import type { CCComponentNamespace } from './component';
import type { CCNodeNamespace } from './node';
import type { CCPointNamespace } from './point';
import type { CCRectNamespace } from './rect';
import type { CCSizeNamespace } from './size';
import type { CCTouchNamespace } from './touch';

export interface cc {
  Action: CCActionNamespace;
  ActionManager: CCActionManagerNamespace;
  AffineTransform: CCAffineTransformNamespace;
  Class: CCClassNamespace;
  Color: CCColorNamespace;
  Component: CCComponentNamespace;
  Node: CCNodeNamespace;
  Point: CCPointNamespace;
  Rect: CCRectNamespace;
  Size: CCSizeNamespace;
  Touch: CCTouchNamespace;
}
