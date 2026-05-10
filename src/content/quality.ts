import { todo } from "@/lib/copy";

export const quality = {
  meta: {
    title: "Quality & Certifications — Suman Enterprises Pune",
    description:
      "Government Electrical Contractor licence, ISO 9001:2015, MSME/Udyam registration, GST compliance and approved liaison with MSEDCL & MSETCL.",
  },

  hero: {
    eyebrow: "Quality & compliance",
    heading: "Licensed, certified and compliance-ready.",
    subheading:
      "Every project we touch crosses someone's compliance desk — yours, the inspector's or a tender authority's. The credentials below are on file and available on request.",
    image: "/assets/photos/hero_quality_certifications.png",
    imageAlt:
      "Flat illustration of a wall of six framed certificates lit by an amber spotlight",
  },

  intro: {
    eyebrow: "Why this matters",
    heading: "The licence on the wall is the entry ticket — not the work.",
    body: "Government Electrical Licensed Contractors carry an obligation that goes beyond signing off drawings: every installation must be designed, executed and tested to a standard the Chief Electrical Inspector can audit at any time. The certifications below let us walk into MSEDCL, MSETCL, PWD, MIDC and PSU procurement desks with credentials matched to the prequalification format.",
  },

  certifications: [
    {
      title: "Government Electrical Contractor Licence",
      authority: "Office of the Chief Electrical Inspector, Government of Maharashtra",
      number: todo("electrical contractor licence number"),
      validity: todo("validity / renewal date"),
      summary:
        "The statutory licence required to execute electrical work above 250 V in Maharashtra. Held without lapse since the firm was founded.",
    },
    {
      title: "ISO 9001:2015 Quality Management",
      authority: todo("issuing certification body"),
      number: todo("ISO certificate number"),
      validity: todo("validity / renewal date"),
      summary:
        "Demonstrates documented quality systems for design, execution and post-handover service across our practice.",
    },
    {
      title: "MSME / Udyam Registration",
      authority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
      number: todo("Udyam registration number"),
      summary:
        "Recognised as a registered MSME. Standard prequalification on most government tenders.",
    },
    {
      title: "GST Compliance",
      authority: "Government of India",
      number: todo("GSTIN"),
      summary:
        "Active GST registration with on-time return filing. Tax clearance certificates available on request.",
    },
  ],

  partners: {
    eyebrow: "Approved liaison",
    heading: "Active relationships with the bodies who matter.",
    body: "These are the bodies whose desks we know by name — the people who review our drawings, sign off our load sanctions, and inspect our installations. Liaison is a craft, not a courier service.",
    items: [
      { name: "MSEDCL", body: "Distribution licensee for the state — load sanction, metering, charging." },
      { name: "MSETCL", body: "Transmission licensee — HT lines, switchyard interconnection." },
      { name: "PWD", body: "Public Works Department — electrical packages on government works." },
      { name: "MIDC", body: "Industrial estates across Maharashtra — internal LT/HT distribution." },
      { name: "MJP", body: "Maharashtra Jeevan Pradhikaran — pumping stations, water supply electrical." },
    ],
  },
} as const;
