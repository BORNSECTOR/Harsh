import { useState, useEffect } from "react";
import { Car } from "lucide-react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 800);
    const t2 = setTimeout(() => setVisible(false), 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="drive-car mb-4">
        <Car className="w-16 h-16 text-primary" />
      </div>
      <p className="text-secondary-foreground font-heading font-bold text-xl tracking-wider">
        VM AUTO CARE
      </p>
      <div className="mt-4 w-32 h-1 rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-[loading_1s_ease-in-out]" 
             style={{ animation: "loading 0.8s ease-out forwards" }} />
      </div>
      <style>{`
        @keyframes loading { from { width: 0; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
