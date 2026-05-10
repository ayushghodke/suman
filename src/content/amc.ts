export const amc = {
  meta: {
    title: "AMC Programmes — Electrical Maintenance Contracts in Pune",
    description:
      "Annual Maintenance Contracts for residential townships, industrial premises and APFC panels. Planned preventive schedule, breakdown response, parts & labour scope.",
  },

  hero: {
    eyebrow: "AMC programmes",
    heading: "Annual Maintenance Contracts that keep installations performing.",
    subheading:
      "Every electrical installation is one missed inspection away from a breakdown. Our AMC desk runs planned preventive schedules, responds to breakdowns within stated SLAs, and maintains audit-ready service records for your facility team.",
    primaryCta: { label: "Request an AMC quote", href: "/contact" },
    secondaryCta: { label: "View scope of work", href: "#scope" },
    image: "/assets/photos/hero_amc.png",
    imageAlt:
      "Flat illustration of two technicians on a township rooftop performing scheduled testing on an APFC panel",
  },

  scope: {
    eyebrow: "Scope of work",
    heading: "What's included in a typical Suman AMC.",
    body: "We design AMC scope around the facility — a township main panel, an industrial APFC bank and an institutional DG room have very different maintenance rhythms. The base scope below is a starting point.",
    items: [
      {
        title: "Quarterly planned preventive maintenance",
        body: "Tightening, IR readings, thermography, panel cleaning, contactor inspection, earthing checks. Signed-off checklist after every visit.",
      },
      {
        title: "Breakdown response with SLA",
        body: "Response within stated hours by phone-fix or site dispatch. AMC clients are prioritised over walk-in service requests.",
      },
      {
        title: "Statutory compliance support",
        body: "Earth-pit testing, thermography reports and statutory documentation that your CEI inspector will ask for.",
      },
      {
        title: "Spares discount and bench-stock",
        body: "AMC clients receive discounted contactor / capacitor / breaker pricing and we maintain critical-spare bench stock for your specific equipment.",
      },
      {
        title: "Annual audit & report",
        body: "Year-end report consolidating all PPM checklists, breakdown call-outs, parts replaced, and recommendations for the next year's budget.",
      },
    ],
  },

  tiers: {
    eyebrow: "Programme tiers",
    heading: "Pick the contract that matches your installation.",
    body: "Three tiers, scoped against the equipment on site. We can build a custom tier if your facility doesn't fit cleanly.",
    image: "/assets/photos/amc_tiers_illustration.png",
    imageAlt: "Three comparison cards showing progressively more equipment under maintenance",
    items: [
      {
        name: "Essential",
        target: "Single-panel installations, small commercial sites",
        bullets: [
          "Quarterly PPM",
          "Breakdown response by phone-fix or next-day site",
          "Annual report",
        ],
      },
      {
        name: "Comprehensive",
        target: "Townships, industrial premises with transformer + LT panel",
        bullets: [
          "Quarterly PPM + monthly walk-by",
          "24-hour SLA for breakdowns",
          "Spares discount & bench stock",
          "Half-yearly thermography",
        ],
      },
      {
        name: "Premium",
        target: "Large townships, industrial sites with APFC + DG + UPS",
        bullets: [
          "Monthly PPM",
          "Same-day SLA for breakdowns",
          "Full spares programme",
          "Quarterly thermography & power-quality audits",
          "Dedicated relationship engineer",
        ],
      },
    ],
  },

  response: {
    eyebrow: "Response promise",
    heading: "Trip-to-restoration measured in hours, not days.",
    body: "Our service desk dispatches engineers from Pune to most sites in Maharashtra within a same-day window for Premium and Comprehensive AMCs. Essential AMCs are next-day. We log every call, ETA, root-cause and fix in your facility's record so your team can audit response performance.",
    image: "/assets/photos/amc_response_illustration.png",
    imageAlt:
      "Service van travelling from a clock to a substation icon, indicating fast response time",
  },
} as const;
