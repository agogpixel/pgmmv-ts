import type { CCClass, CCClassNamespace } from './class';
import type { CCNode } from './node';

export type CCEventNamespace = {
  /**
   * Base class of all kinds of events.
   */
  new (): CCEvent;

  /**
   * The type code of Touch event.
   */
  readonly TOUCH: 0;

  /**
   * The type code of Keyboard event.
   */
  readonly KEYBOARD: 1;

  /**
   * The type code of Acceleration event.
   */
  readonly ACCELERATION: 2;

  /**
   * The type code of Mouse event.
   */
  readonly MOUSE: 3;

  /**
   * The type code of UI focus event.
   */
  readonly FOCUS: 4;

  /**
   * The type code of Custom event.
   */
  readonly CUSTOM: 6;
} & CCClassNamespace;

/**
 * Base class of all kinds of events.
 */
export interface CCEvent extends CCClass {
  /**
   * Gets current target of the event.
   * Note: It only be available when the event listener is associated with node.
   * It returns 0 when the listener is associated with fixed priority.
   */
  getCurrentTarget(): CCNode;

  /**
   * Gets the event type.
   */
  getType(): number;

  /**
   * Checks whether the event has been stopped.
   */
  isStopped(): boolean;

  /**
   * Stops propagation for current event.
   */
  stopPropagation(): void;
}
