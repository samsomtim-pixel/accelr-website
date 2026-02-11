# Website Integratie - Accelr Portal Link

## Overzicht
Het Accelr Portal draait op `accelr.nl/portal` (geen subdomein nodig). De "Accelr Portal" link is al toegevoegd aan de hoofdnavigatie.

## Status
✅ **Portal is live op `/portal`**
- De link staat al in de navbar (`src/components/layout/Navbar.tsx`)
- Middleware is geconfigureerd om `/portal` routes buiten locale routing te houden
- Alle portal pagina's zijn beschikbaar:
  - `/portal` - Dashboard
  - `/portal/deliverables` - Documenten
  - `/portal/actions` - Actie tracker
  - `/admin` - Admin overzicht (intern)

## Navbar Link
De portal link is toegevoegd als groene button naast de "Start gratis Score" knop:
```tsx
<a 
  href="/portal" 
  className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm"
>
  Accelr Portal →
</a>
```

## Hosting
- **Huidige setup**: `accelr.nl/portal` (subpad)
  - Geen extra DNS configuratie nodig
  - Werkt direct met huidige Vercel deployment
  - Middleware zorgt ervoor dat `/portal` routes niet door locale routing gaan

### 3. Styling
De portal link gebruikt dezelfde styling als de bestaande groene CTA button:
- **Kleur**: `#2ECC71` (Accelr groen)
- **Hover**: `#27AE60` (donkerder groen)
- **Border radius**: `8px`
- **Padding**: `px-6 py-2`
- **Font weight**: `font-medium`

### 4. Code Voorbeeld (Navbar.tsx)
```tsx
// In de navbar component, bij de CTA buttons:
<div className="flex items-center gap-4">
  <Link 
    href="/score"
    className="text-foreground hover:text-[#2ECC71] transition-colors"
  >
    Score
  </Link>
  <a 
    href="https://portal.accelr.nl" 
    className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-6 py-2 rounded-lg font-medium transition-colors"
  >
    Accelr Portal →
  </a>
</div>
```

## Notities
- De portal link opent in hetzelfde tabblad (gebruik `target="_blank"` voor nieuw tabblad indien gewenst)
- Zorg dat de portal URL overeenkomt met de daadwerkelijke hosting setup
- Test de link zowel op desktop als mobile
