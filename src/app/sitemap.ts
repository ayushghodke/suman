import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/projects",
    "/amc",
    "/professional-assistance",
    "/clients",
    "/quality-certifications",
    "/government-tenders",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.origin}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1.0 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.origin}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${site.origin}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
