import { Locale } from "@/i18n-config"
import { getDictionary } from "@/get-dictionary"
import { LoginForm } from "@/components/auth/login-form"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <LoginForm lang={lang} dict={dict} />
}
