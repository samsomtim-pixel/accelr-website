# Google Spam & Scaled Content Abuse Audit Rapport
**Datum:** 10 februari 2026  
**Website:** accelr.nl  
**Framework:** Next.js 16.1.6 (App Router)

---

## 🔴 KRITIEKE BEVINDINGEN (Spam Penalty Risico)

### 1. OUDE PAGINA'S ZONDER NOINDEX — HOOG RISICO
**Probleem:** Er bestaan veel oude pagina's die niet in de sitemap staan maar WEL geïndexeerd kunnen worden door Google.

**Gevonden pagina's buiten sitemap:**
- `/v1` - Oude versie homepage (client-side component)
- `/v2` - Oude versie homepage (client-side component)  
- `/v3` - Oude versie homepage (client-side component)
- `/v4` - Oude versie homepage (client-side component)
- `/blueprint` - Redirect naar `/diensten` maar pagina bestaat nog
- `/expertise` - Redirect naar `/expertise/target` maar pagina bestaat nog
- `/expertise/target` - Oude expertise pagina (niet in sitemap)
- `/expertise/outreach` - Oude expertise pagina (niet in sitemap)
- `/expertise/convert` - Oude expertise pagina (niet in sitemap)
- `/expertise/scale` - Oude expertise pagina (niet in sitemap)
- `/over-ons` - Oude versie (niet in sitemap, bestaat naast `/[locale]/over-ons`)
- `/login` - Redirect naar `/` maar pagina bestaat nog
- `/bundels`, `/crm-implementatie`, `/icp-marktanalyse`, `/lead-intelligence`, `/linkedin-social-selling`, `/outbound-email`, `/producten`, `/sales-dashboard`, `/sales-playbook`, `/trigger-scanner` - Oude pagina's

**Risico:** Google kan deze pagina's als "thin content" of "duplicate content" zien, vooral omdat:
- V1-V4 zijn oude versies van dezelfde homepage
- Expertise pagina's zijn vervangen door nieuwe structuur
- Veel pagina's hebben geen metadata of incomplete metadata

**Aanbeveling:** 
- Voeg `noindex` toe aan alle oude pagina's OF
- Verwijder deze pagina's volledig en gebruik alleen redirects

---

### 2. "COMING SOON" PAGINA'S IN SITEMAP — MEDIUM RISICO
**Probleem:** `/cases` en `/kennisbank` staan in de sitemap maar bevatten alleen "coming soon" content.

**Details:**
- `/cases`: "We zijn net gestart met onze nieuwe AI-powered aanpak. Onze eerste case studies volgen binnenkort."
- `/kennisbank`: Alleen placeholder artikelen met "Binnenkort" status

**Risico:** Google kan dit zien als "thin content" - pagina's met weinig waarde.

**Aanbeveling:**
- Verwijder uit sitemap tot er echte content is OF
- Voeg `noindex` toe tot content klaar is

---

### 3. ONTBREKENDE CANONICAL TAGS — MEDIUM RISICO
**Probleem:** Alleen de homepage heeft canonical tags. Alle andere pagina's missen canonical tags.

**Gevonden:**
- ✅ Homepage (`/[locale]/page.tsx`): Heeft canonical + alternates
- ❌ Alle andere pagina's: Geen canonical tags

**Risico:** Duplicate content issues tussen NL/EN versies en mogelijke duplicate content tussen oude en nieuwe pagina's.

**Aanbeveling:**
- Voeg canonical tags toe aan alle pagina's met `generateMetadata`

---

### 4. ONTBREKENDE METADATA — LAAG-MEDIUM RISICO
**Probleem:** Veel pagina's hebben incomplete metadata (geen alternates, geen OpenGraph).

**Gevonden:**
- Homepage: ✅ Compleet (canonical, alternates, OpenGraph)
- Service pagina's: ⚠️ Alleen title + description, geen canonical/alternates
- Cases/Kennisbank: ⚠️ Alleen title + description
- Probleem pagina's: ⚠️ Alleen title + description

**Aanbeveling:**
- Voeg canonical, alternates en OpenGraph toe aan alle pagina's

---

## 🟡 WAARSCHUWINGEN (Mogelijke Issues)

### 5. REDIRECTS MAAR PAGINA'S BESTAAN NOG
**Probleem:** Redirects zijn geconfigureerd maar oude pagina's bestaan nog steeds.

**Gevonden redirects in `next.config.js`:**
- `/diagnose` → `/score` ✅ (permanent)
- `/blueprint` → `/diensten` ✅ (permanent)
- `/expertise/:path*` → `/diensten` ✅ (permanent)
- `/login` → `/` ⚠️ (temporary - zou permanent moeten zijn)

**Probleem:** Oude pagina's zoals `/blueprint/page.tsx` en `/expertise/page.tsx` bestaan nog en kunnen door Google gevonden worden VOORDAT de redirect wordt gevolgd.

**Aanbeveling:**
- Verwijder oude pagina bestanden volledig OF
- Voeg `noindex` toe aan redirect-pagina's

---

### 6. SITEMAP INCONSISTENTIES
**Probleem:** Sitemap bevat alleen nieuwe pagina's, maar er zijn veel meer pagina's die bestaan.

**Sitemap bevat:**
- Homepage (NL + EN)
- Diensten pagina's (NL + EN)
- Score (NL + EN)
- Cases (NL + EN) - maar is "coming soon"
- Kennisbank (NL + EN) - maar is "coming soon"
- Probleem pagina's (NL + EN)
- Investering, Over-ons, Contact (NL + EN)

**Niet in sitemap maar bestaat:**
- Alle `/v1`, `/v2`, `/v3`, `/v4` pagina's
- Alle `/expertise/*` pagina's
- `/blueprint` pagina
- `/over-ons` (oude versie)
- Veel andere oude pagina's

**Aanbeveling:**
- Zorg dat sitemap ALLE indexeerbare pagina's bevat OF
- Zorg dat niet-indexeerbare pagina's `noindex` hebben

---

### 7. DUBBELE PAGINA'S
**Probleem:** Er bestaan zowel oude als nieuwe versies van sommige pagina's.

**Gevonden:**
- `/over-ons` (oud) + `/[locale]/over-ons` (nieuw)
- `/expertise/*` (oud) + Expertise sectie in nieuwe structuur

**Risico:** Duplicate content penalty

**Aanbeveling:**
- Verwijder oude pagina's volledig

---

## ✅ POSITIEVE BEVINDINGEN

### 8. ROBOTS.TXT — GOED
- ✅ Alleen `/api/` geblokkeerd (correct)
- ✅ Sitemap URL gespecificeerd
- ✅ Geen overmatige blocking

### 9. GEEN CLOAKING — GOED
- ✅ Geen user-agent detectie gevonden
- ✅ Geen verschillende content voor bots vs gebruikers
- ✅ Middleware gebruikt alleen voor locale routing (legitiem)

### 10. GEEN DYNAMISCHE CONTENT GENERATIE — GOED
- ✅ Geen automatische pagina generatie gevonden
- ✅ Geen blog systeem dat duizenden pagina's genereert
- ✅ Alle pagina's zijn statisch of server-rendered met vaste content

### 11. SERVER-SIDE RENDERING — GOED
- ✅ Next.js App Router gebruikt SSR/SSG correct
- ✅ Metadata wordt server-side gegenereerd
- ✅ Geen lege shells voor bots

---

## 📋 ACTIE ITEMS (Prioriteit)

### 🔴 HOOG PRIORITEIT (Direct fixen)

1. **Voeg `noindex` toe aan alle oude pagina's:**
   - `/v1`, `/v2`, `/v3`, `/v4`
   - `/blueprint` (heeft redirect maar pagina bestaat nog)
   - `/expertise` en `/expertise/*`
   - `/over-ons` (oude versie)
   - `/login` (heeft redirect maar pagina bestaat nog)
   - Alle andere oude pagina's buiten sitemap

2. **Verwijder "coming soon" pagina's uit sitemap:**
   - `/cases` en `/kennisbank` verwijderen uit sitemap OF
   - Voeg `noindex` toe tot content klaar is

3. **Voeg canonical tags toe aan alle pagina's:**
   - Alle service pagina's (`/diensten/*`)
   - Alle probleem pagina's (`/problemen/*`)
   - Cases, Kennisbank, Contact, Over-ons, Investering, Score

### 🟡 MEDIUM PRIORITEIT (Binnenkort fixen)

4. **Verwijder oude pagina bestanden:**
   - Verwijder `/v1`, `/v2`, `/v3`, `/v4` volledig
   - Verwijder `/blueprint/page.tsx` (redirect is genoeg)
   - Verwijder `/expertise/*` pagina's (redirect is genoeg)
   - Verwijder oude `/over-ons/page.tsx`

5. **Voeg alternates en OpenGraph toe:**
   - Alle pagina's moeten alternates hebben voor NL/EN
   - Alle pagina's moeten OpenGraph metadata hebben

6. **Update redirects:**
   - `/login` redirect moet `permanent: true` zijn

### 🟢 LAAG PRIORITEIT (Nice to have)

7. **Verbeter metadata:**
   - Voeg structured data toe aan service pagina's
   - Voeg breadcrumbs schema toe

---

## 🔍 SPECIFIEKE CODE WIJZIGINGEN NODIG

### Voor oude pagina's (noindex toevoegen):

```typescript
// Voorbeeld voor /v1/page.tsx, /v2/page.tsx, etc.
export const metadata: Metadata = {
  title: '...',
  robots: {
    index: false,
    follow: false,
  },
}
```

### Voor cases/kennisbank (noindex tot content klaar):

```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: '...',
    robots: {
      index: false, // Verwijder dit zodra content klaar is
      follow: true,
    },
  };
}
```

### Voor alle nieuwe pagina's (canonical toevoegen):

```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: '...',
    description: '...',
    alternates: {
      canonical: locale === 'nl' 
        ? `https://accelr.nl/[path]` 
        : `https://accelr.nl/en/[path]`,
      languages: {
        'nl': `https://accelr.nl/[path]`,
        'en': `https://accelr.nl/en/[path]`,
        'x-default': `https://accelr.nl/[path]`
      }
    },
    openGraph: {
      title: '...',
      description: '...',
      url: locale === 'nl' 
        ? `https://accelr.nl/[path]` 
        : `https://accelr.nl/en/[path]`,
      siteName: 'Accelr',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website'
    }
  };
}
```

---

## 📊 SAMENVATTING

**Totaal pagina's gevonden:** ~38 pagina's  
**Pagina's in sitemap:** 26 (13 unieke × 2 talen)  
**Pagina's buiten sitemap:** ~12+ oude pagina's  
**Pagina's met noindex:** 0  
**Pagina's met canonical:** 1 (alleen homepage)  
**Pagina's met complete metadata:** 1 (alleen homepage)

**Hoogste risico's:**
1. Oude pagina's zonder noindex kunnen als thin/duplicate content worden gezien
2. Coming soon pagina's in sitemap zijn thin content
3. Ontbrekende canonical tags kunnen duplicate content issues veroorzaken

**Geschatte spam penalty risico:** 🟡 MEDIUM-HOOG (door oude pagina's zonder noindex)

---

## ✅ CONCLUSIE

De codebase heeft **geen actieve spam technieken** (geen cloaking, geen automatische content generatie), maar heeft wel **significante SEO-hygiëne problemen** die Google kunnen triggeren:

1. **Oude pagina's zonder noindex** = hoogste risico
2. **Coming soon pagina's in sitemap** = medium risico  
3. **Ontbrekende canonical tags** = medium risico

**Aanbevolen actie:** Fix alle 🔴 hoog prioriteit items binnen 1-2 weken om spam penalty risico te elimineren.
