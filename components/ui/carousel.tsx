"use client";

import Image from "next/image";

interface CarouselProps {
  images: { src: string; alt: string }[];
  direction: "left" | "right";
  speed?: number;
}

export default function Carousel({
  images,
  direction,
  speed = 40,
}: CarouselProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative z-20 w-full overflow-hidden">
      <div
        className="py-2 flex w-max gap-8 will-change-transform"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? "duplicate" : "original"}
            className="flex shrink-0 gap-8"
            aria-hidden={isDuplicate || undefined}
          >
            {images.map((image) => (
              <div
                key={`${isDuplicate ? "duplicate" : "original"}-${image.src}`}
                className="relative w-[clamp(19rem,40vw,35rem)] shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-4 pt-6"
              >
                <span className="absolute left-5 top-2 h-2 w-2 rounded-full bg-indigo-600" />
                <span className="absolute left-8 top-2 h-2 w-2 rounded-full bg-gray-600" />
                <span className="absolute left-11 top-2 h-2 w-2 rounded-full bg-gray-400" />
                <Image
                  src={image.src}
                  alt={isDuplicate ? "" : image.alt}
                  width={1200}
                  height={675}
                  loading="eager"
                  sizes="(max-width: 768px) 19rem, 40vw"
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
