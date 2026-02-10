import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'nl' ? 'BUILD — AI Sales Machine Setup | Accelr' : 'BUILD — AI Sales Machine Setup | Accelr',
    description: locale === 'nl'
      ? 'In 8-12 weken bouwen we je complete AI-powered sales machine. Van ICP tot dashboard. Eigendom van jou.'
      : 'In 8-12 weeks we build your complete AI-powered sales machine. From ICP to dashboard. Owned by you.',
  };
}

export default async function BuildPage({ params }: { params: Promise<{ locale: string }> }) {
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
            {t('services.build.title')} — {t('services.build.subtitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('services.build.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t('services.build.price')}
            </div>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? '8-12 weken' : '8-12 weeks'}
            </div>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl' ? 'Alles inbegrepen' : 'Everything included'}
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
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>ICP & STRATEGIE</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'ICP definitie en validatie' : 'ICP definition and validation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Marktgrootte berekening' : 'Market size calculation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Implementatie roadmap' : 'Implementation roadmap'}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>AI SDR DEPLOYMENT</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'AI SDR tool selectie en setup' : 'AI SDR tool selection and setup'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Outbound sequences ontwerpen' : 'Outbound sequence design'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Email deliverability setup' : 'Email deliverability setup'}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>CRM & AUTOMATIE</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'CRM configuratie op maat' : 'Custom CRM configuration'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Pipeline automations' : 'Pipeline automations'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Integraties leggen' : 'Setting up integrations'}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>SALES PLAYBOOKS</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Scripts en bezwaarafhandeling' : 'Scripts and objection handling'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Follow-up systemen' : 'Follow-up systems'}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>DASHBOARDS</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Sales dashboard met unified view' : 'Sales dashboard with unified view'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'KPI tracking' : 'KPI tracking'}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>TRAINING & SUPPORT</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Team training sessies' : 'Team training sessions'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? 'Complete documentatie' : 'Complete documentation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>{locale === 'nl' ? '30-90 dagen support' : '30-90 days support'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Het traject' : 'The process'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2 text-green-400">{t('howItWorksOld.step1.number')}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('howItWorksOld.step1.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('howItWorksOld.step1.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2 text-green-400">{t('howItWorksOld.step2.number')}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('howItWorksOld.step2.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('howItWorksOld.step2.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2 text-green-400">{t('howItWorksOld.step3.number')}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('howItWorksOld.step3.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('howItWorksOld.step3.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2 text-green-400">{t('howItWorksOld.step4.number')}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('howItWorksOld.step4.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('howItWorksOld.step4.description')}</p>
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


