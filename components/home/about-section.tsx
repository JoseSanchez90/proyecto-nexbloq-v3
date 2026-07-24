import { Check, Code2, MessagesSquare, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const principles = [
  "Comunicación directa conmigo durante todas las etapas",
  "Decisiones de diseño alineadas con objetivos concretos",
  "Código organizado para facilitar ajustes y crecimiento",
];

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-8 px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      <SectionHeading
        title="DESARROLLO DIRECTO Y"
        accent="PERSONALIZADO."
        description="Soy Jesús, desarrollador independiente y creador de Nexbloq. Ayudo a negocios y profesionales a construir una presencia digital clara, moderna y funcional."
      />

      <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="relative overflow-hidden rounded-3xl bg-[#5635ff] p-8 text-white sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <Sparkles className="relative h-9 w-9" />
          <p className="relative mt-16 text-sm font-medium uppercase tracking-[0.18em] text-white/70">
            Desarrollo web independiente
          </p>
          <h3 className="relative mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Me encargo personalmente de cada etapa, desde la planificación hasta
            la publicación.
          </h3>
          <p className="relative mt-6 max-w-xl leading-7 text-white/80">
            Antes de comenzar a desarrollar, defino contigo los objetivos, el
            público y las acciones que debería facilitar la web. Así, cada
            decisión responde a una función concreta.
          </p>

          <div className="relative mt-10 grid grid-cols-2 gap-4 border-t border-white/20 pt-8">
            <div>
              <p className="text-2xl font-semibold sm:text-3xl">Directo</p>
              <p className="mt-1 text-sm text-white/70">Sin intermediarios</p>
            </div>
            <div>
              <p className="text-2xl font-semibold sm:text-3xl">A medida</p>
              <p className="mt-1 text-sm text-white/70">
                Sin plantillas genéricas
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <Code2 className="h-5 w-5 text-[#5635ff]" />
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <MessagesSquare className="h-5 w-5 text-[#5635ff]" />
            </span>
          </div>

          <h3 className="mt-10 text-2xl font-semibold tracking-tight">
            Un proceso claro y enfocado en lo necesario.
          </h3>

          <div className="mt-8 space-y-5">
            {principles.map((principle) => (
              <div key={principle} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5635ff] text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-zinc-600">{principle}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
