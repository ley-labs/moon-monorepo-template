import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  server: {
    port: Number(process.env.PORT) || 3000,
    host: '127.0.0.1',
  },
  build: {
    target: 'esnext',
  },
});
