import ButtonPrimary from "@/components/ui/buttons/button-primary";

export default function NotFound() {
  return (
    <section className="w-full bg-zinc-100 px-4 py-10 sm:px-6 sm:py-16">
      <div className="showcase-grid relative mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-20 text-center">
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5635ff]" />
            <p className="text-xs font-medium tracking-wide">ERROR 404</p>
          </div>

          <p
            aria-hidden="true"
            className="mt-8 text-7xl font-semibold tracking-tighter text-[#5635ff] sm:text-9xl"
          >
            404
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            ESTA PÁGINA{" "}
            <span className="font-light italic">NO ESTÁ DISPONIBLE.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Es posible que el enlace haya cambiado o que la página que buscas
            ya no exista.
          </p>
          <ButtonPrimary
            href="/"
            text="Volver al inicio"
            size="sm"
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
}
