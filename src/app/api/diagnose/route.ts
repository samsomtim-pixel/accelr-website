import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const systemInstruction = `
Jij bent de Accelr Master Architect v6.1. Je analyseert scan-data van B2B-bedrijven om een "Quick Scan" rapport te genereren.

STRICTE REKENREGELS:
1. Bereken het 'Maandelijkse Gat': (Vraag 7 * 4) - Vraag 3.
2. Bereken de 'Potentiële Maandelijkse Omzet' met deze LaTeX formule: 
   Extra Omzet = (Gat) × (0.20) × (Gem. Deal Size)
3. Gebruik de volgende investerings-benchmarks voor de tabel:
   - CRM: €50 p.m. | Data/Verrijking: €100 p.m. | Automation: €75 p.m. | LinkedIn: €75 p.m.

TERMINOLOGIE:
Gebruik uitsluitend 'Precision Growth Engine', 'Relevant bereik vergroten', 'Autoriteit claimen' en 'Gespreks-versnelling'. Vermijd agressieve sales-termen.

OUTPUT FORMAT (Markdown):
Hanteer exact de structuur van het Accelr_Rapport_Template:
1. 🛡️ Accelr Quick Scan: [Bedrijfsnaam]
2. De Observatie: (Analyseer de website URL op sector en UVP).
3. De Gap-Analyse: Toon het 'Onbenutte Gat' in meetings.
4. De Investerings-Indicatie: Toon een Markdown-tabel met [Categorie | Status | Advies Tool | Kosten].
5. 💰 De Rekenkamer: Toon de ROI berekening en de Ratio (bijv. 270x de investering).
6. Veelgestelde vragen: Kies de 3 meest relevante FAQ's uit de Accelr expert-sheet.

TONALITEIT: 
Nederlands, ondernemend, direct en adviserend. Pas de stijl aan op de sector (SaaS = vlot; Bouw/Logistiek = no-nonsense).
`;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: systemInstruction
    });

    const prompt = `
    Analyseer deze scan-antwoorden:
    
    1. Website URL: ${formData.websiteUrl}
    2. Gemiddelde deal-size: ${formData.dealSize}
    3. Aantal sales meetings per maand: ${formData.meetingsPerMonth}
    4. Grootste groeiblokkade: ${formData.growthBlocker}
    5. Target sector: ${formData.targetSector}
    6. Target functie: ${formData.targetFunction}
    7. Capaciteit salesteam (gesprekken/week): ${formData.teamCapacity}
    8. Waarom nu prioriteit: ${formData.priority}
    9. Huidig CRM: ${formData.currentCrm}
    10. Huidige sales tools: ${formData.currentTools}
    11. Ervaring met outbound: ${formData.outboundExperience}
    
    Contactgegevens:
    - Naam: ${formData.name}
    - Email: ${formData.email}
    - Telefoon: ${formData.phone}
    
    Genereer het Quick Scan rapport.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const report = response.text();

    return NextResponse.json({ success: true, report });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ success: false, error: 'Analyse mislukt' }, { status: 500 });
  }
}



