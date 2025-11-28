'use client'

import type { Locale } from '@/i18n-config'
import { LandingNavbar } from './navbar'
import { HeroSection } from './hero-section'
import { ProblemSection } from './problem-section'
import { HowSection } from './how-section'
import { StorySection } from './story-section'
import { FeaturesSection } from './features-section'
import { FAQSection } from './faq-section'
import { CtaSection } from './cta-section'
import { LandingFooter } from './footer'
import { Dictionary } from '@/get-dictionary'

interface LandingPageProps {
  lang: Locale
  dict: Dictionary
}

export function LandingPage({ lang, dict }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-[#fcf7d9] via-white to-[#f5fbea]">
      <LandingNavbar lang={lang} dict={dict.nav} />
      <main className="flex-1">
        <HeroSection lang={lang} dict={dict.hero} />
        <ProblemSection dict={dict.problem} />
        <HowSection dict={dict.how} />
        <StorySection dict={dict.story} />
        <FeaturesSection dict={dict.features} />
        <FAQSection dict={dict.faq} />
        <CtaSection lang={lang} dict={dict.cta} />
      </main>
      <LandingFooter dict={dict.footer} />
    </div>
  )
}
