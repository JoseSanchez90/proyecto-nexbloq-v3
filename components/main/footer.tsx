import { AtSign, MapPin } from "lucide-react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import { contactInfo } from "@/lib/contact";

const pageLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Proceso", href: "/#proceso" },
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

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[30px] bg-indigo-700 px-4 pb-24 pt-4 sm:rounded-t-[64px] sm:px-6 sm:pb-10 lg:rounded-t-[80px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-10 py-10 md:py-14 lg:grid-cols-[0.9fr_0.8fr_1.3fr]">
          <div className="grid min-w-0 content-start grid-cols-1 gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)]">
            <span className="text-base lg:text-lg font-semibold text-white">
              [Página]
            </span>
            <nav className="flex min-w-0 flex-col items-start">
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-11 max-w-full flex-col justify-center text-base lg:text-lg"
                >
                  <span className="flex h-6 flex-col overflow-hidden">
                    <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                    >
                      [ {link.label} ]
                    </span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="grid min-w-0 content-start grid-cols-1 gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)]">
            <span className="text-base lg:text-lg font-semibold text-white">
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
                    className="group flex min-h-11 max-w-full items-center gap-2 text-base lg:text-lg"
                  >
                    <div className="rounded-full bg-white p-1">
                      <img
                        src={social.src}
                        alt={social.id}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="flex h-6 flex-col overflow-hidden">
                      <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                        {social.id}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                      >
                        [ {social.id} ]
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 grid min-w-0 content-start grid-cols-1 gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-[auto_minmax(0,1fr)] lg:col-span-1">
            <span className="text-base lg:text-lg font-semibold text-white">
              [Contacto]
            </span>
            <div className="flex min-w-0 flex-col items-start">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex min-h-11 max-w-full min-w-0 items-center gap-2 text-base lg:text-lg"
              >
                <div className="shrink-0 rounded-full bg-white p-1">
                  <AtSign aria-hidden="true" className="size-4" />
                </div>
                <span className="flex h-6 min-w-0 flex-col overflow-hidden">
                  <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                    {contactInfo.email}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                  >
                    [ {contactInfo.email} ]
                  </span>
                </span>
              </a>
              <div className="flex min-h-11 items-center gap-2">
                <div className="shrink-0 rounded-full bg-white p-1">
                  <MapPin aria-hidden="true" className="size-4" />
                </div>
                <p className="text-base text-zinc-300 lg:text-lg">Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-200 pt-7 sm:flex-row">
          <a href="/" className="flex min-h-11 items-center gap-3">
            <img src="/logo/logo4.png" alt="Nexbloq" className="w-7 h-9" />
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
