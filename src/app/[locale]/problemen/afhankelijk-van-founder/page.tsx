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
      ? 'Founder-Afhankelijke Sales? Zo Los Je Het Op | Accelr' 
      : 'Founder-Dependent Sales? Here\'s How to Fix It | Accelr',
    description: locale === 'nl'
      ? 'Als jij 80% van de deals sluit, groeit je bedrijf niet verder dan wat jij persoonlijk kunt verkopen. Ontdek hoe je schaalt.'
      : 'If you close 80% of deals, your company won\'t grow beyond what you can personally sell. Discover how to scale.',
  };
}

export default async function AfhankelijkVanFounderPage({ params }: { params: Promise<{ locale: string }> }) {
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
            {locale === 'nl' ? 'De founder blijft de beste verkoper' : 'The founder remains the best seller'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Dat is geen compliment — dat is een plafond. Je bedrijf kan niet groeien voorbij wat jij persoonlijk kunt verkopen.'
              : 'That\'s not a compliment — that\'s a ceiling. Your company can\'t grow beyond what you can personally sell.'}
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
                ? 'Jij sluit 80% van de deals. Je team sluit de rest, maar niet consistent. Zonder jou draait de machine niet.'
                : 'You close 80% of deals. Your team closes the rest, but not consistently. Without you, the machine doesn\'t run.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Het probleem is niet dat je team niet kan verkopen. Het probleem is dat er geen systeem is dat ze kunnen volgen. Geen playbooks, geen processen, geen automatie.'
                : 'The problem isn\'t that your team can\'t sell. The problem is that there\'s no system they can follow. No playbooks, no processes, no automation.'}
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Herkenningspunten:' : 'Recognition points:'}
          </h3>
          <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Jij sluit de meeste deals persoonlijk' : 'You close most deals personally'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je team weet niet hoe ze deals moeten sluiten' : 'Your team doesn\'t know how to close deals'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Er zijn geen sales playbooks of processen' : 'There are no sales playbooks or processes'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je kunt niet schalen zonder meer mensen aan te nemen' : 'You can\'t scale without hiring more people'}</span>
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
                ? 'Wij bouwen sales playbooks, processen en automatie die je team kan volgen. Niet alleen de tools — het hele systeem: scripts, bezwaarafhandeling, follow-ups, en CRM automations.'
                : 'We build sales playbooks, processes and automation that your team can follow. Not just the tools — the entire system: scripts, objection handling, follow-ups, and CRM automations.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Binnen 8-12 weken heeft je team een werkend systeem dat ze zelf kunnen runnen. Jij kunt focussen op strategie, terwijl je team deals sluit.'
                : 'Within 8-12 weeks your team has a working system they can run themselves. You can focus on strategy while your team closes deals.'}
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
        title={locale === 'nl' ? 'Klaar om te schalen?' : 'Ready to scale?'}
        description={locale === 'nl' ? 'Start met je gratis Score om te zien waar je grootste kansen liggen.' : 'Start with your free Score to see where your biggest opportunities are.'}
        primaryCta={{ text: locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →', href: getLocalizedPath('/score') }}
      />

      <Footer />
    </div>
  );
}

