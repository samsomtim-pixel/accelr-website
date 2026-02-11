// Mock data voor Accelr Client Portal
// Alle data is hardcoded - geen API calls

export const clientInfo = {
  name: "TechVentures BV",
  industry: "SaaS",
  location: "Amsterdam",
  since: "December 2025",
  plan: "BUILD + RUN",
  score: 72,
};

export const kpiData = {
  emailsSent: { value: 4847, delta: 12.3, previous: 4315 },
  openRate: { value: 43.2, delta: 4.8, benchmark: 28.5, unit: "%" },
  replyRate: { value: 6.1, delta: 1.2, benchmark: 3.8, unit: "%" },
  meetingsBooked: { value: 23, delta: 21.1, previous: 19 },
  pipelineValue: { value: 387500, delta: 15.7, previous: 335000, unit: "€" },
};

export const timeSeriesData = [
  { week: "W1 Dec", emailsSent: 580, opens: 243, replies: 29, meetings: 2, pipeline: 45000 },
  { week: "W2 Dec", emailsSent: 620, opens: 271, replies: 34, meetings: 3, pipeline: 82000 },
  { week: "W3 Dec", emailsSent: 590, opens: 259, replies: 31, meetings: 2, pipeline: 115000 },
  { week: "W4 Dec", emailsSent: 540, opens: 237, replies: 28, meetings: 3, pipeline: 158000 },
  { week: "W1 Jan", emailsSent: 610, opens: 280, replies: 41, meetings: 4, pipeline: 212000 },
  { week: "W2 Jan", emailsSent: 650, opens: 299, replies: 45, meetings: 3, pipeline: 265000 },
  { week: "W3 Jan", emailsSent: 630, opens: 285, replies: 38, meetings: 3, pipeline: 325000 },
  { week: "W4 Jan", emailsSent: 627, opens: 278, replies: 42, meetings: 3, pipeline: 387500 },
];

export const benchmarkData = [
  { metric: "Open Rate", client: 43.2, nlAverage: 28.5, unit: "%" },
  { metric: "Reply Rate", client: 6.1, nlAverage: 3.8, unit: "%" },
  { metric: "Meeting Rate", client: 0.47, nlAverage: 0.21, unit: "%" },
  { metric: "Bounce Rate", client: 1.8, nlAverage: 4.2, unit: "%" },
  { metric: "Pipeline per 1K emails", client: 79948, nlAverage: 42000, unit: "€" },
];

export const pipelineStages = [
  { name: "Kwalificatie", count: 14, value: 112000, color: "#6B7280" },
  { name: "Voorstel", count: 9, value: 108000, color: "#3B82F6" },
  { name: "Onderhandeling", count: 6, value: 96000, color: "#F59E0B" },
  { name: "Contract", count: 4, value: 71500, color: "#2ECC71" },
];

export const deliverables = [
  { id: "1", title: "ICP Document v2.1", category: "Strategie", type: "pdf", date: "2026-01-15", status: "final" },
  { id: "2", title: "Outreach Playbook", category: "Playbooks", type: "pdf", date: "2026-01-22", status: "final" },
  { id: "3", title: "Email Templates (NL)", category: "Templates", type: "doc", date: "2026-01-28", status: "final" },
  { id: "4", title: "LinkedIn Sequences", category: "Templates", type: "doc", date: "2026-02-01", status: "draft" },
  { id: "5", title: "Maandrapport Januari", category: "Rapportages", type: "pdf", date: "2026-02-03", status: "final" },
  { id: "6", title: "Tech Stack Documentatie", category: "Technisch", type: "pdf", date: "2026-02-05", status: "final" },
];

export const actionItems = [
  // Fase 1: Foundation (Week 1-3)
  { id: "1", phase: "Foundation", title: "ICP definitie & validatie", status: "completed", assignee: "Accelr", dueDate: "2025-12-15" },
  { id: "2", phase: "Foundation", title: "CRM setup (Pipedrive)", status: "completed", assignee: "Accelr", dueDate: "2025-12-18" },
  { id: "3", phase: "Foundation", title: "Domeinen & email infrastructuur", status: "completed", assignee: "Accelr", dueDate: "2025-12-20" },
  { id: "4", phase: "Foundation", title: "Clay enrichment workflows", status: "completed", assignee: "Accelr", dueDate: "2025-12-22" },
  // Fase 2: Campaign Build (Week 3-6)
  { id: "5", phase: "Campaign Build", title: "Email templates schrijven (NL)", status: "completed", assignee: "Accelr", dueDate: "2026-01-05" },
  { id: "6", phase: "Campaign Build", title: "A/B test varianten", status: "completed", assignee: "Accelr", dueDate: "2026-01-08" },
  { id: "7", phase: "Campaign Build", title: "Eerste campagne live", status: "completed", assignee: "Accelr", dueDate: "2026-01-12" },
  { id: "8", phase: "Campaign Build", title: "LinkedIn outreach sequenties", status: "in_progress", assignee: "Accelr", dueDate: "2026-02-10" },
  // Fase 3: Optimization (Week 6-12)
  { id: "9", phase: "Optimization", title: "Reply handling training team", status: "in_progress", assignee: "Klant", dueDate: "2026-02-15" },
  { id: "10", phase: "Optimization", title: "Campagne 2 lancering", status: "pending", assignee: "Accelr", dueDate: "2026-02-20" },
  { id: "11", phase: "Optimization", title: "Pipeline review & scoring", status: "pending", assignee: "Accelr", dueDate: "2026-02-28" },
  { id: "12", phase: "Optimization", title: "Kwartaalrapport Q1", status: "pending", assignee: "Accelr", dueDate: "2026-03-15" },
];

export const recentActivity = [
  { id: "1", type: "meeting", text: "Meeting geboekt met CFO van DataFlow BV", time: "2 uur geleden" },
  { id: "2", type: "reply", text: "Positieve reply van Marketing Director, Bright Solutions", time: "5 uur geleden" },
  { id: "3", type: "campaign", text: "Campagne 'SaaS Decision Makers Q1' bereikt 1000 emails", time: "1 dag geleden" },
  { id: "4", type: "deal", text: "Deal 'Bright Solutions' verplaatst naar Onderhandeling (€18.000)", time: "1 dag geleden" },
  { id: "5", type: "deliverable", text: "Maandrapport Januari beschikbaar", time: "2 dagen geleden" },
  { id: "6", type: "meeting", text: "Meeting geboekt met Head of Sales, CloudServe NL", time: "3 dagen geleden" },
];

// Admin view: alle klanten
export const allClients = [
  { id: "1", name: "TechVentures BV", industry: "SaaS", plan: "BUILD + RUN", score: 72, pipeline: 387500, meetings: 23, status: "active" },
  { id: "2", name: "GreenLogistics", industry: "Logistics", plan: "BUILD", score: 45, pipeline: 125000, meetings: 8, status: "active" },
  { id: "3", name: "FinanceFirst BV", industry: "FinTech", plan: "GROW", score: 81, pipeline: 612000, meetings: 31, status: "active" },
  { id: "4", name: "Bouwmans & Partners", industry: "Consultancy", plan: "BUILD", score: 38, pipeline: 0, meetings: 0, status: "onboarding" },
];
