import { Home, Wrench, MapPin, Phone, MessageCircle } from "lucide-react";

export default function FloatingElements() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMap = () => {
    document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop FABs */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        <a
          href="tel:+919876543210"
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity animate-pulse-glow"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-success text-card flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
        <div className="flex items-center justify-around py-2">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center gap-0.5 py-1 px-3">
            <Home className="w-5 h-5 text-primary" />
            <span className="text-[10px] text-primary font-semibold">Home</span>
          </button>
          <button onClick={scrollToServices} className="flex flex-col items-center gap-0.5 py-1 px-3">
            <Wrench className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">Services</span>
          </button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center -mt-5">
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg border-4 border-card">
              <MessageCircle className="w-7 h-7 text-card" />
            </div>
          </a>
          <button onClick={scrollToMap} className="flex flex-col items-center gap-0.5 py-1 px-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">Locate</span>
          </button>
          <a href="tel:+919876543210" className="flex flex-col items-center gap-0.5 py-1 px-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">Call</span>
          </a>
        </div>
      </nav>
    </>
  );
}
