"use client"

const logos = [
  { name: "Clay", src: "/logos/clay.svg" },
  { name: "Instantly", src: "/logos/instantly.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Pipedrive", src: "/logos/pipedrive.svg" },
  { name: "Apollo", src: "/logos/apollo.svg" },
  { name: "n8n", src: "/logos/n8n.svg" },
]

export default function TechPartners() {
  return (
    <section className="px-6 py-12 border-t border-b" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-center mb-8" style={{ color: 'var(--text-muted)' }}>
          Gebouwd met de beste tools
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-full"
              style={{ height: '40px' }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: '120px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
