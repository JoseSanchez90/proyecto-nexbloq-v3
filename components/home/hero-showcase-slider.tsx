"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";

interface ShowcaseImage {
  src: string;
  alt: string;
}

interface HeroShowcaseSliderProps {
  images: [ShowcaseImage, ShowcaseImage, ShowcaseImage, ShowcaseImage];
}

const HOLD_TIME = 2_000;
const TRANSITION_TIME = 750;

const positions = {
  exit: {
    left: "var(--showcase-exit-left)",
    top: "var(--showcase-side-top)",
    width: "var(--showcase-side-width)",
    height: "var(--showcase-side-height)",
    opacity: 0,
  },
  left: {
    left: "var(--showcase-left-left)",
    top: "var(--showcase-side-top)",
    width: "var(--showcase-side-width)",
    height: "var(--showcase-side-height)",
    opacity: 1,
  },
  center: {
    left: "var(--showcase-center-left)",
    top: "var(--showcase-center-top)",
    width: "var(--showcase-center-width)",
    height: "var(--showcase-center-height)",
    opacity: 1,
  },
  right: {
    left: "var(--showcase-right-left)",
    top: "var(--showcase-side-top)",
    width: "var(--showcase-side-width)",
    height: "var(--showcase-side-height)",
    opacity: 1,
  },
  queued: {
    left: "var(--showcase-queued-left)",
    top: "var(--showcase-side-top)",
    width: "var(--showcase-side-width)",
    height: "var(--showcase-side-height)",
    opacity: 0,
  },
} as const;

export default function HeroShowcaseSlider({
  images,
}: HeroShowcaseSliderProps) {
  const [orderedImages, setOrderedImages] = useState<ShowcaseImage[]>(images);
  const [isShifted, setIsShifted] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    if (!isShifted) {
      const holdTimer = window.setTimeout(() => {
        setIsShifted(true);
      }, HOLD_TIME);

      return () => window.clearTimeout(holdTimer);
    }

    const transitionTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setOrderedImages(([left, center, right, queued]) => [
        center,
        right,
        queued,
        left,
      ]);
      setIsShifted(false);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }, TRANSITION_TIME);

    return () => window.clearTimeout(transitionTimer);
  }, [isShifted]);

  const itemPositions = isShifted
    ? [positions.exit, positions.left, positions.center, positions.right]
    : [positions.left, positions.center, positions.right, positions.queued];

  return (
    <div
      className="hero-showcase-slider relative h-56 w-full sm:h-76 lg:h-96"
      aria-label="Muestra animada de proyectos y servicios de Nexbloq"
    >
      {orderedImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute overflow-hidden rounded-lg bg-zinc-100"
          style={{
            ...itemPositions[index],
            aspectRatio: "1586 / 992",
            transition: transitionEnabled
              ? `left ${TRANSITION_TIME}ms cubic-bezier(0.76, 0, 0.24, 1), top ${TRANSITION_TIME}ms cubic-bezier(0.76, 0, 0.24, 1), width ${TRANSITION_TIME}ms cubic-bezier(0.76, 0, 0.24, 1), height ${TRANSITION_TIME}ms cubic-bezier(0.76, 0, 0.24, 1), opacity 420ms ease`
              : "none",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 639px) 82vw, 480px"
            className="object-contain object-center sm:object-cover sm:object-top"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-10"
        style={{
          left: "var(--showcase-frame-left)",
          top: "var(--showcase-frame-top)",
          width: "var(--showcase-frame-width)",
          height: "var(--showcase-frame-height)",
          aspectRatio: "1586 / 992",
        } as CSSProperties}
      >
        <span className="absolute -left-1 -top-1 h-[15%] w-[12%] rounded-tl-xl border-l-3 border-t-3 border-indigo-600" />
        <span className="absolute -right-1 -top-1 h-[15%] w-[12%] rounded-tr-xl border-r-3 border-t-3 border-indigo-600" />
        <span className="absolute -bottom-1 -left-1 h-[15%] w-[12%] rounded-bl-xl border-b-3 border-l-3 border-indigo-600" />
        <span className="absolute -bottom-1 -right-1 h-[15%] w-[12%] rounded-br-xl border-b-3 border-r-3 border-indigo-600" />
      </div>
    </div>
  );
}
