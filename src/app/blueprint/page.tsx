import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ProcessSteps from '@/components/ProcessSteps'
import PricingCard from '@/components/PricingCard'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sales Growth Blueprint™ | Van Ad-Hoc naar Schaalbaar in 12 Weken | Accelr',
  description: 'Eén traject, complete sales transformatie. Van diagnose tot draaiend systeem in 8-12 weken. €5.000-€12.500. Alles inbegrepen.',
}

export default function BlueprintPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Van ad-hoc naar voorspelbaar<br />
            in 12 weken
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Het Sales Growth Blueprint™ is geen adviestraject. Het is een implementatietraject. Geen rapport dat in een la verdwijnt — een compleet systeem dat draait aan het einde van het traject. En dat jij bezit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              €5.000 – €12.500
            </div>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              8-12 weken
            </div>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Alles inbegrepen
            </div>
          </div>
          <Link
            href="/diagnose"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors inline-block"
          >
            Start met een gratis Scan →
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Waarom losse oplossingen niet werken
          </h2>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Je hebt waarschijnlijk al van alles geprobeerd. Een freelancer voor LinkedIn. Een tool voor email outreach. Een CRM dat half is ingevuld. Een dashboard dat niemand bekijkt.
          </p>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            75% van AI-oplossingen levert geen verwachte ROI. Niet omdat de technologie slecht is, maar omdat er een enorme kloof zit tussen een tool kopen en die tool werkend krijgen in jouw bedrijf.
          </p>
          <p className="text-lg leading-relaxed font-semibold" style={{ color: 'var(--text-primary)' }}>
            Het probleem is niet de tools. Het probleem is dat niemand het geheel heeft ontworpen.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat zit erin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>DIAGNOSE & STRATEGIE</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Sales audit van je huidige situatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>ICP analyse en marktgrootte berekening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Bottleneck identificatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Implementatie roadmap</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>TARGET SYSTEMEN</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>ICP criteria operationeel gemaakt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Lead sourcing setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Trigger scanning configuratie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Prospect database opgebouwd</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>OUTREACH SYSTEMEN</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Email infrastructuur (SPF, DKIM, DMARC, opwarming)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Outbound sequences ontworpen en live</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>LinkedIn playbook en automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Multi-channel orchestratie</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>CONVERT SYSTEMEN</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>CRM configuratie op maat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Pipeline automations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Sales playbook met scripts en bezwaarafhandeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Follow-up systemen</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>SCALE SYSTEMEN</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Sales dashboard met één unified view</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>KPI tracking en rapportage</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>TRAINING & SUPPORT</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Team training sessies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Complete documentatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>30-90 dagen support na oplevering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Het traject
          </h2>
          <ProcessSteps
            steps={[
              { number: 'Week 1-2', title: 'SCAN', description: 'Kickoff, data verzamelen, stakeholder interviews, quick wins identificeren en direct implementeren.' },
              { number: 'Week 3-4', title: 'PLAN', description: 'ICP definitie, tech stack selectie, prioriteiten bepalen, concrete roadmap met deadlines.' },
              { number: 'Week 5-8', title: 'BUILD', description: 'Systemen configureren, automations bouwen, integraties leggen, sequences schrijven, testen en itereren.' },
              { number: 'Week 9-12', title: 'RUN', description: 'Go-live, team training, bijsturing op basis van data, documentatie afronden, volledige overdracht.' },
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="investering" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Investering
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              title="STARTER"
              price="€5.000"
              description="Best voor solo founder"
              features={[
                'Best voor: Solo founder, 1 ICP',
                'Doorlooptijd: 8 weken',
                'Scope: 1 kanaal, basis CRM',
                'Training: 1 sessie + docs',
                'Support: 30 dagen',
              ]}
              cta={{ text: 'Start Scan', href: '/diagnose' }}
            />
            <PricingCard
              featured
              title="PROFESSIONAL"
              price="€8.500"
              description="Meest gekozen"
              features={[
                'Best voor: Team 2-5 personen, meerdere ICPs',
                'Doorlooptijd: 10 weken',
                'Scope: Multi-channel, CRM + automations',
                'Training: 2 sessies + playbook',
                'Support: 60 dagen',
              ]}
              cta={{ text: 'Start Scan', href: '/diagnose' }}
            />
            <PricingCard
              title="ENTERPRISE"
              price="€12.500"
              description="Voor grotere teams"
              features={[
                'Best voor: Groter team, complexe setup',
                'Doorlooptijd: 12 weken',
                'Scope: Alles + migratie + custom',
                'Training: Complete training',
                'Support: 90 dagen',
              ]}
              cta={{ text: 'Start Scan', href: '/diagnose' }}
            />
          </div>
          <p className="text-sm mt-8 text-center" style={{ color: 'var(--text-muted)' }}>
            Niet zeker welk niveau? Start met een gratis Scan. We adviseren op basis van je situatie.
          </p>
        </div>
      </section>

      {/* All Options */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Alle opties op een rij
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard
              label="START HIER"
              title="Gratis Scan"
              price="Gratis"
              period="3 min + 24 uur"
              description="Situatie analyse en aanbeveling"
              features={[
                'Situatie analyse',
                'Geschat omzetpotentieel',
                'Aanbeveling volgende stap',
              ]}
              cta={{ text: 'Start gratis Scan', href: '/diagnose' }}
            />
            <PricingCard
              label="MEEST GEKOZEN"
              featured
              title="Sales Growth Blueprint™"
              price="€5.000 – €12.500"
              period="8-12 weken"
              description="Complete transformatie"
              features={[
                'Complete funnel analyse en roadmap',
                'Implementatie van alle systemen',
                'Team training en documentatie',
                '30-90 dagen support',
              ]}
              cta={{ text: 'Bekijk Blueprint', href: '#investering' }}
            />
            <PricingCard
              title="Losse Engines"
              price="Vanaf €500/maand"
              period="of €2.500 eenmalig"
              description="Specifieke expertise"
              features={[
                'ICP Engine, Data Engine, Signal Engine',
                'Email Engine, LinkedIn Engine',
                'Sales Playbook, CRM Systeem',
                'Dashboards, Analytics',
              ]}
              cta={{ text: 'Bekijk alle expertise', href: '/expertise' }}
            />
            <PricingCard
              title="Retainer Partnership"
              price="Vanaf €4.000/maand"
              period="Geen lock-in"
              description="Doorlopende optimalisatie"
              features={[
                'Doorlopende optimalisatie en uitbreiding',
                'Maandelijkse rapportage',
                'Prioriteitssupport',
              ]}
              cta={{ text: 'Na Blueprint of Scan', href: '/blueprint' }}
            />
          </div>
          <p className="text-sm mt-8 text-center" style={{ color: 'var(--text-muted)' }}>
            25% korting op het Blueprint in ruil voor een case study. Interesse? Vermeld het in je Scan.
          </p>
        </div>
      </section>

      {/* After Blueprint */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Na het Blueprint
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Optie 1: Zelf verder</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Je hebt een werkend systeem, documentatie, en een getraind team. Support pakket beschikbaar voor €1.000/maand.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Optie 2: Doorlopend Partnership</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Wij blijven betrokken. Doorlopende optimalisatie, uitbreiding naar nieuwe markten of kanalen, en strategische begeleiding. Vanaf €4.000/maand. Geen lock-in.
              </p>
            </div>
          </div>
          <p className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
            Plus: "Nog niet klaar voor het volledige Blueprint? Je kunt ook starten met een los onderdeel."
          </p>
          <div className="text-center">
            <Link href="/expertise/target" className="text-green-400 hover:text-green-300 font-semibold">
              → Bekijk alle expertise
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion
            items={[
              {
                question: 'Hoe weet ik welk niveau ik nodig heb?',
                answer: 'Start met de gratis Scan. Op basis van je situatie adviseren we het juiste niveau. De meeste bedrijven met 1-2 personen in sales starten met Starter; teams vanaf 3 personen met Professional.',
              },
              {
                question: 'Wat als ik geen CRM heb?',
                answer: 'Dan implementeren we er een. HubSpot (gratis of betaald) of Pipedrive, afhankelijk van je behoeften. Dit zit inbegrepen in het Blueprint.',
              },
              {
                question: 'Hoeveel tijd kost het mij?',
                answer: 'Gemiddeld 2-4 uur per week. We doen het zware werk, maar we hebben jouw input nodig voor ICP-validatie, content goedkeuring, en feedback.',
              },
              {
                question: 'Wat als het niet werkt?',
                answer: 'De support-periode (30-90 dagen) is er precies voor. We monitoren, optimaliseren, en fixen tot het draait.',
              },
              {
                question: 'Kan ik eerst klein beginnen?',
                answer: 'Ja. Je kunt starten met een losse engine en later opschalen naar het volledige Blueprint.',
              },
              {
                question: 'Moet ik zelf de tools afnemen?',
                answer: 'Ja, de tools staan op jouw naam. Dat is het hele punt: het is jouw infrastructuur. Wij adviseren welke tools het beste passen en configureren alles.',
              },
              {
                question: 'Wat is het verschil tussen de Scan en het Blueprint?',
                answer: 'De Scan is een gratis, geautomatiseerde analyse van je huidige situatie (3 minuten). Het Blueprint is een betaald implementatietraject van 8-12 weken waarin we je hele sales infrastructuur bouwen.',
              },
              {
                question: 'Wat als ik al tools heb die ik nauwelijks gebruik?',
                answer: 'Dan beginnen we daar. Vaak is 70% van de oplossing al aanwezig maar niet goed geconfigureerd. We bouwen voort op wat je hebt.',
              },
              {
                question: 'Waarom is de Scan gratis?',
                answer: 'Omdat het ons helpt inschatten of we kunnen helpen. En het geeft jou direct inzicht, zonder risico.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start met een Scan"
        description="Gratis. 3 minuten. Binnen 24 uur een persoonlijk rapport met je grootste kansen."
        primaryCta={{ text: 'Plan je gratis Scan →', href: '/diagnose' }}
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
                <li><Link href="/expertise/target" className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Expertise</Link></li>
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
