"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas-frecuentes" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    setIsMenuOpen(false);
    window.history.pushState(null, "", href);

    window.requestAnimationFrame(() => {
      const header = document.querySelector<HTMLElement>("header");
      const headerHeight = header?.offsetHeight ?? 0;
      const targetTop =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        16;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-100/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-1"
          onClick={(event) => handleNavigation(event, "#inicio")}
        >
          <Image
            className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
            src="/images/logo-black.png"
            alt="Nexbloq"
            width={50}
            height={50}
            priority
          />
          <p
            className={clsx(
              "truncate text-2xl font-semibold tracking-tighter sm:text-3xl",
              museomoderno.className,
            )}
          >
            Nexbloq
          </p>
        </a>

        <div className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="group flex h-5 flex-col overflow-hidden text-sm"
            >
              <span className="text-center text-gray-500 transition-transform duration-500 group-hover:-translate-y-full">
                {link.label}
              </span>
              <span
                aria-hidden="true"
                className="text-center text-blue-600 transition-transform duration-500 group-hover:-translate-y-full"
              >
                [ {link.label} ]
              </span>
            </a>
          ))}
        </div>

        <ButtonPrimary
          size="sm"
          text="Contáctame"
          onClick={() => scrollToSection("#contacto")}
          className="hidden font-semibold lg:flex"
        />

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-sm transition-colors hover:border-[#5635ff] hover:text-[#5635ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5635ff]/30 lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-4 right-4 top-full mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-3 shadow-[0_20px_60px_rgba(24,24,27,0.16)] sm:left-6 sm:right-6 lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-[#5635ff]"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-zinc-300">
                    /
                  </span>
                </a>
              ))}
            </div>

            <ButtonPrimary
              size="sm"
              text="Contáctame"
              onClick={() => scrollToSection("#contacto")}
              className="mt-3 w-full justify-between font-semibold"
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
