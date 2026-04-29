import { site } from "@/content/site";
import { isTodo } from "@/lib/copy";

/**
 * JSON-LD builders. Imported by <JsonLd> component and the root layout.
 * Brief §9 — implement Organization + LocalBusiness on every page,
 * Service on each service detail page, BreadcrumbList on nested pages,
 * FAQPage on AMC and Professional Assistance.
 *
 * `clean()` strips fields that are still TODO so we never publish placeholder
 * text inside structured data (where Google sees it).
 */

type JsonLd = Record<string, unknown>;

function clean<T extends JsonLd>(obj: T): T {
  const out: JsonLd = {};
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "string" && isTodo(v)) continue;
    if (v === undefined || v === null) continue;
    out[k] = v;
  }
  return out as T;
}

export function organizationSchema(): JsonLd {
  return clean({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.origin,
    logo: `${site.origin}/assets/01_hero_homepage.svg`,
    telephone: site.phones.primary.tel,
    email: site.email.primary,
    address: clean({
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    }),
  });
}

export function localBusinessSchema(): JsonLd {
  return clean({
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: site.name,
    description: site.tagline,
    url: site.origin,
    telephone: site.phones.primary.tel,
    email: site.email.primary,
    priceRange: "$$",
    address: clean({
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    }),
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
  });
}

export function serviceSchema(args: {
  name: string;
  description: string;
  slug: string;
}): JsonLd {
  return clean({
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    provider: { "@type": "Organization", name: site.name, url: site.origin },
    areaServed: { "@type": "AdministrativeArea", name: "Maharashtra" },
    url: `${site.origin}/services/${args.slug}`,
  });
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${site.origin}${it.url}`,
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
