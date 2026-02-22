import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import PartnerLogos from "./components/home/PartnerLogos";
import ServicesSection from "./components/home/ServicesSection";
import BenefitsSection from "./components/home/BenefitsSection";
import JobsTalentsSection from "./components/home/JobsTalentsSection";
import ProcessSection from "./components/home/ProcessSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CTASection from "./components/home/CTASection";
import FAQSection from "./components/home/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PartnerLogos />
        <ServicesSection />
        <BenefitsSection />
        <JobsTalentsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
