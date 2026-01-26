import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accelr - Sales infrastructuur voor B2B groei',
  description: 'In 6-8 weken een systeem dat structureel afspraken genereert. Start met de gratis Stack Scan.',
  openGraph: {
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken een systeem dat structureel afspraken genereert.',
    url: 'https://accelr.nl',
    siteName: 'Accelr',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken een systeem dat structureel afspraken genereert.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
