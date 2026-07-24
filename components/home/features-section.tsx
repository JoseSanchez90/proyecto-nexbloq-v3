import FeatureCard from "@/components/ui/cards/feature-card";

const projectImages = [
  "/projects-images/FreightFlow-CRM-de-Transporte.webp",
  "/projects-images/FreightFlow-CRM-de-Transporte-2.webp",
  "/projects-images/FreightFlow-CRM-de-Transporte-3.webp",
];

const features = [
  {
    title: "Diseño personalizado",
    description:
      "Cada interfaz se adapta a la identidad, las necesidades y el público de tu negocio.",
    images: projectImages,
    variant: "collage" as const,
  },
  {
    title: "Buen rendimiento",
    description:
      "Desarrollo sitios optimizados para ofrecer una navegación rápida, clara y fluida.",
    images: [projectImages[1], projectImages[2], projectImages[0]],
    variant: "stack" as const,
  },
  {
    title: "Adaptación móvil",
    description:
      "La experiencia funciona correctamente en celulares, tablets y computadoras.",
    images: [projectImages[2], projectImages[0], projectImages[1]],
    variant: "spotlight" as const,
  },
];

export default function FeaturesSection() {
  return (
    <section id="beneficios" className="w-full scroll-mt-8 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            SOLUCIONES DIGITALES{" "}
            <span className="font-light italic">BIEN CONSTRUIDAS.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
