"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { PortalHeader } from "@/components/layout/portal-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { usePathname } from "next/navigation"
import Script from "next/script"
import "@/styles/globals.css"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  const getBreadcrumbs = () => {
    if (pathname === "/admin") {
      return []
    }
    if (pathname?.startsWith("/admin/clients/")) {
      const clientId = pathname.split("/").pop()
      return [
        { label: "Admin", href: "/admin" },
        { label: `Klant ${clientId}` },
      ]
    }
    return []
  }

  const getTitle = () => {
    if (pathname === "/admin") return "Admin"
    if (pathname?.startsWith("/admin/clients/")) {
      return "Klant Dashboard"
    }
    return "Admin"
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
