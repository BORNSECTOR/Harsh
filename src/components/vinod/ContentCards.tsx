import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Link } from "react-router-dom";
import { Sparkles, Gift, Megaphone } from "lucide-react";

const combos = [
  { title: "Festive Cleaning Combo", desc: "Full wash + Interior cleaning + AC sanitization", price: "₹1,499" },
  { title: "Dent & Paint Combo", desc: "Minor denting + Full body paint + Polish", price: "₹4,999" },
  { title: "Engine Care Combo", desc: "Oil change + Filter replacement + Engine flush", price: "₹2,499" },
  { title: "Premium Detailing", desc: "Ceramic coating + Interior detail + Engine bay", price: "₹7,999" },
];

const blogPosts = [
  { title: "5 Signs Your Car Needs Immediate Servicing", category: "Maintenance" },
  { title: "How to Maintain Your Car AC in Summer", category: "Tips" },
  { title: "Denting vs Painting: What You Need to Know", category: "Guide" },
  { title: "Winter Car Care Tips for Delhi NCR", category: "Seasonal" },
];

const spareParts = ["BOSCH", "VALEO", "MAHLE", "NTN", "DENSO", "NGK"];

export default function ContentCards() {
  const ref = useRevealAnimation();

  return (
    <div ref={ref}>
      {/* Designer Combos */}
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="reveal-up font-heading font-bold text-xl text-foreground">Designer Combos</h2>
            <Link to="/offers" className="text-primary text-sm font-semibold hover:underline">View All →</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {combos.map((combo) => (
              <div key={combo.title} className="reveal-up min-w-[260px] bg-secondary rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <Gift className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-heading font-bold text-base text-secondary-foreground">{combo.title}</h3>
                  <p className="text-secondary-foreground/60 text-xs mt-1">{combo.desc}</p>
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
        </div>
      </section>



      {/* Spare Parts */}
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <h2 className="reveal-up font-heading font-bold text-xl text-foreground mb-4 text-center">Trusted Spare Parts</h2>
          <div className="reveal-up flex flex-wrap justify-center gap-6 md:gap-10">
            {spareParts.map((brand) => (
              <span key={brand} className="text-muted-foreground/40 font-heading font-bold text-lg md:text-2xl hover:text-foreground transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Refer & Earn */}
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <div className="reveal-up bg-brand-gradient rounded-2xl p-6 md:p-8 flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-heading font-bold text-lg md:text-xl text-primary-foreground">
                Refer & Earn ₹1000
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Earn ₹1000 for every friend you refer. They get 10% off too!
              </p>
              <Link to="/contact" className="mt-3 inline-block bg-card text-foreground px-5 py-2 rounded-full text-sm font-semibold">
                Share Now
              </Link>
            </div>
            <Megaphone className="w-16 h-16 text-primary-foreground/60 hidden sm:block" />
          </div>
        </div>
      </section>
    </div>
  );
}
