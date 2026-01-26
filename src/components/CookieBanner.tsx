'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true, marketing: true }));
    setShowBanner(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
    });
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics, marketing }));
    setShowBanner(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
    });
  };

  const declineAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: false, marketing: false }));
    setShowBanner(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-2">🍪 Cookie voorkeuren</h2>
        <p className="text-neutral-400 text-sm mb-6">
          Wij gebruiken cookies om je ervaring te verbeteren en ons websiteverkeer te analyseren. 
          Kies welke cookies je wilt accepteren.{' '}
          <a href="/privacy" className="text-green-500 underline">Privacybeleid</a>
        </p>

        {showSettings ? (
          <div className="space-y-4 mb-6">
            {/* Noodzakelijk */}
            <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
              <div>
                <p className="text-white font-medium">Noodzakelijk</p>
                <p className="text-neutral-500 text-xs">Essentieel voor de werking van de site</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Analytics */}
            <div 
              className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg cursor-pointer"
              onClick={() => setAnalytics(!analytics)}
            >
              <div>
                <p className="text-white font-medium">Analytisch</p>
                <p className="text-neutral-500 text-xs">Help ons de site te verbeteren</p>
              </div>
              <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${analytics ? 'bg-green-500 justify-end' : 'bg-neutral-600 justify-start'}`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Marketing */}
            <div 
              className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg cursor-pointer"
              onClick={() => setMarketing(!marketing)}
            >
              <div>
                <p className="text-white font-medium">Marketing</p>
                <p className="text-neutral-500 text-xs">Gepersonaliseerde advertenties</p>
              </div>
              <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${marketing ? 'bg-green-500 justify-end' : 'bg-neutral-600 justify-start'}`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3">
          {showSettings ? (
            <>
              <button
                onClick={declineAll}
                className="flex-1 px-4 py-3 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-lg"
              >
                Alles weigeren
              </button>
              <button
                onClick={acceptSelected}
                className="flex-1 px-4 py-3 text-sm bg-green-500 text-black font-medium rounded-lg hover:bg-green-400"
              >
                Selectie opslaan
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 px-4 py-3 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-lg"
              >
                Instellingen
              </button>
              <button
                onClick={declineAll}
                className="flex-1 px-4 py-3 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-lg"
              >
                Weigeren
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-3 text-sm bg-green-500 text-black font-medium rounded-lg hover:bg-green-400"
              >
                Accepteren
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
