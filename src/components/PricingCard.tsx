'use client'

interface PricingCardProps {
  title: string
  subtitle: string
  price: string
  period?: string
  features: string[]
  ctaText: string
  ctaLink: string
  featured?: boolean
  badge?: string
}

export default function PricingCard({
  title,
  subtitle,
  price,
  period,
  features,
  ctaText,
  ctaLink,
  featured = false,
  badge
}: PricingCardProps) {
  return (
    <div 
      className={`relative rounded-xl p-6 flex flex-col transition-all duration-200 hover:scale-[1.02] group ${
        featured ? 'ring-2 ring-green-500' : ''
      }`}
      style={{ 
        backgroundColor: featured ? 'var(--bg-card)' : 'var(--bg-card)',
        borderColor: featured ? '#10b981' : 'var(--border-color)',
        borderWidth: featured ? '2px' : '1px',
        borderStyle: 'solid'
      }}
    >
      {badge && (
        <div className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {badge}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
        {subtitle}
      </p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold" style={{ color: '#10b981' }}>
          {price}
        </span>
        {period && (
          <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>
            {period}
          </span>
        )}
      </div>
      
      <ul className="space-y-2 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href={ctaLink}
        className={`block text-center py-3 rounded-lg font-semibold transition-colors mt-auto ${
          featured 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'border hover:border-green-500'
        }`}
        style={!featured ? { 
          borderColor: 'var(--border-color)', 
          color: 'var(--text-primary)' 
        } : {}}
      >
        {ctaText}
      </a>
    </div>
  )
}
