import type { Metadata } from "next";
import Image from "next/image";
import {
  FolderOpenDot,
  MessagesSquare,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import AboutFaq from "@/components/about/about-faq";
import ValuesShowcase from "@/components/about/values-showcase";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import JsonLd from "@/components/seo/json-ld";
import {
  absoluteUrl,
  createBreadcrumbStructuredData,
  createPageMetadata,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Desarrollador web en Lima: sobre Nexbloq",
  description:
    "Conoce a José, desarrollador web detrás de Nexbloq en Lima, y su enfoque para crear páginas, interfaces y sistemas web a medida para negocios.",
  path: "/sobre-mi",
  keywords: [
    "desarrollador web freelance Lima",
    "programador web Perú",
    "diseñador y desarrollador web",
  ],
});

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "Sobre Nexbloq y su desarrollador web",
      description:
        "Conoce a José, desarrollador web detrás de Nexbloq en Lima, Perú.",
      url: absoluteUrl("/sobre-mi"),
      inLanguage: siteConfig.language,
      mainEntity: { "@id": `${siteConfig.url}/#founder` },
    },
    createBreadcrumbStructuredData([
      { name: "Inicio", path: "/" },
      { name: "Sobre mí", path: "/sobre-mi" },
    ]),
  ],
};

const metrics = [
  {
    icon: FolderOpenDot,
    value: "100%",
    label: "Personalizado",
    title: "Cada proyecto comienza desde su contexto",
    text: "No trabajo con soluciones genéricas: la estructura y el diseño responden a necesidades reales.",
    rotation: "lg:-rotate-2",
  },
  {
    icon: Workflow,
    value: "5",
    label: "Etapas claras",
    title: "Un proceso visible de principio a fin",
    text: "Diagnóstico, dirección, diseño, desarrollo y entrega con revisiones en los momentos adecuados.",
    rotation: "lg:rotate-2",
  },
  {
    icon: MessagesSquare,
    value: "1 a 1",
    label: "Contacto directo",
    title: "Comunicación sin intermediarios",
    text: "Conversamos directamente para conservar el contexto y resolver decisiones con mayor agilidad.",
    rotation: "lg:-rotate-1",
  },
  {
    icon: MonitorSmartphone,
    value: "Multi",
    label: "Dispositivo",
    title: "Experiencias preparadas para cada pantalla",
    text: "Cada interfaz se adapta a celulares, tablets, laptops y computadoras desde el inicio.",
    rotation: "lg:rotate-2",
  },
];

const testimonials = [
  {
    quote:
      "El proceso fue ordenado desde la primera conversación. Cada decisión tenía una razón y siempre supe en qué etapa se encontraba el proyecto.",
    name: "María T.",
    role: "Plataforma de logística",
  },
  {
    quote:
      "Nexbloq entendió lo que necesitaba el negocio y lo convirtió en una experiencia clara, moderna y mucho más fácil de presentar.",
    name: "Alexis T.",
    role: "Sitio web corporativo",
  },
  {
    quote:
      "La comunicación directa hizo una gran diferencia. Las ideas se transformaron rápidamente en una solución coherente y bien ejecutada.",
    name: "Carlos R.",
    role: "Gestión de buses",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <JsonLd data={aboutStructuredData} />
      <section
        id="sobre-mi"
        className="showcase-grid w-full max-w-7xl scroll-mt-17 overflow-hidden rounded-xl bg-white px-5 py-16 sm:scroll-mt-19 sm:px-10 sm:py-20 lg:scroll-mt-24 lg:px-12 lg:py-24"
      >
        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Sobre Nexbloq
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            Desarrollo con visión,
            <br />
            crecimiento con{" "}
            <span className="font-light italic">propósito.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
            Soy José, desarrollador detrás de Nexbloq. Combino estrategia,
            diseño y tecnología para crear soluciones web claras, útiles y
            preparadas para acompañar el crecimiento de cada negocio.
          </p>
          <ButtonPrimary
            text="Explorar servicios"
            href="/#servicios"
            size="sm"
            className="mt-7"
          />
        </div>

        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 mt-14 grid items-stretch gap-6 md:grid-cols-[0.62fr_1.8fr_0.62fr]"
        >
          <div className="relative hidden min-h-80 overflow-hidden rounded-2xl md:block">
            <Image
              src="/about/izquierda.webp"
              alt="Diseño visual de una experiencia digital"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-80 sm:min-h-112">
            <div className="absolute inset-2 overflow-hidden rounded-xl">
              <Image
                src="/about/centro.webp"
                alt="Proceso de estrategia y diseño de Nexbloq"
                fill
                priority
                sizes="(max-width: 639px) 100vw, 760px"
                className="object-cover object-top"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10"
            >
              <span className="absolute -left-1 -top-1 h-[15%] w-[12%] rounded-tl-xl border-l-3 border-t-3 border-indigo-600" />
              <span className="absolute -right-1 -top-1 h-[15%] w-[12%] rounded-tr-xl border-r-3 border-t-3 border-indigo-600" />
              <span className="absolute -bottom-1 -left-1 h-[15%] w-[12%] rounded-bl-xl border-b-3 border-l-3 border-indigo-600" />
              <span className="absolute -bottom-1 -right-1 h-[15%] w-[12%] rounded-br-xl border-b-3 border-r-3 border-indigo-600" />
            </div>
          </div>
          <div className="relative hidden min-h-80 overflow-hidden rounded-2xl md:block">
            <Image
              src="/about/derecha.webp"
              alt="Desarrollo de soluciones digitales"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl py-24 sm:py-32">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between px-4">
          <div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-indigo-600" />
              <p className="text-base font-semibold uppercase tracking-[0.12em]">
                Sobre mí
              </p>
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
              Una colaboración cercana para convertir ideas en{" "}
              <span className="font-light italic">soluciones reales.</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {metrics.map(({ icon: Icon, rotation, ...metric }) => (
            <article
              key={metric.label}
              className={`group relative isolate flex min-h-96 flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 ${rotation}`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 h-0 rounded-b-2xl bg-indigo-600 transition-[height] duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:h-full motion-reduce:transition-none"
              />

              <div className="relative z-10 flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-white">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <p className="text-3xl font-bold leading-none tracking-tight transition-all duration-300 group-hover:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 transition-all duration-300 group-hover:text-white/70">
                    {metric.label}
                  </p>
                </div>
              </div>
              <div className="relative z-10 mt-14 border-t border-zinc-200 pt-6 transition-all duration-300 group-hover:border-white/25">
                <h3 className="text-xl font-semibold leading-tight transition-all duration-300 group-hover:text-white">
                  {metric.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500 transition-all duration-300 group-hover:text-white/70">
                  {metric.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-grid w-full max-w-7xl rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Mis valores
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-5xl">
            Principios que guían{" "}
            <span className="font-light italic">cada proyecto.</span>
          </h2>
        </div>
        <ValuesShowcase />
      </section>

      <section className="w-full max-w-7xl py-24 sm:py-32">
        <div className="grid gap-7 md:grid-cols-[1fr_0.6fr] md:items-end px-4">
          <div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-indigo-600" />
              <p className="text-base font-semibold uppercase tracking-[0.12em]">
                Testimonios
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-5xl">
              La experiencia en{" "}
              <span className="font-light italic">sus palabras.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-zinc-500 md:justify-self-end">
            Relaciones de trabajo construidas con claridad, comunicación directa
            y atención a cada detalle.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex min-h-80 flex-col justify-between rounded-2xl bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-indigo-600 sm:p-8 md:last:col-span-2 lg:last:col-span-1"
            >
              <blockquote className="text-lg font-semibold leading-8 tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-10 flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/70">
                    {testimonial.role}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full bg-indigo-600 text-2xl font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white group-hover:text-indigo-600"
                >
                  ”
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-grid w-full max-w-7xl rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-indigo-600" />
              <p className="text-base font-semibold uppercase tracking-[0.12em]">
                FAQ
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
              Preguntas antes de{" "}
              <span className="font-light italic">trabajar juntos.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-zinc-500 md:justify-self-end">
            Una introducción rápida a mi forma de colaborar y desarrollar cada
            proyecto.
          </p>
        </div>
        <AboutFaq />
      </section>
    </div>
  );
}
