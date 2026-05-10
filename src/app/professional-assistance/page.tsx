import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { ClipboardList } from "lucide-react";
import { professional } from "@/content/professional";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: professional.meta.title,
  description: professional.meta.description,
  path: "/professional-assistance",
});

export default function ProfessionalAssistancePage() {
  return (
    <>
      <PageHero
        eyebrow={professional.hero.eyebrow}
        heading={professional.hero.heading}
        subheading={professional.hero.subheading}
        image={professional.hero.image}
        imageAlt={professional.hero.imageAlt}
        primaryCta={professional.hero.primaryCta}
        secondaryCta={professional.hero.secondaryCta}
      />

      <CredentialsStrip />

      {/* Scope */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={professional.scope.eyebrow}
            heading={professional.scope.heading}
            body={professional.scope.body}
            className="!mb-12 !max-w-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professional.scope.items.map((it) => (
              <div
                key={it.title}
                className="p-6 md:p-7 rounded-xl bg-cloud border border-line card-lift"
              >
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-amber/15 text-amber">
                  <ClipboardList className="w-6 h-6" aria-hidden />
                </span>
                <p className="mt-5 text-lg font-bold text-navy">{it.title}</p>
                <p className="mt-2 text-sm text-steel leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 md:py-24 gradient-navy text-cloud hairline-amber-top">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={professional.workflow.eyebrow}
            heading={professional.workflow.heading}
            body={professional.workflow.body}
            tone="cloud"
            className="!mb-12"
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professional.workflow.steps.map((s) => (
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

      <CTASection
        variant="boxed"
        eyebrow="Get in touch"
        heading="Need a fixed-fee proposal?"
        body="Tell us the scope, deadline, and the body the deliverable needs to satisfy. We'll send a fixed-fee proposal within one working day."
        primary={{ label: "Talk to our liaison desk", href: "/contact" }}
        secondary={{ label: "Government tenders", href: "/government-tenders" }}
      />
    </>
  );
}
