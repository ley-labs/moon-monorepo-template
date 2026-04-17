import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    solidPlugin({
      hot: false,
      solid: { generate: 'dom' },
    }),
  ],
  test: {
    watch: false,
    isolate: false,
    environment: 'jsdom',
    transformMode: { web: [/\.[jt]sx$/] },
  },
  resolve: {
    conditions: ['browser', 'development'],
  },
});
