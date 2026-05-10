import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { SplitFeature } from "@/components/layout/SplitFeature";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { Check, ArrowRight } from "lucide-react";
import { tenders } from "@/content/tenders";
import { home } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: tenders.meta.title,
  description: tenders.meta.description,
  path: "/government-tenders",
});

export default function GovernmentTendersPage() {
  return (
    <>
      <PageHero
        eyebrow={tenders.hero.eyebrow}
        heading={tenders.hero.heading}
        subheading={tenders.hero.subheading}
        image={tenders.hero.image}
        imageAlt={tenders.hero.imageAlt}
        primaryCta={tenders.hero.primaryCta}
        secondaryCta={tenders.hero.secondaryCta}
      />

      <CredentialsStrip />

      {/* Bodies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={tenders.bodies.eyebrow}
            heading={tenders.bodies.heading}
            body={tenders.bodies.body}
            className="!mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tenders.bodies.items.map((b) => (
              <div
                key={b.name}
                className="p-5 rounded-xl bg-cloud border border-line card-lift"
              >
                <p className="text-xl font-extrabold text-navy">{b.name}</p>
                <p className="mt-2 text-xs text-steel leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prequalification */}
      <section className="py-16 md:py-24 bg-cloud border-y border-line">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={tenders.prequalification.eyebrow}
              heading={tenders.prequalification.heading}
              body={tenders.prequalification.body}
            />
            <Link
              href="/quality-certifications"
              className="btn-ghost mt-6 inline-flex items-center gap-2 font-semibold"
            >
              See our credentials
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {tenders.prequalification.items.map((it) => (
                <li
                  key={it}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-line"
                >
                  <Check
                    className="mt-0.5 w-5 h-5 text-amber shrink-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-sm text-navy font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Liaison desk feature */}
      <SplitFeature
        eyebrow="The liaison desk"
        heading="One day from your reference to a prequalification dossier."
        body="Procurement teams shouldn't have to chase contractors for documents. Send the tender reference, the prequalification format and the deadline — we package the matching credentials and revert in one working day."
        bullets={[
          "Dossier matched to the issuing authority's PQ format",
          "Past performance certificates from comparable scopes",
          "Banker's references and turnover statements when required",
          "Single point of contact through to submission",
        ]}
        image="/assets/photos/hero_tenders.png"
        imageAlt="Flat-lay of a tender desk with rolled drawings, compass and hard hat"
        imageSide="left"
        tone="white"
      />

      {/* Process */}
      <section className="py-16 md:py-24 gradient-navy text-cloud hairline-amber-top">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={tenders.process.eyebrow}
            heading={tenders.process.heading}
            body={tenders.process.body}
            tone="cloud"
            className="!mb-12"
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tenders.process.steps.map((s) => (
              <li
                key={s.n}
                className="p-6 rounded-xl bg-cloud/[0.06] border border-cloud/15"
              >
                <p className="font-mono text-amber text-xs font-bold tracking-widest">
                  STEP {s.n}
                </p>
                <p className="mt-2 text-lg font-bold text-cloud">{s.title}</p>
                <p className="mt-2 text-sm text-cloud/75 leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Banner CTA */}
      <CTASection
        variant="banner"
        backgroundImage="/assets/04_cta_tender_banner.svg"
        eyebrow={home.tenderCta.eyebrow}
        heading={home.tenderCta.heading}
        body={home.tenderCta.body}
        primary={home.tenderCta.primaryCta}
        secondary={home.tenderCta.secondaryCta}
      />
    </>
  );
}
