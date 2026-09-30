import { LANGUAGES, DEFAULT_LOCALE, type Locale } from './config';
import { en } from './translations/en';
import { es } from './translations/es';

const dictionaries: Record<string, any> = {
  en,
  es
};

export function getLangFromUrl(url: URL): Locale {
  const [, langCode] = url.pathname.split('/');
  if (langCode in LANGUAGES) return langCode as Locale;
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
  const prefix = LANGUAGES[lang].prefix;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/' && prefix === '') return '/';
  if (normalizedPath === '/') return `${prefix}/`;
  return `${prefix}${normalizedPath}`;
}
