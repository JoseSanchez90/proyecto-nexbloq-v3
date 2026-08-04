"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

export type ProjectOverviewOption = {
  title: string;
  description: string;
};

type ProjectOverviewTabsProps = {
  options: ProjectOverviewOption[];
};

export default function ProjectOverviewTabs({
  options,
}: ProjectOverviewTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const tabsId = useId();
  const activeOption = options[activeIndex] ?? options[0];

  if (!activeOption) return null;

  return (
    <section className="grid gap-6 py-16 sm:gap-8 sm:py-20 lg:grid-cols-[minmax(0,1.8fr)_minmax(17rem,0.75fr)] lg:items-stretch lg:gap-12 lg:py-24">
      <div
        id={tabsId + "-panel-" + activeIndex}
        role="tabpanel"
        aria-labelledby={tabsId + "-tab-" + activeIndex}
        className="order-2 flex min-h-48 items-center overflow-hidden rounded-2xl bg-indigo-500 p-6 sm:min-h-52 sm:p-10 lg:order-1 lg:min-h-42 lg:px-12"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={activeOption.title}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: -12, filter: "blur(3px)" }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            }
            className="text-sm leading-7 text-white sm:text-base sm:leading-8 lg:max-w-3xl lg:text-lg"
          >
            {activeOption.description}
          </motion.p>
        </AnimatePresence>
      </div>

      <div
        role="tablist"
        aria-label="Información del proyecto"
        className="order-1 grid gap-2 sm:grid-cols-3 lg:order-2 lg:grid-cols-1 lg:content-stretch lg:gap-0"
      >
        {options.map((option, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={option.title}
              id={tabsId + "-tab-" + index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={tabsId + "-panel-" + index}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                let nextIndex = index;

                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  nextIndex = (index + 1) % options.length;
                } else if (
                  event.key === "ArrowLeft" ||
                  event.key === "ArrowUp"
                ) {
                  nextIndex = (index - 1 + options.length) % options.length;
                } else if (event.key === "Home") {
                  nextIndex = 0;
                } else if (event.key === "End") {
                  nextIndex = options.length - 1;
                } else {
                  return;
                }

                event.preventDefault();
                setActiveIndex(nextIndex);
                window.requestAnimationFrame(() => {
                  document
                    .getElementById(tabsId + "-tab-" + nextIndex)
                    ?.focus();
                });
              }}
              className="group flex min-h-14 cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:justify-center lg:min-h-0 lg:justify-start lg:px-0 lg:py-4 lg:hover:bg-transparent"
            >
              <span
                aria-hidden="true"
                className={
                  "size-2.5 shrink-0 rounded-full transition-colors duration-300 " +
                  (isActive
                    ? "bg-indigo-600"
                    : "bg-zinc-300 group-hover:bg-zinc-400")
                }
              />
              <span
                className={
                  "text-sm font-semibold transition-colors duration-300 sm:text-base lg:text-2xl " +
                  (isActive
                    ? "text-zinc-950"
                    : "text-zinc-500 lg:text-zinc-950")
                }
              >
                {option.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
