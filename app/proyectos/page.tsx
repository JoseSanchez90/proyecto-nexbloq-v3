import type { Metadata } from "next";
import FaqSection from "@/components/home/faq-section";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos | Nexbloq",
  description:
    "Explora los proyectos de diseño y desarrollo web creados por Nexbloq para negocios, profesionales y equipos.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4">
      <section
        id="proyectos"
        className="showcase-grid flex min-h-96 w-full max-w-7xl scroll-mt-17 flex-col items-center justify-center rounded-xl bg-white px-5 py-16 text-center sm:scroll-mt-19 sm:px-10 sm:py-20 lg:scroll-mt-24 lg:px-12"
      >
        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5"
        >
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <p className="text-base font-semibold uppercase tracking-[0.12em]">
            Mis proyectos
          </p>
        </div>
        <h1
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 mt-7 text-4xl font-semibold uppercase tracking-[-0.045em] sm:text-6xl"
        >
          Trabajo que convierte ideas
          <br />
          en <span className="font-light italic">experiencias reales.</span>
        </h1>
        <p
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-2 mt-6 max-w-2xl text-base leading-7 text-zinc-500"
        >
          Una selección completa de interfaces, sitios y sistemas desarrollados
          para comunicar mejor, organizar procesos y hacer crecer negocios.
        </p>
      </section>

      <section
        aria-label="Todos los proyectos"
        className="w-full max-w-7xl py-24 sm:py-32"
      >
        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <FaqSection />
    </div>
  );
}
