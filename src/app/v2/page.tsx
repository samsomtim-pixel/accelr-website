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
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">accelr</span>
          <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full ml-0.5 mb-3"></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-400 hover:text-white transition text-sm">Diensten</a>
          <a href="#process" className="text-gray-400 hover:text-white transition text-sm">Werkwijze</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">Prijzen</a>
          <a href="#faq" className="text-gray-400 hover:text-white transition text-sm">FAQ</a>
          <a href="#contact" className="bg-[#0052CC] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0052CC]/90 transition">
            Plan je diagnose
          </a>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  const stats = [
    { value: 8, suffix: '+', label: 'Jaar ervaring' },
    { value: 50, suffix: '+', label: 'Stacks gebouwd' },
    { value: 100, suffix: '%', label: 'Eigenaarschap voor jou' },
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
        
        {/* Logo */}
        <div className="flex items-center mb-8">
          <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">accelr</span>
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-[#0052CC] rounded-full ml-1 md:ml-1.5 lg:ml-2 mb-6 md:mb-8 lg:mb-10"></span>
        </div>
        
        <div className="max-w-2xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Build once. Scale forever.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Wij bouwen de sales infrastructuur die meetings boekt terwijl jij focust op strategie.&nbsp;Van oprichter-gedreven naar schaalbaar in 90 dagen.
          </p>
        </div>
        
        {/* CTA */}
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition group"
        >
          Plan je diagnose 
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
      title: 'Leads op de automatische piloot',
      description: 'De juiste tools, slim gekoppeld. Prospecting, outreach, calling, CRM. Alles geïntegreerd, alles werkend.',
    },
    {
      title: 'Alles in één dashboard',
      description: 'Eén overzicht van je hele pipeline. Geen 5 tabs. Geen exports. Real-time metrics van lead tot deal.',
    },
    {
      title: 'Bewezen scripts die converteren',
      description: 'Email sequences en call frameworks die werken. Klaar om te gebruiken, geoptimaliseerd voor jouw markt.',
    },
    {
      title: 'Jullie team runt het of wij nemen dit uit handen',
      description: 'Training zodat jullie de stack zelf kunnen runnen. Of wij blijven het voor je doen.',
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Wat je krijgt
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
          className="mt-8 inline-flex items-center gap-2 bg-[#0052CC] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0052CC]/90 transition group"
        >
          Plan je diagnose
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}

// Process Section
function Process() {
  const steps = [
    { num: '01', title: 'Diagnose', description: 'Jouw business, doelen en situatie. De basis voor een aanpak op maat.' },
    { num: '02', title: 'Ontwerp', description: 'De juiste tools, slim gekoppeld, heldere workflows. Pas na jouw akkoord aan de slag.' },
    { num: '03', title: 'Implementatie', description: 'Alles gebouwd en werkend opgeleverd. Jij hoeft niks te doen.' },
    { num: '04', title: 'Training', description: 'Jouw team leert de stack runnen. Of het wordt voor je gedaan.' },
    { num: '05', title: 'Support', description: 'Blijvende ondersteuning terwijl jij schaalt.' },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Binnen 4 weken aantoonbaar resultaat.
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
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
// ICP Statement Section
function ICPStatement() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Voor wie dit werkt
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            B2B founders met €1-20M ARR die nog steeds de beste verkoper zijn.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Je hebt tools, maar geen systeem. Je wilt schalen, maar mist een effectief proces of de juiste mensen om het te doen.
          </p>
        </div>
      </div>
    </section>
  )
}

// Differentiation Section
function Differentiation() {
  const comparisons = [
    {
      vs: 'zelf doen',
      text: '6 maanden trial-and-error of 6 weken met ons.',
    },
    {
      vs: 'agencies',
      text: 'Zij boeken meetings. Accelr bouwt het systeem dat blijft werken zonder ons.',
    },
    {
      vs: 'consultants',
      text: 'Zij leveren slides. Accelr levert een werkende stack.',
    },
    {
      vs: 'Tools',
      text: 'Tools zijn instrumenten. Accelr de dirigent.',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Waarom Accelr?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((comp, i) => (
            <div 
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="text-[#0052CC] text-sm font-medium mb-3">vs. {comp.vs}</div>
              <p className="text-gray-400 leading-relaxed">{comp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Social Proof Section
function SocialProof() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#0052CC]/20 to-transparent border border-white/10 rounded-2xl p-8 md:p-12">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Eerste 3 pilots: 50% korting in ruil voor case study.
          </p>
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const tiers = [
    {
      name: 'Build',
      subtitle: 'Infrastructuur, klaar voor gebruik',
      price: '€8-12k',
      period: 'Eenmalig · 4-6 weken',
      features: ['Tool selectie & configuratie', 'CRM integratie', 'Email sequences', 'Unified dashboard', 'Volledige documentatie'],
    },
    {
      name: 'Build + Train',
      subtitle: 'Infrastructuur + enabled team',
      price: '€10-15k',
      period: 'Eenmalig · 6-8 weken',
      features: ['Volledige stack setup', 'Hands-on teamtraining', 'Playbook & scripts', 'Call coaching sessies', '30 dagen support'],
      featured: true,
    },
    {
      name: 'Build + Run',
      subtitle: 'Volledig beheerde outbound',
      price: 'Vanaf €3k',
      priceSuffix: '/maand',
      period: 'Na eenmalige setup',
      features: ['Volledige stack setup', 'Minimaal 10 meetings/maand', 'Dagelijkse optimalisatie', 'Wekelijkse call + rapport', 'Opzegbaar na 3 maanden'],
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Helder. Geen verrassingen.
          </h2>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={`rounded-2xl p-8 flex flex-col ${tier.featured ? 'bg-[#0052CC] ring-2 ring-[#0052CC]' : 'bg-white/5 border border-white/10'}`}
            >
              <h3 className={`text-xl font-semibold mb-1 ${tier.featured ? 'text-white' : 'text-white'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>
                {(tier as any).subtitle}
              </p>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-white'}`}>
                  {tier.price}
                </span>
                {(tier as any).priceSuffix && (
                  <span className={tier.featured ? 'text-white/70' : 'text-gray-500'}>{(tier as any).priceSuffix}</span>
                )}
                <div className={`text-sm mt-2 ${tier.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  {tier.period}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={16} className={tier.featured ? 'text-white' : 'text-[#0052CC]'} />
                    <span className={tier.featured ? 'text-white/90' : 'text-gray-400'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition mt-auto ${
                  tier.featured 
                    ? 'bg-white text-[#0A0A0A] hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Plan je diagnose
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
      q: 'Moet ik zelf de tools afnemen?',
      a: 'Ja. Jij neemt de tool-abonnementen af, wij configureren en integreren alles. Zo blijf je eigenaar van je data.',
    },
    {
      q: 'Wat als ik geen sales team heb?',
      a: 'Dan is Build + Run de beste optie. Wij runnen de stack tot je klaar bent om iemand aan te nemen.',
    },
    {
      q: 'Hoe snel kunnen we resultaten verwachten?',
      a: 'Stack is live binnen 4-6 weken. Eerste resultaten binnen 2 weken na livegang.',
    },
    {
      q: 'Welke tools worden gebruikt?',
      a: 'Afhankelijk van jouw situatie. Meestal Apollo, Reply.io, Aircall en een CRM. Plus een eigen dashboard dat alles samenvoegt.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Klaar om je sales stack te bouwen?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="mailto:tim@accelr.nl"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                <Mail size={18} />
                tim@accelr.nl
              </a>
              <a 
                href="https://www.linkedin.com/in/timsamsom/"
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
            <p className="text-gray-500 text-sm">Sales infrastructuur voor B2B groei.</p>
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
                <a href="mailto:tim@accelr.nl" className="text-gray-400 hover:text-white transition text-sm">Email</a>
                <a href="https://www.linkedin.com/in/timsamsom/" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
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
      <ICPStatement />
      <Differentiation />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

