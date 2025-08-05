import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseSection } from "@/components/ui/why-choose-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { LawyerProfileSection } from "@/components/ui/lawyer-profile-section";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <LawyerProfileSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
