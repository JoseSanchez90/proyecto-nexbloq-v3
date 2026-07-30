"use client";

import LogoLoop from "@/components/LogoLoop";

const technologies = [
  { name: "JavaScript", src: "/svg/javascript.svg" },
  { name: "TypeScript", src: "/svg/typescript.svg" },
  { name: "Next.js", src: "/svg/nextjs.svg" },
  { name: "React.js", src: "/svg/reactjs.svg" },
  { name: "WordPress", src: "/svg/wordpress.svg" },
  { name: "Supabase", src: "/svg/supabase.svg" },
  { name: "Neon", src: "/svg/neon.svg" },
  { name: "MySQL", src: "/svg/mysql.svg" },
  { name: "PostgreSQL", src: "/svg/postgresql.svg" },
];

const technologyLogos = technologies.map(({ name, src }) => ({
  node: (
    <span className="flex items-center gap-2 text-zinc-900">
      <img
        src={src}
        alt=""
        width={36}
        height={36}
        aria-hidden
        className="h-8 w-8 shrink-0 object-contain lg:h-10 lg:w-10"
      />
      <span className="whitespace-nowrap text-xl font-semibold tracking-tight lg:text-3xl">
        {name}
      </span>
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

export default function TechnologyCarousel() {
  return (
    <div className="w-full overflow-hidden px-4 py-12 sm:px-6 lg:py-16">
      <LogoLoop
        logos={technologyLogos}
        speed={80}
        direction="left"
        logoHeight={36}
        gap={56}
        pauseOnHover={false}
        scaleOnHover={false}
        fadeOut
        ariaLabel="Tecnologías utilizadas por Nexbloq"
      />
    </div>
  );
}
