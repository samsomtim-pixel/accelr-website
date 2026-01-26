'use client'

import { useState, useEffect } from 'react'
import { X, Settings, Check } from 'lucide-react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const updateConsent = (analyticsValue: boolean, marketingValue: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: analyticsValue ? 'granted' : 'denied',
        ad_storage: marketingValue ? 'granted' : 'denied',
      })
    }
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: analyticsValue, marketing: marketingValue }))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleAcceptAll = () => {
    setAnalytics(true)
    setMarketing(true)
    updateConsent(true, true)
  }

  const handleRejectAll = () => {
    setAnalytics(false)
    setMarketing(false)
    updateConsent(false, false)
  }

  const handleSaveSettings = () => {
    updateConsent(analytics, marketing)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setShowBanner(false)} />
      
      {/* Banner */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
          {!showSettings ? (
            <>
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Cookie-instellingen</h3>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Sluiten"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-400 mb-6">
                We gebruiken cookies om je ervaring te verbeteren en onze website te analyseren. 
                Je kunt kiezen welke cookies je accepteert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-6 py-3 rounded-lg transition-colors flex-1"
                >
                  Accepteren
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex-1"
                >
                  Weigeren
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Instellingen
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Cookie-instellingen</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Terug"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-400 mb-6">
                Kies welke cookies je accepteert. Analytische cookies helpen ons de website te verbeteren. 
                Marketing cookies worden gebruikt voor gepersonaliseerde advertenties.
              </p>
              
              <div className="space-y-4 mb-6">
                {/* Analytics Toggle */}
                <div className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium mb-1">Analytisch</p>
                    <p className="text-sm text-gray-400">Helpt ons de website te analyseren en verbeteren</p>
                  </div>
                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      analytics ? 'bg-green-500' : 'bg-neutral-600'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Marketing Toggle */}
                <div className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium mb-1">Marketing</p>
                    <p className="text-sm text-gray-400">Voor gepersonaliseerde advertenties en content</p>
                  </div>
                  <button
                    onClick={() => setMarketing(!marketing)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      marketing ? 'bg-green-500' : 'bg-neutral-600'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleSaveSettings}
                  className="bg-green-500 hover:bg-green-600 text-neutral-950 font-semibold px-6 py-3 rounded-lg transition-colors flex-1 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Instellingen opslaan
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Annuleren
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

