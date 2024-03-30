/// <reference types="vitest" />

import analog from '@analogjs/platform';
import * as fs from 'fs';
import { defineConfig } from 'vite';
const posts = fs.readdirSync('./src/content');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: '',
  build: {
    target: ['es2020'],
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
  optimizeDeps: {
    include: ['@angular/common'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      nitro: {
        preset: 'vercel',
      },
      static: true,
      prerender: {
        routes: [
          '/',
          '/about',
          '/blog',
          ...posts.map((post) => `/blog/${post.replace('.md', '')}`),
        ],
        sitemap: {
          host: 'https://dalenguyen.me/',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
