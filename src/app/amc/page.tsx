import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { SplitFeature } from "@/components/layout/SplitFeature";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { Check } from "lucide-react";
import { amc } from "@/content/amc";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: amc.meta.title,
  description: amc.meta.description,
  path: "/amc",
});

export default function AmcPage() {
  return (
    <>
      <PageHero
        eyebrow={amc.hero.eyebrow}
        heading={amc.hero.heading}
        subheading={amc.hero.subheading}
        image={amc.hero.image}
        imageAlt={amc.hero.imageAlt}
        primaryCta={amc.hero.primaryCta}
        secondaryCta={amc.hero.secondaryCta}
      />

      <CredentialsStrip />

      {/* Scope */}
      <section id="scope" className="py-16 md:py-24 bg-white">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={amc.scope.eyebrow}
            heading={amc.scope.heading}
            body={amc.scope.body}
            className="!mb-12 !max-w-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amc.scope.items.map((it) => (
              <div
                key={it.title}
                className="p-6 rounded-xl bg-cloud border border-line card-lift"
              >
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-amber/15 text-amber">
                  <Check className="w-5 h-5" strokeWidth={2.5} aria-hidden />
                </span>
                <p className="mt-4 text-lg font-bold text-navy">{it.title}</p>
                <p className="mt-2 text-sm text-steel leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 md:py-24 gradient-navy text-cloud hairline-amber-top">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={amc.tiers.eyebrow}
            heading={amc.tiers.heading}
            body={amc.tiers.body}
            tone="cloud"
            className="!mb-10"
          />
          <div className="mb-12 max-w-5xl rounded-xl overflow-hidden ring-1 ring-cloud/10">
            <Image
              src={amc.tiers.image}
              alt={amc.tiers.imageAlt}
              width={2400}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amc.tiers.items.map((t, i) => (
              <div
                key={t.name}
                className={`p-7 rounded-xl border ${
                  i === 1
                    ? "bg-amber text-navy border-amber shadow-amber"
                    : "bg-cloud/[0.06] border-cloud/15"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-widest font-bold ${
                    i === 1 ? "text-navy" : "text-amber"
                  }`}
                >
                  Tier {i + 1}
                </p>
                <p
                  className={`mt-2 text-2xl font-extrabold ${
                    i === 1 ? "text-navy" : "text-cloud"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    i === 1 ? "text-navy/80" : "text-cloud/70"
                  }`}
                >
                  {t.target}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex gap-2 text-sm ${
                        i === 1 ? "text-navy" : "text-cloud/85"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 w-4 h-4 shrink-0 ${
                          i === 1 ? "text-navy" : "text-amber"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response */}
      <SplitFeature
        eyebrow={amc.response.eyebrow}
        heading={amc.response.heading}
        body={amc.response.body}
        image={amc.response.image}
        imageAlt={amc.response.imageAlt}
        imageSide="right"
        tone="white"
      />

      <CTASection
        variant="boxed"
        eyebrow="Get an AMC scope"
        heading="Tell us about your installation."
        body="Share the type of installation, equipment list, and existing AMC arrangement (if any). Our team will revert with a scoped programme and indicative pricing within one working day."
        primary={{ label: "Request an AMC quote", href: "/contact" }}
        secondary={{ label: "Talk to our office", href: "tel:+918237295778" }}
      />
    </>
  );
}
