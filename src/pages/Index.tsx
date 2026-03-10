import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import BentoGridSection from "@/components/BentoGridSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GalleryCarouselSection from "@/components/GalleryCarouselSection";
import CTABookingSection from "@/components/CTABookingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <BentoGridSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FAQSection />
      <GalleryCarouselSection />
      <CTABookingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
