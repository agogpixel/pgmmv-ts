import type { CCAffineTransformNamespace } from './affine-transform';
import type { CCClassNamespace } from './class';
import type { CCColorNamespace } from './color';
import type { CCComponentNamespace } from './component';
import type { CCNodeNamespace } from './node';
import type { CCPointNamespace } from './point';
import type { CCRectNamespace } from './rect';
import type { CCTouchNamespace } from './touch';

export interface cc {
  AffineTransform: CCAffineTransformNamespace;
  Class: CCClassNamespace;
  Color: CCColorNamespace;
  Component: CCComponentNamespace;
  Node: CCNodeNamespace;
  Point: CCPointNamespace;
  Rect: CCRectNamespace;
  Touch: CCTouchNamespace;
}
