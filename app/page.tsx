import type { Metadata } from "next";
import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import JsonLd from "@/components/seo/json-ld";
import { createHomeStructuredData, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Desarrollador web en Lima, Perú",
  description:
    "Desarrollo páginas web, landing pages, sitios corporativos y sistemas web personalizados para empresas y profesionales en Lima y todo el Perú.",
  path: "/",
  keywords: [
    "desarrollador web Lima",
    "desarrollo web Perú",
    "páginas web para empresas",
    "sistemas web personalizados",
  ],
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-100 px-4">
      <JsonLd data={createHomeStructuredData()} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}
