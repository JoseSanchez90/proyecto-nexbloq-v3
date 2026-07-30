import { AtSign, MapPin } from "lucide-react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import { contactInfo } from "@/lib/contact";

const pageLinks = [
  { label: "Inicio", href: "/#inicio" },
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
    <footer className="w-full bg-indigo-700 rounded-t-[80px] px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-10 sm:grid-cols-3 sm:py-14">
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            <span className="text-lg font-semibold text-white">[Página]</span>
            <nav className="flex flex-col items-start gap-3">
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex h-6 flex-col overflow-hidden text-lg"
                >
                  <span className="text-zinc-300 transition-transform duration-400 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-white transition-transform duration-400 group-hover:-translate-y-full"
                  >
                    [ {link.label} ]
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            <span className="text-lg font-semibold text-white">[Social]</span>
            <div className="flex flex-col items-start gap-3">
              {socialIcons.map((social) => {
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-lg"
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

          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            <span className="text-lg font-semibold text-white">[Contacto]</span>
            <div className="flex flex-col items-start gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-2 text-lg"
              >
                <div className="bg-white p-1 rounded-full">
                  <AtSign aria-hidden="true" className="size-4" />
                </div>
                <span className="flex h-6 flex-col overflow-hidden">
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
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 rounded-full">
                  <MapPin aria-hidden="true" className="size-4" />
                </div>
                <p className="text-lg text-zinc-300">Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-200 pt-7 sm:flex-row">
          <a href="/" className="flex items-center gap-3">
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
          <p className="text-center text-base text-white">
            © 2020 Nexbloq · Diseño y desarrollo web.
          </p>
        </div>
      </div>
    </footer>
  );
}
