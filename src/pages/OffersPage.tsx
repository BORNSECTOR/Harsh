import { Link } from "react-router-dom";
import { Gift, Zap, Heart, Tag, CarFront, Megaphone, Paintbrush, Sparkles, Droplets, Wrench } from "lucide-react";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";

const offers = [
  { title: "50% OFF Dent & Paint", desc: "Premium denting & painting service at half the price. Book now before offer ends!", badge: "LIMITED TIME", color: "bg-primary/10 border-primary/20" },
  { title: "Free AC Check-up", desc: "Complimentary AC diagnostic with every service booking. Stay cool this season!", badge: "FREE", color: "bg-info/10 border-info/20" },
  { title: "Refer & Earn ₹1000", desc: "Earn ₹1000 for every friend you refer. They get 10% off too!", badge: "EARN", color: "bg-success/10 border-success/20" },
  { title: "Free Pickup & Drop", desc: "Complimentary pickup and drop within 15km radius for services above ₹999.", badge: "FREE", color: "bg-warning/10 border-warning/20" },
];

const combos = [
  { title: "Festive Cleaning Combo", desc: "Full wash + Interior cleaning + AC sanitization", price: "₹1,499" },
  { title: "Dent & Paint Combo", desc: "Minor denting + Full body paint + Polish", price: "₹4,999" },
  { title: "Engine Care Combo", desc: "Oil change + Filter replacement + Engine flush", price: "₹2,499" },
  { title: "Premium Detailing", desc: "Ceramic coating + Interior detail + Engine bay", price: "₹7,999" },
];

const quickServices = [
  { icon: Paintbrush, name: "Bumper Paint", price: "₹2,999" },
  { icon: Sparkles, name: "Rubbing & Polish", price: "₹1,499" },
  { icon: Droplets, name: "Full Car Spa", price: "₹999" },
  { icon: Wrench, name: "Standard Service", price: "₹1,999" },
];

export default function OffersPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-2 text-center">
            Offers & Combos
          </h1>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Grab the best deals on premium car services. Limited time offers!
          </p>

          {/* Current Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {offers.map((offer) => (
              <div key={offer.title} className={`rounded-2xl border p-6 ${offer.color}`}>
                <span className="badge-sale text-xs mb-3 inline-block">{offer.badge}</span>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{offer.desc}</p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Claim Offer
                </Link>
              </div>
            ))}
          </div>

          {/* Combos */}
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Designer Combos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {combos.map((combo) => (
              <div key={combo.title} className="bg-card rounded-2xl border border-border p-5 flex flex-col justify-between">
                <div>
                  <Gift className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-heading font-bold text-base text-foreground">{combo.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{combo.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-heading font-bold text-lg text-primary">{combo.price}</span>
                  <Link to="/contact" className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-semibold">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Services */}
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Quick Services ⚡</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map((s) => (
              <div key={s.name} className="rounded-2xl bg-info/10 border border-info/20 p-5 flex flex-col items-center text-center gap-2">
                <s.icon className="w-8 h-8 text-info" />
                <span className="font-semibold text-sm text-foreground">{s.name}</span>
                <span className="text-primary font-heading font-bold text-sm">{s.price}</span>
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
