"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Briefcase, CreditCard, Globe, TrendingUp, Search } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { mockProspects } from "@/lib/mock-data"
import type { SignalType } from "@/lib/types"

const signalConfig: Record<SignalType, { label: string; icon: typeof Zap; color: string; description: string; example: string }> = {
  hiring: { label: "Hiring", icon: Briefcase, color: "#3B82F6", description: "Bedrijf plaatst sales-gerelateerde vacatures — signaal dat ze hun commercieel team uitbreiden", example: "\"Sales Executive vacature geplaatst 3 dagen geleden\"" },
  no_crm: { label: "No CRM", icon: Search, color: "#F59E0B", description: "Geen CRM of sales tooling gedetecteerd — kans om professionele sales infra aan te bieden", example: "\"Gebruikt spreadsheets voor pipeline management\"" },
  funding: { label: "Funding", icon: CreditCard, color: "#10B981", description: "Recent funding round afgerond — kapitaal beschikbaar voor groei-investeringen", example: "\"Series A afgerond: €4.2M via Peak Capital\"" },
  growth: { label: "Groei", icon: TrendingUp, color: "#8B5CF6", description: "Sterke omzet- of teamgroei — bedrijf schaalt en heeft sales capacity nodig", example: "\"40% YoY omzetgroei — 18 naar 32 FTE\"" },
  website_change: { label: "Website", icon: Globe, color: "#EC4899", description: "Significante website wijzigingen — nieuw product, rebranding of expansie", example: "\"Nieuwe product pagina gelanceerd\"" },
  intent: { label: "Intent", icon: Zap, color: "#EF4444", description: "Actief zoekend naar sales-gerelateerde oplossingen of content", example: "\"Downloadt whitepapers over outbound sales\"" },
}

const chartConfig = {
  count: { label: "Prospects", color: "#2ECC71" },
}

export default function SignalsPage() {
  const activeProspects = mockProspects.filter(p => p.status !== 'lost')

  // Count per signal type
  const signalCounts = activeProspects.reduce((acc, p) => {
    acc[p.signal_type] = (acc[p.signal_type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const signalChartData = Object.entries(signalConfig)
    .map(([key, config]) => ({
      signal: config.label,
      count: signalCounts[key] || 0,
      fill: config.color,
    }))
    .filter(d => d.count > 0)
    .sort((a, b) => b.count - a.count)

  // Score distribution
  const scoreDistribution = [
    { range: "1-3", count: activeProspects.filter(p => p.signal_score <= 3).length },
    { range: "4-5", count: activeProspects.filter(p => p.signal_score >= 4 && p.signal_score <= 5).length },
    { range: "6-7", count: activeProspects.filter(p => p.signal_score >= 6 && p.signal_score <= 7).length },
    { range: "8-9", count: activeProspects.filter(p => p.signal_score >= 8 && p.signal_score <= 9).length },
    { range: "10", count: activeProspects.filter(p => p.signal_score === 10).length },
  ]

  // Recent signals (new + contacted prospects, sorted by date)
  const recentSignals = [...activeProspects]
    .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime())
    .slice(0, 8)

  return (
    <div className="space-y-6">
      {/* Explainer */}
      <Card className="border-[#2ECC71]/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="rounded-full p-2" style={{ backgroundColor: '#2ECC71' + '20' }}>
              <Zap className="h-5 w-5" style={{ color: '#2ECC71' }} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Signal-Based Outbound</h3>
              <p className="text-sm text-muted-foreground">
                Accelr gebruikt koopsignalen om de juiste prospects op het juiste moment te bereiken.
                In plaats van spray &amp; pray targeten we bedrijven die actief groeien, hiring, funding ontvangen of geen sales tooling hebben.
                Dit resulteert in hogere open rates, meer replies en betere meetings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signal breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(signalConfig)
          .filter(([key]) => signalCounts[key])
          .map(([key, config]) => {
            const Icon = config.icon
            const count = signalCounts[key] || 0
            return (
              <Card key={key}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4" style={{ color: config.color }} />
                    <span className="text-sm text-muted-foreground">{config.label}</span>
                  </div>
                  <div className="text-2xl font-bold tabular-nums">{count}</div>
                  <p className="text-xs text-muted-foreground mt-1">prospects</p>
                </CardContent>
              </Card>
            )
          })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Signal type chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Prospects per Signaal Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[220px] w-full">
              <BarChart data={signalChartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                <XAxis type="number" className="text-xs" />
                <YAxis type="category" dataKey="signal" className="text-xs" width={70} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Score distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Signal Score Distributie</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[220px] w-full">
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="range" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="#2ECC71" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Signal type descriptions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Signaal Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(signalConfig).map(([key, config]) => {
              const Icon = config.icon
              return (
                <div key={key} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4" style={{ color: config.color }} />
                    <span className="font-medium text-sm">{config.label}</span>
                    <Badge variant="outline" className="text-xs tabular-nums">
                      {signalCounts[key] || 0}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{config.description}</p>
                  <p className="text-xs text-muted-foreground italic">{config.example}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent signals feed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recente Signalen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentSignals.map((prospect) => {
              const config = signalConfig[prospect.signal_type]
              const Icon = config.icon
              return (
                <div key={prospect.id} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-[#2ECC71]/30 transition-colors">
                  <div className="rounded-full p-1.5 mt-0.5" style={{ backgroundColor: config.color + '20' }}>
                    <Icon className="h-3.5 w-3.5" style={{ color: config.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{prospect.company}</span>
                      <Badge variant="outline" className="text-xs" style={{ borderColor: config.color + '40', color: config.color }}>
                        {config.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs tabular-nums">
                        Score: {prospect.signal_score}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{prospect.signal_detail}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {prospect.name} &middot; {prospect.job_title}
                    </p>
                  </div>
                  <Badge variant="outline" className={
                    prospect.status === 'new' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                    prospect.status === 'contacted' ? 'bg-gray-500/10 text-gray-500 border-gray-500/20' :
                    prospect.status === 'engaged' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                    prospect.status === 'meeting_booked' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                    prospect.status === 'qualified' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                    'bg-red-500/10 text-red-500 border-red-500/20'
                  }>
                    {prospect.status === 'new' ? 'Nieuw' :
                     prospect.status === 'contacted' ? 'Benaderd' :
                     prospect.status === 'engaged' ? 'Engaged' :
                     prospect.status === 'meeting_booked' ? 'Meeting' :
                     prospect.status === 'qualified' ? 'Qualified' : 'Lost'}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
