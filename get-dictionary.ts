import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  bd: () => import('./dictionaries/bd.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => {
  switch (locale) {
    case 'en':
      return dictionaries.en()
    case 'bd':
      return dictionaries.bd()
    default:
      return dictionaries.bd()
  }
}
