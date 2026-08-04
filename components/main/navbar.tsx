"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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
  const previousPathname = useRef(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const updateNavbar = () => {
      const scrollTop = window.scrollY;
      const enterThreshold = window.innerWidth < 1024 ? 8 : 24;

      setIsScrolled((current) =>
        current ? scrollTop > 1 : scrollTop > enterThreshold,
      );
    };

    setIsScrolled(window.scrollY > (window.innerWidth < 1024 ? 8 : 24));
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.documentElement.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    desktopMedia.addEventListener("change", closeOnDesktop);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktopMedia.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

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
        "pointer-events-none sticky top-0 z-50 h-17 w-full bg-transparent px-6 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-19 sm:px-4 lg:h-24",
        isScrolled ? "lg:px-4" : "lg:px-0",
      )}
    >
      <button
        type="button"
        aria-label="Cerrar menú"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
        className={clsx(
          "fixed inset-0 z-0 bg-zinc-950/15 backdrop-blur-[3px] transition-[opacity,visibility] duration-500 lg:hidden",
          isMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      />

      <nav
        aria-label="Navegación principal"
        className={clsx(
          "pointer-events-auto relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between border px-8 py-3 transition-[max-width,padding,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 sm:py-4 lg:flex-nowrap lg:overflow-hidden lg:rounded-full lg:duration-500",
          isMenuOpen
            ? "overflow-hidden rounded-4xl bg-white shadow-lg"
            : isScrolled
              ? "overflow-visible rounded-4xl bg-white/70 backdrop-blur-lg shadow-lg"
              : "overflow-visible rounded-none border-transparent bg-transparent shadow-none",
          isScrolled
            ? "max-w-sm sm:max-w-md lg:max-w-4xl lg:bg-white/70 lg:px-8 lg:py-3 lg:shadow-xl lg:backdrop-blur-xl mt-2"
            : "max-w-md sm:max-w-3xl lg:max-w-6xl lg:bg-zinc-100 lg:px-6 lg:py-4 lg:shadow-none lg:backdrop-blur-none",
        )}
      >
        <Link
          href="/"
          scroll={false}
          className="flex min-w-0 items-center gap-3"
          onClick={(event) => handleNavigation(event, "/", "#inicio")}
        >
          <img
            className={clsx(
              "shrink-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
              isScrolled ? "h-9 w-7 sm:h-10 sm:w-8" : "h-9 w-7 sm:h-11 sm:w-9",
            )}
            src="/logo/Logo3.png"
            alt="Nexbloq"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
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
          className={clsx(
            "relative z-20 flex h-12 w-12 touch-manipulation select-none items-center justify-center rounded-full border shadow-sm transition-[border-color,background-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/30 lg:hidden",
            isMenuOpen
              ? "border-zinc-200 bg-white text-zinc-950 hover:border-indigo-600 hover:text-indigo-600"
              : "border-zinc-200 bg-white text-zinc-950 hover:border-indigo-600 hover:text-indigo-600",
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            aria-hidden="true"
            className={clsx(
              "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
              isMenuOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            aria-hidden="true"
            className={clsx(
              "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            )}
          />
        </button>

        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          className={clsx(
            "order-last w-full basis-full origin-top overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden transition-[max-height,margin,opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
            isMenuOpen
              ? "visible mt-3 max-h-[calc(100dvh-6.5rem)] translate-y-0 opacity-100"
              : "invisible pointer-events-none mt-0 max-h-0 -translate-y-2 opacity-0",
          )}
        >
          <div className="flex items-center px-3 pb-3 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Navegación
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50/80 px-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  tabIndex={isMenuOpen ? undefined : -1}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) =>
                    handleNavigation(event, link.href, link.section)
                  }
                  className={clsx(
                    "group flex min-h-15 items-center gap-4 border-b border-zinc-200/70 px-2 text-left transition-[opacity,transform,color] duration-500 last:border-b-0",
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0",
                    isActive
                      ? "text-indigo-600"
                      : "text-zinc-700 hover:text-indigo-600",
                  )}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${100 + index * 55}ms`
                      : "0ms",
                  }}
                >
                  <span className="w-7 text-xs font-semibold text-zinc-400">
                    0{index + 1}
                  </span>
                  <span className="flex-1 text-lg font-medium tracking-tight">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "flex size-9 items-center justify-center rounded-full transition-all duration-300",
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white",
                    )}
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div
            className={clsx(
              "mt-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0",
            )}
            style={{
              transitionDelay: isMenuOpen
                ? `${100 + navLinks.length * 55}ms`
                : "0ms",
            }}
          >
            <ButtonPrimary
              size="sm"
              text="Cuéntame tu proyecto"
              href="/contacto"
              scroll={false}
              onClick={() => setIsMenuOpen(false)}
              className="w-full justify-between font-semibold mt-4"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
