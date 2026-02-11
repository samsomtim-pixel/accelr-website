"use client"

"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, File } from "lucide-react"
import { format } from "date-fns"
import { nl } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface Deliverable {
  id: string
  title: string
  category: string
  type: string
  date: string
  status: string
}

interface DeliverablesGridProps {
  items: Deliverable[]
}

export function DeliverablesGrid({ items }: DeliverablesGridProps) {

  const getFileIcon = (type: string) => {
    if (type === "pdf") {
      return <FileText className="h-5 w-5 text-red-500" />
    }
    return <File className="h-5 w-5 text-blue-500" />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className="border border-border hover:border-[#2ECC71] transition-colors"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              {getFileIcon(item.type)}
              <Badge
                variant={item.status === "final" ? "default" : "secondary"}
                className={cn(
                  item.status === "final" && "bg-[#2ECC71] hover:bg-[#2ECC71]"
                )}
              >
                {item.status === "final" ? "Final" : "Concept"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {format(new Date(item.date), "d MMMM yyyy", { locale: nl })}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                // Mock download - later echte download functionaliteit
                console.log(`Download ${item.title}`)
              }}
            >
              Download
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
