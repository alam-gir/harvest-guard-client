import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import ClientComponentExample from './client-component-example'
import { use } from 'react'

export default function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params)
  const dictionary = use(getDictionary(lang))
  return (
    <div>
      <h1 className="text-3xl font-bold">Server Component (lang: {lang})</h1>
      <p>{dictionary.welcome}</p>
      <p>{dictionary.about_us}</p>
      <ClientComponentExample dictionary={dictionary} />
    </div>
  )
}
