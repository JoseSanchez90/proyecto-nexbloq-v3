import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import FeaturesSection from "@/components/home/features-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ProjectsSection from "@/components/home/projects-section";
import ServicesSection from "@/components/home/services-section";
import TechnologyCarousel from "@/components/home/technology-carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-100">
      <HeroSection />
      <FeaturesSection />
      <TechnologyCarousel />

      <div className="showcase-grid w-full max-w-7xl overflow-hidden rounded-2xl bg-white">
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <FaqSection />
      </div>

      <ContactSection />
    </div>
  );
}
