import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { TrustBadge } from "@/components/cards/TrustBadge";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { ShieldCheck } from "lucide-react";
import { quality } from "@/content/quality";
import { badges } from "@/content/badges";
import { isTodo } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: quality.meta.title,
  description: quality.meta.description,
  path: "/quality-certifications",
});

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow={quality.hero.eyebrow}
        heading={quality.hero.heading}
        subheading={quality.hero.subheading}
        image={quality.hero.image}
        imageAlt={quality.hero.imageAlt}
      />

      <CredentialsStrip />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell max-w-4xl">
          <SectionEyebrow
            eyebrow={quality.intro.eyebrow}
            heading={quality.intro.heading}
            body={quality.intro.body}
          />
        </div>
      </section>

      {/* Badges */}
      <section className="py-12 bg-cloud border-y border-line">
        <div className="section-shell">
          <p className="text-xs uppercase tracking-widest font-bold text-amber text-center mb-8">
            Trust seals
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {badges.map((b) => (
              <TrustBadge key={b.file} badge={b} showLabel />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow="Documentation"
            heading="Certificates and licences."
            className="!mb-12"
          />
          <ul className="space-y-6">
            {quality.certifications.map((c) => (
              <li
                key={c.title}
                className="p-6 md:p-8 rounded-xl bg-cloud border border-line"
              >
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-lg bg-amber/15 text-amber shrink-0">
                    <ShieldCheck className="w-6 h-6" aria-hidden />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-steel">{c.authority}</p>
                    <p className="mt-3 text-sm md:text-base text-steel leading-relaxed">
                      {c.summary}
                    </p>
                    <dl className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      {"number" in c && c.number && (
                        <div>
                          <dt className="text-xs uppercase tracking-widest font-bold text-amber">
                            Reference number
                          </dt>
                          <dd
                            className="mt-0.5 text-navy font-mono"
                            data-todo={isTodo(c.number) ? "" : undefined}
                          >
                            {c.number}
                          </dd>
                        </div>
                      )}
                      {"validity" in c && c.validity && (
                        <div>
                          <dt className="text-xs uppercase tracking-widest font-bold text-amber">
                            Valid through
                          </dt>
                          <dd
                            className="mt-0.5 text-navy"
                            data-todo={isTodo(c.validity) ? "" : undefined}
                          >
                            {c.validity}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approved liaison partners */}
      <section className="py-16 md:py-24 bg-cloud border-t border-line">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={quality.partners.eyebrow}
            heading={quality.partners.heading}
            body={quality.partners.body}
            className="!mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {quality.partners.items.map((p) => (
              <div
                key={p.name}
                className="p-5 rounded-xl bg-white border border-line card-lift"
              >
                <p className="text-xl font-extrabold text-navy">{p.name}</p>
                <p className="mt-2 text-xs text-steel leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="Need credentials for a tender?"
        heading="Our liaison desk packages prequalification documents."
        body="Share your tender reference and we'll match credentials to the prequalification format and revert within one working day."
        primary={{ label: "Submit a tender enquiry", href: "/government-tenders" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
