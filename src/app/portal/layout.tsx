"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { PortalHeader } from "@/components/layout/portal-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  // Login pagina: geen auth, geen layout
  if (pathname === "/portal/login") {
    return <>{children}</>
  }

  // Auth check voor alle andere portal routes
  useEffect(() => {
    const loggedIn = localStorage.getItem("accelr_logged_in") === "true"
    setIsAuthenticated(loggedIn)
    if (!loggedIn) router.push("/portal/login")
  }, [router])

  if (isAuthenticated === null) return null
  if (!isAuthenticated) return null

  const getBreadcrumbs = () => {
    if (pathname === "/portal") return []
    if (pathname === "/portal/email") return [{ label: "Dashboard", href: "/portal" }, { label: "Email Campagnes" }]
    if (pathname === "/portal/linkedin") return [{ label: "Dashboard", href: "/portal" }, { label: "LinkedIn Campagnes" }]
    if (pathname === "/portal/pipeline") return [{ label: "Dashboard", href: "/portal" }, { label: "Pipeline" }]
    if (pathname === "/portal/signals") return [{ label: "Dashboard", href: "/portal" }, { label: "Signalen" }]
    if (pathname === "/portal/deliverables") return [{ label: "Dashboard", href: "/portal" }, { label: "Deliverables" }]
    if (pathname === "/portal/actions") return [{ label: "Dashboard", href: "/portal" }, { label: "Acties" }]
    return []
  }

  const getTitle = () => {
    if (pathname === "/portal") return "Dashboard"
    if (pathname === "/portal/email") return "Email Campagnes"
    if (pathname === "/portal/linkedin") return "LinkedIn Campagnes"
    if (pathname === "/portal/pipeline") return "Pipeline"
    if (pathname === "/portal/signals") return "Signalen"
    if (pathname === "/portal/deliverables") return "Deliverables"
    if (pathname === "/portal/actions") return "Acties"
    return "Dashboard"
  }

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <PortalHeader title={getTitle()} breadcrumbs={getBreadcrumbs()} />
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
