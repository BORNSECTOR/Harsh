import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";

const categories = [
  { label: "All Services", ids: null },
  { label: "Car Services", ids: ["car-services", "car-inspections"] },
  { label: "Body & Paint", ids: ["denting-painting", "windshield"] },
  { label: "AC & Electrical", ids: ["ac-service", "batteries"] },
  { label: "Cleaning & Detailing", ids: ["car-spa", "detailing"] },
  { label: "Tyres & Suspension", ids: ["tyres", "suspension", "clutch"] },
  { label: "Insurance", ids: ["insurance-claims"] },
];

export default function ServicesPage() {
  const [active, setActive] = useState(0);

  const filtered = categories[active].ids
    ? services.filter((s) => categories[active].ids!.includes(s.id))
    : services;

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-2 text-center">
            Our Services
          </h1>
          <p className="text-muted-foreground text-center mb-6 max-w-xl mx-auto">
            Premium auto care services with genuine parts, expert technicians, and unbeatable prices.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6 -mx-4 px-4 justify-start md:justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 shrink-0 ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <Link
                to={`/services/${s.id}`}
                key={s.id}
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {s.badge && (
                  <span className={`absolute top-4 right-4 ${s.badgeType === "discount" ? "badge-discount" : s.badgeType === "sale" ? "badge-sale" : "badge-new"}`}>
                    {s.badge}
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-heading font-bold text-sm">{s.price}</span>
                  <span className="text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <MapFooter />
      <FloatingElements />
    </div>
  );
}
