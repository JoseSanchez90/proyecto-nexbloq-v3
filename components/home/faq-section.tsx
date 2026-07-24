import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

interface FrequentlyAskedQuestion {
  question: string;
  answer: string;
}

const questions: FrequentlyAskedQuestion[] = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web?",
    answer:
      "Depende de la cantidad de secciones, las funcionalidades y la disponibilidad del contenido. Una landing page puede requerir aproximadamente entre dos y tres semanas; el cronograma definitivo se establece después de conocer el alcance.",
  },
  {
    question: "¿Qué incluye el servicio de desarrollo web?",
    answer:
      "Puede incluir planificación, estructura de contenido, diseño de interfaz, desarrollo, adaptación móvil, formularios, optimización básica, pruebas y publicación. Los entregables exactos se detallan en cada propuesta.",
  },
  {
    question: "¿El dominio y el hosting están incluidos?",
    answer:
      "Depende de la propuesta. Cuando no estén incluidos, te orientaré para elegirlos y configurarlos. Los servicios de dominio, hosting, correo y otras plataformas suelen tener pagos independientes.",
  },
  {
    question: "¿La página funcionará en celulares?",
    answer:
      "Sí. Cada interfaz se adapta a celulares, tablets y computadoras, revisando especialmente la legibilidad, la navegación, los botones y los formularios.",
  },
  {
    question: "¿Incluyes posicionamiento SEO?",
    answer:
      "Puedo incluir una configuración técnica inicial con títulos, descripciones, estructura semántica, sitemap y optimización básica. Las primeras posiciones en Google no son inmediatas ni pueden garantizarse.",
  },
  {
    question: "¿Ofreces mantenimiento después de publicar la web?",
    answer:
      "Sí. Puede contratarse mediante un plan periódico o solicitudes puntuales. Las actividades y tiempos de atención se definen según el servicio acordado.",
  },
  {
    question: "¿Cómo comenzamos?",
    answer:
      "Envíame una descripción breve de tu negocio, el tipo de página que necesitas, las funciones principales y cualquier referencia visual. Con esa información podré revisar el alcance y preparar una propuesta.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-8 px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionHeading
        eyebrow="PREGUNTAS FRECUENTES"
        title="RESPUESTAS CLARAS ANTES"
        accent="DE COMENZAR."
        description="Estas respuestas explican de manera general cómo trabajo. Las condiciones definitivas se detallan en la propuesta de cada proyecto."
      />

      <div className="mx-auto mt-14 max-w-4xl space-y-3 lg:mt-20">
        {questions.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-2xl border border-zinc-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-semibold tracking-tight outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5635ff]/40 sm:px-7">
              {question}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5635ff]/10 text-[#5635ff]">
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
              </span>
            </summary>
            <p className="px-6 pb-6 pr-16 text-sm leading-7 text-zinc-500 sm:px-7 sm:pr-20">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
