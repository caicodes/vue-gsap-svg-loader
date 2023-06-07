// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from "unocss"

export default defineConfig({
  presets: [
    presetUno({
      dark: "class",
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
})
