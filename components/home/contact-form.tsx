"use client";

import { FormEvent, useState } from "react";
import { CircleHelp } from "lucide-react";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  "Landing page",
  "Sitio corporativo",
  "Rediseño web",
  "Sistema web",
  "Mantenimiento",
  "Dominio, hosting o correo",
];

const budgets = [
  "Aún no lo he definido",
  "Menos de S/ 2,000",
  "Entre S/ 2,000 y S/ 5,000",
  "Entre S/ 5,000 y S/ 10,000",
  "Más de S/ 10,000",
];

const timeframes = [
  "No tengo una fecha definida",
  "Durante el próximo mes",
  "En 2 a 3 meses",
  "En más de 3 meses",
];

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "service"
  | "message"
  | "consent";

type FormErrors = Partial<Record<FieldName, string>>;

interface FormStatus {
  kind: "error" | "info" | "success";
  message: string;
}

interface FieldHelpProps {
  field: string;
  children: string;
}

function FieldHelp({ field, children }: FieldHelpProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        aria-label={`Ayuda para el campo ${field}: ${children}`}
        className="inline-flex size-5 cursor-help items-center justify-center rounded-full text-zinc-400 outline-none transition-colors hover:text-[#5635ff] focus-visible:text-[#5635ff] focus-visible:ring-2 focus-visible:ring-[#5635ff]/25"
      >
        <CircleHelp aria-hidden="true" className="size-3.5" />
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={7}
        className="max-w-64 rounded-lg bg-zinc-950 px-3 py-2 text-center text-xs leading-5 text-white"
      >
        <p>{children}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    errors.name = "Escribe un nombre válido.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Escribe un correo electrónico válido.";
  }

  if (phone && phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Escribe un teléfono válido o deja el campo vacío.";
  }

  if (!service) {
    errors.service = "Selecciona el tipo de proyecto.";
  }

  if (message.length < 20) {
    errors.message = "Describe tu proyecto con al menos 20 caracteres.";
  }

  if (formData.get("consent") !== "accepted") {
    errors.consent = "Debes aceptar el uso de tus datos para poder continuar.";
  }

  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        kind: "error",
        message:
          "Revisa la información ingresada y completa los campos obligatorios.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      kind: "info",
      message: "Enviando tu consulta de forma segura...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          budget: formData.get("budget"),
          timeframe: formData.get("timeframe"),
          references: formData.get("references"),
          message: formData.get("message"),
          consent: formData.get("consent") === "accepted",
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "No fue posible enviar la consulta.");
      }

      form.reset();
      setErrors({});
      setStatus({
        kind: "success",
        message:
          "Tu consulta fue enviada correctamente. Te responderé lo antes posible.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "No fue posible enviar la consulta. Inténtalo nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Sitio web</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <FieldGroup className="gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.name)}>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-name">Nombre *</FieldLabel>
              <FieldHelp field="nombre">
                Escribe el nombre de la persona con quien coordinaré.
              </FieldHelp>
            </div>
            <Input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className="h-10"
            />
            <FieldError id="contact-name-error">{errors.name}</FieldError>
          </Field>

          <Field data-invalid={Boolean(errors.email)}>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-email">Correo *</FieldLabel>
              <FieldHelp field="correo">
                Usa un correo que revises con frecuencia para poder responderte.
              </FieldHelp>
            </div>
            <Input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="tu@empresa.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className="h-10"
            />
            <FieldError id="contact-email-error">{errors.email}</FieldError>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-company">
                Empresa o negocio
              </FieldLabel>
              <FieldHelp field="empresa">
                Indica el nombre de tu negocio o marca. Puedes dejarlo vacío.
              </FieldHelp>
            </div>
            <Input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Nombre de tu negocio"
              className="h-10"
            />
          </Field>

          <Field data-invalid={Boolean(errors.phone)}>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-phone">
                Teléfono o WhatsApp
              </FieldLabel>
              <FieldHelp field="teléfono">
                Incluye el código de país si prefieres que te contacte por WhatsApp.
              </FieldHelp>
            </div>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+51 999 999 999"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              className="h-10"
            />
            <FieldError id="contact-phone-error">{errors.phone}</FieldError>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.service)}>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-service">
                Tipo de proyecto *
              </FieldLabel>
              <FieldHelp field="tipo de proyecto">
                Elige la solución que más se aproxima a lo que necesitas.
              </FieldHelp>
            </div>
            <Select name="service">
              <SelectTrigger
                id="contact-service"
                aria-invalid={Boolean(errors.service)}
                aria-describedby={
                  errors.service ? "contact-service-error" : undefined
                }
                className="w-full"
              >
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent
                align="start"
                alignItemWithTrigger={false}
                className="rounded-xl"
              >
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError id="contact-service-error">{errors.service}</FieldError>
          </Field>

          <Field>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-budget">
                Presupuesto estimado
              </FieldLabel>
              <FieldHelp field="presupuesto">
                Una referencia permite recomendar un alcance realista.
              </FieldHelp>
            </div>
            <Select name="budget">
              <SelectTrigger id="contact-budget" className="w-full">
                <SelectValue placeholder="Selecciona un rango" />
              </SelectTrigger>
              <SelectContent
                align="start"
                alignItemWithTrigger={false}
                className="rounded-xl"
              >
                {budgets.map((budget) => (
                  <SelectItem key={budget} value={budget}>
                    {budget}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-timeframe">
                Plazo esperado
              </FieldLabel>
              <FieldHelp field="plazo">
                Indica cuándo te gustaría tener el proyecto publicado.
              </FieldHelp>
            </div>
            <Select name="timeframe">
              <SelectTrigger id="contact-timeframe" className="w-full">
                <SelectValue placeholder="Selecciona un plazo" />
              </SelectTrigger>
              <SelectContent
                align="start"
                alignItemWithTrigger={false}
                className="rounded-xl"
              >
                {timeframes.map((timeframe) => (
                  <SelectItem key={timeframe} value={timeframe}>
                    {timeframe}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <div className="flex items-center gap-1">
              <FieldLabel htmlFor="contact-references">
                Referencias
              </FieldLabel>
              <FieldHelp field="referencias">
                Puedes pegar una URL o mencionar una web cuyo estilo te guste.
              </FieldHelp>
            </div>
            <Input
              id="contact-references"
              name="references"
              type="text"
              placeholder="https://ejemplo.com"
              className="h-10"
            />
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.message)}>
          <div className="flex items-center gap-1">
            <FieldLabel htmlFor="contact-message">
              Descripción del proyecto *
            </FieldLabel>
            <FieldHelp field="descripción del proyecto">
              Resume tus objetivos, funciones necesarias y cualquier contexto útil.
            </FieldHelp>
          </div>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Cuéntame qué necesitas, a quién está dirigido y qué debería facilitar la solución..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className="min-h-36 resize-none rounded-xl border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 shadow-none transition-[border-color,background-color,box-shadow] placeholder:text-zinc-400 hover:bg-white focus-visible:border-[#5635ff] focus-visible:bg-white focus-visible:ring-[#5635ff]/15"
          />
          <FieldError id="contact-message-error">{errors.message}</FieldError>
        </Field>

        <Field data-invalid={Boolean(errors.consent)}>
          <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              value="accepted"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={
                errors.consent ? "contact-consent-error" : undefined
              }
              className="mt-0.5 size-4 shrink-0 accent-[#5635ff]"
            />
            <FieldLabel
              htmlFor="contact-consent"
              className="cursor-pointer text-xs font-normal leading-5 text-zinc-600"
            >
              Acepto que Nexbloq utilice estos datos únicamente para responder
              mi consulta. *
            </FieldLabel>
          </div>
          <FieldError id="contact-consent-error">{errors.consent}</FieldError>
        </Field>

        <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
          <FieldDescription className="max-w-sm text-xs leading-5 text-zinc-400">
            La primera conversación sirve para conocer tu proyecto y determinar
            si puedo ayudarte.
          </FieldDescription>
          <ButtonPrimary
            type="submit"
            disabled={isSubmitting}
            text={isSubmitting ? "Preparando consulta..." : "Enviar consulta"}
            size="sm"
            font="semibold"
          />
        </div>

        {status && (
          <p
            role={status.kind === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`text-sm font-medium ${
              status.kind === "error"
                ? "text-red-600"
                : status.kind === "success"
                  ? "text-emerald-600"
                  : "text-[#5635ff]"
            }`}
          >
            {status.message}
          </p>
        )}
      </FieldGroup>
    </form>
  );
}
