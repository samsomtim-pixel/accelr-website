import type {
  KpiCardData,
  TimeSeriesPoint,
  BenchmarkItem,
  PipelineStage,
  ActivityItem,
  Campaign,
  Deliverable,
  ActionItem,
  DateRange,
} from '@/lib/types';
import {
  kpiData,
  timeSeriesData,
  benchmarkData,
  pipelineStages,
  recentActivity,
  deliverables as mockDeliverables,
  actionItems as mockActionItems,
  allClients as mockAllClients,
} from '@/lib/mock-data';

// ─── Service Interface ───────────────────────────────────

export interface KpiService {
  getKpiCards(orgId: string, dateRange: DateRange): Promise<KpiCardData[]>;
  getTimeSeries(orgId: string, dateRange: DateRange): Promise<TimeSeriesPoint[]>;
  getBenchmarks(orgId: string): Promise<BenchmarkItem[]>;
  getPipeline(orgId: string): Promise<PipelineStage[]>;
  getRecentActivity(orgId: string): Promise<ActivityItem[]>;
  getDeliverables(orgId: string): Promise<Deliverable[]>;
  getActionItems(orgId: string): Promise<ActionItem[]>;
  getCampaigns(orgId: string, channel?: 'email' | 'linkedin'): Promise<Campaign[]>;
  getAllClients(): Promise<typeof mockAllClients>;
}

// ─── Mock Implementation ─────────────────────────────────

class MockKpiService implements KpiService {
  async getKpiCards(_orgId: string, _dateRange: DateRange): Promise<KpiCardData[]> {
    return [
      { label: 'Emails Verzonden', value: kpiData.emailsSent.value, delta: kpiData.emailsSent.delta, previous: kpiData.emailsSent.previous, icon: 'Mail' },
      { label: 'Open Rate', value: kpiData.openRate.value, delta: kpiData.openRate.delta, unit: '%', benchmark: kpiData.openRate.benchmark, icon: 'Eye' },
      { label: 'Reply Rate', value: kpiData.replyRate.value, delta: kpiData.replyRate.delta, unit: '%', benchmark: kpiData.replyRate.benchmark, icon: 'MessageSquare' },
      { label: 'Meetings Geboekt', value: kpiData.meetingsBooked.value, delta: kpiData.meetingsBooked.delta, previous: kpiData.meetingsBooked.previous, icon: 'Calendar' },
      { label: 'Pipeline Waarde', value: kpiData.pipelineValue.value, delta: kpiData.pipelineValue.delta, unit: '€', previous: kpiData.pipelineValue.previous, icon: 'TrendingUp' },
    ];
  }

  async getTimeSeries(_orgId: string, _dateRange: DateRange): Promise<TimeSeriesPoint[]> {
    return timeSeriesData;
  }

  async getBenchmarks(_orgId: string): Promise<BenchmarkItem[]> {
    return benchmarkData as BenchmarkItem[];
  }

  async getPipeline(_orgId: string): Promise<PipelineStage[]> {
    return pipelineStages;
  }

  async getRecentActivity(_orgId: string): Promise<ActivityItem[]> {
    return recentActivity as ActivityItem[];
  }

  async getDeliverables(_orgId: string): Promise<Deliverable[]> {
    return mockDeliverables.map((d) => ({
      ...d,
      organization_id: 'mock',
      file_type: d.type as 'pdf' | 'doc' | 'xlsx',
      file_url: '#',
      status: d.status as 'draft' | 'final',
      published_at: d.date,
    }));
  }

  async getActionItems(_orgId: string): Promise<ActionItem[]> {
    return mockActionItems.map((a) => ({
      id: a.id,
      title: a.title,
      organization_id: 'mock',
      phase: a.phase.toLowerCase().replace(' ', '_') as ActionItem['phase'],
      status: a.status as ActionItem['status'],
      assignee: a.assignee as 'Accelr' | 'Klant',
      due_date: a.dueDate,
      sort_order: parseInt(a.id),
    }));
  }

  async getCampaigns(_orgId: string, _channel?: 'email' | 'linkedin'): Promise<Campaign[]> {
    return [
      { id: '1', organization_id: 'mock', name: 'SaaS Decision Makers Q1', channel: 'email', status: 'active', started_at: '2026-01-12' },
      { id: '2', organization_id: 'mock', name: 'Tech Founders NL', channel: 'email', status: 'active', started_at: '2026-01-20' },
      { id: '3', organization_id: 'mock', name: 'Marketing Directors', channel: 'email', status: 'paused', started_at: '2025-12-15' },
      { id: '4', organization_id: 'mock', name: 'SaaS Founders - Connectie', channel: 'linkedin', status: 'active', started_at: '2026-01-15' },
      { id: '5', organization_id: 'mock', name: 'Tech CTOs - InMail', channel: 'linkedin', status: 'active', started_at: '2026-02-01' },
    ];
  }

  async getAllClients() {
    return mockAllClients;
  }
}

// ─── Live Implementation (Supabase) ─────────────────────

class LiveKpiService implements KpiService {
  // TODO: Implement when Supabase is connected
  // For now, falls back to mock
  private mock = new MockKpiService();

  async getKpiCards(orgId: string, dateRange: DateRange) {
    return this.mock.getKpiCards(orgId, dateRange);
  }
  async getTimeSeries(orgId: string, dateRange: DateRange) {
    return this.mock.getTimeSeries(orgId, dateRange);
  }
  async getBenchmarks(orgId: string) {
    return this.mock.getBenchmarks(orgId);
  }
  async getPipeline(orgId: string) {
    return this.mock.getPipeline(orgId);
  }
  async getRecentActivity(orgId: string) {
    return this.mock.getRecentActivity(orgId);
  }
  async getDeliverables(orgId: string) {
    return this.mock.getDeliverables(orgId);
  }
  async getActionItems(orgId: string) {
    return this.mock.getActionItems(orgId);
  }
  async getCampaigns(orgId: string, channel?: 'email' | 'linkedin') {
    return this.mock.getCampaigns(orgId, channel);
  }
  async getAllClients() {
    return this.mock.getAllClients();
  }
}

// ─── Factory ─────────────────────────────────────────────

export function createKpiService(): KpiService {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return new MockKpiService();
  }
  return new LiveKpiService();
}
