import BrowserPreviewCard from "@/components/ui/cards/browser-preview-card";
import SectionHeading from "@/components/ui/section-heading";

const projects = [
  {
    image: "/projects-images/FreightFlow-CRM-de-Transporte.webp",
    title: "FreightFlow CRM",
    category: "Sistema web",
    description:
      "Sistema creado para centralizar información operativa y facilitar el seguimiento de unidades de una empresa de transporte.",
  },
  {
    image: "/projects-images/FreightFlow-CRM-de-Transporte-2.webp",
    title: "Panel operativo FreightFlow",
    category: "Gestión comercial",
    description:
      "Vista administrativa del mismo proyecto, organizada para consultar ventas, indicadores y estados operativos con claridad.",
  },
  {
    image: "/projects-images/concepto-desarrollo-web.webp",
    title: "Landing page profesional",
    category: "Concepto de servicio",
    description:
      "Referencia visual de una página enfocada en presentar una propuesta de valor clara y convertir visitas en oportunidades.",
  },
  {
    image: "/projects-images/concepto-diseno-ux.webp",
    title: "Experiencia UX/UI",
    category: "Concepto de servicio",
    description:
      "Concepto visual para procesos de diseño que priorizan una navegación intuitiva, ordenada y fácil de utilizar.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-8 px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionHeading
        title="SOLUCIONES PARA"
        accent="NECESIDADES REALES."
        description="Cada proyecto responde a objetivos y procesos diferentes. Aquí puedes ver trabajos desarrollados y conceptos visuales que muestran distintas posibilidades para tu negocio."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
        {projects.map((project) => (
          <BrowserPreviewCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
