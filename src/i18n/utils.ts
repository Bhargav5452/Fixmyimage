import { LANGUAGES, DEFAULT_LOCALE, EN_TO_ES_ROUTES, ES_TO_EN_ROUTES, SPANISH_PAGE_PATHS, type Locale } from './config';
import { en } from './translations/en';
import { es } from './translations/es';

const dictionaries: Record<string, any> = {
  en,
  es
};

export function getLangFromUrl(url: URL): Locale {
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  if (SPANISH_PAGE_PATHS.has(pathname) || pathname.startsWith('/es')) {
    return 'es';
  }
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale) {
  const dict = dictionaries[lang] || dictionaries[DEFAULT_LOCALE];
  return function t(key: string) {
    const keys = key.split('.');
    let value = dict;
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return (value as string) ?? key;
  };
}

export function getRelativeLocaleUrl(lang: Locale, path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'es') {
    if (EN_TO_ES_ROUTES[normalizedPath]) {
      return EN_TO_ES_ROUTES[normalizedPath];
    }
    if (SPANISH_PAGE_PATHS.has(normalizedPath)) {
      return normalizedPath;
    }
    if (normalizedPath === '/') {
      return '/';
    }
    return normalizedPath;
  }
  // English
  if (ES_TO_EN_ROUTES[normalizedPath]) {
    return ES_TO_EN_ROUTES[normalizedPath];
  }
  return normalizedPath;
}
