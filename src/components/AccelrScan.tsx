'use client'

import { useState } from 'react'
import { ScanLoading } from './ScanLoading'
import { ReportView } from './ReportView'

interface FormData {
  websiteUrl: string
  v1_sales_verantwoordelijke: string
  v2_jaaromzet: string
  v3_icp_helderheid: string
  v4_business_generatie: string
  v5_sales_proces: string
  v6_pipeline_voorspelbaarheid: string
  v7_crm_gebruik: string
  v8_sales_cyclus: string
  v9_dealgrootte: string
  v10_groeiblokkade: string
  v11_hiring_plannen: string
  name: string
  company: string
  email: string
  phone: string
  privacyAccepted: boolean
  marketingOptin: boolean
}

interface ScoreBreakdown {
  totaal: number
  niveau: string
  strategie_icp: number
  proces_pipeline: number
  technologie_data: number
  groei_readiness: number
}

interface QuestionOption {
  value: string
  label: string
  score?: number // Optioneel voor gescoorde vragen
  routeTo?: string // Optioneel voor dienst-routing (V10)
}

interface QuestionField {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
}

interface Question {
  id: string
  question: string
  type: 'text' | 'select' | 'contact'
  required?: boolean // Optioneel voor websiteUrlQuestion
  category?: string
  placeholder?: string
  tip?: string
  options?: QuestionOption[]
  fields?: QuestionField[]
}

// Website URL vraag (niet genummerd, extra datapunt)
const websiteUrlQuestion: Question = {
  id: 'websiteUrl',
  question: 'Wat is je website URL?',
  type: 'text',
  placeholder: 'https://jouwbedrijf.nl',
  required: false,
  tip: '💡 Optioneel: We gebruiken dit om je situatie beter te begrijpen'
}

// De 11 nieuwe vragen
const questions: Question[] = [
  {
    id: 'v1_sales_verantwoordelijke',
    question: 'Wie is primair verantwoordelijk voor sales?',
    type: 'select',
    required: true,
    category: 'strategie_icp',
    options: [
      { value: 'Dedicated sales team (SDR\'s + closers)', label: 'Dedicated sales team (SDR\'s + closers)', score: 25 },
      { value: '1-2 mensen doen sales fulltime', label: '1-2 mensen doen sales fulltime', score: 20 },
      { value: 'De founder doet sales naast andere taken', label: 'De founder doet sales naast andere taken', score: 5 },
      { value: 'Niemand doet actief sales', label: 'Niemand doet actief sales', score: 0 }
    ]
  },
  {
    id: 'v2_jaaromzet',
    question: 'Wat is jullie jaaromzet?',
    type: 'select',
    required: true,
    category: 'qualification', // NIET gescoord
    options: [
      { value: '< €500K', label: '< €500K' },
      { value: '€500K – €2M', label: '€500K – €2M' },
      { value: '€2M – €5M', label: '€2M – €5M' },
      { value: '€5M – €20M', label: '€5M – €20M' },
      { value: '€20M+', label: '€20M+' }
    ]
  },
  {
    id: 'v3_icp_helderheid',
    question: 'Hoe duidelijk is jullie ideale klant gedefinieerd?',
    type: 'select',
    required: true,
    category: 'strategie_icp',
    options: [
      { value: 'We kunnen exact beschrijven welk type bedrijf, welke functie en welk probleem we oplossen', label: 'We kunnen exact beschrijven welk type bedrijf, welke functie en welk probleem we oplossen', score: 25 },
      { value: 'We hebben een globaal beeld maar het is niet scherp genoeg om er outreach op te baseren', label: 'We hebben een globaal beeld maar het is niet scherp genoeg om er outreach op te baseren', score: 15 },
      { value: 'We verkopen aan iedereen die wil kopen', label: 'We verkopen aan iedereen die wil kopen', score: 5 },
      { value: 'We zijn hier nog niet mee bezig geweest', label: 'We zijn hier nog niet mee bezig geweest', score: 0 }
    ]
  },
  {
    id: 'v4_business_generatie',
    question: 'Hoe bewust is jullie aanpak voor het genereren van nieuwe business?',
    type: 'select',
    required: true,
    category: 'strategie_icp',
    options: [
      { value: 'Proactieve multi-channel strategie met tracking en optimalisatie', label: 'Proactieve multi-channel strategie met tracking en optimalisatie', score: 25 },
      { value: 'We hebben een plan maar voeren het niet consistent uit', label: 'We hebben een plan maar voeren het niet consistent uit', score: 15 },
      { value: 'We doen dingen maar niet structureel', label: 'We doen dingen maar niet structureel', score: 10 },
      { value: 'Reactief — leads komen wanneer ze komen', label: 'Reactief — leads komen wanneer ze komen', score: 0 }
    ]
  },
  {
    id: 'v5_sales_proces',
    question: 'Hebben jullie een gedocumenteerd, herhaalbaar sales proces?',
    type: 'select',
    required: true,
    category: 'proces_pipeline',
    options: [
      { value: 'Gedocumenteerd proces dat we reviewen en optimaliseren op basis van data', label: 'Gedocumenteerd proces dat we reviewen en optimaliseren op basis van data', score: 25 },
      { value: 'Gedocumenteerde fases met duidelijke criteria voor het voortbewegen van deals', label: 'Gedocumenteerde fases met duidelijke criteria voor het voortbewegen van deals', score: 20 },
      { value: 'We hebben ruwe fases maar ze zijn niet gedocumenteerd of consistent gevolgd', label: 'We hebben ruwe fases maar ze zijn niet gedocumenteerd of consistent gevolgd', score: 10 },
      { value: 'Geen gedefinieerd proces — we improviseren', label: 'Geen gedefinieerd proces — we improviseren', score: 0 }
    ]
  },
  {
    id: 'v6_pipeline_voorspelbaarheid',
    question: 'Hoe voorspelbaar is jullie pipeline van nieuwe kansen?',
    type: 'select',
    required: true,
    category: 'proces_pipeline',
    options: [
      { value: 'We weten vrij precies wat er de komende 3 maanden binnenkomt', label: 'We weten vrij precies wat er de komende 3 maanden binnenkomt', score: 25 },
      { value: 'We hebben een CRM maar de pipeline is niet betrouwbaar', label: 'We hebben een CRM maar de pipeline is niet betrouwbaar', score: 15 },
      { value: 'We schatten op gevoel', label: 'We schatten op gevoel', score: 5 },
      { value: 'We hebben geen idee', label: 'We hebben geen idee', score: 0 }
    ]
  },
  {
    id: 'v7_crm_gebruik',
    question: 'Hoe gebruiken jullie het CRM-systeem?',
    type: 'select',
    required: true,
    category: 'technologie_data',
    options: [
      { value: 'We tracken elke deal door gedefinieerde pipeline-fases met rapportage', label: 'We tracken elke deal door gedefinieerde pipeline-fases met rapportage', score: 25 },
      { value: 'We gebruiken het voor contactbeheer en basale deal tracking', label: 'We gebruiken het voor contactbeheer en basale deal tracking', score: 15 },
      { value: 'We hebben een CRM maar het wordt nauwelijks bijgehouden', label: 'We hebben een CRM maar het wordt nauwelijks bijgehouden', score: 5 },
      { value: 'Excel, Google Sheets of niks', label: 'Excel, Google Sheets of niks', score: 0 }
    ]
  },
  {
    id: 'v8_sales_cyclus',
    question: 'Hoe goed begrijpen en managen jullie de gemiddelde sales cyclus?',
    type: 'select',
    required: true,
    category: 'technologie_data',
    options: [
      { value: 'We meten het precies en werken actief aan verkorting', label: 'We meten het precies en werken actief aan verkorting', score: 25 },
      { value: 'We meten het en weten de gemiddelde duur', label: 'We meten het en weten de gemiddelde duur', score: 15 },
      { value: 'We hebben een globaal idee maar tracken het niet', label: 'We hebben een globaal idee maar tracken het niet', score: 5 },
      { value: 'We houden het niet bij', label: 'We houden het niet bij', score: 0 }
    ]
  },
  {
    id: 'v9_dealgrootte',
    question: 'Wat is jullie gemiddelde dealgrootte?',
    type: 'select',
    required: true,
    category: 'qualification', // NIET gescoord, gebruikt voor ROI-berekening
    options: [
      { value: '< €5K', label: '< €5K' },
      { value: '€5K – €15K', label: '€5K – €15K' },
      { value: '€15K – €50K', label: '€15K – €50K' },
      { value: '€50K+', label: '€50K+' }
    ]
  },
  {
    id: 'v10_groeiblokkade',
    question: 'Wat is de grootste groeiblokkade op dit moment?',
    type: 'select',
    required: true,
    category: 'qualification', // NIET gescoord, gebruikt voor dienst-routing
    options: [
      { value: 'Te weinig leads / geen instroom', label: 'Te weinig leads / geen instroom', routeTo: 'BUILD' },
      { value: 'Verkeerde type leads', label: 'Verkeerde type leads', routeTo: 'BUILD' },
      { value: 'Geen tijd voor acquisitie', label: 'Geen tijd voor acquisitie', routeTo: 'RUN' },
      { value: 'Geen structuur/proces', label: 'Geen structuur/proces', routeTo: 'BUILD' },
      { value: 'We groeien maar niet snel genoeg', label: 'We groeien maar niet snel genoeg', routeTo: 'GROW' }
    ]
  },
  {
    id: 'v11_hiring_plannen',
    question: 'Plannen jullie sales personeel aan te nemen in de komende 12 maanden?',
    type: 'select',
    required: true,
    category: 'qualification', // NIET gescoord, intent signaal
    options: [
      { value: 'Ja, we zoeken actief', label: 'Ja, we zoeken actief' },
      { value: 'Ja, binnen 6 maanden', label: 'Ja, binnen 6 maanden' },
      { value: 'Misschien, we oriënteren ons', label: 'Misschien, we oriënteren ons' },
      { value: 'Nee, niet op korte termijn', label: 'Nee, niet op korte termijn' }
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
  const [step, setStep] = useState(0) // 0 = intro, 1 = websiteUrl, 2+ = questions
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showScore, setShowScore] = useState(false)
  const [scoreBreakdown, setScoreBreakdown] = useState<ScoreBreakdown | null>(null)
  const [aanbevolenDienst, setAanbevolenDienst] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Calculate which question we're on (accounting for websiteUrl as step 1)
  const getCurrentQuestion = () => {
    if (step === 0) return null // Intro
    if (step === 1) return websiteUrlQuestion // Website URL (niet genummerd)
    return questions[step - 2] ?? null // Questions start at step 2
  }

  const currentQuestion = getCurrentQuestion()
  const totalQuestions = questions.length // 11 vragen + contactformulier = 12
  const totalSteps = 1 + 1 + totalQuestions // intro + websiteUrl + questions
  // Progress: intro=5%, websiteUrl=10%, then questions from 15% to 100%
  const progress = step === 0 ? 5 : step === 1 ? 10 : 10 + ((step - 1) / totalQuestions) * 90

  const handleChange = (value: string | string[]) => {
    if (!currentQuestion) return
    setFormData({ ...formData, [currentQuestion.id]: value })
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
    
    if (currentQuestion.required) {
      const value = formData[currentQuestion.id as keyof FormData]
      return value !== undefined && value !== '' && value !== null
    }
    
    return true
  }

  const handleNext = () => {
    // Intro step: go to website URL
    if (step === 0) {
      setStep(1)
      return
    }
    
    // Website URL step: go to first question
    if (step === 1) {
      setStep(2)
      return
    }
    
    // Question steps
    if (!isStepValid()) {
      return
    }
    
    const currentQuestionIndex = step - 2 // Account for intro + websiteUrl
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

  // Calculate weighted score per category
  const calculateScore = (): ScoreBreakdown => {
    // Strategie & ICP (25% gewicht) - V1, V3, V4
    const v1Score = questions[0]?.options?.find(opt => opt.value === formData.v1_sales_verantwoordelijke)?.score ?? 0
    const v3Score = questions[2]?.options?.find(opt => opt.value === formData.v3_icp_helderheid)?.score ?? 0
    const v4Score = questions[3]?.options?.find(opt => opt.value === formData.v4_business_generatie)?.score ?? 0
    const strategieRaw = ((v1Score + v3Score + v4Score) / 75) * 100
    const strategieGewogen = strategieRaw * 0.25

    // Proces & Pipeline (35% gewicht) - V5, V6
    const v5Score = questions[4]?.options?.find(opt => opt.value === formData.v5_sales_proces)?.score ?? 0
    const v6Score = questions[5]?.options?.find(opt => opt.value === formData.v6_pipeline_voorspelbaarheid)?.score ?? 0
    const procesRaw = ((v5Score + v6Score) / 50) * 100
    const procesGewogen = procesRaw * 0.35

    // Technologie & Data (20% gewicht) - V7, V8
    const v7Score = questions[6]?.options?.find(opt => opt.value === formData.v7_crm_gebruik)?.score ?? 0
    const v8Score = questions[7]?.options?.find(opt => opt.value === formData.v8_sales_cyclus)?.score ?? 0
    const technologieRaw = ((v7Score + v8Score) / 50) * 100
    const technologieGewogen = technologieRaw * 0.20

    // Groei Readiness (20% gewicht) - afgeleid uit V9, V10, V11
    let groeiScore = 0
    const v9Value = formData.v9_dealgrootte as string
    const v10Value = formData.v10_groeiblokkade as string
    const v11Value = formData.v11_hiring_plannen as string

    // V9: Deal grootte
    if (v9Value === '€50K+') {
      groeiScore += 15
    } else if (v9Value === '€15K – €50K') {
      groeiScore += 10
    }
    
    // V10: Groeiblokkade
    if (v10Value === 'We groeien maar niet snel genoeg') {
      groeiScore += 10
    }
    
    // V11: Hiring plannen
    if (v11Value === 'Ja, we zoeken actief' || v11Value === 'Ja, binnen 6 maanden') {
      groeiScore += 10
    }
    
    // Normaliseer naar 0-100, dan gewogen met 20%
    const groeiRaw = (groeiScore / 35) * 100
    const groeiGewogen = groeiRaw * 0.20

    const totaal = Math.round(strategieGewogen + procesGewogen + technologieGewogen + groeiGewogen)
    
    // Determine niveau based on score ranges
    let niveauLabel = 'Starter'
    if (totaal >= 76) {
      niveauLabel = 'Geoptimaliseerd'
    } else if (totaal >= 51) {
      niveauLabel = 'Gestructureerd'
    } else if (totaal >= 31) {
      niveauLabel = 'Fundament'
    }

    return {
      totaal: Math.max(0, Math.min(100, totaal)),
      niveau: niveauLabel,
      strategie_icp: Math.round(strategieRaw),
      proces_pipeline: Math.round(procesRaw),
      technologie_data: Math.round(technologieRaw),
      groei_readiness: Math.round(groeiRaw)
    }
  }

  // Determine recommended service based on score + V10
  const getRecommendedService = (score: number): string => {
    const v10Value = formData.v10_groeiblokkade as string
    
    // Check V10 first (takes precedence)
    if (v10Value === 'Te weinig leads / geen instroom' || 
        v10Value === 'Geen structuur/proces' || 
        v10Value === 'Verkeerde type leads') {
      return 'BUILD'
    }
    if (v10Value === 'Geen tijd voor acquisitie') {
      return 'RUN'
    }
    if (v10Value === 'We groeien maar niet snel genoeg') {
      return 'GROW'
    }
    
    // Fallback to score-based routing
    if (score <= 50) return 'BUILD'
    if (score <= 75) return 'RUN'
    return 'GROW'
  }

  const handleSubmit = async () => {
    // Calculate score immediately
    const calculatedScore = calculateScore()
    const recommendedService = getRecommendedService(calculatedScore.totaal)

    setScoreBreakdown(calculatedScore)
    setAanbevolenDienst(recommendedService)
    setShowScore(true)

    // Start webhook call
    setError(null)
    setSubmitError(null)
    setLoading(true)
    setSubmitted(false)

    try {
      const webhookData = {
        website_url: formData.websiteUrl || '',
        v1_sales_verantwoordelijke: formData.v1_sales_verantwoordelijke || '',
        v2_jaaromzet: formData.v2_jaaromzet || '',
        v3_icp_helderheid: formData.v3_icp_helderheid || '',
        v4_business_generatie: formData.v4_business_generatie || '',
        v5_sales_proces: formData.v5_sales_proces || '',
        v6_pipeline_voorspelbaarheid: formData.v6_pipeline_voorspelbaarheid || '',
        v7_crm_gebruik: formData.v7_crm_gebruik || '',
        v8_sales_cyclus: formData.v8_sales_cyclus || '',
        v9_dealgrootte: formData.v9_dealgrootte || '',
        v10_groeiblokkade: formData.v10_groeiblokkade || '',
        v11_hiring_plannen: formData.v11_hiring_plannen || '',
        scores: calculatedScore,
        aanbevolen_dienst: recommendedService,
        contact: {
          naam: formData.name || '',
          bedrijf: formData.company || '',
          email: formData.email || '',
          telefoon: formData.phone || '',
          marketing_optin: formData.marketingOptin || false
        },
        submitted_at: new Date().toISOString()
      }

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

      setSubmitted(true)
      setLoading(false)
      setSubmitError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Er is een fout opgetreden bij het verzenden van je scan.'
      setSubmitError(errorMessage)
      setLoading(false)
      console.error('Webhook submission failed:', err)
    }
  }

  // Score screen (shown immediately after submit)
  if (showScore && scoreBreakdown) {
    const score = scoreBreakdown.totaal
    const scoreLabel = scoreBreakdown.niveau
    // Color mapping: Starter (0-30) = red, Fundament (31-50) = orange, Gestructureerd (51-75) = yellow/green, Geoptimaliseerd (76-100) = green
    const scoreColorClass = score <= 30 ? 'text-red-400' : score <= 50 ? 'text-orange-400' : score <= 75 ? 'text-yellow-400' : 'text-green-400'
    const circleColor = score <= 30 ? '#ef4444' : score <= 50 ? '#f97316' : score <= 75 ? '#fbbf24' : '#22c55e'
    
    // Get message based on niveau
    const niveauMessage = score <= 30 
      ? 'Geen sales machine. Alles hangt aan de founder.'
      : score <= 50
      ? 'Er zijn stukken maar het systeem mist.'
      : score <= 75
      ? 'Fundamenten staan, optimalisatie mist.'
      : 'Jullie draaien goed. Tijd om te versnellen.'
    
    const circumference = 2 * Math.PI * 45
    const offset = circumference - (score / 100) * circumference

    return (
      <div className="min-h-screen p-6 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                accelr<span style={{ color: 'var(--text-primary)' }}>.</span>
              </div>
            </div>
          </div>

          {/* Score Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl p-8 mb-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Jouw Accelr Score
              </h2>

              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      style={{ color: 'var(--border-color)' }}
                    />
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

              {/* Niveau Message */}
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                  {niveauMessage}
                </p>
              </div>

              {/* Score Breakdown */}
              <div className="mb-8 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Strategie & ICP</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{scoreBreakdown.strategie_icp}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Proces & Pipeline</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{scoreBreakdown.proces_pipeline}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Technologie & Data</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{scoreBreakdown.technologie_data}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Groei Readiness</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{scoreBreakdown.groei_readiness}%</span>
                </div>
              </div>

              {/* Recommended Service */}
              {aanbevolenDienst && (
                <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <p className="text-sm text-center font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Aanbevolen dienst: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{aanbevolenDienst}</span>
                  </p>
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
                <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <p className="text-sm text-center font-medium" style={{ color: 'var(--text-secondary)' }}>
                    ✓ Je scan is succesvol verzonden!
                  </p>
                </div>
              )}

              {/* Email message */}
              <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                  Je volledige rapport ontvang je binnen 24 uur op <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{formData.email}</span>
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://calendly.com/tim-accelr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Plan een gesprek →
                </a>
                <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>30 minuten, vrijblijvend</p>
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
      <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
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
      <div className="min-h-screen p-6 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="max-w-[600px] w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                accelr<span style={{ color: 'var(--text-primary)' }}>.</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              <span>Intro</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full rounded-full h-2" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ backgroundColor: 'var(--text-primary)', width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Intro Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl p-8 mb-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              {/* Badge */}
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  100% Gratis Sales Scan
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
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Ontdek hoe sterk jullie sales machine is — en wat het je kost.
              </h1>

              {/* Subtext with checkmarks */}
              <div className="flex justify-center mb-8">
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>✓</span>
                    <span>Score op 4 dimensies: Strategie, Proces, Technologie en Groei</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>✓</span>
                    <span>Benchmark tegen vergelijkbare Nederlandse B2B-bedrijven</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>✓</span>
                    <span>Inclusief gemiste-omzet berekening</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <button
                  onClick={handleNext}
                  className="bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:opacity-80 font-semibold px-8 py-4 rounded-lg transition-opacity"
                >
                  Start scan
                </button>
              </div>

              {/* Footer text */}
              <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
                3 min ⏱️
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }

  // Questions screen (step 1+)
  if (!currentQuestion) return null

  // Calculate question number for display
  // Website URL (step 1) heeft geen nummer, vragen beginnen bij step 2 = vraag 1
  const questionNumber = step === 1 ? null : step - 1

  return (
    <div className="min-h-screen p-6 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              accelr<span className="text-green-500">.</span>
            </div>
          </div>
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
            100% Gratis Sales Scan
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            <span>
              {step === 1 
                ? 'Extra informatie' 
                : currentQuestion.type === 'contact' 
                ? 'Contactgegevens' 
                : `Vraag ${questionNumber} van 11`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full rounded-full h-2" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative rounded-2xl p-8 mb-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {currentQuestion.question}
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                {error}
              </div>
            )}

            {/* Tip box for website URL */}
            {currentQuestion.id === 'websiteUrl' && currentQuestion.tip && (
              <div className="mb-4 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-200 text-sm">
                {currentQuestion.tip}
              </div>
            )}

            <div className="mb-6">
              {currentQuestion.type === 'text' ? (
                <input
                  type="text"
                  value={(formData[currentQuestion.id as keyof FormData] as string) || ''}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  style={{ borderColor: 'var(--border-color)' }}
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
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
                            ? 'opacity-100'
                            : 'hover:opacity-70'
                        }`}
                        style={isSelected 
                          ? { color: 'var(--text-primary)' }
                          : { 
                              backgroundColor: 'var(--bg-secondary)', 
                              borderColor: 'var(--border-color)',
                              color: 'var(--text-secondary)'
                            }
                        }
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'opacity-100'
                            : ''
                        }`}
                        style={!isSelected ? { borderColor: 'var(--border-color)' } : {}}
                        >
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{option.label}</span>
                      </button>
                    )
                  })}
                </div>
              ) : currentQuestion.type === 'contact' ? (
                <div className="space-y-4">
                  {currentQuestion.fields?.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        {field.label} {field.required && <span className="text-green-400">*</span>}
                      </label>
                      <input
                        type={field.type}
                        value={(formData[field.id as keyof FormData] as string) || ''}
                        onChange={(e) => handleContactChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  style={{ borderColor: 'var(--border-color)' }}
                        style={{ 
                          backgroundColor: 'var(--bg-secondary)', 
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)'
                        }}
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
                        className="mt-1 w-4 h-4 text-green-500 rounded focus:ring-green-500 focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--bg-secondary)', 
                          borderColor: 'var(--border-color)'
                        }}
                        required
                      />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
                        className="mt-1 w-4 h-4 text-green-500 rounded focus:ring-green-500 focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--bg-secondary)', 
                          borderColor: 'var(--border-color)'
                        }}
                      />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Ik ontvang graag sales- en marketingtips
                      </span>
                    </label>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border rounded-lg transition-colors"
                  style={{ 
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border-color)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.borderColor = 'var(--border-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                  }}
                >
                  ← Vorige
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-green-500 hover:bg-green-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                style={!isStepValid() ? {
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-muted)'
                } : {}}
              >
                {step === totalSteps - 1 ? 'Verstuur mijn scan' : 'Volgende →'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
