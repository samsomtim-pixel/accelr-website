"use client"

const logos = [
  { name: "Clay", src: "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6778506d788ebf16fef48551_Clay%20primary%20logo.avif" },
  { name: "Instantly", src: "https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/67ab2655638fdc00dc35c630_Group%201%20(2).svg" },
  { name: "HubSpot", src: "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6973069fbabac993aae3da1b_hubspot.svg" },
  { name: "Pipedrive", src: "/logos/pipedrive.svg" },
  { name: "Apollo", src: "/logos/apollo.svg" },
  { name: "n8n", src: "https://n8n.io/brandguidelines/logo-dark.svg" },
  { name: "CompanyData", src: "/logos/companydata.svg" },
]

export default function TechPartners() {
  return (
    <section className="px-6 py-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-center mb-6" style={{ color: '#9CA3AF' }}>
          Gebouwd met de beste tools
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
              style={{ height: '32px' }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-7 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: '140px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
