import Image from "next/image";
import Link from "next/link";
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
        project.featured && "sm:col-span-2",
      )}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        aria-label={`Ver detalles del proyecto ${project.title}`}
        className="group grid cursor-pointer gap-2 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
      >
        <div
          className={cn(
            "relative aspect-16/10 overflow-hidden rounded-2xl bg-zinc-200 shadow-sm",
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
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          <div className="absolute right-5 bottom-5 flex items-center gap-2 rounded-full bg-indigo-500 px-2 py-1 text-sm font-semibold uppercase text-white drop-shadow-md">
            <span className="size-2 rounded-full bg-white" />
            {project.category}
          </div>

          <span className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-indigo-500 text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 xl:size-16">
            <ArrowUpRight aria-hidden="true" className="size-6 xl:size-8" />
          </span>
        </div>

        <div className="flex min-h-18 items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 transition-colors duration-300 group-hover:bg-indigo-600 group-focus-visible:bg-indigo-600 sm:px-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.04em] text-zinc-950 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-lg">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-zinc-950 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-lg">
            {project.year}
          </p>
        </div>
      </Link>
    </article>
  );
}
