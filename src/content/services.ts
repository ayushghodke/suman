import { todo } from "@/lib/copy";

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
 * (Assets/files/00_PREVIEW.html). Body copy stays as TODO until the
 * client supplies wording.
 */
export const services: Service[] = [
  {
    slug: "power-transmission",
    title: "Power Transmission & Distribution",
    shortLabel: "Power T&D",
    iconFile: "icon_01_power_transmission.svg",
    summary: todo("2-line summary of HT/LT transmission & distribution capability — line lengths, voltages handled, MSEDCL/MSETCL liaison"),
    metaTitle: todo("meta title under 60 chars — e.g. 'Power Transmission & Distribution Contractor — Pune | Suman Enterprises'"),
    metaDescription: todo("meta description under 160 chars — what we do, for whom, key credentials"),
  },
  {
    slug: "building-electrification",
    title: "Building Electrification",
    shortLabel: "Buildings",
    iconFile: "icon_02_building_electrification.svg",
    summary: todo("2-line summary — internal wiring, panel rooms, lift power, common-area lighting, builder lobby completion"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "railway-electrification",
    title: "Railway Electrification",
    shortLabel: "Railway",
    iconFile: "icon_03_railway.svg",
    summary: todo("2-line summary — OHE, signalling power, station electrification, RDSO compliance"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "cable-laying",
    title: "HT & LT Cable Laying & Jointing",
    shortLabel: "Cable Laying",
    iconFile: "icon_04_cable_laying.svg",
    summary: todo("2-line summary — XLPE/PILCA, jointing kits, road crossings, RCC ducts, HDD"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "transformer-installation",
    title: "Transformer Installation",
    shortLabel: "Transformers",
    iconFile: "icon_05_transformer.svg",
    summary: todo("2-line summary — distribution transformers up to 2500 KVA, indoor/outdoor stations, oil filtration, charging"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "street-lighting",
    title: "Street Lighting & Feeder Pillar",
    shortLabel: "Street Lighting",
    iconFile: "icon_06_street_lighting.svg",
    summary: todo("2-line summary — LED retrofit, smart pole, township internal lighting, feeder pillar erection"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "lightning-protection",
    title: "Lightning Protection & Earthing",
    shortLabel: "LP & Earthing",
    iconFile: "icon_07_lightning_protection.svg",
    summary: todo("2-line summary — ESE arrestors, chemical earthing, IS/IEC compliance, soil resistivity testing"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "standby-generation",
    title: "Standby Generation & UPS",
    shortLabel: "DG & UPS",
    iconFile: "icon_08_dg_ups.svg",
    summary: todo("2-line summary — DG sets, AMF panels, online UPS, battery banks for hospitals & data centres"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy Solutions",
    shortLabel: "Renewables",
    iconFile: "icon_09_renewable.svg",
    summary: todo("2-line summary — rooftop solar PV, net-metering, on-grid/off-grid, MNRE empanelled scope"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
  {
    slug: "apfc-power-quality",
    title: "APFC Panels & Power Quality",
    shortLabel: "APFC",
    iconFile: "icon_10_apfc.svg",
    summary: todo("2-line summary — APFC panels, harmonic filters, capacitor banks, power-factor improvement"),
    metaTitle: todo("meta title under 60 chars"),
    metaDescription: todo("meta description under 160 chars"),
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
