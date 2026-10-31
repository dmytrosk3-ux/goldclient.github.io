// languages.ts
export const defaultLocale = 'ru';

export const locales = [
  'de', // German
  'en', // English
  'es', // Spanish
  'fr', // French
  'it', // Italian
  'nl', // Dutch
  'pt', // Portuguese
  'ru', // Russian
] as const;

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
