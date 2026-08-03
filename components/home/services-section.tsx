"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeServices } from "@/lib/services";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [previewService, setPreviewService] = useState(0);
  const selectedService = homeServices[previewService];
  const isPreviewVisible = activeService !== null;

  const activateService = (index: number) => {
    setPreviewService(index);
    setActiveService(index);
  };

  return (
    <section
      id="servicios"
      className="showcase-grid w-full max-w-7xl scroll-mt-24 rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="grid items-end gap-8 md:grid-cols-[1fr_0.7fr]">
        <div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Servicios
            </p>
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            SOLUCIONES <span className="font-light italic">DIGITALES.</span>
          </h2>
        </div>
        <div className="md:justify-self-end">
          <p className="max-w-xs text-base leading-6 text-zinc-500">
            Diseño, desarrollo y acompañamiento técnico para convertir una
            necesidad de negocio en una solución funcional.
          </p>
        </div>
      </div>

      <div
        className="relative mt-12 sm:mt-16"
        onMouseLeave={() => setActiveService(null)}
      >
        {homeServices.map((service, index) => {
          const isActive = activeService === index;

          return (
            <Link
              key={service.number}
              href={"/servicios/" + service.slug}
              aria-label={"Ver detalles de " + service.title}
              onMouseEnter={() => activateService(index)}
              onFocus={() => activateService(index)}
              onBlur={() => setActiveService(null)}
              className="group relative grid min-h-28 cursor-pointer grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center py-8 outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-4 sm:min-h-42 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]"
            >
              <span
                className={`self-start pt-2 text-sm font-semibold italic transition-colors duration-300 ${
                  isActive ? "text-indigo-600" : "text-zinc-400"
                }`}
              >
                ({service.number})
              </span>

              <div className="relative z-10 min-w-0">
                <h3
                  className={`text-3xl font-semibold uppercase leading-none tracking-tighter transition-colors duration-300 sm:text-4xl md:text-[2.65rem] lg:text-5xl xl:text-6xl ${
                    isActive ? "text-zinc-950" : "text-zinc-500"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 xl:hidden">
                  {service.description}
                </p>
              </div>

              <div className="relative z-20 col-span-3 mt-6 w-full max-w-3xl justify-self-center p-2 sm:p-3 xl:hidden">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-white">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 72px), 768px"
                    className="object-contain"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[30%] w-[18%] rounded-tl-xl border-l-2 border-t-2 border-indigo-600"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-[30%] w-[18%] rounded-tr-xl border-r-2 border-t-2 border-indigo-600"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[30%] w-[18%] rounded-bl-xl border-b-2 border-l-2 border-indigo-600"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-[30%] w-[18%] rounded-br-xl border-b-2 border-r-2 border-indigo-600"
                />
              </div>

              <ArrowUpRight
                aria-hidden="true"
                className={`relative z-30 hidden size-9 text-[#5635ff] transition-all duration-300 xl:block ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0"
                }`}
              />

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 hidden h-px origin-left bg-zinc-200 transition-[scale,opacity] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] xl:block ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-zinc-200 xl:hidden"
              />
            </Link>
          );
        })}

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-14 z-20 hidden aspect-video w-[34%] transition-[top,opacity,translate,scale] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] xl:block ${
            isPreviewVisible
              ? "-translate-y-1/2 scale-100 opacity-100"
              : "-translate-y-[calc(50%+1.5rem)] scale-75 opacity-0"
          }`}
          style={{
            top: `${(previewService + 0.5) * 25}%`,
          }}
        >
          <div className="absolute inset-1 overflow-hidden rounded-xl bg-zinc-100">
            <Image
              key={selectedService.image}
              src={selectedService.image}
              alt=""
              fill
              sizes="320px"
              className="service-preview-image object-cover"
            />
          </div>

          <span className="absolute left-0 top-0 h-[30%] w-[18%] rounded-tl-[18px] border-l-2 border-t-2 border-indigo-600" />
          <span className="absolute right-0 top-0 h-[30%] w-[18%] rounded-tr-[18px] border-r-2 border-t-2 border-indigo-600" />
          <span className="absolute bottom-0 left-0 h-[30%] w-[18%] rounded-bl-[18px] border-b-2 border-l-2 border-indigo-600" />
          <span className="absolute bottom-0 right-0 h-[30%] w-[18%] rounded-br-[18px] border-b-2 border-r-2 border-indigo-600" />
        </div>
      </div>
    </section>
  );
}
