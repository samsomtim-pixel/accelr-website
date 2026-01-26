import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid - Accelr',
  description: 'Privacybeleid van Accelr. Lees hoe wij omgaan met je persoonlijke gegevens.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Privacybeleid
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 mt-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Privacybeleid Accelr
          </h2>
          
          <p className="text-gray-400 mb-8">
            Laatst bijgewerkt: januari 2026
          </p>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Wie zijn wij
            </h3>
            <p className="text-gray-300 mb-2">
              Accelr is een sales-infrastructuur bureau gevestigd in Nederland.
            </p>
            <p className="text-gray-300 mb-2">
              Website: <a href="https://accelr.nl" className="text-green-400 hover:text-green-300 underline">accelr.nl</a>
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:tim@accelr.nl" className="text-green-400 hover:text-green-300 underline">tim@accelr.nl</a>
            </p>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Welke gegevens verzamelen wij
            </h3>
            <p className="text-gray-300 mb-4">
              Wanneer je onze Stack Scan invult, verzamelen wij:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Naam</li>
              <li>Bedrijfsnaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>Website URL (optioneel)</li>
              <li>Antwoorden op de scan vragen</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Waarvoor gebruiken wij je gegevens
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Om je persoonlijke scan rapport te genereren en toe te sturen</li>
              <li>Om contact met je op te nemen over onze diensten</li>
              <li>Als je toestemming hebt gegeven: om je marketing updates te sturen</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Hoe lang bewaren wij je gegevens
            </h3>
            <p className="text-gray-300">
              Wij bewaren je gegevens maximaal 2 jaar na het laatste contact, tenzij je eerder verzoekt om verwijdering.
            </p>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Delen met derden
            </h3>
            <p className="text-gray-300 mb-4">
              Wij delen je gegevens met:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Google Gemini (voor het genereren van je rapport)</li>
              <li>Resend (voor het versturen van emails)</li>
              <li>HubSpot (CRM systeem)</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Wij verkopen je gegevens nooit aan derden.
            </p>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Jouw rechten
            </h3>
            <p className="text-gray-300 mb-4">
              Je hebt recht op:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Inzage in je gegevens</li>
              <li>Correctie van je gegevens</li>
              <li>Verwijdering van je gegevens</li>
              <li>Bezwaar tegen verwerking</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Neem contact op via <a href="mailto:tim@accelr.nl" className="text-green-400 hover:text-green-300 underline">tim@accelr.nl</a> voor verzoeken.
            </p>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Cookies
            </h3>
            <p className="text-gray-300">
              Wij gebruiken alleen functionele cookies. Geen tracking of marketing cookies.
            </p>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contact
            </h3>
            <p className="text-gray-300">
              Vragen over dit privacybeleid? Neem contact op via <a href="mailto:tim@accelr.nl" className="text-green-400 hover:text-green-300 underline">tim@accelr.nl</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

