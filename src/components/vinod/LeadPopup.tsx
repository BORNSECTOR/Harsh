import { useState, useEffect } from "react";
import { X, Flame } from "lucide-react";
import { submitLead } from "@/lib/api";
import { toast } from "sonner";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", carModel: "", service: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => setVisible(true), 5000);
    const interval = setInterval(() => setVisible(true), 20000);
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLead("/api/submit-lead.php", { ...formData, source: "popup" });
    setSubmitting(false);
    if (res.success) {
      toast.success(res.message || "Thank you! We'll contact you shortly.");
      setFormData({ name: "", mobile: "", carModel: "", service: "" });
      setVisible(false);
    } else {
      toast.error(res.message || "Something went wrong.");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card rounded-2xl shadow-2xl border border-border w-full max-w-md p-6 animate-scale-in">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Flame className="w-5 h-5 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">Limited Time Offer</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-1">
          Get FREE AC Check-up!
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Book now & get a free AC diagnostic + 10% off your first service.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text" placeholder="Your Name" required
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="tel" placeholder="Mobile Number" required pattern="[0-9]{10}"
            value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="text" placeholder="Car Model (e.g. Honda City, Swift)" required
            value={formData.carModel} onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <select
            required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
          <button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
            {submitting ? "Submitting…" : "Claim Free AC Check →"}
          </button>
        </form>
        <p className="text-muted-foreground text-[11px] text-center mt-3">No spam. We call within 15 minutes.</p>
      </div>
    </div>
  );
}
