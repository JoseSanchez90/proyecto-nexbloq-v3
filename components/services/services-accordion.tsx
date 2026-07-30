"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

const services = [
  {
    title: "Landing pages",
    description:
      "Páginas enfocadas en presentar una oferta con claridad y convertir visitas en consultas, registros o ventas.",
    tags: ["Contenido estratégico", "Responsive", "Conversión"],
    image: "/services-images/landing-pages.webp",
    imageAlt: "Diseño de una landing page profesional",
  },
  {
    title: "Sitios corporativos",
    description:
      "Presencias digitales completas para comunicar la propuesta, los servicios y la confianza de una empresa.",
    tags: ["Arquitectura web", "SEO técnico", "Identidad digital"],
    image: "/services-images/sitios-corporativos.webp",
    imageAlt: "Sitio web corporativo desarrollado por Nexbloq",
  },
  {
    title: "Rediseño UX/UI",
    description:
      "Revisión y mejora de interfaces existentes para hacerlas más claras, actuales, rápidas y fáciles de utilizar.",
    tags: ["Diagnóstico UX", "Interfaz visual", "Prototipado"],
    image: "/services-images/rediseno-web.webp",
    imageAlt: "Proceso de rediseño de una experiencia web",
  },
  {
    title: "Sistemas web",
    description:
      "Herramientas digitales a medida para centralizar información, organizar tareas y simplificar procesos internos.",
    tags: ["Paneles", "Automatización", "Base de datos"],
    image: "/services-images/sistemas-web.webp",
    imageAlt: "Sistema web personalizado para una empresa",
  },
  {
    title: "Mantenimiento",
    description:
      "Acompañamiento técnico para mantener el sitio actualizado, estable, seguro y preparado para seguir creciendo.",
    tags: ["Actualizaciones", "Soporte", "Mejora continua"],
    image: "/services-images/mantenimiento.webp",
    imageAlt: "Mantenimiento técnico de una plataforma web",
  },
  {
    title: "Dominio, hosting y correo",
    description:
      "Configuración de la infraestructura esencial para publicar el proyecto y operar con una presencia profesional.",
    tags: ["Dominio y DNS", "Alojamiento", "Correo corporativo"],
    image: "/services-images/dominio-hosting.webp",
    imageAlt: "Infraestructura de dominio y alojamiento web",
  },
];

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="mt-14 border-t border-zinc-200"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {services.map((service, index) => {
        const isActive = activeIndex === index;
        const contentId = `service-content-${index}`;

        return (
          <article
            key={service.title}
            onMouseEnter={() => setActiveIndex(index)}
            className="border-b border-zinc-200"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isActive ? null : index)}
              onFocus={() => setActiveIndex(index)}
              aria-expanded={isActive}
              aria-controls={contentId}
              className="group flex min-h-24 w-full items-center gap-6 py-5 text-left sm:gap-8"
            >
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-100 text-zinc-600 group-hover:bg-indigo-600 group-hover:text-white"
                }`}
              >
                {isActive ? (
                  <Minus aria-hidden="true" className="size-4" />
                ) : (
                  <Plus aria-hidden="true" className="size-4" />
                )}
              </span>
              <h2
                className={`text-xl font-semibold tracking-tight transition-colors duration-300 sm:text-5xl ${
                  isActive
                    ? "text-indigo-600"
                    : "text-zinc-900 group-hover:text-indigo-600"
                }`}
              >
                {service.title}
              </h2>
            </button>

            <div
              id={contentId}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-7 pb-8 pl-0 sm:pl-18 lg:grid-cols-[1fr_20rem] lg:items-start">
                  <div>
                    <p className="max-w-xl text-base leading-7 text-zinc-500">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-zinc-700"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-100">
                    <Image
                      key={service.image}
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 320px"
                      className="service-preview-image object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
