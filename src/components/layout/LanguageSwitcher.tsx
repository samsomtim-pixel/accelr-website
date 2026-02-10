'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
      <Link
        href={pathname}
        locale="nl"
        className={locale === 'nl' ? 'font-bold' : 'opacity-60 hover:opacity-100 transition-opacity'}
        style={{ color: locale === 'nl' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
      >
        NL
      </Link>
      <span style={{ color: 'var(--text-muted)' }}>|</span>
      <Link
        href={pathname}
        locale="en"
        className={locale === 'en' ? 'font-bold' : 'opacity-60 hover:opacity-100 transition-opacity'}
        style={{ color: locale === 'en' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
      >
        EN
      </Link>
    </div>
  );
}

