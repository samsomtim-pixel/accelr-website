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
      ? 'Geen Pipeline? Zo Los Je Het Op | Accelr' 
      : 'No Pipeline? Here\'s How to Fix It | Accelr',
    description: locale === 'nl'
      ? 'Geen gestructureerde sales pipeline betekent geen voorspelbare omzet. Ontdek hoe je een werkend systeem bouwt.'
      : 'No structured sales pipeline means no predictable revenue. Discover how to build a working system.',
  };
}

export default async function GeenPipelinePage({ params }: { params: Promise<{ locale: string }> }) {
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
            {locale === 'nl' ? 'Geen pipeline? Geen probleem.' : 'No pipeline? No problem.'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'nl'
              ? 'Een gestructureerde sales pipeline is de basis van voorspelbare groei. Zonder pipeline weet je niet waar je staat, waar je naartoe gaat, of waar het lekt.'
              : 'A structured sales pipeline is the foundation of predictable growth. Without a pipeline, you don\'t know where you are, where you\'re going, or where it\'s leaking.'}
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
                ? 'Je hebt deals, maar je weet niet hoeveel. Je hebt leads, maar je weet niet waar ze staan. Je hebt targets, maar je weet niet of je ze gaat halen.'
                : 'You have deals, but you don\'t know how many. You have leads, but you don\'t know where they stand. You have targets, but you don\'t know if you\'ll hit them.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Dit is het klassieke "founder sales" probleem: alles zit in je hoofd, in spreadsheets, of in losse tools die niemand gebruikt. Er is geen systeem, geen structuur, geen voorspelbaarheid.'
                : 'This is the classic "founder sales" problem: everything is in your head, in spreadsheets, or in loose tools that nobody uses. There\'s no system, no structure, no predictability.'}
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Herkenningspunten:' : 'Recognition points:'}
          </h3>
          <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je weet niet hoeveel deals er in je pipeline zitten' : 'You don\'t know how many deals are in your pipeline'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je kunt niet voorspellen wanneer deals sluiten' : 'You can\'t predict when deals will close'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Je hebt geen overzicht van waar leads staan' : 'You have no overview of where leads stand'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400/60">✗</span>
              <span>{locale === 'nl' ? 'Deals vallen tussen wal en schip' : 'Deals fall through the cracks'}</span>
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
                ? 'Wij bouwen je een gestructureerde sales pipeline in je CRM. Niet alleen de tool — het hele systeem: stages, automations, follow-ups, en dashboards.'
                : 'We build you a structured sales pipeline in your CRM. Not just the tool — the entire system: stages, automations, follow-ups, and dashboards.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Binnen 8-12 weken heb je een werkend systeem dat je zelf kunt runnen. Je weet precies waar elke deal staat, wanneer hij sluit, en waar het lekt.'
                : 'Within 8-12 weeks you have a working system that you can run yourself. You know exactly where every deal stands, when it closes, and where it leaks.'}
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
        title={locale === 'nl' ? 'Klaar om je pipeline te bouwen?' : 'Ready to build your pipeline?'}
        description={locale === 'nl' ? 'Start met je gratis Score om te zien waar je grootste kansen liggen.' : 'Start with your free Score to see where your biggest opportunities are.'}
        primaryCta={{ text: locale === 'nl' ? 'Start gratis Score →' : 'Start free Score →', href: getLocalizedPath('/score') }}
      />

      <Footer />
    </div>
  );
}

