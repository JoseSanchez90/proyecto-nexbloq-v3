import { type NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/nodemailer";
import {
  isPhoneCountryIso,
  isValidLocalPhone,
} from "@/lib/contact-validation";

type ContactPayload = Record<string, unknown>;

const allowedServices = new Set([
  "Landing page",
  "Sitio corporativo",
  "Rediseño UX/UI",
  "Sistema web",
  "Mantenimiento",
  "Dominio y hosting",
]);

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

function row(label: string, value: string) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:6px 0">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="font-size:11px;color:#999;padding-bottom:2px">${escapeHtml(label)}</td></tr>
        <tr><td style="font-size:14px;font-weight:600;color:#1a1a1a">${escapeHtml(value)}</td></tr>
      </table>
    </td></tr>
  </table>`;
}

function notificationHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nuevo contacto</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 16px">
<tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td bgcolor="#4f46e5" style="background-color:#4f46e5;padding:32px 40px;border-radius:12px 12px 0 0">
  <div style="font-size:24px;font-weight:700;color:#fff">Nexbloq</div>
  <div style="font-size:14px;color:rgba(255,255,255,.85);padding-top:4px">Nuevo mensaje de contacto</div>
</td></tr>
<tr><td style="background:#fff;padding:32px 40px">
  <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#4f46e5;padding-bottom:12px">Datos del cliente</div>
  ${row("Nombre", data.name)}
  ${row("Empresa", data.company || "No indicada")}
  ${row("Correo electrónico", data.email)}
  ${row("Teléfono o WhatsApp", data.phone || "No indicado")}
  <div style="height:24px"></div>
  <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#4f46e5;padding-bottom:12px">Detalles del proyecto</div>
  ${row("Tipo de proyecto", data.service)}
  <div style="height:24px"></div>
  <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#4f46e5;padding-bottom:8px">Mensaje</div>
  <div style="font-size:14px;color:#444;line-height:1.6;background:#fafafa;border-radius:8px;padding:16px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
</td></tr>
<tr><td style="background:#fff;border-top:1px solid #eee;padding:20px 40px;border-radius:0 0 12px 12px;font-size:12px;color:#999;text-align:center">Enviado desde el formulario de contacto de nexbloq.com</td></tr>
</table></td></tr></table></body></html>`;
}

function confirmationHtml(data: {
  name: string;
  service: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hemos recibido tu mensaje</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 16px">
<tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td bgcolor="#4f46e5" style="background-color:#4f46e5;padding:32px 40px;border-radius:12px 12px 0 0">
  <div style="font-size:24px;font-weight:700;color:#fff">Nexbloq</div>
  <div style="font-size:14px;color:rgba(255,255,255,.85);padding-top:4px">Hemos recibido tu mensaje</div>
</td></tr>
<tr><td style="background:#fff;padding:32px 40px">
  <div style="font-size:20px;font-weight:700;color:#1a1a1a">¡Gracias por contactarme, ${escapeHtml(data.name)}!</div>
  <div style="font-size:14px;color:#666;line-height:1.6;padding-top:12px">Recibí tu mensaje y te responderé lo antes posible. Este es el resumen de tu consulta:</div>
  <div style="height:24px;border-bottom:1px solid #eee"></div><div style="height:24px"></div>
  ${row("Tipo de proyecto", data.service)}
  <div style="height:20px"></div>
  <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#999;padding-bottom:8px">Tu mensaje</div>
  <div style="font-size:14px;color:#444;line-height:1.6;background:#fafafa;border-radius:8px;padding:16px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
</td></tr>
<tr><td style="background:#fff;border-top:1px solid #eee;padding:20px 40px;border-radius:0 0 12px 12px;text-align:center">
  <div style="font-size:12px;color:#999">Si necesitas añadir información, responde directamente a este correo.</div>
  <div style="font-size:13px;font-weight:600;color:#4f46e5;padding-top:8px">Nexbloq — Desarrollo Web Profesional</div>
</td></tr>
</table></td></tr></table></body></html>`;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;

    // Honeypot: simulamos éxito para no revelar la protección a los bots.
    if (text(payload.website)) {
      return NextResponse.json({ success: true });
    }

    const name = text(payload.name, 80);
    const company = text(payload.company, 120);
    const email = text(payload.email, 254);
    const phone = text(payload.phone, 40);
    const phoneCountry = text(payload.phoneCountry, 2);
    const phoneLocal = text(payload.phoneLocal, 15);
    const service = text(payload.service, 120);
    const message = text(payload.message, 2_000);
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
      !allowedServices.has(service) ||
      message.length < 20 ||
      hasInvalidPhone ||
      !consent
    ) {
      return NextResponse.json(
        { success: false, message: "La información enviada no es válida." },
        { status: 400 },
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASS;
    const recipient = process.env.CONTACT_TO_EMAIL ?? "nexbloq@gmail.com";

    if (!emailUser || !emailPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "El servicio de correo aún no está configurado.",
        },
        { status: 503 },
      );
    }

    const results = await Promise.allSettled([
      sendMail({
        from: `"Nexbloq" <${emailUser}>`,
        to: recipient,
        replyTo: email,
        subject: `Nueva consulta web de ${name} — ${service}`,
        html: notificationHtml({
          name,
          company,
          email,
          phone,
          service,
          message,
        }),
      }),
      sendMail({
        from: `"Nexbloq" <${emailUser}>`,
        to: email,
        replyTo: recipient,
        subject: `Gracias por contactarme, ${name} — Nexbloq`,
        html: confirmationHtml({ name, service, message }),
      }),
    ]);

    if (results[0].status === "rejected") {
      console.error("Contact notification failed:", results[0].reason);
      return NextResponse.json(
        { success: false, message: "No fue posible enviar el mensaje." },
        { status: 502 },
      );
    }

    if (results[1].status === "rejected") {
      console.error("Contact confirmation failed:", results[1].reason);
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Send contact route error:", error);
    return NextResponse.json(
      { success: false, message: "No fue posible procesar el mensaje." },
      { status: 500 },
    );
  }
}
