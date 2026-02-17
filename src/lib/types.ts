// Accelr Portal — TypeScript Interfaces

export interface Organization {
  id: string;
  name: string;
  slug: string;
  industry: string;
  plan: 'lead_gen' | 'full_cycle' | 'growth';
  logo_url?: string;
  active: boolean;
  created_at?: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  organization_id: string;
  app_role: 'admin' | 'client';
  created_at?: string;
}

export interface KpiSnapshot {
  id: string;
  organization_id: string;
  snapshot_date: string;
  channel: 'email' | 'linkedin' | 'combined';
  emails_sent: number;
  emails_opened: number;
  emails_replied: number;
  emails_bounced: number;
  linkedin_sent: number;
  linkedin_accepted: number;
  linkedin_replied: number;
  meetings_booked: number;
  pipeline_value: number;
  deals_created: number;
  deals_won: number;
  created_at?: string;
}

export interface Campaign {
  id: string;
  organization_id: string;
  name: string;
  channel: 'email' | 'linkedin' | 'combined';
  external_id?: string;
  status: 'active' | 'paused' | 'completed';
  started_at?: string;
  created_at?: string;
}

export interface Deliverable {
  id: string;
  organization_id: string;
  title: string;
  category: string;
  file_type: 'pdf' | 'doc' | 'xlsx';
  file_url: string;
  status: 'draft' | 'final';
  published_at?: string;
  created_at?: string;
}

export interface ActionItem {
  id: string;
  organization_id: string;
  phase: 'foundation' | 'campaign_build' | 'optimization';
  title: string;
  status: 'completed' | 'in_progress' | 'pending';
  assignee: 'Accelr' | 'Klant';
  due_date?: string;
  sort_order: number;
  created_at?: string;
}

// ─── New types for prospects, touches, calls ───────────────

export type SignalType = 'hiring' | 'no_crm' | 'funding' | 'website_change' | 'growth' | 'intent';
export type ProspectStatus = 'new' | 'contacted' | 'engaged' | 'meeting_booked' | 'qualified' | 'lost';
export type TouchChannel = 'email' | 'linkedin' | 'call' | 'meeting';
export type TouchType = 'sent' | 'opened' | 'replied' | 'connected' | 'called' | 'voicemail' | 'meeting_booked' | 'no_answer';
export type CallOutcome = 'interested' | 'callback' | 'not_interested' | 'voicemail' | 'no_answer' | 'wrong_number';
export type PipelineStageName = 'lead' | 'meeting_scheduled' | 'proposal_sent' | 'negotiation' | 'closed_won' | 'closed_lost';

export interface Prospect {
  id: string;
  organization_id: string;
  name: string;
  email?: string;
  phone?: string;
  company: string;
  job_title?: string;
  linkedin_url?: string;
  signal_type: SignalType;
  signal_score: number;
  signal_detail?: string;
  sequence_step: number;
  sequence_name?: string;
  last_touch_at?: string;
  next_action?: string;
  next_action_at?: string;
  status: ProspectStatus;
  created_at?: string;
  updated_at?: string;
}

export interface Touch {
  id: string;
  prospect_id: string;
  organization_id: string;
  channel: TouchChannel;
  touch_type: TouchType;
  sequence_step?: number;
  notes?: string;
  automated: boolean;
  created_at: string;
}

export interface CallBrief {
  signal_info: string;
  company_context: string;
  suggested_opener: string;
  objection_handling: Record<string, string>;
}

export interface Call {
  id: string;
  prospect_id: string;
  organization_id: string;
  outcome: CallOutcome;
  duration_seconds?: number;
  call_brief?: CallBrief;
  notes?: string;
  follow_up_action?: string;
  follow_up_at?: string;
  created_at: string;
}

export interface SequenceStep {
  day: number;
  channel: string;
  action: string;
  subject?: string;
}

export interface Sequence {
  id: string;
  organization_id: string;
  campaign_id?: string;
  name: string;
  steps: SequenceStep[];
  total_prospects: number;
  active: boolean;
  created_at?: string;
}

export interface PipelineDeal {
  id: string;
  organization_id: string;
  prospect_id?: string;
  company: string;
  contact_name: string;
  value: number;
  stage: PipelineStageName;
  campaign_id?: string;
  closed_at?: string;
  created_at?: string;
  updated_at?: string;
}

// ─── UI-specific types ─────────────────────────────────────

export interface KpiCardData {
  label: string;
  value: number;
  delta: number;
  unit?: '%' | '€';
  benchmark?: number;
  previous?: number;
  icon: string;
  iconColor?: string;
}

export interface TimeSeriesPoint {
  week: string;
  emailsSent: number;
  opens: number;
  replies: number;
  meetings: number;
  pipeline: number;
}

export interface BenchmarkItem {
  metric: string;
  client: number;
  nlAverage: number;
  unit: '%' | '€';
}

export interface PipelineStage {
  name: string;
  count: number;
  value: number;
  color: string;
}

export interface ActivityItem {
  id: string;
  type: 'meeting' | 'reply' | 'campaign' | 'deal' | 'deliverable' | 'call' | 'signal';
  text: string;
  time: string;
}

export type DateRange = '7d' | '30d' | '90d';
export type AppRole = 'admin' | 'client';
export type PlanTier = 'lead_gen' | 'full_cycle' | 'growth';
