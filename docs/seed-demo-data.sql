-- ============================================================
-- Accelr Portal — Seed Demo Data
-- Run AFTER supabase-schema.sql
-- Creates realistic data for fictitious client "TechVentures BV"
-- ============================================================

-- ─── Organization ──────────────────────────────────────────

insert into organizations (id, name, slug, industry, plan, active, created_at)
values (
  '00000000-0000-0000-0000-000000000001',
  'TechVentures BV',
  'techventures',
  'SaaS',
  'growth',
  true,
  '2025-12-01T00:00:00Z'
);

-- ─── Campaigns ─────────────────────────────────────────────

insert into campaigns (id, organization_id, name, channel, status, started_at) values
  ('c0000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'IT Decision Makers — Hiring Signal', 'email', 'active', '2025-12-15'),
  ('c0000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Scale-ups — No CRM Detected', 'linkedin', 'active', '2026-01-06'),
  ('c0000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Recent Funding — Series A', 'combined', 'paused', '2026-01-20');

-- ─── Sequences ─────────────────────────────────────────────

insert into sequences (id, organization_id, campaign_id, name, steps, total_prospects, active) values
  (
    's0000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000001',
    'c0000000-0000-0000-0000-000000000001',
    'IT-dienstverleners hiring signal — 7 stap multichannel',
    '[
      {"day":1,"channel":"linkedin","action":"profile_visit"},
      {"day":2,"channel":"linkedin","action":"connect"},
      {"day":4,"channel":"email","action":"send","subject":"Korte vraag over jullie groei"},
      {"day":7,"channel":"call","action":"call"},
      {"day":10,"channel":"email","action":"send","subject":"Volgend op mijn bericht"},
      {"day":14,"channel":"call","action":"call"},
      {"day":18,"channel":"email","action":"send","subject":"Laatste check-in"}
    ]'::jsonb,
    10,
    true
  ),
  (
    's0000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000001',
    'c0000000-0000-0000-0000-000000000002',
    'Scale-ups no CRM — 5 stap email-only',
    '[
      {"day":1,"channel":"email","action":"send","subject":"Jullie sales proces"},
      {"day":4,"channel":"email","action":"send","subject":"Quick follow-up"},
      {"day":8,"channel":"email","action":"send","subject":"Interessant inzicht voor jullie"},
      {"day":13,"channel":"email","action":"send","subject":"Breakup email"},
      {"day":20,"channel":"email","action":"send","subject":"Laatste poging"}
    ]'::jsonb,
    8,
    true
  );

-- ─── KPI Snapshots (8 weeks, Mon of each week) ────────────

insert into kpi_snapshots (organization_id, snapshot_date, channel, emails_sent, emails_opened, emails_replied, emails_bounced, linkedin_sent, linkedin_accepted, linkedin_replied, meetings_booked, pipeline_value, deals_created, deals_won) values
  -- Week 1 (Dec 23)
  ('00000000-0000-0000-0000-000000000001', '2025-12-23', 'combined', 150, 68, 5, 3, 30, 9, 2, 1, 12000, 1, 0),
  -- Week 2 (Dec 30)
  ('00000000-0000-0000-0000-000000000001', '2025-12-30', 'combined', 180, 86, 7, 4, 35, 12, 3, 1, 28000, 2, 0),
  -- Week 3 (Jan 6)
  ('00000000-0000-0000-0000-000000000001', '2026-01-06', 'combined', 220, 110, 9, 4, 42, 15, 4, 2, 52000, 2, 0),
  -- Week 4 (Jan 13)
  ('00000000-0000-0000-0000-000000000001', '2026-01-13', 'combined', 260, 135, 12, 5, 48, 18, 4, 3, 78000, 3, 0),
  -- Week 5 (Jan 20)
  ('00000000-0000-0000-0000-000000000001', '2026-01-20', 'combined', 310, 165, 15, 5, 55, 21, 5, 3, 105000, 2, 0),
  -- Week 6 (Jan 27)
  ('00000000-0000-0000-0000-000000000001', '2026-01-27', 'combined', 340, 180, 17, 6, 58, 24, 6, 4, 132000, 3, 1),
  -- Week 7 (Feb 3)
  ('00000000-0000-0000-0000-000000000001', '2026-02-03', 'combined', 370, 196, 19, 6, 62, 27, 6, 5, 158000, 3, 0),
  -- Week 8 (Feb 10)
  ('00000000-0000-0000-0000-000000000001', '2026-02-10', 'combined', 400, 208, 21, 7, 65, 29, 7, 6, 180000, 4, 1);

-- ─── Prospects (15 total) ──────────────────────────────────

-- 3x new (hiring signals, scores 7-9)
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, status, created_at) values
  ('p0000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Mark van der Berg', 'mark@logisoft.nl', '+31612345601', 'LogiSoft BV', 'Head of Sales', 'https://linkedin.com/in/markvanderberg', 'hiring', 9, 'Plaatste Sales Executive vacature 3 dagen geleden', 0, 'IT-dienstverleners hiring signal — 7 stap multichannel', 'new', '2026-02-14'),
  ('p0000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Sophie Jansen', 'sophie@cloudnine.nl', '+31612345602', 'CloudNine Solutions', 'VP Sales', 'https://linkedin.com/in/sophiejansen', 'hiring', 8, 'Zoekt 2 Account Executives — geplaatst 5 dagen geleden', 0, 'IT-dienstverleners hiring signal — 7 stap multichannel', 'new', '2026-02-13'),
  ('p0000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Jan Bakker', 'jan@databridge.io', '+31612345603', 'DataBridge', 'CEO', 'https://linkedin.com/in/janbakker', 'funding', 10, 'Series A afgerond: €4.2M via Peak Capital — 1 week geleden', 0, 'Recent Funding — Series A', 'new', '2026-02-12');

-- 4x contacted (email sent, mixed signals)
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, last_touch_at, next_action, next_action_at, status, created_at) values
  ('p0000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Lisa de Groot', 'lisa@scaleforce.nl', '+31612345604', 'ScaleForce', 'Commercial Director', 'https://linkedin.com/in/lisadegroot', 'no_crm', 7, 'Geen CRM gedetecteerd — gebruikt spreadsheets voor pipeline', 2, 'Scale-ups no CRM — 5 stap email-only', '2026-02-10', 'follow_up_email', '2026-02-17', 'contacted', '2026-02-03'),
  ('p0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Tom Visser', 'tom@brightmedia.nl', '+31612345605', 'Bright Media', 'Managing Director', 'https://linkedin.com/in/tomvisser', 'hiring', 7, 'Sales Manager vacature op Indeed — 2 weken geleden', 3, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-08', 'call', '2026-02-17', 'contacted', '2026-01-28'),
  ('p0000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Eva Mulder', 'eva@growthstack.nl', '+31612345606', 'GrowthStack', 'Head of Business Development', 'https://linkedin.com/in/evamulder', 'growth', 6, '40% YoY omzetgroei — 18 naar 32 FTE in 12 maanden', 1, 'Scale-ups no CRM — 5 stap email-only', '2026-02-12', 'follow_up_email', '2026-02-18', 'contacted', '2026-02-06'),
  ('p0000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'Peter van Dijk', 'peter@nexuserp.nl', '+31612345607', 'NexusERP', 'CRO', 'https://linkedin.com/in/petervandijk', 'no_crm', 8, 'Website toont geen CRM integraties — manual sales proces', 2, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-11', 'email', '2026-02-18', 'contacted', '2026-02-04');

-- 3x engaged (replied or LinkedIn accepted)
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, last_touch_at, next_action, next_action_at, status, created_at) values
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'Anna Smit', 'anna@cloudserve.nl', '+31612345608', 'CloudServe NL', 'Head of Growth', 'https://linkedin.com/in/annasmit', 'funding', 9, 'Series A: €2.8M via Keen Venture Partners — 3 weken geleden', 4, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-13', 'call', '2026-02-17', 'engaged', '2026-01-20'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'Robert Hendriks', 'robert@finflow.nl', '+31612345609', 'FinFlow', 'Sales Director', 'https://linkedin.com/in/roberthendriks', 'no_crm', 6, 'LinkedIn profiel vermeldt "building sales from scratch"', 5, 'Scale-ups no CRM — 5 stap email-only', '2026-02-11', 'schedule_meeting', '2026-02-17', 'engaged', '2026-01-15'),
  ('p0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'Karin Bos', 'karin@webforce.nl', '+31612345610', 'WebForce NL', 'CEO', 'https://linkedin.com/in/karinbos', 'growth', 7, '3 nieuwe vacatures in sales team — snelle groei', 3, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-14', 'call', '2026-02-18', 'engaged', '2026-01-22');

-- 2x meeting_booked
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, last_touch_at, next_action, next_action_at, status, created_at) values
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'Daan Vermeer', 'daan@digitalcraft.nl', '+31612345611', 'DigitalCraft', 'Managing Partner', 'https://linkedin.com/in/daanvermeer', 'hiring', 8, 'Zoekt Sales Lead en 2 SDRs — team uitbreiding', 5, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-14', 'prepare_meeting', '2026-02-19', 'meeting_booked', '2026-01-10'),
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'Femke de Vries', 'femke@saasbuilders.nl', '+31612345612', 'SaaS Builders', 'COO', 'https://linkedin.com/in/femkedevries', 'funding', 8, 'Seed round €1.5M — 2 maanden geleden, klaar om te scalen', 6, 'Recent Funding — Series A', '2026-02-12', 'prepare_meeting', '2026-02-20', 'meeting_booked', '2026-01-08');

-- 2x qualified (in pipeline)
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, last_touch_at, status, created_at) values
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'Joost Kok', 'joost@mediahuis.nl', '+31612345613', 'MediaHuis Pro', 'Director Sales', 'https://linkedin.com/in/joostkok', 'no_crm', 7, 'Manual outbound — geen tooling gedetecteerd', 7, 'Scale-ups no CRM — 5 stap email-only', '2026-02-10', 'qualified', '2025-12-20'),
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'Marieke Wolters', 'marieke@techbridge.nl', '+31612345614', 'TechBridge', 'VP Revenue', 'https://linkedin.com/in/mariekewolters', 'growth', 6, '25% QoQ groei in nieuwe klanten', 7, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-07', 'qualified', '2025-12-15');

-- 1x lost
insert into prospects (id, organization_id, name, email, phone, company, job_title, linkedin_url, signal_type, signal_score, signal_detail, sequence_step, sequence_name, last_touch_at, status, created_at) values
  ('p0000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000001', 'Frank Meijer', 'frank@novatech.nl', '+31612345615', 'NovaTech', 'CEO', 'https://linkedin.com/in/frankmeijer', 'hiring', 7, 'Sales hire vacature — bleek al ingevuld', 4, 'IT-dienstverleners hiring signal — 7 stap multichannel', '2026-02-01', 'lost', '2025-12-18');

-- ─── Touches (2-6 per prospect) ───────────────────────────

-- Prospect 4 (Lisa - contacted): 3 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2026-02-03'),
  ('p0000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 1, null, true, '2026-02-04'),
  ('p0000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 2, null, true, '2026-02-10');

-- Prospect 5 (Tom - contacted): 4 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2026-01-28'),
  ('p0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 2, null, true, '2026-01-30'),
  ('p0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, null, true, '2026-02-04'),
  ('p0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 3, 'Geopend 2x', true, '2026-02-08');

-- Prospect 6 (Eva - contacted): 2 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2026-02-06'),
  ('p0000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 1, null, true, '2026-02-12');

-- Prospect 7 (Peter - contacted): 3 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2026-02-04'),
  ('p0000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 2, null, true, '2026-02-08'),
  ('p0000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 2, null, true, '2026-02-11');

-- Prospect 8 (Anna - engaged): 5 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2026-01-20'),
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 2, null, true, '2026-01-23'),
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, null, true, '2026-01-27'),
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 3, 'Positieve reply: "Klinkt interessant, vertel meer"', true, '2026-02-01'),
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'call', 'called', 4, 'Goed gesprek, wil meeting plannen', false, '2026-02-13');

-- Prospect 9 (Robert - engaged): 6 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2026-01-15'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 1, null, true, '2026-01-16'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 2, null, true, '2026-01-22'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 2, 'Vraag over pricing: "Wat kost dit per maand?"', true, '2026-01-25'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, 'Pricing info doorgestuurd', false, '2026-02-01'),
  ('p0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 5, 'LinkedIn accepted na email contact', true, '2026-02-11');

-- Prospect 10 (Karin - engaged): 4 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2026-01-22'),
  ('p0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 2, null, true, '2026-01-25'),
  ('p0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, null, true, '2026-02-01'),
  ('p0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 3, 'Positieve reply: "Laten we bellen volgende week"', true, '2026-02-14');

-- Prospect 11 (Daan - meeting_booked): 6 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2026-01-10'),
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 2, null, true, '2026-01-13'),
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, null, true, '2026-01-17'),
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'call', 'called', 4, 'Goed gesprek — geinteresseerd', false, '2026-01-24'),
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 5, 'Follow-up na call', true, '2026-02-03'),
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'meeting', 'meeting_booked', 5, 'Meeting gepland 19 feb 14:00', false, '2026-02-14');

-- Prospect 12 (Femke - meeting_booked): 5 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2026-01-08'),
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'email', 'opened', 1, null, true, '2026-01-09'),
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 2, 'Positieve reply: "Dit past bij onze plannen"', true, '2026-01-20'),
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'call', 'called', 4, 'Goed gesprek — wil demo', false, '2026-02-05'),
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'meeting', 'meeting_booked', 6, 'Meeting gepland 20 feb 10:00', false, '2026-02-12');

-- Prospect 13 (Joost - qualified): 4 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2025-12-20'),
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 2, 'Vraag over referenties', true, '2026-01-05'),
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'call', 'called', 4, 'Lang gesprek — zeer geinteresseerd', false, '2026-01-15'),
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'meeting', 'meeting_booked', 7, 'Voorstel besproken — akkoord op hoofdlijnen', false, '2026-02-10');

-- Prospect 14 (Marieke - qualified): 5 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'linkedin', 'sent', 1, 'Profile visit', true, '2025-12-15'),
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'linkedin', 'connected', 2, null, true, '2025-12-18'),
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 3, null, true, '2025-12-22'),
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'email', 'replied', 4, 'Wil meer weten over Growth Partner tier', true, '2026-01-10'),
  ('p0000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'meeting', 'meeting_booked', 7, 'Proposal gestuurd — in onderhandeling', false, '2026-02-07');

-- Prospect 15 (Frank - lost): 3 touches
insert into touches (prospect_id, organization_id, channel, touch_type, sequence_step, notes, automated, created_at) values
  ('p0000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 1, null, true, '2025-12-18'),
  ('p0000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000001', 'email', 'sent', 2, null, true, '2025-12-26'),
  ('p0000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000001', 'call', 'called', 4, 'Vacature al ingevuld, geen interesse meer', false, '2026-02-01');

-- ─── Calls (5 prospects with call records) ─────────────────

insert into calls (prospect_id, organization_id, outcome, duration_seconds, call_brief, notes, follow_up_action, follow_up_at, created_at) values
  -- Anna (engaged) — interested
  ('p0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'interested', 420,
   '{"signal_info":"Series A €2.8M — klaar om sales op te schalen","company_context":"Cloud infrastructure, 25 FTE, Amsterdam","suggested_opener":"Gefeliciteerd met de funding! Ik zag dat jullie nu snel willen groeien op sales","objection_handling":{"te_duur":"ROI binnen 3 maanden — vergelijk met FTE kosten","al_een_team":"Wij vullen aan, niet vervangen — focus op outbound terwijl jullie team deals sluit"}}'::jsonb,
   'Zeer geinteresseerd. Wil meeting plannen volgende week.', 'schedule_meeting', '2026-02-17', '2026-02-13'),

  -- Daan (meeting_booked) — interested
  ('p0000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'interested', 540,
   '{"signal_info":"Zoekt Sales Lead + 2 SDRs","company_context":"Digital agency, 40 FTE, Rotterdam","suggested_opener":"Ik zag dat jullie het sales team uitbreiden — in de tussentijd kunnen wij de pipeline vullen","objection_handling":{"geen_budget":"Start met Lead Gen tier €3K — minder dan 1 SDR salaris","timing":"Juist nu starten zodat pipeline klaarstaat wanneer team compleet is"}}'::jsonb,
   'Goed gesprek. Wil voorstel zien. Meeting gepland 19 feb.', null, null, '2026-01-24'),

  -- Femke (meeting_booked) — callback
  ('p0000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'callback', 180,
   '{"signal_info":"Seed round €1.5M — 2 mnd geleden","company_context":"SaaS platform, 12 FTE, Utrecht","suggested_opener":"Met jullie funding is dit het perfecte moment om outbound op te zetten","objection_handling":{"te_vroeg":"Juist nu beginnen met warme pipeline bouwen","geen_icp":"Wij helpen ICP definiëren als onderdeel van onboarding"}}'::jsonb,
   'Was in meeting, belde terug. Positief — wil demo zien.', 'send_demo', '2026-02-05', '2026-02-03'),

  -- Joost (qualified) — interested
  ('p0000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'interested', 780,
   '{"signal_info":"Geen CRM — manual sales","company_context":"Media agency, 35 FTE, Den Haag","suggested_opener":"Ik zag dat jullie nog geen sales tooling gebruiken — dat is een enorme groei opportunity","objection_handling":{"we_doen_het_zelf":"Hoeveel uur besteedt je team nu aan handmatig prospecten?","referenties":"Ik stuur je 2 cases van vergelijkbare agencies"}}'::jsonb,
   'Lang gesprek. Wil voorstel voor Growth Partner tier. Zeer warm.', 'send_proposal', '2026-01-20', '2026-01-15'),

  -- Frank (lost) — not_interested
  ('p0000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000001', 'not_interested', 120,
   '{"signal_info":"Sales hire vacature","company_context":"Tech consultancy, 20 FTE, Eindhoven","suggested_opener":"Ik zag de Sales Executive vacature — wij kunnen helpen de pipeline te vullen terwijl jullie recruiten","objection_handling":{"al_ingevuld":"Begrijpelijk. Mocht het in de toekomst spelen, laat het weten"}}'::jsonb,
   'Vacature was al ingevuld. Geen interesse op dit moment.', null, null, '2026-02-01');

-- ─── Pipeline Deals (12 total) ─────────────────────────────

insert into pipeline_deals (organization_id, prospect_id, company, contact_name, value, stage, campaign_id, created_at) values
  -- 4x lead
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000004', 'ScaleForce', 'Lisa de Groot', 6000, 'lead', 'c0000000-0000-0000-0000-000000000002', '2026-02-10'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000006', 'GrowthStack', 'Eva Mulder', 8000, 'lead', 'c0000000-0000-0000-0000-000000000002', '2026-02-12'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000007', 'NexusERP', 'Peter van Dijk', 9000, 'lead', 'c0000000-0000-0000-0000-000000000001', '2026-02-11'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000010', 'WebForce NL', 'Karin Bos', 12000, 'lead', 'c0000000-0000-0000-0000-000000000001', '2026-02-14'),
  -- 3x meeting_scheduled
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000008', 'CloudServe NL', 'Anna Smit', 18000, 'meeting_scheduled', 'c0000000-0000-0000-0000-000000000001', '2026-02-13'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000011', 'DigitalCraft', 'Daan Vermeer', 15000, 'meeting_scheduled', 'c0000000-0000-0000-0000-000000000001', '2026-02-14'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000012', 'SaaS Builders', 'Femke de Vries', 9000, 'meeting_scheduled', 'c0000000-0000-0000-0000-000000000003', '2026-02-12'),
  -- 2x proposal_sent
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000009', 'FinFlow', 'Robert Hendriks', 12000, 'proposal_sent', 'c0000000-0000-0000-0000-000000000002', '2026-02-01'),
  ('00000000-0000-0000-0000-000000000001', null, 'Bright Media', 'Tom Visser', 18000, 'proposal_sent', 'c0000000-0000-0000-0000-000000000001', '2026-01-28'),
  -- 2x negotiation
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000013', 'MediaHuis Pro', 'Joost Kok', 24000, 'negotiation', 'c0000000-0000-0000-0000-000000000002', '2026-01-15'),
  ('00000000-0000-0000-0000-000000000001', 'p0000000-0000-0000-0000-000000000014', 'TechBridge', 'Marieke Wolters', 36000, 'negotiation', 'c0000000-0000-0000-0000-000000000001', '2025-12-15'),
  -- 1x closed_won
  ('00000000-0000-0000-0000-000000000001', null, 'Digital Squad', 'Jan de Vries', 45000, 'closed_won', 'c0000000-0000-0000-0000-000000000001', '2025-12-20');

-- ─── Deliverables ──────────────────────────────────────────

insert into deliverables (organization_id, title, category, file_type, file_url, status, published_at) values
  ('00000000-0000-0000-0000-000000000001', 'ICP Document v1', 'Strategie', 'pdf', '/docs/icp-v1.pdf', 'final', '2025-12-08'),
  ('00000000-0000-0000-0000-000000000001', 'Messaging Playbook', 'Playbooks', 'pdf', '/docs/messaging-playbook.pdf', 'final', '2025-12-15'),
  ('00000000-0000-0000-0000-000000000001', 'Week 4 Rapport', 'Rapportages', 'pdf', '/docs/week-4-report.pdf', 'final', '2026-01-20'),
  ('00000000-0000-0000-0000-000000000001', 'Week 8 Rapport', 'Rapportages', 'pdf', '/docs/week-8-report.pdf', 'draft', null),
  ('00000000-0000-0000-0000-000000000001', 'Quarterly Strategy Review', 'Strategie', 'pdf', '/docs/q1-strategy.pdf', 'draft', null);

-- ─── Action Items ──────────────────────────────────────────

insert into action_items (organization_id, phase, title, status, assignee, due_date, sort_order) values
  ('00000000-0000-0000-0000-000000000001', 'campaign_build', 'Review messaging variant B', 'completed', 'Klant', '2026-01-20', 1),
  ('00000000-0000-0000-0000-000000000001', 'optimization', 'Approve nieuwe ICP segment: Logistics', 'pending', 'Klant', '2026-02-20', 2),
  ('00000000-0000-0000-0000-000000000001', 'optimization', 'Feedback op week 4 rapport', 'completed', 'Klant', '2026-01-25', 3),
  ('00000000-0000-0000-0000-000000000001', 'optimization', 'Call recordings reviewen', 'pending', 'Klant', '2026-02-22', 4);
