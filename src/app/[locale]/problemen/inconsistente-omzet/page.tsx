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
    title: locale === 'nl' 
      ? 'Inconsistente Omzet? Zo Los Je Het Op | Accelr' 
      : 'Inconsistent Revenue? Here\'s How to Fix It | Accelr',
    description: locale === 'nl'
      ? 'Elke maand andere cijfers. Geen voorspelbaarheid, geen rust. Ontdek hoe je een consistent sales systeem bouwt.'
      : 'Different numbers every month. No predictability, no peace. Discover how to build a consistent sales system.',
  };
}

export default async function InconsistenteOmzetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Inconsistente omzet, geen rust' : 'Inconsistent revenue, no peace'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Elke maand andere cijfers. Soms goed, soms slecht. Geen voorspelbaarheid, geen rust, geen groei.'
              : 'Different numbers every month. Sometimes good, sometimes bad. No predictability, no peace, no growth.'}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Het probleem' : 'The problem'}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              {locale === 'nl'
                ? 'Je omzet fluctueert elke maand. Soms haal je je target, soms niet. Je weet niet waarom, en je kunt het niet voorspellen.'
                : 'Your revenue fluctuates every month. Sometimes you hit your target, sometimes you don\'t. You don\'t know why, and you can\'t predict it.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Het probleem is niet dat je niet genoeg leads hebt. Het probleem is dat je geen consistent systeem hebt dat leads omzet in deals. Geen automatie, geen follow-ups, geen structuur.'
                : 'The problem isn\'t that you don\'t have enough leads. The problem is that you don\'t have a consistent system that converts leads into deals. No automation, no follow-ups, no structure.'}
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Herkenningspunten:' : 'Recognition points:'}
          </h3>
          <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je omzet fluctueert sterk per maand' : 'Your revenue fluctuates strongly per month'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je weet niet waarom sommige maanden goed zijn en andere niet' : 'You don\'t know why some months are good and others aren\'t'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je hebt geen consistent lead-to-deal proces' : 'You don\'t have a consistent lead-to-deal process'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je kunt niet voorspellen wanneer deals sluiten' : 'You can\'t predict when deals will close'}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'De oplossing' : 'The solution'}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              {locale === 'nl'
                ? 'Wij bouwen een consistent sales systeem met automatie, follow-ups en structuur. AI SDR\'s die 24/7 leads genereren, CRM automations die deals door de pipeline duwen, en dashboards die je laten zien waar je staat.'
                : 'We build a consistent sales system with automation, follow-ups and structure. AI SDRs that generate leads 24/7, CRM automations that push deals through the pipeline, and dashboards that show you where you stand.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Binnen 8-12 weken heb je een werkend systeem dat consistent leads genereert en omzet in deals. Voorspelbare omzet, maand na maand.'
                : 'Within 8-12 weeks you have a working system that consistently generates leads and converts them into deals. Predictable revenue, month after month.'}
            </p>
          </div>

          <div className="mt-8">
            <Link
              href={getLocalizedPath('/diensten/build')}
              className="inline-block border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              {locale === 'nl' ? 'Meer over BUILD →' : 'More about BUILD →'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={locale === 'nl' ? 'Klaar voor consistente omzet?' : 'Ready for consistent revenue?'}
        description={locale === 'nl' ? 'Start met je gratis Score om te zien waar je grootste kansen liggen.' : 'Start with your free Score to see where your biggest opportunities are.'}
        primaryCta={{ text: locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →', href: getLocalizedPath('/score') }}
      />

      <Footer />
    </div>
  );
}

