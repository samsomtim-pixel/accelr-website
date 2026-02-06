'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, i) => (
        <div 
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            borderColor: 'var(--border-color)', 
            borderWidth: '1px', 
            borderStyle: 'solid' 
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left hover:opacity-80 transition-opacity"
          >
            <span className="font-semibold pr-8" style={{ color: 'var(--text-primary)' }}>
              {item.question}
            </span>
            <ChevronDown 
              size={20} 
              className={`flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              style={{ color: 'var(--text-secondary)' }}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
