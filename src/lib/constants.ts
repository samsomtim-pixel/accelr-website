// Accelr Portal — Constants & Design Tokens

export const NL_BENCHMARKS = {
  openRate: 28.5,
  replyRate: 3.8,
  meetingRate: 0.21,
  bounceRate: 4.2,
  pipelinePer1K: 42000,
} as const;

export const DESIGN = {
  accent: '#2ECC71',
  positive: '#10B981',
  negative: '#EF4444',
  warning: '#F59E0B',
} as const;

export const PLAN_LABELS: Record<string, string> = {
  lead_gen: 'Lead Gen',
  full_cycle: 'Full Cycle',
  growth: 'Growth Partner',
} as const;

export const PHASE_LABELS: Record<string, string> = {
  foundation: 'Foundation',
  campaign_build: 'Campaign Build',
  optimization: 'Optimization',
} as const;
