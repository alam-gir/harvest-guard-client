'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQDict {
  title: string
  q1: string
  a1: string
  q2: string
  a2: string
  q3: string
  a3: string
  q4: string
  a4: string
}

interface Props {
  dict: FAQDict
}

export function FAQSection({ dict }: Props) {
  const items = [
    { q: dict.q1, a: dict.a1 },
    { q: dict.q2, a: dict.a2 },
    { q: dict.q3, a: dict.a3 },
    { q: dict.q4, a: dict.a4 },
  ]

  return (
    <section
      id="faq"
      className="border-b border-border/40 bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-[#14300b] sm:text-2xl">
            {dict.title}
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-sm">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-[#4b5563]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
