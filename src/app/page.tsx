'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Accordion from '@/components/Accordion'
import PricingCard from '@/components/PricingCard'

export default function HomePage() {
  const faqItems = [
    {
      question: 'Wat als ik nog geen sales team heb?',
      answer: 'Dan kies je voor Full Service. Wij voeren uit tot je klaar bent om het zelf over te nemen. Of je blijft bij ons — geen lock-in, maar ook geen druk.'
    },
    {
      question: 'Hoe snel zie ik resultaat?',
      answer: 'Scan: 24 uur. Blueprint: 2 weken. Setup: 4-6 weken extra. Eerste meetings: week 6-8. Consistente pipeline: vanaf maand 3.'
    },
    {
      question: 'Moet ik zelf de tools afnemen?',
      answer: 'Ja. Alles staat op jouw naam en je bent 100% eigenaar van de data, strategieën en playbooks. Wij adviseren welke tools, jij betaalt ze direct. Meestal €200-500/maand.'
    },
    {
      question: 'Welke tools gebruiken jullie?',
      answer: 'Hangt af van de situatie. Meestal: HubSpot of Pipedrive (CRM), Apollo of Clay (data), Instantly of Lemlist (email), LinkedIn Sales Navigator. We kiezen op basis van jouw situatie, niet op basis van partnerships.'
    },
    {
      question: 'Wat als de diagnose uitwijst dat ik iets anders nodig heb?',
      answer: 'Dan zeggen we dat. Soms is het antwoord: \'Neem eerst een goede sales manager aan\' of \'Kijk kritisch naar je product-market fit.\' We verkopen geen Setup als de Blueprint zegt dat het zinloos is.'
    },
    {
      question: 'Waarom is de scan gratis?',
      answer: 'Je moet eerst weten waar je staat voordat je ergens voor betaalt. Het rapport is van jou, ook als we niet verder gaan.'
    },
    {
      question: 'Wat is het verschil tussen de Scan en de Blueprint?',
      answer: 'De Scan is een quick check: 3 minuten invullen, 24 uur later een rapport met je belangrijkste kansen. De Blueprint is een diep traject: 2 weken analyse, een compleet implementatieplan, en een garantie op resultaat.'
    },
    {
      question: 'Wat als ik al tools heb die ik nauwelijks gebruik?',
      answer: 'Perfect uitgangspunt. We kijken eerst wat je hebt voordat we iets nieuws adviseren. Vaak haal je 3x meer uit bestaande tools met de juiste configuratie en strategie.'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 flex items-center min-h-[auto] md:min-h-[90vh] lg:min-h-[95vh] relative" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Build now<span className="text-green-500">.</span><br />
                Scale forever<span className="text-green-500">.</span>
              </h1>
              
              <p className="text-xl text-green-400 font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Wij bouwen sales systemen voor B2B bedrijven die willen groeien.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Binnen 6-8 weken een werkend outbound systeem. Doe de scan en ontdek hoe je structureel meer afspraken maakt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="/diagnose" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Start gratis scan →
                </a>
                <a 
                  href="/blueprint" 
                  className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Bekijk Accelr Blueprint →
                </a>
              </div>
              
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:flex-nowrap items-start min-[400px]:items-center gap-2 min-[400px]:gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
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
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="B2B sales collaboration"
                  className="relative rounded-2xl max-w-[500px] w-full grayscale shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="uitdaging" className="px-6 pt-20 pb-20 -mt-[5vh] md:-mt-[10vh] lg:-mt-[5vh] relative z-10" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Herkenbaar?</h2>
          <p className="text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Acquisitie gebeurt ad hoc — en dat remt je groei.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Je weet dat je moet bellen en mailen, maar er is geen tijd',
              'LinkedIn en email kosten uren, maar leveren weinig op',
              'Elke deal hangt op de founder of een paar key mensen',
              'Je hebt tools gekocht die je voor 20% gebruikt'
            ].map((text, i) => (
              <div 
                key={i}
                className="rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-green-500 text-xl flex-shrink-0">•</span>
                  <p className="pt-1" style={{ color: 'var(--text-secondary)' }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8">
            <p className="text-xl" style={{ color: 'var(--text-primary)' }}>
              <span className="text-green-400 font-semibold">Het echte probleem:</span> de wil is er, maar de strategie en het systeem ontbreken.
            </p>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section id="oplossing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Vijf pijlers. Eén salesmotor.
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
            Ons systeem bestaat uit vijf geïntegreerde onderdelen:
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Pijler</th>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Wat het oplevert</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pijler: 'De juiste prospects vinden', resultaat: 'Pipeline gevuld met bedrijven die écht passen' },
                  { pijler: 'Op het juiste moment contact', resultaat: 'Outreach wanneer prospects klaar zijn om te praten' },
                  { pijler: 'Via het juiste kanaal', resultaat: 'Email, LinkedIn of telefoon — wat werkt voor die prospect' },
                  { pijler: 'Elk gesprek voorbereid', resultaat: 'AI doet research, jij voert het gesprek' },
                  { pijler: 'Continu slimmer', resultaat: 'Eén dashboard, data-gedreven bijsturing' }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                    <td className="py-4 px-4 font-medium" style={{ color: 'var(--text-primary)' }}>{row.pijler}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>{row.resultaat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <a 
            href="/expertise"
            className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-semibold transition-colors"
          >
            Bekijk alle expertise →
          </a>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-section-dark)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-56 h-56 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <img 
                src="/tim-sam.jpeg" 
                alt="Tim Samsom" 
                className="w-full h-full object-cover object-top scale-[1.5]"
              />
            </div>
            <div className="w-full md:w-auto">
              <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>Over de founder</p>
              <p className="text-xl mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Tim Samsom</p>
              <div className="mb-4 space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <p>10+ jaar ervaring in adtech en B2B sales bij snelgroeiende tech-bedrijven. Ik heb salesteams opgebouwd, strategieën geïmplementeerd, en outbound flows gebouwd die consistent omzet opleveren. Gespecialiseerd in het bouwen van AI-gedreven sales automation en agents.</p>
                <p>Wat ik veel zie: bedrijven die groeien maar vastlopen op sales. Te afhankelijk van de founder of een paar key mensen, geen systeem, of tools die niet goed samenwerken.</p>
                <p>Nu help ik B2B bedrijven met het bouwen van een werkende sales infrastructuur — powered by AI — die ze zelf kunnen runnen.</p>
              </div>
              <a href="https://linkedin.com/in/timsamsom" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Dit is voor jou als:</h2>
              <ul className="space-y-4">
                {[
                  'Groeiend B2B bedrijf (€500k-20M omzet)',
                  'Sales draait om individuen, niet om een systeem',
                  'Je wilt structuur in je acquisitie',
                  'Je wilt schalen zonder maanden te experimenteren',
                  'Je wilt meer afspraken met hetzelfde aantal FTE'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-muted)' }}>Dit is niet voor jou als:</h2>
              <ul className="space-y-4">
                {[
                  'Je zoekt een magic bullet (die bestaat niet)',
                  'Je wilt alleen "leads kopen" zonder systeem',
                  'Je hebt geen tijd om 2 uur per week te investeren',
                  'Je wilt geen geld investeren in een betere sales structuur',
                  'Je hebt al meer leads dan je aankan'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Helder. Geen verrassingen.</h2>
          <p className="text-lg mb-12 leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Build je infrastructuur één keer goed, en scale zonder grenzen.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard
              title="Gratis Scan"
              subtitle="Weet waar je staat"
              price="Gratis"
              period="3 min + 24 uur"
              features={[
                'Situatie analyse',
                'Geschat omzetpotentieel',
                'Aanbeveling volgende stap'
              ]}
              ctaText="Start gratis scan"
              ctaLink="/diagnose"
              badge="START HIER"
            />
            
            <PricingCard
              title="Accelr Blueprint"
              subtitle="Volledige diagnose + implementatieplan"
              price="€2.500"
              period="2 weken"
              features={[
                'Complete funnel analyse',
                '90-dagen implementatieplan',
                'Templates, scripts, playbooks',
                'Taakverdeling: wat automatiseren, wat doet team, wat uitbesteden'
              ]}
              ctaText="Bekijk Blueprint"
              ctaLink="/blueprint"
            />
            
            <PricingCard
              title="Blueprint + Setup"
              subtitle="Complete infrastructuur"
              price="Vanaf €7.500"
              period="6-8 weken"
              features={[
                'Alles van Blueprint',
                'Tool selectie en configuratie',
                'Playbooks live gezet',
                'Team training',
                '4 weken support na oplevering'
              ]}
              ctaText="Na Blueprint of Scan"
              ctaLink="/blueprint"
              featured={true}
            />
            
            <PricingCard
              title="Full Service"
              subtitle="Wij runnen je outbound"
              price="Vanaf €3.000"
              period="/maand"
              features={[
                'Wij opereren het systeem',
                'Jij krijgt meetings in je agenda',
                'Maandelijkse rapportage en optimalisatie',
                'Geen lock-in'
              ]}
              ctaText="Na Blueprint of Scan"
              ctaLink="/blueprint"
            />
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8 text-center">
            <p className="text-xl" style={{ color: 'var(--text-primary)' }}>
              <span className="text-green-400 font-semibold">25% korting in ruil voor case study</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Vragen? Antwoorden.</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Klaar om je sales te systematiseren?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            In 3 minuten weet je waar je grootste kansen liggen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/diagnose" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Start gratis scan →
            </a>
            <a 
              href="/blueprint" 
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Bekijk Blueprint →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                accelr<span className="text-green-500">.</span>
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Sales-infrastructuur voor B2B groei.</div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/timsamsom" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            
            <div className="text-sm text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
              © 2026 Accelr. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
