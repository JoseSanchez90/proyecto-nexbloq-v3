interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accent: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {eyebrow && (
        <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5635ff]" />
          <p className="text-xs font-medium tracking-wide">{eyebrow}</p>
        </div>
      )}

      <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title} <span className="font-light italic">{accent}</span>
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
