import type { Metadata } from "next";
import { contactInfo, socialLinks } from "@/lib/contact";

const configuredSiteUrl = "https://nexbloq.com";

export const siteConfig = {
  name: "Nexbloq",
  legalName: "NEXBLOQ E.I.R.L.",
  url: new URL(configuredSiteUrl).origin,
  locale: "es_PE",
  language: "es-PE",
  location: "Lima, Perú",
  description:
    "Desarrollo de páginas web, landing pages, sitios corporativos y sistemas web personalizados para empresas y profesionales en Lima y todo el Perú.",
} as const;

export const socialImage = {
  url: new URL("/logo/Logo1.png", siteConfig.url).toString(),
  width: 1254,
  height: 1254,
  alt: "Nexbloq, desarrollo web profesional en Perú",
  type: "image/png",
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  index = true,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const brandedTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es-PE": canonicalUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: brandedTitle,
      description,
      url: canonicalUrl,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [socialImage.url],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
        },
  };
}

export function createHomeStructuredData() {
  const organizationId = `${siteConfig.url}/#organization`;
  const personId = `${siteConfig.url}/#founder`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: "Nexbloq Studio",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: socialImage.url,
          width: socialImage.width,
          height: socialImage.height,
        },
        image: socialImage.url,
        description: siteConfig.description,
        email: contactInfo.email,
        telephone: contactInfo.phoneE164,
        sameAs: socialLinks.map((social) => social.href),
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lima",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        areaServed: {
          "@type": "Country",
          name: "Perú",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "ventas y atención al cliente",
          email: contactInfo.email,
          telephone: contactInfo.phoneE164,
          availableLanguage: "Spanish",
          areaServed: "PE",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de desarrollo web",
          itemListElement: [
            "Landing pages profesionales",
            "Sitios web corporativos",
            "Rediseño UX/UI",
            "Sistemas web personalizados",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              areaServed: "Perú",
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "José",
        alternateName: "Nexbloq",
        jobTitle: "Desarrollador web",
        worksFor: { "@id": organizationId },
        url: absoluteUrl("/sobre-mi"),
        sameAs: socialLinks.map((social) => social.href),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lima",
          addressCountry: "PE",
        },
        knowsAbout: [
          "Desarrollo web",
          "Sistemas web",
          "Diseño UX/UI",
          "Next.js",
          "React",
          "TypeScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: "Nexbloq Desarrollo Web",
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function createBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
