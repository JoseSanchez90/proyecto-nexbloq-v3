import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { getServiceBySlug, homeServices } from "@/lib/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return homeServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title + " | Servicios Nexbloq",
    description: service.introduction,
    openGraph: {
      title: service.title + " | Nexbloq",
      description: service.introduction,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <article className="showcase-grid w-full max-w-7xl rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <header
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <Link
            href="/servicios"
            className="mb-10 inline-flex self-start items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver a servicios
          </Link>

          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.12em] sm:text-base">
              Detalle del servicio
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold uppercase tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7 lg:text-lg">
            {service.introduction}
          </p>
        </header>

        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 relative mx-auto mt-12 aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-zinc-100 sm:mt-16"
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1120px"
            className="object-cover object-center"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/5"
          />
        </div>

        <div className="mx-auto max-w-5xl">
          <section className="py-16 sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
              Sobre el servicio
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Una solución construida para cumplir un objetivo concreto.
            </h2>
            <p className="mt-6 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 lg:text-lg">
              {service.about}
            </p>
          </section>

          <section
            className="py-16 sm:py-20"
            aria-labelledby="service-includes-title"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
              El proceso
            </p>
            <h2
              id="service-includes-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              ¿Qué incluye este servicio?
            </h2>

            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
              {service.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="group flex min-h-56 flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 hover:bg-indigo-600 sm:p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-auto pt-10 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                ¿Por qué deberia contratar nuestro servicio?
              </h2>
              <div>
                <p className="text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 lg:text-lg">
                  {service.whyNexbloq}
                </p>
                <ButtonPrimary
                  text="Cuéntame sobre tu proyecto"
                  href="/contacto"
                  size="sm"
                  font="semibold"
                  className="mt-8 w-fit"
                />
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
