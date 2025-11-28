'use client'

import { motion } from 'framer-motion'
import { MapPin, CloudSun, Bell, ShieldCheck } from 'lucide-react'

interface HowDict {
  title: string
  step1_title: string
  step1_sub: string
  step2_title: string
  step2_sub: string
  step3_title: string
  step3_sub: string
  step4_title: string
  step4_sub: string
}

interface Props {
  dict: HowDict
}

const icons = [MapPin, CloudSun, Bell, ShieldCheck]

export function HowSection({ dict }: Props) {
  const steps = [
    { title: dict.step1_title, sub: dict.step1_sub },
    { title: dict.step2_title, sub: dict.step2_sub },
    { title: dict.step3_title, sub: dict.step3_sub },
    { title: dict.step4_title, sub: dict.step4_sub },
  ]

  return (
    <section
      id="how-it-works"
      className="border-b border-border/40 bg-[#f7fbea] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-[#14300b] sm:text-2xl">
            {dict.title}
          </h2>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={step.title}
                className="flex flex-col rounded-2xl border border-border/50 bg-white p-4 text-xs shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7d0] text-[#2f7214]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#4b5563]">
                  {step.sub}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
