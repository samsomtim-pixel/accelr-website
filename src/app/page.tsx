import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ExpertiseCard from '@/components/ExpertiseCard'
import ComparisonTable from '@/components/ComparisonTable'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accelr | Wij bouwen sales machines voor B2B bedrijven',
  description: 'Sales infrastructuur die je zelf kunt runnen. Van ICP tot dashboard, van eerste contact tot getekende deal. Voor B2B bedrijven met €500K-€20M omzet.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-green-400 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Sales infrastructuur voor B2B groei
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wij bouwen de sales machine.<br />
            Jij bent eigenaar.
          </h1>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
            De meeste bureaus runnen campagnes voor je. Wij bouwen infrastructuur die je zelf kunt runnen. Van ICP tot dashboard. Van eerste contact tot getekende deal.
          </p>
          <p className="text-lg mb-8 font-semibold text-center max-w-2xl mx-auto" style={{ color: 'var(--text-primary)' }}>
            Binnen 8-12 weken een werkend sales systeem. Niet afhankelijk van ons — gebouwd op jouw proces, jouw data, jouw CRM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/diagnose"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Start gratis Scan →
            </Link>
            <Link
              href="/blueprint"
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Bekijk het Blueprint →
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>3 minuten</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Gratis rapport</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Geen verplichtingen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Je hebt het allemaal al geprobeerd
          </h2>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            75% van AI-oplossingen levert geen ROI. Niet omdat de technologie slecht is — maar omdat niemand het werkend maakt in jouw bedrijf.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Tools gekocht die niemand gebruikt</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Je hebt €10K+ aan sales tools. HubSpot, Apollo, LinkedIn Navigator. Maar je team gebruikt ze als dure adresboekjes. Het probleem is niet de tool — het is dat niemand het systeem heeft ontworpen.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Freelancers ingehuurd die vertrokken</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Een LinkedIn specialist hier, een email expert daar. Elk bouwde iets. Maar niemand heeft het geheel ontworpen. En toen ze vertrokken, ging het systeem met ze mee.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>De founder blijft de beste verkoper</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Jij sluit 80% van de deals. Dat is geen compliment — dat is een plafond. Je bedrijf kan niet groeien voorbij wat jij persoonlijk kunt verkopen.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Outreach die in spam belandt</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Google en Microsoft hebben de regels veranderd. Zonder de juiste SPF/DKIM/DMARC infrastructuur belandt je outreach in spam. Dit is niet iets dat je er even bij doet.
              </p>
            </div>
          </div>
          <p className="text-xl font-semibold text-center italic" style={{ color: 'var(--text-primary)' }}>
            Het probleem is niet de technologie. Het probleem is dat niemand het werkend heeft gemaakt in jouw bedrijf. Dat is precies wat wij doen.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Complete sales infrastructuur
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Geen losse tools. Geen campagnes die stoppen als het budget op is. Eén geïntegreerd systeem dat eigendom is van jou, dat draait zonder dagelijkse input, en dat resultaat levert.
          </p>
          <div className="text-center text-2xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            TARGET → OUTREACH → CONVERT → SCALE
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ExpertiseCard
              number="/01"
              title="TARGET"
              subtitle="Weet wie je moet benaderen, en wanneer"
              features="ICP & Marktanalyse · Lead Intelligence · Koopsignalen Detectie"
              priceNote="Ook los beschikbaar vanaf €500/maand"
              href="/expertise/target"
            />
            <ExpertiseCard
              number="/02"
              title="OUTREACH"
              subtitle="Bereik op schaal, zonder dat het spammy voelt"
              features="Email Automation · LinkedIn Social Selling · Multi-channel Orchestration"
              priceNote="Ook los beschikbaar vanaf €1.000/maand"
              href="/expertise/outreach"
            />
            <ExpertiseCard
              number="/03"
              title="CONVERT"
              subtitle="Van gesprek naar handtekening"
              features="Sales Playbooks · CRM Setup · Deal Flow Optimization"
              priceNote="Ook los beschikbaar vanaf €2.500"
              href="/expertise/convert"
            />
            <ExpertiseCard
              number="/04"
              title="SCALE"
              subtitle="Weet wat werkt. Doe meer van wat werkt."
              features="Sales Dashboards · Performance Analytics · Continuous Optimization"
              priceNote="Ook los beschikbaar vanaf €1.500"
              href="/expertise/scale"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Waarom Accelr anders is
          </h2>
          <ComparisonTable
            columns={['Aspect', 'Accelr', 'Typisch bureau']}
            rows={[
              { label: 'Focus', values: ['Complete sales infrastructuur', 'Losse campagnes of kanalen'] },
              { label: 'Na het project', values: ['Systeem blijft draaien — het is van jou', 'Stopt als het contract stopt'] },
              { label: 'Eigendom', values: ['Jouw CRM, jouw data, jouw processen', 'In hun platform, beperkt toegankelijk'] },
              { label: 'Schalen', values: ['Meer output, zelfde systeem', 'Meer output = meer kosten'] },
              { label: 'Aanpak', values: ['Systemen bouwen + training + overdracht', 'Uren verkopen, rapportages leveren'] },
              { label: 'AI & automation', values: ['Native in elk onderdeel', 'Handmatig of basis tooling'] },
            ]}
          />
        </div>
      </section>

      {/* For Who Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Voor wie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Dit is voor jou als:</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je bent een B2B bedrijf met €500K - €20M omzet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je hebt een bewezen product maar sales groeit niet zoals je wilt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Sales draait om individuen, niet om een systeem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je wilt schalen zonder maanden te experimenteren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je wilt eigenaar zijn van je sales infrastructuur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je hebt moeite om goede sales mensen te vinden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Je wilt meer afspraken met hetzelfde aantal FTE</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>Dit is niet voor jou als:</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60">✗</span>
                  <span>Je zoekt een magic bullet (die bestaat niet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60">✗</span>
                  <span>Je wilt alleen "leads kopen" zonder systeem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60">✗</span>
                  <span>Je zoekt iemand die de verkoop voor je doet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60">✗</span>
                  <span>Je hebt geen tijd om 2 uur per week te investeren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60">✗</span>
                  <span>Je hebt nog geen product-market fit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Investering
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Het complete Sales Growth Blueprint™ begint vanaf €5.000. Losse engines vanaf €500/maand. Altijd transparant, geen verrassingen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnose"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Start gratis Scan →
            </Link>
            <Link
              href="/blueprint"
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Bekijk alle opties →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Veelgestelde vragen
          </h2>
          <FAQAccordion
            items={[
              {
                question: 'Wat als ik nog geen sales team heb?',
                answer: 'Geen probleem. We bouwen het systeem zo dat jij als founder het kunt runnen, en dat het klaar is om op te schalen wanneer je je eerste salesperson aanneemt.',
              },
              {
                question: 'Hoe snel zie ik resultaat?',
                answer: 'De meeste klanten zien binnen 4-6 weken de eerste meetings binnenkomen. Het volledige systeem draait na 8-12 weken.',
              },
              {
                question: 'Welke tools gebruiken jullie?',
                answer: 'Afhankelijk van jouw situatie: HubSpot of Pipedrive (CRM), Instantly of Smartlead (email), Sales Navigator en Dripify (LinkedIn), Apollo en Clay (data), n8n of Make (automation), Looker Studio (dashboards).',
              },
              {
                question: 'Kan ik ook alleen een specifiek onderdeel afnemen?',
                answer: 'Ja. Naast het complete Blueprint kun je ook losse engines afnemen, zoals een ICP Engine, Email Engine, of CRM implementatie. Bekijk de expertise pagina\'s voor details en prijzen.',
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Klaar om eigenaar te worden van je sales groei?"
        description="In 3 minuten weet je waar je grootste kansen liggen. Gratis, vrijblijvend, en je krijgt binnen 24 uur een persoonlijk rapport."
        primaryCta={{ text: 'Start gratis Scan →', href: '/diagnose' }}
        secondaryCta={{ text: 'Bekijk Blueprint →', href: '/blueprint' }}
      />

      {/* Footer */}
      <footer className="px-6 py-12 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                accelr<span className="text-green-500">.</span>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Sales-infrastructuur voor B2B groei.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Navigatie</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/expertise" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Expertise</Link></li>
                <li><Link href="/blueprint" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Blueprint</Link></li>
                <li><Link href="/over-ons" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Over Ons</Link></li>
                <li><Link href="/diagnose" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Diagnose</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Contact</h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                tim@accelr.nl
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Account</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/login" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm pt-8 border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            © 2026 Accelr. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  )
}
