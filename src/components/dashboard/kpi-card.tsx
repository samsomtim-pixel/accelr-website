"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn, formatCurrency, formatPercent, formatNumber } from "@/lib/utils"

interface KPICardProps {
  label: string
  value: number
  delta?: number
  previous?: number
  benchmark?: number
  unit?: string
  icon: LucideIcon
  iconColor?: string
}

export function KPICard({
  label,
  value,
  delta,
  previous,
  benchmark,
  unit,
  icon: Icon,
  iconColor = "#2ECC71",
}: KPICardProps) {
  const isPositive = delta !== undefined && delta > 0
  const isNegative = delta !== undefined && delta < 0

  const formatValue = () => {
    if (unit === "€") {
      return formatCurrency(value)
    }
    if (unit === "%") {
      return formatPercent(value)
    }
    return formatNumber(value)
  }

  return (
    <Card className="border border-border hover:border-[#2ECC71] transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="h-4 w-4" style={{ color: iconColor }} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
            <div className="text-3xl font-bold tabular-nums mb-2">
              {formatValue()}
            </div>
            {delta !== undefined && (
              <div className="flex items-center gap-2">
                <Badge
                  variant={isPositive ? "default" : "destructive"}
                  className={cn(
                    "text-xs",
                    isPositive && "bg-[#10B981] hover:bg-[#10B981]",
                    isNegative && "bg-[#EF4444] hover:bg-[#EF4444]"
                  )}
                >
                  {isPositive ? "↑" : "↓"} {Math.abs(delta).toFixed(1)}%
                </Badge>
                {previous !== undefined && (
                  <span className="text-xs text-muted-foreground">
                    vs. {unit === "€" ? formatCurrency(previous) : formatNumber(previous)}
                  </span>
                )}
              </div>
            )}
            {benchmark !== undefined && (
              <p className="text-xs text-muted-foreground mt-2">
                NL gem: {unit === "%" ? formatPercent(benchmark) : formatCurrency(benchmark)}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
