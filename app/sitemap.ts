import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { homeServices } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return [];
  }

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: new URL(`/proyectos/${project.slug}`, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = homeServices.map((service) => ({
    url: new URL("/servicios/" + service.slug, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/sobre-mi", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/proyectos", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/servicios", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/contacto", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
    ...servicePages,
  ];
}
