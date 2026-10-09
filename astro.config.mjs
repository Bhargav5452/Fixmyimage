// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fixmyimage.app',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({
    filter: (page) => {
      if (page.includes('/404')) return false;
      if (page.includes('/es/')) {
        return page.endsWith('/es/') || page.endsWith('/es');
      }
      return true;
    }
  })],
});