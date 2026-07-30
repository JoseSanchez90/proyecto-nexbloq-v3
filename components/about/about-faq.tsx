"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const questions = [
  {
    question: "¿Qué tipo de proyectos desarrollas?",
    answer:
      "Trabajo en landing pages, sitios corporativos, rediseños y sistemas web personalizados para profesionales, emprendimientos y empresas.",
  },
  {
    question: "¿Cómo comienza una colaboración?",
    answer:
      "Comenzamos con una conversación para entender el negocio, el objetivo, el público y el alcance. Con esa información preparo una propuesta clara.",
  },
  {
    question: "¿Trabajaré directamente contigo?",
    answer:
      "Sí. La comunicación, el diseño y el desarrollo se coordinan directamente conmigo para mantener el contexto y tomar decisiones con rapidez.",
  },
  {
    question: "¿También puedes mejorar una web existente?",
    answer:
      "Sí. Puedo revisar su estructura, interfaz, rendimiento y tecnología para proponer un rediseño completo o mejoras puntuales.",
  },
];

export default function AboutFaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuestion = questions[activeIndex];

  return (
    <div className="mt-12 grid gap-3 lg:grid-cols-2">
      <div className="grid gap-2">
        {questions.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`flex min-h-14 cursor-pointer items-center justify-between gap-4 rounded-xl border px-5 text-left transition-colors ${
                isActive
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              <span className="text-sm font-semibold">
                {index + 1}. {item.question}
              </span>
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                  isActive
                    ? "bg-white text-indigo-600"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {isActive ? (
                  <Minus aria-hidden="true" className="size-3.5" />
                ) : (
                  <Plus aria-hidden="true" className="size-3.5" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <article className="flex min-h-72 flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600">
            Respuesta
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            {activeQuestion.question}
          </h3>
          <div className="my-5 h-px bg-zinc-200" />
          <p className="text-base leading-7 text-zinc-500">
            {activeQuestion.answer}
          </p>
        </div>
        <div className="mt-8 w-fit">
          <ButtonPrimary
            text="Hablemos de tu proyecto"
            href="/contacto"
            size="sm"
          />
        </div>
      </article>
    </div>
  );
}
