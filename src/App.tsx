import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./pages/admin/Dashboard";
import AdminOffersPage from "./pages/admin/OffersPage";
import CombosPage from "./pages/admin/CombosPage";
import AdminServicesPage from "./pages/admin/ServicesPage";

import PartnersPage from "./pages/admin/PartnersPage";
import LeadsPage from "./pages/admin/LeadsPage";
import LoginPage from "./pages/admin/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="offers" element={<AdminOffersPage />} />
            <Route path="combos" element={<CombosPage />} />
            <Route path="services" element={<AdminServicesPage />} />
            
            <Route path="partners" element={<PartnersPage />} />
            <Route path="leads" element={<LeadsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
