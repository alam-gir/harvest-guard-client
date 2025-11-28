'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Locale } from '@/i18n-config'
import { Menu, X, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from '../common/language-toggle'
import { cn } from '@/lib/utils'

interface NavDict {
  home: string
  problem: string
  how_it_works: string
  features: string
  faq: string
  register: string
  lang_bn: string
  lang_en: string
}

interface Props {
  lang: Locale
  dict: NavDict
}

export function LandingNavbar({ lang, dict }: Props) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#problem', label: dict.problem },
    { href: '#how-it-works', label: dict.how_it_works },
    { href: '#features', label: dict.features },
    { href: '#faq', label: dict.faq },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Logo + brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#006a41] text-white shadow-sm">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-[#1f3b10]">
              HarvestGuard
            </span>
            <span className="text-xs text-muted-foreground">
              Safe storage for your harvest
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: language toggle + CTA (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle
            currentLang={lang}
            labelBn={dict.lang_bn}
            labelEn={dict.lang_en}
          />
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#66c501] text-xs font-semibold text-[#083109] hover:bg-[#519e01]"
          >
            <Link href={`/${lang}/register`}>{dict.register}</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle
            currentLang={lang}
            labelBn={dict.lang_bn}
            labelEn={dict.lang_en}
            size="sm"
          />
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm',
            )}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 pb-4 pt-2 shadow-sm md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-1 w-full rounded-full bg-[#66c501] text-xs font-semibold text-[#083109] hover:bg-[#519e01]"
            >
              <Link href={`/${lang}/register`}>{dict.register}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
