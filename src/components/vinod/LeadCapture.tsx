import { useState } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ChevronDown, Flame, CheckCircle } from "lucide-react";
import { submitLead } from "@/lib/api";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const faqData = [
  { q: "Do you provide free pickup & drop?", a: "Yes! We offer complimentary pickup and drop service within a 15km radius in Delhi NCR / Noida for all services above ₹999." },
  { q: "Is the AC check-up really free?", a: "Absolutely! We provide a free AC diagnostic check-up with every service booking. If repairs are needed, we'll give you a transparent quote before proceeding." },
  { q: "Do you use genuine/OEM parts?", a: "Yes, we only use genuine OEM spare parts from trusted brands like Bosch, Valeo, and Mahle. All parts come with manufacturer warranty." },
];

export default function LeadCapture() {
  const ref = useRevealAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", mobile: "", carModel: "", service: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLead("/api/submit-lead.php", formData);
    setSubmitting(false);
    if (res.success) {
      toast.success(res.message || "Thank you! We'll contact you shortly.");
      setFormData({ name: "", mobile: "", carModel: "", service: "" });
    } else {
      toast.error(res.message || "Something went wrong.");
    }
  };

  export function LeadCapture() {
  // 1. Read the service name from the URL
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  // 2. Set the default service in the form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: preselectedService,
  });

  // 3. Ensure it updates if the URL changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 4. Use .trim() to fix the "Name required" error when typing spaces
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
  };

  return (
    <div ref={ref}>
      {/* Lead Form */}
      <section id="lead-form" className="px-4 pb-6">
        <div className="container mx-auto">
          <div className="reveal-up bg-secondary rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-secondary-foreground mb-3">
                  Get a Free Quote
                </h2>
                <p className="text-secondary-foreground/70 text-sm mb-4">
                  Fill in your details and our expert will call you within 15 minutes with the best price.
                </p>
                <ul className="space-y-2 text-secondary-foreground/60 text-sm">
                  <li>✓ Free AC Health Check-up</li>
                  <li>✓ Free Pickup & Drop</li>
                  <li>✓ 30 Days Service Warranty</li>
                  <li>✓ Genuine Spare Parts Only</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative bg-card rounded-xl p-6 shadow-lg">
                  <div className="absolute -top-3 right-4 bg-warning text-card px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Free AC Check
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      required
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Car Model (e.g. Honda City, Swift)"
                      required
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                    />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="">Select Service</option>
                      <option value="general">General Service</option>
                      <option value="denting">Denting & Painting</option>
                      <option value="ac">AC Service & Repair</option>
                      <option value="detailing">Car Detailing</option>
                      <option value="insurance">Insurance Claims</option>
                      <option value="other">Other</option>
                    </select>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {submitting ? "Submitting…" : "Get Free Quote →"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="reveal-up font-heading font-bold text-xl text-foreground mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="reveal-up space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="app-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <p className="text-muted-foreground text-sm mt-3 pt-3 border-t border-border">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
