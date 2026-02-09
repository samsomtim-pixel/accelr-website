import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Over Accelr | Sales Infrastructure Builder',
  description: 'Accelr bouwt sales machines voor B2B bedrijven. 10+ jaar ervaring in adtech en B2B sales. Haarlem, Nederland.',
}

export default function OverOnsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-20 md:py-24" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wij bouwen sales machines
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Niet bureauwerk. Werkende systemen die je zelf kunt runnen.
          </p>
        </div>
      </section>

      {/* About Tim */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Over Tim
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Ik ben Tim. 10+ jaar in adtech en B2B sales bij snelgroeiende tech-bedrijven. Ik heb salesteams opgebouwd, strategieën geïmplementeerd, en outbound flows gebouwd die consistent omzet opleveren.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Eerst als koper van sales tools, als eindverantwoordelijke voor revenue. Ik weet hoe het voelt om tools te kopen die niet werken. Om freelancers in te huren die iets bouwen dat kapot gaat zodra ze vertrekken. Om te groeien op onderbuik in plaats van op data.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Nu bouw ik de systemen die ik zelf had willen hebben. Gespecialiseerd in het bouwen van AI-gedreven sales automation — powered by tools als n8n, Clay, en Make — die bedrijven zelf kunnen runnen.
              </p>
              <p className="text-lg leading-relaxed font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                De meeste sales problemen zijn geen mensen-problemen. Het zijn systeem-problemen.
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

      {/* Approach Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Onze aanpak
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                1. Systemen, geen campagnes
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Een campagne stopt als het budget op is. Een systeem blijft draaien. Alles wat we bouwen is ontworpen om te blijven werken — ook zonder ons.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                2. Eigendom, niet afhankelijkheid
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Jouw CRM, jouw automations, jouw data, jouw processen. We bouwen op jouw naam, in jouw accounts, met jouw inloggegevens. Als we morgen stoppen, draait alles door.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                3. Integratie, geen fragmenten
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                De meeste bedrijven hebben losse tools die niet met elkaar praten. Wij bouwen één geïntegreerd systeem waarin data automatisch stroomt van prospect naar deal naar dashboard.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                4. Uitvoering, niet advies
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We schrijven geen rapporten die in een la verdwijnen. We implementeren. We configureren. We trainen. En we blijven beschikbaar tot het draait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>CRM</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>HubSpot, Pipedrive</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Outbound</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Instantly, Smartlead, Apollo</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>LinkedIn</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Sales Navigator, Dripify</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Data</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Apollo, Clay, ZoomInfo</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Automation</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>n8n, Make</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Analytics</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Native CRM, Looker Studio</p>
            </div>
          </div>
          <p className="text-sm text-center italic" style={{ color: 'var(--text-muted)' }}>
            We zijn tool-agnostisch. We kiezen wat het beste werkt voor jouw situatie.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Contact
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Tim Samsom
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Founder, Accelr
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              tim@accelr.nl
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Haarlem, Nederland
            </p>
          </div>
          <CTASection
            title=""
            primaryCta={{ text: '→ Plan een gratis Scan', href: '/diagnose' }}
          />
        </div>
      </section>

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
