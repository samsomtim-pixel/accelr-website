'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`

  return (
    <footer className="px-6 py-12 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              accelr<span className="text-[#2ECC71]">.</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Navigatie
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/diensten')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Diensten' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/score')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  {t('score')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/cases')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  {t('cases')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/kennisbank')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Kennisbank' : 'Resources'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/over-ons')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {t('services')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/diensten/build')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  BUILD
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/diensten/run')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  RUN
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/diensten/grow')} className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
                  GROW
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {t('contact')}
            </h4>
            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              {t('email')}
            </p>
            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              {t('location')}
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
              KVK-nummer: 99623544
            </p>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/company/accelr-nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm pt-8 border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          © 2026 Accelr. Alle rechten voorbehouden. | <Link href={getLocalizedPath('/privacy')} className="hover:opacity-70 transition-opacity">{locale === 'nl' ? 'Privacy' : 'Privacy'}</Link>
        </div>
      </div>
    </footer>
  )
}


