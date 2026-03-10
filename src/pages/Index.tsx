import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import BentoGridSection from "@/components/BentoGridSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <BentoGridSection />
      <BeforeAfterSection />
    </div>
  );
};

export default Index;
