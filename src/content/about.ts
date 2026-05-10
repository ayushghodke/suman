import { todo } from "@/lib/copy";

export const about = {
  meta: {
    title: "About Us — Government Electrical Licensed Contractor in Pune",
    description:
      "Suman Enterprises has 15 years of structured operations in electrical engineering across Maharashtra — power transmission, building electrification, transformer stations and AMCs.",
  },

  hero: {
    eyebrow: "Who we are",
    heading: "15 years engineering Maharashtra's electrical infrastructure.",
    subheading:
      "Suman Enterprises is a Government Electrical Licensed Contractor based in Pune. We design, build and maintain HT/LT distribution, transformer stations, building and railway electrification, and the AMCs that keep them running.",
    primaryCta: { label: "Browse our projects", href: "/projects" },
    secondaryCta: { label: "Speak with us", href: "/contact" },
    image: "/assets/photos/hero_about.png",
    imageAlt:
      "Flat illustration of an engineering office with a transformer, lattice pylon and engineering drawings",
  },

  intro: {
    eyebrow: "Our practice",
    heading: "Single-source accountability across the electrical lifecycle.",
    body: "We are working in the Electrical Field. We have completed Residential Township Projects, Industrial Projects, Commercial Projects, Switching Stations, Transformer Installation, O.H. Line Work, Street Light Pole, H.T. & L.T. Feeder Pillar Erection, and H.T. & L.T. Cable Joint and Laying Work. We also offer AMCs for Residential Township, Industrial / Commercial sites and APFC Panels.",
  },

  founder: {
    eyebrow: "Leadership",
    heading: "Run by engineers who carry the licence on the wall.",
    body: "Suman Enterprises was founded with a simple thesis — that electrical contracting in Maharashtra needed a single accountable team for drawing, liaison, execution and maintenance, not three different vendors pointing at each other. Fifteen years of structured growth later, that thesis still holds.",
    name: todo("founder / proprietor full name"),
    title: todo("founder title — e.g. Proprietor, Managing Director"),
    image: "/assets/photos/about_founder_vignette.png",
    imageAlt:
      "Stylised portrait illustration of the founder holding a rolled engineering drawing",
  },

  mission: {
    eyebrow: "Mission",
    heading: "Reliable electrical infrastructure, delivered to spec, on time, and maintained.",
    body: "We deliver quality designs and consultancy services to our clients, supporting them with our expert knowledge and skills — and we stay accountable for the installation long after handover via structured AMC programmes.",
    image: "/assets/photos/about_mission_illustration.png",
    imageAlt:
      "Three icons connected by an amber line: transformer with reliability arrow, 15-year clock, compliance shield",
  },

  values: {
    eyebrow: "Our values",
    heading: "What you can expect, every project.",
    body: "Four non-negotiables. Every site walk, every BOQ, every commissioning and every breakdown call is measured against them.",
    items: [
      {
        title: "Safety first, always",
        body: "PPE, toolbox talks, lockout-tagout. We do not cut corners on the things that injure people.",
      },
      {
        title: "Quality you can audit",
        body: "ISO 9001:2015 systems, dimensioned drawings, signed-off BOQs, traceable test reports.",
      },
      {
        title: "Liaison done right",
        body: "MSEDCL/MSETCL approvals are a craft. Our desk turns drawings around in days, not weeks.",
      },
      {
        title: "We are still here in year five",
        body: "AMCs are how we keep installations performing — not how we sell more vendor lock-in.",
      },
    ],
    image: "/assets/photos/about_values_illustration.png",
    imageAlt: "Four-icon grid: Safety, Quality, Liaison, Long-term value",
  },

  timeline: {
    eyebrow: "Track record",
    heading: "Fifteen years of structured growth.",
    body: "From first 22/63 KVA double-pole structure at a spiritual trust in Pisoli, through 22×22 indoor receiving stations across XRBIA's Hinjwadi townships, to 22/630 KVA indoor stations at floriculture and food-processing sites across Pune district.",
    image: "/assets/photos/about_timeline_illustration.png",
    imageAlt:
      "Horizontal timeline rail connecting transformer, pylon, building, APFC panel, solar array",
  },
} as const;
