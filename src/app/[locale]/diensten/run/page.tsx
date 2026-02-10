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
  const canonicalUrl = locale === 'nl' ? 'https://accelr.nl/diensten/run' : 'https://accelr.nl/en/services/run';
  const title = locale === 'nl' ? 'RUN — AI Sales Machine Management | Accelr' : 'RUN — AI Sales Machine Management | Accelr';
  const description = locale === 'nl'
    ? 'Wij houden je AI sales machine draaiend. Monitoring, tuning en optimalisatie zodat jij je kunt focussen op deals.'
    : 'We keep your AI sales machine running. Monitoring, tuning and optimization so you can focus on deals.';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://accelr.nl/diensten/run',
        'en': 'https://accelr.nl/en/services/run',
        'x-default': 'https://accelr.nl/diensten/run'
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

export default async function RunPage({ params }: { params: Promise<{ locale: string }> }) {
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
            {locale === 'nl' ? 'RUN — Jouw AI sales machine draaiend houden' : 'RUN — Keeping your AI sales machine running'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'AI SDR\'s vereisen 15-20 uur menselijk toezicht per week. Die uren heb je niet. Wij monitoren, tunen en optimaliseren je systeem continu.'
              : 'AI SDRs require 15-20 hours of human oversight per week. You don\'t have those hours. We monitor, tune and optimize your system continuously.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? '€1.500 – €3.500 /maand' : '€1,500 – €3,500 /month'}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>AI-AGENT TUNING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Continue monitoring en optimalisatie van je AI SDR\'s. Response rates, kwaliteit, en conversie.' : 'Continuous monitoring and optimization of your AI SDRs. Response rates, quality, and conversion.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>A/B TESTING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Systematisch testen van outreach-varianten. Wat werkt, wat niet, en waarom.' : 'Systematic testing of outreach variants. What works, what doesn\'t, and why.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>PERFORMANCE DASHBOARDS</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Real-time inzicht in je sales performance. Meetings, conversie, ROI.' : 'Real-time insight into your sales performance. Meetings, conversion, ROI.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>TEAM COACHING</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Maandelijkse coaching sessies voor je sales team. Best practices en optimalisaties.' : 'Monthly coaching sessions for your sales team. Best practices and optimizations.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>MAANDELIJKSE RAPPORTAGE</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Gedetailleerde rapporten met metrics, trends en aanbevelingen.' : 'Detailed reports with metrics, trends and recommendations.'}
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>PRIORITEITSSUPPORT</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl' ? 'Snelle reactietijden op vragen en issues. Jouw systeem blijft draaien.' : 'Fast response times on questions and issues. Your system keeps running.'}
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


