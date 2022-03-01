import type { JsonValue } from '../../types';

import type { AgtkPluginActionCommand } from './plugin-action-command';
import type { AgtkPluginAutoTileParameters } from './plugin-auto-tile-parameters';
import type { AgtkPluginInfoCategory } from './plugin-info-category';
import type { AgtkPluginLinkCondition } from './plugin-link-condition';
import type { AgtkPluginUiParameter } from './plugin-ui-parameter';

export type AgtkPluginInfo<
  C extends AgtkPluginInfoCategory,
  I extends JsonValue
> = C extends AgtkPluginInfoCategory.Parameter
  ? AgtkPluginUiParameter[]
  : C extends AgtkPluginInfoCategory.Internal
  ? I
  : C extends AgtkPluginInfoCategory.ActionCommand
  ? AgtkPluginActionCommand[]
  : C extends AgtkPluginInfoCategory.LinkCondition
  ? AgtkPluginLinkCondition[]
  : C extends AgtkPluginInfoCategory.AutoTile
  ? AgtkPluginAutoTileParameters
  : string;
