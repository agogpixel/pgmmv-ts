import type { JsonValue } from '../../types';

import type { AgtkPlugin } from './plugin';
import type { AgtkPluginParameterValue } from './plugin-parameter-value';

export interface AgtkActionCommandPlugin<I extends JsonValue = JsonValue> extends AgtkPlugin<I> {
  execActionCommand: (
    actionCommandIndex: number,
    parameter: AgtkPluginParameterValue[],
    objectId: number,
    instanceId: number,
    actionId: number,
    commandId: number,
    commonActionStatus: 0 | 1,
    sceneId: number
  ) => number | undefined;
}
