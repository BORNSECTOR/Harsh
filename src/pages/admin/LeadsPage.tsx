import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sampleLeads = [
  { id: 1, name: "Rahul Sharma", mobile: "9876543210", service: "AC Service", status: "new", created_at: "2026-02-27" },
  { id: 2, name: "Priya Gupta", mobile: "9123456789", service: "Denting & Painting", status: "contacted", created_at: "2026-02-26" },
];

export default function LeadsPage() {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-foreground mb-6">Leads</h2>
      <p className="text-muted-foreground text-sm mb-4">
        Leads submitted through the website form will appear here once connected to your MySQL API.
      </p>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleLeads.map((lead, i) => (
              <TableRow key={lead.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.mobile}</TableCell>
                <TableCell>{lead.service}</TableCell>
                <TableCell>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    lead.status === "new" ? "bg-blue-100 text-blue-700" :
                    lead.status === "contacted" ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {lead.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">{lead.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
