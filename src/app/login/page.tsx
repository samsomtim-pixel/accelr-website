'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // TODO: Implement actual login logic
    // For now, just simulate a login
    setTimeout(() => {
      setLoading(false)
      // Redirect to diagnose/scan after login
      window.location.href = '/diagnose'
    }, 1000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navigation />

      <section className="px-6 py-20 md:py-32" style={{ paddingTop: '120px' }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              Welkom terug
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Log in om toegang te krijgen tot je account
            </p>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-color)', 
                    borderWidth: '1px', 
                    borderStyle: 'solid',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="jouw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Wachtwoord
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-color)', 
                    borderWidth: '1px', 
                    borderStyle: 'solid',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)', 
                      borderColor: 'var(--border-color)',
                      accentColor: '#10b981'
                    }}
                  />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Onthoud mij</span>
                </label>
                <a href="#" className="text-sm text-green-500 hover:text-green-400 transition-colors">
                  Wachtwoord vergeten?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {loading ? 'Inloggen...' : 'Inloggen'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                Nog geen account?{' '}
                <a href="/diagnose" className="text-green-500 hover:text-green-400 font-semibold transition-colors">
                  Start met de gratis scan →
                </a>
              </p>
            </div>
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
