import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, ClipboardList, Percent, Wrench, Users } from "lucide-react";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Lead = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  status?: string;
  created_at?: string;
};

export default function Dashboard() {
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

  const totalLeads = leads.length;

  const servicesBooked = useMemo(() => {
    const hasServiceField = leads.some((lead) => typeof lead.service === "string");
    if (!hasServiceField) return totalLeads;
    return leads.filter((lead) => (lead.service || "").trim().length > 0).length;
  }, [leads, totalLeads]);

  const conversionRate = useMemo(() => {
    if (!totalLeads) return 0;
    const converted = leads.filter((lead) =>
      ["contacted", "closed", "converted"].includes((lead.status || "").toLowerCase())
    ).length;
    return Number(((converted / totalLeads) * 100).toFixed(1));
  }, [leads, totalLeads]);

  const activeServices = services.length;

  const statCards = [
    {
      title: "Total Leads",
      value: totalLeads.toString(),
      description: "All submitted leads",
      icon: Users,
    },
    {
      title: "Services Booked",
      value: servicesBooked.toString(),
      description: "Leads with service interest",
      icon: ClipboardList,
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      description: "Contacted/converted share",
      icon: Percent,
    },
    {
      title: "Active Services",
      value: activeServices.toString(),
      description: "Currently available services",
      icon: Wrench,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-2xl text-foreground">Dashboard</h2>
        <p className="text-muted-foreground text-sm mt-1">Admin overview and quick actions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center justify-between">
                <span>{card.title}</span>
                <card.icon className="w-4 h-4 text-muted-foreground" />
              </CardDescription>
              <CardTitle className="text-3xl">
                {loading && card.title === "Total Leads" ? <Skeleton className="h-9 w-20" /> : card.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Quick Actions
          </CardTitle>
          <CardDescription>Jump to the sections you use most.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/admin/leads"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            View Leads
          </Link>
          <Link
            to="/admin/services"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Update Services
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
