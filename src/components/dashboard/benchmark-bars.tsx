"use client"

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { benchmarkData } from "@/lib/mock-data"
import { formatPercent, formatCurrency, cn } from "@/lib/utils"

export function BenchmarkBars() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>Benchmark vs NL gemiddelde</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {benchmarkData.map((item, index) => {
          const isInverse = item.metric === "Bounce Rate"
          const isBetter = isInverse
            ? item.client < item.nlAverage
            : item.client > item.nlAverage
          const delta = item.client - item.nlAverage
          const deltaPercent = ((delta / item.nlAverage) * 100).toFixed(1)

          const maxValue = Math.max(item.client, item.nlAverage) * 1.2

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.metric}</span>
                <Badge
                  variant={isBetter ? "default" : "secondary"}
                  className={cn(
                    isBetter && "bg-[#10B981] hover:bg-[#10B981]",
                    !isBetter && "bg-muted"
                  )}
                >
                  {isBetter ? "+" : ""}
                  {deltaPercent}%
                </Badge>
              </div>
              <div className="space-y-1.5">
                <div className="relative h-6 rounded-md overflow-hidden bg-muted">
                  <div
                    className="h-full bg-[#2ECC71] flex items-center justify-end pr-2"
                    style={{ width: `${(item.client / maxValue) * 100}%` }}
                  >
                    <span className="text-xs font-medium text-white">
                      {item.unit === "%"
                        ? formatPercent(item.client)
                        : formatCurrency(item.client)}
                    </span>
                  </div>
                </div>
                <div className="relative h-6 rounded-md overflow-hidden bg-muted">
                  <div
                    className="h-full bg-[#E5E7EB] dark:bg-[#262626] flex items-center justify-end pr-2"
                    style={{ width: `${(item.nlAverage / maxValue) * 100}%` }}
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.unit === "%"
                        ? formatPercent(item.nlAverage)
                        : formatCurrency(item.nlAverage)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
