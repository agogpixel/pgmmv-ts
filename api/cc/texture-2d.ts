import type { CCClass, CCClassNamespace } from './class';
import type { CCGLProgram } from './gl-program';

export type CCTexture2DNamespace = {
  /**
   * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
   */
  new (): CCTexture2D;
} & CCClassNamespace;

/**
 * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
 * The created cc.Texture2D object will always have power-of-two dimensions.
 * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions
 * i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).
 * Be aware that the content of the generated textures will be upside-down!
 */
export interface CCTexture2D extends CCClass {
  /**
   * Content height in points.
   */
  height: number;

  /**
   * Texture max S.
   */
  maxS: number;

  /**
   * Texture max T.
   */
  maxT: number;

  /**
   * WebGLTexture object.
   * TODO: What is WebGLTexture type...?
   */
  readonly name: unknown;

  /**
   * Pixel format of the texture.
   */
  readonly pixelFormat: number;

  /**
   * Height in pixels.
   */
  readonly pixelsHeight: number;

  /**
   * Width in pixels.
   */
  readonly pixelsWidth: number;

  /**
   * The shader program used by drawAtPoint and drawInRect.
   */
  shaderProgram: CCGLProgram;

  /**
   * Content width in points.
   */
  width: number;
}
