import { KPIGrid } from "@/components/dashboard/kpi-grid"
import { TimeSeriesChart } from "@/components/dashboard/time-series-chart"
import { BenchmarkBars } from "@/components/dashboard/benchmark-bars"
import { PipelineFunnel } from "@/components/dashboard/pipeline-funnel"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { actionItems } from "@/lib/mock-data"
import { CalendarClock, User } from "lucide-react"

const pendingActions = actionItems.filter((item) => item.status === "pending")

function formatDueDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function PortalDashboard() {
  return (
    <div className="space-y-6">
      <KPIGrid />

      <TimeSeriesChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BenchmarkBars />
        <PipelineFunnel />
      </div>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Openstaande Acties</CardTitle>
        </CardHeader>
        <CardContent>
          {pendingActions.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Geen openstaande acties.
            </p>
          ) : (
            <div className="space-y-4">
              {pendingActions.map((action) => (
                <div
                  key={action.id}
                  className={cn(
                    "flex items-start justify-between gap-4 rounded-lg border border-border p-4"
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {action.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarClock className="h-3.5 w-3.5" />
                        {formatDueDate(action.dueDate)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {action.assignee}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0">
                    {action.phase}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <RecentActivity />
    </div>
  )
}
