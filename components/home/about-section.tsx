import Image from "next/image";
import {
  MessagesSquare,
  FolderOpenDot,
  TabletSmartphone,
  Workflow,
} from "lucide-react";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const statColumns = [
  [
    {
      icon: FolderOpenDot,
      value: "100%",
      label: "Diseño personalizado",
      title: "Una presencia digital a medida",
      text: "Cada interfaz se construye alrededor de los objetivos y necesidades reales de tu negocio.",
      tall: true,
    },
    {
      icon: MessagesSquare,
      value: "Chat",
      label: "Atención directa",
    },
  ],
  [
    {
      icon: Workflow,
      value: "5",
      label: "Etapas claras",
    },
    {
      icon: TabletSmartphone,
      value: "Multi",
      label: "Dispositivo",
      title: "Preparado para cada pantalla",
      text: "Experiencias optimizadas para celulares, tablets, laptops y computadoras.",
      tall: true,
    },
  ],
];

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="w-full max-w-7xl scroll-mt-24 py-20 sm:py-28"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="order-2 lg:sticky lg:top-24 lg:order-1">
          <div className="relative min-h-128 overflow-hidden rounded-xl sm:min-h-206 lg:min-h-148">
            <Image
              src="/home/about.webp"
              alt="Diseño y desarrollo web realizado por Nexbloq"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-scale-down"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Sobre Nexbloq
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] uppercase sm:text-5xl">
            Soluciones web pensadas para presentar tu negocio y trabajar mejor
            en el <span className="font-light italic">entorno digital.</span>
          </h2>
          <div className="mt-6 w-fit">
            <ButtonPrimary
              text="Conocer el proceso"
              href="#proceso"
              size="sm"
            />
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {statColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="grid gap-3">
                {column.map(
                  ({ icon: Icon, value, label, title, text, tall }) => (
                    <article
                      key={label}
                      className={`flex flex-col rounded-2xl bg-white p-4 sm:p-6 ${
                        tall
                          ? "min-h-80 justify-between sm:min-h-96"
                          : "min-h-40 justify-center sm:min-h-36"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-indigo-600 sm:size-20">
                          <Icon
                            aria-hidden="true"
                            className="size-6 sm:size-7"
                          />
                        </span>
                        <div>
                          <p className="text-3xl font-bold leading-none tracking-tight">
                            {value}
                          </p>
                          <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                            {label}
                          </p>
                        </div>
                      </div>
                      {tall && (
                        <div className="mt-12 border-t border-zinc-200 pt-7">
                          <h3 className="max-w-64 text-2xl font-semibold leading-tight">
                            {title}
                          </h3>
                          <p className="mt-5 max-w-64 text-sm leading-6 text-zinc-500">
                            {text}
                          </p>
                        </div>
                      )}
                    </article>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
