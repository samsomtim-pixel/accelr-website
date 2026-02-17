"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Calendar, Target } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils"
import { pipelineStages } from "@/lib/mock-data"

const deals = [
  { id: "1", name: "Bright Media BV", contact: "Jan de Vries", value: 18000, stage: "Onderhandeling", updatedAt: "14 feb 2026" },
  { id: "2", name: "Digital Squad", contact: "Lisa Bakker", value: 12500, stage: "Voorstel", updatedAt: "13 feb 2026" },
  { id: "3", name: "WebForce NL", contact: "Mark Jansen", value: 15000, stage: "Kwalificatie", updatedAt: "12 feb 2026" },
  { id: "4", name: "CloudServe NL", contact: "Anna Smit", value: 22000, stage: "Voorstel", updatedAt: "11 feb 2026" },
  { id: "5", name: "DataFlow BV", contact: "Peter van Dijk", value: 9500, stage: "Meeting Gepland", updatedAt: "10 feb 2026" },
  { id: "6", name: "MediaHuis Pro", contact: "Sophie Groot", value: 14000, stage: "Kwalificatie", updatedAt: "9 feb 2026" },
  { id: "7", name: "TechBridge", contact: "Tom Visser", value: 43500, stage: "Contract", updatedAt: "7 feb 2026" },
]

const pipelineOverTime = [
  { week: "W1 Dec", value: 45000 },
  { week: "W2 Dec", value: 82000 },
  { week: "W3 Dec", value: 115000 },
  { week: "W4 Dec", value: 158000 },
  { week: "W1 Jan", value: 212000 },
  { week: "W2 Jan", value: 265000 },
  { week: "W3 Jan", value: 325000 },
  { week: "W4 Jan", value: 387500 },
]

const stageColors: Record<string, string> = {
  "Meeting Gepland": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Kwalificatie": "bg-gray-500/10 text-gray-500 border-gray-500/20",
  "Voorstel": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Onderhandeling": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  "Contract": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
}

const chartConfig = {
  value: { label: "Pipeline Waarde", color: "#2ECC71" },
}

export default function PipelinePage() {
  const totalPipeline = pipelineStages.reduce((s, p) => s + p.value, 0)
  const totalDeals = pipelineStages.reduce((s, p) => s + p.count, 0)
  const wonDeals = pipelineStages.find(p => p.name === "Contract")
  const winRate = wonDeals ? (wonDeals.count / totalDeals) * 100 : 0

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Pipeline Waarde</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatCurrency(totalPipeline)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Actieve Deals</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalDeals)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Win Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent(winRate)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Meetings deze mnd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">7</div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Funnel */}
      <Card>
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
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pipeline Waarde Over Tijd</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={pipelineOverTime}>
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
              <Area type="monotone" dataKey="value" stroke="#2ECC71" fill="url(#pipelineGradient)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Deals Table */}
      <Card>
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
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Bijgewerkt</th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-2 font-medium">{deal.name}</td>
                    <td className="py-3 px-2 text-muted-foreground">{deal.contact}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{formatCurrency(deal.value)}</td>
                    <td className="py-3 px-2">
                      <Badge variant="outline" className={stageColors[deal.stage] || ""}>
                        {deal.stage}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right text-muted-foreground">{deal.updatedAt}</td>
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
