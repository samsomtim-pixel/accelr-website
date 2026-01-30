'use client'

import { useState } from 'react'
import { ScanLoading } from './ScanLoading'
import { ReportView } from './ReportView'

interface FormData {
  websiteUrl: string
  dealSize: string
  meetingsPerMonth: string
  growthBlocker: string
  targetSector: string
  targetFunction: string
  teamCapacity: string
  priority: string
  currentTools: string | string[]
  outboundExperience: string
  name: string
  company: string
  email: string
  phone: string
  privacyAccepted: boolean
  marketingOptin: boolean
}

const questions = [
  {
    id: 'websiteUrl',
    question: 'Wat is je website URL?',
    type: 'text',
    placeholder: 'https://jouwbedrijf.nl',
    required: false,
    tip: 'Optioneel: We gebruiken dit om je situatie beter te begrijpen'
  },
  {
    id: 'dealSize',
    question: 'Wat is je gemiddelde deal-size?',
    type: 'select',
    required: true,
    options: [
      { value: '<1k', label: '<€1k' },
      { value: '1k-5k', label: '€1k-€5k' },
      { value: '5k-15k', label: '€5k-€15k' },
      { value: '15k-50k', label: '€15k-€50k' },
      { value: '>50k', label: '>€50k' }
    ]
  },
  {
    id: 'meetingsPerMonth',
    question: 'Hoeveel sales gesprekken per maand hebben jullie nu?',
    type: 'select',
    required: true,
    options: [
      { value: '0-5', label: '0-5 — Founder doet het zelf' },
      { value: '5-15', label: '5-15 — Af en toe, niet structureel' },
      { value: '15-30', label: '15-30 — Regelmatig, maar wisselend' },
      { value: '30-50', label: '30-50 — Consistent, aan het groeien' },
      { value: '50+', label: '50+ — Sales machine draait' }
    ]
  },
  {
    id: 'growthBlocker',
    question: 'Wat is je grootste blokkade?',
    type: 'select',
    required: true,
    options: [
      { value: 'te weinig leads', label: 'Te weinig leads' },
      { value: 'niet kwalitatief', label: 'Leads zijn niet kwalitatief' },
      { value: 'geen tijd', label: 'Geen tijd voor sales' },
      { value: 'geen structuur', label: 'Geen structuur of proces' },
      { value: 'weten niet waar te beginnen', label: 'Weten niet waar te beginnen' }
    ]
  },
  {
    id: 'targetSector',
    question: 'In welke sector verkoop je?',
    type: 'select',
    required: true,
    options: [
      { value: 'SaaS', label: 'SaaS' },
      { value: 'IT', label: 'IT' },
      { value: 'Zakelijke Dienstverlening', label: 'Zakelijke Dienstverlening' },
      { value: 'Marketing & Media', label: 'Marketing & Media' },
      { value: 'Bouw', label: 'Bouw' },
      { value: 'Productie', label: 'Productie' },
      { value: 'Logistiek', label: 'Logistiek' },
      { value: 'Zorg', label: 'Zorg' },
      { value: 'Finance', label: 'Finance' },
      { value: 'Anders', label: 'Anders' }
    ]
  },
  {
    id: 'targetFunction',
    question: 'Welke functie is je ideale klant?',
    type: 'multiselect',
    required: true,
    options: [
      { value: 'CEO', label: 'CEO' },
      { value: 'CFO', label: 'CFO' },
      { value: 'CTO', label: 'CTO' },
      { value: 'CMO', label: 'CMO' },
      { value: 'Sales', label: 'Sales' },
      { value: 'HR', label: 'HR' },
      { value: 'Operations', label: 'Operations' },
      { value: 'Inkoop', label: 'Inkoop' },
      { value: 'Anders', label: 'Anders' }
    ]
  },
  {
    id: 'teamCapacity',
    question: 'Hoeveel gesprekken per maand is jullie doel?',
    type: 'select',
    required: true,
    options: [
      { value: '2x zoveel als nu', label: '2x zoveel als nu' },
      { value: '3x zoveel als nu', label: '3x zoveel als nu' },
      { value: '5x zoveel als nu', label: '5x zoveel als nu' },
      { value: '10x zoveel als nu', label: '10x zoveel als nu' },
      { value: 'Weet ik nog niet', label: 'Weet ik nog niet' }
    ]
  },
  {
    id: 'priority',
    question: 'Waarom is dit nu prioriteit?',
    type: 'select',
    required: true,
    options: [
      { value: 'Moet targets halen dit kwartaal', label: 'Moet targets halen dit kwartaal' },
      { value: 'Sales hangt te veel op één persoon', label: 'Sales hangt te veel op één persoon' },
      { value: 'Willen minder afhankelijk zijn van referrals', label: 'Willen minder afhankelijk zijn van referrals' },
      { value: 'Huidige aanpak schaalt niet', label: 'Huidige aanpak schaalt niet' },
      { value: 'Nieuwe markt of product lanceren', label: 'Nieuwe markt of product lanceren' },
      { value: 'Geen specifieke deadline, wel ambitie', label: 'Geen specifieke deadline, wel ambitie' }
    ]
  },
  {
    id: 'currentTools',
    question: 'Welke sales tools gebruik je al?',
    type: 'multiselect',
    required: false,
    options: [
      { value: 'LinkedIn Sales Navigator', label: 'LinkedIn Sales Navigator (profielen zoeken)' },
      { value: 'Email automation', label: 'Email automation (Lemlist, Instantly, Mailshake)' },
      { value: 'LinkedIn automation', label: 'LinkedIn automation (Expandi, Dripify, Waalaxy)' },
      { value: 'Data/verrijking', label: 'Data/verrijking (Apollo, Cognism, Lusha)' },
      { value: 'Calling tool', label: 'Calling tool (Aircall, Ringcentral)' },
      { value: 'CRM', label: 'CRM (HubSpot, Pipedrive, Salesforce)' },
      { value: 'Meeting scheduler', label: 'Meeting scheduler (Calendly, SavvyCal)' },
      { value: 'Geen', label: 'Geen van bovenstaande' }
    ]
  },
  {
    id: 'outboundExperience',
    question: 'Wat is je ervaring met outbound sales?',
    type: 'select',
    required: true,
    options: [
      { value: 'nooit', label: 'Nooit gedaan' },
      { value: 'zelf geprobeerd gestopt', label: 'Zelf geprobeerd, gestopt' },
      { value: 'agency werkte niet', label: 'Agency werkte niet' },
      { value: 'doen het niet goed genoeg', label: 'Doen het, maar niet goed genoeg' },
      { value: 'loopt goed', label: 'Loopt goed' }
    ]
  },
  {
    id: 'contact',
    question: 'Laat je contactgegevens achter',
    type: 'contact',
    required: true,
    fields: [
      { id: 'name', label: 'Naam', type: 'text', placeholder: 'Voornaam + Achternaam', required: true },
      { id: 'company', label: 'Bedrijf', type: 'text', placeholder: 'Bedrijfsnaam', required: false },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'je@email.com', required: true },
      { id: 'phone', label: 'Telefoon', type: 'tel', placeholder: '+31 6 12345678', required: false }
    ]
  }
]

export function AccelrScan() {
  const [step, setStep] = useState(0) // 0 = intro, 1+ = questions
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [potential, setPotential] = useState(0)
  const [gaps, setGaps] = useState<string[]>([])
  const [gapTexts, setGapTexts] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const currentQuestion = step > 0 ? questions[step - 1] : null
  const totalSteps = questions.length + 1 // +1 for intro
  const progress = step === 0 ? 5 : ((step / questions.length) * 100)

  // Helper function to split label and style text in parentheses
  const renderLabel = (label: string) => {
    const match = label.match(/^(.+?)\s*\((.+?)\)$/)
    if (match) {
      const [, mainText, parenthesesText] = match
      return (
        <>
          <span>{mainText}</span>
          <span className="text-neutral-500"> ({parenthesesText})</span>
        </>
      )
    }
    return <span>{label}</span>
  }

  const handleChange = (value: string | string[]) => {
    if (!currentQuestion) return
    setFormData({ ...formData, [currentQuestion.id]: value })
  }

  const handleMultiSelect = (value: string) => {
    if (!currentQuestion) return
    const current = Array.isArray(formData[currentQuestion.id as keyof FormData]) 
      ? (formData[currentQuestion.id as keyof FormData] as string[])
      : []
    
    if (value === 'Geen') {
      handleChange(['Geen'])
      return
    }
    
    if (current.includes('Geen')) {
      handleChange([value])
      return
    }
    
    if (current.includes(value)) {
      handleChange(current.filter(v => v !== value))
    } else {
      handleChange([...current, value])
    }
  }

  const handleContactChange = (fieldId: string, value: string) => {
    setFormData({ ...formData, [fieldId]: value })
  }

  const isStepValid = () => {
    if (!currentQuestion) return false
    
    if (currentQuestion.type === 'contact') {
      const nameValid = formData.name && formData.name.trim() !== ''
      const emailValid = formData.email && formData.email.trim() !== ''
      const privacyAccepted = formData.privacyAccepted === true
      return nameValid && emailValid && privacyAccepted
    }
    
    if (currentQuestion.type === 'multiselect') {
      const current = formData[currentQuestion.id as keyof FormData]
      return Array.isArray(current) && current.length > 0
    }
    
    if (currentQuestion.required) {
      const value = formData[currentQuestion.id as keyof FormData]
      return value !== undefined && value !== '' && value !== null
    }
    
    return true
  }

  const handleNext = () => {
    // Intro step: go to first question
    if (step === 0) {
      setStep(1)
      return
    }
    
    // Question steps
    if (!isStepValid()) {
      return
    }
    
    const currentQuestionIndex = step - 1
    if (currentQuestionIndex < questions.length - 1) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const calculateScore = () => {
    let score = 50

    // Huidige meetings
    const meetingsPerMonth = formData.meetingsPerMonth as string
    if (meetingsPerMonth === '0-5') score -= 15
    if (meetingsPerMonth === '5-15') score -= 5
    if (meetingsPerMonth === '30-50') score += 10
    if (meetingsPerMonth === '50+') score += 20

    // Tools
    const currentTools = Array.isArray(formData.currentTools) 
      ? formData.currentTools 
      : (formData.currentTools ? [formData.currentTools] : [])
    
    if (currentTools.includes('Geen') || currentTools.length === 0) score -= 20
    if (currentTools.length >= 3) score += 15
    if (currentTools.length >= 5) score += 10

    // Blokkade
    const growthBlocker = formData.growthBlocker as string
    if (growthBlocker === 'geen structuur') score -= 10
    if (growthBlocker === 'weten niet waar te beginnen') score -= 15

    // Ervaring
    const outboundExperience = formData.outboundExperience as string
    if (outboundExperience === 'agency werkte niet') score -= 10
    if (outboundExperience === 'nooit') score -= 5
    if (outboundExperience === 'loopt goed') score += 20

    return Math.max(0, Math.min(100, score))
  }

  const calculatePotential = () => {
    const dealSizeValues: Record<string, number> = {
      '<1k': 750,
      '1k-5k': 3000,
      '5k-15k': 10000,
      '15k-50k': 32500,
      '>50k': 75000
    }

    const currentMeetingsValues: Record<string, number> = {
      '0-5': 3,
      '5-15': 10,
      '15-30': 22,
      '30-50': 40,
      '50+': 60
    }

    const goalMultiplierValues: Record<string, number> = {
      '2x zoveel als nu': 2,
      '3x zoveel als nu': 3,
      '5x zoveel als nu': 5,
      '10x zoveel als nu': 10,
      'Weet ik nog niet': 3
    }

    const meetingsPerMonth = formData.meetingsPerMonth as string
    const teamCapacity = formData.teamCapacity as string
    const dealSizeKey = formData.dealSize as string

    const current = currentMeetingsValues[meetingsPerMonth] || 10
    const multiplier = goalMultiplierValues[teamCapacity] || 3
    const target = current * multiplier
    const dealSize = dealSizeValues[dealSizeKey] || 10000
    
    // Leak = (Target - Current) × 0.10 × DealSize
    const leak = (target - current) * 0.10 * dealSize

    return Math.max(0, Math.round(leak))
  }

  const identifyGaps = () => {
    const gapsList: { display: string; text: string }[] = []
    const meetingsPerMonth = formData.meetingsPerMonth as string
    const currentTools = Array.isArray(formData.currentTools) 
      ? formData.currentTools 
      : (formData.currentTools ? [formData.currentTools] : [])
    const growthBlocker = formData.growthBlocker as string
    const outboundExperience = formData.outboundExperience as string

    if (currentTools.includes('Geen') || currentTools.length === 0) {
      gapsList.push({ display: 'Geen sales automation', text: 'sales automation' })
    }

    if (growthBlocker === 'geen structuur') {
      gapsList.push({ display: 'Geen duidelijk proces', text: 'een duidelijk proces' })
    }

    if (outboundExperience === 'agency werkte niet') {
      gapsList.push({ display: 'Eerdere pogingen mislukt', text: 'werkende outbound strategie' })
    }

    const currentMeetings = ['0-5', '5-15']
    if (currentMeetings.includes(meetingsPerMonth)) {
      gapsList.push({ display: 'Te weinig nieuwe gesprekken', text: 'voldoende nieuwe gesprekken' })
    }

    if (!currentTools.includes('Email automation')) {
      gapsList.push({ display: 'Geen email automation', text: 'email automation' })
    }

    return gapsList
  }

  const handleSubmit = async () => {
    // Calculate score and potential immediately
    const calculatedScore = calculateScore()
    const calculatedPotential = calculatePotential()
    const identifiedGaps = identifyGaps()

    setScore(calculatedScore)
    setPotential(calculatedPotential)
    setGaps(identifiedGaps.map(g => g.display))
    setGapTexts(identifiedGaps.map(g => g.text))
    setShowScore(true)

    // Start webhook call
    setError(null)
    setSubmitError(null)
    setLoading(true)
    setSubmitted(false)

    try {
      // Map form data to webhook format - only include fields that exist
      const webhookData: Record<string, any> = {}
      
      if (formData.company) webhookData.company_name = formData.company
      if (formData.name) webhookData.name = formData.name
      if (formData.email) webhookData.email = formData.email
      if (formData.websiteUrl) webhookData.website = formData.websiteUrl
      if (formData.targetSector) webhookData.sector = formData.targetSector
      if (formData.dealSize) webhookData.deal_size = formData.dealSize
      if (formData.growthBlocker) webhookData.biggest_blocker = formData.growthBlocker
      if (formData.meetingsPerMonth) webhookData.current_meetings = formData.meetingsPerMonth
      if (formData.targetFunction) {
        webhookData.target_function = Array.isArray(formData.targetFunction) 
          ? formData.targetFunction.join(', ')
          : formData.targetFunction
      }
      if (formData.teamCapacity) webhookData.growth_goal = formData.teamCapacity
      if (formData.priority) webhookData.why_now = formData.priority
      if (formData.outboundExperience) webhookData.outbound_experience = formData.outboundExperience

      const response = await fetch('https://accelr.app.n8n.cloud/webhook/accelr-scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Webhook request failed: ${response.status} - ${errorText}`)
      }

      // Success - mark as submitted
      setSubmitted(true)
      setLoading(false)
      setSubmitError(null)
    } catch (err) {
      // Show error to user
      const errorMessage = err instanceof Error ? err.message : 'Er is een fout opgetreden bij het verzenden van je scan.'
      setSubmitError(errorMessage)
      setLoading(false)
      console.error('Webhook submission failed:', err)
    }
  }

  // Score screen (shown immediately after submit)
  if (showScore) {
    const scoreColor = score <= 40 ? 'red' : score <= 70 ? 'orange' : 'green'
    const scoreLabel = score <= 40 ? 'Kritiek' : score <= 70 ? 'Groeipotentieel' : 'Goed op weg'
    const scoreColorClass = score <= 40 ? 'text-red-400' : score <= 70 ? 'text-orange-400' : 'text-green-400'
    const circleColor = score <= 40 ? '#ef4444' : score <= 70 ? '#f97316' : '#22c55e'
    
    const circumference = 2 * Math.PI * 45 // radius = 45
    const offset = circumference - (score / 100) * circumference

    return (
      <div className="min-h-screen bg-neutral-950 text-white p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                accelr<span className="text-green-500">.</span>
              </div>
            </div>
          </div>

          {/* Score Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-bold mb-8 text-white text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Jouw Accelr Score
              </h2>

              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-neutral-700"
                    />
                    {/* Score circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="45"
                      stroke={circleColor}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`text-5xl font-bold ${scoreColorClass}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {score}
                    </div>
                    <div className={`text-sm mt-2 ${scoreColorClass}`}>
                      {scoreLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Leak */}
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-2">Maandelijks omzetlek</p>
                <p className="text-3xl font-bold text-red-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  €{potential.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </p>
                {gapTexts.length > 0 && (
                  <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                    Door het ontbreken van {gapTexts.slice(0, 2).join(' en ')} laat je maandelijks €{potential.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} liggen.
                  </p>
                )}
              </div>

              {/* Gaps */}
              {gaps.length > 0 && (
                <div className="mb-8">
                  <div className="space-y-3">
                    {gaps.map((gap, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <span className="text-red-400">❌</span>
                        <span>{gap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading/Success/Error message */}
              {loading && !submitted && !submitError && (
                <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg">
                  <p className="text-blue-400 text-sm text-center font-medium">
                    Je scan wordt verzonden...
                  </p>
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm text-center font-medium">
                    ⚠️ {submitError}
                  </p>
                  <p className="text-red-300 text-xs text-center mt-2">
                    Je score is wel berekend. Probeer het later opnieuw of neem contact met ons op.
                  </p>
                </div>
              )}
              {submitted && !submitError && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm text-center font-medium">
                    ✓ Je scan is succesvol verzonden!
                  </p>
                </div>
              )}

              {/* Email message */}
              <div className="mb-8 p-4 bg-neutral-800 rounded-lg">
                <p className="text-gray-400 text-sm text-center">
                  Je volledige rapport ontvang je binnen 24 uur op <span className="text-white font-medium">{formData.email}</span>
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://calendly.com/tim-accelr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Plan een gesprek →
                </a>
                <p className="text-gray-500 text-sm mt-3">30 minuten, vrijblijvend</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  if (loading) {
    return <ScanLoading />
  }

  if (report) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              accelr<span className="text-green-500">.</span>
            </div>
          </div>
          <ReportView report={report} />
        </div>
      </div>
    )
  }

  // Intro screen (step 0)
  if (step === 0) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-6 flex items-center justify-center">
        <div className="max-w-[600px] w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                accelr<span className="text-green-500">.</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Intro</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Intro Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-6">
              {/* Badge */}
              <div className="text-center mb-6">
                <div className="inline-block bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium">
                  100% Gratis Stack Scan
                </div>
              </div>

              {/* Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="B2B sales collaboration"
                  className="rounded-2xl shadow-lg max-w-[500px] w-full"
                />
              </div>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Beantwoord 10 korte vragen en ontvang binnen 24 uur een uitgebreid rapport.
              </h2>

              {/* Subtext with checkmarks */}
              <div className="flex justify-center mb-8">
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Analyse van je huidige situatie</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Tool aanbevelingen op maat</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>Wat het je kan opleveren</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <button
                  onClick={handleNext}
                  className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Start scan
                </button>
              </div>

              {/* Footer text */}
              <p className="text-center text-gray-500 text-sm">
                1 min ⏱️
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }

  // Questions screen (step 1+)
  if (!currentQuestion) return null

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              accelr<span className="text-green-500">.</span>
            </div>
          </div>
          <div className="inline-block bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-2">
            100% Gratis Stack Scan
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Vraag {step} van {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === 'multiselect' && (
              <p className="text-sm text-neutral-500 mb-6">
                Meerdere antwoorden mogelijk
              </p>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                {error}
              </div>
            )}

            {/* Tip box for website URL */}
            {currentQuestion.id === 'websiteUrl' && currentQuestion.tip && (
              <div className="mb-4 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-200 text-sm">
                💡 {currentQuestion.tip}
              </div>
            )}

            <div className="mb-6">
              {currentQuestion.type === 'text' ? (
                <input
                  type="text"
                  value={(formData[currentQuestion.id as keyof FormData] as string) || ''}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
              ) : currentQuestion.type === 'select' ? (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => {
                    const isSelected = formData[currentQuestion.id as keyof FormData] === option.value
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleChange(option.value)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-green-500/20 border-green-500 text-white'
                            : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:border-green-500/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'border-green-500 bg-green-500'
                            : 'border-neutral-700'
                        }`}>
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{renderLabel(option.label)}</span>
                      </button>
                    )
                  })}
                </div>
              ) : currentQuestion.type === 'multiselect' ? (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => {
                    const current = Array.isArray(formData[currentQuestion.id as keyof FormData]) 
                      ? (formData[currentQuestion.id as keyof FormData] as string[])
                      : []
                    const isSelected = current.includes(option.value)
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleMultiSelect(option.value)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-green-500/20 border-green-500 text-white'
                            : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:border-green-500/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'border-green-500 bg-green-500'
                            : 'border-neutral-700'
                        }`}>
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{renderLabel(option.label)}</span>
                      </button>
                    )
                  })}
                </div>
              ) : currentQuestion.type === 'contact' ? (
                <div className="space-y-4">
                  {currentQuestion.fields?.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        {field.label} {field.required && <span className="text-green-400">*</span>}
                      </label>
                      <input
                        type={field.type}
                        value={(formData[field.id as keyof FormData] as string) || ''}
                        onChange={(e) => handleContactChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                        required={field.required}
                      />
                    </div>
                  ))}
                  
                  {/* Privacy checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyAccepted === true}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-1 w-4 h-4 text-green-500 bg-neutral-800 border-neutral-700 rounded focus:ring-green-500 focus:ring-2"
                        required
                      />
                      <span className="text-sm text-gray-300">
                        Ik ga akkoord met de{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
                          privacyvoorwaarden
                        </a>
                        <span className="text-green-400"> *</span>
                      </span>
                    </label>
                  </div>
                  
                  {/* Marketing opt-in checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.marketingOptin === true}
                        onChange={(e) => setFormData({ ...formData, marketingOptin: e.target.checked })}
                        className="mt-1 w-4 h-4 text-green-500 bg-neutral-800 border-neutral-700 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-300">
                        Ik ontvang graag sales- en marketingtips
                      </span>
                    </label>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="text-gray-400 hover:text-white transition-colors px-6 py-3 border border-neutral-700 rounded-lg hover:border-neutral-600"
                >
                  ← Vorige
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-green-500 hover:bg-green-600 disabled:bg-neutral-700 disabled:text-gray-500 disabled:cursor-not-allowed text-neutral-950 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {step === questions.length ? 'Verstuur mijn scan' : 'Volgende →'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
