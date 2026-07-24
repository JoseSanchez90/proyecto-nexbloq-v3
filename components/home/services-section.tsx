import {
  Gauge,
  Globe2,
  LayoutDashboard,
  PanelsTopLeft,
  Rocket,
  Wrench,
} from "lucide-react";
import ServiceCard from "@/components/ui/cards/service-card";
import SectionHeading from "@/components/ui/section-heading";

const services = [
  {
    icon: Rocket,
    image: "/services-images/landing-pages.webp",
    title: "Landing pages",
    description:
      "Páginas enfocadas en presentar un servicio o campaña con claridad y facilitar nuevas consultas.",
  },
  {
    icon: PanelsTopLeft,
    image: "/services-images/sitios-corporativos.webp",
    title: "Sitios corporativos",
    description:
      "Webs con varias secciones para organizar servicios, proyectos e información importante del negocio.",
  },
  {
    icon: Gauge,
    image: "/services-images/rediseno-web.webp",
    title: "Rediseño web",
    description:
      "Modernización de páginas con problemas de navegación, rendimiento o adaptación a dispositivos móviles.",
  },
  {
    icon: LayoutDashboard,
    image: "/services-images/sistemas-web.webp",
    title: "Sistemas web",
    description:
      "Paneles y aplicaciones internas para centralizar información y ordenar procesos repetitivos.",
  },
  {
    icon: Wrench,
    image: "/services-images/mantenimiento.webp",
    title: "Mantenimiento",
    description:
      "Actualizaciones, corrección de errores y mejoras técnicas según las condiciones del servicio contratado.",
  },
  {
    icon: Globe2,
    image: "/services-images/dominio-hosting.webp",
    title: "Dominio y hosting",
    description:
      "Acompañamiento para configurar dominio, alojamiento, SSL y correo corporativo.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="scroll-mt-8 px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionHeading
        eyebrow="SERVICIOS"
        title="SOLUCIONES PARA CADA"
        accent="ETAPA DE TU NEGOCIO."
        description="Puedo crear una página desde cero, renovar una web existente o desarrollar una solución personalizada para organizar procesos concretos."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
