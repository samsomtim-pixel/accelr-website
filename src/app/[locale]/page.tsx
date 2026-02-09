import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import ComparisonTable from '@/components/ComparisonTable';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: locale === 'nl' 
      ? 'Accelr — AI-Powered Sales Machines voor B2B' 
      : 'Accelr — AI-Powered Sales Machines for B2B',
    description: t('description'),
    alternates: {
      canonical: locale === 'nl' ? 'https://accelr.nl/' : 'https://accelr.nl/en/',
      languages: {
        'nl': 'https://accelr.nl/',
        'en': 'https://accelr.nl/en/',
        'x-default': 'https://accelr.nl/'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: locale === 'nl' ? 'https://accelr.nl/' : 'https://accelr.nl/en/',
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-green-400 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t('hero.subtitle')}
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href={getLocalizedPath('/score')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {t('hero.cta_primary')}
            </Link>
            <Link
              href={getLocalizedPath('/diensten')}
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('hero.trust').split('✓')[1]?.trim()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('hero.trust').split('✓')[2]?.trim()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{t('hero.trust').split('✓')[3]?.trim()}</span>
            </div>
          </div>
          <p className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>
            {t('hero.social_proof')}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('problems.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.tools')}</h3>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.founder')}</h3>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.spam')}</h3>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.ai')}</h3>
            </div>
          </div>
          <p className="text-xl font-semibold text-center italic" style={{ color: 'var(--text-primary)' }}>
            {t('problems.conclusion')}
          </p>
        </div>
      </section>

      {/* Services Section - BUILD/RUN/GROW */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('services.title')}
          </h2>
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
                href={getLocalizedPath('/diensten/build')}
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
                href={getLocalizedPath('/diensten/run')}
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
                href={getLocalizedPath('/diensten/grow')}
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.grow.cta')}
              </Link>
            </div>
          </div>
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

      {/* Comparison Table */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('comparison.title')}
          </h2>
          <ComparisonTable
            columns={[
              locale === 'nl' ? 'Aspect' : 'Aspect',
              'Accelr',
              locale === 'nl' ? 'Typisch bureau' : 'Typical agency',
              locale === 'nl' ? 'DIY met AI tools' : 'DIY with AI tools'
            ]}
            rows={[
              { label: t('comparison.aspects.approach'), values: [t('comparison.accelr.approach'), t('comparison.typical.approach'), t('comparison.diy.approach')] },
              { label: t('comparison.aspects.after'), values: [t('comparison.accelr.after'), t('comparison.typical.after'), t('comparison.diy.after')] },
              { label: t('comparison.aspects.ai'), values: [t('comparison.accelr.ai'), t('comparison.typical.ai'), t('comparison.diy.ai')] },
              { label: t('comparison.aspects.costs'), values: [t('comparison.accelr.costs'), t('comparison.typical.costs'), t('comparison.diy.costs')] },
              { label: t('comparison.aspects.ownership'), values: [t('comparison.accelr.ownership'), t('comparison.typical.ownership'), t('comparison.diy.ownership')] },
              { label: t('comparison.aspects.result'), values: [t('comparison.accelr.result'), t('comparison.typical.result'), t('comparison.diy.result')] },
            ]}
          />
        </div>
      </section>

      {/* For Who Section */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('forWho.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{t('forWho.forYou.title')}</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                {(t.raw('forWho.forYou.items') as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>{t('forWho.notForYou.title')}</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                {(t.raw('forWho.notForYou.items') as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400/60">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('faq.title')}
          </h2>
          <FAQAccordion
            items={[
              {
                question: t('faq.items.noTeam.question'),
                answer: t('faq.items.noTeam.answer'),
              },
              {
                question: t('faq.items.timeline.question'),
                answer: t('faq.items.timeline.answer'),
              },
              {
                question: t('faq.items.tools.question'),
                answer: t('faq.items.tools.answer'),
              },
              {
                question: t('faq.items.difference.question'),
                answer: t('faq.items.difference.answer'),
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title={t('finalCta.title')}
        description={t('finalCta.description')}
        primaryCta={{ text: t('finalCta.cta_primary'), href: getLocalizedPath('/score') }}
        secondaryCta={{ text: t('finalCta.cta_secondary'), href: getLocalizedPath('/diensten') }}
      />

      <Footer />
    </div>
  );
}

