'use client'

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Remove current locale prefix
      let newPath = pathname.replace(`/${locale}`, '').replace(/^\/en/, '') || '/';
      // Add new locale prefix if not NL
      if (newLocale === 'en' && newPath === '/') {
        newPath = '/en';
      } else if (newLocale === 'en' && !newPath.startsWith('/en')) {
        newPath = `/en${newPath}`;
      }
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
      <button
        onClick={() => switchLocale('nl')}
        disabled={isPending}
        className={locale === 'nl' ? 'font-semibold' : 'opacity-60 hover:opacity-100 transition-opacity'}
        style={{ color: locale === 'nl' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
      >
        NL
      </button>
      <span>|</span>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={locale === 'en' ? 'font-semibold' : 'opacity-60 hover:opacity-100 transition-opacity'}
        style={{ color: locale === 'en' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
      >
        EN
      </button>
    </div>
  );
}

