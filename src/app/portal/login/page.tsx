"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    // Simuleer login - geen echte auth
    setTimeout(() => {
      // Zet localStorage item voor "ingelogd" status
      localStorage.setItem("accelr_logged_in", "true")
      setLoading(false)
      router.push("/portal")
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            accelr<span className="text-[#2ECC71]">.</span>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Client Portal
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-lg border p-8" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="jouw@email.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={loading || !email}
              className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loggen in..." : "Log in"}
            </Button>
          </form>

          <p className="text-center text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            Je ontvangt een login link via email
          </p>

          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--border-color)' }}>
            <Link
              href="/contact"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              Nog geen toegang? Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
