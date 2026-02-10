'use client'

import { useState } from 'react'
import Accordion from '@/components/Accordion'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQ[]
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-3xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {title}
          </h2>
        )}
        <Accordion items={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))} />
      </div>
    </section>
  )
}






