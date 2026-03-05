import { useState } from "react";
import { Phone, Mail, Clock, MapPin, MessageCircle, Flame } from "lucide-react";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";
import { submitLead } from "@/lib/api";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", mobile: "", carModel: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLead("/api/submit-contact.php", formData);
    setSubmitting(false);
    if (res.success) {
      toast.success(res.message || "Thank you! We'll contact you shortly.");
      setFormData({ name: "", mobile: "", carModel: "", service: "", message: "" });
    } else {
      toast.error(res.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Get in touch with us for any queries or to book a service.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
                <h3 className="font-heading font-bold text-lg text-foreground">Get In Touch</h3>
                <a href="tel:+919876543210" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+91-98765 43210</p>
                  </div>
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">+91-98765 43210</p>
                  </div>
                </a>
                <a href="mailto:service@vmautocare.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">service@vmautocare.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Working Hours</p>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 9 AM – 7 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative bg-card rounded-2xl border border-border p-6">
              <div className="absolute -top-3 right-4 bg-warning text-card px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Flame className="w-3 h-3" /> Free AC Check
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <textarea
                  placeholder="Your Message (optional)" rows={3}
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
                />
                <button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <MapFooter />
      <FloatingElements />
    </div>
  );
}
