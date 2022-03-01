import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiStringParameter extends AgtkPluginUiBaseParameter {
  type: AgtkPluginUiParameterType.String | AgtkPluginUiParameterType.MultiLineString;
  defaultValue: string;
}
