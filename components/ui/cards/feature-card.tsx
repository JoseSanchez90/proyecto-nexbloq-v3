import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  images: string[];
  variant: "collage" | "stack" | "spotlight";
}

const imageLayouts = {
  collage: [
    "left-6 top-7 w-[68%] -rotate-2",
    "right-4 top-20 w-[64%] rotate-2",
    "left-12 top-40 w-[72%]",
  ],
  stack: [
    "right-5 top-6 w-[72%] rotate-2",
    "left-5 top-20 w-[68%] -rotate-2",
    "right-8 top-40 w-[70%]",
  ],
  spotlight: [
    "left-1/2 top-8 w-[82%] -translate-x-1/2",
    "left-5 top-40 w-[58%] -rotate-2",
    "right-5 top-44 w-[58%] rotate-2",
  ],
} satisfies Record<FeatureCardProps["variant"], string[]>;

export default function FeatureCard({
  title,
  description,
  images,
  variant,
}: FeatureCardProps) {
  return (
    <article className="relative isolate h-115 overflow-hidden rounded-[1.4rem] bg-white">
      <div className="absolute inset-x-0 top-0 h-[76%] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute aspect-16/10 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-[0_18px_45px_rgba(24,24,27,0.12)] ${imageLayouts[variant][index]}`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 75vw, 24vw"
              className="object-cover object-top p-1"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#4d2fff] from-10% via-[#6046ff]/95 via-20% to-transparent to-50%" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-[34%] flex-col items-center justify-end px-7 pb-8 text-center text-white">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-white/90">
          {description}
        </p>
      </div>
    </article>
  );
}
