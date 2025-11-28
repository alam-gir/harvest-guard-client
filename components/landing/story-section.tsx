'use client'

import { motion } from 'framer-motion'
import { User, ArrowRightLeft } from 'lucide-react'

interface StoryDict {
  title: string
  before: string
  after: string
}

interface Props {
  dict: StoryDict
}

export function StorySection({ dict }: Props) {
  return (
    <section className="border-b border-border/40 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-6 flex items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7d0] text-[#2f7214]">
            <User className="h-4 w-4" />
          </div>
          <h2 className="text-lg font-semibold text-[#14300b] sm:text-xl">
            {dict.title}
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-[1.1fr_auto_1.1fr]">
          <motion.div
            className="rounded-2xl border border-red-100 bg-red-50/80 p-4 text-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wide text-red-700">
              Before
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-red-900/90">
              {dict.before}
            </p>
          </motion.div>

          <motion.div
            className="hidden items-center justify-center sm:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006a41] text-white shadow-md">
              <ArrowRightLeft className="h-5 w-5" />
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
              After
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-emerald-900/90">
              {dict.after}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
