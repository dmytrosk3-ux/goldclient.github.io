// languages.ts
export const defaultLocale = 'ru';
export const locales = ['ru', 'en'] as const;
export const locales = ['ru', 'en', 'fr', 'de', 'it', 'nl', 'pl', 'pt', 'es', 'uk', 'sv''] as const;
export const localeConfigs = {
  nl: { label: 'Nederlands' },
  en: { label: 'English' },
  fr: { label: 'Français' },
  de: { label: 'Deutsch' },
  it: { label: 'Italiano' },
  pl: { label: 'Polski' },
  pt: { label: 'Português' },
  ru: { label: 'Русский' },
  es: { label: 'Español' },
  sv: { label: 'Svenska' },
  uk: { label: 'Українська' }
};

export type Locale = (typeof locales)[number];
