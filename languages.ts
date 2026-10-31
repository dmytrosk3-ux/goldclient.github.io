// languages.ts
export const defaultLocale = 'ru';

export const locales = ['ru', 'en, de, fr, it, pt, es, nl'] as const;

export const localeConfigs = {
  de: { label: 'Deutsch' },
  en: { label: 'English' },
  es: { label: 'Español' },
  fr: { label: 'Français' },
  it: { label: 'Italiano' },
  nl: { label: 'Nederlands' },
  pt: { label: 'Português' },
  ru: { label: 'Русский' },
};

export type Locale = (typeof locales)[number];
