import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { CalendarDays, Eye, Lock, Mail, Shield } from "lucide-react";
import LegalJumpButton from "@/components/legal/legal-jump-button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Conoce cómo Nexbloq recopila, utiliza, almacena y protege tus datos personales.",
  path: "/politicas-de-privacidad",
});

type PrivacySection = {
  title: string;
  icon: LucideIcon;
  content: string;
};

const privacySections: PrivacySection[] = [
  {
    title: "1. Información general",
    icon: Shield,
    content: `NEXBLOQ, con domicilio en Lima, Perú, se compromete a proteger la privacidad de los datos personales de sus usuarios de acuerdo con la Ley Peruana de Protección de Datos Personales (Ley N° 29733) y su Reglamento.

Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal que usted nos proporciona a través de nuestro sitio web www.nexbloq.com y nuestros servicios de desarrollo web.`,
  },
  {
    title: "2. Datos personales que recopilamos",
    icon: Eye,
    content: `Recopilamos los siguientes tipos de información personal:

• Información de contacto: Nombre completo, dirección de correo electrónico, número de teléfono, empresa
• Información del proyecto: Descripción del proyecto, requerimientos técnicos, presupuesto
• Información técnica: Dirección IP, tipo de dispositivo, navegador, páginas visitadas, tiempo de permanencia
• Datos de comunicación: Historial de correos electrónicos, chats y comunicaciones con nuestro equipo

No recopilamos datos sensibles como información financiera detallada, datos de salud, creencias religiosas o políticas.`,
  },
  {
    title: "3. Finalidades del tratamiento de datos",
    icon: Lock,
    content: `Utilizamos sus datos personales para las siguientes finalidades:

• Ejecutar y gestionar los servicios de desarrollo web contratados
• Enviar cotizaciones, propuestas y facturas
• Proporcionar soporte técnico y mantenimiento
• Comunicar actualizaciones, nuevos servicios o promociones (con su consentimiento)
• Mejorar la calidad de nuestros servicios y experiencia del usuario
• Cumplir con obligaciones legales y regulatorias
• Prevenir fraudes y asegurar la integridad de nuestros sistemas

El tratamiento de sus datos se basa en su consentimiento, la ejecución del contrato y nuestros intereses legítimos.`,
  },
  {
    title: "4. Consentimiento",
    icon: Mail,
    content: `Al utilizar nuestros servicios y proporcionar sus datos personales, usted otorga su consentimiento expreso para el tratamiento de sus datos conforme a lo establecido en esta Política de Privacidad.

Puede retirar su consentimiento en cualquier momento contactándonos a nexbloq@gmail.com. Sin embargo, el retiro del consentimiento podría afectar nuestra capacidad para prestarle los servicios contratados.

Para fines de marketing y comunicaciones comerciales, solicitaremos su consentimiento explícito mediante opt-in.`,
  },
  {
    title: "5. Transferencia y almacenamiento de datos",
    icon: Shield,
    content: `Sus datos personales son almacenados en servidores seguros ubicados dentro del territorio peruano. En casos excepcionales, podríamos utilizar servicios de proveedores internacionales que cumplan con estándares de protección de datos equivalentes.

No vendemos, comercializamos ni transferimos sus datos personales a terceros con fines distintos a los establecidos en esta política, excepto cuando:
• Sea requerido por ley o autoridad competente
• Sea necesario para proteger nuestros derechos legales
• Usted haya dado su consentimiento explícito

Utilizamos los siguientes subcontratistas:
• Proveedores de hosting y cloud services
• Plataformas de comunicación y email marketing
• Herramientas de análisis y monitoreo web`,
  },
  {
    title: "6. Seguridad de los datos",
    icon: Lock,
    content: `Implementamos medidas técnicas, administrativas y físicas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen:

• Encriptación de datos sensibles
• Control de acceso basado en roles
• Firewalls y sistemas de detección de intrusiones
• Protocolos de seguridad SSL/TLS
• Capacitación periódica del personal en protección de datos
• Copias de seguridad regulares y procedimientos de recuperación

A pesar de nuestras medidas de seguridad, ninguna transmisión por internet o sistema de almacenamiento electrónico es 100% seguro.`,
  },
  {
    title: "7. Derechos ARCO",
    icon: Eye,
    content: `Usted tiene derecho a:

• ACCESO: Solicitar información sobre sus datos personales que tratamos
• RECTIFICACIÓN: Actualizar o corregir sus datos inexactos
• CANCELACIÓN: Solicitar la eliminación de sus datos cuando ya no sean necesarios
• OPOSICIÓN: Oponerse al tratamiento de sus datos para fines específicos
• Revocar su consentimiento en cualquier momento
• Solicitar la portabilidad de sus datos

Para ejercer estos derechos, puede contactarnos a:
Email: nexbloq@gmail.com
Teléfono: +51 946 062 811
Horario de atención: Lunes a Viernes 9:00 AM - 6:00 PM

Responderemos su solicitud dentro de los plazos establecidos por la ley peruana.`,
  },
  {
    title: "8. Conservación de datos",
    icon: Shield,
    content: `Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política, a menos que la ley requiera o permita un período de conservación más largo.

Los plazos específicos de conservación son:
• Datos de clientes activos: Durante la vigencia del contrato y 5 años posteriores
• Datos de prospectos: 2 años desde el último contacto
• Datos para fines legales: Según lo requiera la legislación aplicable
• Datos anonimizados: Podemos conservarlos indefinidamente para análisis estadísticos

Una vez cumplidos estos plazos, procederemos a la eliminación segura de sus datos.`,
  },
  {
    title: "9. Cookies y tecnologías similares",
    icon: Lock,
    content: `Utilizamos cookies y tecnologías similares para:

• Mejorar la funcionalidad y experiencia del usuario
• Analizar el tráfico y comportamiento en nuestro sitio web
• Personalizar el contenido y publicidad
• Recordar sus preferencias y configuraciones

Tipos de cookies que utilizamos:
• Cookies esenciales: Necesarias para el funcionamiento del sitio
• Cookies de análisis: Para entender cómo los usuarios interactúan con nuestro sitio
• Cookies de preferencias: Para recordar sus configuraciones
• Cookies de marketing: Para mostrar contenido relevante

Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.`,
  },
  {
    title: "10. Menores de edad",
    icon: Eye,
    content: `Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información personal de menores de edad.

Si usted es padre/madre o tutor y cree que su hijo nos ha proporcionado datos personales, contáctenos inmediatamente para solicitar la eliminación de dicha información.`,
  },
  {
    title: "11. Enlaces a terceros",
    icon: Shield,
    content: `Nuestro sitio web puede contener enlaces a sitios de terceros. Esta Política de Privacidad solo se aplica a los datos recopilados por NEXBLOQ. No somos responsables de las prácticas de privacidad de otros sitios web.

Le recomendamos leer las políticas de privacidad de cualquier sitio web que visite a través de nuestros enlaces.`,
  },
  {
    title: "12. Cambios en la Política de Privacidad",
    icon: Lock,
    content: `Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o requisitos legales. Le notificaremos sobre cambios significativos mediante:

• Notificación en nuestro sitio web
• Comunicación por correo electrónico
• Banner destacado en nuestra plataforma

La fecha de la última actualización se indicará al final de este documento. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de la política revisada.`,
  },
  {
    title: "13. Autoridad Nacional de Protección de Datos",
    icon: Mail,
    content: `Si considera que hemos vulnerado sus derechos de protección de datos, puede presentar una queja ante la Autoridad Nacional de Protección de Datos Personales del Perú:

Dirección: Jirón Carabaya N° 250, Cercado de Lima
Teléfono: (01) 625-4848
Web: www.minjus.gob.pe

Antes de presentar una queja, le agradecemos nos contacte para resolver cualquier inquietud directamente.`,
  },
  {
    title: "14. Contacto",
    icon: Shield,
    content: `Para cualquier pregunta, consulta o ejercicio de derechos relacionados con esta Política de Privacidad, puede contactarnos a:

• Email: nexbloq@gmail.com
• Teléfono: +51 946 062 811
• Horario de atención: Lunes a Viernes 9:00 AM - 6:00 PM

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

export default function PrivacyPolicyPage() {
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
            Políticas de
            <br />
            <span className="font-light italic">privacidad.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            Tu información merece claridad. Aquí explicamos qué datos
            recopilamos, para qué los utilizamos y cómo protegemos tus derechos.
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
              targetId="contenido-politica"
              label="Leer la política"
            />
          </div>
        </div>
      </section>

      <section
        id="contenido-politica"
        data-scroll-reveal-early=""
        className="w-full max-w-7xl scroll-mt-24 py-16 sm:py-20 lg:py-28"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(250px,0.72fr)_minmax(0,2fr)] lg:gap-12">
          <aside className="rounded-2xl bg-white p-5 sm:p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 pb-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <Shield aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                  Navegación
                </p>
                <h2 className="mt-1 font-semibold">Contenido de la política</h2>
              </div>
            </div>

            <nav
              aria-label="Secciones de la política de privacidad"
              className="2xl:mt-4 grid gap-x-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {privacySections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#privacidad-${index + 1}`}
                  className="group min-h-8 2xl:min-h-10 flex items-start space-x-2 py-2 text-sm text-zinc-500 transition-colors hover:text-indigo-600"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold leading-none tabular-nums text-white transition-colors group-hover:text-white">
                    {String(index + 1)}
                  </span>
                  <span className="text-xs lg:text-sm">
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-5 sm:space-y-6">
            {privacySections.map((section, index) => {
              const Icon = section.icon;

              return (
                <article
                  id={`privacidad-${index + 1}`}
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
