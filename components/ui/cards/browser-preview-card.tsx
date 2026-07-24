import Image from "next/image";

interface BrowserPreviewCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export default function BrowserPreviewCard({
  image,
  title,
  category,
  description,
}: BrowserPreviewCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3">
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-top scale-y-0 bg-[#5635ff] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
      />

      <div className="relative z-10 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 px-3 pb-3 pt-6">
        <span className="absolute left-4 top-2 h-1.5 w-1.5 rounded-full bg-[#5635ff]" />
        <span className="absolute left-7 top-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
        <span className="absolute left-10 top-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />

        <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-white">
          <Image
            src={image}
            alt={`Vista previa de ${title}`}
            fill
            sizes="(max-width: 768px) 90vw, 42vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="relative z-10 px-3 pb-3 pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#5635ff] transition-colors duration-500 group-hover:text-white/70">
          {category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </article>
  );
}
