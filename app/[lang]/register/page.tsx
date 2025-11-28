import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary"
import { RegisterForm } from "@/components/auth/register-form"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <RegisterForm lang={lang} dict={dict} />
}
