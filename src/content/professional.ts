export const professional = {
  meta: {
    title: "Professional Assistance — Drawing Approvals, Liaison, Site Surveys | Suman Enterprises",
    description:
      "Drawing approvals, MSEDCL/MSETCL liaison, electrical inspectorate consultation, site surveys, BOQ preparation and load study — Pune, Maharashtra.",
  },

  hero: {
    eyebrow: "Professional assistance",
    heading: "Drawing approvals, liaison and consultancy services.",
    subheading:
      "If you're not building the project yourself but you need a licensed electrical contractor to walk a tender response, get drawings approved, liaise with MSEDCL/MSETCL or sign off a third-party installation — that's the desk we run.",
    primaryCta: { label: "Talk to our liaison desk", href: "/contact" },
    secondaryCta: { label: "Government tenders", href: "/government-tenders" },
    image: "/assets/photos/hero_professional_assistance.png",
    imageAlt:
      "Two figures leaning over a single-line electrical drawing on a desk with an amber lamp glow",
  },

  scope: {
    eyebrow: "What we help with",
    heading: "The kind of consultancy we get called for.",
    body: "These are the structured engagements we run on a per-project or retainer basis. Each one comes out of 15 years of in-house contracting practice, not theoretical consulting.",
    items: [
      {
        title: "Drawing approvals",
        body: "Single-line diagrams, layout drawings, BOQs prepared and submitted to MSEDCL / MSETCL / Electrical Inspectorate. Revisions handled until sign-off.",
      },
      {
        title: "Electrical Load Sanction (M.S.E.D.C.L. / M.S.E.T.C.L.)",
        body: "End-to-end load sanction packages — application, drawings, fees, follow-up, and sanctioned-load certificate delivered.",
      },
      {
        title: "Layout & design consultation",
        body: "Pre-tender or pre-construction electrical layout review with realistic BOQs and constructability comments.",
      },
      {
        title: "Electrical inspectorate liaison",
        body: "Pre-charging inspection prep, statutory compliance documentation, and walk-throughs with the CEI's office.",
      },
      {
        title: "Energy compliance & audit",
        body: "Power-quality measurements, harmonics audits, APFC sizing and energy-cost reviews.",
      },
      {
        title: "Planning & site surveys",
        body: "Pre-bid site surveys, load studies, single-line schematics — usually as a fixed-fee deliverable.",
      },
    ],
  },

  workflow: {
    eyebrow: "How we work",
    heading: "From your first call to a signed-off deliverable.",
    body: "Most consultancy engagements run on a fixed scope with a fixed deliverable. We'll quote against the scope before starting, not against time.",
    steps: [
      {
        n: "01",
        title: "Brief & scope",
        body: "30-minute call or site visit to scope the deliverable.",
      },
      {
        n: "02",
        title: "Fixed-fee proposal",
        body: "Written proposal with scope, fee, and timeline. No open-ended billing.",
      },
      {
        n: "03",
        title: "Execution",
        body: "Drawings produced, submissions made, approvals chased.",
      },
      {
        n: "04",
        title: "Sign-off & handover",
        body: "Approved drawings, sanction letter or audit report — delivered, archived, and traceable.",
      },
    ],
  },
} as const;
