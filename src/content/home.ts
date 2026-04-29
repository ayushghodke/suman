import { todo } from "@/lib/copy";

/**
 * Every string rendered on the homepage lives here. Strings flagged as
 * `todo(...)` show with an amber dashed outline in dev mode (see globals.css)
 * and produce one entry in the final TODO inventory.
 */
export const home = {
  meta: {
    title: todo("homepage <title> — under 60 chars, primary keyword + Pune"),
    description: todo("homepage meta description — under 160 chars, value prop + audience"),
  },

  hero: {
    eyebrow: "Government-licensed since 2009",
    heading: todo("hero H1 — 6–9 words, anchored on trust + electrical contracting"),
    subheading: todo(
      "hero sub-line — 18–25 words, who you serve (government, real estate, industry) and where (Pune & Maharashtra)"
    ),
    primaryCta: { label: "Get a Quote", href: "/contact" },
    secondaryCta: { label: "View Our Projects", href: "/projects" },
    imageAlt: "Engineers at a 22/630 KVA transformer station beside a high-voltage transmission pylon and a building electrification site",
  },

  intro: {
    eyebrow: "What we do",
    heading: todo("intro H2 — 5–8 words summarising the service breadth"),
    body: todo(
      "intro body — 40–60 words; HT/LT distribution, building electrification, railway, transformer, AMC. Indian English."
    ),
  },

  services: {
    eyebrow: "Capabilities",
    heading: "Ten service pillars",
    body: todo(
      "services overview lead-in — 25–35 words on how the practice spans transmission, distribution, building, railway and aftermarket AMC"
    ),
    cta: { label: "See all services", href: "/services" },
  },

  process: {
    eyebrow: "How we work",
    heading: "Survey to AMC, end to end",
    body: todo(
      "process explainer — 30–45 words on the four-stage delivery model: site survey, design & utility liaison, execution, charging & AMC handover"
    ),
  },

  projects: {
    eyebrow: "Selected work",
    heading: todo("projects H2 — 4–6 words, e.g. 'Where we have delivered'"),
    body: todo("projects lead-in — 25–35 words on the kinds of projects on the books"),
    cta: { label: "Browse case studies", href: "/projects" },
  },

  tenderCta: {
    eyebrow: "For procurement officers",
    heading: todo("tender CTA H2 — 6–9 words; speaks directly to MSEDCL / PWD / MIDC officers"),
    body: todo(
      "tender CTA body — 25–35 words; mentions empanelment, response time on tender enquiries, contact channel"
    ),
    primaryCta: { label: "Submit a Tender Enquiry", href: "/government-tenders" },
    secondaryCta: { label: "Download credentials", href: "/quality-certifications" },
  },
};
