import { AgtkPluginInfoCategory, AgtkPluginUiParameterType } from './agtk';

describe('Agtk', () => {
  describe('AgtkPluginInfoCategory', () => {
    it('matches documentation', () => {
      expect(AgtkPluginInfoCategory.Name).toBe('name');
      expect(AgtkPluginInfoCategory.Description).toBe('description');
      expect(AgtkPluginInfoCategory.Author).toBe('author');
      expect(AgtkPluginInfoCategory.Help).toBe('help');
      expect(AgtkPluginInfoCategory.Parameter).toBe('parameter');
      expect(AgtkPluginInfoCategory.Internal).toBe('internal');
      expect(AgtkPluginInfoCategory.ActionCommand).toBe('actionCommand');
      expect(AgtkPluginInfoCategory.LinkCondition).toBe('linkCondition');
      expect(AgtkPluginInfoCategory.AutoTile).toBe('autoTile');
    });
  });

  describe('AgtkPluginUiParameterType', () => {
    it('matches documentation', () => {
      expect(AgtkPluginUiParameterType.String).toBe('String');
      expect(AgtkPluginUiParameterType.MultiLineString).toBe('MultiLineString');
      expect(AgtkPluginUiParameterType.Number).toBe('Number');
      expect(AgtkPluginUiParameterType.Json).toBe('Json');
      expect(AgtkPluginUiParameterType.ImageId).toBe('ImageId');
      expect(AgtkPluginUiParameterType.TextId).toBe('TextId');
      expect(AgtkPluginUiParameterType.SceneId).toBe('SceneId');
      expect(AgtkPluginUiParameterType.TilesetId).toBe('TilesetId');
      expect(AgtkPluginUiParameterType.AnimationId).toBe('AnimationId');
      expect(AgtkPluginUiParameterType.ObjectId).toBe('ObjectId');
      expect(AgtkPluginUiParameterType.FontId).toBe('FontId');
      expect(AgtkPluginUiParameterType.MovieId).toBe('MovieId');
      expect(AgtkPluginUiParameterType.BgmId).toBe('BgmId');
      expect(AgtkPluginUiParameterType.SeId).toBe('SeId');
      expect(AgtkPluginUiParameterType.VoiceId).toBe('VoiceId');
      expect(AgtkPluginUiParameterType.VariableId).toBe('VariableId');
      expect(AgtkPluginUiParameterType.SwitchId).toBe('SwitchId');
      expect(AgtkPluginUiParameterType.AnimOnlyId).toBe('AnimOnlyId');
      expect(AgtkPluginUiParameterType.PortalId).toBe('PortalId');
      expect(AgtkPluginUiParameterType.CustomId).toBe('CustomId');
      expect(AgtkPluginUiParameterType.Embedded).toBe('Embedded');
      expect(AgtkPluginUiParameterType.EmbeddedEditable).toBe('EmbeddedEditable');
      expect(AgtkPluginUiParameterType.SwitchVariableObjectId).toBe('SwitchVariableObjectId');
      expect(AgtkPluginUiParameterType.DatabaseId).toBe('DatabaseId');
    });
  });
});
