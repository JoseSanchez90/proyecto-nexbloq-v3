import ButtonPrimary from "@/components/ui/buttons/button-primary";
import HeroShowcaseSlider from "@/components/home/hero-showcase-slider";

const showcaseImages = [
  {
    src: "/home/pag11.png",
    alt: "Vista previa de proyecto web de Nexbloq",
  },
  {
    src: "/home/pag2.png",
    alt: "Interfaz de proyecto digital desarrollado por Nexbloq",
  },
  {
    src: "/home/pag33.png",
    alt: "Diseño de página web creado por Nexbloq",
  },
  {
    src: "/home/pag4.png",
    alt: "Muestra de experiencia web diseñada por Nexbloq",
  },
] satisfies [
  { src: string; alt: string },
  { src: string; alt: string },
  { src: string; alt: string },
  { src: string; alt: string },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="showcase-grid relative isolate w-full max-w-7xl scroll-mt-17 overflow-hidden rounded-xl bg-white py-16 sm:scroll-mt-19 lg:scroll-mt-24"
    >
      <div
        data-scroll-reveal-ignore
        className="page-intro-reveal relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <p className="text-base font-semibold uppercase tracking-[0.12em]">
            Desarrollo web
          </p>
        </div>

        <h1 className="mt-7 bg-white px-3 text-3xl font-semibold leading-[1.10] tracking-[-0.04em] sm:text-4xl lg:text-6xl">
          TU NEGOCIO MERECE
          <br /> UNA WEB A SU <span className="font-light italic">ALTURA.</span>
        </h1>
      </div>

      <div
        data-scroll-reveal-ignore
        className="page-intro-reveal page-intro-delay-1 relative z-10 mt-11"
      >
        <HeroShowcaseSlider images={showcaseImages} />
      </div>

      <div
        data-scroll-reveal-ignore
        className="page-intro-reveal page-intro-delay-2 relative z-10 mx-auto mt-8 flex max-w-xl flex-col items-center px-5 text-center"
      >
        <p className="text-base leading-6 text-zinc-500 sm:text-sm">
          Diseño y desarrollo páginas web modernas, rápidas y pensadas para
          presentar mejor tu negocio y generar confianza.
        </p>
        <ButtonPrimary
          text="Explorar servicios"
          href="#servicios"
          size="sm"
          className="mt-5"
        />
      </div>
    </section>
  );
}
