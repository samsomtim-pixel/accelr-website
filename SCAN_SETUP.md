# Accelr Scan Setup Instructies

## 1. Installeer Dependencies

Voer het volgende commando uit in de terminal:

```bash
npm install @google/generative-ai react-markdown
```

## 2. Maak .env.local bestand

Maak een `.env.local` bestand in de root van het project met de volgende inhoud:

```
GEMINI_API_KEY=AIzaSyB_JjxYaYxkRnyZwytt4CaY99kMP-6gvdQ
```

**Belangrijk:** Dit bestand staat in `.gitignore` en wordt niet gecommit naar git.

## 3. Bestanden die zijn aangemaakt

De volgende bestanden zijn aangemaakt:

- **API Route**: `src/app/api/diagnose/route.ts` - Gemini API integratie
- **Scan Component**: `src/components/AccelrScan.tsx` - Multi-step wizard met 12 vragen
- **Report View**: `src/components/ReportView.tsx` - Markdown rendering voor rapporten
- **Loading Component**: `src/components/ScanLoading.tsx` - Loading state met animatie
- **Diagnose Page**: `src/app/diagnose/page.tsx` - Gebruikt de nieuwe AccelrScan component

## 4. Test de Scan

1. Start de development server:
   ```bash
   npm run dev
   ```

2. Navigeer naar: `http://localhost:3000/diagnose`

3. Vul de 12 vragen in:
   - Website URL
   - Gemiddelde deal-size
   - Aantal sales meetings per maand
   - Grootste groeiblokkade
   - Target sector
   - Target functie
   - Capaciteit salesteam (gesprekken/week)
   - Waarom nu prioriteit
   - Huidig CRM
   - Huidige sales tools
   - Ervaring met outbound
   - Contactgegevens (naam, email, telefoon)

4. Na het invullen wordt het rapport gegenereerd via de Gemini API

## 5. Rapport Structuur

Het rapport bevat:
- 🛡️ Accelr Quick Scan met bedrijfsnaam
- De Observatie (sector en UVP analyse)
- De Gap-Analyse (onbenutte meetings)
- De Investerings-Indicatie (tool tabel)
- 💰 De Rekenkamer (ROI berekening)
- Veelgestelde vragen (3 relevante FAQ's)

## Troubleshooting

### API Error
Als je een API error krijgt, controleer:
- Is `.env.local` aangemaakt?
- Staat `GEMINI_API_KEY` correct in het bestand?
- Is de API key geldig?

### Dependencies niet gevonden
Voer opnieuw uit:
```bash
npm install @google/generative-ai react-markdown
```

### TypeScript errors
Herstart de TypeScript server in je editor of voer uit:
```bash
npm run build
```

## Volgende Stappen

- Pas de Calendly link aan in `ReportView.tsx` (regel met `mailto:` link)
- Test de volledige flow end-to-end
- Pas de system instruction aan in `route.ts` indien nodig
- Voeg email notificaties toe voor nieuwe scans (optioneel)



