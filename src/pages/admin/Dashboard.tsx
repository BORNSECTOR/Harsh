import {
  Users, TrendingUp, Tag, Wrench, IndianRupee, BarChart3,
  ArrowUpRight, ArrowDownRight, Eye, Phone, Calendar, MapPin,
  Download
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";

const stats = [
  { label: "Total Leads", value: "1,284", change: "+12.5%", up: true, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Today's Leads", value: "24", change: "+8.2%", up: true, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Total Offers", value: "18", change: "+2", up: true, icon: Tag, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Active Services", value: "12", change: "0%", up: true, icon: Wrench, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Monthly Revenue", value: "₹4.8L", change: "+18.3%", up: true, icon: IndianRupee, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Conversion Rate", value: "34%", change: "-2.1%", up: false, icon: BarChart3, color: "text-rose-600", bg: "bg-rose-50" },
];

const leadsOverTime = [
  { month: "Sep", leads: 85 }, { month: "Oct", leads: 120 }, { month: "Nov", leads: 98 },
  { month: "Dec", leads: 140 }, { month: "Jan", leads: 165 }, { month: "Feb", leads: 192 },
];

const servicesPerformance = [
  { name: "General", count: 340 }, { name: "Denting", count: 280 },
  { name: "AC Service", count: 220 }, { name: "Detailing", count: 180 },
  { name: "Insurance", count: 120 },
];

const leadSources = [
  { name: "Website", value: 45 }, { name: "WhatsApp", value: 25 },
  { name: "Walk-in", value: 18 }, { name: "Referral", value: 12 },
];
const PIE_COLORS = ["hsl(358,82%,49%)", "hsl(210,80%,55%)", "hsl(142,70%,45%)", "hsl(38,92%,50%)"];

const revenueData = [
  { month: "Sep", revenue: 280000 }, { month: "Oct", revenue: 320000 }, { month: "Nov", revenue: 350000 },
  { month: "Dec", revenue: 410000 }, { month: "Jan", revenue: 390000 }, { month: "Feb", revenue: 480000 },
];

const recentLeads = [
  { id: 1, name: "Rahul Sharma", phone: "98765 43210", service: "AC Service", location: "Noida Sec-62", date: "Today", status: "new" },
  { id: 2, name: "Priya Gupta", phone: "91234 56789", service: "Denting & Painting", location: "Greater Noida", date: "Yesterday", status: "contacted" },
  { id: 3, name: "Amit Verma", phone: "99887 76655", service: "General Service", location: "Delhi NCR", date: "2 days ago", status: "closed" },
  { id: 4, name: "Sneha Patel", phone: "88776 65544", service: "Car Detailing", location: "Ghaziabad", date: "3 days ago", status: "new" },
  { id: 5, name: "Vikram Singh", phone: "77665 54433", service: "Insurance Claims", location: "Noida Sec-18", date: "3 days ago", status: "contacted" },
];

const statusStyles: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  contacted: "bg-amber-50 text-amber-700",
  closed: "bg-emerald-50 text-emerald-700",
};

useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Add credentials: "include" here too, so PHP knows you are logged in!
        const response = await fetch('/backend/api/dashboard.php', {
          credentials: 'include', 
        });
        
        if (response.status === 401) {
          // Handle unauthorized access
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-foreground">Dashboard</h2>
        <p className="text-muted-foreground text-sm mt-1">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.up ? "text-emerald-600" : "text-rose-600"}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <p className="font-heading font-bold text-xl text-foreground">{s.value}</p>
            <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Leads Over Time */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold text-foreground mb-4">Leads Over Time</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={leadsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Line type="monotone" dataKey="leads" stroke="hsl(358,82%,49%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(358,82%,49%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Services Performance */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold text-foreground mb-4">Services Performance</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={servicesPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Bar dataKey="count" fill="hsl(210,80%,55%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Lead Sources Pie */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold text-foreground mb-4">Lead Sources</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={leadSources} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {leadSources.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold text-foreground mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142,70%,45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(142,70%,45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} formatter={(v: number) => [`₹${v.toLocaleString()}`, "Revenue"]} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(142,70%,45%)" fill="url(#revenueGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-card rounded-xl border border-border">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-heading font-semibold text-foreground">Recent Leads</h3>
          <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Phone className="w-3.5 h-3.5 text-muted-foreground" /> {lead.phone}
                    </span>
                  </TableCell>
                  <TableCell>{lead.service}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5 text-sm">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> {lead.location}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" /> {lead.date}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyles[lead.status]}`}>
                      {lead.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <button className="text-primary hover:underline text-xs font-medium flex items-center gap-1 ml-auto">
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="p-4 bg-muted rounded-xl text-sm text-muted-foreground">
        <strong>Note:</strong> Dashboard data is sample/demo. Connect your PHP API to display live data from your MySQL database.
      </div>
    </div>
  );
}
