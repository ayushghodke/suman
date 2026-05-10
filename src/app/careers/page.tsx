import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { ArrowRight, Mail } from "lucide-react";
import { careers } from "@/content/careers";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: careers.meta.title,
  description: careers.meta.description,
  path: "/careers",
});

export default function CareersPage() {
  const hasOpenings = careers.openings.items.length > 0;

  return (
    <>
      <PageHero
        eyebrow={careers.hero.eyebrow}
        heading={careers.hero.heading}
        subheading={careers.hero.subheading}
        image={careers.hero.image}
        imageAlt={careers.hero.imageAlt}
        primaryCta={{ label: "Send your CV", href: `mailto:${careers.apply.email}` }}
        secondaryCta={{ label: "About the firm", href: "/about" }}
      />

      <CredentialsStrip />

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={careers.values.eyebrow}
              heading={careers.values.heading}
              body={careers.values.body}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-6">
              {careers.values.items.map((v) => (
                <li
                  key={v.title}
                  className="p-6 rounded-xl bg-cloud border border-line card-lift"
                >
                  <p className="text-amber font-mono text-xs font-bold tracking-widest">
                    ◆
                  </p>
                  <p className="mt-3 text-lg font-bold text-navy">{v.title}</p>
                  <p className="mt-2 text-sm text-steel leading-relaxed">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 md:py-24 bg-cloud border-y border-line">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={careers.openings.eyebrow}
            heading={careers.openings.heading}
            body={careers.openings.body}
            className="!mb-12 !max-w-3xl"
          />

          {hasOpenings ? (
            <ul className="space-y-4">
              {/* Will render real openings when present */}
            </ul>
          ) : (
            <div className="p-8 md:p-10 rounded-xl bg-white border-2 border-dashed border-line text-center">
              <p className="text-xs uppercase tracking-widest font-bold text-amber">
                Open invitation
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-navy">
                {careers.openings.fallback.title}
              </h3>
              <p className="mt-3 text-base text-steel max-w-xl mx-auto">
                {careers.openings.fallback.body}
              </p>
              <Link
                href={`mailto:${careers.apply.email}`}
                className="btn btn-primary mt-6"
              >
                Send your CV
                <Mail className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
            {careers.apply.heading}
          </h2>
          <p className="mt-4 text-base text-steel leading-relaxed">
            {careers.apply.body}
          </p>
          <Link
            href={`mailto:${careers.apply.email}`}
            className="mt-6 inline-flex items-center gap-2 text-blue font-semibold hover:text-amber transition group"
          >
            {careers.apply.email}
            <ArrowRight
              className="w-4 h-4 transition group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </section>
    </>
  );
}
