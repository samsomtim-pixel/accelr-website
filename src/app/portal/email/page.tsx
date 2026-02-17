"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, Eye, MessageSquare, AlertTriangle } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { formatNumber, formatPercent } from "@/lib/utils"

const campaigns = [
  {
    id: "1",
    name: "SaaS Decision Makers Q1",
    status: "active",
    sent: 2140,
    opened: 963,
    replied: 128,
    bounced: 32,
    startedAt: "12 jan 2026",
  },
  {
    id: "2",
    name: "Tech Founders NL",
    status: "active",
    sent: 1680,
    opened: 739,
    replied: 97,
    bounced: 18,
    startedAt: "20 jan 2026",
  },
  {
    id: "3",
    name: "Marketing Directors",
    status: "paused",
    sent: 1027,
    opened: 380,
    replied: 41,
    bounced: 52,
    startedAt: "15 dec 2025",
  },
]

const dailyVolume = [
  { day: "Ma", sent: 142, opened: 63, replied: 8 },
  { day: "Di", sent: 156, opened: 71, replied: 11 },
  { day: "Wo", sent: 138, opened: 59, replied: 7 },
  { day: "Do", sent: 161, opened: 74, replied: 12 },
  { day: "Vr", sent: 130, opened: 55, replied: 9 },
  { day: "Za", sent: 0, opened: 12, replied: 2 },
  { day: "Zo", sent: 0, opened: 8, replied: 1 },
]

const sequenceSteps = [
  { step: "Email 1", sent: 4847, opened: 2183, replied: 218, rate: "4.5%" },
  { step: "Email 2", sent: 3420, opened: 1368, replied: 171, rate: "5.0%" },
  { step: "Email 3", sent: 2100, opened: 756, replied: 84, rate: "4.0%" },
  { step: "Email 4", sent: 980, opened: 314, replied: 29, rate: "3.0%" },
]

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  paused: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  completed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
}

const statusLabels: Record<string, string> = {
  active: "Actief",
  paused: "Gepauzeerd",
  completed: "Afgerond",
}

const chartConfig = {
  sent: { label: "Verstuurd", color: "#6B7280" },
  opened: { label: "Geopend", color: "#3B82F6" },
  replied: { label: "Beantwoord", color: "#2ECC71" },
}

export default function EmailPage() {
  // Totals
  const totalSent = campaigns.reduce((s, c) => s + c.sent, 0)
  const totalOpened = campaigns.reduce((s, c) => s + c.opened, 0)
  const totalReplied = campaigns.reduce((s, c) => s + c.replied, 0)
  const totalBounced = campaigns.reduce((s, c) => s + c.bounced, 0)

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Send className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalSent)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Open Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent((totalOpened / totalSent) * 100)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Reply Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent((totalReplied / totalSent) * 100)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent((totalBounced / totalSent) * 100)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Volume Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Dagelijks Verzendvolume</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={dailyVolume}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="day" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="sent" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} />
              <Area type="monotone" dataKey="opened" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="replied" stroke="#2ECC71" fill="#2ECC71" fillOpacity={0.1} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Campagnes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-[#2ECC71]/30 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{campaign.name}</span>
                    <Badge variant="outline" className={statusColors[campaign.status]}>
                      {statusLabels[campaign.status]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Gestart: {campaign.startedAt}</p>
                </div>
                <div className="flex gap-6 text-sm tabular-nums">
                  <div className="text-center">
                    <div className="font-medium">{formatNumber(campaign.sent)}</div>
                    <div className="text-xs text-muted-foreground">Verstuurd</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatPercent((campaign.opened / campaign.sent) * 100)}</div>
                    <div className="text-xs text-muted-foreground">Opens</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatPercent((campaign.replied / campaign.sent) * 100)}</div>
                    <div className="text-xs text-muted-foreground">Replies</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatPercent((campaign.bounced / campaign.sent) * 100)}</div>
                    <div className="text-xs text-muted-foreground">Bounces</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sequence Step Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sequence Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sequenceSteps.map((step) => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium">{step.step}</div>
                <div className="flex-1">
                  <div className="flex gap-1 h-6">
                    <div
                      className="bg-gray-400 rounded-l"
                      style={{ width: `${(step.sent / sequenceSteps[0].sent) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-4 text-sm tabular-nums text-muted-foreground w-64 justify-end">
                  <span>{formatNumber(step.sent)} sent</span>
                  <span>{formatNumber(step.opened)} opens</span>
                  <span className="text-foreground font-medium">{step.rate} reply</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
