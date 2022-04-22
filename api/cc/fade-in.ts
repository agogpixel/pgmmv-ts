import type { CCFadeOut } from './fade-out';
import type { CCFadeTo, CCFadeToNamespace } from './fade-to';
import type { CCNode } from './node';

export type CCFadeInNamespace = {
  /**
   * Fades In an object that implements the cc.RGBAProtocol protocol.
   *
   * @param duration Duration in seconds.
   */
  new (duration?: number): CCFadeIn;

  /**
   * Please use cc.fadeIn instead.
   * Fades In an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 0 to 255.
   *
   * @param duration Duration in seconds.
   * @deprecated since v3.0 please use cc.fadeIn() instead.
   */
  create(duration: number): CCFadeIn;
} & CCFadeToNamespace;

/**
 * Fades In an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from 0 to 255.
 * The "reverse" of this action is FadeOut.
 */
export interface CCFadeIn extends CCFadeTo {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeIn;

  /**
   * Returns a reversed action.
   */
  reverse(): CCFadeOut;

  /**
   * Start the action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;
}
