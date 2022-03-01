import type { AgtkPluginUiParameter } from './plugin-ui-parameter';

export interface AgtkPluginActionCommand {
  id: number;
  name: string;
  description: string;
  parameter: AgtkPluginUiParameter[];
}
