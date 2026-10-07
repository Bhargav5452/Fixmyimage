// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fixmyimage.app',

  redirects: {
    '/es/compress-image': { status: 301, destination: '/comprimir-imagen' },
    '/es/resize-image': { status: 301, destination: '/redimensionar-imagen' },
    '/es/convert-image': { status: 301, destination: '/convertir-imagen' },
    '/es/watermark-image': { status: 301, destination: '/marca-de-agua' },
    '/es/jpg-to-png': { status: 301, destination: '/convertir-jpg-a-png' },
    '/es/png-to-jpg': { status: 301, destination: '/convertir-png-a-jpg' },
    '/es/webp-to-png': { status: 301, destination: '/convertir-webp-a-png' },
    '/es/webp-to-jpg': { status: 301, destination: '/convertir-webp-a-jpg' },
    '/es/avif-to-jpg': { status: 301, destination: '/convertir-avif-a-jpg' },
    '/es/avif-to-png': { status: 301, destination: '/convertir-avif-a-png' },
    '/es/compress-image-to-50kb': { status: 301, destination: '/comprimir-imagen-a-50-kb' },
    '/es/compress-image-to-100kb': { status: 301, destination: '/comprimir-imagen-a-100-kb' },
    '/es/compress-image-to-1mb': { status: 301, destination: '/comprimir-imagen-a-1-mb' },
    '/es/resize-image-in-pixels': { status: 301, destination: '/redimensionar-imagen-en-pixeles' },
    '/es/resize-image-in-cm': { status: 301, destination: '/redimensionar-imagen-en-cm' },
    '/es/bulk-image-resizer': { status: 301, destination: '/redimensionar-imagenes-por-lotes' },
    '/es': { status: 301, destination: '/comprimir-imagen' },
    '/es/about': { status: 301, destination: '/about' },
    '/es/contact': { status: 301, destination: '/contact' },
    '/es/privacy': { status: 301, destination: '/privacy' },
    '/es/terms': { status: 301, destination: '/terms' },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/es/') && !page.endsWith('/es')
  })],
});