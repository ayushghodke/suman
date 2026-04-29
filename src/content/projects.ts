import { todo } from "@/lib/copy";

export type Project = {
  slug: string;
  title: string;
  category: "Government" | "Real Estate" | "Industrial" | "Railway";
  scopeSummary: string;
  client: string;
  metaTitle: string;
  metaDescription: string;
};

/**
 * Seven case studies. The brief mentions "7 named projects" — until the
 * client supplies the list, every field is TODO. Slugs are placeholder; rename
 * once real project names are confirmed.
 */
export const projects: Project[] = Array.from({ length: 7 }).map((_, i) => ({
  slug: `case-study-${i + 1}`,
  title: todo(`Project ${i + 1} title — name of the development / substation / line`),
  category: "Government" as const,
  scopeSummary: todo(`Project ${i + 1} — one-line scope summary (kV class, length, value, year)`),
  client: todo(`Project ${i + 1} client name (e.g. MSEDCL, builder, factory)`),
  metaTitle: todo(`Project ${i + 1} meta title under 60 chars`),
  metaDescription: todo(`Project ${i + 1} meta description under 160 chars`),
}));

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
