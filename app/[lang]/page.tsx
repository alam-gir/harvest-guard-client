import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { LandingPage } from '@/components/landing/landing-page'

export default async function Page(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params  // IMPORTANT FIX

  const dictionary = await getDictionary(lang)

  return <LandingPage lang={lang} dict={dictionary} />
}
