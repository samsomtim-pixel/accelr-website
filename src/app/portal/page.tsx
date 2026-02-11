import { KPIGrid } from "@/components/dashboard/kpi-grid"
import { TimeSeriesChart } from "@/components/dashboard/time-series-chart"
import { BenchmarkBars } from "@/components/dashboard/benchmark-bars"
import { PipelineFunnel } from "@/components/dashboard/pipeline-funnel"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function PortalDashboard() {
  return (
    <div className="space-y-6">
      <KPIGrid />
      
      <TimeSeriesChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BenchmarkBars />
        <PipelineFunnel />
      </div>
      
      <RecentActivity />
    </div>
  )
}
