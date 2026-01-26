import type { Metadata } from 'next'
import Script from 'next/script'
import CookieBanner from '@/components/CookieBanner'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accelr - Sales infrastructuur voor B2B groei',
  description: 'Build now. Scale forever. In 6-8 weken een werkend sales systeem dat structureel afspraken genereert. Start met de gratis Stack Scan.',
  openGraph: {
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'Build now. Scale forever. In 6-8 weken een werkend sales systeem dat structureel afspraken genereert.',
    url: 'https://accelr.nl',
    siteName: 'Accelr',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'Build now. Scale forever. In 6-8 weken een werkend sales systeem dat structureel afspraken genereert.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W93SYHR3N4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'denied',
            });
            gtag('config', 'G-W93SYHR3N4');
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
