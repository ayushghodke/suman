import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StatStrip } from "@/components/layout/StatStrip";
import { SplitFeature } from "@/components/layout/SplitFeature";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";

import { home } from "@/content/home";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { isTodo } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: home.meta.title,
  description: home.meta.description,
  path: "/",
});

const homepageStats = [
  { value: "15+", label: "Years", sublabel: "Of structured growth" },
  { value: "200+", label: "Projects", sublabel: "Townships, industry, institutional" },
  { value: "22 KV", label: "HT Capability", sublabel: "Up to 22/630 KVA stations" },
  { value: "10", label: "Service Pillars", sublabel: "Across electrical engineering" },
];

export default function HomePage() {
  const heroHeadlineIsTodo = isTodo(home.hero.heading);
  const heroSubIsTodo = isTodo(home.hero.subheading);

  return (
    <>
      {/* Hero — banner-style overlay matching the rest of the site */}
      <section
        className="relative overflow-hidden text-cloud hairline-amber-top"
        aria-label="Introduction"
      >
        <Image
          src="/assets/01_hero_homepage.svg"
          alt={home.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        {/* Dark gradient overlay — dark on the left for headline legibility,
            fades to clear on the right so the brand illustration breathes. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,42,74,0.94) 0%, rgba(11,42,74,0.82) 38%, rgba(11,42,74,0.45) 70%, rgba(11,42,74,0.10) 100%)",
          }}
          aria-hidden
        />

        <div className="relative section-shell pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow">{home.hero.eyebrow}</p>
            <h1
              className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05]"
              data-todo={heroHeadlineIsTodo ? "" : undefined}
            >
              {home.hero.heading}
            </h1>
            <p
              className="mt-6 text-base md:text-lg text-cloud/85 leading-relaxed max-w-prose"
              data-todo={heroSubIsTodo ? "" : undefined}
            >
              {home.hero.subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={home.hero.primaryCta.href} className="btn btn-primary">
                {home.hero.primaryCta.label}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href={home.hero.secondaryCta.href}
                className="btn btn-secondary-light"
              >
                {home.hero.secondaryCta.label}
              </Link>
            </div>

            {/* Trust micro-row */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest font-semibold text-cloud/75">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                Govt Licensed
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                MSEDCL · MSETCL Liaison
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <StatStrip stats={homepageStats} />

      {/* Credentials */}
      <CredentialsStrip />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={home.intro.eyebrow}
              heading={home.intro.heading}
            />
          </div>
          <div className="lg:col-span-7">
            <p
              className="text-base md:text-lg text-steel leading-relaxed"
              data-todo={isTodo(home.intro.body) ? "" : undefined}
            >
              {home.intro.body}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-blue font-semibold hover:text-amber transition group"
            >
              Read our story
              <ArrowRight
                className="w-4 h-4 transition group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-cloud border-y border-line">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionEyebrow
              eyebrow={home.services.eyebrow}
              heading={home.services.heading}
              body={home.services.body}
            />
            <Link
              href={home.services.cta.href}
              className="btn-ghost inline-flex items-center gap-2 font-semibold shrink-0"
            >
              {home.services.cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process diagram */}
      <ProcessDiagram />

      {/* Why us — split feature */}
      <SplitFeature
        eyebrow="Why work with us"
        heading="A licensed contractor who carries every job from drawing to AMC."
        body="Single-source accountability across power transmission, distribution, building electrification, transformer stations, AMC and statutory liaison — backed by 15 years of structured operations from Pune."
        bullets={[
          "Government Electrical Licensed Contractor — Maharashtra",
          "Approved liaison desk for MSEDCL and MSETCL submissions",
          "ISO 9001:2015 certified quality systems",
          "MSME / Udyam registered, GST compliant",
          "AMCs that keep installations performing post-handover",
        ]}
        image="/assets/photos/services_why_us_illustration.png"
        imageAlt="Four trust pillars: licensed plaque, MSEDCL liaison handshake, on-time clock, signed AMC"
        imageSide="right"
        cta={{ label: "Quality & certifications", href: "/quality-certifications" }}
        tone="white"
      />

      {/* Projects teaser */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionEyebrow
              eyebrow={home.projects.eyebrow}
              heading={home.projects.heading}
              body={home.projects.body}
            />
            <Link
              href={home.projects.cta.href}
              className="btn-ghost inline-flex items-center gap-2 font-semibold shrink-0"
            >
              {home.projects.cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tender CTA banner */}
      <CTASection
        variant="banner"
        backgroundImage="/assets/04_cta_tender_banner.svg"
        eyebrow={home.tenderCta.eyebrow}
        heading={home.tenderCta.heading}
        body={home.tenderCta.body}
        primary={home.tenderCta.primaryCta}
        secondary={home.tenderCta.secondaryCta}
        todoHeading={isTodo(home.tenderCta.heading)}
        todoBody={isTodo(home.tenderCta.body)}
      />
    </>
  );
}
