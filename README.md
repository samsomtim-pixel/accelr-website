# Accelr Website

Full-stack B2B sales agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Brand Colors

- **Accelr Blue**: `#0052CC`
- **Black**: `#0A0A0A`
- **Surface**: `#FAFAFA`
- **Muted**: `#666666`
- **Border**: `#E5E5E5`

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
accelr-website/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Main landing page
│   └── styles/
│       └── globals.css  # Global styles + Tailwind
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript config
└── package.json
```

## Sections

1. **Navigation** - Fixed header with mobile menu
2. **Hero** - Main headline "We close deals. You grow."
3. **Problem** - Pain points for B2B companies
4. **Services** - 4-step sales process
5. **Pricing** - 3 tiers (Lead Gen, Full Cycle, Growth Partner)
6. **Process** - 5-step onboarding timeline
7. **Contact** - Contact form + email/LinkedIn
8. **Footer**

## Deployment

Ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

## Customization

### Update contact info
Edit `src/app/page.tsx`:
- Email: Search for `tim@accelr.io`
- LinkedIn: Search for `linkedin.com/in/timsam`

### Update pricing
Edit the `tiers` array in the `Pricing` component.

### Update colors
Edit `tailwind.config.js` under `theme.extend.colors`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## License

Private - Accelr 2026
