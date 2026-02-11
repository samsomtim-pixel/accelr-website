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

export default function AdminPage() {
  const totalPipeline = allClients.reduce((sum, client) => sum + client.pipeline, 0)
  const totalMeetings = allClients.reduce((sum, client) => sum + client.meetings, 0)
  const activeClients = allClients.filter((client) => client.status === "active").length

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Totaal Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalPipeline)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Totaal Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalMeetings)}</div>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Actieve Klanten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Alle Klanten</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Branche</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Pipeline</TableHead>
                <TableHead>Meetings</TableHead>
                <TableHead>Status</TableHead>
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
                  <TableCell>{client.industry}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{client.plan}</Badge>
                  </TableCell>
                  <TableCell>{client.score}</TableCell>
                  <TableCell>{formatCurrency(client.pipeline)}</TableCell>
                  <TableCell>{formatNumber(client.meetings)}</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
