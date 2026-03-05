import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Battery,
  CircleDot,
  CarFront,
  Settings,
  ArrowDownUp,
  Shield,
  Zap,
  Heart,
  Tag,
  Star,
} from "lucide-react";
import { services as serviceData } from "@/data/services";

const curatedItems = [
  { icon: Battery, name: "Batteries", badge: "SALE", id: "batteries" },
  { icon: Snowflake, name: "AC Parts", badge: "NEW", id: "ac-service" },
  { icon: CircleDot, name: "Tyres", badge: "SALE", id: "tyres" },
  { icon: Settings, name: "Brakes", badge: null, id: "clutch" },
  { icon: ArrowDownUp, name: "Clutch", badge: "NEW", id: "clutch" },
  { icon: CarFront, name: "Sell Car", badge: null, id: "car-inspections" },
];

const bookNowUrl = (serviceName: string) =>
  `/contact?service=${encodeURIComponent(serviceName)}`;

export default function Services() {
  const ref = useRevealAnimation();
  const topServices = serviceData.slice(0, 4);
  const bottomServices = serviceData.slice(4);

  return (
    <div ref={ref}>
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <div className="reveal-up bg-secondary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <span className="badge-sale mb-2 inline-block">LIMITED TIME</span>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-secondary-foreground mb-2">
                50% OFF Dent & Paint
              </h3>
              <p className="text-secondary-foreground/70 text-sm">
                Premium denting & painting service at half the price. Book now before offer ends!
              </p>
              <Link
                to="/services/denting-painting"
                className="mt-4 inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Claim Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="reveal-up font-heading font-bold text-xl md:text-2xl text-foreground">
              Our Services
            </h2>
            <Link to="/services" className="text-primary text-sm font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            {topServices.map((s, i) => (
              <div
                key={s.id}
                className="reveal-up bg-card rounded-2xl border border-border p-5 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {s.badge && (
                  <span
                    className={`absolute top-3 right-3 ${
                      s.badgeType === "discount"
                        ? "badge-discount"
                        : s.badgeType === "sale"
                        ? "badge-sale"
                        : "badge-new"
                    }`}
                  >
                    {s.badge}
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-heading font-bold text-card-foreground leading-tight">
                  {s.name}
                </span>
                <div className="mt-1 flex w-full items-center justify-between gap-2">
                  <Link
                    to={`/services/${s.id}`}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                  <Link
                    to={bookNowUrl(s.name)}
                    className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-semibold hover:opacity-90"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3">
            {bottomServices.map((s, i) => (
              <div
                key={s.id}
                className="reveal-up bg-card rounded-xl border border-border p-3 flex flex-col items-center text-center gap-2 hover:shadow-md hover:border-primary/30 transition-all duration-300 relative"
                style={{ transitionDelay: `${(i + 4) * 40}ms` }}
              >
                {s.badge && (
                  <span
                    className={`absolute -top-1 -right-1 ${
                      s.badgeType === "discount"
                        ? "badge-discount"
                        : s.badgeType === "sale"
                        ? "badge-sale"
                        : "badge-new"
                    } text-[8px] px-1.5`}
                  >
                    {s.badge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-medium text-card-foreground leading-tight">
                  {s.name}
                </span>
                <div className="mt-1 flex w-full items-center justify-between gap-2">
                  <Link
                    to={`/services/${s.id}`}
                    className="text-[10px] text-primary font-semibold hover:underline"
                  >
                    Details
                  </Link>
                  <Link
                    to={bookNowUrl(s.name)}
                    className="text-[10px] bg-primary text-primary-foreground px-2 py-1 rounded-full font-semibold hover:opacity-90"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="container mx-auto grid grid-cols-2 gap-3">
          <div className="reveal-up rounded-2xl bg-info/10 border border-info/20 p-4 md:p-6">
            <Zap className="w-8 h-8 text-info mb-2" />
            <h3 className="font-heading font-bold text-sm md:text-base text-foreground">Miles</h3>
            <p className="text-[11px] md:text-xs text-muted-foreground mt-1">
              Free Road Side Assistance Program
            </p>
            <Link to="/services/car-services" className="mt-3 text-info text-xs font-semibold inline-block">
              Learn More →
            </Link>
          </div>
          <div
