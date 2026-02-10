import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Self-referential canonical URLs using './' - Next.js will auto-resolve to current path
  const canonicalPath = './';
  const title = locale === 'nl' ? 'Investering — Accelr' : 'Pricing — Accelr';
  const description = locale === 'nl'
    ? 'Transparante prijzen voor BUILD, RUN en GROW. Van €5K tot €7K per maand.'
    : 'Transparent pricing for BUILD, RUN and GROW. From €5K to €7K per month.';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        'nl': 'https://accelr.nl/investering',
        'en': 'https://accelr.nl/en/pricing',
        'x-default': 'https://accelr.nl/investering'
      }
    },
    openGraph: {
      title,
      description,
      url: locale === 'nl' ? 'https://accelr.nl/investering' : 'https://accelr.nl/en/pricing',
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function InvesteringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Investering' : 'Pricing'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Transparant. Geen verrassingen. Drie paden naar een werkend systeem.'
              : 'Transparent. No surprises. Three paths to a working system.'}
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Score - Free */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {locale === 'nl' ? 'Score' : 'Score'}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{locale === 'nl' ? 'Gratis' : 'Free'}</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Sales readiness diagnose' : 'Sales readiness diagnosis'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'AI-powered rapport binnen 24 uur' : 'AI-powered report within 24 hours'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Geen verplichtingen' : 'No obligations'}</span>
                </li>
              </ul>
              <Link
                href={getLocalizedPath('/score')}
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →'}
              </Link>
            </div>

            {/* BUILD */}
            <div className="rounded-2xl p-8 ring-2 ring-green-500" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('services.build.title')}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.build.price')}</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Complete AI sales machine setup' : 'Complete AI sales machine setup'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? '8-12 weken implementatie' : '8-12 weeks implementation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Training en documentatie' : 'Training and documentation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? '30-90 dagen support' : '30-90 days support'}</span>
                </li>
              </ul>
              <Link
                href={getLocalizedPath('/diensten/build')}
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {locale === 'nl' ? 'Meer over BUILD →' : 'More about BUILD →'}
              </Link>
            </div>

            {/* RUN */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('services.run.title')}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.run.price')}</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'AI-agent monitoring en tuning' : 'AI-agent monitoring and tuning'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'A/B testing outreach' : 'A/B testing outreach'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Performance dashboards' : 'Performance dashboards'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{locale === 'nl' ? 'Maandelijkse rapportage' : 'Monthly reporting'}</span>
                </li>
              </ul>
              <Link
                href={getLocalizedPath('/diensten/run')}
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {locale === 'nl' ? 'Meer over RUN →' : 'More about RUN →'}
              </Link>
            </div>
          </div>

          {/* Discount Banner */}
          <div className="text-center">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {locale === 'nl' 
                ? '25% korting op BUILD in ruil voor een case study. Interesse? Vermeld het in je Score.'
                : '25% discount on BUILD in exchange for a case study. Interested? Mention it in your Score.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={locale === 'nl' ? 'Niet zeker welk pad bij jou past?' : 'Not sure which path fits you?'}
        description={locale === 'nl' ? 'Start met je gratis Score. We adviseren op basis van je situatie.' : 'Start with your free Score. We advise based on your situation.'}
        primaryCta={{ text: locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →', href: getLocalizedPath('/score') }}
      />

      <Footer />
    </div>
  );
}


