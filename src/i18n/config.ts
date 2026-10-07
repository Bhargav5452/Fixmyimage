export const LANGUAGES = {
  en: {
    name: 'English',
    nativeName: 'English',
    prefix: '',
    dir: 'ltr'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    prefix: '',
    dir: 'ltr'
  }
} as const;

export const DEFAULT_LOCALE = 'en';

export type Locale = keyof typeof LANGUAGES;

// Bidirectional route mapping between English and Spanish SEO pages
export const EN_TO_ES_ROUTES: Record<string, string> = {
  '/compress-image': '/comprimir-imagen',
  '/resize-image': '/redimensionar-imagen',
  '/convert-image': '/convertir-imagen',
  '/watermark-image': '/marca-de-agua',
  '/jpg-to-png': '/convertir-jpg-a-png',
  '/png-to-jpg': '/convertir-png-a-jpg',
  '/webp-to-png': '/convertir-webp-a-png',
  '/webp-to-jpg': '/convertir-webp-a-jpg',
  '/avif-to-jpg': '/convertir-avif-a-jpg',
  '/avif-to-png': '/convertir-avif-a-png',
  '/compress-image-to-50kb': '/comprimir-imagen-a-50-kb',
  '/compress-image-to-100kb': '/comprimir-imagen-a-100-kb',
  '/compress-image-to-1mb': '/comprimir-imagen-a-1-mb',
  '/resize-image-in-pixels': '/redimensionar-imagen-en-pixeles',
  '/resize-image-in-cm': '/redimensionar-imagen-en-cm',
  '/bulk-image-resizer': '/redimensionar-imagenes-por-lotes'
};

export const ES_TO_EN_ROUTES: Record<string, string> = {
  '/comprimir-imagen': '/compress-image',
  '/redimensionar-imagen': '/resize-image',
  '/convertir-imagen': '/convert-image',
  '/marca-de-agua': '/watermark-image',
  '/convertir-jpg-a-png': '/jpg-to-png',
  '/convertir-png-a-jpg': '/png-to-jpg',
  '/convertir-webp-a-png': '/webp-to-png',
  '/convertir-webp-a-jpg': '/webp-to-jpg',
  '/convertir-avif-a-jpg': '/avif-to-jpg',
  '/convertir-avif-a-png': '/avif-to-png',
  '/comprimir-imagen-a-50-kb': '/compress-image-to-50kb',
  '/comprimir-imagen-a-100-kb': '/compress-image-to-100kb',
  '/comprimir-imagen-a-1-mb': '/compress-image-to-1mb',
  '/redimensionar-imagen-en-pixeles': '/resize-image-in-pixels',
  '/redimensionar-imagen-en-cm': '/resize-image-in-cm',
  '/redimensionar-imagenes-por-lotes': '/bulk-image-resizer'
};

export const SPANISH_PAGE_PATHS = new Set([...Object.keys(ES_TO_EN_ROUTES), '/']);
