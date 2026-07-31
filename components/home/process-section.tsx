"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import { MoveRight } from "lucide-react";

const principles = [
  {
    label: "Diagnóstico",
    title: "Entender antes de diseñar",
    text: "Primero identifico tus objetivos, el público, el contenido y las acciones que la solución debe facilitar.",
    image: "/home/diagnostico.png",
    imageAlt: "Diagnóstico y análisis de una experiencia digital",
  },
  {
    label: "Dirección",
    title: "Decisiones con propósito",
    text: "La estructura, la interfaz y la tecnología responden a necesidades concretas, no a decisiones decorativas.",
    image: "/home/direccion.png",
    imageAlt: "Dirección de diseño para un proyecto web",
  },
  {
    label: "Entrega",
    title: "Un proceso visible y ordenado",
    text: "Trabajamos por etapas definidas, con revisiones oportunas y comunicación directa durante todo el proyecto.",
    image: "/home/entrega.png",
    imageAlt: "Entrega de una solución web desarrollada por Nexbloq",
  },
];

const cardTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = principles[activeIndex];

  return (
    <section
      id="proceso"
      className="w-full max-w-7xl scroll-mt-24 rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
          <span className="size-1.5 rounded-full bg-indigo-600" />
          <p className="text-base font-semibold uppercase tracking-[0.12em]">
            Cómo trabajo
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          UN PROCESO <span className="font-light italic">CLARO.</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-6 text-zinc-500">
          Estrategia, diseño y desarrollo dentro de una colaboración directa,
          comprensible y enfocada en resultados.
        </p>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-[13.5rem_1fr] lg:mt-16 lg:grid-cols-[17rem_1fr]">
        <div className="flex flex-col gap-3">
          {principles.map((principle, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                layout
                key={principle.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`Mostrar etapa: ${principle.label}`}
                transition={
                  shouldReduceMotion ? { duration: 0 } : cardTransition
                }
                className={`group relative w-full overflow-hidden rounded-2xl border text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 cursor-pointer ${
                  isActive
                    ? "h-72 border-zinc-200 md:h-72 lg:h-76"
                    : "h-19 border-zinc-200 bg-white hover:border-zinc-400"
                }`}
              >
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={principle.image}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, scale: 1.05 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={
                        shouldReduceMotion ? { duration: 0 } : cardTransition
                      }
                      className="absolute inset-0"
                    >
                      <Image
                        src={principle.image}
                        alt={principle.imageAlt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) 216px, 272px"
                        className="object-cover"
                        priority={index === 0}
                      />
                      <span className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.span
                  layout="position"
                  transition={
                    shouldReduceMotion ? { duration: 0 } : cardTransition
                  }
                  className={`absolute inset-x-0 bottom-0 z-10 px-5 py-5 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 group-hover:text-zinc-950"
                  }`}
                >
                  {principle.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>

        <article
          aria-live="polite"
          className="flex min-h-120 flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.32, ease: "easeOut" }
              }
              className="flex h-full flex-1 flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <MoveRight className="w-5 h-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] sm:text-base">
                    {active.label}
                  </p>
                </div>
                <h3 className="mt-10 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] lg:text-3xl">
                  “{active.title}.”
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
                  {active.text}
                </p>
              </div>

              <div className="mt-12 flex flex-col items-start gap-5 border-t border-zinc-200 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="mt-1 text-sm font-semibold text-zinc-400">
                  Desarrollo web personalizado
                </p>
                <div
                  className={clsx(
                    "flex items-center gap-2 text-zinc-400",
                    museomoderno.className,
                  )}
                >
                  <div className="rounded-md bg-zinc-400 px-2 py-1">
                    <img
                      src="/logo/Logo4.png"
                      alt="Nexbloq"
                      className="h-4.5 w-3"
                    />
                  </div>
                  <p className="text-sm font-semibold sm:text-base">
                    Nexbloq Studio
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
