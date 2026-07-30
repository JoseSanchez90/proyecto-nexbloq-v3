import ProjectCard from "@/components/projects/project-card";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section
      id="proyectos"
      className="w-full max-w-7xl scroll-mt-24 px-4 py-24 sm:px-0 sm:py-32"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-3.5 py-1.5">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <p className="text-base font-semibold uppercase tracking-[0.12em]">
            Proyectos
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          PROYECTOS <span className="font-light italic">DESTACADOS.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-8 lg:mt-16">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonPrimary
          text="Ver todos los proyectos"
          href="/proyectos"
          size="sm"
          font="semibold"
        />
      </div>
    </section>
  );
}
