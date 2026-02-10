'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function PricingCardsMobile() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85; // 85vw
    const gap = 16;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(newIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth * 0.85;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Swipeable Cards */}
      <div className="md:hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 px-4 pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* BUILD */}
          <div
            className="rounded-2xl p-8 flex flex-col flex-shrink-0"
            style={{
              minWidth: '85vw',
              scrollSnapAlign: 'center',
              backgroundColor: 'var(--bg-card)',
              borderColor: '#10b981',
              borderWidth: '2.5px',
              borderStyle: 'solid',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)',
            }}
          >
            <div className="min-h-[18px] mb-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                {t('services.build.badge')}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {t('services.build.title')}
            </h3>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--text-muted)' }}>
              {t('services.build.persona')}
            </p>
            <div className="mb-2">
              <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.build.price')}</span>
            </div>
            <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
              {t('services.build.priceAnchor')}
            </p>
            <ul className="space-y-2 mb-auto flex-grow">
              {(t.raw('services.build.features') as string[]).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <Link
                href="/diensten/build"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.build.cta')}
              </Link>
              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                {t('services.build.trust')}
              </p>
              <Link
                href="/diensten/build"
                className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                {t('services.build.detailLink')}
              </Link>
            </div>
          </div>

          {/* RUN */}
          <div
            className="rounded-2xl p-8 flex flex-col flex-shrink-0"
            style={{
              minWidth: '85vw',
              scrollSnapAlign: 'center',
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <div className="min-h-[18px] mb-2"></div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {t('services.run.title')}
            </h3>
            <div className="mb-6">
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                {t('services.run.persona')}
              </p>
              <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                {t('services.run.personaNote')}
              </p>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{t('services.run.price')}</span>
            </div>
            <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
              {t('services.run.priceAnchor')}
            </p>
            <ul className="space-y-2 mb-auto flex-grow">
              {(t.raw('services.run.features') as string[]).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <Link
                href="/diensten/run"
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.run.cta')}
              </Link>
              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                {t('services.run.trust')}
              </p>
              <Link
                href="/diensten/run"
                className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                {t('services.run.detailLink')}
              </Link>
            </div>
          </div>

          {/* GROW */}
          <div
            className="rounded-2xl p-8 flex flex-col flex-shrink-0"
            style={{
              minWidth: '85vw',
              scrollSnapAlign: 'center',
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <div className="min-h-[18px] mb-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                {t('services.grow.badge')}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {t('services.grow.title')}
            </h3>
            <div className="mb-6">
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                {t('services.grow.persona')}
              </p>
              <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>
                {t('services.grow.personaNote')}
              </p>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{t('services.grow.price')}</span>
            </div>
            <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
              {t('services.grow.priceAnchor')}
            </p>
            <ul className="space-y-2 mb-auto flex-grow">
              {(t.raw('services.grow.features') as string[]).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <Link
                href="/diensten/grow"
                className="block text-center border border-green-500 text-green-500 hover:bg-green-500/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t('services.grow.cta')}
              </Link>
              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                {t('services.grow.trust')}
              </p>
              <Link
                href="/diensten/grow"
                className="block text-center text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                {t('services.grow.detailLink')}
              </Link>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{
                backgroundColor: activeIndex === index ? '#10b981' : 'rgba(156, 163, 175, 0.5)',
              }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
