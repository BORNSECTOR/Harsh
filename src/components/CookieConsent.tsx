import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-fade-in">
      <div className="container mx-auto max-w-3xl bg-card border border-border rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-8 h-8 text-primary shrink-0 hidden sm:block" />
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium mb-1">We value your privacy 🍪</p>
          <p className="text-xs text-muted-foreground">
            We use cookies to enhance your experience, analyze traffic, and serve relevant content. By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button onClick={decline} className="px-4 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors">
            Decline
          </button>
          <button onClick={accept} className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
