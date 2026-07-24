import { Check, Mail, MessagesSquare } from "lucide-react";
import ContactForm from "@/components/home/contact-form";
import SectionHeading from "@/components/ui/section-heading";
import WhatsAppIcon from "@/components/ui/icons/whatsapp-icon";
import { contactInfo } from "@/lib/contact";

const projectPoints = [
  "Objetivos y necesidades de tu negocio",
  "Alcance, funcionalidades y prioridades",
  "Siguiente paso recomendado para avanzar",
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="w-full scroll-mt-8 px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="EMPECEMOS"
          title="CONVIRTAMOS TU IDEA EN"
          accent="UNA SOLUCIÓN CLARA."
          description="Cuéntame qué necesitas, qué objetivo quieres alcanzar y en qué etapa se encuentra tu proyecto. Revisaré la información para plantearte un siguiente paso realista."
        />

        <div className="mt-16 grid overflow-hidden rounded-3xl bg-white lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative overflow-hidden bg-[#5635ff] p-8 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />

            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#5635ff]">
              <MessagesSquare className="h-6 w-6" />
            </span>

            <p className="relative mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Tu proyecto comienza aquí
            </p>
            <h3 className="relative mt-4 text-3xl font-semibold leading-tight tracking-tight">
              Hablemos de los retos y oportunidades de tu negocio.
            </h3>
            <p className="relative mt-5 text-sm leading-7 text-white/75">
              No necesitas tener todo definido. Puedo ayudarte a convertir una
              idea inicial en un plan digital claro y ejecutable.
            </p>

            <div className="relative mt-10 space-y-4 border-t border-white/20 pt-8">
              {projectPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-white/80">{point}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 grid gap-3">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.01]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5635ff]">
                Cuéntame tu proyecto
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Completa la información principal
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Mientras más claro sea el contexto, mejor podré comprender lo
                que necesitas.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
