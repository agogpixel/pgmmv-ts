import type { AgtkPluginUiBaseParameter } from './plugin-ui-base-parameter';
import type { AgtkPluginUiParameterType } from './plugin-ui-parameter-type';

export interface AgtkPluginUiIdParameter extends AgtkPluginUiBaseParameter {
  type:
    | AgtkPluginUiParameterType.ImageId
    | AgtkPluginUiParameterType.TextId
    | AgtkPluginUiParameterType.SceneId
    | AgtkPluginUiParameterType.TilesetId
    | AgtkPluginUiParameterType.AnimationId
    | AgtkPluginUiParameterType.ObjectId
    | AgtkPluginUiParameterType.FontId
    | AgtkPluginUiParameterType.MovieId
    | AgtkPluginUiParameterType.BgmId
    | AgtkPluginUiParameterType.SeId
    | AgtkPluginUiParameterType.VoiceId
    | AgtkPluginUiParameterType.VariableId
    | AgtkPluginUiParameterType.SwitchId
    | AgtkPluginUiParameterType.AnimOnlyId
    | AgtkPluginUiParameterType.PortalId
    | AgtkPluginUiParameterType.SwitchVariableObjectId
    | AgtkPluginUiParameterType.DatabaseId;
  defaultValue: number;
  withNewButton?: boolean;
}
