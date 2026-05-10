/**
 * Per-service deeper detail used on /services/[slug] pages.
 * Keep this in sync with the slugs in `services.ts`.
 *
 * Where the user has not yet supplied detailed scope, we ship sensible
 * defaults derived from the brochure plus reasonable practice. Edit
 * each bullet list to reflect the firm's actual capability.
 */

export type ServiceDetail = {
  intro: string;
  scope: string[];
  highlight?: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "power-transmission": {
    intro:
      "HT and LT power supplies, distribution networks, OH lines and switching stations — designed, built and maintained with full MSEDCL and MSETCL liaison.",
    scope: [
      "22 KV HT overhead line work, including DP structures and tap-offs",
      "Internal HT and LT distribution for townships and industrial estates",
      "Switching stations, isolators, drop-out fuses",
      "MSEDCL and MSETCL load sanction, drawings and approvals",
      "Charging, commissioning and handover with statutory documentation",
      "AMC programmes for installed networks",
    ],
    highlight: "15 years of HT execution experience across Pune district.",
  },
  "building-electrification": {
    intro:
      "Mains and sub-mains power distribution, internal and external lighting and small power for residential township, commercial and industrial buildings.",
    scope: [
      "Mains, sub-mains and final-circuit distribution",
      "Internal and external lighting layouts",
      "Small power circuits and dedicated motor circuits",
      "Service risers and floor-wise distribution boards",
      "Common-area lighting, lift power and pump supplies",
      "Statutory inspection and certification",
    ],
  },
  "railway-electrification": {
    intro:
      "Railway electrification works delivered alongside our power transmission and distribution practice — one of the four pillars Suman Enterprises has delivered for 15 years.",
    scope: [
      "Overhead catenary equipment installation",
      "Mast erection and foundation works",
      "Contact wire and dropper installation",
      "Auxiliary power supply systems",
      "Track-side electrical compliance",
      "Coordination with railway authorities",
    ],
  },
  "cable-laying": {
    intro:
      "H.T. and L.T. cable joint and laying work, with cable containment systems, for township, industrial and commercial sites.",
    scope: [
      "HT cable laying — direct buried, in conduit or in cable trays",
      "LT cable laying for township internal distribution",
      "Heat-shrink and cold-shrink HT joint kits",
      "Cable termination onto switchgear and busbars",
      "Cable trays, conduits and containment systems",
      "Pre-energisation testing — IR, hi-pot, continuity",
    ],
  },
  "transformer-installation": {
    intro:
      "Indoor and outdoor transformer stations from 22/63 KVA up to 22/630 KVA — installed at township, agro-processing, floriculture and institutional sites.",
    scope: [
      "22 KV indoor and outdoor transformer stations",
      "Capacity range from 63 KVA to 630 KVA (and larger on request)",
      "Plinth construction, oil bunds and earthing pits",
      "HT and LT cable termination",
      "Charging, oil-quality testing and statutory documentation",
      "Allied works — fencing, lighting, signage",
    ],
    highlight: "22/630 KVA stations executed at XRBIA Hinjwadi and Lily Floriculture Talegaon.",
  },
  "street-lighting": {
    intro:
      "Street light poles and H.T. & L.T. feeder pillar erection for township internal lighting and external common-area lighting.",
    scope: [
      "Street-light pole supply, erection and earthing",
      "LED luminaires sized to road width and use case",
      "Feeder pillar erection — HT and LT",
      "Astronomical timer and contactor panels",
      "Township internal lighting design",
      "Energy-efficient retrofit on existing networks",
    ],
  },
  "lightning-protection": {
    intro:
      "Lightning protection systems together with earthing and bonding requirements, designed and installed for compliant building electrical schemes.",
    scope: [
      "Lightning protection rod installation on building rooftops",
      "Down-conductor routing and bonding",
      "Earth-pit construction and testing (BS 7430 / IS 3043)",
      "Earth electrode periodic testing and reporting",
      "Bonding to extraneous metalwork",
      "Statutory documentation",
    ],
  },
  "standby-generation": {
    intro:
      "Standby generation and UPS systems for residential township, industrial and commercial premises that can't tolerate downtime.",
    scope: [
      "DG sets — supply, installation, foundation, exhaust",
      "Acoustic enclosures and CPCB-compliant exhaust",
      "Auto Mains Failure (AMF) panels with seamless transfer",
      "UPS supply, installation and battery banks",
      "Load-bank testing and commissioning",
      "AMC programmes including oil and filter changes",
    ],
  },
  "renewable-energy": {
    intro:
      "Renewable technology power requirements and the controls wiring associated with mechanical services systems.",
    scope: [
      "Rooftop solar PV — supply and installation",
      "Inverter sizing and DC cabling",
      "Net-metering with MSEDCL",
      "Earthing and lightning protection for PV arrays",
      "Controls wiring for mechanical services (BMS interfaces)",
      "Performance monitoring and AMC",
    ],
  },
  "apfc-power-quality": {
    intro:
      "APFC panels and the AMCs that keep them performing — for residential townships, industrial and commercial premises.",
    scope: [
      "APFC panel supply, installation and commissioning",
      "Capacitor bank sizing for target power factor",
      "Detuned reactors for harmonic-rich loads",
      "Power-quality measurement and reporting",
      "APFC AMC — capacitor health, contactor inspection, controller tuning",
      "Energy bill reduction audits",
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
