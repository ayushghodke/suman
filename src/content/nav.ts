export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "AMC", href: "/amc" },
  { label: "Government Tenders", href: "/government-tenders" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Quality & Certifications", href: "/quality-certifications" },
      { label: "Clients", href: "/clients" },
      { label: "Careers", href: "/careers" },
    ] as NavItem[],
  },
  {
    heading: "Services",
    items: [
      { label: "Power Transmission & Distribution", href: "/services/power-transmission" },
      { label: "Building Electrification", href: "/services/building-electrification" },
      { label: "Railway Electrification", href: "/services/railway-electrification" },
      { label: "HT & LT Cable Laying", href: "/services/cable-laying" },
      { label: "Transformer Installation", href: "/services/transformer-installation" },
      { label: "All services", href: "/services" },
    ] as NavItem[],
  },
  {
    heading: "Engage",
    items: [
      { label: "Government Tenders", href: "/government-tenders" },
      { label: "AMC Programmes", href: "/amc" },
      { label: "Professional Assistance", href: "/professional-assistance" },
      { label: "Contact", href: "/contact" },
    ] as NavItem[],
  },
] as const;

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
