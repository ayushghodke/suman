export const contact = {
  meta: {
    title: "Contact — Suman Enterprises Pune",
    description:
      "Get in touch with Suman Enterprises for a quote, tender enquiry or AMC consultation. Pune, Maharashtra. Mon–Sat, 09:30–18:30 IST.",
  },

  hero: {
    eyebrow: "Get in touch",
    heading: "Tell us about the project.",
    subheading:
      "Quotes, tender enquiries, AMC consultations, or a quick technical question — pick the channel that suits you and our team will respond within one working day.",
    image: "/assets/photos/hero_contact.png",
    imageAlt:
      "Pune skyline silhouette at dusk with overhead distribution wires and a single amber sun-glow on the horizon",
  },

  channels: [
    {
      title: "Call our office",
      lines: ["Mon–Sat, 09:30–18:30 IST"],
      action: { label: "+91 82372 95778", href: "tel:+918237295778" },
    },
    {
      title: "WhatsApp the desk",
      lines: ["Fastest for site photos & drawings"],
      action: { label: "Open WhatsApp", href: "https://wa.me/918237295778?text=Hi%20Suman%20Enterprises" },
    },
    {
      title: "Email the office",
      lines: ["Replies within one working day"],
      action: { label: "sumanenterprisespune@yahoo.com", href: "mailto:sumanenterprisespune@yahoo.com" },
    },
  ],

  form: {
    eyebrow: "Or use the form",
    heading: "Send us a brief.",
    body: "We'll reply within one working day. For tender enquiries please include the tender reference number in the message.",
    successHeading: "Thanks — we've received your enquiry.",
    successBody:
      "A member of our team will be in touch within one working day. For urgent matters, the office line above is the fastest channel.",
    subjects: [
      "Get a quote",
      "Tender enquiry",
      "AMC consultation",
      "Site visit request",
      "Other",
    ],
  },

  location: {
    eyebrow: "Where we're based",
    heading: "Adarsh Nagar, Dhankawadi, Pune.",
    body: "Our office and stores are in Dhankawadi. We service projects across Pune district and on-call across Maharashtra for AMC, tender response, and HT/LT execution work.",
    image: "/assets/photos/contact_location_vignette.png",
    imageAlt: "Stylised amber map-pin marking the Pune office location",
  },
} as const;
