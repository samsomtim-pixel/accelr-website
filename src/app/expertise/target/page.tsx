import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ResultsTable from '@/components/ResultsTable'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Target Expertise | ICP, Lead Intelligence & Koopsignalen | Accelr',
  description: 'Weet wie je moet benaderen en wanneer. ICP-analyse, verrijkte prospect data en koopsignalen detectie. Vanaf €500/maand.',
}

export default function TargetExpertisePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Weet wie. Weet wanneer.<br />
            Weet waarom.
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            De juiste mensen, op het juiste moment, om de juiste reden. Niet schieten met hagel — maar precisiework.
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

      {/* Three Systems */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Drie systemen die samenwerken
          </h2>
          <div className="space-y-12">
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                1. ICP ENGINE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Van "ongeveer" naar "precies"</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Klantanalyse op basis van je beste klanten. Patroonherkenning die vertelt welke bedrijven het meeste potentieel hebben. Marktgrootte berekening die laat zien hoe groot je speelveld is.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: ICP rapport + 250 geverifieerde prospects + concurrentiematrix
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €2.500 eenmalig
              </p>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                2. DATA ENGINE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Verse prospects, doorlopend</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Multi-source lead sourcing die je pipeline vult met bedrijven die aan je ICP voldoen. Verrijkt met contactdata, geverifieerd, en automatisch gesynct met je CRM.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: 500-2.500 prospects/maand, &gt;95% deliverable email adressen
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: Vanaf €750/maand
              </p>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                3. SIGNAL ENGINE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Weet wanneer ze klaar zijn</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Koopsignalen detectie: nieuwe hires, funding rondes, uitbreidingen, vacatures, technologieveranderingen. Weet wanneer een prospect klaar is om te praten — voordat je concurrent het weet.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: Dagelijkse alerts, geprioriteerde lijst, CRM-integratie
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: Vanaf €500/maand
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
            columns={['Metric', 'Zonder Target', 'Met Target']}
            rows={[
              { label: 'ICP definitie', values: ['"MKB bedrijven"', 'Specifiek, filterbaar, meetbaar'] },
              { label: 'Data kwaliteit', values: ['60-70% correct', '>95% geverifieerd'] },
              { label: 'Tijd aan prospecting', values: ['10+ uur/week', '<2 uur/week'] },
              { label: 'Response rate', values: ['2-5%', '8-15%'] },
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
