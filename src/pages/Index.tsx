import LoadingScreen from "@/components/vinod/LoadingScreen";
import Header from "@/components/vinod/Header";
import HeroSection from "@/components/vinod/HeroSection";
import Services from "@/components/vinod/Services";
import ContentCards from "@/components/vinod/ContentCards";
import LeadCapture from "@/components/vinod/LeadCapture";
import MapFooter from "@/components/vinod/MapFooter";
import FloatingElements from "@/components/vinod/FloatingElements";
import LeadPopup from "@/components/vinod/LeadPopup";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <Services />
        <ContentCards />
        <LeadCapture />
        <MapFooter />
      </main>
      <FloatingElements />
      <LeadPopup />
    </div>
  );
};

export default Index;
