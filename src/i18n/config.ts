export const LANGUAGES = {
  en: {
    name: 'English',
    nativeName: 'English',
    prefix: '',
    dir: 'ltr'
  }
} as const;

export const DEFAULT_LOCALE = 'en';

export type Locale = keyof typeof LANGUAGES;
