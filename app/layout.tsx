import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import WhatsAppButton from "@/components/main/whatsapp-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { contactInfo, socialLinks } from "@/lib/contact";

const siteUrlValue = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = siteUrlValue ? new URL(siteUrlValue) : null;
const title = "Nexbloq | Desarrollo web profesional en Perú";
const description =
  "Diseño y desarrollo páginas web, landing pages, sitios corporativos y sistemas personalizados para negocios y profesionales en Perú.";

export const metadata: Metadata = {
  metadataBase: siteUrl ?? undefined,
  applicationName: "Nexbloq",
  title,
  description,
  keywords: [
    "desarrollo web en Perú",
    "diseño de páginas web",
    "desarrollo de landing pages",
    "páginas web para negocios",
    "desarrollador web en Lima",
    "sitios web corporativos",
    "sistemas web personalizados",
    "rediseño de páginas web",
  ],
  authors: [{ name: "Jesús" }],
  creator: "Nexbloq",
  publisher: "Nexbloq",
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Nexbloq",
    title: "Nexbloq — Desarrollo web para negocios",
    description:
      "Sitios web modernos, rápidos y desarrollados de acuerdo con los objetivos de tu negocio.",
    url: siteUrl ?? undefined,
  },
  twitter: {
    card: "summary",
    title: "Nexbloq — Desarrollo web para negocios",
    description:
      "Sitios web modernos, rápidos y desarrollados de acuerdo con los objetivos de tu negocio.",
  },
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: {
    icon: "/favicon.ico",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jesús",
  alternateName: "Nexbloq",
  jobTitle: "Desarrollador web independiente",
  description,
  url: siteUrl?.toString(),
  email: contactInfo.email,
  telephone: contactInfo.phoneE164,
  sameAs: socialLinks.map((social) => social.href),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  knowsAbout: [
    "Desarrollo web",
    "Diseño de interfaces",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <TooltipProvider delay={250}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
