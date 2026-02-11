"use client"

import { ThemeProvider } from "@/components/providers/theme-provider"
import "@/styles/globals.css"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {children}
      </div>
    </ThemeProvider>
  )
}
