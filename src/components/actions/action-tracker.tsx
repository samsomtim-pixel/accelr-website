"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Loader2, AlertCircle } from "lucide-react"
import { actionItems } from "@/lib/mock-data"
import { format } from "date-fns"
import { nl } from "date-fns/locale"
import { cn } from "@/lib/utils"

const phases = ["Foundation", "Campaign Build", "Optimization"]

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "#2ECC71",
    label: "Voltooid",
  },
  in_progress: {
    icon: Loader2,
    color: "#2ECC71",
    label: "Bezig",
  },
  pending: {
    icon: Circle,
    color: "#6B7280",
    label: "Open",
  },
  blocked: {
    icon: AlertCircle,
    color: "#EF4444",
    label: "Geblokkeerd",
  },
}

export function ActionTracker() {
  const totalItems = actionItems.length
  const completedItems = actionItems.filter((item) => item.status === "completed").length
  const progressPercentage = (completedItems / totalItems) * 100

  const itemsByPhase = phases.map((phase) => ({
    phase,
    items: actionItems.filter((item) => item.phase === phase),
  }))

  return (
    <div className="space-y-6">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Voortgang</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {completedItems} van {totalItems} taken compleet
              </span>
              <span className="font-semibold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {itemsByPhase.map(({ phase, items }) => (
        <Card key={phase} className="border border-border">
          <CardHeader>
            <CardTitle className="text-lg">{phase}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items.map((item) => {
                const status = statusConfig[item.status as keyof typeof statusConfig]
                const StatusIcon = status.icon
                const isClientAssigned = item.assignee === "Klant"

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg border border-border",
                      isClientAssigned && "border-l-4 border-l-[#2ECC71]"
                    )}
                  >
                    <div className="mt-0.5">
                      <StatusIcon
                        className={cn(
                          "h-5 w-5",
                          item.status === "in_progress" && "animate-spin"
                        )}
                        style={{ color: status.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {item.assignee}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Deadline: {format(new Date(item.dueDate), "d MMM yyyy", { locale: nl })}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
