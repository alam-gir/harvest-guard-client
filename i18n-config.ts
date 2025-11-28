export const i18n = {
  defaultLocale: 'bd',
  locales: ['bd', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
