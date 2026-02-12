"use client"

import { ThemeProvider } from "@/components/providers/theme-provider"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#111827' }}>
        {children}
      </div>
    </ThemeProvider>
  )
}
