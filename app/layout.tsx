import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import WhatsAppButton from "@/components/main/whatsapp-button";
import ScrollReveal from "@/components/main/scroll-reveal";
import CookieConsentBanner from "@/components/main/cookie-consent-banner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig, socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Desarrollador web en Lima, Perú | Nexbloq",
    template: "%s | Nexbloq",
  },
  description: siteConfig.description,
  keywords: [
    "desarrollador web en Lima",
    "desarrollo web en Perú",
    "diseño de páginas web",
    "landing pages profesionales",
    "sitios web corporativos",
    "sistemas web personalizados",
    "rediseño UX UI",
  ],
  authors: [{ name: "José", url: "/sobre-mi" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "es-PE": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Desarrollador web en Lima, Perú | Nexbloq",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollador web en Lima, Perú | Nexbloq",
    description: siteConfig.description,
    images: [socialImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if ("scrollRestoration" in history) history.scrollRestoration = "manual";',
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <TooltipProvider delay={250}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsentBanner />
          <ScrollReveal />
        </TooltipProvider>
      </body>
    </html>
  );
}
