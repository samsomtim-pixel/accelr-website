// Mock data voor Accelr Client Portal
// Mirrors docs/seed-demo-data.sql for development/demo mode

import type { Prospect, Touch, Call, PipelineDeal, Sequence, Campaign } from './types';

export const clientInfo = {
  name: "TechVentures BV",
  industry: "SaaS",
  location: "Amsterdam",
  since: "December 2025",
  plan: "Growth Partner",
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
  { week: "W1 Dec", emailsSent: 150, opens: 68, replies: 5, meetings: 1, pipeline: 12000 },
  { week: "W2 Dec", emailsSent: 180, opens: 86, replies: 7, meetings: 1, pipeline: 28000 },
  { week: "W3 Jan", emailsSent: 220, opens: 110, replies: 9, meetings: 2, pipeline: 52000 },
  { week: "W4 Jan", emailsSent: 260, opens: 135, replies: 12, meetings: 3, pipeline: 78000 },
  { week: "W1 Feb", emailsSent: 310, opens: 165, replies: 15, meetings: 3, pipeline: 105000 },
  { week: "W2 Feb", emailsSent: 340, opens: 180, replies: 17, meetings: 4, pipeline: 132000 },
  { week: "W3 Feb", emailsSent: 370, opens: 196, replies: 19, meetings: 5, pipeline: 158000 },
  { week: "W4 Feb", emailsSent: 400, opens: 208, replies: 21, meetings: 6, pipeline: 180000 },
];

export const benchmarkData = [
  { metric: "Open Rate", client: 43.2, nlAverage: 28.5, unit: "%" },
  { metric: "Reply Rate", client: 6.1, nlAverage: 3.8, unit: "%" },
  { metric: "Meeting Rate", client: 0.47, nlAverage: 0.21, unit: "%" },
  { metric: "Bounce Rate", client: 1.8, nlAverage: 4.2, unit: "%" },
  { metric: "Pipeline per 1K emails", client: 79948, nlAverage: 42000, unit: "€" },
];

export const pipelineStages = [
  { name: "Lead", count: 4, value: 35000, color: "#6B7280" },
  { name: "Meeting Gepland", count: 3, value: 42000, color: "#3B82F6" },
  { name: "Voorstel Verstuurd", count: 2, value: 30000, color: "#F59E0B" },
  { name: "Onderhandeling", count: 2, value: 60000, color: "#8B5CF6" },
  { name: "Gewonnen", count: 1, value: 45000, color: "#2ECC71" },
];

export const deliverables = [
  { id: "1", title: "ICP Document v1", category: "Strategie", type: "pdf", date: "2025-12-08", status: "final" },
  { id: "2", title: "Messaging Playbook", category: "Playbooks", type: "pdf", date: "2025-12-15", status: "final" },
  { id: "3", title: "Week 4 Rapport", category: "Rapportages", type: "pdf", date: "2026-01-20", status: "final" },
  { id: "4", title: "Week 8 Rapport", category: "Rapportages", type: "pdf", date: "2026-02-10", status: "draft" },
  { id: "5", title: "Quarterly Strategy Review", category: "Strategie", type: "pdf", date: "2026-03-01", status: "draft" },
];

export const actionItems = [
  { id: "1", phase: "Campaign Build", title: "Review messaging variant B", status: "completed", assignee: "Klant", dueDate: "2026-01-20" },
  { id: "2", phase: "Optimization", title: "Approve nieuwe ICP segment: Logistics", status: "pending", assignee: "Klant", dueDate: "2026-02-20" },
  { id: "3", phase: "Optimization", title: "Feedback op week 4 rapport", status: "completed", assignee: "Klant", dueDate: "2026-01-25" },
  { id: "4", phase: "Optimization", title: "Call recordings reviewen", status: "pending", assignee: "Klant", dueDate: "2026-02-22" },
];

export const recentActivity = [
  { id: "1", type: "meeting", text: "Meeting geboekt met Daan Vermeer (DigitalCraft) — 19 feb 14:00", time: "3 uur geleden" },
  { id: "2", type: "reply", text: "Positieve reply van Karin Bos, WebForce NL: \"Laten we bellen volgende week\"", time: "5 uur geleden" },
  { id: "3", type: "call", text: "Call met Anna Smit (CloudServe NL) — geinteresseerd, meeting plannen", time: "1 dag geleden" },
  { id: "4", type: "signal", text: "Nieuw hiring signaal: LogiSoft plaatst Sales Executive vacature", time: "1 dag geleden" },
  { id: "5", type: "deal", text: "Deal DigitalCraft verplaatst naar Meeting Gepland (€15.000)", time: "1 dag geleden" },
  { id: "6", type: "meeting", text: "Meeting geboekt met Femke de Vries (SaaS Builders) — 20 feb 10:00", time: "2 dagen geleden" },
  { id: "7", type: "campaign", text: "Campagne 'IT Decision Makers' bereikt 400 emails/week", time: "3 dagen geleden" },
  { id: "8", type: "deliverable", text: "Week 8 Rapport in voorbereiding", time: "3 dagen geleden" },
];

// Admin view: alle klanten
export const allClients = [
  { id: "1", name: "TechVentures BV", industry: "SaaS", plan: "Growth Partner", score: 72, pipeline: 212000, meetings: 6, prospects: 15, status: "active", startedAt: "2025-12-01" },
  { id: "2", name: "GreenLogistics", industry: "Logistics", plan: "Lead Gen", score: 45, pipeline: 125000, meetings: 8, prospects: 22, status: "active", startedAt: "2025-11-15" },
  { id: "3", name: "FinanceFirst BV", industry: "FinTech", plan: "Full Cycle", score: 81, pipeline: 612000, meetings: 31, prospects: 48, status: "active", startedAt: "2025-10-01" },
  { id: "4", name: "Bouwmans & Partners", industry: "Consultancy", plan: "Lead Gen", score: 38, pipeline: 0, meetings: 0, prospects: 0, status: "onboarding", startedAt: "2026-02-01" },
];

// ─── New mock data: Prospects ──────────────────────────────

const ORG_ID = 'org-mock-techventures';

export const mockProspects: Prospect[] = [
  { id: 'p1', organization_id: ORG_ID, name: 'Mark van der Berg', email: 'mark@logisoft.nl', phone: '+31612345601', company: 'LogiSoft BV', job_title: 'Head of Sales', linkedin_url: 'https://linkedin.com/in/markvanderberg', signal_type: 'hiring', signal_score: 9, signal_detail: 'Plaatste Sales Executive vacature 3 dagen geleden', sequence_step: 0, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', status: 'new', created_at: '2026-02-14' },
  { id: 'p2', organization_id: ORG_ID, name: 'Sophie Jansen', email: 'sophie@cloudnine.nl', phone: '+31612345602', company: 'CloudNine Solutions', job_title: 'VP Sales', linkedin_url: 'https://linkedin.com/in/sophiejansen', signal_type: 'hiring', signal_score: 8, signal_detail: 'Zoekt 2 Account Executives — geplaatst 5 dagen geleden', sequence_step: 0, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', status: 'new', created_at: '2026-02-13' },
  { id: 'p3', organization_id: ORG_ID, name: 'Jan Bakker', email: 'jan@databridge.io', phone: '+31612345603', company: 'DataBridge', job_title: 'CEO', linkedin_url: 'https://linkedin.com/in/janbakker', signal_type: 'funding', signal_score: 10, signal_detail: 'Series A afgerond: €4.2M via Peak Capital — 1 week geleden', sequence_step: 0, sequence_name: 'Recent Funding — Series A', status: 'new', created_at: '2026-02-12' },
  { id: 'p4', organization_id: ORG_ID, name: 'Lisa de Groot', email: 'lisa@scaleforce.nl', phone: '+31612345604', company: 'ScaleForce', job_title: 'Commercial Director', signal_type: 'no_crm', signal_score: 7, signal_detail: 'Geen CRM gedetecteerd — gebruikt spreadsheets voor pipeline', sequence_step: 2, sequence_name: 'Scale-ups no CRM — 5 stap email-only', last_touch_at: '2026-02-10', next_action: 'follow_up_email', next_action_at: '2026-02-17', status: 'contacted', created_at: '2026-02-03' },
  { id: 'p5', organization_id: ORG_ID, name: 'Tom Visser', email: 'tom@brightmedia.nl', phone: '+31612345605', company: 'Bright Media', job_title: 'Managing Director', signal_type: 'hiring', signal_score: 7, signal_detail: 'Sales Manager vacature op Indeed — 2 weken geleden', sequence_step: 3, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-08', next_action: 'call', next_action_at: '2026-02-17', status: 'contacted', created_at: '2026-01-28' },
  { id: 'p6', organization_id: ORG_ID, name: 'Eva Mulder', email: 'eva@growthstack.nl', phone: '+31612345606', company: 'GrowthStack', job_title: 'Head of Business Development', signal_type: 'growth', signal_score: 6, signal_detail: '40% YoY omzetgroei — 18 naar 32 FTE in 12 maanden', sequence_step: 1, sequence_name: 'Scale-ups no CRM — 5 stap email-only', last_touch_at: '2026-02-12', next_action: 'follow_up_email', next_action_at: '2026-02-18', status: 'contacted', created_at: '2026-02-06' },
  { id: 'p7', organization_id: ORG_ID, name: 'Peter van Dijk', email: 'peter@nexuserp.nl', phone: '+31612345607', company: 'NexusERP', job_title: 'CRO', signal_type: 'no_crm', signal_score: 8, signal_detail: 'Website toont geen CRM integraties — manual sales proces', sequence_step: 2, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-11', next_action: 'email', next_action_at: '2026-02-18', status: 'contacted', created_at: '2026-02-04' },
  { id: 'p8', organization_id: ORG_ID, name: 'Anna Smit', email: 'anna@cloudserve.nl', phone: '+31612345608', company: 'CloudServe NL', job_title: 'Head of Growth', signal_type: 'funding', signal_score: 9, signal_detail: 'Series A: €2.8M via Keen Venture Partners — 3 weken geleden', sequence_step: 4, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-13', next_action: 'call', next_action_at: '2026-02-17', status: 'engaged', created_at: '2026-01-20' },
  { id: 'p9', organization_id: ORG_ID, name: 'Robert Hendriks', email: 'robert@finflow.nl', phone: '+31612345609', company: 'FinFlow', job_title: 'Sales Director', signal_type: 'no_crm', signal_score: 6, signal_detail: 'LinkedIn profiel vermeldt "building sales from scratch"', sequence_step: 5, sequence_name: 'Scale-ups no CRM — 5 stap email-only', last_touch_at: '2026-02-11', next_action: 'schedule_meeting', next_action_at: '2026-02-17', status: 'engaged', created_at: '2026-01-15' },
  { id: 'p10', organization_id: ORG_ID, name: 'Karin Bos', email: 'karin@webforce.nl', phone: '+31612345610', company: 'WebForce NL', job_title: 'CEO', signal_type: 'growth', signal_score: 7, signal_detail: '3 nieuwe vacatures in sales team — snelle groei', sequence_step: 3, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-14', next_action: 'call', next_action_at: '2026-02-18', status: 'engaged', created_at: '2026-01-22' },
  { id: 'p11', organization_id: ORG_ID, name: 'Daan Vermeer', email: 'daan@digitalcraft.nl', phone: '+31612345611', company: 'DigitalCraft', job_title: 'Managing Partner', signal_type: 'hiring', signal_score: 8, signal_detail: 'Zoekt Sales Lead en 2 SDRs — team uitbreiding', sequence_step: 5, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-14', next_action: 'prepare_meeting', next_action_at: '2026-02-19', status: 'meeting_booked', created_at: '2026-01-10' },
  { id: 'p12', organization_id: ORG_ID, name: 'Femke de Vries', email: 'femke@saasbuilders.nl', phone: '+31612345612', company: 'SaaS Builders', job_title: 'COO', signal_type: 'funding', signal_score: 8, signal_detail: 'Seed round €1.5M — 2 maanden geleden, klaar om te scalen', sequence_step: 6, sequence_name: 'Recent Funding — Series A', last_touch_at: '2026-02-12', next_action: 'prepare_meeting', next_action_at: '2026-02-20', status: 'meeting_booked', created_at: '2026-01-08' },
  { id: 'p13', organization_id: ORG_ID, name: 'Joost Kok', email: 'joost@mediahuis.nl', phone: '+31612345613', company: 'MediaHuis Pro', job_title: 'Director Sales', signal_type: 'no_crm', signal_score: 7, signal_detail: 'Manual outbound — geen tooling gedetecteerd', sequence_step: 7, sequence_name: 'Scale-ups no CRM — 5 stap email-only', last_touch_at: '2026-02-10', status: 'qualified', created_at: '2025-12-20' },
  { id: 'p14', organization_id: ORG_ID, name: 'Marieke Wolters', email: 'marieke@techbridge.nl', phone: '+31612345614', company: 'TechBridge', job_title: 'VP Revenue', signal_type: 'growth', signal_score: 6, signal_detail: '25% QoQ groei in nieuwe klanten', sequence_step: 7, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-07', status: 'qualified', created_at: '2025-12-15' },
  { id: 'p15', organization_id: ORG_ID, name: 'Frank Meijer', email: 'frank@novatech.nl', phone: '+31612345615', company: 'NovaTech', job_title: 'CEO', signal_type: 'hiring', signal_score: 7, signal_detail: 'Sales hire vacature — bleek al ingevuld', sequence_step: 4, sequence_name: 'IT-dienstverleners hiring signal — 7 stap multichannel', last_touch_at: '2026-02-01', status: 'lost', created_at: '2025-12-18' },
];

export const mockTouches: Touch[] = [
  { id: 't1', prospect_id: 'p4', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 1, automated: true, created_at: '2026-02-03' },
  { id: 't2', prospect_id: 'p4', organization_id: ORG_ID, channel: 'email', touch_type: 'opened', sequence_step: 1, automated: true, created_at: '2026-02-04' },
  { id: 't3', prospect_id: 'p4', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 2, automated: true, created_at: '2026-02-10' },
  { id: 't4', prospect_id: 'p5', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'sent', sequence_step: 1, notes: 'Profile visit', automated: true, created_at: '2026-01-28' },
  { id: 't5', prospect_id: 'p5', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'connected', sequence_step: 2, automated: true, created_at: '2026-01-30' },
  { id: 't6', prospect_id: 'p5', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 3, automated: true, created_at: '2026-02-04' },
  { id: 't7', prospect_id: 'p5', organization_id: ORG_ID, channel: 'email', touch_type: 'opened', sequence_step: 3, notes: 'Geopend 2x', automated: true, created_at: '2026-02-08' },
  { id: 't8', prospect_id: 'p8', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'sent', sequence_step: 1, notes: 'Profile visit', automated: true, created_at: '2026-01-20' },
  { id: 't9', prospect_id: 'p8', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'connected', sequence_step: 2, automated: true, created_at: '2026-01-23' },
  { id: 't10', prospect_id: 'p8', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 3, automated: true, created_at: '2026-01-27' },
  { id: 't11', prospect_id: 'p8', organization_id: ORG_ID, channel: 'email', touch_type: 'replied', sequence_step: 3, notes: 'Positieve reply: "Klinkt interessant, vertel meer"', automated: true, created_at: '2026-02-01' },
  { id: 't12', prospect_id: 'p8', organization_id: ORG_ID, channel: 'call', touch_type: 'called', sequence_step: 4, notes: 'Goed gesprek, wil meeting plannen', automated: false, created_at: '2026-02-13' },
  { id: 't13', prospect_id: 'p11', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'sent', sequence_step: 1, automated: true, created_at: '2026-01-10' },
  { id: 't14', prospect_id: 'p11', organization_id: ORG_ID, channel: 'linkedin', touch_type: 'connected', sequence_step: 2, automated: true, created_at: '2026-01-13' },
  { id: 't15', prospect_id: 'p11', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 3, automated: true, created_at: '2026-01-17' },
  { id: 't16', prospect_id: 'p11', organization_id: ORG_ID, channel: 'call', touch_type: 'called', sequence_step: 4, notes: 'Goed gesprek — geinteresseerd', automated: false, created_at: '2026-01-24' },
  { id: 't17', prospect_id: 'p11', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 5, notes: 'Follow-up na call', automated: true, created_at: '2026-02-03' },
  { id: 't18', prospect_id: 'p11', organization_id: ORG_ID, channel: 'meeting', touch_type: 'meeting_booked', sequence_step: 5, notes: 'Meeting gepland 19 feb 14:00', automated: false, created_at: '2026-02-14' },
  { id: 't19', prospect_id: 'p15', organization_id: ORG_ID, channel: 'email', touch_type: 'sent', sequence_step: 1, automated: true, created_at: '2025-12-18' },
  { id: 't20', prospect_id: 'p15', organization_id: ORG_ID, channel: 'call', touch_type: 'called', sequence_step: 4, notes: 'Vacature al ingevuld, geen interesse meer', automated: false, created_at: '2026-02-01' },
];

export const mockCalls: Call[] = [
  { id: 'call1', prospect_id: 'p8', organization_id: ORG_ID, outcome: 'interested', duration_seconds: 420, call_brief: { signal_info: 'Series A €2.8M — klaar om sales op te schalen', company_context: 'Cloud infrastructure, 25 FTE, Amsterdam', suggested_opener: 'Gefeliciteerd met de funding! Ik zag dat jullie nu snel willen groeien op sales', objection_handling: { te_duur: 'ROI binnen 3 maanden — vergelijk met FTE kosten', al_een_team: 'Wij vullen aan, niet vervangen' } }, notes: 'Zeer geinteresseerd. Wil meeting plannen volgende week.', follow_up_action: 'schedule_meeting', follow_up_at: '2026-02-17', created_at: '2026-02-13' },
  { id: 'call2', prospect_id: 'p11', organization_id: ORG_ID, outcome: 'interested', duration_seconds: 540, call_brief: { signal_info: 'Zoekt Sales Lead + 2 SDRs', company_context: 'Digital agency, 40 FTE, Rotterdam', suggested_opener: 'Ik zag dat jullie het sales team uitbreiden — wij vullen de pipeline', objection_handling: { geen_budget: 'Start met Lead Gen tier €3K', timing: 'Juist nu starten zodat pipeline klaarstaat' } }, notes: 'Goed gesprek. Meeting gepland 19 feb.', created_at: '2026-01-24' },
  { id: 'call3', prospect_id: 'p12', organization_id: ORG_ID, outcome: 'callback', duration_seconds: 180, call_brief: { signal_info: 'Seed round €1.5M', company_context: 'SaaS platform, 12 FTE, Utrecht', suggested_opener: 'Met jullie funding is dit het perfecte moment om outbound op te zetten', objection_handling: { te_vroeg: 'Juist nu beginnen met warme pipeline bouwen', geen_icp: 'Wij helpen ICP definiëren' } }, notes: 'Belde terug. Positief — wil demo zien.', follow_up_action: 'send_demo', follow_up_at: '2026-02-05', created_at: '2026-02-03' },
  { id: 'call4', prospect_id: 'p13', organization_id: ORG_ID, outcome: 'interested', duration_seconds: 780, call_brief: { signal_info: 'Geen CRM — manual sales', company_context: 'Media agency, 35 FTE, Den Haag', suggested_opener: 'Ik zag dat jullie nog geen sales tooling gebruiken', objection_handling: { we_doen_het_zelf: 'Hoeveel uur besteedt je team nu aan handmatig prospecten?', referenties: 'Ik stuur je 2 cases van vergelijkbare agencies' } }, notes: 'Lang gesprek. Wil Growth Partner tier.', follow_up_action: 'send_proposal', follow_up_at: '2026-01-20', created_at: '2026-01-15' },
  { id: 'call5', prospect_id: 'p15', organization_id: ORG_ID, outcome: 'not_interested', duration_seconds: 120, call_brief: { signal_info: 'Sales hire vacature', company_context: 'Tech consultancy, 20 FTE, Eindhoven', suggested_opener: 'Ik zag de Sales Executive vacature', objection_handling: { al_ingevuld: 'Begrijpelijk. Mocht het spelen, laat het weten' } }, notes: 'Vacature al ingevuld. Geen interesse.', created_at: '2026-02-01' },
];

export const mockPipelineDeals: PipelineDeal[] = [
  { id: 'deal1', organization_id: ORG_ID, prospect_id: 'p4', company: 'ScaleForce', contact_name: 'Lisa de Groot', value: 6000, stage: 'lead', campaign_id: 'c2', created_at: '2026-02-10' },
  { id: 'deal2', organization_id: ORG_ID, prospect_id: 'p6', company: 'GrowthStack', contact_name: 'Eva Mulder', value: 8000, stage: 'lead', campaign_id: 'c2', created_at: '2026-02-12' },
  { id: 'deal3', organization_id: ORG_ID, prospect_id: 'p7', company: 'NexusERP', contact_name: 'Peter van Dijk', value: 9000, stage: 'lead', campaign_id: 'c1', created_at: '2026-02-11' },
  { id: 'deal4', organization_id: ORG_ID, prospect_id: 'p10', company: 'WebForce NL', contact_name: 'Karin Bos', value: 12000, stage: 'lead', campaign_id: 'c1', created_at: '2026-02-14' },
  { id: 'deal5', organization_id: ORG_ID, prospect_id: 'p8', company: 'CloudServe NL', contact_name: 'Anna Smit', value: 18000, stage: 'meeting_scheduled', campaign_id: 'c1', created_at: '2026-02-13' },
  { id: 'deal6', organization_id: ORG_ID, prospect_id: 'p11', company: 'DigitalCraft', contact_name: 'Daan Vermeer', value: 15000, stage: 'meeting_scheduled', campaign_id: 'c1', created_at: '2026-02-14' },
  { id: 'deal7', organization_id: ORG_ID, prospect_id: 'p12', company: 'SaaS Builders', contact_name: 'Femke de Vries', value: 9000, stage: 'meeting_scheduled', campaign_id: 'c3', created_at: '2026-02-12' },
  { id: 'deal8', organization_id: ORG_ID, prospect_id: 'p9', company: 'FinFlow', contact_name: 'Robert Hendriks', value: 12000, stage: 'proposal_sent', campaign_id: 'c2', created_at: '2026-02-01' },
  { id: 'deal9', organization_id: ORG_ID, company: 'Bright Media', contact_name: 'Tom Visser', value: 18000, stage: 'proposal_sent', campaign_id: 'c1', created_at: '2026-01-28' },
  { id: 'deal10', organization_id: ORG_ID, prospect_id: 'p13', company: 'MediaHuis Pro', contact_name: 'Joost Kok', value: 24000, stage: 'negotiation', campaign_id: 'c2', created_at: '2026-01-15' },
  { id: 'deal11', organization_id: ORG_ID, prospect_id: 'p14', company: 'TechBridge', contact_name: 'Marieke Wolters', value: 36000, stage: 'negotiation', campaign_id: 'c1', created_at: '2025-12-15' },
  { id: 'deal12', organization_id: ORG_ID, company: 'Digital Squad', contact_name: 'Jan de Vries', value: 45000, stage: 'closed_won', campaign_id: 'c1', closed_at: '2026-01-28', created_at: '2025-12-20' },
];

export const mockSequences: Sequence[] = [
  {
    id: 's1', organization_id: ORG_ID, campaign_id: 'c1', name: 'IT-dienstverleners hiring signal — 7 stap multichannel',
    steps: [
      { day: 1, channel: 'linkedin', action: 'profile_visit' },
      { day: 2, channel: 'linkedin', action: 'connect' },
      { day: 4, channel: 'email', action: 'send', subject: 'Korte vraag over jullie groei' },
      { day: 7, channel: 'call', action: 'call' },
      { day: 10, channel: 'email', action: 'send', subject: 'Volgend op mijn bericht' },
      { day: 14, channel: 'call', action: 'call' },
      { day: 18, channel: 'email', action: 'send', subject: 'Laatste check-in' },
    ],
    total_prospects: 10, active: true,
  },
  {
    id: 's2', organization_id: ORG_ID, campaign_id: 'c2', name: 'Scale-ups no CRM — 5 stap email-only',
    steps: [
      { day: 1, channel: 'email', action: 'send', subject: 'Jullie sales proces' },
      { day: 4, channel: 'email', action: 'send', subject: 'Quick follow-up' },
      { day: 8, channel: 'email', action: 'send', subject: 'Interessant inzicht voor jullie' },
      { day: 13, channel: 'email', action: 'send', subject: 'Breakup email' },
      { day: 20, channel: 'email', action: 'send', subject: 'Laatste poging' },
    ],
    total_prospects: 8, active: true,
  },
];

export const mockCampaigns: Campaign[] = [
  { id: 'c1', organization_id: ORG_ID, name: 'IT Decision Makers — Hiring Signal', channel: 'email', status: 'active', started_at: '2025-12-15' },
  { id: 'c2', organization_id: ORG_ID, name: 'Scale-ups — No CRM Detected', channel: 'linkedin', status: 'active', started_at: '2026-01-06' },
  { id: 'c3', organization_id: ORG_ID, name: 'Recent Funding — Series A', channel: 'combined', status: 'paused', started_at: '2026-01-20' },
];
