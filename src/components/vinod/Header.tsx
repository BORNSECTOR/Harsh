import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "@/assets/header-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={headerLogo} alt="VM Auto Care Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="font-heading font-bold text-base leading-tight text-foreground">VM Auto Care</h1>
              <p className="text-[11px] text-muted-foreground">Premium Auto Care</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Offer Marquee */}
      <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-sm font-medium">
              <span>🔧 FREE AC Check-up on Every Service</span>
              <span className="text-primary">★</span>
              <span>🎨 10% OFF Denting & Painting</span>
              <span className="text-primary">★</span>
              <span>🚗 Free Pickup & Drop</span>
              <span className="text-primary">★</span>
              <span>⚡ Same Day Delivery Available</span>
              <span className="text-primary">★</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
