/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import * as fs from 'fs';
const posts = fs.readdirSync('./src/content');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  optimizeDeps: {
    include: ['@angular/common'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
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
