import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { SplitFeature } from "@/components/layout/SplitFeature";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Power Transmission, Building, Railway, AMC",
  description:
    "Ten service pillars across power transmission and distribution, building and railway electrification, transformer stations, cable laying, AMC and renewable energy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        heading="Ten service pillars across electrical engineering."
        subheading="From HT/LT distribution and transformer stations to building, railway and renewable installations — and the AMCs that keep them running afterwards. Single-source accountability, statutory liaison included."
        image="/assets/photos/hero_services.png"
        imageAlt="Flat illustration showing four electrical service elements: transformer, pylon, building with lit windows, street lights"
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "View our projects", href: "/projects" }}
      />

      <CredentialsStrip />

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow="What we do"
            heading="Browse the full set."
            body="Each service has a dedicated detail page with scope, capability bounds and notable past projects."
            align="center"
            className="!mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us split */}
      <SplitFeature
        eyebrow="Why work with us"
        heading="Licensed. Audited. Accountable."
        body="Four credentials we walk into every prequalification meeting with — and the reason procurement teams keep calling us back."
        bullets={[
          "Government Electrical Licensed Contractor — Maharashtra",
          "Approved liaison desk for MSEDCL and MSETCL submissions",
          "ISO 9001:2015 quality systems, audit-ready records",
          "On-time delivery and signed completion certificates",
        ]}
        image="/assets/photos/services_why_us_illustration.png"
        imageAlt="Four-icon trust grid"
        imageSide="left"
        cta={{ label: "Quality & certifications", href: "/quality-certifications" }}
        tone="white"
      />

      <CTASection
        variant="boxed"
        eyebrow="Need a custom scope?"
        heading="Most projects don't fit a single service."
        body="If you're scoping a township, an industrial estate, an institutional building or a tender response that spans several pillars — talk to us. We'll quote the whole envelope."
        primary={{ label: "Request a Site Visit", href: "/contact" }}
        secondary={{ label: "Government tenders", href: "/government-tenders" }}
      />
    </>
  );
}
