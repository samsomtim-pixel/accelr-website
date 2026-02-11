import React from "react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { allClients } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { KPIGrid } from "@/components/dashboard/kpi-grid"
import { TimeSeriesChart } from "@/components/dashboard/time-series-chart"
import { BenchmarkBars } from "@/components/dashboard/benchmark-bars"
import { PipelineFunnel } from "@/components/dashboard/pipeline-funnel"

export default function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = React.use(params)
  const client = allClients.find((c) => c.id === id)

  if (!client) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{client.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{client.industry}</Badge>
            <Badge variant="secondary">{client.plan}</Badge>
            <Badge
              variant={client.status === "active" ? "default" : "secondary"}
              className={cn(
                client.status === "active" && "bg-[#2ECC71] hover:bg-[#2ECC71]",
                client.status === "onboarding" && "bg-[#F59E0B] hover:bg-[#F59E0B]"
              )}
            >
              {client.status === "active" ? "Actief" : "Onboarding"}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Sales Readiness Score</p>
          <p className="text-3xl font-bold">{client.score}</p>
        </div>
      </div>

      <KPIGrid />
      
      <TimeSeriesChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BenchmarkBars />
        <PipelineFunnel />
      </div>
    </div>
  )
}
