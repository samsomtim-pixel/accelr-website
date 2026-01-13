import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Accelr - Full-Stack B2B Sales',
  description: 'We sluiten deals. Jij groeit. Full-stack B2B sales agency van lead tot deal.',
  keywords: ['B2B sales', 'lead generation', 'sales agency', 'Nederland', 'outbound'],
  openGraph: {
    title: 'Accelr - Full-Stack B2B Sales',
    description: 'We sluiten deals. Jij groeit.',
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
