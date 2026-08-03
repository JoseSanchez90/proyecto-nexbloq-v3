"use client";

import { useState } from "react";
import Image from "next/image";

const values = [
  {
    label: "Propósito",
    title: "Diseñar con una razón clara",
    description:
      "Cada decisión visual y técnica debe ayudar a comunicar mejor, simplificar una tarea o acercar al negocio a un objetivo concreto.",
    image: "/about/proposito.webp",
    imageAlt: "Proceso de diseño de experiencia de usuario",
  },
  {
    label: "Claridad",
    title: "Hacer simple lo que parece complejo",
    description:
      "Organizo la información, el recorrido y la tecnología para crear experiencias fáciles de entender, mantener y utilizar.",
    image: "/about/claridad.webp",
    imageAlt: "Planificación clara de una interfaz web",
  },
  {
    label: "Colaboración",
    title: "Construir en conversación",
    description:
      "El mejor resultado aparece cuando el conocimiento del cliente y mi experiencia digital se encuentran en un proceso abierto y ordenado.",
    image: "/about/colaboracion.webp",
    imageAlt: "Colaboración durante el desarrollo de una solución digital",
  },
];

export default function ValuesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = values[activeIndex];

  return (
    <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-[0.7fr_1fr] lg:gap-3">
      <div className="grid content-start gap-3">
        {values.map((value, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={value.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`min-h-20 cursor-pointer rounded-2xl border px-6 text-center text-base font-semibold transition-colors sm:text-lg ${
                isActive
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {value.label}
            </button>
          );
        })}
      </div>

      <article className="overflow-hidden rounded-2xl">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-3/2">
          <Image
            key={activeValue.image}
            src={activeValue.image}
            alt={activeValue.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 720px"
            className="service-preview-image object-cover object-top"
          />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/50 p-4 shadow-sm backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600">
              {activeValue.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              {activeValue.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
              {activeValue.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
