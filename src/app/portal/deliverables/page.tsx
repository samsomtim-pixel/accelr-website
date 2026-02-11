"use client"

import { useState } from "react"
import { DeliverablesGrid } from "@/components/deliverables/deliverables-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { deliverables } from "@/lib/mock-data"

export default function DeliverablesPage() {
  const categories = Array.from(new Set(deliverables.map((d) => d.category)))
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredDeliverables =
    selectedCategory === "all"
      ? deliverables
      : deliverables.filter((d) => d.category === selectedCategory)

  return (
    <div className="space-y-6">
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList>
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <DeliverablesGrid items={deliverables} />
        </TabsContent>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <DeliverablesGrid items={deliverables.filter((d) => d.category === category)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
