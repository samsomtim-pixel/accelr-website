'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Check, Mail, Linkedin, ChevronDown, ArrowUpRight } from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [end])
  
  return <span>{count}{suffix}</span>
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-white">accelr</span>
          <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full ml-0.5 mb-3"></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-400 hover:text-white transition text-sm">Diensten</a>
          <a href="#process" className="text-gray-400 hover:text-white transition text-sm">Werkwijze</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">Prijzen</a>
          <a href="#faq" className="text-gray-400 hover:text-white transition text-sm">FAQ</a>
          <a href="#contact" className="bg-white text-[#0A0A0A] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-200 transition">
            Neem contact op
          </a>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  const stats = [
    { value: 50, suffix: '+', label: 'Deals gesloten' },
    { value: 8, suffix: '+', label: 'Jaar ervaring' },
    { value: 95, suffix: '%', label: 'Klantbehoud' },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto w-full">
        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-16 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
          ACCELR
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          We bouwen voorspelbare revenue pipelines voor B2B-bedrijven. We werken met teams die langetermijndenken en met vertrouwen willen groeien.
        </p>
        
        {/* CTA */}
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition group"
        >
          Start gesprek 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      title: 'Lead Generation',
      description: 'We ontwerpen en voeren op maat gemaakte outbound campagnes uit via e-mailsequences en LinkedIn outreach. Gecombineerd met contentstrategie en AI-gestuurde kwalificatie helpen we je de juiste prospects te bereiken.',
    },
    {
      title: 'Sales Qualification',
      description: 'Ons team verzorgt discovery calls, lead scoring en BANT-kwalificatie. We zorgen dat alleen hoogwaardige kansen in je pipeline komen, zodat je geen tijd verspilt aan ongekwalificeerde leads.',
    },
    {
      title: 'Deal Closing',
      description: 'We voeren sales calls voor je uit, geven demos, schrijven proposals en verzorgen onderhandelingen. Onze AI call assistant vangt inzichten op uit elk gesprek.',
    },
    {
      title: 'Revenue Operations',
      description: 'We helpen je schalen met CRM-setup, pipeline dashboards, sales playbooks en teamtraining. Bouw een sales machine die zonder jou draait.',
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#0052CC] text-sm font-medium mb-4">01 Diensten</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Niet alleen leads — een solide basis voor langetermijngroei
          </h2>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-between">
                {service.title}
                <ArrowUpRight size={20} className="text-gray-500 group-hover:text-[#0052CC] transition-colors" />
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Card */}
        <a 
          href="#contact"
          className="mt-8 block bg-[#0052CC] rounded-2xl p-8 hover:bg-[#0052CC]/90 transition group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm mb-1">Klaar om te beginnen?</p>
              <p className="text-white text-xl font-semibold">Neem contact op</p>
            </div>
            <ArrowRight size={24} className="text-white group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  )
}

// Process Section
function Process() {
  const steps = [
    { num: '01', title: 'Ontdekking', description: 'We nemen de tijd om je business, ICP en doelen te begrijpen. Deze fase legt de basis voor een op maat gemaakte aanpak.' },
    { num: '02', title: 'Strategie', description: 'Op basis van de ontdekking definiëren we een heldere sales playbook die aansluit bij je doelen en groeifase.' },
    { num: '03', title: 'Uitvoering', description: 'We brengen de strategie tot leven via gerichte outreach, kwalificatie en deal management.' },
    { num: '04', title: 'Optimalisatie', description: 'We analyseren resultaten, A/B testen messaging en verfijnen de aanpak om conversiepercentages te verbeteren.' },
    { num: '05', title: 'Doorlopende ondersteuning', description: 'We blijven ondersteunen terwijl je schaalt. Of je nu opschaalt of interne teams bouwt, we passen ons aan.' },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#0052CC] text-sm font-medium mb-4">02 Werkwijze</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Geen giswerk, gewoon een heldere route van intro → revenue
          </h2>
        </div>
        
        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="group flex gap-8 items-start p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-white/10 group-hover:text-[#0052CC]/50 transition-colors">
                {step.num}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const tiers = [
    {
      name: 'Lead Gen',
      price: '€3-4k',
      description: 'Genereren + Kwalificeren',
      features: ['Email sequences', 'LinkedIn outreach', 'Lead sourcing', 'Contentstrategie', 'Discovery calls', 'Lead scoring'],
      output: 'Gekwalificeerde meetings in je agenda',
    },
    {
      name: 'Full Cycle',
      price: '€6-8k',
      description: 'Lead Gen + Closing',
      features: ['Alles uit Lead Gen', 'Sales calls voor jou', 'Product demos', 'Proposal schrijven', 'Onderhandeling', 'AI call assistant'],
      output: 'Getekende deals',
      featured: true,
    },
    {
      name: 'Growth Partner',
      price: '€9-12k',
      description: 'Full Cycle + Scale',
      features: ['Alles uit Full Cycle', 'CRM + dashboards', 'Sales playbook', 'Wervingsondersteuning', 'Teamtraining', 'Optioneel: Ads'],
      output: 'Schaalbare sales machine',
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#0052CC] text-sm font-medium mb-4">03 Prijzen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Vaste prijzen. Geen commissie. Schaal wanneer je klaar bent.
          </h2>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={`rounded-2xl p-8 ${tier.featured ? 'bg-[#0052CC] ring-2 ring-[#0052CC]' : 'bg-white/5 border border-white/10'}`}
            >
              <h3 className={`text-xl font-semibold mb-1 ${tier.featured ? 'text-white' : 'text-white'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>
                {tier.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-white'}`}>
                  {tier.price}
                </span>
                <span className={tier.featured ? 'text-white/70' : 'text-gray-500'}>/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={16} className={tier.featured ? 'text-white' : 'text-[#0052CC]'} />
                    <span className={tier.featured ? 'text-white/90' : 'text-gray-400'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`text-sm font-medium mb-6 ${tier.featured ? 'text-white' : 'text-white'}`}>
                → {tier.output}
              </div>
              
              <a 
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition ${
                  tier.featured 
                    ? 'bg-white text-[#0A0A0A] hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Begin
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      q: 'Met welke soorten bedrijven werken jullie?',
      a: 'We werken het beste met B2B-bedrijven (5-50 medewerkers) die product-market fit hebben bewezen, deal sizes tussen €50k-500k hebben en klaar zijn om hun sales te schalen. Geen dedicated sales team nodig — daar zijn wij voor.',
    },
    {
      q: 'Hoe snel kunnen we resultaten verwachten?',
      a: 'De meeste klanten zien hun eerste gekwalificeerde meetings binnen 2-3 weken na lancering. Een volledige sales cycle van lead tot gesloten deal duurt meestal 1-3 maanden, afhankelijk van je markt en deal size.',
    },
    {
      q: 'Sluiten jullie daadwerkelijk deals, of genereren jullie alleen leads?',
      a: 'Beide. Onze Full Cycle en Growth Partner tiers omvatten deal closing — we voeren sales calls uit, geven demos, schrijven proposals en onderhandelen namens jou. Dat onderscheidt ons van typische lead gen agencies.',
    },
    {
      q: 'Welke tools en tech gebruiken jullie?',
      a: 'We gebruiken industry-leading tools: Instantly/Lemlist voor email, Expandi voor LinkedIn, Apollo/Clay voor lead sourcing, en HubSpot/Pipedrive voor CRM. Plus onze custom AI call assistant gebouwd op Twilio + Deepgram.',
    },
    {
      q: 'Hoe werkt de pricing? Zijn er verborgen kosten?',
      a: 'Eenvoudige maandelijkse retainer. Geen commissie, geen verborgen kosten, geen langetermijncontracten. Begin met wat je nodig hebt, schaal op wanneer je klaar bent. We geloven in het elke maand verdienen van je business.',
    },
    {
      q: 'Kunnen jullie ons later helpen een intern sales team op te bouwen?',
      a: 'Ja — onze Growth Partner tier omvat wervingsondersteuning, sales playbook documentatie en teamtraining. We helpen je de overstap maken van outsourced naar in-house wanneer je klaar bent.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#0052CC] text-sm font-medium mb-4">04 FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vragen? Antwoorden.
          </h2>
        </div>
        
        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
              >
                <span className="font-medium text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#0052CC]/20 to-transparent border border-white/10 rounded-3xl p-12 md:p-16">
          <div className="max-w-2xl">
            <p className="text-[#0052CC] text-sm font-medium mb-4">05 Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om een voorspelbare pipeline te bouwen?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              30 minuten. Geen pitch. We bespreken je situatie en kijken of het past.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="mailto:tim@accelr.io"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                <Mail size={18} />
                tim@accelr.io
              </a>
              <a 
                href="https://linkedin.com/in/timsam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold text-white">accelr</span>
              <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full ml-0.5 mb-3"></span>
            </div>
            <p className="text-gray-500 text-sm">Full-stack B2B sales. Van lead tot deal.</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Navigatie</p>
              <div className="flex flex-col gap-2">
                <a href="#services" className="text-gray-400 hover:text-white transition text-sm">Diensten</a>
                <a href="#process" className="text-gray-400 hover:text-white transition text-sm">Werkwijze</a>
                <a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">Prijzen</a>
                <a href="#faq" className="text-gray-400 hover:text-white transition text-sm">FAQ</a>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Contact</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:tim@accelr.io" className="text-gray-400 hover:text-white transition text-sm">Email</a>
                <a href="https://linkedin.com/in/timsam" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Accelr. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
