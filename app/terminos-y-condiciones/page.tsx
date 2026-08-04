import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
import LegalJumpButton from "@/components/legal/legal-jump-button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Términos y condiciones",
  description:
    "Consulta los términos y condiciones que regulan los servicios digitales y de desarrollo web de Nexbloq.",
  path: "/terminos-y-condiciones",
});

type TermsSection = {
  title: string;
  icon: LucideIcon;
  content: string;
};

const termsSections: TermsSection[] = [
  {
    title: "1. Aceptación de los términos",
    icon: CheckCircle2,
    content: `Al acceder y utilizar los servicios de NEXBLOQ E.I.R.L., con domicilio en Lima, Perú, usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, deberá abstenerse de utilizar nuestros servicios.`,
  },
  {
    title: "2. Descripción de servicios",
    icon: FileText,
    content: `NEXBLOQ es una empresa especializada en el desarrollo de sitios web, diseño UI/UX y soluciones digitales personalizadas. Nuestros servicios incluyen, pero no se limitan a: diseño web, desarrollo frontend y backend, comercio electrónico, optimización SEO y mantenimiento técnico.`,
  },
  {
    title: "3. Propiedad intelectual",
    icon: Scale,
    content: `Todo el contenido desarrollado por NEXBLOQ, incluyendo código fuente, diseños, logotipos y documentación, es propiedad intelectual de NEXBLOQ hasta que se haya completado el pago total del proyecto. Una vez cancelado el servicio en su totalidad, los derechos de propiedad intelectual del trabajo desarrollado específicamente para el cliente serán transferidos al mismo, exceptuando librerías, frameworks y componentes de código abierto.`,
  },
  {
    title: "4. Condiciones de pago",
    icon: ShieldCheck,
    content: `Los pagos se realizarán según la propuesta comercial acordada, generalmente bajo el siguiente esquema:

• 50% al inicio del proyecto
• 25% al presentar avances significativos
• 25% al finalizar y entregar el proyecto

Aceptamos transferencias bancarias, Yape y Plin. Los precios están expresados en Soles (PEN) e incluyen IGV según la legislación peruana vigente.`,
  },
  {
    title: "5. Política de reembolsos",
    icon: AlertTriangle,
    content: `Una vez iniciado el trabajo, no se realizarán reembolsos del anticipo pagado. En caso de cancelación del proyecto por parte del cliente, NEXBLOQ retendrá el porcentaje correspondiente al trabajo ya realizado. Los reembolsos solo aplican para situaciones excepcionales y serán evaluados caso por caso.`,
  },
  {
    title: "6. Responsabilidades del cliente",
    icon: Scale,
    content: `El cliente se compromete a:

• Proporcionar contenido, imágenes y materiales necesarios en los plazos establecidos
• Revisar y aprobar los avances en los tiempos acordados
• Cumplir con los pagos según el cronograma establecido
• Informar sobre requerimientos legales específicos de su industria

Los retrasos por parte del cliente pueden afectar los tiempos de entrega establecidos.`,
  },
  {
    title: "7. Limitación de responsabilidad",
    icon: AlertTriangle,
    content: `NEXBLOQ no será responsable por:

• Daños indirectos, incidentales o consecuentes
• Pérdidas de beneficios o ingresos
• Problemas derivados de fuerza mayor o caso fortuito
• Errores en contenido proporcionado por el cliente
• Vulnerabilidades en software de terceros

Nuestra responsabilidad máxima en cualquier reclamación será limitada al monto total pagado por el cliente por los servicios en cuestión.`,
  },
  {
    title: "8. Protección de datos personales",
    icon: Scale,
    content: `NEXBLOQ cumple con la Ley Peruana de Protección de Datos Personales (Ley N° 29733) y su Reglamento. Los datos personales recopilados serán utilizados únicamente para los fines del servicio contratado y no serán compartidos con terceros sin consentimiento expreso, excepto cuando sea requerido por ley.`,
  },
  {
    title: "9. Confidencialidad",
    icon: FileText,
    content: `Ambas partes se comprometen a mantener la confidencialidad de la información comercial, técnica y estratégica compartida durante la relación contractual. Esta obligación permanecerá vigente incluso después de finalizado el contrato.`,
  },
  {
    title: "10. Hosting y dominios",
    icon: FileText,
    content: `El hosting y registro de dominios pueden ser gestionados por NEXBLOQ o por el cliente. Cuando NEXBLOQ gestiona estos servicios, el cliente será informado sobre los costos anuales de renovación. La no renovación puede resultar en la pérdida del dominio o la suspensión del sitio web.`,
  },
  {
    title: "11. Mantenimiento y soporte",
    icon: Scale,
    content: `El mantenimiento post-lanzamiento no está incluido en el desarrollo inicial, a menos que se contrate específicamente. Ofrecemos planes de mantenimiento mensuales o anuales que incluyen actualizaciones de seguridad, backups y soporte técnico.`,
  },
  {
    title: "12. Garantías",
    icon: AlertTriangle,
    content: `NEXBLOQ ofrece una garantía de 30 días posteriores a la entrega final para corregir errores de funcionalidad directamente atribuibles a nuestro desarrollo. Esta garantía no cubre modificaciones realizadas por terceros, problemas de hosting o actualizaciones de software de terceros.`,
  },
  {
    title: "13. Modificaciones de los términos",
    icon: FileText,
    content: `NEXBLOQ se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas a los clientes existentes y publicadas en nuestro sitio web. El uso continuado de nuestros servicios después de dichas modificaciones constituye la aceptación de los nuevos términos.`,
  },
  {
    title: "14. Legislación aplicable y jurisdicción",
    icon: Scale,
    content: `Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia derivada de estos términos será resuelta en los tribunales de Lima, Perú, renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles.`,
  },
  {
    title: "15. Contacto",
    icon: FileText,
    content: `Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos a:

• Email: nexbloq@gmail.com
• Teléfono: +51 946 062 811

Última actualización: 25/05/2026`,
  },
];

function renderContent(content: string) {
  return content.split("\n\n").map((block, blockIndex) => {
    const lines = block.split("\n");
    const bulletLines = lines.filter((line) => line.startsWith("• "));
    const regularLines = lines.filter((line) => !line.startsWith("• "));

    return (
      <div key={`${blockIndex}-${block.slice(0, 18)}`} className="space-y-3">
        {regularLines.length > 0 && (
          <p className="whitespace-pre-line">{regularLines.join("\n")}</p>
        )}
        {bulletLines.length > 0 && (
          <ul className="space-y-2.5">
            {bulletLines.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 shrink-0 rounded-full bg-indigo-600"
                />
                <span>{line.slice(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });
}

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <section className="showcase-grid w-full max-w-7xl overflow-hidden rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] sm:text-base">
              Información legal
            </p>
          </div>

          <h1 className="mt-7 text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Términos y
            <br />
            <span className="font-light italic">condiciones.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            Reglas claras para trabajar mejor. Aquí detallamos las condiciones
            que regulan nuestros servicios y la relación con cada cliente.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600">
              <CalendarDays
                aria-hidden="true"
                className="size-4 text-indigo-600"
              />
              Actualizado el 25/05/2026
            </div>
            <LegalJumpButton
              targetId="contenido-terminos"
              label="Leer los términos"
            />
          </div>
        </div>
      </section>

      <section
        id="contenido-terminos"
        data-scroll-reveal-early=""
        className="w-full max-w-7xl scroll-mt-24 py-16 sm:py-20 lg:py-28"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(250px,0.72fr)_minmax(0,2fr)] lg:gap-12">
          <aside className="rounded-2xl bg-white p-5 sm:p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 pb-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <Scale aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                  Navegación
                </p>
                <h2 className="mt-1 font-semibold">
                  Contenido de los términos
                </h2>
              </div>
            </div>

            <nav
              aria-label="Secciones de los términos y condiciones"
              className="2xl:mt-4 grid gap-x-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {termsSections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terminos-${index + 1}`}
                  className="group flex min-h-8 items-center gap-3 py-2 text-sm text-zinc-500 transition-colors hover:text-indigo-600 2xl:min-h-10"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold leading-none tabular-nums text-white transition-colors group-hover:text-white">
                    {String(index + 1)}
                  </span>
                  <span className="text-xs leading-5 lg:text-sm">
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-5 sm:space-y-6">
            {termsSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <article
                  id={`terminos-${index + 1}`}
                  key={section.title}
                  data-scroll-reveal-item
                  className="scroll-mt-24 rounded-2xl bg-white p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white sm:size-12">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <div className="min-w-0 pt-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                        Sección {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold leading-tight tracking-tight">
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 space-y-5 text-xs leading-4 text-zinc-600 sm:text-sm sm:leading-6">
                    {renderContent(section.content)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
