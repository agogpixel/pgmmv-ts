import type { JsonValue } from '../../types';

import type { AgtkPlugin } from './plugin';
import type { AgtkPluginParameterValue } from './plugin-parameter-value';

export interface AgtkLinkConditionPlugin<I extends JsonValue = JsonValue> extends AgtkPlugin<I> {
  execLinkCondition: (
    linkConditionIndex: number,
    parameter: AgtkPluginParameterValue[],
    objectId: number,
    instanceId: number,
    actionLinkId: number,
    commonActionStatus: -1 | 0 | 1
  ) => boolean;
}
