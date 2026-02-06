'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          accelr<span className="text-green-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/expertise" className="nav-link transition-colors text-sm">Expertise</a>
          <a href="/blueprint" className="nav-link transition-colors text-sm">Blueprint</a>
          <a href="/login" className="nav-link transition-colors text-sm">Login</a>
          <ThemeToggle />
          <a 
            href="/diagnose" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors text-sm"
          >
            Start gratis scan
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-primary)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="/expertise" className="nav-link text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
            <a href="/blueprint" className="nav-link text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Blueprint</a>
            <a href="/login" className="nav-link text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Login</a>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Theme</span>
              <ThemeToggle />
            </div>
            <a 
              href="/diagnose" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start gratis scan
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
