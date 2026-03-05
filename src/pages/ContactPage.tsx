import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/vinod/Header";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { submitLead } from "@/lib/api";

type LeadForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<LeadForm>({
    name: "",
    email: "",
    phone: "",
    service: prefilledService,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: prefilledService }));
  }, [prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        ...formData,
        source: "Contact Page Form",
      });

      if (result?.success) {
        toast({
          title: "Inquiry submitted",
          description: "Thanks, we will contact you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: prefilledService,
          message: "",
        });
      } else {
        toast({
          title: "Submission failed",
          description: result?.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Unable to submit the form right now.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            Have questions or ready to book? Fill the form and our team will get back to you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
                <h3 className="font-heading font-bold text-lg text-foreground">Get In Touch</h3>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+91-98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">+91-98765 43210</p>
                  </div>
                </a>

                <a
                  href="mailto:service@vmautocare.com"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
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
                    <p className="text-muted-foreground text-sm">Mon - Sat: 9 AM - 7 PM</p>
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

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Interested Service</Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g. Ceramic Coating"
                    className={prefilledService ? "bg-primary/5 border-primary/30 font-medium" : ""}
                  />
                  {prefilledService && (
                    <p className="text-xs text-emerald-600">Service auto-selected from your previous click.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
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
