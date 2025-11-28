'use client'

import type { Locale } from '@/i18n-config'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

interface CtaDict {
  title: string
  subtitle: string
  button: string
}

interface Props {
  lang: Locale
  dict: CtaDict
}

export function CtaSection({ lang, dict }: Props) {
  return (
    <section className="border-b border-border/40 bg-gradient-to-r from-[#ecf8d9] via-white to-[#f4fbe4] py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex items-center justify-center rounded-full bg-[#e5f7d0] px-3 py-1 text-[11px] font-medium text-[#2f7214]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
          {lang === 'bd'
            ? 'কষ্টের ফসলের জন্য স্মার্ট পাহারা'
            : 'Smart guard for your hard-earned harvest'}
        </motion.div>

        <motion.h2
          className="mt-4 text-xl font-semibold text-[#14300b] sm:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
        >
          {dict.title}
        </motion.h2>

        <motion.p
          className="mt-2 text-sm leading-relaxed text-[#4b5563]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#66c501] px-6 text-xs font-semibold tracking-tight text-[#083109] shadow-sm hover:bg-[#519e01]"
          >
            <Link href={`/${lang}/register`}>{dict.button}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
