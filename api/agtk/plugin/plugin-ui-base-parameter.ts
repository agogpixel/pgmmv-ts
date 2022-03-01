import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiBaseParameter {
  id: number;
  name: string;
  type: AgtkPluginUiParameterType;
  defaultValue: unknown;
}
