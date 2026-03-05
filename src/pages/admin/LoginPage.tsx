import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import vinodLogo from "@/assets/vinod-logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/admin-login.php`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.success) {
          sessionStorage.setItem("admin_token", data.token || "authenticated");
          navigate("/admin");
        } else {
          setError(data.message || "Invalid credentials");
        }
      } else {
        // Demo mode — no backend connected
        sessionStorage.setItem("admin_token", "demo");
        navigate("/admin");
      }
    } catch {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={vinodLogo} alt="Vinod Motors" className="h-16 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-2xl text-secondary-foreground">Admin Panel</h1>
          <p className="text-secondary-foreground/60 text-sm mt-1">Sign in to manage your website</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">Secure Login</span>
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive text-sm rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vmautocare.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>
        </div>

        <p className="text-center text-secondary-foreground/40 text-xs mt-6">
          © {new Date().getFullYear()} Vinod Motors. All rights reserved.
        </p>
      </div>
    </div>
  );
}
