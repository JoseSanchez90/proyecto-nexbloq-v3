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
    <span className="flex items-center gap-3 text-zinc-900">
      <img
        src={src}
        alt=""
        width={36}
        height={36}
        aria-hidden
        className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
      />
      <span className="whitespace-nowrap text-base font-semibold tracking-tight sm:text-xl lg:text-2xl">
        {name}
      </span>
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

export default function TechnologyCarousel() {
  return (
    <div className="mt-8 w-full overflow-hidden py-7 sm:mt-10 sm:py-9 lg:mt-12 lg:py-10">
      <LogoLoop
        logos={technologyLogos}
        speed={72}
        direction="left"
        logoHeight={40}
        gap={52}
        pauseOnHover={false}
        scaleOnHover={false}
        fadeOut
        ariaLabel="Tecnologías utilizadas por Nexbloq"
      />
    </div>
  );
}
