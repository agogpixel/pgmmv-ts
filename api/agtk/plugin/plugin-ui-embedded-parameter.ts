import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiEmbeddedParameter extends AgtkPluginUiBaseParameter {
  type: AgtkPluginUiParameterType.Embedded | AgtkPluginUiParameterType.EmbeddedEditable;
  sourceId: number;
  reference?: string;
  width?: number;
  height?: number;
}
