import { defineConfig } from 'vite';

export default defineConfig({
  base: '/FotileRanghoodGuide/',  // ⚠️ 改为你的仓库名，前后都要有斜杠
  server: {
    port: 5000,
    host: '0.0.0.0',
    hmr: {
      overlay: true,
      path: '/hot/vite-hmr',
      port: 6000,
      clientPort: 443,
      timeout: 30000,
    },
  },
  preview: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});