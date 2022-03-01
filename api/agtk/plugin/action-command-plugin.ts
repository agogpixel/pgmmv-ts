import type { JsonValue } from '../../types';

import type { AgtkPlugin } from './plugin';

export interface AgtkActionCommandPlugin<I extends JsonValue = JsonValue> extends AgtkPlugin<I> {
  execActionCommand: (
    actionCommandIndex: number,
    parameter: { id: number; value: JsonValue }[],
    objectId: number,
    instanceId: number,
    actionId: number,
    commandId: number,
    commonActionStatus: 0 | 1,
    sceneId: number
  ) => number | undefined;
}
