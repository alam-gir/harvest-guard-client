'use client'

import type { Locale } from '@/i18n-config'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall, CloudSun, Warehouse, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface HeroDict {
  title: string
  subtitle: string
  cta_primary: string
  cta_secondary: string
}

interface Props {
  lang: Locale
  dict: HeroDict
}

export function HeroSection({ lang, dict }: Props) {
  return (
    <section className="border-b border-border/40 bg-gradient-to-b from-[#fcf7d9] to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:py-16 lg:px-8">
        {/* Left: text */}
        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="border-[#66c501]/40 bg-[#f4fadf] text-[11px] font-semibold text-[#2f7214]"
          >
            {lang === 'bd'
              ? 'বাংলাদেশের কৃষকদের জন্য তৈরি'
              : 'Built for Bangladeshi farmers'}
          </Badge>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#14300b] sm:text-4xl lg:text-5xl">
            {dict.title}
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-[#374151] sm:text-base">
            {dict.subtitle}
          </p>

          {/* CTA row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex w-full flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-border/40 sm:max-w-xs">
              <PhoneCall className="h-4 w-4 text-[#006a41]" />
              <input
                className="h-8 flex-1 border-none bg-transparent text-xs outline-none placeholder:text-xs placeholder:text-muted-foreground"
                placeholder={
                  lang === 'bd'
                    ? 'আপনার মোবাইল নম্বর (ইচ্ছেমতো)'
                    : 'Your mobile number (optional)'
                }
              />
            </div>
            <Button
              asChild
              size="sm"
              className="inline-flex items-center justify-center rounded-full bg-[#66c501] px-4 text-xs font-semibold tracking-tight text-[#083109] shadow-sm hover:bg-[#519e01]"
            >
              <Link href={`/${lang}/register`}>
                {dict.cta_primary}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#e5f7d0] text-[10px] text-[#2f7214]">
              ✓
            </span>
            {lang === 'bd'
              ? 'পাইলট চলাকালীন কোনো খরচ নেই। আপনার তথ্য নিরাপদ থাকবে।'
              : 'Free during pilot. Your data stays safe with us.'}
          </p>
        </motion.div>

        {/* Right: simple visual story */}
        <motion.div
          className="flex-1 lg:flex lg:justify-end"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="grid w-full max-w-md grid-cols-2 gap-3 lg:max-w-sm">
            <HeroCard
              icon={<CloudSun className="h-5 w-5 text-[#006a41]" />}
              title={lang === 'bd' ? 'আবহাওয়া নজরদারি' : 'Weather watch'}
              text={
                lang === 'bd'
                  ? 'আপনার এলাকার তাপমাত্রা আর আর্দ্রতা দেখি।'
                  : 'Tracks temperature and humidity for your area.'
              }
              tone="light"
            />
            <HeroCard
              icon={<Warehouse className="h-5 w-5 text-[#2f7214]" />}
              title={lang === 'bd' ? 'গুদাম অবস্থা' : 'Storage condition'}
              text={
                lang === 'bd'
                  ? 'কোথায় কত ধান রাখা আছে পরিষ্কার থাকে।'
                  : 'Keeps track of where your grain is stored.'
              }
              tone="solid"
              className="row-span-2"
            />
            <HeroCard
              icon={<Bell className="h-5 w-5 text-[#b45309]" />}
              title={lang === 'bd' ? 'আগাম সতর্কতা' : 'Early alerts'}
              text={
                lang === 'bd'
                  ? 'ঝুঁকি বাড়লে আগে থেকেই বার্তা দেয়।'
                  : 'Warns you before conditions become risky.'
              }
              tone="light"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface HeroCardProps {
  icon: React.ReactNode
  title: string
  text: string
  tone: 'light' | 'solid'
  className?: string
}

function HeroCard({ icon, title, text, tone, className }: HeroCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-2xl border border-border/40 p-3 text-xs shadow-sm sm:p-4',
        tone === 'solid'
          ? 'bg-[#006a41] text-[#e5ffe9]'
          : 'bg-white/90 text-[#111827]',
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm">
          {icon}
        </div>
        <h3 className="text-[13px] font-semibold leading-tight">{title}</h3>
      </div>
      <p
        className={cn(
          'text-[11px] leading-relaxed',
          tone === 'solid' && 'text-[#d1fae5]',
        )}
      >
        {text}
      </p>
    </div>
  )
}
