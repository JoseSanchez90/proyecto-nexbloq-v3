export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  number: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  introduction: string;
  about: string;
  steps: ServiceStep[];
  whyNexbloq: string;
};

export const homeServices: ServiceDetail[] = [
  {
    number: "01",
    slug: "landing-pages",
    title: "Landing pages",
    seoTitle: "Landing pages profesionales en Lima, Perú",
    seoDescription:
      "Diseño y desarrollo de landing pages rápidas, responsive y orientadas a generar consultas, registros o ventas para negocios en Perú.",
    description: "Páginas enfocadas en presentar y convertir.",
    image: "/home/landingpage.webp",
    imageAlt: "Diseño de una landing page profesional",
    introduction:
      "Páginas estratégicas para presentar una oferta con claridad y convertir visitas en consultas, registros o ventas.",
    about:
      "Una landing page concentra la atención en un objetivo concreto. Organizamos el contenido, la propuesta visual y las llamadas a la acción para que cada sección ayude al visitante a comprender la oferta y avanzar con confianza.",
    steps: [
      {
        title: "Estrategia y objetivo",
        description:
          "Definimos la audiencia, la acción principal y el mensaje que debe sostener toda la experiencia.",
      },
      {
        title: "Contenido y estructura",
        description:
          "Ordenamos la información en una secuencia clara que responde dudas y comunica beneficios.",
      },
      {
        title: "Diseño y desarrollo",
        description:
          "Creamos una interfaz rápida, responsive y coherente con la identidad del negocio.",
      },
      {
        title: "Medición y mejora",
        description:
          "Preparamos los puntos de conversión y una base lista para analizar y optimizar resultados.",
      },
    ],
    whyNexbloq:
      "No diseñamos una página aislada: construimos una experiencia alineada con tus objetivos, fácil de mantener y preparada para crecer con nuevas campañas o contenidos.",
  },
  {
    number: "02",
    slug: "sitios-corporativos",
    title: "Corporativos",
    seoTitle: "Sitios web corporativos en Lima, Perú",
    seoDescription:
      "Diseño y desarrollo de sitios web corporativos profesionales que presentan servicios, fortalecen la confianza y generan oportunidades comerciales.",
    description: "Presencias digitales completas para empresas.",
    image: "/home/corporativo.webp",
    imageAlt: "Sitio web corporativo desarrollado por Nexbloq",
    introduction:
      "Sitios corporativos que comunican la propuesta, los servicios y la confianza de una empresa de forma profesional.",
    about:
      "Un sitio corporativo debe ayudar a entender quién eres, qué haces y por qué deberían elegirte. Diseñamos una arquitectura clara que conecta la información institucional con las necesidades reales de clientes y equipos.",
    steps: [
      {
        title: "Arquitectura de información",
        description:
          "Definimos páginas, jerarquías y recorridos para que el contenido sea fácil de encontrar.",
      },
      {
        title: "Identidad digital",
        description:
          "Traducimos la personalidad de la empresa a un sistema visual consistente y reconocible.",
      },
      {
        title: "Desarrollo responsive",
        description:
          "Construimos una experiencia sólida en móvil, tablet, laptop y pantallas de escritorio.",
      },
      {
        title: "Base técnica y SEO",
        description:
          "Preparamos rendimiento, estructura semántica y fundamentos para posicionamiento orgánico.",
      },
    ],
    whyNexbloq:
      "Combinamos estrategia, diseño y desarrollo en un solo proceso para que el sitio represente correctamente al negocio hoy y pueda incorporar nuevas secciones mañana.",
  },
  {
    number: "03",
    slug: "rediseno-ux-ui",
    title: "Rediseño UX/UI",
    seoTitle: "Rediseño UX/UI de páginas y sistemas web",
    seoDescription:
      "Rediseño UX/UI para mejorar la claridad, usabilidad, velocidad y conversión de páginas, plataformas y sistemas web existentes.",
    description: "Experiencias más claras, modernas y rápidas.",
    image: "/home/rediseño.webp",
    imageAlt: "Proceso de rediseño de experiencia web",
    introduction:
      "Rediseñamos productos y sitios existentes para mejorar su claridad, facilidad de uso y capacidad de comunicar.",
    about:
      "El rediseño parte de comprender qué funciona, qué genera fricción y qué necesita el negocio. No cambiamos únicamente la apariencia: revisamos estructura, recorridos, contenido y comportamiento para conseguir una experiencia más útil.",
    steps: [
      {
        title: "Diagnóstico UX",
        description:
          "Analizamos el producto actual, sus recorridos principales y los puntos donde el usuario encuentra dificultades.",
      },
      {
        title: "Jerarquía y prototipo",
        description:
          "Reorganizamos la información y validamos la nueva experiencia antes de desarrollarla.",
      },
      {
        title: "Sistema visual",
        description:
          "Creamos componentes consistentes que modernizan la interfaz y facilitan futuras mejoras.",
      },
      {
        title: "Implementación progresiva",
        description:
          "Planificamos el cambio para reducir riesgos y conservar las funcionalidades importantes.",
      },
    ],
    whyNexbloq:
      "Cada decisión de rediseño responde a un problema concreto. El resultado mantiene la esencia del proyecto, pero mejora la forma en que las personas lo entienden y utilizan.",
  },
  {
    number: "04",
    slug: "sistemas-web",
    title: "Sistemas web",
    seoTitle: "Desarrollo de sistemas web personalizados en Perú",
    seoDescription:
      "Desarrollo de sistemas web a medida para centralizar información, automatizar tareas y optimizar procesos de empresas y equipos.",
    description: "Herramientas para centralizar y ordenar procesos.",
    image: "/home/dashboard.webp",
    imageAlt: "Sistema web personalizado para empresas",
    introduction:
      "Herramientas digitales a medida para organizar información, automatizar tareas y simplificar procesos internos.",
    about:
      "Un sistema web convierte necesidades operativas en flujos claros. Diseñamos la solución alrededor de las personas que la utilizarán, priorizando las tareas frecuentes, la lectura de información y la capacidad de escalar.",
    steps: [
      {
        title: "Análisis del proceso",
        description:
          "Documentamos usuarios, reglas, datos y acciones necesarias antes de definir la solución.",
      },
      {
        title: "Experiencia y arquitectura",
        description:
          "Diseñamos módulos, permisos y recorridos que mantienen la operación ordenada.",
      },
      {
        title: "Desarrollo e integraciones",
        description:
          "Construimos funcionalidades y conectamos los servicios que el negocio necesita.",
      },
      {
        title: "Pruebas y evolución",
        description:
          "Validamos escenarios reales y dejamos una base preparada para futuras mejoras.",
      },
    ],
    whyNexbloq:
      "Trabajamos de forma cercana para convertir procesos reales en herramientas comprensibles. La tecnología se adapta al negocio, no el negocio a una plantilla genérica.",
  },
];

export function getServiceBySlug(slug: string) {
  return homeServices.find((service) => service.slug === slug);
}
