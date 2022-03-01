import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiNumberParameter extends AgtkPluginUiBaseParameter {
  type: AgtkPluginUiParameterType.Number;
  defaultValue: number;
  decimals?: number;
  minimumValue?: number;
  maximumValue?: number;
}
