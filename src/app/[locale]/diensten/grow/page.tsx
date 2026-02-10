import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Self-referential canonical URLs
  const canonicalUrl = locale === 'nl' ? 'https://accelr.nl/diensten/grow' : 'https://accelr.nl/en/services/grow';
  const title = locale === 'nl' ? 'GROW — Fractional VP Sales | Accelr' : 'GROW — Fractional VP Sales | Accelr';
  const description = locale === 'nl'
    ? 'Strategische salesarchitectuur, closing coaching en kwartaal-reviews. Wij worden je fractional VP Sales.'
    : 'Strategic sales architecture, closing coaching and quarterly reviews. We become your fractional VP Sales.';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://accelr.nl/diensten/grow',
        'en': 'https://accelr.nl/en/services/grow',
        'x-default': 'https://accelr.nl/diensten/grow'
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function GrowPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'GROW — Schalen met data en strategie' : 'GROW — Scaling with data and strategy'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Voor bedrijven die de basis hebben staan en willen versnellen. Strategische salesarchitectuur, geavanceerde analytics, closing coaching.'
              : 'For companies that have the basics in place and want to accelerate. Strategic sales architecture, advanced analytics, closing coaching.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? '€3.500 – €7.000 /maand' : '€3,500 – €7,000 /month'}
            </div>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? 'Geen lock-in' : 'No lock-in'}
            </div>
          </div>
          <Link
            href={getLocalizedPath('/score')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors inline-block"
          >
            {locale === 'nl' ? 'Start met je Score →' : 'Start with your Score →'}
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Wat zit erin' : 'What\'s included'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>ALLES VAN RUN +</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Alle RUN diensten zijn inbegrepen.' : 'All RUN services are included.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>STRATEGISCHE PLANNING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Kwartaal-reviews, roadmap planning, markt-expansie strategie.' : 'Quarterly reviews, roadmap planning, market expansion strategy.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>CLOSING COACHING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? '1-op-1 coaching voor je sales team. Deal reviews, objection handling, negotiation.' : '1-on-1 coaching for your sales team. Deal reviews, objection handling, negotiation.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>BENCHMARK VERGELIJKING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Hoe presteer je vs. industrie-standaarden? Waar liggen kansen?' : 'How do you perform vs. industry standards? Where are the opportunities?'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={locale === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
        description={locale === 'nl' ? 'Start met je gratis Score om te zien waar je grootste kansen liggen.' : 'Start with your free Score to see where your biggest opportunities are.'}
        primaryCta={{ text: locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →', href: getLocalizedPath('/score') }}
      />

      <Footer />
    </div>
  );
}


