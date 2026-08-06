export interface Project {
  slug: string;
  cardImage: string;
  image: string;
  gallery: string[];
  title: string;
  category: string;
  year: string;
  client: string;
  date: string;
  tools: string[];
  demo?: string;
  services: string[];
  introduction: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "mibuss",
    cardImage: "/projects/freightflow1.webp",
    image: "/projects/mibuss/mibuss0.webp",
    gallery: [
      "/projects/mibuss/mibuss1.webp",
      "/projects/mibuss/mibuss2.webp",
      "/projects/mibuss/mibuss3.webp",
      "/projects/mibuss/mibuss4.webp",
      "/projects/mibuss/mibuss5.webp",
    ],
    title: "MiBuss CRM",
    category: "Sistema web",
    year: "2026",
    client: "MiBuss",
    date: "2026",
    tools: ["Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://mibuss.vercel.app/login",
    services: ["Estrategia UX", "Diseño de interfaz", "Desarrollo web"],
    introduction:
      "Una plataforma de gestión creada para centralizar la operación comercial y facilitar el seguimiento de cada proceso.",
    overview:
      "FreightFlow CRM transforma información dispersa en una experiencia de trabajo clara. El proyecto reúne clientes, oportunidades y tareas dentro de una interfaz consistente, preparada para crecer junto con la operación.",
    challenge:
      "Organizar procesos con múltiples estados y responsables sin añadir complejidad al trabajo diario del equipo.",
    solution:
      "Diseñamos una arquitectura modular, paneles de lectura rápida y recorridos centrados en las acciones más frecuentes.",
    result:
      "Una herramienta más ordenada y escalable, con mejor visibilidad sobre la actividad comercial y sus prioridades.",
  },
  {
    slug: "smile-dental",
    cardImage: "/projects/smiledental.webp",
    image: "/projects/smile/smile0.webp",
    gallery: [
      "/projects/smile/smile1.webp",
      "/projects/smile/smile2.webp",
      "/projects/smile/smile5.webp",
      "/projects/smile/smile4.webp",
      "/projects/smile/smile3.webp",
    ],
    title: "Smile Dental",
    category: "Landing page",
    year: "2025",
    client: "Smile Dental",
    date: "2025",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    demo: "https://smile-dental-delta.vercel.app/",
    services: ["Dirección visual", "UX/UI", "Desarrollo responsive"],
    introduction:
      "Una landing page cercana y profesional para presentar servicios odontológicos y convertir visitas en consultas.",
    overview:
      "Smile Dental necesitaba comunicar confianza desde el primer contacto. La propuesta combina una jerarquía visual simple, contenido fácil de recorrer y llamadas a la acción visibles en todos los dispositivos.",
    challenge:
      "Presentar diferentes tratamientos de manera comprensible sin saturar al usuario con información técnica.",
    solution:
      "Construimos una experiencia cálida, con bloques breves, navegación directa y puntos de contacto estratégicos.",
    result:
      "Una presencia digital clara y adaptable que facilita el descubrimiento de servicios y el inicio de una conversación.",
  },
  {
    slug: "hospital-florencia",
    cardImage: "/projects/hospital-florencia.webp",
    image: "/projects/florencia/hospital-florencia0.webp",
    gallery: [
      "/projects/florencia/hospital-florencia1.webp",
      "/projects/florencia/hospital-florencia2.webp",
      "/projects/florencia/hospital-florencia3.webp",
      "/projects/florencia/hospital-florencia4.webp",
      "/projects/florencia/hospital-florencia5.webp",
    ],
    title: "Hospital Florencia",
    category: "Gestion hospitalaria",
    year: "2026",
    client: "Hospital Florencia",
    date: "2026",
    tools: ["Next.js", "TypeScript", "Firebase"],
    demo: "https://florencia-panel.vercel.app/",
    services: ["Estrategia UX", "Diseño de interfaz", "Desarrollo web"],
    introduction:
      "Una plataforma de gestión hospitalaria creada para centralizar la operación hospitalaria y facilitar el seguimiento de cada proceso.",
    overview:
      "El Hospital Florencia transforma información dispersa en una experiencia de trabajo clara. El proyecto reúne pacientes, historias clínicas y tareas dentro de una interfaz consistente, preparada para crecer junto con la operación.",
    challenge:
      "Organizar procesos clínicos y administrativos con múltiples estados y responsables sin añadir complejidad al trabajo diario del equipo.",
    solution:
      "Diseñamos una arquitectura modular, paneles de lectura rápida y recorridos centrados en las acciones más frecuentes.",
    result:
      "Una herramienta más ordenada y escalable, con mejor visibilidad sobre la actividad hospitalaria y sus prioridades.",
  },
  {
    slug: "eufrosine",
    cardImage: "/projects/eufrosine.webp",
    image: "/projects/eufrosine/eufrosine0.webp",
    gallery: [
      "/projects/eufrosine/eufrosine1.webp",
      "/projects/eufrosine/eufrosine2.webp",
      "/projects/eufrosine/eufrosine3.webp",
      "/projects/eufrosine/eufrosine4.webp",
      "/projects/eufrosine/eufrosine5.webp",
    ],
    title: "Eufrosine",
    category: "Sistema web",
    year: "2024",
    client: "Eufrosine",
    date: "2024",
    tools: ["React", "TypeScript", "Supabase"],
    demo: "https://eufrosinepanel.vercel.app/login",
    services: ["Arquitectura UX", "Sistema de diseño", "Desarrollo web"],
    introduction:
      "Un sistema digital diseñado para convertir procesos complejos en una experiencia sencilla, coherente y fácil de administrar.",
    overview:
      "Eufrosine parte de una estructura flexible que prioriza la claridad. Cada módulo mantiene patrones visuales consistentes para reducir la curva de aprendizaje y acompañar futuras funcionalidades.",
    challenge:
      "Unificar distintas tareas y tipos de información dentro de una experiencia que se sintiera ligera y predecible.",
    solution:
      "Definimos componentes reutilizables, jerarquías claras y flujos guiados para las operaciones principales.",
    result:
      "Una base digital consistente, preparada para incorporar nuevas herramientas sin perder facilidad de uso.",
  },
  {
    slug: "mw-trazo",
    cardImage: "/projects/mwtrazo.webp",
    image: "/projects/mwtrazo/mwtrazo0.webp",
    gallery: [
      "/projects/mwtrazo/mwtrazo1.webp",
      "/projects/mwtrazo/mwtrazo2.webp",
      "/projects/mwtrazo/mwtrazo3.webp",
      "/projects/mwtrazo/mwtrazo4.webp",
      "/projects/mwtrazo/mwtrazo5.webp",
    ],
    title: "MW Trazo",
    category: "Sitio corporativo",
    year: "2023",
    client: "MW Trazo",
    date: "2023",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    demo: "https://mwtrazo.vercel.app/",
    services: ["Estrategia de contenido", "Diseño web", "Desarrollo frontend"],
    introduction:
      "Un sitio corporativo que presenta la experiencia, los servicios y la propuesta de valor de MW Trazo con mayor claridad.",
    overview:
      "La nueva presencia digital organiza la información comercial alrededor de las necesidades del visitante. El diseño equilibra personalidad y sobriedad para reforzar la confianza en cada sección.",
    challenge:
      "Convertir una oferta amplia en un relato directo que ayudara a entender rápidamente el valor de la empresa.",
    solution:
      "Creamos una estructura editorial flexible, una identidad visual consistente y una navegación enfocada en la consulta.",
    result:
      "Un sitio profesional y responsive que comunica mejor la propuesta de MW Trazo y facilita el contacto comercial.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
