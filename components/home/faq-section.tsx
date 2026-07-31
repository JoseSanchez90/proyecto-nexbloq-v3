"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const questions = [
  {
    question: "¿Qué servicios ofrece Nexbloq?",
    answer:
      "Diseño y desarrollo landing pages, sitios corporativos, rediseños, sistemas web y soluciones para dominio, hosting y mantenimiento.",
  },
  {
    question: "¿Cuánto tiempo toma completar un proyecto?",
    answer:
      "Una landing page suele requerir entre dos y tres semanas. Los sitios corporativos y sistemas web se estiman después de definir contenido, alcance y funcionalidades.",
  },
  {
    question: "¿Trabajas solo con empresas establecidas?",
    answer:
      "No. Trabajo con emprendimientos, profesionales y empresas que necesitan construir o mejorar una solución digital con objetivos claros.",
  },
  {
    question: "¿Cuánto cuesta desarrollar una página web?",
    answer:
      "El presupuesto depende del tipo de proyecto, número de secciones, nivel de diseño y funcionalidades. Cada propuesta detalla alcance, tiempos y entregables.",
  },
  {
    question: "¿Puedes rediseñar una página existente?",
    answer:
      "Sí. Primero reviso la estructura, experiencia, rendimiento y tecnología actual para definir qué conviene conservar, mejorar o reconstruir.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = questions[activeIndex];

  return (
    <section
      id="preguntas-frecuentes"
      className="showcase-grid w-full max-w-7xl mb-24 rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12"
    >
      <div className="grid items-end gap-8 md:grid-cols-[1fr_0.7fr]">
        <div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              FAQ
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            RESPONDIENDO PREGUNTAS
            <br />
            <span className="font-light italic">FRECUENTES.</span>
          </h2>
        </div>
        <p className="max-w-xs text-base leading-6 text-zinc-500 md:justify-self-end">
          Respuestas generales para comprender cómo trabajo antes de solicitar
          una propuesta para tu proyecto.
        </p>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="grid gap-2">
          {questions.map((item, index) => (
            <button
              key={item.question}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`flex min-h-14 items-center justify-between gap-4 rounded-lg border px-5 text-left text-sm cursor-pointer transition-colors ${
                activeIndex === index
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              <span className="text-sm lg:text-base font-medium">
                {index + 1}. {item.question}
              </span>
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                  activeIndex === index
                    ? "bg-white text-indigo-600"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {activeIndex === index ? (
                  <Minus aria-hidden="true" className="size-3.5" />
                ) : (
                  <Plus aria-hidden="true" className="size-3.5" />
                )}
              </span>
            </button>
          ))}
        </div>

        <article className="flex min-h-80 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6 sm:p-7 lg:p-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Respuesta:
            </h3>
            <div className="my-5 h-px bg-zinc-200" />
            <p className="text-base leading-7 text-zinc-500">{active.answer}</p>
          </div>
          <div className="mt-8 w-fit">
            <ButtonPrimary
              text="Hablar del proyecto"
              href="/contacto"
              size="sm"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
