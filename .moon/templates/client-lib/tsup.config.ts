import { defineConfig } from 'tsup';
import * as tsupPresetSolid from 'tsup-preset-solid';

const preset_options: tsupPresetSolid.PresetOptions = {
  entries: [
    {
      entry: 'src/index.tsx',
      dev_entry: true,
      server_entry: true,
    },
  ],
};

export default defineConfig((config) => {
  const watching = !!config.watch;

  const parsed_options = tsupPresetSolid.parsePresetOptions(preset_options, watching);

  const configs = tsupPresetSolid.generateTsupOptions(parsed_options);

  return configs;
});
