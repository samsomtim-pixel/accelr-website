import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ResultsTable from '@/components/ResultsTable'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Convert Expertise | Sales Playbooks & CRM | Accelr',
  description: 'Van gesprek naar handtekening. Sales playbooks en CRM systemen die je team laten presteren. Vanaf €2.500.',
}

export default function ConvertExpertisePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Van gesprek naar<br />
            handtekening
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Systemen die je team helpen closen. Zodat niet alleen de founder deals kan sluiten, maar iedereen in het team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blueprint"
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Bekijk het Blueprint →
            </Link>
            <Link
              href="/diagnose"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Plan een Scan →
            </Link>
          </div>
        </div>
      </section>

      {/* Two Systems */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Twee systemen die samenwerken
          </h2>
          <div className="space-y-12">
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                1. SALES PLAYBOOK
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Iedereen verkoopt zoals je beste verkoper</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Een compleet, doorzoekbaar playbook met scripts, bezwaarafhandeling, discovery vragen, en deal-specifieke templates. Inclusief onboarding flow zodat nieuwe teamleden in weken productief zijn — niet in maanden.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: Doorzoekbare kennisbank + training materiaal + onboarding checklist
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €3.500-€5.000 eenmalig
              </p>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                2. CRM SYSTEEM
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Een CRM dat werkt zoals jij werkt</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Configuratie op maat van jouw salesproces. 10-15 automations die handmatig werk elimineren. 5+ integraties met je bestaande tools. Dashboards die je team dagelijks gebruikt.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: Werkend CRM + automations + integraties + training + 30 dagen support
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €2.500-€4.500 eenmalig
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                Support: €1.000/maand optioneel
              </p>
            </div>
            <div className="rounded-xl p-8 bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20">
              <p className="text-lg font-semibold text-center" style={{ color: 'var(--text-primary)' }}>
                GECOMBINEERD: €5.000-€8.000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Resultaten
          </h2>
          <ResultsTable
            columns={['Metric', 'Zonder Convert', 'Met Convert']}
            rows={[
              { label: 'Onboarding nieuwe rep', values: ['4-6 maanden', '4-6 weken'] },
              { label: 'Quota attainment', values: ['~45%', '70%+'] },
              { label: 'Deal lekkage', values: ['Hoog (onbekend)', '<10%'] },
              { label: 'CRM data kwaliteit', values: ['40-60%', '>90%'] },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title=""
        primaryCta={{ text: '→ Plan een gesprek', href: '/diagnose' }}
        secondaryCta={{ text: '→ Bekijk Blueprint', href: '/blueprint' }}
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
