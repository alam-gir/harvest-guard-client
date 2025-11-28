'use client'

import { motion } from 'framer-motion'
import { Radar, Sparkles, Smartphone, Languages } from 'lucide-react'

interface FeaturesDict {
  title: string
  f1_title: string
  f1_sub: string
  f2_title: string
  f2_sub: string
  f3_title: string
  f3_sub: string
  f4_title: string
  f4_sub: string
}

interface Props {
  dict: FeaturesDict
}

const featureIcons = [Radar, Sparkles, Smartphone, Languages]

export function FeaturesSection({ dict }: Props) {
  const items = [
    { title: dict.f1_title, sub: dict.f1_sub },
    { title: dict.f2_title, sub: dict.f2_sub },
    { title: dict.f3_title, sub: dict.f3_sub },
    { title: dict.f4_title, sub: dict.f4_sub },
  ]

  return (
    <section
      id="features"
      className="border-b border-border/40 bg-[#f7fbea] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-[#14300b] sm:text-2xl">
            {dict.title}
          </h2>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = featureIcons[index]
            return (
              <motion.div
                key={item.title}
                className="flex flex-col rounded-2xl border border-border/40 bg-white p-4 text-xs shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7d0] text-[#2f7214]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#4b5563]">
                  {item.sub}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
