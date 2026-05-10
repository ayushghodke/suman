import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { SplitFeature } from "@/components/layout/SplitFeature";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { about } from "@/content/about";
import { isTodo } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: about.meta.title,
  description: about.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        heading={about.hero.heading}
        subheading={about.hero.subheading}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
        primaryCta={about.hero.primaryCta}
        secondaryCta={about.hero.secondaryCta}
      />

      <CredentialsStrip />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={about.intro.eyebrow}
              heading={about.intro.heading}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base md:text-lg text-steel leading-relaxed">
              {about.intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-cloud border-y border-line">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative aspect-square max-w-md rounded-xl overflow-hidden ring-1 ring-navy/10 shadow-card-hover">
              <Image
                src={about.founder.image}
                alt={about.founder.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionEyebrow
              eyebrow={about.founder.eyebrow}
              heading={about.founder.heading}
              body={about.founder.body}
            />
            {/* Render the signature block only once real founder name/title
                are supplied in src/content/about.ts. While both are still
                `todo(...)` placeholders, the block is hidden so the page
                doesn't show internal dev markers to visitors. */}
            {!isTodo(about.founder.name) && !isTodo(about.founder.title) && (
              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-lg font-bold text-navy">
                  {about.founder.name}
                </p>
                <p className="text-sm text-steel">{about.founder.title}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission */}
      <SplitFeature
        eyebrow={about.mission.eyebrow}
        heading={about.mission.heading}
        body={about.mission.body}
        image={about.mission.image}
        imageAlt={about.mission.imageAlt}
        imageSide="right"
        tone="white"
      />

      {/* Values */}
      <section className="py-16 md:py-24 gradient-navy text-cloud hairline-amber-top">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={about.values.eyebrow}
              heading={about.values.heading}
              body={about.values.body}
              tone="cloud"
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-6">
              {about.values.items.map((v) => (
                <li
                  key={v.title}
                  className="p-6 rounded-xl bg-cloud/[0.06] border border-cloud/15"
                >
                  <p className="text-amber font-mono text-xs font-bold tracking-widest">
                    ◆
                  </p>
                  <p className="mt-3 text-lg font-bold text-cloud">{v.title}</p>
                  <p className="mt-2 text-sm text-cloud/75 leading-relaxed">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow={about.timeline.eyebrow}
            heading={about.timeline.heading}
            body={about.timeline.body}
            align="center"
            className="!max-w-2xl"
          />
          <div className="mt-12 max-w-5xl mx-auto rounded-xl overflow-hidden ring-1 ring-navy/10 shadow-card">
            <Image
              src={about.timeline.image}
              alt={about.timeline.imageAlt}
              width={2400}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="Work with us"
        heading="Need a contractor who carries the licence on the wall?"
        body="Whether it's a township station, a tender response or an AMC for an existing installation — get in touch and our team will get back to you within one working day."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "View our projects", href: "/projects" }}
      />
    </>
  );
}
