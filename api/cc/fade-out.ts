import type { CCFadeIn } from './fade-in';
import type { CCFadeTo, CCFadeToNamespace } from './fade-to';

export type CCFadeOutNamespace = {
  /**
   * Fades Out an object that implements the cc.RGBAProtocol protocol.
   *
   * @param duration Duration in seconds.
   */
  new (duration?: number): CCFadeOut;

  /**
   * Please use cc.fadeOut instead.
   * Fades Out an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 255 to 0.
   *
   * @param duration Duration in seconds.
   * @deprecated since v3.0 please use cc.fadeOut instead.
   */
  create(duration: number): CCFadeOut;
} & CCFadeToNamespace;

/**
 * Fades Out an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from 255 to 0.
 * The "reverse" of this action is FadeIn.
 */
export interface CCFadeOut extends CCFadeTo {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeOut;

  /**
   * Returns a reversed action.
   */
  reverse(): CCFadeIn;
}
