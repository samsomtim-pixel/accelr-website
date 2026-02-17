"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { PortalHeader } from "@/components/layout/portal-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isReady, setIsReady] = useState(!useMock)

  // Mock mode: check localStorage
  useEffect(() => {
    if (useMock) {
      const loggedIn = localStorage.getItem("accelr_logged_in") === "true"
      if (!loggedIn) {
        router.push("/portal/login")
        return
      }
      setIsReady(true)
    }
  }, [router])

  if (!isReady) return null

  const getBreadcrumbs = () => {
    if (pathname === "/admin") return []
    if (pathname === "/admin/clients") return [{ label: "Admin", href: "/admin" }, { label: "Klanten" }]
    if (pathname?.startsWith("/admin/clients/")) {
      const clientId = pathname.split("/").pop()
      return [
        { label: "Admin", href: "/admin" },
        { label: "Klanten", href: "/admin/clients" },
        { label: `Klant ${clientId}` },
      ]
    }
    if (pathname === "/admin/calls") return [{ label: "Admin", href: "/admin" }, { label: "Call Queue" }]
    return []
  }

  const getTitle = () => {
    if (pathname === "/admin") return "Admin"
    if (pathname === "/admin/clients") return "Klanten"
    if (pathname?.startsWith("/admin/clients/")) return "Klant Dashboard"
    if (pathname === "/admin/calls") return "Call Queue"
    return "Admin"
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
