"use client";

import { useEffect, useLayoutEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const navLinks = [
  { label: "Inicio", href: "/", section: "#inicio" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
];

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const updateNavbar = () => {
      const scrollTop = window.scrollY;

      setIsScrolled((current) => (current ? scrollTop > 1 : scrollTop > 24));
    };

    setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  const moveToSection = (section: string) => {
    const target = document.querySelector<HTMLElement>(section);

    if (!target) return;

    window.requestAnimationFrame(() => {
      const header = document.querySelector<HTMLElement>("header");
      const headerHeight = header?.offsetHeight ?? 0;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    section?: string,
  ) => {
    setIsMenuOpen(false);

    if (!section && window.location.pathname === href) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    if (!section || window.location.pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    moveToSection(section);
  };

  return (
    <header
      className={clsx(
        "pointer-events-none sticky top-0 z-50 h-17 w-full sm:h-19 lg:h-24",
        isScrolled
          ? "bg-transparent px-3 sm:px-4"
          : "bg-zinc-100/95 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className={clsx(
          "pointer-events-auto relative mx-auto flex items-center justify-between transition-[max-width,padding,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isScrolled
            ? "max-w-4xl rounded-b-4xl bg-white/70 px-4 py-3 shadow-[0_10px_35px_rgba(24,24,27,0.2)] backdrop-blur-xl sm:px-5"
            : "max-w-6xl border border-transparent bg-zinc-100 px-4 py-3 sm:px-6 sm:py-4",
        )}
      >
        <Link
          href="/#inicio"
          scroll={false}
          className="flex min-w-0 items-center gap-3"
          onClick={(event) => handleNavigation(event, "/#inicio", "#inicio")}
        >
          <img
            className={clsx(
              "shrink-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
              isScrolled ? "h-7 w-5 sm:h-10 sm:w-8" : "h-9 w-7 sm:h-11 sm:w-9",
            )}
            src="/logo/logo3.png"
            alt="Nexbloq"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false}
              onClick={(event) =>
                handleNavigation(event, link.href, link.section)
              }
              className={clsx(
                "group flex flex-col overflow-hidden transition-all duration-400",
                isScrolled ? "h-5 text-sm" : "h-6 text-base",
              )}
            >
              <span className="text-center text-gray-600 transition-transform duration-400 group-hover:-translate-y-full">
                {link.label}
              </span>
              <span
                aria-hidden="true"
                className="text-center text-indigo-600 transition-transform duration-400 group-hover:-translate-y-full"
              >
                [ {link.label} ]
              </span>
            </Link>
          ))}
        </div>

        <ButtonPrimary
          size={isScrolled ? "xs" : "sm"}
          text="Contáctame"
          href="/contacto"
          scroll={false}
          className="hidden font-semibold lg:flex"
        />

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-sm transition-colors hover:border-indigo-600 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/30 lg:hidden"
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
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  onClick={(event) =>
                    handleNavigation(event, link.href, link.section)
                  }
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-indigo-600"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-zinc-300">
                    /
                  </span>
                </Link>
              ))}
            </div>

            <ButtonPrimary
              size="sm"
              text="Contáctame"
              href="/contacto"
              scroll={false}
              className="mt-3 w-full justify-between font-semibold"
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
