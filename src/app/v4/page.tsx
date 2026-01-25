'use client'

import { useState } from 'react'
import { User, Clock, HelpCircle, ArrowRight } from 'lucide-react'

const results = {
  '0-2': {
    title: '0 - 2 / maand?',
    lines: [
      '10 - 14 meetings is haalbaar',
      'Voorspelbare pipeline',
      'Binnen 8 - 10 weken live',
    ],
  },
  '3-7': {
    title: '3 - 7 / maand?',
    lines: [
      '14 - 20 meetings is haalbaar',
      'Zonder extra uren werken',
      'Binnen 6 - 8 weken live',
    ],
  },
  '8-15': {
    title: '8 - 15 / maand?',
    lines: [
      '20 - 30 meetings is haalbaar',
      'Schaal zonder chaos',
      'Binnen 4 - 6 weken live',
    ],
  },
  '15+': {
    title: '15+ / maand?',
    lines: [
      'Bespaar 10+ uur per week',
      'Hogere conversie op leads',
      'Betere lead kwaliteit',
    ],
  },
}

function QuizCard() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
  }

  const handleReset = () => {
    setSelected(null)
  }

  const showResult = selected !== null

  const options = [
    { value: '0-2', label: '0 - 2 / maand' },
    { value: '3-7', label: '3 - 7 / maand' },
    { value: '8-15', label: '8 - 15 / maand' },
    { value: '15+', label: '15+ / maand' },
  ]

  return (
    <div className="relative max-w-[360px] mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
        <div className="relative min-h-[280px]">
          {!showResult ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Hoeveel meetings boek je nu?
              </h3>
              
              <div className="space-y-3">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-700 hover:border-green-500/50 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      name="meetings"
                      value={option.value}
                      checked={selected === option.value}
                      onChange={() => handleSelect(option.value)}
                      className="w-4 h-4 text-green-500 border-neutral-600 focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {selected && results[selected as keyof typeof results] && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {results[selected as keyof typeof results].title}
                    </h3>
                    <button
                      onClick={handleReset}
                      className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
                      aria-label="Terug"
                    >
                      ←
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {results[selected as keyof typeof results].lines.map((line, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-green-400 text-sm">→</span>
                        <span className="text-sm text-white">{line}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        
        {showResult && (
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <a
              href="/diagnose"
              className="block w-full bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold py-3 px-4 rounded-lg transition-colors text-center text-sm"
            >
              Zie hoe →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function V3Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="text-gray-100 min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>accelr<span className="text-green-500">.</span></a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#probleem" className="text-gray-400 hover:text-white transition-colors">Probleem</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Prijzen</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="/diagnose" className="border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Start gratis scan
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 flex items-center min-h-[auto] md:min-h-[90vh] lg:min-h-[95vh] relative" style={{ paddingTop: '80px' }}>
        <div className="max-w-6xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Build now<span className="text-green-500">.</span><br />
                Scale forever<span className="text-green-500">.</span>
              </h1>
              
              <p className="text-xl text-green-400 font-semibold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                In 6-8 weken een systeem dat structureel afspraken genereert.
              </p>
              
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Wij selecteren de juiste tools en koppelen ze tot één werkende machine.
              </p>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Doe de gratis scan en ontdek waar jij omzet laat liggen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="/diagnose" className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors text-center">
                  Start gratis scan →
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="text-green-400">✓</span>
                <span>3 minuten</span>
                <span className="text-green-400">✓</span>
                <span>Gratis rapport</span>
                <span className="text-green-400">✓</span>
                <span>Geen verplichtingen</span>
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
      <section id="probleem" className="px-6 bg-neutral-900 pt-20 pb-20 -mt-[5vh] md:-mt-[10vh] lg:-mt-[5vh] relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Herkenbaar?</h2>
          <p className="text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Sales groeit niet mee met je bedrijf.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <User className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <p className="text-gray-300 pt-1">Elke deal hangt op 1-2 mensen</p>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <Clock className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <p className="text-gray-300 pt-1">Sales gebeurt "als er tijd is" — en die tijd komt nooit</p>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <HelpCircle className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <p className="text-gray-300 pt-1">Je weet dat je moet schalen, maar waar begin je?</p>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
                <p className="text-gray-300 pt-1">Hiring is duur, agencies leveren wisselende kwaliteit</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8">
            <p className="text-xl text-gray-200">
              <span className="text-green-400 font-semibold">Het echte probleem:</span> Je mist geen tools. Je mist een salesarchitectuur die schaalt.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Wat je krijgt</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Strategie eerst</h3>
              <p className="text-gray-400 text-sm">We bepalen wie je ideale klant is en welke boodschap werkt — vóórdat we iets bouwen.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Eén werkend systeem</h3>
              <p className="text-gray-400 text-sm">CRM, email, LinkedIn, data — slim gekoppeld tot één machine die jij of je team kan runnen.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Jullie runnen het (of wij)</h3>
              <p className="text-gray-400 text-sm">Training voor je team, of wij opereren. Geen afhankelijkheid, tenzij je dat wilt.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Alles is van jou</h3>
              <p className="text-gray-400 text-sm">Stoppen wanneer je wilt. Geen lock-in. Geen gedoe.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Accelr Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Waarom Accelr?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="text-sm text-green-500 font-semibold mb-2">vs. zelf doen</div>
              <p className="text-gray-300">6 maanden trial-and-error of 6 weken met bewezen frameworks.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="text-sm text-green-500 font-semibold mb-2">vs. agencies</div>
              <p className="text-gray-300">Zij verhuren leads. Wij bouwen het systeem dat jij bezit.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="text-sm text-green-500 font-semibold mb-2">vs. consultants</div>
              <p className="text-gray-300">Zij leveren decks. Wij leveren werkende infrastructuur.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="text-sm text-green-500 font-semibold mb-2">vs. tools</div>
              <p className="text-gray-300">Tools zijn instrumenten. Zonder strategie zijn het dure speeltjes.</p>
            </div>
          </div>
          
          {/* Pilot Offer */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-200">
              <span className="text-green-400 font-semibold">Eerste 3 pilots:</span> 25% korting op Build in ruil voor case study.
            </p>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Dit is voor jou als:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">B2B bedrijf, €500k-20M omzet</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Sales is te afhankelijk van 1-2 mensen</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Je wilt structuur in je acquisitie</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Je wilt schalen zonder 6 maanden te experimenteren</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Je wilt eigenaarschap, geen afhankelijkheid</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Dit is niet voor jou als:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Je zoekt een magic bullet (die bestaat niet)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Je wilt alleen "leads kopen" zonder systeem</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Je hebt geen tijd om 2 uur per week te investeren</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Je omzet is &lt;€500k (founder-led is dan prima)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Helder. Geen verrassingen.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Scan + Diagnose */}
            <div className="bg-neutral-900 border-2 border-green-500 rounded-xl p-6 relative transition-all duration-200 hover:border-[#10b981] group flex flex-col">
              <div className="absolute -top-3 left-6 bg-green-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full">START HIER</div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scan + Diagnose</h3>
              <p className="text-sm text-gray-400 mb-4">Weet waar je staat</p>
              <div className="text-3xl font-bold text-[#10b981] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Gratis</div>
              <div className="text-sm text-gray-500 mb-6">3 min + 24 uur</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Analyse van je situatie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Geschat omzetpotentieel
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 min diagnose
                </li>
              </ul>
              <a href="/diagnose" className="block w-full bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold py-3 rounded-lg transition-colors text-center mt-auto">
                Start gratis scan
              </a>
            </div>
            
            {/* Build */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 transition-all duration-200 hover:border-[#10b981] group flex flex-col">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build</h3>
              <p className="text-sm text-gray-400 mb-4">Complete infrastructuur</p>
              <div className="text-3xl font-bold text-[#10b981] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Vanaf €10k</div>
              <div className="text-sm text-gray-500 mb-6">6-8 weken</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tool selectie en configuratie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Playbooks en scripts op maat
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Volledige documentatie
                </li>
              </ul>
              <a href="/diagnose" className="block w-full border border-neutral-700 hover:border-[#10b981] text-white font-semibold py-3 rounded-lg transition-colors text-center mt-auto">
                Na diagnose
              </a>
            </div>
            
            {/* Train of Run */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 transition-all duration-200 hover:border-[#10b981] group flex flex-col">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Train of Run</h3>
              <p className="text-sm text-gray-400 mb-4">Na de Build</p>
              <div className="text-3xl font-bold text-[#10b981] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Vanaf €3k/mnd</div>
              <div className="text-sm text-gray-500 mb-6">of €3-5k eenmalig</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Wij runnen het, of
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  We trainen jouw team
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Jij kiest wat past
                </li>
              </ul>
              <a href="/diagnose" className="block w-full border border-neutral-700 hover:border-[#10b981] text-white font-semibold py-3 rounded-lg transition-colors text-center mt-auto">
                Na diagnose
              </a>
            </div>
            
            {/* Scale */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col opacity-50">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scale</h3>
                <span className="text-sm text-gray-500 bg-neutral-700 px-3 py-1 rounded-full">Coming soon</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Coming soon</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Extra kanalen
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hiring support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  RevOps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Vragen? Antwoorden.</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Wat als ik nog geen sales team heb?',
                a: 'Dan kies je voor Train of Run. Wij voeren uit tot je klaar bent om te hiren. Of je blijft bij ons — geen lock-in, maar ook geen druk.',
              },
              {
                q: 'Hoe snel zie ik resultaat?',
                a: 'Diagnose: 1-2 weken. Build: 4-6 weken. Eerste meetings: week 6-8. Consistente pipeline: maand 3.',
              },
              {
                q: 'Moet ik zelf de tools afnemen?',
                a: 'Ja. Alles staat op jouw naam — dat is het punt: 100% eigenaarschap. Wij adviseren welke tools, jij betaalt ze direct. Typisch €200-500/maand.',
              },
              {
                q: 'Welke tools gebruiken jullie?',
                a: 'Hangt af van je situatie. Meestal: HubSpot of Pipedrive (CRM), Apollo of Clay (data), Instantly of Smartlead (email), LinkedIn Sales Navigator. We kiezen op basis van je needs, niet op basis van partnerships.',
              },
              {
                q: 'Wat als de diagnose uitwijst dat ik iets anders nodig heb?',
                a: 'Dan zeggen we dat. Soms is het antwoord: "Hire eerst een goede AE" of "Fix je product-market fit eerst." We verkopen geen Build als Diagnose zegt dat het zinloos is.',
              },
              {
                q: 'Waarom is de scan gratis?',
                a: 'Je moet eerst weten waar je staat voordat je ergens voor betaalt. Het rapport is van jou, ook als we niet verder gaan.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl group">
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Klaar om te bouwen?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/diagnose" className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors">
              Start gratis scan →
            </a>
            <a href="https://www.linkedin.com/in/timsamsom/" target="_blank" rel="noopener noreferrer" className="border border-neutral-700 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Connect op LinkedIn
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <a href="mailto:tim@accelr.nl" className="hover:text-white transition-colors">tim@accelr.nl</a>
            <span className="text-neutral-700">|</span>
            <a href="https://www.linkedin.com/in/timsamsom/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>accelr<span className="text-green-500">.</span></div>
              <div className="text-sm text-gray-500">Sales-infrastructuur voor B2B groei.</div>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <a href="#probleem" className="hover:text-white transition-colors">Probleem</a>
              <a href="#pricing" className="hover:text-white transition-colors">Prijzen</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Accelr. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
