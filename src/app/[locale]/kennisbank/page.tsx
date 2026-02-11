import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Self-referential canonical URLs using './' - Next.js will auto-resolve to current path
  const canonicalPath = './';
  return {
    title: locale === 'nl' ? 'Kennisbank — Accelr' : 'Resources — Accelr',
    description: locale === 'nl'
      ? 'Alles over AI-powered B2B sales. Artikelen, guides en best practices.'
      : 'Everything about AI-powered B2B sales. Articles, guides and best practices.',
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        'nl': 'https://accelr.nl/kennisbank',
        'en': 'https://accelr.nl/en/resources',
        'x-default': 'https://accelr.nl/kennisbank'
      }
    },
    openGraph: {
      title: locale === 'nl' ? 'Kennisbank — Accelr' : 'Resources — Accelr',
      description: locale === 'nl'
        ? 'Alles over AI-powered B2B sales. Artikelen, guides en best practices.'
        : 'Everything about AI-powered B2B sales. Articles, guides and best practices.',
      url: locale === 'nl' ? 'https://accelr.nl/kennisbank' : 'https://accelr.nl/en/resources',
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function KennisbankPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const articles = [
    {
      title: locale === 'nl' ? 'Wat is een outbound engine? (En heb je er eentje nodig?)' : 'What is an outbound engine? (And do you need one?)',
      status: locale === 'nl' ? 'Binnenkort' : 'Coming soon'
    },
    {
      title: locale === 'nl' ? 'Sales machine bouwen: het complete stappenplan voor MKB' : 'Building a sales machine: the complete step-by-step guide for SMEs',
      status: locale === 'nl' ? 'Binnenkort' : 'Coming soon'
    },
    {
      title: locale === 'nl' ? 'AI voor B2B sales: wat werkt, wat niet, en wat komt eraan' : 'AI for B2B sales: what works, what doesn\'t, and what\'s coming',
      status: locale === 'nl' ? 'Binnenkort' : 'Coming soon'
    },
    {
      title: locale === 'nl' ? 'De beste outbound sales tools in 2026' : 'The best outbound sales tools in 2026',
      status: locale === 'nl' ? 'Binnenkort' : 'Coming soon'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Kennisbank' : 'Resources'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Alles over AI-powered B2B sales'
              : 'Everything about AI-powered B2B sales'}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {article.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {article.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


