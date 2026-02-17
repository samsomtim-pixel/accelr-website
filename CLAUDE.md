# CLAUDE.md — Accelr Website & Portal

## Project Overview

Accelr is a full-stack B2B sales infrastructure consultancy targeting Dutch companies with €500K–€20M revenue. This repo contains two applications:

1. **Marketing website** at accelr.nl — public-facing site with services, pricing, cases, diagnose tool
2. **Client portal** at portal.accelr.nl — authenticated dashboard for clients to track campaign performance

**Founder:** Tim, 8+ years adtech/B2B sales experience
**Domain:** accelr.nl
**GitHub:** github.com/samsomtim-pixel/accelr-website

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.3 |
| UI Components | shadcn/ui | Latest |
| Charts | Recharts | 2.x |
| Icons | Lucide React | Latest |
| Dark mode | next-themes | Latest |
| i18n | next-intl | 4.x |
| AI | Google Gemini (diagnose tool) | - |
| Email | Resend (transactional) | - |
| Database | Supabase (portal) | - |
| Hosting | Vercel | - |

## Site Structure

### Marketing Site (i18n: NL default + EN)

| Route | Page |
|-------|------|
| `/` | Homepage (hero, services, social proof, CTA) |
| `/diensten` | Services overview |
| `/diensten/build` | Build tier detail |
| `/diensten/run` | Run tier detail |
| `/diensten/grow` | Grow tier detail |
| `/score` | QuickScan diagnostic tool (12-question wizard → AI report) |
| `/investering` | Pricing page (3 tiers) |
| `/cases` | Case studies |
| `/kennisbank` | Knowledge base |
| `/over-ons` | About page |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/api/diagnose` | Backend endpoint for QuickScan |

### Client Portal (no i18n, auth required)

| Route | Page |
|-------|------|
| `/portal/login` | Magic link login (standalone, no sidebar) |
| `/portal` | Dashboard: KPI grid + charts + benchmarks + pipeline + activity |
| `/portal/email` | Email campaign metrics (Instantly data) |
| `/portal/linkedin` | LinkedIn campaign metrics (HeyReach data) |
| `/portal/pipeline` | Deal funnel + pipeline chart (HubSpot data) |
| `/portal/deliverables` | Document grid with category tabs + downloads |
| `/portal/actions` | Phase-grouped implementation checklist |
| `/portal/settings` | Profile + notification preferences |

### Admin Dashboard (auth + admin role required)

| Route | Page |
|-------|------|
| `/admin` | Cross-client overview table |
| `/admin/clients/[id]` | Individual client detail (same as /portal) |

## Folder Structure

```
src/
├── app/
│   ├── [locale]/           # i18n marketing pages (nl/en)
│   ├── portal/             # Client portal (no i18n)
│   ├── admin/              # Admin dashboard
│   └── api/                # API routes + webhook handlers
├── components/
│   ├── ui/                 # shadcn/ui auto-generated
│   ├── layout/             # Navbar, Footer, AppSidebar, PortalHeader
│   ├── dashboard/          # KPI cards, charts, benchmarks, pipeline, activity
│   ├── campaigns/          # Email + LinkedIn campaign views
│   ├── deliverables/       # Document grid
│   └── actions/            # Action tracker
├── lib/
│   ├── supabase/           # Client + server Supabase helpers
│   ├── services/           # Adapter pattern: MockService / LiveService
│   ├── types.ts            # TypeScript interfaces
│   ├── mock-data.ts        # Development mock data
│   ├── constants.ts        # NL benchmarks, design tokens
│   └── utils.ts            # Utility functions
├── i18n/                   # next-intl config
├── messages/               # nl.json, en.json translation files
├── hooks/                  # Custom React hooks
├── styles/globals.css      # Tailwind + custom styles
└── middleware.ts           # i18n routing + portal auth guard
```

## Design & Brand

### Visual Identity
- **Theme:** Dark mode, premium B2B aesthetic (Linear/Vercel-inspired)
- **Font:** Inter (with `tabular-nums` for numbers)
- **Borders:** 1px solid, no shadows
- **Border radius:** 12px cards, 8px buttons
- **Spacing:** 8px grid (p-2, p-4, p-6, p-8)

### Color Tokens

| Token | Light | Dark |
|-------|-------|------|
| Background | #FFFFFF | #0A0A0A |
| Cards | #FAFAFA | #111111 |
| Borders | #E5E7EB | #262626 |
| Text primary | #111827 | #F9FAFB |
| Text secondary | #6B7280 | #9CA3AF |
| Accent | #2ECC71 | #2ECC71 |
| Positive | #10B981 | #10B981 |
| Negative | #EF4444 | #EF4444 |
| Warning | #F59E0B | #F59E0B |

### Accent Color Rule
- **NEVER** use green (#2ECC71) as background fill or surface color
- **ONLY** use as: borders, hover states, positive delta indicators, text accent
- No `bg-emerald-*` or `bg-green-*` as flat color anywhere

### Tone of Voice
- **Language:** Dutch, except industry terms (Lead Gen, Full Cycle, Growth Partner, CRM, pipeline, deals)
- **Tone:** Direct, no fluff, peer-to-peer, confident but not salesy
- **No:** Corporate jargon, exclamation marks, "wij/we" framing (use "Accelr" or client-focused)

## Business Context

### ICP (Ideal Customer Profile)
Dutch B2B companies, 10-50 FTE, €500K-€20M revenue, proven product-market fit, no dedicated sales team. Primary vertical: marketing/digital agencies.

### Service Tiers

| Tier | Price | Channels | Meetings/mnd |
|------|-------|----------|--------------|
| Lead Gen | €3-4K/mo | Email only | 8-15 |
| Full Cycle | €6-8K/mo | Email + LinkedIn | 15-25 |
| Growth Partner | €9-12K/mo | Email + LinkedIn + warm calling | 20-35 |

### Competitors
Aurevo, Sqales/QGROUP, Match-day, SalesCaptain, Bsquaree

## Operational Architecture (Zero-Touch Outbound Engine)

Accelr runs a fully automated multichannel outbound engine for up to 20 B2B clients, orchestrated by n8n (self-hosted).

### 7-Phase Pipeline

```
1. Lead Discovery (Apollo API, daily 09:00)
2. Enrichment (Clay waterfall: PDL → Hunter → Findymail + verification)
3. AI Scoring (Claude Sonnet 4, ICP rubric, 0-100 score)
4. Human Approval (Telegram, one-tap per client)
5. Multi-channel Distribution (Instantly email + HeyReach LinkedIn + HubSpot CRM)
6. Reply Handling (AI classification → routing → HubSpot update)
7. Meeting Booking (Cal.com → HubSpot deal stage update)
```

### Outbound Tech Stack

| Function | Tool | Plan |
|----------|------|------|
| Lead Discovery | Apollo.io | Professional ($79/user/mo) |
| Data Enrichment | Clay | Explorer ($349/mo) + BYOK |
| Cold Email | Instantly | Hypergrowth ($97/mo) |
| LinkedIn Automation | HeyReach | Agency ($999/mo, 50 senders) |
| CRM | HubSpot | Starter ($20/seat/mo) |
| Workflow Orchestration | n8n | Self-hosted (Hetzner VPS) |
| Meeting Scheduling | Cal.com | Self-hosted (free) |
| Notifications/Approval | Telegram Bot | Free |
| Email Infrastructure | Google Workspace | $6.50/mailbox/mo |
| AI Scoring + Classification | Claude API | Pay-per-use |

### n8n Workflows (11 total)

| # | Workflow | Trigger |
|---|----------|---------|
| 1 | Lead Discovery | Cron 09:00 M-F |
| 2 | Enrichment Completion | Webhook (Clay) |
| 3 | AI Lead Scoring | Sub-workflow |
| 4 | Telegram Approval | Sub-workflow |
| 5 | Multi-channel Distribution | Sub-workflow (after approval) |
| 6 | Email Reply Handler | Webhook (Instantly) |
| 7 | LinkedIn Reply Handler | Webhook (HeyReach) |
| 8 | Meeting Booking Handler | Webhook (Cal.com) |
| 9 | Stats Aggregation | Cron 20:00 M-F |
| 10 | Bounce/Opt-out Sync | Webhook + Cron |
| 11 | Health Check | Cron every 30 min |

### Multi-tenant Config Database (PostgreSQL)

Key tables: `client_config`, `execution_log`, `lead_dedup`, `kpi_snapshots`

One parameterized workflow set for all clients. New client = new row in config + Clay table.

### Architecture Principles
- **Parameterized, not duplicated:** One workflow set, config-driven
- **Human-in-the-loop:** Telegram approval before outreach
- **Tool-agnostic:** Adapter pattern (swap tools by changing one n8n node)
- **Fail-safe:** 3x retry with exponential backoff, circuit breaker, Telegram alerts
- **Data ownership:** All data in HubSpot (client-owned) + PostgreSQL (Accelr-owned)

## Portal Technical Specs

### Authentication
- Supabase Magic Link (email-based, no password)
- RLS: clients see only their own `organization_id`
- Admin (`app_role = 'admin'`) sees all data
- Middleware protects `/portal/*` and `/admin/*`

**Current state:** localStorage-based auth (mock). Needs upgrade to Supabase Auth.

### Supabase Database Schema (6 tables)

```
organizations (1) ──┬── (*) kpi_snapshots   (filled by n8n WF#9)
                     ├── (*) campaigns
                     ├── (*) deliverables
                     ├── (*) action_items
                     └── (*) profiles ── auth.users
```

### Data Adapter Pattern

```typescript
interface KpiService {
  getKpis(orgId: string, dateRange: DateRange): Promise<KpiData>
  getTimeSeries(orgId: string, dateRange: DateRange): Promise<TimeSeriesData[]>
  getBenchmarks(orgId: string): Promise<BenchmarkData[]>
  getPipeline(orgId: string): Promise<PipelineData>
}

// Toggle via NEXT_PUBLIC_USE_MOCK env var
// MockKpiService → development/demo
// LiveKpiService → production (Supabase)
```

### NL Market Benchmarks

```typescript
const NL_BENCHMARKS = {
  openRate: 28.5,        // Instantly 2025 data
  replyRate: 3.8,        // ColdIQ survey (62 GTM execs)
  meetingRate: 0.21,     // SalesBread NL benchmark
  bounceRate: 4.2,       // Mailtrap report
  pipelinePer1K: 42000,  // Accelr internal
}
```

### Portal Component Hierarchy

```
AppSidebar (collapsible)
  ├── Header: "accelr." + client name + plan badge
  ├── Nav: Dashboard, Email, LinkedIn, Pipeline, Deliverables, Actions
  ├── Admin section (Shield icon, admin only)
  └── Footer: dark mode toggle + "Powered by Accelr"

PortalHeader
  ├── Breadcrumb (Dashboard > Email Campagnes)
  └── Period selector (7d / 30d / 90d) + last updated

Dashboard (/portal)
  ├── KPI Grid (5 cards: Emails, Open%, Reply%, Meetings, Pipeline)
  ├── Time Series Chart (tabs: Outreach / Pipeline)
  ├── Benchmark Bars (client vs NL average)
  ├── Pipeline Funnel (4 stages)
  └── Recent Activity (timeline)
```

## Client Onboarding (10-15 workdays)

1. **Day 1:** Kickoff call (60 min) — ICP, personas, messaging
2. **Day 1-3:** Infrastructure — secondary domains, Google Workspace, DNS (SPF/DKIM/DMARC)
3. **Day 2-5:** Tool setup — Instantly, HeyReach, HubSpot, Cal.com, Clay, config DB
4. **Day 5-8:** Content — email sequences (4 steps, NL), LinkedIn templates, A/B variants
5. **Day 8-10:** Warmup — email warmup (Instantly), LinkedIn warming
6. **Day 10-12:** Soft launch — first 50 leads through pipeline, manual review
7. **Day 12-15:** Go live — full automation, portal access, first report

## Cost Structure

| Clients | Tooling/mo | Revenue/mo (avg €5K/client) | Gross Margin |
|---------|-----------|----------------------------|-------------|
| 1 | €1,962 | €5,000 | 61% |
| 5 | €2,122 | €25,000 | 92% |
| 10 | €2,322 | €50,000 | 95% |
| 20 | €2,722 | €100,000 | 97% |

Break-even at 1 client (Lead Gen tier).

## Environment Variables

### Marketing Site (Vercel)
```
GEMINI_API_KEY          — Google Gemini for diagnose reports
RESEND_API_KEY          — Transactional email
SUPABASE_URL            — Database
SUPABASE_ANON_KEY       — Database client key
NEXT_PUBLIC_SUPABASE_URL — Client-side Supabase access
```

### Portal (Vercel)
```
NEXT_PUBLIC_SUPABASE_URL      — Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY — Supabase anon key
SUPABASE_SERVICE_ROLE_KEY     — Server-side Supabase access
NEXT_PUBLIC_USE_MOCK          — Toggle mock/live data (true/false)
INSTANTLY_WEBHOOK_SECRET      — Webhook verification
HEYREACH_WEBHOOK_SECRET       — Webhook verification
CALCOM_WEBHOOK_SECRET         — Webhook verification
CRON_SECRET                   — Vercel Cron auth
```

## Code Conventions

- Use App Router patterns (not Pages Router)
- Components in `src/components/`, organized by feature
- API routes in `src/app/api/`
- Keep components small and focused
- Tailwind for all styling, no separate CSS files
- shadcn/ui for UI primitives
- Environment variables for all API keys
- Dutch UI text, English code/comments
- `tabular-nums` on all numeric displays
- Portal/admin routes skip i18n middleware

## Current Development Priorities

1. Upgrade portal auth from localStorage to Supabase Magic Link
2. Build missing portal pages: `/portal/email`, `/portal/linkedin`, `/portal/pipeline`, `/portal/settings`
3. Implement adapter pattern (MockService ↔ LiveService)
4. Add Supabase RLS for multi-tenancy
5. Webhook API routes for Instantly, HeyReach, Cal.com
6. Hero section optimization for conversion
7. QuickScan diagnose tool stability (Gemini model updates)

## Deployment

```bash
git add .
git commit -m "description"
git push
# Vercel auto-deploys from main branch
```

Portal: `portal.accelr.nl` (CNAME → Vercel)
Marketing: `accelr.nl` (CNAME → Vercel)

## Risk Mitigations

- **Email deliverability:** Secondary domains only, 30 emails/inbox/day max, 3-6 week warmup, bounce < 2%
- **LinkedIn restrictions:** Cloud-based HeyReach, multi-sender rotation, 15-25 requests/day, residential proxies
- **AVG/GDPR:** Legitimate interest (Art. 6(1)(f)), opt-out in every email, B2B only, DPA with clients
- **Tool dependency:** Adapter pattern in n8n, data in own PostgreSQL/HubSpot, monthly contracts
