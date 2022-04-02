import type { CCClassNamespace } from './class';
import type { CCNodeNamespace } from './node';

export interface cc {
  Class: CCClassNamespace;
  Node: CCNodeNamespace;
}
