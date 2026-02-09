'use client'

import Link from 'next/link'

interface PricingCardProps {
  label?: string
  featured?: boolean
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: { text: string; href: string }
}

export default function PricingCard({
  label,
  featured = false,
  title,
  price,
  period,
  description,
  features,
  cta,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 transition-all duration-300 ${featured ? 'ring-2 ring-green-500' : ''}`}
      style={{
        backgroundColor: featured ? 'var(--bg-card)' : 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    >
      {label && (
        <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-green-400">
          {label}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <div className="mb-4">
        <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{price}</span>
        {period && (
          <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>{period}</span>
        )}
      </div>
      <p className="mb-6 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span className="text-green-400 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`block text-center font-semibold px-6 py-3 rounded-full transition-colors ${
          featured
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'border border-green-500 text-green-500 hover:bg-green-500/10'
        }`}
      >
        {cta.text}
      </Link>
    </div>
  )
}
