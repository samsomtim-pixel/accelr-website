'use client'

import Link from 'next/link'

interface ExpertiseCardProps {
  number: string
  title: string
  subtitle: string
  description?: string
  features: string
  priceNote?: string
  href: string
}

export default function ExpertiseCard({
  number,
  title,
  subtitle,
  description,
  features,
  priceNote,
  href,
}: ExpertiseCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-hover)'
        e.currentTarget.style.backgroundColor = 'var(--bg-secondary-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)'
        e.currentTarget.style.backgroundColor = 'var(--bg-card)'
      }}
    >
      <div className="text-sm font-semibold mb-3 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {number}
      </div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-lg text-green-400 font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {subtitle}
      </p>
      {description && (
        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
      <div className="space-y-2 mb-4">
        {features.split(' · ').map((feature, i) => (
          <span key={i} className="inline-block text-sm mr-2 mb-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
            {feature}
          </span>
        ))}
      </div>
      {priceNote && (
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          {priceNote}
        </p>
      )}
      <div className="mt-6 text-green-400 font-semibold text-sm">
        → Meer over {title}
      </div>
    </Link>
  )
}

