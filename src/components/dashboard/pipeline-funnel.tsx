"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pipelineStages } from "@/lib/mock-data"
import { formatCurrency, formatNumber } from "@/lib/utils"

export function PipelineFunnel() {
  const totalValue = pipelineStages.reduce((sum, stage) => sum + stage.value, 0)
  const totalCount = pipelineStages.reduce((sum, stage) => sum + stage.count, 0)

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>Pipeline</CardTitle>
        <div className="text-2xl font-bold mt-2">
          {formatCurrency(totalValue)}
        </div>
        <p className="text-sm text-muted-foreground">
          {totalCount} deals actief
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {pipelineStages.map((stage, index) => {
          const percentage = (stage.value / totalValue) * 100
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{stage.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">
                    {formatNumber(stage.count)} deals
                  </span>
                  <span className="font-semibold">
                    {formatCurrency(stage.value)}
                  </span>
                </div>
              </div>
              <div className="relative h-8 rounded-md overflow-hidden bg-muted">
                <div
                  className="h-full flex items-center justify-end pr-2"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: stage.color,
                  }}
                >
                  <span className="text-xs font-medium text-white">
                    {percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
