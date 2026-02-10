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
  const canonicalUrl = locale === 'nl' ? 'https://accelr.nl/contact' : 'https://accelr.nl/en/contact';
  const title = locale === 'nl' ? 'Contact — Accelr' : 'Contact — Accelr';
  const description = locale === 'nl'
    ? 'Neem contact op met Accelr. Of start eerst met de gratis Score.'
    : 'Get in touch with Accelr. Or start with the free Score first.';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://accelr.nl/contact',
        'en': 'https://accelr.nl/en/contact',
        'x-default': 'https://accelr.nl/contact'
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

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
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
            {locale === 'nl' ? 'Contact' : 'Contact'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Laten we praten over wat AI voor jouw sales kan doen.'
              : 'Let\'s talk about what AI can do for your sales.'}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {locale === 'nl' ? 'Email' : 'Email'}
              </h3>
              <a href="mailto:tim@accelr.nl" className="text-green-400 hover:text-green-300 transition-colors">
                tim@accelr.nl
              </a>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {locale === 'nl' ? 'Locatie' : 'Location'}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Haarlem, Nederland
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              {locale === 'nl' ? 'Of start eerst met de gratis Score' : 'Or start with the free Score first'}
            </p>
            <Link
              href={getLocalizedPath('/score')}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


