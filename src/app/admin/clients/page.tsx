import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { allClients } from "@/lib/mock-data"
import { formatCurrency, formatNumber, cn } from "@/lib/utils"
import Link from "next/link"

export default function AdminClientsPage() {
  const totalPipeline = allClients.reduce((sum, client) => sum + client.pipeline, 0)
  const totalMeetings = allClients.reduce((sum, client) => sum + client.meetings, 0)
  const activeClients = allClients.filter((client) => client.status === "active").length
  const totalProspects = allClients.reduce((sum, client) => sum + (client.prospects || 0), 0)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Actieve Klanten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Totaal Prospects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalProspects)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Meetings deze mnd</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{formatNumber(totalMeetings)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Totaal Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{formatCurrency(totalPipeline)}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Alle Klanten</CardTitle>
            <button className="text-sm px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors">
              + Nieuwe klant
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Branche</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead className="text-right">Prospects</TableHead>
                <TableHead className="text-right">Meetings</TableHead>
                <TableHead className="text-right">Pipeline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allClients.map((client) => (
                <TableRow key={client.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <Link
                      href={`/admin/clients/${client.id}`}
                      className="font-medium hover:underline"
                    >
                      {client.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{client.industry}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{client.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{client.prospects || 0}</TableCell>
                  <TableCell className="text-right tabular-nums">{client.meetings}</TableCell>
                  <TableCell className="text-right tabular-nums">{formatCurrency(client.pipeline)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={client.status === "active" ? "default" : "secondary"}
                      className={cn(
                        client.status === "active" && "bg-[#2ECC71] hover:bg-[#2ECC71]",
                        client.status === "onboarding" && "bg-[#F59E0B] hover:bg-[#F59E0B]"
                      )}
                    >
                      {client.status === "active" ? "Actief" : "Onboarding"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{client.startedAt || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
