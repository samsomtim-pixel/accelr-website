'use client'

import { useState, useEffect } from 'react'

export function ScanLoading() {
  const messages = [
    "Architect is aan het rekenen...",
    "Sales-machine wordt geconfigureerd...",
    "ROI wordt berekend...",
    "Stack wordt geanalyseerd..."
  ];
  
  const [messageIndex, setMessageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-xl text-green-400 animate-pulse">{messages[messageIndex]}</p>
    </div>
  );
}



