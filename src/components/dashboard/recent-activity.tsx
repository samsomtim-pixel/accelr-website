"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageSquare, TrendingUp, FileText, CheckCircle, Phone, Zap } from "lucide-react"
import { recentActivity } from "@/lib/mock-data"

const iconMap = {
  meeting: Calendar,
  reply: MessageSquare,
  campaign: TrendingUp,
  deal: TrendingUp,
  deliverable: FileText,
  call: Phone,
  signal: Zap,
}

const iconColors = {
  meeting: "#2ECC71",
  reply: "#3B82F6",
  campaign: "#6B7280",
  deal: "#2ECC71",
  deliverable: "#F59E0B",
  call: "#8B5CF6",
  signal: "#F59E0B",
}

export function RecentActivity() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>Recente Activiteit</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = iconMap[activity.type as keyof typeof iconMap] || CheckCircle
            const iconColor = iconColors[activity.type as keyof typeof iconColors] || "#6B7280"
            
            return (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className="mt-0.5 rounded-full p-1.5"
                  style={{ backgroundColor: `${iconColor}20` }}
                >
                  <Icon className="h-4 w-4" style={{ color: iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
