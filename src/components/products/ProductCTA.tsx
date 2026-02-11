import Link from 'next/link'

interface ProductCTAProps {
  title: string
  description?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export default function ProductCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
}: ProductCTAProps) {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          {title}
        </h2>
        {description && (
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:opacity-80 font-semibold px-8 py-4 rounded-lg transition-opacity text-center"
          >
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border border-[#E5E7EB] dark:border-[#262626] hover:opacity-70 font-semibold px-8 py-4 rounded-lg transition-opacity text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}






