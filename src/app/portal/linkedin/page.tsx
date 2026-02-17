"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, UserPlus, MessageSquare, Users } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { formatNumber, formatPercent } from "@/lib/utils"

const campaigns = [
  {
    id: "1",
    name: "SaaS Founders - Connectie",
    status: "active",
    requestsSent: 340,
    accepted: 119,
    messagesSent: 95,
    replied: 23,
    startedAt: "15 jan 2026",
  },
  {
    id: "2",
    name: "Tech CTOs - InMail",
    status: "active",
    requestsSent: 180,
    accepted: 54,
    messagesSent: 54,
    replied: 11,
    startedAt: "1 feb 2026",
  },
]

const weeklyData = [
  { week: "W1 Jan", requestsSent: 65, accepted: 21, replied: 4 },
  { week: "W2 Jan", requestsSent: 72, accepted: 25, replied: 6 },
  { week: "W3 Jan", requestsSent: 78, accepted: 28, replied: 7 },
  { week: "W4 Jan", requestsSent: 70, accepted: 24, replied: 5 },
  { week: "W1 Feb", requestsSent: 82, accepted: 32, replied: 8 },
  { week: "W2 Feb", requestsSent: 85, accepted: 29, replied: 6 },
  { week: "W3 Feb", requestsSent: 68, accepted: 14, replied: 4 },
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
  requestsSent: { label: "Requests", color: "#6B7280" },
  accepted: { label: "Geaccepteerd", color: "#3B82F6" },
  replied: { label: "Beantwoord", color: "#2ECC71" },
}

export default function LinkedInPage() {
  const totalRequests = campaigns.reduce((s, c) => s + c.requestsSent, 0)
  const totalAccepted = campaigns.reduce((s, c) => s + c.accepted, 0)
  const totalMessages = campaigns.reduce((s, c) => s + c.messagesSent, 0)
  const totalReplied = campaigns.reduce((s, c) => s + c.replied, 0)

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <UserPlus className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Requests Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalRequests)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Acceptance Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent((totalAccepted / totalRequests) * 100)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Berichten Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalMessages)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Reply Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent((totalReplied / totalMessages) * 100)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Acceptance Rate Over Time */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Wekelijkse LinkedIn Activiteit</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="requestsSent" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} />
              <Area type="monotone" dataKey="accepted" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="replied" stroke="#2ECC71" fill="#2ECC71" fillOpacity={0.1} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Campaigns */}
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
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{campaign.name}</span>
                    <Badge variant="outline" className={statusColors[campaign.status]}>
                      {statusLabels[campaign.status]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Gestart: {campaign.startedAt}</p>
                </div>
                <div className="flex gap-6 text-sm tabular-nums">
                  <div className="text-center">
                    <div className="font-medium">{formatNumber(campaign.requestsSent)}</div>
                    <div className="text-xs text-muted-foreground">Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatPercent((campaign.accepted / campaign.requestsSent) * 100)}</div>
                    <div className="text-xs text-muted-foreground">Accepted</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatNumber(campaign.messagesSent)}</div>
                    <div className="text-xs text-muted-foreground">Berichten</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatPercent((campaign.replied / campaign.messagesSent) * 100)}</div>
                    <div className="text-xs text-muted-foreground">Replies</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Limits */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Dagelijkse Limieten (Veiligheid)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Connection Requests", used: 18, limit: 25 },
              { label: "Berichten", used: 32, limit: 50 },
              { label: "Profiel Views", used: 28, limit: 60 },
              { label: "InMails", used: 4, limit: 15 },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="text-lg font-bold tabular-nums">
                  {item.used}<span className="text-muted-foreground font-normal">/{item.limit}</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(item.used / item.limit) * 100}%`,
                      backgroundColor: (item.used / item.limit) > 0.8 ? '#F59E0B' : '#2ECC71',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
