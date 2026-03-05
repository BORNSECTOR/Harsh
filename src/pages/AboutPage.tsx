import { Shield, Star, Users, Award, Clock, Wrench } from "lucide-react";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";
import headerLogo from "@/assets/header-logo.png";

const stats = [
  { icon: Users, label: "Happy Customers", value: "5,000+" },
  { icon: Star, label: "Google Rating", value: "4.8★" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Award, label: "Expert Technicians", value: "20+" },
];

const values = [
  { icon: Shield, title: "Quality First", desc: "We use only genuine OEM parts and follow manufacturer-recommended procedures." },
  { icon: Wrench, title: "Expert Team", desc: "Our certified technicians have 10+ years of experience with all car brands." },
  { icon: Clock, title: "Quick Turnaround", desc: "Most services completed same day. We value your time as much as your car." },
  { icon: Star, title: "Customer Satisfaction", desc: "4.8★ Google rating with 5000+ happy customers speaks for our quality." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <img src={headerLogo} alt="VM Auto Care" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h1 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-3">
              About VM Auto Care
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delhi NCR's most trusted premium car service center since 2009. We combine expert craftsmanship with genuine parts to deliver exceptional automobile care.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-2xl border border-border p-6 text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading font-black text-2xl text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl border border-border p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <MapFooter />
      <FloatingElements />
    </div>
  );
}
