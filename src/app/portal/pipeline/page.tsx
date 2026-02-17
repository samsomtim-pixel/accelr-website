"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Calendar, Target } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils"
import { pipelineStages, mockPipelineDeals, timeSeriesData } from "@/lib/mock-data"
import type { PipelineStageName } from "@/lib/types"

// Stage display name mapping
const stageDisplayNames: Record<PipelineStageName, string> = {
  lead: "Lead",
  meeting_scheduled: "Meeting Gepland",
  proposal_sent: "Voorstel Verstuurd",
  negotiation: "Onderhandeling",
  closed_won: "Gewonnen",
  closed_lost: "Verloren",
}

// Stage badge color mapping
const stageBadgeColors: Record<PipelineStageName, string> = {
  lead: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  meeting_scheduled: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  proposal_sent: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  negotiation: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  closed_won: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  closed_lost: "bg-red-500/10 text-red-500 border-red-500/20",
}

const chartConfig = {
  pipeline: { label: "Pipeline Waarde", color: "#2ECC71" },
}

// Format a date string (ISO) to Dutch format, e.g. "14 feb 2026"
function formatDateDutch(dateStr: string): string {
  const date = new Date(dateStr)
  const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export default function PipelinePage() {
  const totalPipeline = pipelineStages.reduce((s, p) => s + p.value, 0)
  const totalDeals = pipelineStages.reduce((s, p) => s + p.count, 0)
  const wonStage = pipelineStages.find(p => p.name === "Gewonnen")
  const winRate = wonStage && totalDeals > 0 ? (wonStage.count / totalDeals) * 100 : 0

  // Count meetings this month from mockPipelineDeals
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  const meetingsThisMonth = mockPipelineDeals.filter((deal) => {
    if (deal.stage !== "meeting_scheduled") return false
    if (!deal.created_at) return false
    const d = new Date(deal.created_at)
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear
  }).length

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Pipeline Waarde</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatCurrency(totalPipeline)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Actieve Deals</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalDeals)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Win Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent(winRate)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Meetings deze mnd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(meetingsThisMonth)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Funnel */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Pipeline Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pipelineStages.map((stage) => {
              const percentage = totalPipeline > 0 ? (stage.value / totalPipeline) * 100 : 0
              return (
                <div key={stage.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{stage.name}</span>
                    <span className="text-muted-foreground tabular-nums">
                      {stage.count} deals &middot; {formatCurrency(stage.value)}
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${percentage}%`, backgroundColor: stage.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Over Time */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Pipeline Waarde Over Tijd</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`} />
              <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(value as number)} />} />
              <defs>
                <linearGradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2ECC71" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="pipeline" stroke="#2ECC71" fill="url(#pipelineGradient)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Deals Table */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Actieve Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Bedrijf</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Contact</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Waarde</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Fase</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Aangemaakt</th>
                </tr>
              </thead>
              <tbody>
                {mockPipelineDeals.map((deal) => (
                  <tr key={deal.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-2 font-medium">{deal.company}</td>
                    <td className="py-3 px-2 text-muted-foreground">{deal.contact_name}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{formatCurrency(deal.value)}</td>
                    <td className="py-3 px-2">
                      <Badge variant="outline" className={stageBadgeColors[deal.stage] || ""}>
                        {stageDisplayNames[deal.stage] || deal.stage}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right text-muted-foreground tabular-nums">
                      {deal.created_at ? formatDateDutch(deal.created_at) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
