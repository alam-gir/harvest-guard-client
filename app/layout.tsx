import { i18n } from '../i18n-config'
import { use } from 'react';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params);
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}