import type { JsonValue } from '../../types';

import type { AgtkPlugin } from './plugin';

export interface AgtkAutoTilePlugin<I extends JsonValue = JsonValue> extends AgtkPlugin<I> {
  getAttribute: (...args: unknown[]) => unknown;

  getBorderType: (...args: unknown[]) => unknown;
}
