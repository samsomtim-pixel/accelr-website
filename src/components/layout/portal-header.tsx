"use client"

import * as React from "react"
import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PortalHeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function PortalHeader({ title, breadcrumbs = [] }: PortalHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-background px-6 py-4">
      <div className="flex items-center gap-4">
        {breadcrumbs.length > 0 ? (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <span className="text-muted-foreground">{crumb.label}</span>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : (
          <h1 className="text-2xl font-semibold">{title}</h1>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Select defaultValue="jan-2026">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jan-2026">Januari 2026</SelectItem>
            <SelectItem value="dec-2025">December 2025</SelectItem>
            <SelectItem value="nov-2025">November 2025</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Laatst bijgewerkt: 2 uur geleden
        </p>
      </div>
    </div>
  )
}
