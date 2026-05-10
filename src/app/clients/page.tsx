import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { Building2 } from "lucide-react";
import { clients } from "@/content/clients";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: clients.meta.title,
  description: clients.meta.description,
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow={clients.hero.eyebrow}
        heading={clients.hero.heading}
        subheading={clients.hero.subheading}
        image={clients.hero.image}
        imageAlt={clients.hero.imageAlt}
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "View case studies", href: "/projects" }}
      />

      <CredentialsStrip />

      {/* Sectors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow="Sectors served"
            heading="Six recurring sectors."
            body="Each sector is a working relationship — drawings reviewed, statutory work submitted, AMCs running. We don't list logos we don't have permission to display."
            className="!mb-12 !max-w-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.sectors.map((s) => (
              <div
                key={s.name}
                className="p-6 md:p-7 rounded-xl bg-cloud border border-line card-lift"
              >
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-amber/15 text-amber">
                  <Building2 className="w-6 h-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {s.summary}
                </p>
                <p className="mt-4 pt-4 border-t border-line text-xs uppercase tracking-widest font-bold text-amber">
                  Example
                </p>
                <p className="mt-1 text-xs text-steel italic leading-relaxed">
                  {s.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="References on request"
        heading="Need a past performance certificate?"
        body="We are happy to share specific past references and performance certificates with procurement officers and tender committees on request."
        primary={{ label: "Request references", href: "/contact" }}
        secondary={{ label: "Government tenders", href: "/government-tenders" }}
      />
    </>
  );
}
