import type { JsonValue } from '../../types';

import type { AgtkPluginInfo } from './plugin-info';
import type { AgtkPluginInfoCategory } from './plugin-info-category';

export interface AgtkPlugin<I extends JsonValue = JsonValue> {
  setLocale: (locale: string) => void;

  getInfo: <C extends AgtkPluginInfoCategory>(category: C) => AgtkPluginInfo<C, I>;

  initialize: (data: I) => void;

  finalize: () => void;

  call: (...args: unknown[]) => unknown;

  update?: (delta: number) => void;

  setParamValue: (paramValue: { id: number; value: JsonValue }[]) => void;

  setInternal: (data: I) => void;
}
