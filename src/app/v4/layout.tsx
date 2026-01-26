import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accelr - Sales infrastructuur voor B2B groei',
  description: 'In 6-8 weken een systeem dat structureel afspraken genereert. Wij selecteren de juiste tools en koppelen ze tot één werkende machine.',
  openGraph: {
    title: 'Accelr - Sales infrastructuur voor B2B groei',
    description: 'In 6-8 weken een systeem dat structureel afspraken genereert.',
    url: 'https://accelr.io',
    siteName: 'Accelr',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function V3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html { scroll-behavior: smooth; }
            body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Space Grotesk', sans-serif; }
            .gradient-text {
              background: linear-gradient(135deg, #22c55e 0%, #4ade80 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .card-hover {
              transition: all 0.3s ease;
            }
            .card-hover:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 40px rgba(34, 197, 94, 0.15);
            }
            .stat-card {
              background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
              border: 1px solid rgba(34, 197, 94, 0.2);
            }
            details summary::-webkit-details-marker { display: none; }
            details summary { list-style: none; }
            details[open] summary svg { transform: rotate(180deg); }
            details summary svg { transition: transform 0.2s ease; }
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.3s ease-out;
            }
          `,
        }}
      />
      {children}
    </>
  )
}

