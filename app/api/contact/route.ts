import { Resend } from "resend";
import { contactInfo } from "@/lib/contact";
import {
  isPhoneCountryIso,
  isValidLocalPhone,
} from "@/lib/contact-validation";

type ContactPayload = Record<string, unknown>;

function text(value: unknown, maxLength = 2_000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (text(payload.website)) {
      return Response.json({ ok: true });
    }

    const name = text(payload.name, 120);
    const company = text(payload.company, 160);
    const email = text(payload.email, 254);
    const phone = text(payload.phone, 40);
    const phoneCountry = text(payload.phoneCountry, 2);
    const phoneLocal = text(payload.phoneLocal, 15);
    const service = text(payload.service, 120);
    const budget = text(payload.budget, 120);
    const timeframe = text(payload.timeframe, 120);
    const references = text(payload.references, 500);
    const message = text(payload.message, 5_000);
    const consent = payload.consent === true;
    const hasInvalidPhone =
      phone.length > 0 &&
      (!isPhoneCountryIso(phoneCountry) ||
        !isValidLocalPhone(phoneCountry, phoneLocal));

    if (
      name.length < 2 ||
      !/^[\p{L}\p{M}\s.'’\-]+$/u.test(name) ||
      (company.length > 0 &&
        !/^[\p{L}\p{M}\p{N}\s&.,'’()\-]+$/u.test(company)) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !service ||
      message.length < 20 ||
      hasInvalidPhone ||
      !consent
    ) {
      return Response.json(
        { error: "La información enviada no es válida." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "El servicio de correo aún no está configurado." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const recipient = process.env.CONTACT_TO_EMAIL ?? contactInfo.email;
    const sender =
      process.env.CONTACT_FROM_EMAIL ??
      "Nexbloq Web <onboarding@resend.dev>";

    const rows = [
      ["Nombre", name],
      ["Empresa", company || "No indicada"],
      ["Correo", email],
      ["Teléfono o WhatsApp", phone || "No indicado"],
      ["Tipo de proyecto", service],
      ["Presupuesto estimado", budget || "No indicado"],
      ["Plazo esperado", timeframe || "No indicado"],
      ["Referencias", references || "No indicadas"],
    ];

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Nueva consulta web de ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#18181b;line-height:1.6">
          <h1 style="font-size:24px;margin-bottom:24px">Nueva consulta desde Nexbloq</h1>
          <table style="width:100%;border-collapse:collapse">
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;font-weight:700">${escapeHtml(label)}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7">${escapeHtml(value)}</td>
                  </tr>
                `,
              )
              .join("")}
          </table>
          <h2 style="font-size:18px;margin:28px 0 8px">Descripción del proyecto</h2>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
      text: [
        "Nueva consulta desde Nexbloq",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Descripción del proyecto:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return Response.json(
        { error: "No fue posible enviar el mensaje." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json(
      { error: "No fue posible procesar el mensaje." },
      { status: 500 },
    );
  }
}
