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
          "relative overflow-hidden rounded-2xl bg-zinc-200 shadow-sm",
          project.featured ? "aspect-16/10" : "aspect-16/10",
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

        <div className="absolute right-5 bottom-5 flex items-center gap-2 text-sm font-semibold uppercase bg-indigo-500 px-2 py-1 rounded-full text-white drop-shadow-md">
          <span className="size-2 rounded-full bg-white" />
          {project.category}
        </div>

        <span className="absolute right-5 top-5 flex size-12 xl:size-16 items-center justify-center rounded-full bg-indigo-500 text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight aria-hidden="true" className="size-6 xl:size-8" />
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
