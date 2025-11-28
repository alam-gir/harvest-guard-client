// components/landing/language-toggle.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/i18n-config'
import { cn } from '@/lib/utils'

interface Props {
  currentLang: Locale
  labelBn: string
  labelEn: string
  size?: 'sm' | 'md'
}

export function LanguageToggle({
  currentLang,
  labelBn,
  labelEn,
  size = 'md',
}: Props) {
  const router = useRouter()
  const pathname = usePathname() || '/'

  const switchTo = (target: Locale) => {
    if (target === currentLang) return
    const segments = pathname.split('/')
    // ['', 'bd', '...']
    if (segments.length > 1) {
      segments[1] = target
    }
    const nextPath = segments.join('/') || `/${target}`
    router.push(nextPath)
  }

  const base =
    'inline-flex items-center rounded-full border border-border bg-background/80 text-xs font-medium shadow-sm'

  const padding = size === 'sm' ? 'px-2 py-1' : 'px-3 py-1.5'

  return (
    <div className={cn(base, padding)}>
      <button
        type="button"
        onClick={() => switchTo('bd')}
        className={cn(
          'rounded-full px-1.5 py-0.5 transition-colors',
          currentLang === 'bd'
            ? 'bg-[#006a41] text-white'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {labelBn}
      </button>
      <span className="mx-1 h-3 w-px bg-border" />
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={cn(
          'rounded-full px-1.5 py-0.5 transition-colors',
          currentLang === 'en'
            ? 'bg-[#006a41] text-white'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {labelEn}
      </button>
    </div>
  )
}
