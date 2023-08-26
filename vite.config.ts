import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': resolve('src/app'),
      '@entities': resolve('src/entities'),
      '@features': resolve('src/features'),
      '@pages': resolve('src/pages'),
      '@shared': resolve('src/shared'),
      '@widgets': resolve('src/widgets'),
    },
  },
});
