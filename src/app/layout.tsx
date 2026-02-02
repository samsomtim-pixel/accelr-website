import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/CookieBanner'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accelr - Sales infrastructuur voor B2B groei',
  description: 'In 6-8 weken structureel meer kwalitatieve afspraken.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken structureel meer kwalitatieve afspraken.',
    url: 'https://accelr.nl',
    siteName: 'Accelr',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken structureel meer kwalitatieve afspraken.',
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
        {/* Google Analytics with Consent Mode */}
        <Script
          id="google-analytics-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500,
              });
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W93SYHR3N4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W93SYHR3N4');
            `,
          }}
        />
        {/* HubSpot Tracking */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js-eu1.hs-scripts.com/147636880.js"
        />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
