// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alex-piy.github.io',
  base: '/nav-site/',
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
});
