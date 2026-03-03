import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // 只在生产环境（部署到 GitHub Pages）时配置 base
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/FotileRangehoodGuide/' : '/',
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
      allowedHosts: true, // 允许所有域名访问
    },
  };
});
