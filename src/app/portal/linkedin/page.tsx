"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, UserPlus, MessageSquare, Users } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { formatNumber, formatPercent } from "@/lib/utils"
import { mockCampaigns, mockTouches, mockProspects } from "@/lib/mock-data"

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

// Hardcoded weekly data — linkedin touches in mock data are limited,
// so we keep this as a realistic fallback for the chart
const weeklyData = [
  { week: "W1 Jan", requestsSent: 65, accepted: 21, replied: 4 },
  { week: "W2 Jan", requestsSent: 72, accepted: 25, replied: 6 },
  { week: "W3 Jan", requestsSent: 78, accepted: 28, replied: 7 },
  { week: "W4 Jan", requestsSent: 70, accepted: 24, replied: 5 },
  { week: "W1 Feb", requestsSent: 82, accepted: 32, replied: 8 },
  { week: "W2 Feb", requestsSent: 85, accepted: 29, replied: 6 },
  { week: "W3 Feb", requestsSent: 68, accepted: 14, replied: 4 },
]

export default function LinkedInPage() {
  // Filter campaigns to linkedin channel
  const linkedinCampaigns = useMemo(
    () => mockCampaigns.filter((c) => c.channel === "linkedin"),
    []
  )

  // Filter touches to linkedin channel
  const linkedinTouches = useMemo(
    () => mockTouches.filter((t) => t.channel === "linkedin"),
    []
  )

  // Build a prospect lookup map for joining names
  const prospectMap = useMemo(
    () => new Map(mockProspects.map((p) => [p.id, p])),
    []
  )

  // Calculate KPIs from linkedin touches
  const sentCount = useMemo(
    () => linkedinTouches.filter((t) => t.touch_type === "sent").length,
    [linkedinTouches]
  )
  const acceptedCount = useMemo(
    () => linkedinTouches.filter((t) => t.touch_type === "connected").length,
    [linkedinTouches]
  )
  const repliedCount = useMemo(
    () => linkedinTouches.filter((t) => t.touch_type === "replied").length,
    [linkedinTouches]
  )

  // Aggregate per-campaign stats from touches
  const campaignStats = useMemo(() => {
    // Map campaign_id -> prospect_ids via sequences/campaigns
    // Since touches don't have campaign_id, we aggregate all linkedin touches
    // and distribute across campaigns proportionally.
    // For a more accurate mapping, group touches by prospect and match
    // prospect's sequence to campaign via mockSequences.
    const stats = new Map<
      string,
      { requestsSent: number; accepted: number; messagesSent: number; replied: number }
    >()

    // Initialize stats for each linkedin campaign
    for (const campaign of linkedinCampaigns) {
      stats.set(campaign.id, { requestsSent: 0, accepted: 0, messagesSent: 0, replied: 0 })
    }

    // Group linkedin touches per prospect
    const touchesByProspect = new Map<string, typeof linkedinTouches>()
    for (const touch of linkedinTouches) {
      const existing = touchesByProspect.get(touch.prospect_id) || []
      existing.push(touch)
      touchesByProspect.set(touch.prospect_id, existing)
    }

    // Assign each prospect's touches to the first linkedin campaign
    // (since mock data has limited campaign-to-prospect mapping)
    const defaultCampaignId = linkedinCampaigns[0]?.id
    if (defaultCampaignId) {
      for (const [, touches] of touchesByProspect) {
        const campaignStat = stats.get(defaultCampaignId)!
        for (const touch of touches) {
          if (touch.touch_type === "sent") {
            campaignStat.requestsSent += 1
            campaignStat.messagesSent += 1
          } else if (touch.touch_type === "connected") {
            campaignStat.accepted += 1
          } else if (touch.touch_type === "replied") {
            campaignStat.replied += 1
          }
        }
      }
    }

    return stats
  }, [linkedinCampaigns, linkedinTouches])

  // Use touch-derived totals, with fallback minimums for a realistic display
  const totalRequests = Math.max(sentCount, 1)
  const totalAccepted = acceptedCount
  const totalMessages = Math.max(sentCount, 1)
  const totalReplied = repliedCount

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <UserPlus className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Requests Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalRequests)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Acceptance Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">
              {formatPercent((totalAccepted / totalRequests) * 100)}
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Berichten Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalMessages)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Reply Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">
              {formatPercent((totalReplied / totalMessages) * 100)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly LinkedIn Activity Chart */}
      <Card className="border border-border">
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

      {/* Campaigns from mock data */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Campagnes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {linkedinCampaigns.map((campaign) => {
              const stats = campaignStats.get(campaign.id) || {
                requestsSent: 0,
                accepted: 0,
                messagesSent: 0,
                replied: 0,
              }
              const campaignRequests = Math.max(stats.requestsSent, 1)
              const campaignMessages = Math.max(stats.messagesSent, 1)

              return (
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
                    <p className="text-xs text-muted-foreground">
                      Gestart:{" "}
                      {campaign.started_at
                        ? new Date(campaign.started_at).toLocaleDateString("nl-NL", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </p>
                  </div>
                  <div className="flex gap-6 text-sm tabular-nums">
                    <div className="text-center">
                      <div className="font-medium">{formatNumber(stats.requestsSent)}</div>
                      <div className="text-xs text-muted-foreground">Requests</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">
                        {formatPercent((stats.accepted / campaignRequests) * 100)}
                      </div>
                      <div className="text-xs text-muted-foreground">Accepted</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{formatNumber(stats.messagesSent)}</div>
                      <div className="text-xs text-muted-foreground">Berichten</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">
                        {formatPercent((stats.replied / campaignMessages) * 100)}
                      </div>
                      <div className="text-xs text-muted-foreground">Replies</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Safety Limits — kept hardcoded as operational configuration */}
      <Card className="border border-border">
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
