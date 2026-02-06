'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Accordion from '@/components/Accordion'
import { ChevronDown } from 'lucide-react'

export default function ExpertisePage() {
  const [openPillar, setOpenPillar] = useState<number | null>(null)

  const pillars = [
    {
      num: '/01',
      title: 'De juiste prospects vinden',
      subtitle: 'Niet meer schieten met hagel',
      description: 'Alles begint met weten wie je klant is. Bedrijven met een scherp gedefinieerd ICP hebben tot 68% hogere win-rates. Wij bouwen een systeem dat de juiste prospects vindt — niet meer, niet minder.',
      systemDoes: [
        'Dynamische ICP-engine per product, dienst of business unit',
        'Markttrends analyseren, nieuwe segmenten identificeren voordat concurrenten ze zien',
        'Prospects vinden, verrijken, scoren op fit én koopintentie',
        'Predictive analytics: welke bedrijven zijn nu klaar om te kopen',
        'Websitebezoekers kwalificeren en direct boeken via chatbot',
        'Gegevenskwaliteit bewaken — altijd verrijkt en actueel, geen vervuilde CRM'
      ],
      youDo: [
        'ICP richting bepalen (±15 min/maand)',
        'Feedback geven op lead-kwaliteit',
        'Multi-threading: stakeholders in kaart houden (Champion, Economic Buyer, Blockers)'
      ],
      result: 'Een pipeline gevuld met prospects die écht passen, niet een Excel met 10.000 irrelevante namen.'
    },
    {
      num: '/02',
      title: 'Op het juiste moment contact leggen',
      subtitle: 'Signal-based outreach: alleen prospects die koopsignalen afgeven',
      description: 'Spray and pray is dood. 80% van cold outreach faalt omdat het op het verkeerde moment komt. Wij benaderen alleen prospects die aangeven dat ze klaar zijn.',
      systemDoes: [
        'Signalen detecteren: websitebezoek, LinkedIn engagement, funding rondes, vacatures, nieuws',
        'Lead scoring op honderden signalen — automatisch "hot leads" herkennen',
        'Hyper-gepersonaliseerde berichten op basis van actuele triggers en bedrijfsnieuws',
        'Automatische eerste outreach en opvolging tot er een reactie is',
        'E-mailsequencing met optimale timing per prospect'
      ],
      youDo: [
        'Messaging richting en tone of voice bepalen (eenmalig + kwartaal review)',
        'Playbooks valideren — bewezen scripts en templates',
        'Finale approval op outreach als je dat wilt'
      ],
      result: 'Prospects die denken "hoe wisten ze dat ik hier nu mee bezig ben?" in plaats van "weer spam."'
    },
    {
      num: '/03',
      title: 'Via het kanaal waar jouw prospect reageert',
      subtitle: 'Adaptive multichannel: niet volgens schema, maar op basis van gedrag',
      description: 'Email werkt voor de een, LinkedIn voor de ander, telefoon voor een derde. Het systeem past zich aan op wat werkt voor elke individuele prospect.',
      systemDoes: [
        'Kanaal selecteren op basis van gedrag en respons — niet op basis van jouw voorkeur',
        'Sequences automatisch aanpassen op marktbewegingen en reacties',
        'Meetings autonoom inplannen — geen heen-en-weer mailen',
        'Automatische reminders en follow-ups — geen lead valt meer weg',
        'SLA\'s bewaken: opvolgtijden, routing, escalatie als iets te lang duurt'
      ],
      youDo: [
        'Beslissen wanneer je persoonlijk inspringt (systeem alert je)',
        'Bellen wanneer een prospect "warm" is',
        'Relatie bouwen waar het telt — niet op koude leads'
      ],
      result: 'Prospects bereikt via hun voorkeurskanaal, op het moment dat ze willen reageren.'
    },
    {
      num: '/04',
      title: 'Elk gesprek grondig voorbereid zonder handwerk',
      subtitle: 'Agentic AI doet het research, jij voert het gesprek',
      description: 'AI doet autonoom research: accounts analyseren, contactpersonen identificeren, en gesprekken voorbereiden met de juiste inzichten. Jij springt pas in wanneer er een echte dialoog ontstaat.',
      systemDoes: [
        'Autonoom account research: bedrijf, nieuws, financials, recente ontwikkelingen',
        'DMU mappen: wie is de Champion, Economic Buyer, Blocker — automatisch geïdentificeerd',
        'Discovery prep met Cost of Inaction data — wat kost het om níét te veranderen?',
        'Gepersonaliseerde demo\'s en presentaties genereren per prospect',
        'Offertes vullen met configuraties, margecalculatie, prijssuggesties',
        'Standaard contractclausules prefill — geen juridisch gedoe'
      ],
      youDo: [
        'Discovery calls voeren — inzichten delen, niet alleen vragen stellen',
        'BANT vervangen door waarde-exploratie: wat is de Cost of Inaction?',
        'Onderhandelen, bezwaren wegnemen, closen'
      ],
      result: 'In elke call weet je meer over de prospect dan zij over zichzelf. AI-teams die zo werken overtreffen hun doelen 7x vaker.'
    },
    {
      num: '/05',
      title: 'Eén dashboard, continu slimmer',
      subtitle: 'AI brengt je naar de kans. Jij sluit de deal.',
      description: 'Geen vijf tools checken. Geen spreadsheets bijhouden. Eén scherm met alles wat je moet weten, en AI die je vertelt wat je nu moet doen.',
      systemDoes: [
        'Alle data op één plek — CRM als single source of truth, geen silo\'s',
        'Real-time pipeline updates en alerts bij vertraging',
        'AI-forecasting: welke deals dreigen te stagneren? Waar moet je inspringen?',
        'Patronen tonen, aanbevelingen voor bijsturing — niet achteraf maar real-time',
        'Churn voorspellen, upsell-triggers activeren bij bestaande klanten',
        'Automatische onboarding sequences na close — klant direct aan de slag',
        'Feedbackloops: verloren deals analyseren, learnings automatisch terugkoppelen'
      ],
      youDo: [
        'Strategie bijstellen op basis van data (wekelijkse review ±30 min)',
        'Sales-marketing alignment: weten wat werkt en wat niet',
        'Relaties onderhouden, upsell gesprekken voeren waar het systeem kansen ziet'
      ],
      result: 'Beslissingen op data, niet onderbuik. En een systeem dat elke week slimmer wordt.'
    }
  ]

  const faqItems = [
    {
      question: 'Welke tools gebruiken jullie?',
      answer: 'We zijn stack-onafhankelijk. Veelgebruikte tools: HubSpot, Pipedrive, Apollo, Lemlist, LinkedIn Sales Navigator, n8n voor automations. Maar we werken met wat jij hebt, of adviseren alternatieven.'
    },
    {
      question: 'Hoe snel zien we resultaat?',
      answer: 'Blueprint: in 2 weken heb je een plan. Setup: in 4-6 weken draait het systeem. Eerste meetings: meestal binnen 2-4 weken na go-live.'
    },
    {
      question: 'Wat als we al tools hebben die we nauwelijks gebruiken?',
      answer: 'Perfect. We kijken eerst wat je hebt voordat we iets nieuws adviseren. Vaak haal je 3x meer uit bestaande tools met de juiste configuratie.'
    },
    {
      question: 'Hoeveel van ons team is nodig?',
      answer: 'Minimaal: jij. Ideaal: jij + iemand die calls doet. Het systeem vervangt geen mensen, het maakt ze effectiever.'
    },
    {
      question: 'Werken jullie met een bepaalde branche?',
      answer: 'Focus op B2B-dienstverlening en SaaS. €500K-€20M omzet. Bedrijven die willen groeien maar niet kunnen opschalen met hun huidige aanpak.'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Vijf pijlers. Eén salesmotor.
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Wij bouwen systemen die prospects vinden, benaderen, opvolgen en kwalificeren — zodat jij alleen nog de gesprekken voert die ertoe doen.
          </p>
          <a 
            href="/blueprint"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start met de Blueprint →
          </a>
        </div>
      </section>

      {/* Hub & Spoke Diagram Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              Hoe het werkt
            </h2>
            <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
              Geen losse tools. Eén geïntegreerd systeem met continue feedbackloop.
            </p>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Alles verbonden via één centraal dashboard
            </p>
          </div>

          <div className="relative" style={{ width: '320px', height: '320px', margin: '0 auto' }}>
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <line x1="160" y1="160" x2="160" y2="30" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="160" x2="290" y2="160" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="160" x2="160" y2="290" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="160" x2="30" y2="160" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg flex flex-col items-center justify-center text-white z-10">
              <span className="text-2xl">📊</span>
              <span className="font-bold text-xs">Dashboard</span>
            </div>

            {/* Spoke 1: Top */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-xl shadow-md flex flex-col items-center justify-center border transition-all cursor-pointer hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4ADE80'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
              }}
            >
              <span className="text-xl">🎯</span>
              <span className="text-[9px] font-medium" style={{ color: 'var(--text-secondary)' }}>Prospects</span>
            </div>

            {/* Spoke 2: Right */}
            <div 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 rounded-xl shadow-md flex flex-col items-center justify-center border transition-all cursor-pointer hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4ADE80'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
              }}
            >
              <span className="text-xl">⚡</span>
              <span className="text-[9px] font-medium" style={{ color: 'var(--text-secondary)' }}>Timing</span>
            </div>

            {/* Spoke 3: Bottom */}
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-xl shadow-md flex flex-col items-center justify-center border transition-all cursor-pointer hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4ADE80'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
              }}
            >
              <span className="text-xl">📱</span>
              <span className="text-[9px] font-medium" style={{ color: 'var(--text-secondary)' }}>Kanaal</span>
            </div>

            {/* Spoke 4: Left */}
            <div 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 rounded-xl shadow-md flex flex-col items-center justify-center border transition-all cursor-pointer hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4ADE80'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
              }}
            >
              <span className="text-xl">🤖</span>
              <span className="text-[9px] font-medium" style={{ color: 'var(--text-secondary)' }}>AI Prep</span>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <div 
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderColor: openPillar === i ? '#10b981' : 'var(--border-color)', 
                  borderWidth: '1px', 
                  borderStyle: 'solid' 
                }}
              >
                <button
                  onClick={() => setOpenPillar(openPillar === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 md:p-8 text-left hover:opacity-90 transition-opacity"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold" style={{ color: 'var(--text-muted)' }}>{pillar.num}</span>
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                        {pillar.title}
                      </h2>
                    </div>
                    <p className="text-lg mb-2 italic" style={{ color: 'var(--text-secondary)' }}>
                      {pillar.subtitle}
                    </p>
                    {openPillar === i && (
                      <p className="text-base mt-4" style={{ color: 'var(--text-secondary)' }}>
                        {pillar.description}
                      </p>
                    )}
                  </div>
                  <ChevronDown 
                    size={24} 
                    className={`flex-shrink-0 ml-4 transition-transform ${openPillar === i ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--text-secondary)' }}
                  />
                </button>
                
                {openPillar === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Wat het systeem doet:
                      </h3>
                      <ul className="space-y-2">
                        {pillar.systemDoes.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-green-400 mt-1">•</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Wat jij doet:
                      </h3>
                      <ul className="space-y-2">
                        {pillar.youDo.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-green-400 mt-1">•</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-lg p-4">
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Resultaat:
                      </p>
                      <p style={{ color: 'var(--text-secondary)' }}>{pillar.result}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we optimaliseren Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat we optimaliseren
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Elk salesproces heeft dezelfde lekken. Wij dichten ze.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Data & Systemen',
                items: [
                  'Eén centrale CRM als single source of truth — geen handmatige overdracht',
                  'Gegevenskwaliteit op orde — verrijkt, compleet, altijd actueel',
                  'Geïntegreerde dataflow tussen marketing, sales en customer success'
                ]
              },
              {
                category: 'Processen & Alignment',
                items: [
                  'Scherpe definities: wat is een MQL, SQL, wanneer volgt welke actie',
                  'SLA\'s tussen marketing en sales — geen misverstanden over wie wat doet',
                  'Multi-threading: alle stakeholders in kaart per deal'
                ]
              },
              {
                category: 'Executie & Snelheid',
                items: [
                  'Gestandaardiseerde playbooks — bewezen scripts en templates',
                  'Automatische opvolging — geen lead valt weg door "vergeten"',
                  'Snelle offertes — templates klaar, één klik'
                ]
              },
              {
                category: 'Continue Verbetering',
                items: [
                  'Feedbackloops: waarom verloren? Wat wil de klant écht?',
                  'Real-time coaching en training mogelijkheden',
                  'Dashboards voor inzicht, niet onderbuikgevoel'
                ]
              }
            ].map((section, i) => (
              <div 
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Accelr vs. Alternatieven
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '2px' }}>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}></th>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Zelf doen</th>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Traditioneel bureau</th>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: '#10b981' }}>Accelr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Tijd tot resultaat', zelf: '6-12 maanden trial & error', bureau: '2-3 maanden opstart', accelr: '4-6 weken live' },
                  { metric: 'Jouw tijdsinvestering', zelf: '20+ uur/week', bureau: '5-10 uur/week meetings', accelr: '2-3 uur/week' },
                  { metric: 'Aanpak', zelf: 'Tools kopen, hopen dat het werkt', bureau: 'Strategie zonder executie', accelr: 'Strategie + implementatie + executie' },
                  { metric: 'Na afloop', zelf: 'Afhankelijk van jouw tijd', bureau: 'Afhankelijk van bureau', accelr: 'Systeem draait zelfstandig' },
                  { metric: 'Kosten', zelf: '€500-2.000/maand aan tools + jouw tijd', bureau: '€5.000-15.000/maand retainer', accelr: '€2.500-3.500/maand all-in' }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                    <td className="py-4 px-4 font-medium" style={{ color: 'var(--text-primary)' }}>{row.metric}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>{row.zelf}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>{row.bureau}</td>
                    <td className="py-4 px-4 font-medium" style={{ color: '#10b981' }}>{row.accelr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How we work together Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Hoe we samenwerken
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Optie 1: Blueprint',
                description: 'Je weet wat je moet doen. Wij analyseren, ontwerpen, en leveren het plan. Jij of je team implementeert.',
                price: '€2.500 eenmalig'
              },
              {
                title: 'Optie 2: Blueprint + Setup ⭐',
                description: 'Wij bouwen het systeem, configureren de tools, zetten alles live, en trainen je team. Daarna draag je over.',
                price: '€5.000 - €8.000 eenmalig'
              },
              {
                title: 'Optie 3: Full Service',
                description: 'Wij bouwen én runnen je outbound. Jij krijgt gekwalificeerde meetings in je agenda.',
                price: '€2.500 - €3.500/maand'
              }
            ].map((option, i) => (
              <div 
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: i === 1 ? '#10b981' : 'var(--border-color)', borderWidth: i === 1 ? '2px' : '1px', borderStyle: 'solid' }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                  {option.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{option.description}</p>
                <p className="font-semibold" style={{ color: '#10b981' }}>
                  Investering: {option.price}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/blueprint"
              className="inline-block text-green-500 hover:text-green-400 font-semibold transition-colors"
            >
              Bekijk de Blueprint →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Veelgestelde vragen
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Klaar om je sales te systematiseren?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Start met de Blueprint. In 14 dagen weet je precies waar de kansen liggen.
          </p>
          <a 
            href="mailto:tim@accelr.io"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Plan je Blueprint-sessie →
          </a>
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
