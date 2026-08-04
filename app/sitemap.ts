import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { homeServices } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

const lastSignificantUpdate = new Date("2026-08-03T00:00:00-05:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/proyectos/${project.slug}`),
    lastModified: lastSignificantUpdate,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [project.image, ...project.gallery].map(absoluteUrl),
  }));

  const servicePages: MetadataRoute.Sitemap = homeServices.map((service) => ({
    url: absoluteUrl(`/servicios/${service.slug}`),
    lastModified: lastSignificantUpdate,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [absoluteUrl(service.image)],
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/logo/Logo1.png")],
    },
    {
      url: absoluteUrl("/servicios"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePages,
    {
      url: absoluteUrl("/proyectos"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
    {
      url: absoluteUrl("/sobre-mi"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contacto"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/politicas-de-privacidad"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terminos-y-condiciones"),
      lastModified: lastSignificantUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
