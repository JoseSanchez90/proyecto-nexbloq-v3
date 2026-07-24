import ButtonPrimary from "@/components/ui/buttons/button-primary";
import Carousel from "@/components/ui/carousel";

const projectImages = [
  {
    src: "/projects-images/FreightFlow-CRM-de-Transporte.webp",
    alt: "Panel principal del sistema FreightFlow",
  },
  {
    src: "/projects-images/FreightFlow-CRM-de-Transporte-2.webp",
    alt: "Módulo de ventas del sistema FreightFlow",
  },
  {
    src: "/projects-images/FreightFlow-CRM-de-Transporte-3.webp",
    alt: "Vista logística del sistema FreightFlow",
  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate mt-4 w-full max-w-7xl scroll-mt-6 overflow-hidden rounded-2xl bg-white pb-14 pt-16 sm:mt-10 sm:pb-20 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="showcase-grid pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-5">
        <h1 className="bg-white px-4 text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[3.3rem] lg:leading-16">
          TU NEGOCIO MERECE
          <br className="hidden sm:block" /> UNA WEB A SU{" "}
          <span className="font-light italic">ALTURA.</span>
        </h1>

        <p className="max-w-2xl bg-white px-4 text-center text-base leading-7 text-gray-500 sm:text-lg">
          Diseño y desarrollo páginas web modernas, rápidas y pensadas para
          presentar mejor tu negocio, generar confianza y facilitar nuevas
          oportunidades.
        </p>

        <ButtonPrimary
          text="Ver proyectos"
          href="#proyectos"
          size="sm"
          className="mt-2 sm:mt-4"
        />
      </div>

      <div className="relative z-10 mt-16 flex flex-col gap-8 overflow-hidden sm:mt-24">
        <Carousel images={projectImages} direction="right" speed={30} />
        <Carousel images={projectImages} direction="left" speed={30} />
      </div>
    </section>
  );
}
