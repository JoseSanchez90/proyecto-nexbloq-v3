export interface Project {
  image: string;
  title: string;
  category: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    image: "/projects/freightflow1.webp",
    title: "FreightFlow CRM",
    category: "Sistema web",
    year: "2026",
  },
  {
    image: "/projects/smiledental.webp",
    title: "Smile Dental",
    category: "Landing page",
    year: "2025",
  },
  // {
  //   image: "/projects-images/FreightFlow-CRM-de-Transporte-2.webp",
  //   title: "Panel operativo FreightFlow",
  //   category: "Gestión comercial",
  //   year: "2026",
  //   featured: true,
  // },
  {
    image: "/projects/eufrosine.webp",
    title: "Eufrosine",
    category: "Sistema web",
    year: "2024",
  },
  {
    image: "/projects/mwtrazo.webp",
    title: "MW Trazo",
    category: "Sitio corporativo",
    year: "2023",
  },
];
