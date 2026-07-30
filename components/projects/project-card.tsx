import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group grid cursor-pointer gap-2",
        project.featured && "sm:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-zinc-200",
          project.featured
            ? "aspect-16/10 sm:aspect-[16/6.2]"
            : "aspect-16/10",
        )}
      >
        <Image
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          fill
          sizes={
            project.featured
              ? "(max-width: 640px) 100vw, 1280px"
              : "(max-width: 640px) 100vw, 620px"
          }
          className="object-cover object-top"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black/80 via-black/20 to-transparent"
        />

        <div className="absolute left-5 top-5 flex items-center gap-2 text-sm font-semibold uppercase text-white drop-shadow-sm">
          <span className="size-2 rounded-full bg-white" />
          {project.category}
        </div>

        <span className="absolute right-5 top-5 flex size-16 items-center justify-center rounded-full bg-white text-indigo-600 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight aria-hidden="true" className="size-8" />
        </span>
      </div>

      <div className="flex min-h-18 items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 transition-colors duration-300 group-hover:bg-indigo-600 sm:px-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.04em] text-zinc-950 transition-colors duration-300 group-hover:text-white sm:text-lg">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-zinc-950 transition-colors duration-300 group-hover:text-white sm:text-lg">
          {project.year}
        </p>
      </div>
    </article>
  );
}
