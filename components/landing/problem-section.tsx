'use client'

import { motion } from 'framer-motion'

interface ProblemDict {
  title: string
  p1: string
  stat1_title: string
  stat1_sub: string
  stat2_title: string
  stat2_sub: string
  stat3_title: string
  stat3_sub: string
}

interface Props {
  dict: ProblemDict
}

export function ProblemSection({ dict }: Props) {
  const stats = [
    { title: dict.stat1_title, sub: dict.stat1_sub },
    { title: dict.stat2_title, sub: dict.stat2_sub },
    { title: dict.stat3_title, sub: dict.stat3_sub },
  ]

  return (
    <section
      id="problem"
      className="border-b border-border/40 bg-white/90 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-[#14300b] sm:text-2xl">
            {dict.title}
          </h2>
          <p className="text-sm leading-relaxed text-[#374151]">{dict.p1}</p>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-border/50 bg-[#f8fbf3] p-4 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="text-lg font-semibold text-[#006a41]">
                {item.title}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#4b5563]">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
