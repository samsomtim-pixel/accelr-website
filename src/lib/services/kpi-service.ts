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
  Prospect,
  Touch,
  Call,
  PipelineDeal,
  Sequence,
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
  mockProspects,
  mockTouches,
  mockCalls,
  mockPipelineDeals,
  mockSequences,
  mockCampaigns,
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
  getProspects(orgId: string): Promise<Prospect[]>;
  getTouches(orgId: string, prospectId?: string): Promise<Touch[]>;
  getCalls(orgId: string, prospectId?: string): Promise<Call[]>;
  getPipelineDeals(orgId: string): Promise<PipelineDeal[]>;
  getSequences(orgId: string): Promise<Sequence[]>;
  getCallQueue(orgId?: string): Promise<Prospect[]>;
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

  async getCampaigns(_orgId: string, channel?: 'email' | 'linkedin'): Promise<Campaign[]> {
    if (channel) {
      return mockCampaigns.filter(c => c.channel === channel);
    }
    return mockCampaigns;
  }

  async getAllClients() {
    return mockAllClients;
  }

  async getProspects(_orgId: string): Promise<Prospect[]> {
    return mockProspects;
  }

  async getTouches(_orgId: string, prospectId?: string): Promise<Touch[]> {
    if (prospectId) {
      return mockTouches.filter(t => t.prospect_id === prospectId);
    }
    return mockTouches;
  }

  async getCalls(_orgId: string, prospectId?: string): Promise<Call[]> {
    if (prospectId) {
      return mockCalls.filter(c => c.prospect_id === prospectId);
    }
    return mockCalls;
  }

  async getPipelineDeals(_orgId: string): Promise<PipelineDeal[]> {
    return mockPipelineDeals;
  }

  async getSequences(_orgId: string): Promise<Sequence[]> {
    return mockSequences;
  }

  async getCallQueue(_orgId?: string): Promise<Prospect[]> {
    // Prospects that have next_action containing 'call' and next_action_at is today or past
    return mockProspects.filter(p =>
      p.next_action && p.next_action.includes('call') && p.status !== 'lost'
    );
  }
}

// ─── Live Implementation (Supabase) ─────────────────────

class LiveKpiService implements KpiService {
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
  async getProspects(orgId: string) {
    return this.mock.getProspects(orgId);
  }
  async getTouches(orgId: string, prospectId?: string) {
    return this.mock.getTouches(orgId, prospectId);
  }
  async getCalls(orgId: string, prospectId?: string) {
    return this.mock.getCalls(orgId, prospectId);
  }
  async getPipelineDeals(orgId: string) {
    return this.mock.getPipelineDeals(orgId);
  }
  async getSequences(orgId: string) {
    return this.mock.getSequences(orgId);
  }
  async getCallQueue(orgId?: string) {
    return this.mock.getCallQueue(orgId);
  }
}

// ─── Factory ─────────────────────────────────────────────

export function createKpiService(): KpiService {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return new MockKpiService();
  }
  return new LiveKpiService();
}
