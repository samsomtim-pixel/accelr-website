"use client"

import { Mail, Eye, MessageSquare, Calendar, TrendingUp } from "lucide-react"
import { KPICard } from "./kpi-card"
import { kpiData } from "@/lib/mock-data"

export function KPIGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <KPICard
        label="Emails Verzonden"
        value={kpiData.emailsSent.value}
        delta={kpiData.emailsSent.delta}
        previous={kpiData.emailsSent.previous}
        icon={Mail}
        iconColor="#6B7280"
      />
      <KPICard
        label="Open Rate"
        value={kpiData.openRate.value}
        delta={kpiData.openRate.delta}
        benchmark={kpiData.openRate.benchmark}
        unit="%"
        icon={Eye}
        iconColor="#3B82F6"
      />
      <KPICard
        label="Reply Rate"
        value={kpiData.replyRate.value}
        delta={kpiData.replyRate.delta}
        benchmark={kpiData.replyRate.benchmark}
        unit="%"
        icon={MessageSquare}
        iconColor="#2ECC71"
      />
      <KPICard
        label="Meetings Geboekt"
        value={kpiData.meetingsBooked.value}
        delta={kpiData.meetingsBooked.delta}
        previous={kpiData.meetingsBooked.previous}
        icon={Calendar}
        iconColor="#2ECC71"
      />
      <KPICard
        label="Pipeline Waarde"
        value={kpiData.pipelineValue.value}
        delta={kpiData.pipelineValue.delta}
        previous={kpiData.pipelineValue.previous}
        unit="€"
        icon={TrendingUp}
        iconColor="#2ECC71"
      />
    </div>
  )
}
