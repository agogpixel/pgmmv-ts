import type { AgtkPluginUiCustomIdParameter } from './plugin-ui-custom-id-parameter';
import type { AgtkPluginUiEmbeddedParameter } from './plugin-ui-embedded-parameter';
import type { AgtkPluginUiIdParameter } from './plugin-ui-id-parameter';
import type { AgtkPluginUiJsonParameter } from './plugin-ui-json-parameter';
import type { AgtkPluginUiNumberParameter } from './plugin-ui-number-parameter';
import type { AgtkPluginUiStringParameter } from './plugin-ui-string-parameter';

export type AgtkPluginUiParameter =
  | AgtkPluginUiStringParameter
  | AgtkPluginUiJsonParameter
  | AgtkPluginUiNumberParameter
  | AgtkPluginUiIdParameter
  | AgtkPluginUiCustomIdParameter
  | AgtkPluginUiEmbeddedParameter;
