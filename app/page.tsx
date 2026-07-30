import AboutSection from "@/components/home/about-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ProjectsSection from "@/components/home/projects-section";
import ServicesSection from "@/components/home/services-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-100 px-4">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <FaqSection />
    </div>
  );
}
