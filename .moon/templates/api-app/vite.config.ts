import { cloudflare } from '@cloudflare/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [cloudflare()],
  server: {
    port: Number(process.env.PORT) || 4000,
    host: '127.0.0.1',
  },
});
