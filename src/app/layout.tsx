import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accelr - Sales infrastructuur voor B2B groei',
  description: 'In 6-8 weken een systeem dat structureel afspraken genereert. Wij selecteren de juiste tools en koppelen ze tot één werkende machine.',
  keywords: ['B2B sales', 'lead generation', 'sales agency', 'Nederland', 'outbound'],
  openGraph: {
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken een systeem dat structureel afspraken genereert.',
    url: 'https://accelr.io',
    siteName: 'Accelr',
    locale: 'nl_NL',
    type: 'website',
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
