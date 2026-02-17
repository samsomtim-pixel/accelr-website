"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const linkError = searchParams.get("error")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError(null)

    if (useMock) {
      // Mock mode: simulate login
      setTimeout(() => {
        localStorage.setItem("accelr_logged_in", "true")
        setLoading(false)
        router.push("/portal")
      }, 500)
      return
    }

    // Supabase Magic Link
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    })

    setLoading(false)

    if (authError) {
      setError(authError.message)
      return
    }

    setSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#111827' }}>
            accelr<span className="text-[#2ECC71]">.</span>
          </div>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            Client Portal
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-lg border p-8" style={{ borderColor: '#E5E7EB', backgroundColor: '#FAFAFA' }}>
          {sent ? (
            // Magic link sent confirmation
            <div className="text-center space-y-4">
              <div className="text-4xl">✉️</div>
              <h2 className="text-lg font-semibold" style={{ color: '#111827' }}>
                Check je inbox
              </h2>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                We hebben een login link gestuurd naar <strong style={{ color: '#111827' }}>{email}</strong>.
                Klik op de link om in te loggen.
              </p>
              <Button
                variant="ghost"
                onClick={() => { setSent(false); setEmail("") }}
                className="text-sm"
                style={{ color: '#6B7280' }}
              >
                Ander emailadres gebruiken
              </Button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#6B7280' }}>
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
                      backgroundColor: '#F3F4F6',
                      borderColor: '#E5E7EB',
                      color: '#111827'
                    }}
                  />
                </div>

                {(error || linkError) && (
                  <p className="text-sm text-red-500">
                    {error || (linkError === "link_expired"
                      ? "Login link is verlopen. Vraag een nieuwe aan."
                      : "Er is iets misgegaan. Probeer opnieuw.")}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Laden..." : "Log in"}
                </Button>
              </form>

              <p className="text-center text-sm mt-4" style={{ color: '#9CA3AF' }}>
                Je ontvangt een login link via email
              </p>

              <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: '#E5E7EB' }}>
                <Link
                  href="/contact"
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#6B7280' }}
                >
                  Nog geen toegang? Neem contact op
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
