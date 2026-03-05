import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Shield, Star, Phone, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/serviceDetails";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";
import { Link } from "react-router-dom";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const detail = serviceDetails.find((d) => d.serviceId === id);
  const [activeSub, setActiveSub] = useState(0);

  if (!service || !detail) {
    return (
      <div className="min-h-screen overflow-x-clip">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary font-semibold">← Back to Services</Link>
        </div>
        <MapFooter />
      </div>
    );
  }

  const currentSub = detail.subCategories[activeSub];

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="py-6">
        <div className="container mx-auto px-4">
          {/* Back + Title */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-black text-2xl md:text-3xl text-foreground">{service.name}</h1>
              {service.badge && (
                <span className={`mt-1 inline-block ${service.badgeType === "discount" ? "badge-discount" : service.badgeType === "sale" ? "badge-sale" : "badge-new"}`}>
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          {/* Subcategory Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6 -mx-4 px-4 justify-start md:justify-center">
            {detail.subCategories.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveSub(i)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 shrink-0 ${
                  activeSub === i
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentSub.cards.map((card) => (
              <div
                key={card.name}
                className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <h3 className="font-heading font-bold text-base text-foreground mb-3">{card.name}</h3>

                <div className="space-y-2 text-sm text-muted-foreground mb-4 flex-1">
                  {card.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>Takes {card.duration}</span>
                    </div>
                  )}
                  {card.warranty && (
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary shrink-0" />
                      <span>{card.warranty}</span>
                    </div>
                  )}
                  {card.includes && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{card.includes}</span>
                    </div>
                  )}
                  {card.rating && (
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-warning fill-current shrink-0" />
                      <span className="text-foreground font-semibold">{card.rating} Expert Rating</span>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="border-t border-border pt-3 mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    {card.originalPrice > 0 && card.offerPrice !== card.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">₹{card.originalPrice.toLocaleString("en-IN")}</span>
                    )}
                    <span className="font-heading font-black text-lg text-primary">
                      {card.offerPrice === 0 ? "FREE" : `₹${card.offerPrice.toLocaleString("en-IN")}`}
                    </span>
                    {card.discount && (
                      <span className="badge-discount">{card.discount}</span>
                    )}
                  </div>
                  <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Book Now
              </Button>
            </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call CTA */}
          <div className="mt-8 bg-card rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">Need Help Choosing?</h3>
              <p className="text-muted-foreground text-sm">Our experts will recommend the best service for your car.</p>
            </div>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Guarantees */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "✓ Free Pickup & Drop",
              "✓ Genuine Parts Only",
              "✓ 30 Days Warranty",
              "✓ Expert Technicians",
            ].map((g) => (
              <div key={g} className="app-card text-center text-sm font-semibold text-foreground py-3">
                {g}
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
