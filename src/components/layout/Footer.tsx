'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

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
              accelr<span className="text-green-500">.</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {t('services')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/diensten/build')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  BUILD
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/diensten/run')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  RUN
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/diensten/grow')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  GROW
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/diensten')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Alle diensten' : 'All services'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {t('problems')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/problemen/geen-pipeline')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Geen pipeline' : 'No pipeline'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/problemen/afhankelijk-van-founder')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Afhankelijk van founder' : 'Founder-dependent sales'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/problemen/inconsistente-omzet')} className="hover:text-green-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'nl' ? 'Inconsistente omzet' : 'Inconsistent revenue'}
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
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('location')}
            </p>
          </div>
        </div>
        <div className="text-center text-sm pt-8 border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          {t('copyright')} | <Link href={getLocalizedPath('/privacy')} className="hover:text-green-400 transition-colors">{locale === 'nl' ? 'Privacy' : 'Privacy'}</Link>
        </div>
      </div>
    </footer>
  )
}


