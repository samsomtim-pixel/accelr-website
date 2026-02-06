'use client'

import Navigation from '@/components/Navigation'
import Accordion from '@/components/Accordion'
import PricingCard from '@/components/PricingCard'

export default function BlueprintPage() {
  const faqItems = [
    {
      question: 'Hoeveel tijd kost dit ons team?',
      answer: 'Tijdens de Blueprint: ±2 uur totaal (kickoff + intake + oplevering). Je hoeft niets voor te bereiden — ik doe het zware werk.'
    },
    {
      question: 'Wat als we al een CRM/tools hebben?',
      answer: 'Prima. De Blueprint is stack-onafhankelijk. We werken met wat je hebt, of adviseren alternatieven als dat beter past.'
    },
    {
      question: 'Wat krijgen we precies opgeleverd?',
      answer: 'Een compleet document met: analyse, 90-dagen plan, templates, scripts, KPI-targets, en taakverdeling. Plus alle bestanden digitaal.'
    },
    {
      question: 'Voor welke bedrijfsgrootte werkt dit?',
      answer: 'B2B-bedrijven van €500K–€20M omzet. Te klein en je hebt andere prioriteiten. Te groot en je hebt waarschijnlijk al een salesteam.'
    },
    {
      question: 'Wat is het verschil met een gratis adviesgesprek?',
      answer: 'Een gratis gesprek geeft je tips. De Blueprint geeft je een compleet systeem: geanalyseerd, uitgewerkt, en klaar om te implementeren. Het verschil tussen "je zou eens moeten..." en "hier is precies hoe."'
    },
    {
      question: 'Wat als het niet oplevert wat ik verwacht?',
      answer: 'Als je niet minimaal 3 concrete, implementeerbare verbeterpunten krijgt, betaal je niets. Zo simpel is het.'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            In 14 dagen weet je precies waar jouw salespipeline lekt
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Een traject van €2.500 dat de blinde vlekken blootlegt waar je maandelijks omzet laat liggen.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mb-6"
          >
            Plan je Blueprint-sessie →
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>14 dagen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Concreet plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Minimaal 3 verbeterpunten of geld terug</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Elk groeiend B2B-bedrijf heeft een salesplan nodig
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Niet nóg een tool. Niet nóg een experiment. Een werkend systeem dat structureel meetings genereert.
          </p>
          <p className="text-lg leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
            De Accelr Blueprint is een 2-weeks traject dat blootlegt waar jouw salesproces vastloopt — en precies laat zien hoe je van sporadisch naar structureel gaat.
          </p>
        </div>
      </section>

      {/* In het kort Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>In het kort</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: '/01',
                title: 'Diagnose van je huidige salesproces',
                description: 'We ontleden je volledige funnel: van leadbron tot close. Waar lekt het? Waar ligt kans?'
              },
              {
                num: '/02',
                title: 'Drie concrete verbeterpunten met impact',
                description: 'Geen vage adviezen. Drie specifieke acties met geschatte opbrengst in meetings of omzet.'
              },
              {
                num: '/03',
                title: 'Stack-onafhankelijk implementatieplan',
                description: 'Werkt met je huidige tools. Of we adviseren wat beter past. Klaar om direct te bouwen.'
              },
              {
                num: '/04',
                title: 'Heldere taakverdeling',
                description: 'Wat automatiseren we? Wat doet je team? Wat kun je uitbesteden? Geen gedoe achteraf.'
              }
            ].map((step, i) => (
              <div 
                key={i}
                className="rounded-xl p-8"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <div className="text-4xl font-bold mb-4" style={{ color: 'var(--text-muted)' }}>{step.num}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Voor wie
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Voor founders en salesleads die het gevoel hebben dat ze alles zelf moeten doen.</strong>
          </p>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Je hebt misschien al een CRM. Misschien LinkedIn outreach geprobeerd. Misschien zelfs Apollo of Lemlist. Maar het systeem mist. Leads vallen tussen wal en schip. Follow-up gebeurt als je eraan denkt. En nieuwe business hangt af van jouw tijd en energie.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                De Blueprint is voor je als:
              </h3>
              <ul className="space-y-3">
                {[
                  'Groei betekent: meer uren maken, harder werken',
                  'Je weet dat je "iets met outbound" moet maar niet waar te beginnen',
                  'Je tools hebt gekocht die je voor 20% gebruikt',
                  'Je geen tijd hebt om nog een half jaar te experimenteren'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                De Blueprint is niet voor je als:
              </h3>
              <ul className="space-y-3">
                {[
                  'Je al een werkend salesteam van 5+ mensen hebt',
                  'Je nog geen product-market fit hebt gevonden',
                  'Je "even wilt proberen" zonder commitment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400/60 mt-1">✗</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat verandert er Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat verandert er
          </h2>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            De meeste B2B-bedrijven doen sales op gevoel. Een LinkedIn-post hier. Een koud mailtje daar. Wachten op inbound. Hopen op referrals.
          </p>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Het probleem: dit schaalt niet.</strong> Meer omzet = meer uren. En als jij stopt, stopt de pipeline.
          </p>
          
          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
            <p className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              De Blueprint verandert dit. Je krijgt geen adviesrapport dat in een la verdwijnt. Je krijgt een systeem dat:
            </p>
            <ul className="space-y-3">
              {[
                'Elke week nieuwe prospects bereikt — zonder dat jij het handmatig doet',
                'Automatisch opvolgt tot er een reactie is',
                'Meet wat werkt zodat je kunt bijsturen',
                'Draait óók als jij op vakantie bent'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hoe het werkt Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Hoe het werkt
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '/01',
                title: 'Dag 0: Kickoff (60 min)',
                description: 'We brengen je huidige situatie in kaart. Welke tools gebruik je? Waar komen leads vandaan? Wat heb je geprobeerd? Waar loop je vast?'
              },
              {
                step: '/02',
                title: 'Dag 1–5: Data & Analyse',
                description: 'Je vult een korte intake in (±30 minuten). Ik analyseer je markt, concurrentie, en huidige aanpak. Ik identificeer de grootste kansen en bottlenecks.'
              },
              {
                step: '/03',
                title: 'Dag 6–12: Blueprint bouwen',
                description: 'Ik ontwerp je salesmotor: welke kanalen, welke boodschap, welke cadans, welke tools. Inclusief templates, scripts, en KPI\'s.'
              },
              {
                step: '/04',
                title: 'Dag 14: Oplevering',
                description: 'We lopen samen door het plan (60 min). Je weet exact wat je moet doen, in welke volgorde, met welke verwachte resultaten.'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <div className="text-2xl font-bold mb-3" style={{ color: 'var(--text-muted)' }}>{item.step}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we meten Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat we meten
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Geen onderbuikgevoel. Data.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '2px' }}>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Metric</th>
                  <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Wat het zegt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Volume', description: 'Hoeveel prospects bereik je per week?' },
                  { metric: 'Conversie per stap', description: 'Waar haken mensen af?' },
                  { metric: 'Tijd per activiteit', description: 'Waar zit de handmatige bottleneck?' },
                  { metric: 'Kanaal-effectiviteit', description: 'Wat levert daadwerkelijk meetings op?' }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                    <td className="py-4 px-4 font-medium" style={{ color: 'var(--text-primary)' }}>{row.metric}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-sm mt-6" style={{ color: 'var(--text-secondary)' }}>
            Elke aanbeveling in de Blueprint is gebaseerd op cijfers, niet op aannames.
          </p>
        </div>
      </section>

      {/* Wat je krijgt Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Wat je krijgt
          </h2>
          
          <ul className="space-y-4">
            {[
              'Complete analyse van je huidige salesproces',
              'Markt- en concurrentie-scan voor jouw segment',
              '90-dagen implementatieplan met weekdoelen',
              'Templates: email sequences, LinkedIn berichten, call scripts',
              'KPI-dashboard opzet om voortgang te meten',
              'Heldere taakverdeling: wat automatiseren we, wat doet je team, wat kan ik overnemen',
              '1 uur Q&A na oplevering'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* En daarna Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            En daarna?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '/01',
                title: 'Zelf uitvoeren',
                description: 'Je hebt het plan, de templates, de tools. Jij of je team voert uit. Ik sta klaar voor vragen.'
              },
              {
                num: '/02',
                title: 'Samen bouwen',
                description: 'Ik zet het systeem op, train je team, en draag na 4-6 weken over. Jij runt het daarna zelf.'
              },
              {
                num: '/03',
                title: 'Volledig uitbesteden',
                description: 'Ik bouw én run je outbound voor 3-6 maanden. Jij krijgt meetings in je agenda. Daarna evalueren we: overnemen of doorgaan.'
              }
            ].map((option, i) => (
              <div 
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
              >
                <div className="text-2xl font-bold mb-3" style={{ color: 'var(--text-muted)' }}>{option.num}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                  {option.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Investering
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              title="Blueprint"
              subtitle="Complete analyse, plan, templates, en taakverdeling"
              price="€2.500"
              period="eenmalig — opgeleverd in 2 weken"
              features={[
                'Complete analyse van je salesproces',
                '90-dagen implementatieplan',
                'Templates en scripts',
                'Heldere taakverdeling'
              ]}
              ctaText="Plan je Blueprint-sessie"
              ctaLink="#contact"
            />
            
            <PricingCard
              title="Blueprint + Setup"
              subtitle="Alles van de Blueprint, plus: ik bouw het systeem"
              price="€5.000 - €8.000"
              period="opgeleverd in 4-6 weken"
              features={[
                'Alles van de Blueprint',
                'Ik bouw het systeem',
                'Configureer de tools',
                'Zet sequences live',
                'Train je team',
                '4 weken support na oplevering'
              ]}
              ctaText="Plan je Blueprint-sessie"
              ctaLink="#contact"
              featured={true}
            />
            
            <PricingCard
              title="Full Service"
              subtitle="Ik bouw én run je volledige outbound"
              price="€2.500 - €3.500"
              period="/maand — minimaal 3 maanden"
              features={[
                'Ik bouw én run je outbound',
                'Gekwalificeerde meetings in je agenda',
                'Maandelijkse rapportage',
                'Wekelijkse call + dashboard access',
                'Na 3 maanden evalueren we'
              ]}
              ctaText="Plan je Blueprint-sessie"
              ctaLink="#contact"
            />
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Garantie
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Minimaal 3 concrete verbeterpunten die je direct kunt implementeren — anders betaal je niets.
            </p>
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
      <section id="contact" className="py-20 px-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Klaar om je salesproces door te lichten?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            In 14 dagen weet je precies waar de kansen liggen — en heb je een plan om ze te pakken.
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
