import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ResultsTable from '@/components/ResultsTable'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scale Expertise | Sales Dashboards & Analytics | Accelr',
  description: 'Weet wat werkt. Unified dashboards, funnel analytics en data-gedreven beslissingen. Vanaf €1.500.',
}

export default function ScaleExpertisePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Weet wat werkt.<br />
            Schaal wat werkt.
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Data die beslissingen stuurt in plaats van achteraf bevestigt.
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

      {/* What We Build */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat we bouwen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>1. UNIFIED DASHBOARD</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Eén view over je hele sales stack. Pipeline, deals, activity, performance, attributie.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>2. FUNNEL ANALYTICS</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Waar lekt het? Conversie per stap, bottlenecks, benchmarks.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>3. ATTRIBUTIE</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Wat werkt eigenlijk? First/last/multi-touch.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>4. FORECASTING</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Gewogen pipeline, win probability, accuracy tracking.
              </p>
            </div>
            <div className="rounded-xl p-6 md:col-span-2" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>5. ALERTS</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Automatische notificaties bij stale deals, drops, anomalieën.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Investering
          </h2>
          <ResultsTable
            columns={['Wat', 'Investering']}
            rows={[
              { label: 'Dashboard setup (unified view)', values: ['€1.500-€3.000 eenmalig'] },
              { label: 'Full Scale (alle 5 componenten)', values: ['€2.500-€5.000 eenmalig'] },
              { label: 'Doorlopende optimalisatie', values: ['€1.000/maand'] },
            ]}
          />
        </div>
      </section>

      {/* Results Table */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Resultaten
          </h2>
          <ResultsTable
            columns={['Metric', 'Zonder Scale', 'Met Scale']}
            rows={[
              { label: 'Rapportage tijd', values: ['4+ uur/week', '<30 min/week'] },
              { label: 'Forecast accuracy', values: ['40-60%', '70-85%'] },
              { label: 'Beslissing latency', values: ['Dagen', 'Real-time'] },
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
