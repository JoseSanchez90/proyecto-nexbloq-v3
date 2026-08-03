"use client";

import Image from "next/image";
import { SendHorizontal, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useState } from "react";
import type { FormEvent } from "react";
import type { Variants } from "motion/react";
import { contactInfo } from "@/lib/contact";

const panelVariants: Variants = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 36px) calc(100% + 48px))",
  },
  visible: {
    clipPath: "circle(160% at calc(100% - 36px) calc(100% + 48px))",
    transition: {
      clipPath: {
        duration: 1.22,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 36px) calc(100% + 48px))",
    transition: {
      clipPath: {
        duration: 1.04,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
};

const reducedPanelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const nameId = useId();
  const messageId = useId();
  const panelId = useId();
  const activePanelVariants = shouldReduceMotion
    ? reducedPanelVariants
    : panelVariants;

  useEffect(() => {
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanMessage = message.trim();
    if (!cleanName || !cleanMessage) return;

    const whatsappNumber = contactInfo.phoneE164.replace(/\D/g, "");
    const preparedMessage = `Hola Nexbloq, soy ${cleanName}.\n\n${cleanMessage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preparedMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setName("");
    setMessage("");
    setIsOpen(false);
  }

  return (
    <div className="hidden lg:block">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            id={panelId}
            role="dialog"
            aria-label="Escribir un mensaje por WhatsApp"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={activePanelVariants}
            className="fixed right-7 bottom-28 z-50 flex w-88 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-stone-100 shadow-2xl will-change-[clip-path] xl:w-92"
          >
            <header className="flex shrink-0 items-center gap-3 bg-green-800 px-3.5 py-2.5 text-white xl:gap-4 xl:px-4 xl:py-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center xl:h-8 xl:w-8">
                <Image
                  src="/svg/whatsapp.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full"
                />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block truncate text-[15px] font-semibold">
                  Nexbloq
                </strong>
                <span className="flex items-center gap-1.5 text-[11px] text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Chat en línea
                </span>
              </span>
              <motion.button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar panel de WhatsApp"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 xl:h-10 xl:w-10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </motion.button>
            </header>

            <div className="overflow-hidden bg-stone-100 p-3 xl:p-4">
              <div className="rounded-xl bg-white px-3 py-2.5 text-xs leading-relaxed text-zinc-700 shadow-sm xl:px-3.5 xl:py-3">
                ¡Hola! <span aria-hidden="true">👋</span> Cuéntame sobre tu
                proyecto y prepararé tu mensaje para enviarlo por WhatsApp.
                <span className="mt-1 block text-right text-[10px] text-zinc-400">
                  Nexbloq
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-2 space-y-2 xl:mt-3.5 xl:space-y-3"
              >
                <div className="rounded-2xl bg-white px-3 py-2 shadow-sm xl:px-3.5 xl:py-3">
                  <label
                    htmlFor={nameId}
                    className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-green-800 xl:mb-1.5 xl:text-[11px]"
                  >
                    Nombre
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    required
                    placeholder="¿Cómo te llamas?"
                    className="h-9 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-xs text-zinc-900 outline-none transition-[border-color,box-shadow] placeholder:text-zinc-400 focus:border-green-500 focus:ring-3 focus:ring-green-500/15 xl:h-10"
                  />
                </div>

                <div className="rounded-2xl bg-white px-3 py-2 shadow-sm xl:px-3.5 xl:py-3">
                  <label
                    htmlFor={messageId}
                    className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-green-800 xl:mb-1.5 xl:text-[11px]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id={messageId}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={4}
                    placeholder="Cuéntame brevemente qué necesitas..."
                    className="h-18 min-h-18 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none transition-[border-color,box-shadow] placeholder:text-xs placeholder:text-zinc-400 focus:border-green-500 focus:ring-3 focus:ring-green-500/15 xl:h-10 xl:py-2.5 xl:placeholder:text-[13px]"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600 xl:h-10 xl:py-3 xl:text-sm"
                >
                  Enviar por WhatsApp
                  <SendHorizontal className="h-4.5 w-4.5" aria-hidden="true" />
                </motion.button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={
          isOpen ? "Cerrar panel de WhatsApp" : "Abrir mensaje de WhatsApp"
        }
        aria-expanded={isOpen}
        aria-controls={panelId}
        animate={
          shouldReduceMotion
            ? undefined
            : isOpen
              ? { scale: 0.78, y: 5 }
              : { scale: 1, y: 0 }
        }
        whileTap={
          shouldReduceMotion ? undefined : { scale: isOpen ? 0.72 : 0.92 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 480,
                damping: 24,
                mass: 0.7,
                delay: isOpen ? 0 : 0.26,
              }
        }
        className="fixed right-7 bottom-7 z-40 flex h-18 w-18 origin-center cursor-pointer items-center justify-center rounded-full bg-green-500 p-4 shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/30"
      >
        <motion.span
          animate={shouldReduceMotion ? undefined : { scale: isOpen ? 0.9 : 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  delay: isOpen ? 0 : 0.26,
                }
          }
          className="flex h-full w-full"
        >
          <Image
            src="/svg/whatsapp.svg"
            alt=""
            width={56}
            height={56}
            className="h-full w-full"
          />
        </motion.span>
      </motion.button>
    </div>
  );
}
