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
  channel: 'email' | 'linkedin';
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

// UI-specific types
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
  type: 'meeting' | 'reply' | 'campaign' | 'deal' | 'deliverable';
  text: string;
  time: string;
}

export type DateRange = '7d' | '30d' | '90d';
export type AppRole = 'admin' | 'client';
export type PlanTier = 'lead_gen' | 'full_cycle' | 'growth';
