import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AccelrScan } from '@/components/AccelrScan';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  // Self-referential canonical URLs using './' - Next.js will auto-resolve to current path
  const canonicalPath = './';
  
  // Debug logging (will appear in server logs)
  console.log(`[Score] Locale: ${locale}, Canonical path: ${canonicalPath}`);
  
  const title = locale === 'nl' 
    ? 'Sales Readiness Score — Accelr' 
    : 'Sales Readiness Score — Accelr';
  const description = locale === 'nl'
    ? 'Check je sales readiness in 3 minuten. Gratis, vrijblijvend rapport binnen 24 uur.'
    : 'Check your sales readiness in 3 minutes. Free, no-obligation report within 24 hours.';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        'nl': 'https://accelr.nl/score',
        'en': 'https://accelr.nl/en/score',
        'x-default': 'https://accelr.nl/score'
      }
    },
    openGraph: {
      title,
      description,
      url: locale === 'nl' ? 'https://accelr.nl/score' : 'https://accelr.nl/en/score',
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function ScorePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <AccelrScan />
      <Footer />
    </div>
  );
}

