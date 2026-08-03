import type { Metadata } from "next";
import Image from "next/image";
import TechnologyCarousel from "@/components/home/technology-carousel";
import ServicesAccordion from "@/components/services/services-accordion";

export const metadata: Metadata = {
  title: "Servicios | Nexbloq",
  description:
    "Servicios de diseño y desarrollo web: landing pages, sitios corporativos, rediseño UX/UI, sistemas web, mantenimiento e infraestructura.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <section
        id="servicios"
        className="showcase-grid w-full max-w-7xl scroll-mt-17 rounded-xl bg-white px-5 py-16 sm:scroll-mt-19 sm:px-10 sm:py-20 lg:scroll-mt-24 lg:px-12 lg:py-24"
      >
        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Mis servicios
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold uppercase tracking-[-0.045em] sm:text-6xl">
            Soluciones digitales{" "}
            <span className="font-light italic">bien construidas.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
            Estrategia, diseño y desarrollo para transformar una necesidad de
            negocio en una experiencia web clara, funcional y preparada para
            crecer.
          </p>
        </div>

        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 relative mt-14 aspect-16/10 overflow-hidden rounded-2xl sm:aspect-16/7"
        >
          <Image
            src="/services/servicios.webp"
            alt="Proceso creativo de diseño y desarrollo web"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1180px"
            className="object-cover object-center"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10"
          />
        </div>

        <TechnologyCarousel />

        <blockquote className="mx-auto max-w-5xl py-16 text-center text-2xl font-semibold leading-tight tracking-tight sm:py-20 sm:text-4xl">
          “Priorizo la claridad, la confianza y la comunicación directa para
          construir soluciones que sean útiles hoy y sostenibles mañana.”
        </blockquote>

        <ServicesAccordion />
      </section>
    </div>
  );
}
