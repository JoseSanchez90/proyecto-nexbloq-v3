export interface Project {
  slug: string;
  cardImage: string;
  image: string;
  gallery: string[];
  imagePosition?: "center";
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
    slug: "smile-dental",
    cardImage: "/projects/smile/mockup-portada.webp",
    image: "/projects/smile/mockup-portada.webp",
    imagePosition: "center",
    gallery: [
      "/projects/smile/mockup-nosotros.webp",
      "/projects/smile/mockup-servicios.webp",
      "/projects/smile/mockup-central.webp",
      "/projects/smile/mockup-preguntas.webp",
      "/projects/smile/mockup-contacto.webp",
    ],
    title: "Smile Dental",
    category: "Landing page",
    year: "2025",
    client: "Smile Dental",
    date: "2025",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    demo: "https://clinicasmiledental.vercel.app/",
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
    slug: "mw-trazo",
    cardImage: "/projects/mwtrazo/mockup-portada.webp",
    image: "/projects/mwtrazo/mockup-portada.webp",
    imagePosition: "center",
    gallery: [
      "/projects/mwtrazo/mockup-nosotros.webp",
      "/projects/mwtrazo/mockup-proyectos.webp",
      "/projects/mwtrazo/mockup-servicios.webp",
      "/projects/mwtrazo/mockup-preguntas.webp",
      "/projects/mwtrazo/mockup-contacto.webp",
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
  {
    slug: "bearys",
    cardImage: "/projects/bearys.webp",
    image: "/projects/bearys/bearys0.webp",
    gallery: [
      "/projects/bearys/bearys1.webp",
      "/projects/bearys/bearys2.webp",
      "/projects/bearys/bearys3.webp",
      "/projects/bearys/bearys4.webp",
      "/projects/bearys/bearys5.webp",
    ],
    title: "Bearys",
    category: "E-commerce",
    year: "2026",
    client: "Bearys",
    date: "2026",
    tools: ["React.js", "Tailwind CSS", "Neon Console"],
    demo: "https://bearys.vercel.app/",
    services: ["Dirección visual", "Diseño web", "Desarrollo frontend"],
    introduction:
      "Un e-commerce básico, sin pasarela de pagos, compras directas por WhatsApp.",
    overview:
      "El nuevo e-commerce organiza la información comercial alrededor de las necesidades del visitante. El diseño equilibra personalidad y sobriedad para reforzar la confianza en cada sección.",
    challenge:
      "La falta de una plataforma propia que impedia comercializar sus productos a mayor escala, sin pagar comisiones por venta.",
    solution:
      "Creamos una estructura visual atractiva, una navegación sencilla y un carrito de compras que genera un resumen del pedido listo para enviar por WhatsApp",
    result:
      "Un sitio profesional y responsive que comunica mejor la propuesta de Bearys y facilita el contacto comercial.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
