import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  number: string;
}

export default function ServiceCard({
  icon: Icon,
  image,
  title,
  description,
  number,
}: ServiceCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3">
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-top scale-y-0 bg-[#5635ff] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
      />

      <div className="relative z-10 aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        <Image
          src={image}
          alt={`Referencia visual de ${title}`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="relative z-10 flex min-h-56 flex-col justify-between px-3 pb-3 pt-5">
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5635ff] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#5635ff]">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-sm font-medium text-zinc-400 transition-colors duration-500 group-hover:text-white/70">
            {number}
          </span>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-white">
              {title}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 text-zinc-400 transition-colors duration-500 group-hover:text-white"
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-white/80">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
