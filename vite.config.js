import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true,
  },
});
