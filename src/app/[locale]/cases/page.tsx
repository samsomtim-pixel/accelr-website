import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Self-referential canonical URLs using './' - Next.js will auto-resolve to current path
  const canonicalPath = './';
  return {
    title: locale === 'nl' ? 'Cases — Accelr' : 'Cases — Accelr',
    description: locale === 'nl'
      ? 'We zijn net gestart met onze nieuwe AI-powered aanpak. Onze eerste case studies volgen binnenkort.'
      : 'We just started with our new AI-powered approach. Our first case studies will follow soon.',
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        'nl': 'https://accelr.nl/cases',
        'en': 'https://accelr.nl/en/cases',
        'x-default': 'https://accelr.nl/cases'
      }
    },
    openGraph: {
      title: locale === 'nl' ? 'Cases — Accelr' : 'Cases — Accelr',
      description: locale === 'nl'
        ? 'We zijn net gestart met onze nieuwe AI-powered aanpak. Onze eerste case studies volgen binnenkort.'
        : 'We just started with our new AI-powered approach. Our first case studies will follow soon.',
      url: locale === 'nl' ? 'https://accelr.nl/cases' : 'https://accelr.nl/en/cases',
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Cases' : 'Cases'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'We zijn net gestart met onze nieuwe AI-powered aanpak. Onze eerste case studies volgen binnenkort.'
              : 'We just started with our new AI-powered approach. Our first case studies will follow soon.'}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl p-12" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? 'Word onze volgende case study' : 'Become our next case study'}
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              {locale === 'nl'
                ? 'We bieden 25% korting op het BUILD traject in ruil voor een case study. Interesse? Vermeld het in je Score.'
                : 'We offer 25% discount on the BUILD trajectory in exchange for a case study. Interested? Mention it in your Score.'}
            </p>
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


