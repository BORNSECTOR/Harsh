import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Lead = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  created_at?: string;
};

const formatDate = (value?: string) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/backend/api/leads.php?action=get_all", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          setLeads([]);
          return;
        }

        const payload = await response.json();
        setLeads(Array.isArray(payload?.data) ? payload.data : []);
      } catch {
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading font-bold text-xl text-foreground">Leads</h2>
        <p className="text-muted-foreground text-sm">All submitted lead inquiries.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lead List</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead>Requested Service</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No leads found.
                    </TableCell>
                  </TableRow>
                ) : (
                  leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="whitespace-nowrap">{formatDate(lead.created_at)}</TableCell>
                      <TableCell className="font-medium">{lead.name || "-"}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{lead.email || "-"}</div>
                          <div className="text-muted-foreground">{lead.phone || "-"}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{lead.service || "Not specified"}</Badge>
                      </TableCell>
                      <TableCell className="max-w-[320px] truncate">{lead.message || "-"}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
