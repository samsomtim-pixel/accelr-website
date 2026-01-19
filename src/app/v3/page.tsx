'use client'

import { useState } from 'react'

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
            <a href="#werkwijze" className="text-gray-400 hover:text-white transition-colors">Werkwijze</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Prijzen</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Plan je diagnose
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-6 mb-8">
                <div className="stat-card rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>8+</div>
                  <div className="text-sm text-gray-400">Jaar ervaring</div>
                </div>
                <div className="stat-card rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>50+</div>
                  <div className="text-sm text-gray-400">Stacks gebouwd</div>
                </div>
                <div className="stat-card rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>100%</div>
                  <div className="text-sm text-gray-400">Jouw eigendom</div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Van founder-led naar <span className="gradient-text">schaalbare sales</span> in 90 dagen.
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Wij ontwerpen je salesstrategie, bouwen de infrastructuur, en activeren het systeem. Jij houdt 100% eigenaarschap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors text-center">
                  Plan je diagnose →
                </a>
                <a href="#werkwijze" className="border border-neutral-700 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center">
                  Bekijk werkwijze
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-gray-400">Pipeline automatisch gevuld</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-gray-400">CRM volledig geïntegreerd</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-gray-400">Sequences draaien 24/7</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-gray-400">Jij focust op closen</div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-neutral-800">
                      <div className="text-3xl font-bold text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+127%</div>
                      <div className="text-sm text-gray-400">Gemiddelde pipeline groei</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="probleem" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Herkenbaar?</h2>
          <p className="text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Je bent de beste verkoper van je bedrijf. En dat is het probleem.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-red-400 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <p className="text-gray-300">Elke deal loopt via jou</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-red-400 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <p className="text-gray-300">Je hebt tools, maar geen systeem</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-red-400 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <p className="text-gray-300">Je weet dat het anders moet, maar niet hoe</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-red-400 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <p className="text-gray-300">Hiring is duur, agencies leveren matige leads</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8">
            <p className="text-xl text-gray-200">
              <span className="text-green-400 font-semibold">Het echte probleem:</span> Je mist geen tools. Je mist een salesarchitectuur die zonder jou werkt.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Wat je krijgt</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">Strategie, infrastructuur en activatie. Alles wat je nodig hebt om te schalen.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Strategie die klopt</h3>
              <p className="text-gray-400 text-sm">Geen aannames. We valideren je ICP, messaging en metrics voordat we iets bouwen.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Infrastructuur die blijft</h3>
              <p className="text-gray-400 text-sm">Tools slim gekoppeld. CRM, outreach, data — één systeem dat jij of je team kan runnen.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Activatie die werkt</h3>
              <p className="text-gray-400 text-sm">Training voor je team, of wij runnen het. Geen afhankelijkheid, tenzij je dat wilt.</p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>100% eigenaarschap</h3>
              <p className="text-gray-400 text-sm">Alles is van jou. Geen lock-in. Geen vendor dependency. Stoppen wanneer je wilt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="werkwijze" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Werkwijze</h2>
          <p className="text-gray-400 mb-12">Van diagnose tot schaalbare sales in vier fasen.</p>
          
          <div className="space-y-8">
            {/* Phase 1: Diagnose */}
            <div className="relative pl-8 border-l-2 border-green-500/30">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-neutral-950 text-sm font-bold">1</div>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Diagnose</h3>
                  <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">€2.500 · 1-2 weken</span>
                </div>
                <p className="text-gray-400 mb-4">We ontleden je huidige situatie voordat we iets bouwen:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ICP-validatie
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Messaging audit
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Proces & stack assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Strategische roadmap
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-neutral-700">
                  <span className="text-green-400">Deliverable:</span> Strategisch rapport + prioriteitenlijst. Na diagnose beslis jij: zelf doen, of door met ons.
                </p>
              </div>
            </div>
            
            {/* Phase 2: Build */}
            <div className="relative pl-8 border-l-2 border-green-500/30">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-neutral-950 text-sm font-bold">2</div>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build</h3>
                  <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">€8-12k · 4-6 weken</span>
                </div>
                <p className="text-gray-400 mb-4">We bouwen je complete sales-infrastructuur:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tool selectie & configuratie
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    CRM setup + integraties
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Email + LinkedIn sequences
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unified dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Volledige documentatie
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-neutral-700">
                  <span className="text-green-400">Deliverable:</span> Werkend systeem, gedocumenteerd, 100% van jou.
                </p>
              </div>
            </div>
            
            {/* Phase 3: Activate */}
            <div className="relative pl-8 border-l-2 border-green-500/30">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-neutral-950 text-sm font-bold">3</div>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Activate</h3>
                  <span className="text-sm text-gray-400 bg-neutral-700 px-3 py-1 rounded-full">Kies je route</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Train → €3-5k</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Hands-on teamtraining</li>
                      <li>• Playbook met scripts</li>
                      <li>• 4x call coaching</li>
                      <li>• 30 dagen support</li>
                    </ul>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Run → €4-6k/maand</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Wij runnen je outbound</li>
                      <li>• Dagelijkse optimalisatie</li>
                      <li>• Wekelijkse call + rapport</li>
                      <li>• Min. 3 maanden</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 4: Scale */}
            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center text-gray-400 text-sm font-bold">4</div>
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scale</h3>
                  <span className="text-sm text-gray-500 bg-neutral-700 px-3 py-1 rounded-full">Optioneel</span>
                </div>
                <p className="text-gray-500">Extra kanalen, sales hiring support, RevOps optimalisatie, interim leadership.</p>
              </div>
            </div>
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
                  <span className="text-gray-300">B2B founder of CEO, €1-20M ARR</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Jij bent nog steeds de beste verkoper</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Je hebt tools maar geen systeem</span>
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
                  <span className="text-gray-500">Je ARR is &lt;€500k (founder-led is dan prima)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accelr Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Waarom Accelr?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-sm text-green-400 font-semibold mb-2">vs. Zelf doen</div>
              <p className="text-gray-300">6 maanden trial-and-error of 6 weken met bewezen frameworks.</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-sm text-green-400 font-semibold mb-2">vs. Agencies</div>
              <p className="text-gray-300">Zij verhuren leads. Wij bouwen het systeem dat jij bezit.</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-sm text-green-400 font-semibold mb-2">vs. Consultants</div>
              <p className="text-gray-300">Zij leveren decks. Wij leveren werkende infrastructuur.</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-sm text-green-400 font-semibold mb-2">vs. Tools</div>
              <p className="text-gray-300">Tools zijn instrumenten. Zonder strategie zijn het dure speeltjes.</p>
            </div>
          </div>
          
          {/* Pilot Offer */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-200">
              <span className="text-green-400 font-semibold">Eerste 3 pilots:</span> 50% korting op Diagnose in ruil voor case study.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Helder. Geen verrassingen.</h2>
          <p className="text-gray-400 mb-12">Start altijd met Diagnose. Daarna kies je je route.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Diagnose */}
            <div className="bg-neutral-900 border-2 border-green-500 rounded-xl p-6 card-hover relative">
              <div className="absolute -top-3 left-6 bg-green-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full">START HIER</div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Diagnose</h3>
              <p className="text-sm text-gray-400 mb-4">Weet waar je staat</p>
              <div className="text-3xl font-bold text-green-400 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>€2.500</div>
              <div className="text-sm text-gray-500 mb-6">1-2 weken</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  ICP-validatie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Messaging audit
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Stack assessment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strategische roadmap
                </li>
              </ul>
              <a href="#contact" className="block w-full bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold py-3 rounded-lg transition-colors text-center">
                Start diagnose
              </a>
            </div>
            
            {/* Build */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build</h3>
              <p className="text-sm text-gray-400 mb-4">Complete infrastructuur</p>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>€8-12k</div>
              <div className="text-sm text-gray-500 mb-6">4-6 weken</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tool selectie & config
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  CRM integratie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Outreach sequences
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unified dashboard
                </li>
              </ul>
              <a href="#contact" className="block w-full border border-neutral-700 hover:border-gray-500 text-white font-semibold py-3 rounded-lg transition-colors text-center">
                Na diagnose
              </a>
            </div>
            
            {/* Build + Train */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build + Train</h3>
              <p className="text-sm text-gray-400 mb-4">Enabled team</p>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>€12-17k</div>
              <div className="text-sm text-gray-500 mb-6">6-8 weken</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Volledige Build
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hands-on training
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Playbook & scripts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 dagen support
                </li>
              </ul>
              <a href="#contact" className="block w-full border border-neutral-700 hover:border-gray-500 text-white font-semibold py-3 rounded-lg transition-colors text-center">
                Na diagnose
              </a>
            </div>
            
            {/* Build + Run */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Build + Run</h3>
              <p className="text-sm text-gray-400 mb-4">Beheerde outbound</p>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>€4-6k</div>
              <div className="text-sm text-gray-500 mb-6">per maand, na Build</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dagelijkse uitvoering
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Wekelijkse rapportage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Continue optimalisatie
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Min. 3 maanden
                </li>
              </ul>
              <a href="#contact" className="block w-full border border-neutral-700 hover:border-gray-500 text-white font-semibold py-3 rounded-lg transition-colors text-center">
                Na diagnose
              </a>
            </div>
          </div>
          
          {/* Total Cost Summary */}
          <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h4 className="font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Totaalkosten overzicht</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Diagnose only</div>
                <div className="text-white font-semibold">€2.500</div>
              </div>
              <div>
                <div className="text-gray-400">Diagnose + Build</div>
                <div className="text-white font-semibold">€10-15k</div>
              </div>
              <div>
                <div className="text-gray-400">Diagnose + Build + Train</div>
                <div className="text-white font-semibold">€13-20k</div>
              </div>
              <div>
                <div className="text-gray-400">Diagnose + Build + Run</div>
                <div className="text-white font-semibold">€10-15k + €4-6k/mnd</div>
              </div>
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
                a: 'Dan kies je voor Build + Run. Wij voeren uit tot je klaar bent om te hiren. Of je blijft bij ons — geen lock-in, maar ook geen druk.',
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
                q: 'Waarom eerst Diagnose betalen?',
                a: 'Omdat bouwen zonder weten zonde is van je geld. De diagnose voorkomt dat we de verkeerde dingen bouwen. Je krijgt een strategisch rapport dat ook zonder ons waardevol is. Geen fit? Je houdt de roadmap.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-neutral-800 border border-neutral-700 rounded-xl group">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Klaar om te bouwen?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start met een diagnose. 1-2 weken, €2.500, en je weet exact waar je staat.<br />
            <span className="text-gray-500">Geen fit? Geen probleem. Je houdt het rapport en de roadmap.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:tim@accelr.nl" className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors">
              Plan je diagnose →
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
              <a href="#werkwijze" className="hover:text-white transition-colors">Werkwijze</a>
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
