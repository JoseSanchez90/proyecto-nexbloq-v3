export interface Project {
  image: string;
  title: string;
  category: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    image: "/home/FreightFlow-1.webp",
    title: "FreightFlow CRM",
    category: "Sistema web",
    year: "2026",
  },
  {
    image: "/home/SmileDental-1.webp",
    title: "Smile Dental",
    category: "Landing page",
    year: "2026",
  },
  {
    image: "/projects-images/FreightFlow-CRM-de-Transporte-2.webp",
    title: "Panel operativo FreightFlow",
    category: "Gestión comercial",
    year: "2026",
    featured: true,
  },
  {
    image: "/projects-images/concepto-desarrollo-web.webp",
    title: "Landing profesional",
    category: "Desarrollo web",
    year: "2026",
  },
  {
    image: "/services-images/sitios-corporativos.webp",
    title: "Presencia corporativa",
    category: "Sitio empresarial",
    year: "2026",
  },
];
