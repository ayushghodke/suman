export const tenders = {
  meta: {
    title: "Government Tenders — MSEDCL, MSETCL, PWD, MIDC, MJP | Suman Enterprises",
    description:
      "Government Electrical Licensed Contractor responding to MSEDCL, MSETCL, PWD, MIDC and MJP tenders across Maharashtra. Drawings, liaison, prequalification documents.",
  },

  hero: {
    eyebrow: "For procurement officers",
    heading: "Responding to MSEDCL, MSETCL, PWD, MIDC and MJP tenders.",
    subheading:
      "We respond to government and PSU tenders across Maharashtra. Share your tender reference and our liaison desk reverts with prequalification documents within one working day.",
    primaryCta: { label: "Submit a tender enquiry", href: "/contact" },
    secondaryCta: { label: "Download credentials", href: "/quality-certifications" },
    image: "/assets/photos/hero_government_tenders_detail.png",
    imageAlt:
      "Tender desk with rolled drawings and pylons receding into a dawn sky",
  },

  bodies: {
    eyebrow: "Bodies we have worked with",
    heading: "Approved liaison across the Maharashtra electrical ecosystem.",
    body: "We've executed work and held active liaison with the following bodies. We're happy to share specific past tender references on request.",
    items: [
      { name: "MSEDCL", description: "Maharashtra State Electricity Distribution Co. Ltd." },
      { name: "MSETCL", description: "Maharashtra State Electricity Transmission Co. Ltd." },
      { name: "PWD", description: "Public Works Department, Maharashtra" },
      { name: "MIDC", description: "Maharashtra Industrial Development Corporation" },
      { name: "MJP", description: "Maharashtra Jeevan Pradhikaran (water supply)" },
    ],
  },

  prequalification: {
    eyebrow: "What we can share within one working day",
    heading: "Documents on file, ready for your tender package.",
    body: "On request, our liaison desk packages the relevant documents into a single PDF dossier matched to your tender's prequalification format.",
    items: [
      "Government Electrical Contractor Licence (Maharashtra)",
      "ISO 9001:2015 quality certificate",
      "MSME / Udyam registration",
      "GSTIN and tax clearance",
      "Past performance certificates from comparable projects",
      "Turnover statement (last 3 financial years)",
      "Banker's references on request",
      "Equipment ownership / lease declarations",
    ],
  },

  process: {
    eyebrow: "How tender enquiries flow",
    heading: "From your enquiry to a complete bid response.",
    body: "We've structured the tender desk to be fast and accountable. Most enquiries follow this path.",
    steps: [
      {
        n: "01",
        title: "Enquiry & reference",
        body: "Share the tender reference, scope summary, and submission deadline.",
      },
      {
        n: "02",
        title: "Prequalification dossier",
        body: "Within one working day, we revert with credentials matched to the prequalification format.",
      },
      {
        n: "03",
        title: "Site / drawing review",
        body: "Where required, we conduct a site visit or drawing review to scope the technical bid.",
      },
      {
        n: "04",
        title: "Technical & commercial bid",
        body: "We submit the formal bid, complete with BOQ, schedules, and supporting documents.",
      },
    ],
  },
} as const;
