"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, Eye, MessageSquare, AlertTriangle, Reply, Clock } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { formatNumber, formatPercent } from "@/lib/utils"
import { mockCampaigns, mockSequences, mockTouches, mockProspects, timeSeriesData } from "@/lib/mock-data"
import { useMemo } from "react"

const statusColors: Record<string, string> = {
  active: "bg-[#2ECC71]/10 text-[#2ECC71] border-[#2ECC71]/20",
  paused: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  completed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
}

const statusLabels: Record<string, string> = {
  active: "Actief",
  paused: "Gepauzeerd",
  completed: "Afgerond",
}

const channelLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  email: "Email",
  call: "Bellen",
  meeting: "Meeting",
}

const actionLabels: Record<string, string> = {
  profile_visit: "Profielbezoek",
  connect: "Connectieverzoek",
  send: "Verstuur",
  call: "Bellen",
}

const chartConfig = {
  emailsSent: { label: "Verstuurd", color: "#6B7280" },
  opens: { label: "Geopend", color: "#3B82F6" },
  replies: { label: "Beantwoord", color: "#2ECC71" },
}

export default function EmailPage() {
  // Filter email touches from mock data
  const emailTouches = useMemo(() => mockTouches.filter((t) => t.channel === "email"), [])

  // Compute KPIs from email touches
  const totalSent = useMemo(() => emailTouches.filter((t) => t.touch_type === "sent").length, [emailTouches])
  const totalOpened = useMemo(() => emailTouches.filter((t) => t.touch_type === "opened").length, [emailTouches])
  const totalReplied = useMemo(() => emailTouches.filter((t) => t.touch_type === "replied").length, [emailTouches])
  const bounceRate = 1.8 // Hardcoded from benchmark data

  // Filter campaigns to email channel only
  const emailCampaigns = useMemo(() => mockCampaigns.filter((c) => c.channel === "email"), [])

  // Compute per-campaign touch stats
  const campaignStats = useMemo(() => {
    return emailCampaigns.map((campaign) => {
      // Find sequences linked to this campaign
      const campaignSequences = mockSequences.filter((s) => s.campaign_id === campaign.id)
      const sequenceNames = campaignSequences.map((s) => s.name)

      // Find prospects in these sequences
      const campaignProspects = mockProspects.filter(
        (p) => p.sequence_name && sequenceNames.includes(p.sequence_name)
      )
      const prospectIds = new Set(campaignProspects.map((p) => p.id))

      // Count email touches for these prospects
      const campaignEmailTouches = emailTouches.filter((t) => prospectIds.has(t.prospect_id))
      const sent = campaignEmailTouches.filter((t) => t.touch_type === "sent").length
      const opened = campaignEmailTouches.filter((t) => t.touch_type === "opened").length
      const replied = campaignEmailTouches.filter((t) => t.touch_type === "replied").length

      return { ...campaign, sent, opened, replied }
    })
  }, [emailCampaigns, emailTouches])

  // Get recent replies with prospect info
  const recentReplies = useMemo(() => {
    return mockTouches
      .filter((t) => t.channel === "email" && t.touch_type === "replied")
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .map((touch) => {
        const prospect = mockProspects.find((p) => p.id === touch.prospect_id)
        return { ...touch, prospect }
      })
  }, [])

  // Format date for display
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" })
  }

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Send className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Verstuurd</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalSent)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Open Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">
              {totalSent > 0 ? formatPercent((totalOpened / totalSent) * 100) : "0,0%"}
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Reply Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">
              {totalSent > 0 ? formatPercent((totalReplied / totalSent) * 100) : "0,0%"}
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatPercent(bounceRate)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Volume Chart */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Wekelijks Verzendvolume</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="emailsSent" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} />
              <Area type="monotone" dataKey="opens" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="replies" stroke="#2ECC71" fill="#2ECC71" fillOpacity={0.1} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Campaigns List */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Email Campagnes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignStats.map((campaign) => (
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
                  <p className="text-xs text-muted-foreground">
                    Gestart: {formatDate(campaign.started_at)}
                  </p>
                </div>
                <div className="flex gap-6 text-sm tabular-nums">
                  <div className="text-center">
                    <div className="font-medium">{formatNumber(campaign.sent)}</div>
                    <div className="text-xs text-muted-foreground">Verstuurd</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">
                      {campaign.sent > 0 ? formatPercent((campaign.opened / campaign.sent) * 100) : "0,0%"}
                    </div>
                    <div className="text-xs text-muted-foreground">Opens</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">
                      {campaign.sent > 0 ? formatPercent((campaign.replied / campaign.sent) * 100) : "0,0%"}
                    </div>
                    <div className="text-xs text-muted-foreground">Replies</div>
                  </div>
                </div>
              </div>
            ))}
            {emailCampaigns.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Geen email campagnes gevonden.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Sequence Step Performance */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Sequence Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockSequences.map((sequence) => (
              <div key={sequence.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{sequence.name}</span>
                    <Badge variant="outline" className={sequence.active ? statusColors.active : statusColors.paused}>
                      {sequence.active ? "Actief" : "Gepauzeerd"}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {formatNumber(sequence.total_prospects)} prospects
                  </span>
                </div>
                <div className="space-y-2">
                  {sequence.steps.map((step, idx) => (
                    <div
                      key={`${sequence.id}-step-${idx}`}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium tabular-nums">
                        D{step.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {channelLabels[step.channel] || step.channel}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {actionLabels[step.action] || step.action}
                          </span>
                        </div>
                        {step.subject && (
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">
                            &quot;{step.subject}&quot;
                          </p>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground tabular-nums">
                        Stap {idx + 1}/{sequence.steps.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Replies */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base">Recente Replies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReplies.length > 0 ? (
              recentReplies.map((reply) => (
                <div
                  key={reply.id}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2ECC71]/10 shrink-0">
                    <Reply className="h-4 w-4 text-[#2ECC71]" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {reply.prospect?.name || "Onbekend"}
                      </span>
                      {reply.prospect?.company && (
                        <span className="text-xs text-muted-foreground">
                          {reply.prospect.company}
                        </span>
                      )}
                    </div>
                    {reply.notes && (
                      <p className="text-sm text-muted-foreground">{reply.notes}</p>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(reply.created_at)}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                Nog geen replies ontvangen.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
