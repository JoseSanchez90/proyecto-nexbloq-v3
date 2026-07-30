import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import { contactInfo } from "@/lib/contact";
import clsx from "clsx";
import { museomoderno } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Contacto | Nexbloq",
  description:
    "Cuéntame sobre tu próximo proyecto web y recibe una recomendación clara sobre el mejor camino para desarrollarlo.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-4 pb-24">
      <section
        id="contacto"
        className="showcase-grid w-full max-w-7xl scroll-mt-24 rounded-xl bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      >
        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-indigo-600" />
            <p className="text-base font-semibold uppercase tracking-[0.12em]">
              Contacto
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold uppercase tracking-[-0.045em] sm:text-6xl">
            Hablemos de tu{" "}
            <span className="font-light italic">próximo proyecto.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
            Comparte la información principal y te responderé con una
            recomendación clara sobre el mejor camino para desarrollar tu idea.
          </p>
        </div>

        <div
          data-scroll-reveal-ignore
          className="page-intro-reveal page-intro-delay-1 mt-14 grid overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:p-10"
        >
          <aside className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="bg-black px-2 py-1 rounded-lg">
                <img
                  src="/logo/Logo4.png"
                  alt="LogoNexbloq"
                  className="w-4.5 h-6"
                />
              </div>
              <p className={clsx("text-xl font-bold", museomoderno.className)}>
                Nexbloq
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              Cuéntame qué necesitas
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Podemos comenzar con una idea inicial o con un alcance definido.
              Lo importante es entender el objetivo que quieres alcanzar.
            </p>

            <div className="relative mt-8 min-h-72 flex-1 overflow-hidden rounded-2xl bg-zinc-100 lg:min-h-96">
              <Image
                src="/profile/me.png"
                alt="Conversación y planificación de un proyecto digital"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 440px"
                className="object-cover object-top"
              />
            </div>
          </aside>

          <div className="mt-10 pt-8 lg:mt-0 lg:pl-10 lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
