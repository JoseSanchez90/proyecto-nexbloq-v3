"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
} from "react";
import CookiePreferencesModal from "@/components/main/cookie-preferences-modal";
import {
  allCookiePreferences,
  applyCookiePreferences,
  necessaryCookiePreferences,
  OPEN_COOKIE_PREFERENCES_EVENT,
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookie-consent";

type CookiePanelView = "notice" | "preferences";

export function CookiePreferencesTrigger({
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
      }}
      {...props}
    />
  );
}

export default function CookieConsentBanner() {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [view, setView] = useState<CookiePanelView>("notice");
  const [preferences, setPreferences] = useState<CookiePreferences>(
    necessaryCookiePreferences,
  );

  useEffect(() => {
    const storedPreferences = readCookiePreferences();

    if (storedPreferences) {
      setPreferences(storedPreferences);
      setHasStoredConsent(true);
      applyCookiePreferences(storedPreferences);
    } else {
      setIsVisible(true);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    function openPreferences() {
      const storedPreferences = readCookiePreferences();
      setPreferences(storedPreferences ?? necessaryCookiePreferences);
      setHasStoredConsent(Boolean(storedPreferences));
      setView("preferences");
      setIsVisible(true);
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () =>
      window.removeEventListener(
        OPEN_COOKIE_PREFERENCES_EVENT,
        openPreferences,
      );
  }, []);

  useEffect(() => {
    if (!isVisible || view !== "preferences") return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (hasStoredConsent) {
        setIsVisible(false);
      } else {
        setView("notice");
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [hasStoredConsent, isVisible, view]);

  const confirmPreferences = useCallback(
    (nextPreferences: CookiePreferences) => {
      saveCookiePreferences(nextPreferences);
      setPreferences(nextPreferences);
      setHasStoredConsent(true);
      setIsVisible(false);
    },
    [],
  );

  function handleBack() {
    if (hasStoredConsent) {
      setIsVisible(false);
      return;
    }

    setView("notice");
  }

  return (
    <AnimatePresence>
      {isReady && isVisible && (
        <motion.aside
          layout="size"
          layoutRoot
          role={view === "preferences" ? "dialog" : "region"}
          aria-label={
            view === "preferences"
              ? "Preferencias de cookies"
              : "Aviso de cookies"
          }
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 32, scale: 0.94 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 22, scale: 0.96 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.46,
            ease: [0.16, 1, 0.3, 1],
            layout: shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 320,
                  damping: 30,
                  mass: 0.8,
                },
          }}
          style={{ borderRadius: 26 }}
          className="fixed right-3 bottom-3 left-3 z-80 max-h-[calc(100dvh-1.5rem)] overflow-x-hidden overflow-y-auto overscroll-contain bg-white shadow-[0_24px_80px_rgba(24,24,27,0.22)] [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden sm:right-auto sm:bottom-5 sm:left-5 sm:w-77.5 lg:bottom-7 lg:left-7"
        >
          <AnimatePresence mode="wait" initial={false}>
            {view === "notice" ? (
              <motion.div
                key="cookie-notice"
                layout="position"
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="px-5 pt-5 text-center sm:px-6 sm:pt-6">
                  <div className="mx-auto flex h-28 w-40 items-center justify-center sm:h-30 sm:w-42">
                    <Image
                      src="/cookies/cookies.webp"
                      alt="Ilustración de dos galletas"
                      width={650}
                      height={500}
                      priority
                      sizes="168px"
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 sm:text-[22px]">
                    Cookies
                  </h2>
                  <p className="mx-auto mt-2 max-w-64 text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
                    Usamos cookies para hacer que tu experiencia sea mejor.
                  </p>
                  <a
                    href="/politicas-de-privacidad"
                    className="mt-3 inline-flex text-[11px] font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-indigo-600 sm:text-xs"
                  >
                    Política de privacidad
                  </a>
                </div>

                <div className="mt-5 grid grid-cols-2 border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setView("preferences")}
                    className="min-h-13 cursor-pointer border-r border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-indigo-600 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-indigo-600/25 sm:text-sm"
                  >
                    Configurar
                  </button>
                  <button
                    type="button"
                    onClick={() => confirmPreferences(allCookiePreferences)}
                    className="min-h-13 cursor-pointer bg-indigo-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-indigo-300 sm:text-sm"
                  >
                    Aceptar todas
                  </button>
                </div>
              </motion.div>
            ) : (
              <CookiePreferencesModal
                key="cookie-preferences"
                preferences={preferences}
                onPreferencesChange={setPreferences}
                onBack={handleBack}
                onSave={() => confirmPreferences(preferences)}
              />
            )}
          </AnimatePresence>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
