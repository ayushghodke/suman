import { todo } from "@/lib/copy";

/**
 * Single source of truth for company-wide facts.
 * Update fields here and they propagate to header, footer, schema.org, and contact pages.
 */
export const site = {
  name: "Suman Enterprises",
  tagline: "Government-licensed electrical & civil engineering contractor",
  yearsInBusiness: 15,
  origin: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sumanenterprises.example",

  phones: {
    primary: { display: "+91 82372 95778", tel: "+918237295778" },
    secondary: { display: "+91 98333 11580", tel: "+919833311580" },
  },
  whatsapp: {
    number: "918237295778",
    url: "https://wa.me/918237295778?text=Hi%20Suman%20Enterprises",
  },
  email: {
    primary: todo("primary contact email — e.g. info@sumanenterprises.in"),
    careers: todo("careers email"),
  },

  address: {
    street: todo("full street address line"),
    locality: "Dhankawadi",
    city: "Pune",
    region: "Maharashtra",
    postalCode: todo("PIN code"),
    country: "IN",
  },

  // Statutory identifiers — leave as TODO until the client supplies them
  identifiers: {
    electricalLicenceNumber: todo("Govt electrical contractor licence number"),
    isoCertificate: todo("ISO 9001:2015 certificate number"),
    udyamRegistration: todo("MSME / Udyam registration number"),
    gstin: todo("GSTIN"),
    cin: todo("CIN, if registered as a Pvt Ltd"),
  },

  founder: {
    name: todo("founder / proprietor name"),
    title: todo("founder title — e.g. Proprietor, Managing Director"),
  },

  social: {
    linkedin: todo("LinkedIn company page URL"),
  },

  hours: {
    weekdays: "Mon–Sat, 09:30–18:30 IST",
    sunday: "Closed",
  },
} as const;
