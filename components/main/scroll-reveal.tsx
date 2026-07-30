"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const ignoredClasses = [
  "absolute",
  "fixed",
  "hidden",
  "sr-only",
  "opacity-0",
];

function canReveal(element: HTMLElement) {
  if (element.dataset.scrollRevealIgnore !== undefined) return false;
  if (element.closest("[data-scroll-reveal-ignore]")) return false;
  if (ignoredClasses.some((className) => element.classList.contains(className))) {
    return false;
  }

  const { width, height } = element.getBoundingClientRect();
  return width > 0 && height > 12;
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const cleanupTimers = new Set<number>();
    const pendingElements = new Set<HTMLElement>();
    let firstFrame = 0;
    let secondFrame = 0;

    const finishReveal = (element: HTMLElement, delay = 0) => {
      const timer = window.setTimeout(() => {
        element.removeAttribute("data-scroll-reveal");
        element.removeAttribute("data-scroll-reveal-delay");
        element.classList.remove("is-scroll-revealed");
        element.style.removeProperty("--scroll-reveal-delay");
        cleanupTimers.delete(timer);
      }, delay + 1200);

      cleanupTimers.add(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add("is-scroll-revealed");
          observer.unobserve(element);
          finishReveal(
            element,
            Number(element.dataset.scrollRevealDelay ?? 0),
          );
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    const registered = new Set<HTMLElement>();

    const registerGroup = (elements: HTMLElement[], delayStep = 85) => {
      elements.forEach((element, index) => {
        if (registered.has(element) || !canReveal(element)) return;

        registered.add(element);
        element.dataset.scrollReveal = "";
        const delay = Math.min(index * delayStep, 360);
        element.dataset.scrollRevealDelay = String(delay);
        element.style.setProperty(
          "--scroll-reveal-delay",
          `${delay}ms`,
        );

        if (element.getBoundingClientRect().bottom < 0) {
          element.classList.add("is-scroll-revealed");
          finishReveal(element);
          return;
        }

        pendingElements.add(element);
      });
    };

    document.querySelectorAll<HTMLElement>("main section").forEach((section) => {
      registerGroup(
        Array.from(section.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        ),
        110,
      );

      section
        .querySelectorAll<HTMLElement>("[class*='grid']")
        .forEach((grid) => {
          const children = Array.from(grid.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          );

          if (children.length >= 2 && children.length <= 8) {
            registerGroup(children, 90);
          }
        });

      registerGroup(
        Array.from(
          section.querySelectorAll<HTMLElement>(
            "article, [data-scroll-reveal-item]",
          ),
        ),
        85,
      );
    });

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        pendingElements.forEach((element) => observer.observe(element));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      cleanupTimers.forEach((timer) => window.clearTimeout(timer));
      observer.disconnect();
      registered.forEach((element) => {
        element.removeAttribute("data-scroll-reveal");
        element.removeAttribute("data-scroll-reveal-delay");
        element.classList.remove("is-scroll-revealed");
        element.style.removeProperty("--scroll-reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
