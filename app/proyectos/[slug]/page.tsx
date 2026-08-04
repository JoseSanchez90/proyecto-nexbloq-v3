import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProjectOverviewTabs from "@/components/projects/project-overview-tabs";
import JsonLd from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";
import { getProjectBySlug, projects } from "@/lib/projects";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import {
  absoluteUrl,
  createBreadcrumbStructuredData,
  createPageMetadata,
  siteConfig,
} from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const galleryLayouts = [
  "aspect-4/3 lg:col-start-1 lg:row-start-1 lg:aspect-square",
  "aspect-4/3 lg:col-start-1 lg:row-start-2 lg:aspect-square",
  "aspect-4/3 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
  "aspect-4/3 lg:col-start-3 lg:row-start-1 lg:aspect-square",
  "aspect-4/3 sm:col-span-2 sm:aspect-video lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:aspect-square",
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return createPageMetadata({
    title: `${project.title}: proyecto de ${project.category.toLowerCase()}`,
    description: project.introduction,
    path: `/proyectos/${project.slug}`,
    keywords: [
      project.title,
      project.category,
      ...project.services,
      ...project.tools,
    ],
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const overviewDescriptions = [
    project.overview,
    project.solution,
    project.result,
  ];

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(`/proyectos/${project.slug}`)}#project`,
        name: project.title,
        headline: `${project.title}, proyecto de ${project.category.toLowerCase()}`,
        description: project.introduction,
        url: absoluteUrl(`/proyectos/${project.slug}`),
        image: [project.image, ...project.gallery].map(absoluteUrl),
        dateCreated: project.year,
        inLanguage: siteConfig.language,
        keywords: [...project.services, ...project.tools].join(", "),
        creator: {
          "@id": `${siteConfig.url}/#organization`,
          "@type": "Organization",
          name: siteConfig.name,
        },
        isPartOf: {
          "@type": "CollectionPage",
          name: "Proyectos de Nexbloq",
          url: absoluteUrl("/proyectos"),
        },
        ...(project.demo ? { sameAs: project.demo } : {}),
      },
      createBreadcrumbStructuredData([
        { name: "Inicio", path: "/" },
        { name: "Proyectos", path: "/proyectos" },
        { name: project.title, path: `/proyectos/${project.slug}` },
      ]),
    ],
  };

  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <JsonLd data={projectStructuredData} />
      <article className="showcase-grid w-full max-w-7xl rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <header
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <Link
            href="/proyectos"
            className="mb-10 inline-flex self-start items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver a proyectos
          </Link>

          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.12em] sm:text-base">
              {project.category}
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold uppercase tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7 lg:text-lg">
            {project.introduction}
          </p>
        </header>

        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 relative mt-12 aspect-4/3 overflow-hidden rounded-2xl bg-zinc-200 sm:mt-16 sm:aspect-16/10 lg:aspect-16/7"
        >
          <Image
            src={project.image}
            alt={"Vista principal del proyecto " + project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1180px"
            className="object-cover object-top"
          />
        </div>

        <dl className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div className="p-5 sm:p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Cliente
            </dt>
            <dd className="mt-2 text-sm font-medium text-zinc-950 sm:text-base">
              {project.client}
            </dd>
          </div>
          <div className="p-5 sm:p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Fecha
            </dt>
            <dd className="mt-2 text-sm font-medium text-zinc-950 sm:text-base">
              {project.date}
            </dd>
          </div>
          <div className="p-5 sm:p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Servicio
            </dt>
            <dd className="mt-2 text-sm font-medium text-zinc-950 sm:text-base">
              {project.category}
            </dd>
          </div>
          <div className="p-5 sm:p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Herramientas
            </dt>
            <dd className="mt-2 text-sm font-medium text-zinc-950 sm:text-base">
              {project.tools.join(", ")}
            </dd>
          </div>
          <div className="p-5 sm:p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Demo
            </dt>
            <ButtonPrimary
              href={project.demo}
              target="_blank"
              rel="noopener"
              size="xs"
              text="Visistar Sitio"
              className="mt-2"
            />
          </div>
        </dl>

        <ProjectOverviewTabs
          options={project.services.map((service, index) => ({
            title: service,
            description: overviewDescriptions[index] ?? project.overview,
          }))}
        />

        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="gallery-title"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                id="gallery-title"
                className="mt-4 text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-5xl"
              >
                Galeria de <span className="font-light italic">imagenes</span>
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_2.1fr_1fr] lg:grid-rows-2 lg:gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={image + "-" + index}
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-zinc-200 shadow-md",
                  galleryLayouts[index] ?? "aspect-4/3 lg:col-span-6",
                )}
              >
                <Image
                  src={image}
                  alt={project.title + ", detalle " + (index + 1)}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 58vw"
                  className="object-cover object-top transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
