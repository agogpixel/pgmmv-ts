import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiCustomIdParameterParam } from './plugin-ui-custom-id-parameter-param';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiCustomIdParameter extends AgtkPluginUiBaseParameter {
  type: AgtkPluginUiParameterType.CustomId;
  customParam: AgtkPluginUiCustomIdParameterParam[];
  defaultValue: number;
}
