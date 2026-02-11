'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import ServicesDropdown from './ServicesDropdown'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesItems = [
    { name: locale === 'nl' ? 'BUILD' : 'BUILD', href: locale === 'nl' ? '/diensten/build' : '/en/services/build' },
    { name: locale === 'nl' ? 'RUN' : 'RUN', href: locale === 'nl' ? '/diensten/run' : '/en/services/run' },
    { name: locale === 'nl' ? 'GROW' : 'GROW', href: locale === 'nl' ? '/diensten/grow' : '/en/services/grow' },
  ]

  const getLocalizedPath = (path: string) => {
    return locale === 'nl' ? path : `/en${path}`
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={getLocalizedPath('/')} className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          accelr<span style={{ color: 'var(--text-primary)' }}>.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ServicesDropdown />
          <Link href={getLocalizedPath('/score')} className="nav-link transition-colors text-sm" style={{ color: 'var(--text-secondary)' }}>{t('score')}</Link>
          <Link href={getLocalizedPath('/cases')} className="nav-link transition-colors text-sm" style={{ color: 'var(--text-secondary)' }}>{t('cases')}</Link>
          <Link href={getLocalizedPath('/over-ons')} className="nav-link transition-colors text-sm" style={{ color: 'var(--text-secondary)' }}>{t('about')}</Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <a 
            href="/portal/login" 
            className="border border-[#2ECC71] text-inherit px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2ECC71]/10 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Accelr Portal →
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
            <div>
              <button
                className="nav-link text-sm py-2 flex items-center justify-between w-full"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                {t('services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-link text-sm py-2 block"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-semibold">{item.name}</div>
                    </Link>
                  ))}
                  <Link
                    href={getLocalizedPath('/diensten')}
                    className="nav-link text-sm py-2 block"
                    style={{ color: 'var(--text-secondary)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === 'nl' ? 'Alle diensten' : 'All services'}
                  </Link>
                </div>
              )}
            </div>
            <Link href={getLocalizedPath('/score')} className="nav-link text-sm py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => setMobileMenuOpen(false)}>{t('score')}</Link>
            <Link href={getLocalizedPath('/cases')} className="nav-link text-sm py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => setMobileMenuOpen(false)}>{t('cases')}</Link>
            <Link href={getLocalizedPath('/over-ons')} className="nav-link text-sm py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => setMobileMenuOpen(false)}>{t('about')}</Link>
            <div className="flex items-center justify-between py-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <a 
              href="/portal/login" 
              className="border border-[#2ECC71] text-inherit px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2ECC71]/10 transition-colors text-center block"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accelr Portal →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}


