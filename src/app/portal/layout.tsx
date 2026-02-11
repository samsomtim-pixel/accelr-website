"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { PortalHeader } from "@/components/layout/portal-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Script from "next/script"
import "@/styles/globals.css"

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Check of gebruiker ingelogd is
    const loggedIn = localStorage.getItem("accelr_logged_in") === "true"
    setIsAuthenticated(loggedIn)
    
    if (!loggedIn) {
      router.push("/portal/login")
    }
  }, [router])

  // Toon niets totdat auth check compleet is
  if (isAuthenticated === null) {
    return null
  }

  // Als niet ingelogd, redirect gebeurt al in useEffect
  if (!isAuthenticated) {
    return null
  }
  
  const getBreadcrumbs = () => {
    if (pathname === "/portal") {
      return []
    }
    if (pathname === "/portal/deliverables") {
      return [{ label: "Dashboard", href: "/portal" }, { label: "Deliverables" }]
    }
    if (pathname === "/portal/actions") {
      return [{ label: "Dashboard", href: "/portal" }, { label: "Acties" }]
    }
    return []
  }

  const getTitle = () => {
    if (pathname === "/portal") return "Dashboard"
    if (pathname === "/portal/deliverables") return "Deliverables"
    if (pathname === "/portal/actions") return "Acties"
    return "Dashboard"
  }

  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const theme = stored || 'light';
                  if (document.documentElement) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  console.error('Theme init error:', e);
                }
              })();
            `,
          }}
        />
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
      </body>
    </html>
  )
}
