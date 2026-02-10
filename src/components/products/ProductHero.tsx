import Link from 'next/link'

interface ProductHeroProps {
  title: string
  subtitle: string
  description: string
  price: string
  setupFee?: string
  timeline?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export default function ProductHero({
  title,
  subtitle,
  description,
  price,
  setupFee,
  timeline,
  primaryCta,
  secondaryCta,
}: ProductHeroProps) {
  return (
    <section className="px-6 py-20 pt-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-green-400 font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {subtitle}
        </p>
        <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href={primaryCta.href}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
          >
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
        
        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {price}
          {setupFee && ` · ${setupFee}`}
          {timeline && ` · ${timeline}`}
        </div>
      </div>
    </section>
  )
}






