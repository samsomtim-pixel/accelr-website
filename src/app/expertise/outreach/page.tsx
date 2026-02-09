import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ResultsTable from '@/components/ResultsTable'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Outreach Expertise | Email & LinkedIn Automation | Accelr',
  description: 'Bereik op schaal zonder spam. Email automation en LinkedIn systemen met de juiste deliverability infrastructuur. Vanaf €1.000/maand.',
}

export default function OutreachExpertisePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Bereik op schaal.<br />
            Zonder spam.
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Relevante outreach naar de juiste mensen, op het juiste moment. Met infrastructuur die ervoor zorgt dat je emails daadwerkelijk aankomen.
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
                1. EMAIL ENGINE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Meetings boeken terwijl je slaapt</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Volledige email infrastructure setup (SPF, DKIM, DMARC, domeinen, opwarming), gepersonaliseerde sequences, A/B testing, en deliverability monitoring. Google en Microsoft wijzen non-compliant senders af — wij zorgen dat jij compliant bent.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: 200-500 emails/dag capacity, geteste templates, deliverability dashboard
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €1.500-€2.500/maand managed
              </p>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                2. LINKEDIN ENGINE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Van onzichtbaar naar top-of-mind</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Profiel optimalisatie, content strategie, geautomatiseerde connectie-verzoeken, en DM sequences. Word zichtbaar bij de decision makers die ertoe doen.
              </p>
              <p className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Output: Geoptimaliseerd profiel, 4-8 posts/maand, automated sequences
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €1.000-€2.000/maand managed
              </p>
            </div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                3. MULTI-CHANNEL ORCHESTRATIE
              </h3>
              <p className="text-lg text-green-400 font-semibold mb-4">Email + LinkedIn &gt; email + LinkedIn apart</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Cross-channel sequences die slim afwisselen tussen email, LinkedIn, en telefoon. Met timing die gebaseerd is op engagement data, niet op een vast schema.
              </p>
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Prijs: €2.000-€3.000/maand managed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Sequence */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Voorbeeld sequence
          </h2>
          <div className="rounded-xl p-8 font-mono text-sm" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
            <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <div>DAG 1    Email #1 — Waardevolle insight, geen pitch</div>
              <div>DAG 3    LinkedIn connectie — Persoonlijk verzoek</div>
              <div>DAG 5    Email #2 — Follow-up met case of data</div>
              <div>DAG 7    LinkedIn engage — Reageer op hun content</div>
              <div>DAG 10   Email #3 — Case study of social proof</div>
              <div>DAG 14   LinkedIn DM — Direct, relevant, to the point</div>
              <div>DAG 18   Break-up email — Respectvol afsluiten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Resultaten
          </h2>
          <ResultsTable
            columns={['Metric', 'Zonder Outreach', 'Met Outreach']}
            rows={[
              { label: 'Email open rate', values: ['15-25%', '40-60%'] },
              { label: 'Email reply rate', values: ['1-3%', '8-15%'] },
              { label: 'LinkedIn acceptance', values: ['10-20%', '35-50%'] },
              { label: 'Meetings per maand', values: ['2-5', '10-25'] },
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
