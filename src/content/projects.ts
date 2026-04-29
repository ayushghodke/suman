export type Project = {
  slug: string;
  title: string;
  category: "Government" | "Real Estate" | "Industrial" | "Railway" | "Institutional";
  scopeSummary: string;
  client: string;
  metaTitle: string;
  metaDescription: string;
};

/**
 * Seven case studies — sourced verbatim from the "Some of Our Projects"
 * section of the company brochure (Assets/Suman_Enterprise_Brochure.pdf).
 *
 * The first three entries are the homepage-featured tiles per the client's
 * brief: World Renewal Spiritual Trust (Pisoli), XRBIA Hinjwadi Phase I,
 * Lily Floriculture Talegaon. They appear via projects.slice(0, 3) on /.
 */
export const projects: Project[] = [
  {
    slug: "world-renewal-spiritual-trust-pisoli",
    title: "World Renewal Spiritual Trust, Pisoli",
    category: "Institutional",
    scopeSummary:
      "Jadamba Bhavan — 22 KV HT OH Line, 22/63 KVA DP structure and allied works.",
    client: "World Renewal Spiritual Trust",
    metaTitle: "World Renewal Spiritual Trust, Pisoli — Suman Enterprises",
    metaDescription:
      "22 KV HT overhead line and 22/63 KVA DP structure for the World Renewal Spiritual Trust at Pisoli Gaon, Pune.",
  },
  {
    slug: "xrbia-hinjwadi-phase-1",
    title: "XRBIA Developers Ltd. — Hinjwadi Phase I, Marunje",
    category: "Real Estate",
    scopeSummary:
      "22×22 indoor receiving stations and 22/630 KVA transformer stations — 8 nos. and allied works.",
    client: "XRBIA Developers Ltd.",
    metaTitle: "XRBIA Hinjwadi Phase I — Indoor Transformer Stations | Suman Enterprises",
    metaDescription:
      "22×22 indoor receiving stations and eight 22/630 KVA transformer stations for XRBIA's Hinjwadi Phase I township at Marunje.",
  },
  {
    slug: "lily-floriculture-talegaon",
    title: "Lily Floriculture, Talegaon",
    category: "Industrial",
    scopeSummary:
      "Bebedol – Somatane Phata, Talegaon — 22/630 KVA indoor transformer stations, 3 nos. and allied works.",
    client: "Lily Floriculture",
    metaTitle: "Lily Floriculture Talegaon — 22/630 KVA Stations | Suman Enterprises",
    metaDescription:
      "Three 22/630 KVA indoor transformer stations for Lily Floriculture at Bebedol – Somatane Phata, Talegaon.",
  },
  {
    slug: "xrbia-hinjwadi-phase-2",
    title: "XRBIA Developers Ltd. — Hinjwadi Phase II, Marunje",
    category: "Real Estate",
    scopeSummary:
      "22/630 KVA indoor transformer stations — 3 nos. and allied works.",
    client: "XRBIA Developers Ltd.",
    metaTitle: "XRBIA Hinjwadi Phase II — Indoor Transformer Stations | Suman Enterprises",
    metaDescription:
      "Three 22/630 KVA indoor transformer stations for XRBIA's Hinjwadi Phase II township at Marunje.",
  },
  {
    slug: "chhtrapati-agro-tech-bhor",
    title: "Chhtrapati Agro Tech Pvt. Ltd. — Verve Bk., Bhor",
    category: "Industrial",
    scopeSummary:
      "Verve Bk., Tal. Bhor, Dist. Pune — 22/200 KVA indoor transformer stations, 3 nos. and allied works.",
    client: "Chhtrapati Agro Tech Pvt. Ltd.",
    metaTitle: "Chhtrapati Agro Tech, Bhor — 22/200 KVA Stations | Suman Enterprises",
    metaDescription:
      "Three 22/200 KVA indoor transformer stations for Chhtrapati Agro Tech at Verve Bk., Tal. Bhor.",
  },
  {
    slug: "prathamesh-krushi-prayatan-kendra-salwade",
    title: "Prathamesh Krushi Prayatan Kendra, Salwade",
    category: "Industrial",
    scopeSummary:
      "Salwade, Tal. Bhor — 22/315 KVA indoor transformer station, 1 no. and allied works.",
    client: "Prathamesh Krushi Prayatan Kendra",
    metaTitle: "Prathamesh Krushi Prayatan Kendra, Salwade | Suman Enterprises",
    metaDescription:
      "22/315 KVA indoor transformer station and allied works for Prathamesh Krushi Prayatan Kendra at Salwade, Tal. Bhor.",
  },
  {
    slug: "ajay-foods-international-ranje",
    title: "Ajay Foods International Pvt. Ltd. — Ranje, Bhor",
    category: "Industrial",
    scopeSummary:
      "Post Ranje, Tal. Bhor — 22/100 KVA indoor transformer station, 1 no. and allied works.",
    client: "Ajay Foods International Pvt. Ltd.",
    metaTitle: "Ajay Foods International, Ranje — 22/100 KVA Station | Suman Enterprises",
    metaDescription:
      "22/100 KVA indoor transformer station and allied works for Ajay Foods International at Ranje, Tal. Bhor.",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
