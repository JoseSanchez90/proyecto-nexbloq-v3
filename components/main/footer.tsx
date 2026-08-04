import { AtSign, Cookie, MapPin, ShieldCheck } from "lucide-react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import { contactInfo } from "@/lib/contact";
import { CookiePreferencesTrigger } from "@/components/main/cookie-consent-banner";

const pageLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const socialIcons = [
  {
    id: "tiktok",
    src: "/svg/logo-tiktok.svg",
    href: "https://www.tiktok.com/@angelt906",
  },
  {
    id: "instagram",
    src: "/svg/instagram-logo.svg",
    href: "https://www.instagram.com/josesanchezt90/",
  },
  {
    id: "facebook",
    src: "/svg/facebook-logo.svg",
    href: "https://www.facebook.com/nexbloqstudio/",
  },
];

const legalLinks = [
  {
    label: "Políticas y privacidad",
    href: "/politicas-de-privacidad",
  },
  {
    label: "Términos y condiciones",
    href: "/terminos-y-condiciones",
  },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[30px] bg-indigo-700 px-4 pb-12 pt-4 sm:rounded-t-[64px] sm:px-6 sm:pb-10 lg:rounded-t-[80px]">
      <div className="mx-auto w-full max-w-7xl px-2 lg:px-26 2xl:px-0">
        <div className="grid min-w-0 grid-cols-2 gap-x-2 gap-y-10 py-10 md:py-14 lg:grid-cols-[0.9fr_0.8fr_1fr_1.3fr] lg:gap-x-8">
          <div className="flex min-w-0 flex-col items-start gap-4">
            <span className="text-sm lg:text-base font-semibold text-white">
              [Página]
            </span>
            <nav className="flex min-w-0 flex-col items-start">
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-11 max-w-full flex-col justify-center text-xs sm:text-sm lg:text-base"
                >
                  <span className="flex h-4 sm:h-5 lg:h-6 flex-col overflow-hidden">
                    <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                    >
                      [{link.label}]
                    </span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-4">
            <span className="text-sm lg:text-base font-semibold text-white">
              [Social]
            </span>
            <div className="flex min-w-0 flex-col items-start">
              {socialIcons.map((social) => {
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-11 max-w-full items-center gap-2 text-xs sm:text-sm lg:text-base"
                  >
                    <div className="rounded-full bg-white p-1">
                      <img
                        src={social.src}
                        alt={social.id}
                        className="w-3 h-3 lg:w-4 lg:h-4"
                      />
                    </div>
                    <span className="flex h-4 sm:h-5 lg:h-6 flex-col overflow-hidden">
                      <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                        {social.id}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                      >
                        [{social.id}]
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-4">
            <span className="text-sm lg:text-base font-semibold text-white">
              [Legal]
            </span>
            <nav className="flex min-w-0 flex-col items-start">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-11 max-w-full items-center gap-2 text-xs sm:text-sm lg:text-base"
                >
                  <div className="hidden shrink-0 rounded-full bg-white p-1 sm:block">
                    <ShieldCheck aria-hidden="true" className="size-4" />
                  </div>
                  <span className="flex h-4 sm:h-5 lg:h-6 min-w-0 flex-col overflow-hidden">
                    <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                    >
                      [{link.label}]
                    </span>
                  </span>
                </a>
              ))}
              <CookiePreferencesTrigger className="group flex min-h-11 max-w-full cursor-pointer items-center gap-2 text-left text-xs sm:text-sm lg:text-base">
                <div className="hidden shrink-0 rounded-full bg-white p-1 sm:block">
                  <Cookie aria-hidden="true" className="size-4" />
                </div>
                <span className="flex h-4 min-w-0 flex-col overflow-hidden sm:h-5 lg:h-6">
                  <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                    Preferencias de cookies
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                  >
                    [Preferencias de cookies]
                  </span>
                </span>
              </CookiePreferencesTrigger>
            </nav>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-4">
            <span className="text-sm lg:text-base font-semibold text-white">
              [Contacto]
            </span>
            <div className="flex min-w-0 flex-col items-start">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex min-h-11 max-w-full min-w-0 items-center gap-2 text-xs sm:text-sm lg:text-base"
              >
                <div className="shrink-0 rounded-full bg-white p-1">
                  <AtSign aria-hidden="true" className="size-3 lg:size-4" />
                </div>
                <span className="flex h-4 sm:h-5 lg:h-6 min-w-0 flex-col overflow-hidden">
                  <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                    {contactInfo.email}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                  >
                    [{contactInfo.email}]
                  </span>
                </span>
              </a>
              <div className="flex min-h-11 items-center gap-2">
                <div className="shrink-0 rounded-full bg-white p-1">
                  <MapPin aria-hidden="true" className="size-3 lg:size-4" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300">
                  Lima, Perú
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-200 pt-7 sm:flex-row">
          <a href="/" className="flex min-h-11 items-center gap-3">
            <img src="/logo/Logo4.png" alt="Nexbloq" className="w-7 h-9" />
            <span
              className={clsx(
                "text-2xl font-semibold text-white tracking-tighter",
                museomoderno.className,
              )}
            >
              Nexbloq
            </span>
          </a>
          <p className="text-center text-sm text-white sm:text-base">
            © 2020 Nexbloq · Diseño y desarrollo web.
          </p>
        </div>
      </div>
    </footer>
  );
}
