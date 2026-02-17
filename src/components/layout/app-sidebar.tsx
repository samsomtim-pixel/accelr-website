"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Mail,
  Linkedin,
  TrendingUp,
  FileText,
  CheckSquare,
  Shield,
  Moon,
  Sun,
  LogOut,
  Zap,
  Phone,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { clientInfo } from "@/lib/mock-data"
import { createClient } from "@/lib/supabase/client"

const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = async () => {
    if (useMock) {
      localStorage.removeItem("accelr_logged_in")
      router.push("/portal/login")
      return
    }

    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/portal/login")
  }

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/portal" },
    { title: "Email", icon: Mail, href: "/portal/email" },
    { title: "LinkedIn", icon: Linkedin, href: "/portal/linkedin" },
    { title: "Pipeline", icon: TrendingUp, href: "/portal/pipeline" },
    { title: "Signalen", icon: Zap, href: "/portal/signals" },
    { title: "Deliverables", icon: FileText, href: "/portal/deliverables" },
    { title: "Acties", icon: CheckSquare, href: "/portal/actions" },
  ]

  const adminItems = [
    { title: "Overzicht", icon: Shield, href: "/admin" },
    { title: "Klanten", icon: Users, href: "/admin/clients" },
    { title: "Calls", icon: Phone, href: "/admin/calls" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            accelr<span className="text-[#2ECC71]">.</span>
          </div>
        </div>
        <div className="px-2 pb-4">
          <div className="text-sm font-semibold text-foreground">{clientInfo.name}</div>
          <Badge variant="secondary" className="mt-1 text-xs border border-[#2ECC71]" style={{ backgroundColor: 'transparent', color: '#2ECC71' }}>
            {clientInfo.plan}
          </Badge>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigatie</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={isActive ? "border-l-2 border-l-[#2ECC71] bg-[#2ECC71]/10" : ""}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => {
                const isActive = pathname?.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={isActive ? "border-l-2 border-l-[#2ECC71] bg-[#2ECC71]/10" : ""}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border">
        <div className="space-y-2 px-2 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full justify-start"
          >
            {mounted && theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                Licht
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                Donker
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Uitloggen
          </Button>
        </div>
        <div className="px-2 pb-2">
          <p className="text-xs text-muted-foreground text-center">
            Powered by Accelr
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
