"use client";

import { FormEvent, useState } from "react";
import {
  AR,
  BO,
  BR,
  CL,
  CO,
  CR,
  CU,
  DO,
  EC,
  GT,
  HN,
  HT,
  MX,
  NI,
  PA,
  PE,
  PR,
  PY,
  SV,
  UY,
  VE,
} from "country-flag-icons/react/3x2";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  isValidLocalPhone,
  phoneRules,
  sanitizeCompanyName,
  sanitizePersonName,
  type PhoneCountryIso,
} from "@/lib/contact-validation";

const serviceOptions = [
  "Landing page",
  "Sitio corporativo",
  "Rediseño UX/UI",
  "Sistema web",
  "Mantenimiento",
  "Dominio y hosting",
];

const latinAmericanCountries = [
  { iso: "AR", name: "Argentina", dialCode: "+54", Flag: AR },
  { iso: "BO", name: "Bolivia", dialCode: "+591", Flag: BO },
  { iso: "BR", name: "Brasil", dialCode: "+55", Flag: BR },
  { iso: "CL", name: "Chile", dialCode: "+56", Flag: CL },
  { iso: "CO", name: "Colombia", dialCode: "+57", Flag: CO },
  { iso: "CR", name: "Costa Rica", dialCode: "+506", Flag: CR },
  { iso: "CU", name: "Cuba", dialCode: "+53", Flag: CU },
  { iso: "DO", name: "R. Dominicana", dialCode: "+1", Flag: DO },
  { iso: "EC", name: "Ecuador", dialCode: "+593", Flag: EC },
  { iso: "SV", name: "El Salvador", dialCode: "+503", Flag: SV },
  { iso: "GT", name: "Guatemala", dialCode: "+502", Flag: GT },
  { iso: "HT", name: "Haití", dialCode: "+509", Flag: HT },
  { iso: "HN", name: "Honduras", dialCode: "+504", Flag: HN },
  { iso: "MX", name: "México", dialCode: "+52", Flag: MX },
  { iso: "NI", name: "Nicaragua", dialCode: "+505", Flag: NI },
  { iso: "PA", name: "Panamá", dialCode: "+507", Flag: PA },
  { iso: "PY", name: "Paraguay", dialCode: "+595", Flag: PY },
  { iso: "PE", name: "Perú", dialCode: "+51", Flag: PE },
  { iso: "PR", name: "Puerto Rico", dialCode: "+1", Flag: PR },
  { iso: "UY", name: "Uruguay", dialCode: "+598", Flag: UY },
  { iso: "VE", name: "Venezuela", dialCode: "+58", Flag: VE },
] as const;

interface FormStatus {
  kind: "error" | "success";
  message: string;
}

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountryIso, setSelectedCountryIso] = useState("PE");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);
  const selectedCountry =
    latinAmericanCountries.find(
      (country) => country.iso === selectedCountryIso,
    ) ?? latinAmericanCountries[17];
  const selectedPhoneRule = phoneRules[selectedCountryIso as PhoneCountryIso];
  const maxPhoneLength = Math.max(...selectedPhoneRule.lengths);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const hasInvalidPhone =
      phoneNumber.length > 0 &&
      !isValidLocalPhone(selectedCountryIso as PhoneCountryIso, phoneNumber);
    if (
      name.length < 2 ||
      !/^[\p{L}\p{M}\s.'’\-]+$/u.test(name) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !selectedService ||
      message.length < 20 ||
      hasInvalidPhone ||
      !consent
    ) {
      setStatus({
        kind: "error",
        message: hasInvalidPhone
          ? `El número de ${selectedCountry.name} debe tener ${selectedPhoneRule.label} y contener solo números.`
          : "Completa correctamente los campos obligatorios (*), selecciona un servicio y acepta el uso de tus datos.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phoneNumber.trim()
            ? `${selectedCountry.dialCode} ${phoneNumber.trim()}`
            : "",
          phoneCountry: selectedCountryIso,
          phoneLocal: phoneNumber,
          company: String(formData.get("company") ?? "").trim(),
          service: selectedService,
          message,
          consent,
          website: String(formData.get("website") ?? ""),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || result.error || "No fue posible enviar el mensaje.",
        );
      }

      form.reset();
      setSelectedService("");
      setSelectedCountryIso("PE");
      setPhoneNumber("");
      setConsent(false);
      setStatus({
        kind: "success",
        message:
          "Tu mensaje fue enviado correctamente. Te responderé lo antes posible.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "No fue posible enviar el mensaje.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="min-w-0">
      <div>
        <p className="text-sm font-semibold">
          ¿Qué tipo de proyecto necesitas? *
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          {serviceOptions.map((service) => {
            const isSelected = selectedService === service;

            return (
              <button
                key={service}
                type="button"
                onClick={() => setSelectedService(service)}
                aria-pressed={isSelected}
                className={`min-h-10 cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-all sm:min-h-11 ${
                  isSelected
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-indigo-400 hover:text-white"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Nombre *
          <Input
            name="name"
            autoComplete="name"
            placeholder="Tu nombre"
            required
            minLength={2}
            maxLength={80}
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñÜüÀ-ÿ' .-]{2,80}"
            onInput={(event) => {
              event.currentTarget.value = sanitizePersonName(
                event.currentTarget.value,
              );
            }}
            className="h-11 rounded-xl bg-zinc-50 placeholder:text-[13px] sm:placeholder:text-sm"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Empresa
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
            maxLength={120}
            onInput={(event) => {
              event.currentTarget.value = sanitizeCompanyName(
                event.currentTarget.value,
              );
            }}
            className="h-11 rounded-xl bg-zinc-50 placeholder:text-[13px] sm:placeholder:text-sm"
          />
        </label>
        <div className="grid gap-2 text-sm font-medium">
          <label htmlFor="contact-phone">WhatsApp</label>
          <div className="flex h-11 min-w-0 overflow-hidden rounded-xl border border-input bg-zinc-50 transition-[border-color,box-shadow] focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
            <Select
              value={selectedCountryIso}
              onValueChange={(value) => {
                setSelectedCountryIso(value ?? "PE");
                setPhoneNumber("");
                setStatus(null);
              }}
            >
              <SelectTrigger
                aria-label="Seleccionar código de país"
                className="h-full w-24 shrink-0 rounded-none border-0 border-r border-zinc-200 bg-white px-2.5 shadow-none focus-visible:ring-0 sm:w-26 sm:px-3"
              >
                <span className="flex items-center gap-2">
                  <selectedCountry.Flag
                    aria-hidden="true"
                    className="h-4 w-6 rounded-xs object-cover"
                  />
                  <span>{selectedCountry.dialCode}</span>
                </span>
              </SelectTrigger>
              <SelectContent
                align="start"
                alignItemWithTrigger={false}
                className="max-h-72 min-w-64 rounded-xl p-1"
              >
                {latinAmericanCountries.map((country) => {
                  const Flag = country.Flag;

                  return (
                    <SelectItem
                      key={country.iso}
                      value={country.iso}
                      className="py-2.5"
                    >
                      <Flag
                        aria-hidden="true"
                        className="h-4 w-6 rounded-xs object-cover"
                      />
                      <span className="flex-1">{country.name}</span>
                      <span className="text-zinc-500">{country.dialCode}</span>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Input
              id="contact-phone"
              name="phoneLocal"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              value={phoneNumber}
              onChange={(event) => {
                const digits = event.target.value.replace(/\D/g, "");
                setPhoneNumber(digits.slice(0, maxPhoneLength));
                setStatus(null);
              }}
              minLength={Math.min(...selectedPhoneRule.lengths)}
              maxLength={maxPhoneLength}
              pattern="[0-9]*"
              placeholder={"9".repeat(maxPhoneLength)}
              aria-label="Número de WhatsApp"
              aria-describedby="contact-phone-help"
              className="h-full rounded-none border-0 bg-transparent px-3 shadow-none placeholder:text-[13px] focus-visible:ring-0 sm:placeholder:text-sm"
            />
          </div>
          <p
            id="contact-phone-help"
            className="text-xs font-normal text-zinc-500"
          >
            {selectedCountry.name}: {selectedPhoneRule.label}, solo números.
          </p>
        </div>
        <label className="grid gap-2 text-sm font-medium">
          Correo electrónico *
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            required
            maxLength={254}
            className="h-11 rounded-xl bg-zinc-50 placeholder:text-[13px] sm:placeholder:text-sm"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium">
        Cuéntame sobre el proyecto *
        <Textarea
          name="message"
          rows={6}
          placeholder="Describe tus objetivos, funciones necesarias y cualquier contexto útil..."
          required
          minLength={20}
          maxLength={2000}
          className="min-h-36 resize-none rounded-xl bg-zinc-50 placeholder:text-[13px] sm:placeholder:text-sm"
        />
      </label>

      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div
        className="mt-5 flex cursor-pointer items-start gap-2"
        onClick={(event) => {
          const target = event.target as HTMLElement;
          const clickedCheckbox =
            target.closest('[data-slot="checkbox"]') ||
            (target instanceof HTMLInputElement && target.type === "checkbox");

          if (!clickedCheckbox) setConsent((current) => !current);
        }}
      >
        <Checkbox
          id="contact-page-consent"
          aria-labelledby="contact-page-consent-label"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked)}
          className="mt-0.5 border-zinc-300 data-checked:border-indigo-600 data-checked:bg-indigo-600 data-checked:text-white"
        />
        <span
          id="contact-page-consent-label"
          className="text-xs leading-5 tracking-tight text-zinc-500"
        >
          Acepto que Nexbloq utilice estos datos únicamente para responder mi
          consulta.*
        </span>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <ButtonPrimary
          type="submit"
          disabled={isSubmitting}
          text={isSubmitting ? "Enviando..." : "Enviar consulta"}
          size="sm"
          font="semibold"
        />
        {status && (
          <p
            role={status.kind === "error" ? "alert" : "status"}
            className={`text-xs lg:text-sm leading-6 ${
              status.kind === "error" ? "text-red-600" : "text-emerald-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
