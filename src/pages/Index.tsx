import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const DoctorSection = lazy(() => import("@/components/DoctorSection"));
const BentoGridSection = lazy(() => import("@/components/BentoGridSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const GalleryCarouselSection = lazy(() => import("@/components/GalleryCarouselSection"));
const CTABookingSection = lazy(() => import("@/components/CTABookingSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const SectionFallback = () => (
  <div className="min-h-[40vh]" />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <ExitIntentPopup />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DoctorSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BentoGridSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BeforeAfterSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GalleryCarouselSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTABookingSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
