import type { CCActionInterval, CCActionIntervalNamespace } from './action-interval';
import type { CCNode } from './node';

export type CCFadeToNamespace = {
  /**
   * Fades an object that implements the cc.RGBAProtocol protocol.
   *
   * @param duration Duration in seconds.
   * @param opacity 0-255, 0 is transparent.
   */
  new (duration?: number, opacity?: number): CCFadeTo;

  /**
   * Please use cc.fadeTo instead.
   * Fades an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from the current value to a custom one.
   *
   * @param duration Duration in seconds.
   * @param opacity 0-255, 0 is transparent.
   * @deprecated since v3.0 please use cc.fadeTo instead.
   */
  create(duration: number, opacity: number): CCFadeTo;
} & CCActionIntervalNamespace;

/**
 * Fades an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from the current value to a custom one.
 * ```
 * var action = new cc.FadeTo(1.0, 0);
 * ```
 */
export interface CCFadeTo extends CCActionInterval {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeTo;

  /**
   * Initializes the action.
   *
   * @param duration Duration in seconds.
   * @param opacity
   */
  initWithDuration(duration: number, opacity: number): boolean;

  /**
   * Start this action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;

  /**
   * Called once per frame. Time is the number of seconds of a frame interval.
   *
   * @param time Time in seconds
   */
  update(time: number): void;
}
