import type { JsonValue } from '../../types';

import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiJsonParameter extends AgtkPluginUiBaseParameter {
  type: AgtkPluginUiParameterType.Json;
  defaultValue: JsonValue;
}
