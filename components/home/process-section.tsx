import {
  Code2,
  Compass,
  Flag,
  Palette,
  Search,
  type LucideIcon,
} from "lucide-react";
import ProcessCard from "@/components/ui/cards/process-card";
import SectionHeading from "@/components/ui/section-heading";

interface ProcessStep {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: Search,
    image: "/services-images/sitios-corporativos.webp",
    title: "Descubrimiento",
    description: "Conversamos sobre tu negocio, objetivos, público y necesidades.",
  },
  {
    icon: Compass,
    image: "/services-images/landing-pages.webp",
    title: "Propuesta",
    description:
      "Defino el alcance, los entregables, las etapas y el plazo estimado.",
  },
  {
    icon: Palette,
    image: "/services-images/rediseno-web.webp",
    title: "Estructura y diseño",
    description:
      "Organizo el contenido y creo la propuesta visual para revisarla contigo.",
  },
  {
    icon: Code2,
    image: "/services-images/sistemas-web.webp",
    title: "Desarrollo y revisión",
    description:
      "Construyo la web, implemento sus funciones y realizo las pruebas necesarias.",
  },
  {
    icon: Flag,
    image: "/services-images/dominio-hosting.webp",
    title: "Publicación",
    description:
      "Configuro la versión final y entrego la información acordada.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-8 px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionHeading
        eyebrow="CÓMO TRABAJO"
        title="UN PROCESO CLARO HASTA"
        accent="LA PUBLICACIÓN."
        description="Antes de comenzar, definimos el alcance, el contenido, las funcionalidades y las responsabilidades de cada parte."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6">
        {steps.map((step, index) => (
          <ProcessCard
            key={step.title}
            {...step}
            number={String(index + 1).padStart(2, "0")}
            className={
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2"
            }
          />
        ))}
      </div>
    </section>
  );
}
