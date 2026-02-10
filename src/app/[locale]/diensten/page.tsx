import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'nl' 
      ? 'Diensten — Accelr' 
      : 'Services — Accelr',
    description: locale === 'nl'
      ? 'BUILD, RUN of GROW — drie paden naar een werkend AI-powered sales systeem.'
      : 'BUILD, RUN or GROW — three paths to a working AI-powered sales system.',
  };
}

export default async function DienstenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Drie paden naar een werkend systeem' : 'Three paths to a working system'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl' 
              ? 'Elk pad combineert onze expertise over de hele sales funnel op maat van jouw situatie.'
              : 'Each path combines our expertise across the entire sales funnel tailored to your situation.'}
          </p>
        </div>
      </section>

      {/* Expertise Bar */}
      <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('expertise.title')}
          </h3>
          <p className="text-sm mb-8 text-center" style={{ color: 'var(--text-secondary)' }}>
            {t('expertise.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            <span>{t('expertise.target')}</span>
            <span className="text-green-400">→</span>
            <span>{t('expertise.outreach')}</span>
            <span className="text-green-400">→</span>
            <span>{t('expertise.convert')}</span>
            <span className="text-green-400">→</span>
            <span>{t('expertise.scale')}</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* BUILD */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('services.build.title')}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                {t('services.build.subtitle')}
              </p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('services.build.description')}
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.build.price')}</span>
              </div>
              <Link
                href="/diensten/build"
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.build.cta')}
              </Link>
            </div>

            {/* RUN */}
            <div className="rounded-2xl p-8 ring-2 ring-green-500" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-green-400">
                {locale === 'nl' ? 'MEEST GEKOZEN' : 'MOST CHOSEN'}
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('services.run.title')}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                {t('services.run.subtitle')}
              </p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('services.run.description')}
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.run.price')}</span>
              </div>
              <Link
                href="/diensten/run"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.run.cta')}
              </Link>
            </div>

            {/* GROW */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('services.grow.title')}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                {t('services.grow.subtitle')}
              </p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('services.grow.description')}
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.grow.price')}</span>
              </div>
              <Link
                href="/diensten/grow"
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.grow.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


