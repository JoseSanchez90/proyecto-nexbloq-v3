import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  ChevronUp,
  Mail,
  Music2,
  Users,
} from "lucide-react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import WhatsAppIcon from "@/components/ui/icons/whatsapp-icon";
import { contactInfo, socialLinks } from "@/lib/contact";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  "Landing pages",
  "Sitios corporativos",
  "Rediseño web",
  "Sistemas web",
  "Mantenimiento",
];

const socialIcons = {
  tiktok: Music2,
  instagram: Camera,
  facebook: Users,
};

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden="true"
        className="showcase-grid pointer-events-none absolute inset-0 opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-[#5635ff]/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.55fr_0.75fr_0.9fr] lg:gap-10 lg:pb-20">
          <div>
            <a href="#inicio" className="flex w-fit items-center gap-2">
              <Image
                src="/images/logo-white.png"
                alt="Nexbloq"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span
                className={clsx(
                  "text-2xl font-semibold tracking-tighter",
                  museomoderno.className,
                )}
              >
                Nexbloq
              </span>
            </a>

            <h2 className="mt-8 max-w-md text-3xl font-semibold leading-tight tracking-tight">
              DESARROLLO WEB{" "}
              <span className="font-light italic text-white/70">
                DIRECTO Y PERSONALIZADO.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              Diseño y desarrollo sitios web modernos, funcionales y adaptados a
              las necesidades de cada negocio. Atención directa a cargo de un
              desarrollador independiente.
            </p>
            <p className="mt-4 text-xs text-white/40">
              Lima, Perú · Atención previa coordinación
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {contactInfo.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitar ${social.label} de Nexbloq`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Navegación
            </p>
            <nav
              aria-label="Navegación del pie de página"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Servicios
            </p>
            <div className="mt-6 flex flex-col items-start gap-4">
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="#servicios"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="self-start rounded-2xl bg-[#5635ff] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Empecemos
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug">
              ¿Tienes un proyecto web en mente?
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Cuéntame qué necesitas y revisaré si puedo ayudarte.
            </p>
            <a
              href="#contacto"
              className="group mt-6 flex items-center justify-between rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-zinc-950"
            >
              Iniciar proyecto
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © 2021 Nexbloq. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            Diseñado y desarrollado por Nexbloq.
          </p>
          <a
            href="#inicio"
            aria-label="Volver al inicio"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white text-black transition-colors hover:border-white/40"
          >
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
