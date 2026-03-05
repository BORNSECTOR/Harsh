import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, Clock, Wrench, Shield } from "lucide-react";
import footerLogo from "@/assets/footer-logo.jpg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "General Service",
  "Denting & Painting",
  "AC Repair",
  "Engine Overhaul",
];

export default function MapFooter() {
  const ref = useRevealAnimation();

  return (
    <footer ref={ref} className="bg-secondary pt-12 pb-24 md:pb-8 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-8 border-b border-secondary-foreground/10">
          {/* Brand */}
          <div className="reveal-up space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={footerLogo} alt="VM Auto Care" className="w-14 h-14 object-contain rounded-lg" />
              <div>
                <span className="font-heading font-bold text-secondary-foreground text-lg">VM Auto Care</span>
                <p className="text-secondary-foreground/50 text-xs">Premium Auto Care</p>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Your trusted partner for all automobile needs. Quality service, genuine parts, and expert technicians.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-[#25D366] hover:text-card transition-colors text-secondary-foreground/60">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:+919876543210"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-secondary-foreground/60">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/vmautocare" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-secondary-foreground/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal-up space-y-4">
            <h3 className="font-heading font-bold text-secondary-foreground text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="reveal-up space-y-4">
            <h3 className="font-heading font-bold text-secondary-foreground text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                  <Wrench className="w-3.5 h-3.5 text-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="reveal-up space-y-4">
            <h3 className="font-heading font-bold text-secondary-foreground text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91-98765 43210
              </a>
              <a href="mailto:info@vmautocare.com" className="flex items-center gap-3 text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@vmautocare.com
              </a>
              <div className="flex items-center gap-3 text-secondary-foreground/60 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                Mon–Sat: 9 AM – 7 PM
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/60 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                Genuine Parts Guaranteed
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-secondary-foreground/40 text-xs text-center">
            © 2025 VM Auto Care. All rights reserved.
          </p>
          <p className="text-secondary-foreground/40 text-xs text-center">
            Designed with ❤️ for automobile excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
