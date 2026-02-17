-- ============================================================
-- Accelr Portal — Supabase SQL Schema
-- Copy-paste this into the Supabase SQL Editor and run it.
-- ============================================================
-- Tables:  organizations, profiles, kpi_snapshots, campaigns,
--          deliverables, action_items
-- Auth:    Supabase Auth (magic link)
-- RLS:     clients see own org only, admins see everything
-- ============================================================

-- ─── 1. ENUMS ───────────────────────────────────────────────

create type plan_tier     as enum ('lead_gen', 'full_cycle', 'growth');
create type app_role      as enum ('admin', 'client');
create type channel_type  as enum ('email', 'linkedin', 'combined');
create type campaign_status as enum ('active', 'paused', 'completed');
create type file_type     as enum ('pdf', 'doc', 'xlsx');
create type doc_status    as enum ('draft', 'final');
create type action_phase  as enum ('foundation', 'campaign_build', 'optimization');
create type action_status as enum ('completed', 'in_progress', 'pending');
create type assignee_type as enum ('Accelr', 'Klant');

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

-- ─── 3. ROW LEVEL SECURITY ─────────────────────────────────

alter table organizations enable row level security;
alter table profiles       enable row level security;
alter table kpi_snapshots  enable row level security;
alter table campaigns      enable row level security;
alter table deliverables   enable row level security;
alter table action_items   enable row level security;

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

-- ─── 6. SEED DATA (OPTIONAL — DEMO/DEV) ────────────────────
-- Uncomment below to insert a demo organization.
-- After running, invite a user via Supabase Auth dashboard
-- and manually set their profiles.organization_id.

/*
insert into organizations (id, name, slug, industry, plan, active)
values (
  '00000000-0000-0000-0000-000000000001',
  'TechVentures BV',
  'techventures',
  'SaaS',
  'full_cycle',
  true
);
*/
