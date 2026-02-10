'use client';

import { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale();

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    // 150ms delay voordat dropdown sluit — genoeg om de gap te overbruggen
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  const getLocalizedPath = (path: string) => locale === 'nl' ? path : `/en${path}`;

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1 text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
        {locale === 'nl' ? 'Diensten' : 'Services'}
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown — let op: pt-2 creëert een ONZICHTBARE BRUG */}
      {open && (
        <div className="absolute top-full left-0 pt-2">
          {/* pt-2 hierboven is de truc: onzichtbare padding die 
              de gap overbrugt zodat mouseleave niet triggert */}
          <div className="rounded-xl shadow-xl py-2 min-w-[240px]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}>
            <Link
              href={getLocalizedPath('/diensten/build')}
              className="block px-4 py-2.5 text-sm transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>BUILD</span>
              <span className="block text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {locale === 'nl' ? 'Van nul naar werkend systeem' : 'From zero to working system'}
              </span>
            </Link>
            <Link
              href={getLocalizedPath('/diensten/run')}
              className="block px-4 py-2.5 text-sm transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>RUN</span>
              <span className="block text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {locale === 'nl' ? 'Draaiend houden & optimaliseren' : 'Keep running & optimize'}
              </span>
            </Link>
            <Link
              href={getLocalizedPath('/diensten/grow')}
              className="block px-4 py-2.5 text-sm transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>GROW</span>
              <span className="block text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {locale === 'nl' ? 'Schalen met data & strategie' : 'Scale with data & strategy'}
              </span>
            </Link>
            <div className="border-t mt-1 pt-1" style={{ borderColor: 'var(--border-color)' }}>
              <Link
                href={getLocalizedPath('/diensten')}
                className="block px-4 py-2 text-sm transition-colors text-green-400 hover:text-green-300"
                onClick={() => setOpen(false)}
              >
                {locale === 'nl' ? 'Alle diensten →' : 'All services →'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

