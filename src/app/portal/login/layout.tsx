"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "@/styles/globals.css"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <html lang="nl">
        <body style={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: '#111827' }}>Loading...</div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#111827' }}>
        {children}
      </div>
    </ThemeProvider>
  )
}
