import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'nl' ? 'Over Accelr | AI-Powered Sales Machines' : 'About Accelr | AI-Powered Sales Machines',
    description: locale === 'nl'
      ? 'Accelr bouwt AI-powered sales machines voor B2B bedrijven. 10+ jaar ervaring in adtech en B2B sales. Haarlem, Nederland.'
      : 'Accelr builds AI-powered sales machines for B2B companies. 10+ years experience in adtech and B2B sales. Haarlem, Netherlands.',
  };
}

export default async function OverOnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Wij bouwen AI-powered sales machines' : 'We build AI-powered sales machines'}
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {locale === 'nl' ? 'Niet bureauwerk. Werkende systemen die je zelf kunt runnen.' : 'Not agency work. Working systems you can run yourself.'}
          </p>
        </div>
      </section>

      {/* About Tim */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {locale === 'nl' ? 'Over Tim' : 'About Tim'}
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl'
                  ? 'Ik ben Tim. 10+ jaar in adtech en B2B sales bij snelgroeiende tech-bedrijven. Ik heb salesteams opgebouwd, strategieën geïmplementeerd, en outbound flows gebouwd die consistent omzet opleveren.'
                  : 'I\'m Tim. 10+ years in adtech and B2B sales at fast-growing tech companies. I\'ve built sales teams, implemented strategies, and built outbound flows that consistently generate revenue.'}
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl'
                  ? 'Eerst als koper van sales tools, als eindverantwoordelijke voor revenue. Ik weet hoe het voelt om tools te kopen die niet werken. Om freelancers in te huren die iets bouwen dat kapot gaat zodra ze vertrekken. Om te groeien op onderbuik in plaats van op data.'
                  : 'First as a buyer of sales tools, as ultimately responsible for revenue. I know how it feels to buy tools that don\'t work. To hire freelancers who build something that breaks as soon as they leave. To grow on gut feeling instead of data.'}
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'nl'
                  ? 'Nu bouw ik de systemen die ik zelf had willen hebben. Gespecialiseerd in het bouwen van AI-gedreven sales automation — powered by tools als n8n, Clay, en Make — die bedrijven zelf kunnen runnen.'
                  : 'Now I build the systems I wish I had myself. Specialized in building AI-driven sales automation — powered by tools like n8n, Clay, and Make — that companies can run themselves.'}
              </p>
              <p className="text-lg leading-relaxed font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                {locale === 'nl'
                  ? 'De meeste sales problemen zijn geen mensen-problemen. Het zijn systeem-problemen.'
                  : 'Most sales problems aren\'t people problems. They\'re system problems.'}
              </p>
              <Link
                href="https://linkedin.com/in/timsamsom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                [LinkedIn → linkedin.com/in/timsamsom]
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <Image
                src="/tim-sam.jpeg"
                alt="Tim Samsom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Accelr */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {locale === 'nl' ? 'Waarom Accelr bestaat' : 'Why Accelr exists'}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              {locale === 'nl'
                ? '95% van AI-implementaties faalt. Niet omdat de technologie slecht is — maar omdat niemand het werkend maakt in jouw bedrijf.'
                : '95% of AI implementations fail. Not because the technology is bad — but because nobody makes it work in your company.'}
            </p>
            <p>
              {locale === 'nl'
                ? 'Wij bestaan omdat de deployment gap bestaat. De kloof tussen een tool kopen en die tool werkend krijgen. Tussen een AI SDR tool testen en een AI SDR systeem dat 24/7 meetings boekt.'
                : 'We exist because the deployment gap exists. The gap between buying a tool and making that tool work. Between testing an AI SDR tool and an AI SDR system that books meetings 24/7.'}
            </p>
            <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              {locale === 'nl'
                ? 'Elk Nederlands MKB verdient een AI-powered sales machine.'
                : 'Every Dutch SME deserves an AI-powered sales machine.'}
            </p>
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

