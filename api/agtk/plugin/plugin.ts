import type { JsonValue } from '../../types';

import type { AgtkPluginInfo } from './plugin-info';
import type { AgtkPluginInfoCategory } from './plugin-info-category';
import type { AgtkPluginParameterValue } from './plugin-parameter-value';

export interface AgtkPlugin<I extends JsonValue = JsonValue> {
  /**
   * Set by PGMMV engine when plugin is first initialized.
   */
  readonly id: number;

  setLocale: (locale: string) => void;

  getInfo: <C extends AgtkPluginInfoCategory>(category: C) => AgtkPluginInfo<C, I>;

  initialize: (data: I | undefined) => void;

  finalize: () => void;

  call: (...args: unknown[]) => unknown;

  update?: (delta: number) => void;

  setParamValue: (paramValue: AgtkPluginParameterValue[]) => void;

  setInternal: (data: I) => void;
}
