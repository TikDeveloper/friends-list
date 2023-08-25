import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // basicSsl()
  ],
  resolve: {
    alias: [
      {
        find: '@common',
        replacement: resolve(__dirname, 'src/components/common'),
      },
      {
        find: '@layouts',
        replacement: resolve(__dirname, 'src/components/layouts'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
      {
        find: '@libs',
        replacement: resolve(__dirname, 'src/libs'),
      },
      {
        find: '@providers',
        replacement: resolve(__dirname, 'src/providers'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@router',
        replacement: resolve(__dirname, 'src/router'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'src/store'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@api',
        replacement: resolve(__dirname, 'src/api'),
      },
      {
        find: '@mocks',
        replacement: resolve(__dirname, 'src/mocks'),
      },
    ],
  },
});
