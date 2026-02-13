import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import ComparisonTable from '@/components/ComparisonTable';
import ROIComparisonTable from '@/components/ROIComparisonTable';
import PricingCardsMobile from '@/components/PricingCardsMobile';
import TechPartners from '@/components/TechPartners';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  // Self-referential canonical URLs using './' - Next.js will auto-resolve to current path
  // For homepage: './' resolves to '/' for NL and '/en/' for EN
  const canonicalPath = './';
  
  // Debug logging (will appear in server logs)
  console.log(`[Homepage] Locale: ${locale}, Canonical path: ${canonicalPath}`);

  return {
    title: locale === 'nl' 
      ? 'Accelr — AI-Powered Sales Machines voor B2B' 
      : 'Accelr — AI-Powered Sales Machines for B2B',
    description: t('description'),
    alternates: {
      canonical: canonicalPath,
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4" style={{ paddingTop: '32px' }}>
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
              href="/score"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {t('hero.cta_primary')}
            </Link>
            <Link
              href="/diensten"
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            {t('hero.trust').split('✓').filter(item => item.trim()).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{item.trim()}</span>
              </div>
            ))}
          </div>
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
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.hiring.title')}</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                {((t.raw('problems.cards.hiring.bullets') as string[]) || []).map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.founder.title')}</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                {((t.raw('problems.cards.founder.bullets') as string[]) || []).map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.pipeline.title')}</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                {((t.raw('problems.cards.pipeline.bullets') as string[]) || []).map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('problems.cards.ai.title')}</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                {((t.raw('problems.cards.ai.bullets') as string[]) || []).map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xl font-semibold text-center italic" style={{ color: 'var(--text-primary)' }}>
            {t('problems.conclusion')}
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg mb-12 text-center" style={{ color: 'var(--text-secondary)' }}>
            {t('howItWorks.subtitle')}
          </p>
          
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {t('howItWorks.step1.number')}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('howItWorks.step1.title')}
              </h3>
              <p className="text-xs uppercase tracking-wider mb-3 text-green-400 font-semibold">
                {t('howItWorks.step1.time')}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('howItWorks.step1.description')}
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center">
              <span className="text-green-400 text-2xl">→</span>
            </div>

            {/* Step 2 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {t('howItWorks.step2.number')}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('howItWorks.step2.title')}
              </h3>
              <p className="text-xs uppercase tracking-wider mb-3 text-green-400 font-semibold">
                {t('howItWorks.step2.time')}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('howItWorks.step2.description')}
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center">
              <span className="text-green-400 text-2xl">→</span>
            </div>

            {/* Step 3 */}
            <div className="text-center flex-1 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {t('howItWorks.step3.number')}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {t('howItWorks.step3.title')}
              </h3>
              <p className="text-xs uppercase tracking-wider mb-3 text-green-400 font-semibold">
                {t('howItWorks.step3.time')}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('howItWorks.step3.description')}
              </p>
            </div>
          </div>

          {/* Result Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <span className="text-xl">⚡</span>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {t('howItWorks.result')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <TechPartners />

      {/* Pricing Section - BUILD/RUN/GROW */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {t('services.title')}
          </h2>
          <p className="text-lg mb-12 text-center" style={{ color: 'var(--text-secondary)' }}>
            {t('services.subtitle')}
          </p>
          
          {/* Mobile Swipeable Cards */}
          <PricingCardsMobile />

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {/* BUILD - HIGHLIGHTED */}
            <div className="rounded-2xl p-8 flex flex-col md:transition-transform md:hover:scale-[1.02]" style={{ backgroundColor: 'var(--bg-card)', borderColor: '#10b981', borderWidth: '2.5px', borderStyle: 'solid', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)' }}>
              <div className="min-h-[18px] mb-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                  {t('services.build.badge')}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)', minHeight: '44px' }}>
                {t('services.build.title')}
              </h3>
              <p className="text-sm font-medium mb-6" style={{ color: 'var(--text-muted)', minHeight: '44px' }}>
                {t('services.build.persona')}
              </p>
              <div className="mb-2">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.build.price')}</span>
              </div>
              <p className="text-xs mb-6" style={{ color: 'var(--text-muted)', minHeight: '40px' }}>
                {t('services.build.priceAnchor')}
              </p>
              <ul className="space-y-2 mb-auto flex-grow">
                {(t.raw('services.build.features') as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/diensten/build"
                  className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  {t('services.build.cta')}
                </Link>
                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  {t('services.build.trust')}
                </p>
                <Link
                  href="/diensten/build"
                  className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  {t('services.build.detailLink')}
                </Link>
              </div>
            </div>

            {/* RUN */}
            <div className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <div className="min-h-[18px] mb-2"></div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)', minHeight: '44px' }}>
                {t('services.run.title')}
              </h3>
              <div className="mb-6" style={{ minHeight: '44px' }}>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('services.run.persona')}
                </p>
                <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                  {t('services.run.personaNote')}
                </p>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{t('services.run.price')}</span>
              </div>
              <p className="text-xs mb-6" style={{ color: 'var(--text-muted)', minHeight: '40px' }}>
                {t('services.run.priceAnchor')}
              </p>
              <ul className="space-y-2 mb-auto flex-grow">
                {(t.raw('services.run.features') as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/diensten/run"
                  className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  {t('services.run.cta')}
                </Link>
                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  {t('services.run.trust')}
                </p>
                <Link
                  href="/diensten/run"
                  className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  {t('services.run.detailLink')}
                </Link>
              </div>
            </div>

            {/* GROW */}
            <div className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <div className="min-h-[18px] mb-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                  {t('services.grow.badge')}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)', minHeight: '44px' }}>
                {t('services.grow.title')}
              </h3>
              <div className="mb-6" style={{ minHeight: '44px' }}>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('services.grow.persona')}
                </p>
                <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                  {t('services.grow.personaNote')}
                </p>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{t('services.grow.price')}</span>
              </div>
              <p className="text-xs mb-6" style={{ color: 'var(--text-muted)', minHeight: '40px' }}>
                {t('services.grow.priceAnchor')}
              </p>
              <ul className="space-y-2 mb-auto flex-grow">
                {(t.raw('services.grow.features') as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/diensten/grow"
                  className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  {t('services.grow.cta')}
                </Link>
                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  {t('services.grow.trust')}
                </p>
                <Link
                  href="/diensten/grow"
                  className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  {t('services.grow.detailLink')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Comparison Table */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <ROIComparisonTable
            title={t('roiComparison.title')}
            columns={t.raw('roiComparison.columns') as string[]}
            rows={t.raw('roiComparison.rows') as Array<{ scenario: string; inhouse: string; accelr: string; savings: string }>}
            footnote={t('roiComparison.footnote')}
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 border-t" style={{ borderColor: 'var(--border-color)' }}>
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
        primaryCta={{ text: t('finalCta.cta_primary'), href: '/score' }}
        secondaryCta={{ text: t('finalCta.cta_secondary'), href: '/diensten' }}
      />

      <Footer />
    </div>
  );
}

