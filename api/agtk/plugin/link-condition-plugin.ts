import type { JsonValue } from '../../types';

import type { AgtkPlugin } from './plugin';

export interface AgtkLinkConditionPlugin<I extends JsonValue = JsonValue> extends AgtkPlugin<I> {
  execLinkCondition: (
    linkConditionIndex: number,
    parameter: { id: number; value: JsonValue }[],
    objectId: number,
    instanceId: number,
    actionLinkId: number,
    commonActionStatus: -1 | 0 | 1
  ) => boolean;
}
