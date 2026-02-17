"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Briefcase, CreditCard, Search, TrendingUp, Clock, CheckCircle, PhoneOff } from "lucide-react"
import { mockProspects, mockTouches, mockCalls } from "@/lib/mock-data"
import { formatNumber } from "@/lib/utils"
import type { Prospect, CallOutcome } from "@/lib/types"

const signalIcons: Record<string, typeof Briefcase> = {
  hiring: Briefcase,
  no_crm: Search,
  funding: CreditCard,
  growth: TrendingUp,
}

const signalColors: Record<string, string> = {
  hiring: "#3B82F6",
  no_crm: "#F59E0B",
  funding: "#10B981",
  growth: "#8B5CF6",
}

const outcomeLabels: Record<CallOutcome, string> = {
  interested: "Geinteresseerd",
  callback: "Terugbellen",
  not_interested: "Geen interesse",
  voicemail: "Voicemail",
  no_answer: "Geen gehoor",
  wrong_number: "Verkeerd nummer",
}

export default function AdminCallsPage() {
  const [logCallId, setLogCallId] = useState<string | null>(null)
  const [logOutcome, setLogOutcome] = useState<CallOutcome>("interested")
  const [logNotes, setLogNotes] = useState("")

  // Call queue: prospects with next_action containing 'call'
  const callQueue = mockProspects.filter(p =>
    p.next_action && (p.next_action === 'call' || p.next_action.includes('call')) && p.status !== 'lost'
  )

  // Today's stats
  const todayCalls = mockCalls.length
  const conversations = mockCalls.filter(c => c.outcome === 'interested' || c.outcome === 'callback').length
  const meetingsFromCalls = mockCalls.filter(c => c.outcome === 'interested').length
  const callToMeetingRate = todayCalls > 0 ? (meetingsFromCalls / todayCalls) * 100 : 0

  const getTouchSummary = (prospectId: string) => {
    const touches = mockTouches.filter(t => t.prospect_id === prospectId)
    const emailsSent = touches.filter(t => t.channel === 'email' && t.touch_type === 'sent').length
    const emailsOpened = touches.filter(t => t.channel === 'email' && t.touch_type === 'opened').length
    const linkedinConnected = touches.some(t => t.channel === 'linkedin' && t.touch_type === 'connected')
    const replied = touches.some(t => t.touch_type === 'replied')
    const parts: string[] = []
    if (emailsSent > 0) parts.push(`Email ${emailsSent}x verstuurd${emailsOpened > 0 ? `, ${emailsOpened}x geopend` : ''}`)
    if (linkedinConnected) parts.push('LinkedIn connected')
    if (replied) parts.push('Heeft gereageerd')
    return parts.join(' · ') || 'Geen eerdere touches'
  }

  const getCallBrief = (prospectId: string) => {
    // Check if there's a previous call with a brief we can reuse
    const previousCall = mockCalls.find(c => c.prospect_id === prospectId)
    if (previousCall?.call_brief) return previousCall.call_brief
    // Generate a simple brief from prospect data
    const prospect = mockProspects.find(p => p.id === prospectId)
    if (!prospect) return null
    return {
      signal_info: prospect.signal_detail || '',
      company_context: `${prospect.company}, ${prospect.job_title}`,
      suggested_opener: `Ik zag dat ${prospect.company} ${prospect.signal_type === 'hiring' ? 'het sales team uitbreidt' : prospect.signal_type === 'funding' ? 'recent funding heeft ontvangen' : prospect.signal_type === 'no_crm' ? 'nog geen CRM gebruikt' : 'sterk groeit'}`,
      objection_handling: {},
    }
  }

  const handleLogCall = (prospect: Prospect) => {
    setLogCallId(prospect.id)
    setLogOutcome("interested")
    setLogNotes("")
  }

  const handleSaveCall = () => {
    // In real app: POST to API
    setLogCallId(null)
  }

  return (
    <div className="space-y-6">
      {/* Daily metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Calls Gedaan</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(todayCalls)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Gesprekken</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(conversations)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Meetings Geboekt</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(meetingsFromCalls)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Call-to-Meeting</span>
            </div>
            <div className="text-2xl font-bold tabular-nums">{callToMeetingRate.toFixed(0)}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Call Queue */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Call Queue ({callQueue.length})</CardTitle>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
              Vandaag
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {callQueue.map((prospect) => {
              const SignalIcon = signalIcons[prospect.signal_type] || Briefcase
              const signalColor = signalColors[prospect.signal_type] || '#6B7280'
              const brief = getCallBrief(prospect.id)

              return (
                <div key={prospect.id} className="p-4 rounded-lg border border-border hover:border-[#2ECC71]/30 transition-colors">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{prospect.name}</span>
                        <span className="text-sm text-muted-foreground">&middot; {prospect.job_title}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium">{prospect.company}</span>
                        <Badge variant="outline" className="text-xs" style={{ borderColor: signalColor + '40', color: signalColor }}>
                          <SignalIcon className="h-3 w-3 mr-1" />
                          {prospect.signal_type}
                        </Badge>
                        <Badge variant="outline" className="text-xs tabular-nums">
                          Score: {prospect.signal_score}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {prospect.phone && (
                        <a
                          href={`tel:${prospect.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-white transition-colors"
                          style={{ backgroundColor: '#2ECC71' }}
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {prospect.phone}
                        </a>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleLogCall(prospect)}
                      >
                        Log Call
                      </Button>
                    </div>
                  </div>

                  {/* Signal detail */}
                  <p className="text-sm text-muted-foreground mb-2">{prospect.signal_detail}</p>

                  {/* Touch summary */}
                  <p className="text-xs text-muted-foreground mb-2">{getTouchSummary(prospect.id)}</p>

                  {/* Suggested opener */}
                  {brief && (
                    <div className="mt-2 p-2 rounded border border-border bg-muted/50">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Suggested opener:</p>
                      <p className="text-sm italic">&ldquo;{brief.suggested_opener}&rdquo;</p>
                    </div>
                  )}

                  {/* Log Call Modal */}
                  {logCallId === prospect.id && (
                    <div className="mt-3 p-4 rounded-lg border border-[#2ECC71]/30 bg-muted/50 space-y-3">
                      <div>
                        <label className="text-sm font-medium">Outcome</label>
                        <select
                          value={logOutcome}
                          onChange={(e) => setLogOutcome(e.target.value as CallOutcome)}
                          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                        >
                          {Object.entries(outcomeLabels).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Notities</label>
                        <textarea
                          value={logNotes}
                          onChange={(e) => setLogNotes(e.target.value)}
                          placeholder="Notities van het gesprek..."
                          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm min-h-[80px]"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleSaveCall} className="bg-[#2ECC71] hover:bg-[#27AE60] text-white">
                          Opslaan
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setLogCallId(null)}>
                          Annuleren
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {callQueue.length === 0 && (
              <div className="text-center py-8">
                <PhoneOff className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Geen calls in de queue voor vandaag</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
