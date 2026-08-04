"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { CookiePreferences } from "@/lib/cookie-consent";

interface CookiePreferencesModalProps {
  preferences: CookiePreferences;
  onPreferencesChange: (preferences: CookiePreferences) => void;
  onBack: () => void;
  onSave: () => void;
}

const cookieCategories = [
  {
    key: "necessary" as const,
    title: "Esenciales",
    description:
      "Siempre activas. Necesarias para el funcionamiento básico del sitio.",
    locked: true,
  },
  {
    key: "analytics" as const,
    title: "Analíticas",
    description:
      "Nos ayudan a entender cómo los visitantes interactúan con el sitio.",
    locked: false,
  },
  {
    key: "preferences" as const,
    title: "Preferencias",
    description: "Recuerdan tus configuraciones y elecciones en el sitio.",
    locked: false,
  },
  {
    key: "marketing" as const,
    title: "Marketing",
    description: "Permiten publicidad y contenido personalizado.",
    locked: false,
  },
];

export default function CookiePreferencesModal({
  preferences,
  onPreferencesChange,
  onBack,
  onSave,
}: CookiePreferencesModalProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="cookie-preferences"
      layout="position"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.34,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden"
    >
      <div className="p-4 sm:p-5">
        <h2 className="text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
          Preferencias de cookies
        </h2>

        <div className="mt-4 space-y-4">
          {cookieCategories.map((category) => {
            const checked = preferences[category.key];
            const descriptionId = `cookie-${category.key}-description`;

            return (
              <div
                key={category.key}
                className="flex items-center justify-between gap-3"
              >
                <div className="min-w-0 pr-1">
                  <h3 className="text-xs font-medium text-zinc-900 sm:text-sm">
                    {category.title}
                  </h3>
                  <p
                    id={descriptionId}
                    className="mt-0.5 text-[10px] leading-[1.4] text-zinc-400 sm:text-[11px]"
                  >
                    {category.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={checked}
                  aria-describedby={descriptionId}
                  aria-label={`${category.title}: ${checked ? "activadas" : "desactivadas"}`}
                  disabled={category.locked}
                  onClick={() => {
                    if (category.locked) return;
                    onPreferencesChange({
                      ...preferences,
                      [category.key]: !checked,
                    });
                  }}
                  className={cn(
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-indigo-600/25 disabled:cursor-not-allowed",
                    checked
                      ? category.locked
                        ? "bg-indigo-300"
                        : "bg-indigo-600"
                      : "bg-zinc-400",
                  )}
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: checked ? 18 : 2 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 520, damping: 30 }
                    }
                    className="absolute top-0.5 left-0 size-4 rounded-full bg-white shadow-sm"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button
          type="button"
          onClick={onBack}
          className="min-h-13 cursor-pointer border-r border-zinc-200 bg-white px-2 text-xs sm:text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-indigo-600 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-indigo-600/25"
        >
          Atrás
        </button>
        <button
          type="button"
          onClick={onSave}
          className="min-h-13 cursor-pointer bg-indigo-600 px-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-indigo-300"
        >
          Guardar y aceptar
        </button>
      </div>
    </motion.div>
  );
}
