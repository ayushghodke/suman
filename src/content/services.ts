export type Service = {
  slug: string;
  title: string;
  iconFile: string;
  shortLabel: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
};

/**
 * Ten service pillars. Titles confirmed from the icon set
 * (Assets/files/00_PREVIEW.html). Summaries derived from the brochure's
 * "Services & Maintenance" list, "Who We Are" copy and the project ledger
 * (Assets/Suman_Enterprise_Brochure.pdf).
 */
export const services: Service[] = [
  {
    slug: "power-transmission",
    title: "Power Transmission & Distribution",
    shortLabel: "Power T&D",
    iconFile: "icon_01_power_transmission.svg",
    summary:
      "HT and LT power supplies and distribution systems, OH line work and switching stations — built and maintained with MSEDCL and MSETCL liaison.",
    metaTitle: "Power Transmission & Distribution Contractor — Pune | Suman Enterprises",
    metaDescription:
      "HT & LT distribution, OH lines and switching stations. 15 years of MSEDCL & MSETCL liaison from Pune.",
  },
  {
    slug: "building-electrification",
    title: "Building Electrification",
    shortLabel: "Buildings",
    iconFile: "icon_02_building_electrification.svg",
    summary:
      "Mains and sub-mains power distribution, internal and external lighting and small power for residential township, commercial and industrial buildings.",
    metaTitle: "Building Electrification Contractor — Pune | Suman Enterprises",
    metaDescription:
      "Mains, sub-mains, lighting and small power for residential, commercial and industrial buildings. Compliant installations to Building Regulations.",
  },
  {
    slug: "railway-electrification",
    title: "Railway Electrification",
    shortLabel: "Railway",
    iconFile: "icon_03_railway.svg",
    summary:
      "Railway electrification works alongside our power transmission and distribution practice — one of the four pillars Suman Enterprises has delivered for 15 years.",
    metaTitle: "Railway Electrification Contractor — Pune | Suman Enterprises",
    metaDescription:
      "Railway electrification works delivered as part of our 15-year electrical engineering practice in Pune.",
  },
  {
    slug: "cable-laying",
    title: "HT & LT Cable Laying & Jointing",
    shortLabel: "Cable Laying",
    iconFile: "icon_04_cable_laying.svg",
    summary:
      "H.T. and L.T. cable joint and laying work, and cable containment systems, for township, industrial and commercial sites.",
    metaTitle: "HT & LT Cable Laying & Jointing — Pune | Suman Enterprises",
    metaDescription:
      "HT & LT cable laying and jointing, with cable containment systems, across Pune and Maharashtra.",
  },
  {
    slug: "transformer-installation",
    title: "Transformer Installation",
    shortLabel: "Transformers",
    iconFile: "icon_05_transformer.svg",
    summary:
      "Indoor and outdoor transformer stations from 22/63 KVA up to 22/630 KVA — installed at township, agro-processing, floriculture and institutional sites.",
    metaTitle: "Transformer Installation — 22/63 to 22/630 KVA | Suman Enterprises",
    metaDescription:
      "Indoor and outdoor 22 KV transformer stations from 63 to 630 KVA, with allied works, charging and AMC.",
  },
  {
    slug: "street-lighting",
    title: "Street Lighting & Feeder Pillar",
    shortLabel: "Street Lighting",
    iconFile: "icon_06_street_lighting.svg",
    summary:
      "Street light poles and H.T. & L.T. feeder pillar erection for township internal lighting and external common-area lighting.",
    metaTitle: "Street Lighting & Feeder Pillar Erection — Pune | Suman Enterprises",
    metaDescription:
      "Street light poles and HT/LT feeder pillar erection for residential townships and external lighting schemes.",
  },
  {
    slug: "lightning-protection",
    title: "Lightning Protection & Earthing",
    shortLabel: "LP & Earthing",
    iconFile: "icon_07_lightning_protection.svg",
    summary:
      "Lightning protection systems together with earthing and bonding requirements, designed and installed for compliant building electrical schemes.",
    metaTitle: "Lightning Protection & Earthing — Pune | Suman Enterprises",
    metaDescription:
      "Lightning protection systems with earthing and bonding, for compliant electrical installations across Pune.",
  },
  {
    slug: "standby-generation",
    title: "Standby Generation & UPS",
    shortLabel: "DG & UPS",
    iconFile: "icon_08_dg_ups.svg",
    summary:
      "Standby generation and UPS systems for residential township, industrial and commercial premises that can't tolerate downtime.",
    metaTitle: "Standby Generation & UPS — Pune | Suman Enterprises",
    metaDescription:
      "DG and UPS systems for townships, industrial and commercial premises that can't afford downtime.",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy Solutions",
    shortLabel: "Renewables",
    iconFile: "icon_09_renewable.svg",
    summary:
      "Renewable technology power requirements and the controls wiring associated with mechanical services systems.",
    metaTitle: "Renewable Energy Power — Pune | Suman Enterprises",
    metaDescription:
      "Renewable technology power requirements alongside controls and mechanical services wiring.",
  },
  {
    slug: "apfc-power-quality",
    title: "APFC Panels & Power Quality",
    shortLabel: "APFC",
    iconFile: "icon_10_apfc.svg",
    summary:
      "APFC panels and the AMCs that keep them performing — for residential townships, industrial and commercial premises.",
    metaTitle: "APFC Panels & AMC — Pune | Suman Enterprises",
    metaDescription:
      "APFC panels and AMCs for residential townships, industrial and commercial premises across Pune.",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
