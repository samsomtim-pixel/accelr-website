# Volledige Site Audit Rapport
**Datum:** 11 februari 2026  
**Website:** accelr.nl  
**Framework:** Next.js 16.1.6 (App Router)

---

## 1. ✅ OUDE/TEST PAGINA'S CHECK

### Gevonden redirects in `next.config.js`:
- ✅ `/diagnose` → `/score` (permanent: true)
- ✅ `/blueprint` → `/diensten` (permanent: true)
- ✅ `/expertise/:path*` → `/diensten` (permanent: true)
- ✅ `/login` → `/` (permanent: true)

### Gecontroleerde routes (geen pagina's gevonden):
- ✅ `/v1` - **NIET GEVONDEN** (geen folder/page.tsx)
- ✅ `/v2` - **NIET GEVONDEN** (geen folder/page.tsx)
- ✅ `/v3` - **NIET GEVONDEN** (geen folder/page.tsx)
- ✅ `/v4` - **NIET GEVONDEN** (geen folder/page.tsx)
- ✅ `/blueprint` - **NIET GEVONDEN** (redirect geconfigureerd, geen pagina)
- ✅ `/expertise` - **NIET GEVONDEN** (redirect geconfigureerd, geen pagina)
- ✅ `/bundels` - **NIET GEVONDEN** (geen folder/page.tsx)
- ✅ `/producten` - **NIET GEVONDEN** (geen folder/page.tsx)
- ⚠️ `/login` - **EXISTEERT** als `/portal/login` (dit is correct, is de portal login pagina)

**Status:** ✅ **GOED** - Geen oude/test pagina's gevonden. Alle redirects zijn correct geconfigureerd.

---

## 2. ✅ ROBOTS.TXT CHECK

**Bestand:** `src/app/robots.ts`

```typescript
rules: { 
  userAgent: '*', 
  allow: '/', 
  disallow: '/api/' 
}
```

**Status:** ✅ **GOED**
- Geen `Disallow: /` gevonden
- Alleen `/api/` is disallowed (correct)
- Sitemap URL is correct geconfigureerd

---

## 3. ✅ SITEMAP.XML CHECK

**Bestand:** `src/app/sitemap.ts`

### Alle URLs in sitemap (totaal: 20 URLs):

**NL URLs (10):**
1. `https://accelr.nl/` (priority: 1.0)
2. `https://accelr.nl/diensten` (priority: 0.9)
3. `https://accelr.nl/diensten/build` (priority: 0.8)
4. `https://accelr.nl/diensten/run` (priority: 0.8)
5. `https://accelr.nl/diensten/grow` (priority: 0.8)
6. `https://accelr.nl/score` (priority: 0.9)
7. `https://accelr.nl/investering` (priority: 0.7)
8. `https://accelr.nl/over-ons` (priority: 0.5)
9. `https://accelr.nl/contact` (priority: 0.5)
10. `https://accelr.nl/problemen/geen-pipeline` (priority: 0.6)
11. `https://accelr.nl/problemen/afhankelijk-van-founder` (priority: 0.6)
12. `https://accelr.nl/problemen/inconsistente-omzet` (priority: 0.6)

**EN URLs (10):**
1. `https://accelr.nl/en/` (priority: 1.0)
2. `https://accelr.nl/en/services` (priority: 0.9)
3. `https://accelr.nl/en/services/build` (priority: 0.8)
4. `https://accelr.nl/en/services/run` (priority: 0.8)
5. `https://accelr.nl/en/services/grow` (priority: 0.8)
6. `https://accelr.nl/en/score` (priority: 0.9)
7. `https://accelr.nl/en/pricing` (priority: 0.7)
8. `https://accelr.nl/en/about` (priority: 0.5)
9. `https://accelr.nl/en/contact` (priority: 0.5)
10. `https://accelr.nl/en/problems/no-pipeline` (priority: 0.6)
11. `https://accelr.nl/en/problems/founder-dependent-sales` (priority: 0.6)
12. `https://accelr.nl/en/problems/inconsistent-revenue` (priority: 0.6)

**Niet in sitemap (correct):**
- `/cases` - heeft `noindex` (correct)
- `/kennisbank` - heeft `noindex` (correct)
- `/privacy` - niet in sitemap (moet worden toegevoegd?)
- `/portal/*` - niet in sitemap (correct, is achter login)
- `/admin/*` - niet in sitemap (correct, is achter login)

**Status:** ✅ **GOED** - Sitemap bevat alleen pagina's die geïndexeerd moeten worden.

**⚠️ AANBEVELING:** Overweeg `/privacy` toe te voegen aan sitemap (heeft wel canonical tag).

---

## 4. ✅ NOINDEX CHECK

### Pagina's met `noindex`:

**✅ CORRECT (moeten noindex hebben):**
- `/cases` - `robots: { index: false, follow: true }` ✅
- `/kennisbank` - `robots: { index: false, follow: true }` ✅

**Status:** ✅ **GOED** - Alleen pagina's met "coming soon" content hebben noindex. Alle andere pagina's zijn indexeerbaar.

---

## 5. ✅ CANONICAL TAGS CHECK

### Alle pagina's gecontroleerd:

**✅ Hebben canonical tags:**
- ✅ `/` (homepage) - `canonical: './'` + alternates
- ✅ `/diensten` - `canonical: './'` + alternates
- ✅ `/diensten/build` - `canonical: './'` + alternates
- ✅ `/diensten/run` - `canonical: './'` + alternates
- ✅ `/diensten/grow` - `canonical: './'` + alternates
- ✅ `/score` - `canonical: './'` + alternates
- ✅ `/investering` - `canonical: './'` + alternates
- ✅ `/over-ons` - `canonical: './'` + alternates
- ✅ `/contact` - `canonical: './'` + alternates
- ✅ `/problemen/geen-pipeline` - `canonical: './'` + alternates
- ✅ `/problemen/afhankelijk-van-founder` - `canonical: './'` + alternates
- ✅ `/problemen/inconsistente-omzet` - `canonical: './'` + alternates
- ✅ `/cases` - `canonical: './'` + alternates (heeft noindex)
- ✅ `/kennisbank` - `canonical: './'` + alternates (heeft noindex)
- ✅ `/privacy` - `canonical: 'https://accelr.nl/privacy'` + alternates

**Status:** ✅ **GOED** - Alle pagina's hebben canonical tags die naar zichzelf wijzen.

---

## 6. ✅ DUPLICATE CONTENT CHECK

### Gecontroleerde routes:

**Locale routes (NL/EN):**
- ✅ `/` vs `/en/` - Verschillende content (NL vs EN), correcte alternates
- ✅ `/diensten` vs `/en/services` - Verschillende content, correcte alternates
- ✅ Alle andere locale routes hebben correcte alternates

**Redirects:**
- ✅ `/diagnose` → `/score` (301 redirect, geen duplicate)
- ✅ `/blueprint` → `/diensten` (301 redirect, geen duplicate)
- ✅ `/expertise/:path*` → `/diensten` (301 redirect, geen duplicate)
- ✅ `/login` → `/` (301 redirect, geen duplicate)

**Portal/Admin routes:**
- ✅ `/portal/*` - Achter login, niet geïndexeerd (correct)
- ✅ `/admin/*` - Achter login, niet geïndexeerd (correct)

**Status:** ✅ **GOED** - Geen duplicate content gevonden. Alle locale versies hebben correcte alternates.

---

## 7. ✅ ALLE ROUTES IN APP FOLDER

### Locale routes (`/[locale]/*`):
1. `/` (homepage)
2. `/diensten`
3. `/diensten/build`
4. `/diensten/run`
5. `/diensten/grow`
6. `/score`
7. `/investering`
8. `/over-ons`
9. `/contact`
10. `/cases` (noindex)
11. `/kennisbank` (noindex)
12. `/problemen/geen-pipeline`
13. `/problemen/afhankelijk-van-founder`
14. `/problemen/inconsistente-omzet`

### Portal routes (`/portal/*`):
15. `/portal` (dashboard)
16. `/portal/login`
17. `/portal/actions`
18. `/portal/deliverables`

### Admin routes (`/admin/*`):
19. `/admin`
20. `/admin/clients/[id]`

### Andere routes:
21. `/` (root redirect naar `/nl`)
22. `/privacy`
23. `/api/diagnose` (API route)

**Totaal:** 23 routes

**Status:** ✅ **GOED** - Alle routes zijn correct geconfigureerd.

---

## 📊 SAMENVATTING

### ✅ WAT IS GOED:

1. **Geen oude/test pagina's** - Alle oude routes zijn verwijderd of hebben redirects
2. **Robots.txt correct** - Geen `Disallow: /`, alleen `/api/` is disallowed
3. **Sitemap correct** - Bevat alleen pagina's die geïndexeerd moeten worden
4. **Noindex correct** - Alleen `/cases` en `/kennisbank` hebben noindex (correct)
5. **Canonical tags** - Alle pagina's hebben canonical tags die naar zichzelf wijzen
6. **Geen duplicate content** - Correcte alternates voor NL/EN versies
7. **Alle routes correct** - Geen orphaned of test routes

### ⚠️ AANBEVELINGEN (OPTIONEEL):

1. **Privacy pagina in sitemap?** - `/privacy` heeft wel canonical tag maar staat niet in sitemap. Overweeg toe te voegen als je wilt dat deze geïndexeerd wordt.

2. **Portal/Admin routes** - Correct dat deze niet in sitemap staan (achter login).

---

## ✅ CONCLUSIE

**Status:** 🟢 **UITSTEKEND**

De site heeft een zeer goede SEO structuur:
- Geen oude/test pagina's
- Correcte robots.txt
- Goede sitemap
- Correcte canonical tags
- Geen duplicate content
- Correcte noindex implementatie

**Geen kritieke issues gevonden!** 🎉
