"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Building2, Mail, Shield } from "lucide-react"
import { clientInfo } from "@/lib/mock-data"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      {/* Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Profiel</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Naam</label>
            <Input
              defaultValue="Tim van der Berg"
              className="max-w-md"
              disabled
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <Input
              defaultValue="tim@techventures.nl"
              className="max-w-md"
              disabled
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Neem contact op met Accelr om je gegevens te wijzigen.
          </p>
        </CardContent>
      </Card>

      {/* Organization */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Organisatie</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{clientInfo.name}</div>
              <div className="text-sm text-muted-foreground">{clientInfo.industry}</div>
            </div>
            <Badge variant="outline" className="border-[#2ECC71] text-[#2ECC71]">
              {clientInfo.plan}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-sm text-muted-foreground">Klant sinds</div>
              <div className="text-sm font-medium">{clientInfo.since}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Locatie</div>
              <div className="text-sm font-medium">{clientInfo.location}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Notificaties</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Wekelijks rapport", description: "Ontvang elke maandag een samenvatting", enabled: true },
            { label: "Nieuwe meetings", description: "Melding bij een geboekte meeting", enabled: true },
            { label: "Positieve replies", description: "Melding bij een positieve reply", enabled: false },
            { label: "Campagne updates", description: "Status wijzigingen van campagnes", enabled: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
              <div
                className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${
                  item.enabled ? "bg-[#2ECC71]" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    item.enabled ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground pt-2">
            Notificatie-instellingen worden binnenkort beschikbaar.
          </p>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Beveiliging</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Login methode</div>
              <div className="text-xs text-muted-foreground">Magic Link via email</div>
            </div>
            <Badge variant="outline">Actief</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Laatste login</div>
              <div className="text-xs text-muted-foreground">17 feb 2026, 09:23</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
