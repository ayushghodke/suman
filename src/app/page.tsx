import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";

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

export default function HomePage() {
  const heroHeadlineIsTodo = isTodo(home.hero.heading);
  const heroSubIsTodo = isTodo(home.hero.subheading);
  const introHeadingIsTodo = isTodo(home.intro.heading);
  const introBodyIsTodo = isTodo(home.intro.body);
  const servicesBodyIsTodo = isTodo(home.services.body);
  const projectsHeadingIsTodo = isTodo(home.projects.heading);
  const projectsBodyIsTodo = isTodo(home.projects.body);

  return (
    <>
      {/* Hero */}
      <section className="bg-cloud" aria-label="Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-12 md:pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-amber">
              {home.hero.eyebrow}
            </p>
            <h1
              className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-navy"
              data-todo={heroHeadlineIsTodo ? "" : undefined}
            >
              {home.hero.heading}
            </h1>
            <p
              className="mt-5 text-base md:text-lg text-steel leading-relaxed max-w-prose"
              data-todo={heroSubIsTodo ? "" : undefined}
            >
              {home.hero.subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={home.hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-amber text-navy font-semibold px-6 py-3 rounded-md hover:bg-amber/90 transition"
              >
                {home.hero.primaryCta.label}
              </Link>
              <Link
                href={home.hero.secondaryCta.href}
                className="inline-flex items-center justify-center border-2 border-navy text-navy font-semibold px-6 py-3 rounded-md hover:bg-navy hover:text-cloud transition"
              >
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src="/assets/01_hero_homepage.svg"
              alt={home.hero.imageAlt}
              width={1600}
              height={900}
              priority
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <CredentialsStrip />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-prose">
          <p className="text-sm uppercase tracking-widest font-semibold text-blue">
            {home.intro.eyebrow}
          </p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold text-navy"
            data-todo={introHeadingIsTodo ? "" : undefined}
          >
            {home.intro.heading}
          </h2>
          <p
            className="mt-5 text-base md:text-lg text-steel leading-relaxed"
            data-todo={introBodyIsTodo ? "" : undefined}
          >
            {home.intro.body}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-white border-y border-steel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-semibold text-blue">
              {home.services.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              {home.services.heading}
            </h2>
            <p
              className="mt-4 text-base md:text-lg text-steel leading-relaxed"
              data-todo={servicesBodyIsTodo ? "" : undefined}
            >
              {home.services.body}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={home.services.cta.href}
              className="inline-flex items-center gap-2 text-blue font-semibold underline-offset-4 hover:underline"
            >
              {home.services.cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <ProcessDiagram />

      {/* Projects teaser */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest font-semibold text-blue">
                {home.projects.eyebrow}
              </p>
              <h2
                className="mt-2 text-3xl md:text-4xl font-bold text-navy"
                data-todo={projectsHeadingIsTodo ? "" : undefined}
              >
                {home.projects.heading}
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-steel leading-relaxed"
                data-todo={projectsBodyIsTodo ? "" : undefined}
              >
                {home.projects.body}
              </p>
            </div>
            <Link
              href={home.projects.cta.href}
              className="inline-flex items-center gap-2 text-blue font-semibold underline-offset-4 hover:underline shrink-0"
            >
              {home.projects.cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
