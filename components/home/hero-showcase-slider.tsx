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
    left: "-38%",
    top: "9%",
    width: "28%",
    height: "82%",
    opacity: 0,
  },
  left: {
    left: "-6%",
    top: "9%",
    width: "28%",
    height: "82%",
    opacity: 1,
  },
  center: {
    left: "calc(22% + var(--showcase-gap))",
    top: "5px",
    width: "calc(56% - var(--showcase-double-gap))",
    height: "calc(100% - 10px)",
    opacity: 1,
  },
  right: {
    left: "78%",
    top: "9%",
    width: "28%",
    height: "82%",
    opacity: 1,
  },
  queued: {
    left: "108%",
    top: "9%",
    width: "28%",
    height: "82%",
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
      className="relative h-56 w-full sm:h-76 lg:h-96"
      aria-label="Muestra animada de proyectos y servicios de Nexbloq"
      style={
        {
          "--showcase-gap": "clamp(28px, 4.5vw, 64px)",
          "--showcase-double-gap": "clamp(56px, 9vw, 128px)",
          "--showcase-frame-gap": "clamp(23px, calc(4.5vw - 5px), 59px)",
          "--showcase-frame-double-gap": "clamp(46px, calc(9vw - 10px), 118px)",
        } as CSSProperties
      }
    >
      {orderedImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute overflow-hidden rounded-lg bg-zinc-100"
          style={{
            ...itemPositions[index],
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
            sizes="(max-width: 640px) 48vw, 480px"
            className="object-cover object-top"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 z-10 h-full"
        style={{
          left: "calc(22% + var(--showcase-frame-gap))",
          width: "calc(56% - var(--showcase-frame-double-gap))",
        }}
      >
        <span className="absolute -left-1 -top-1 h-[15%] w-[12%] rounded-tl-xl border-l-3 border-t-3 border-indigo-600" />
        <span className="absolute -right-1 -top-1 h-[15%] w-[12%] rounded-tr-xl border-r-3 border-t-3 border-indigo-600" />
        <span className="absolute -bottom-1 -left-1 h-[15%] w-[12%] rounded-bl-xl border-b-3 border-l-3 border-indigo-600" />
        <span className="absolute -bottom-1 -right-1 h-[15%] w-[12%] rounded-br-xl border-b-3 border-r-3 border-indigo-600" />
      </div>
    </div>
  );
}
