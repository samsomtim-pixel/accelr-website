-- ============================================================
-- Accelr Portal — Supabase SQL Schema
-- Copy-paste this into the Supabase SQL Editor and run it.
-- ============================================================
-- Tables:  organizations, profiles, kpi_snapshots, campaigns,
--          deliverables, action_items, prospects, touches,
--          calls, sequences, pipeline_deals
-- Auth:    Supabase Auth (magic link)
-- RLS:     clients see own org only, admins see everything
-- ============================================================

-- ─── 1. ENUMS ───────────────────────────────────────────────

create type plan_tier       as enum ('lead_gen', 'full_cycle', 'growth');
create type app_role        as enum ('admin', 'client');
create type channel_type    as enum ('email', 'linkedin', 'combined');
create type campaign_status as enum ('active', 'paused', 'completed');
create type file_type       as enum ('pdf', 'doc', 'xlsx');
create type doc_status      as enum ('draft', 'final');
create type action_phase    as enum ('foundation', 'campaign_build', 'optimization');
create type action_status   as enum ('completed', 'in_progress', 'pending');
create type assignee_type   as enum ('Accelr', 'Klant');

-- New enums for prospects, touches & calls
create type signal_type     as enum ('hiring', 'no_crm', 'funding', 'website_change', 'growth', 'intent');
create type prospect_status as enum ('new', 'contacted', 'engaged', 'meeting_booked', 'qualified', 'lost');
create type touch_channel   as enum ('email', 'linkedin', 'call', 'meeting');
create type touch_type      as enum ('sent', 'opened', 'replied', 'connected', 'called', 'voicemail', 'meeting_booked', 'no_answer');
create type call_outcome    as enum ('interested', 'callback', 'not_interested', 'voicemail', 'no_answer', 'wrong_number');
create type pipeline_stage  as enum ('lead', 'meeting_scheduled', 'proposal_sent', 'negotiation', 'closed_won', 'closed_lost');

-- ─── 2. TABLES ──────────────────────────────────────────────

-- Organizations (clients)
create table organizations (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  slug       text not null unique,
  industry   text not null default '',
  plan       plan_tier not null default 'lead_gen',
  logo_url   text,
  active     boolean not null default true,
  created_at timestamptz not null default now()
);

create index idx_organizations_slug   on organizations (slug);
create index idx_organizations_active on organizations (active);

-- Profiles (linked to auth.users)
create table profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  email           text not null,
  full_name       text not null default '',
  organization_id uuid not null references organizations (id) on delete cascade,
  app_role        app_role not null default 'client',
  created_at      timestamptz not null default now()
);

create index idx_profiles_org on profiles (organization_id);

-- KPI Snapshots (filled by n8n workflow #9, daily)
create table kpi_snapshots (
  id                uuid primary key default gen_random_uuid(),
  organization_id   uuid not null references organizations (id) on delete cascade,
  snapshot_date     date not null,
  channel           channel_type not null default 'combined',
  emails_sent       integer not null default 0,
  emails_opened     integer not null default 0,
  emails_replied    integer not null default 0,
  emails_bounced    integer not null default 0,
  linkedin_sent     integer not null default 0,
  linkedin_accepted integer not null default 0,
  linkedin_replied  integer not null default 0,
  meetings_booked   integer not null default 0,
  pipeline_value    numeric(12,2) not null default 0,
  deals_created     integer not null default 0,
  deals_won         integer not null default 0,
  created_at        timestamptz not null default now(),

  unique (organization_id, snapshot_date, channel)
);

create index idx_kpi_org_date on kpi_snapshots (organization_id, snapshot_date desc);

-- Campaigns
create table campaigns (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  name            text not null,
  channel         channel_type not null,
  external_id     text,
  status          campaign_status not null default 'active',
  started_at      timestamptz,
  created_at      timestamptz not null default now()
);

create index idx_campaigns_org    on campaigns (organization_id);
create index idx_campaigns_status on campaigns (organization_id, status);

-- Deliverables
create table deliverables (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  title           text not null,
  category        text not null,
  file_type       file_type not null default 'pdf',
  file_url        text not null,
  status          doc_status not null default 'draft',
  published_at    timestamptz,
  created_at      timestamptz not null default now()
);

create index idx_deliverables_org on deliverables (organization_id);

-- Action Items
create table action_items (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  phase           action_phase not null,
  title           text not null,
  status          action_status not null default 'pending',
  assignee        assignee_type not null default 'Accelr',
  due_date        date,
  sort_order      integer not null default 0,
  created_at      timestamptz not null default now()
);

create index idx_actions_org on action_items (organization_id);

-- ─── NEW TABLES ────────────────────────────────────────────

-- Prospects — all prospects per client organization
create table prospects (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  name            text not null,
  email           text,
  phone           text,
  company         text not null,
  job_title       text,
  linkedin_url    text,
  signal_type     signal_type not null,
  signal_score    integer not null check (signal_score between 1 and 10),
  signal_detail   text,
  sequence_step   integer not null default 0,
  sequence_name   text,
  last_touch_at   timestamptz,
  next_action     text,
  next_action_at  timestamptz,
  status          prospect_status not null default 'new',
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_prospects_org        on prospects (organization_id);
create index idx_prospects_status     on prospects (organization_id, status);
create index idx_prospects_signal     on prospects (organization_id, signal_type);
create index idx_prospects_next_action on prospects (next_action_at)
  where next_action is not null;

-- Touches — every interaction with a prospect
create table touches (
  id              uuid primary key default gen_random_uuid(),
  prospect_id     uuid not null references prospects (id) on delete cascade,
  organization_id uuid not null references organizations (id) on delete cascade,
  channel         touch_channel not null,
  touch_type      touch_type not null,
  sequence_step   integer,
  notes           text,
  automated       boolean not null default true,
  created_at      timestamptz not null default now()
);

create index idx_touches_prospect on touches (prospect_id, created_at desc);
create index idx_touches_org      on touches (organization_id, created_at desc);

-- Calls — specific call activity records
create table calls (
  id                uuid primary key default gen_random_uuid(),
  prospect_id       uuid not null references prospects (id) on delete cascade,
  organization_id   uuid not null references organizations (id) on delete cascade,
  outcome           call_outcome not null,
  duration_seconds  integer,
  call_brief        jsonb,
  notes             text,
  follow_up_action  text,
  follow_up_at      timestamptz,
  created_at        timestamptz not null default now()
);

create index idx_calls_prospect on calls (prospect_id, created_at desc);
create index idx_calls_org      on calls (organization_id, created_at desc);

-- Sequences — campaign sequences per organization
create table sequences (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  campaign_id     uuid references campaigns (id) on delete set null,
  name            text not null,
  steps           jsonb not null default '[]'::jsonb,
  total_prospects integer not null default 0,
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);

create index idx_sequences_org on sequences (organization_id);

-- Pipeline Deals — deals in various stages
create table pipeline_deals (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations (id) on delete cascade,
  prospect_id     uuid references prospects (id) on delete set null,
  company         text not null,
  contact_name    text not null,
  value           numeric(12,2) not null default 0,
  stage           pipeline_stage not null default 'lead',
  campaign_id     uuid references campaigns (id) on delete set null,
  closed_at       timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_pipeline_org   on pipeline_deals (organization_id, stage);
create index idx_pipeline_stage on pipeline_deals (stage);

-- ─── 3. ROW LEVEL SECURITY ─────────────────────────────────

alter table organizations  enable row level security;
alter table profiles       enable row level security;
alter table kpi_snapshots  enable row level security;
alter table campaigns      enable row level security;
alter table deliverables   enable row level security;
alter table action_items   enable row level security;
alter table prospects      enable row level security;
alter table touches        enable row level security;
alter table calls          enable row level security;
alter table sequences      enable row level security;
alter table pipeline_deals enable row level security;

-- Helper: get the current user's organization_id
create or replace function auth.organization_id()
returns uuid
language sql
stable
as $$
  select organization_id
  from profiles
  where id = auth.uid()
$$;

-- Helper: check if current user is admin
create or replace function auth.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from profiles
    where id = auth.uid()
      and app_role = 'admin'
  )
$$;

-- ── Organizations ──

create policy "Admins see all organizations"
  on organizations for select
  using (auth.is_admin());

create policy "Clients see own organization"
  on organizations for select
  using (id = auth.organization_id());

-- ── Profiles ──

create policy "Admins see all profiles"
  on profiles for select
  using (auth.is_admin());

create policy "Users see own profile"
  on profiles for select
  using (id = auth.uid());

create policy "Users update own profile"
  on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- ── KPI Snapshots ──

create policy "Admins see all kpi_snapshots"
  on kpi_snapshots for select
  using (auth.is_admin());

create policy "Clients see own kpi_snapshots"
  on kpi_snapshots for select
  using (organization_id = auth.organization_id());

-- ── Campaigns ──

create policy "Admins see all campaigns"
  on campaigns for select
  using (auth.is_admin());

create policy "Clients see own campaigns"
  on campaigns for select
  using (organization_id = auth.organization_id());

-- ── Deliverables ──

create policy "Admins see all deliverables"
  on deliverables for select
  using (auth.is_admin());

create policy "Clients see own deliverables"
  on deliverables for select
  using (organization_id = auth.organization_id());

-- ── Action Items ──

create policy "Admins see all action_items"
  on action_items for select
  using (auth.is_admin());

create policy "Clients see own action_items"
  on action_items for select
  using (organization_id = auth.organization_id());

create policy "Clients update own action_items"
  on action_items for update
  using (organization_id = auth.organization_id())
  with check (organization_id = auth.organization_id());

-- ── Prospects ──

create policy "Admins see all prospects"
  on prospects for select
  using (auth.is_admin());

create policy "Clients see own prospects"
  on prospects for select
  using (organization_id = auth.organization_id());

create policy "Admins manage prospects"
  on prospects for all
  using (auth.is_admin());

-- ── Touches ──

create policy "Admins see all touches"
  on touches for select
  using (auth.is_admin());

create policy "Clients see own touches"
  on touches for select
  using (organization_id = auth.organization_id());

create policy "Admins manage touches"
  on touches for all
  using (auth.is_admin());

-- ── Calls ──

create policy "Admins see all calls"
  on calls for select
  using (auth.is_admin());

create policy "Clients see own calls"
  on calls for select
  using (organization_id = auth.organization_id());

create policy "Admins manage calls"
  on calls for all
  using (auth.is_admin());

-- ── Sequences ──

create policy "Admins see all sequences"
  on sequences for select
  using (auth.is_admin());

create policy "Clients see own sequences"
  on sequences for select
  using (organization_id = auth.organization_id());

-- ── Pipeline Deals ──

create policy "Admins see all pipeline_deals"
  on pipeline_deals for select
  using (auth.is_admin());

create policy "Clients see own pipeline_deals"
  on pipeline_deals for select
  using (organization_id = auth.organization_id());

create policy "Admins manage pipeline_deals"
  on pipeline_deals for all
  using (auth.is_admin());

-- ─── 4. SERVICE ROLE WRITE POLICIES ────────────────────────
-- n8n webhooks write via service_role key (bypasses RLS).
-- These INSERT policies allow the service_role to write,
-- but block anon/client inserts on data tables.

-- No insert/delete policies for clients on data tables.
-- All writes happen server-side via service_role key.

-- ─── 5. TRIGGER: AUTO-CREATE PROFILE ON SIGNUP ─────────────

create or replace function handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, app_role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce((new.raw_user_meta_data ->> 'app_role')::public.app_role, 'client')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function handle_new_user();

-- ─── 6. AUTO-UPDATE updated_at ─────────────────────────────

create or replace function update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at_prospects
  before update on prospects
  for each row execute function update_updated_at();

create trigger set_updated_at_pipeline_deals
  before update on pipeline_deals
  for each row execute function update_updated_at();
