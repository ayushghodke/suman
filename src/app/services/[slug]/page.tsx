import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { services, getServiceBySlug } from "@/content/services";
import { getServiceDetail } from "@/content/serviceDetails";
import { getServiceImage } from "@/lib/imageMap";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const detail = getServiceDetail(slug);
  const image = getServiceImage(slug);
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        heading={service.title}
        subheading={detail?.intro ?? service.summary}
        image={image}
        imageAlt={`${service.title} — flat illustration`}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
      />

      <CredentialsStrip />

      {/* Scope */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="grid place-items-center w-16 h-16 rounded-lg bg-amber/15 mb-6">
              <Image
                src={`/assets/${service.iconFile}`}
                alt=""
                role="presentation"
                width={120}
                height={120}
                className="w-12 h-12"
              />
            </div>
            <SectionEyebrow
              eyebrow="Scope of work"
              heading="What's included."
              body={
                detail?.intro ??
                "We deliver this service end-to-end — design, statutory liaison, execution, commissioning and AMC."
              }
            />
            {detail?.highlight && (
              <div className="mt-6 p-4 rounded-md bg-cloud border-l-4 border-amber">
                <p className="text-sm font-semibold text-navy">
                  {detail.highlight}
                </p>
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {(detail?.scope ?? [
                "Detailed scope to be added by the client.",
              ]).map((line) => (
                <li
                  key={line}
                  className="flex gap-3 p-4 bg-cloud rounded-lg border border-line"
                >
                  <Check
                    className="mt-0.5 w-5 h-5 text-amber shrink-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-sm md:text-base text-navy">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-24 bg-cloud border-t border-line">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionEyebrow
              eyebrow="Related services"
              heading="More from the practice."
            />
            <Link
              href="/services"
              className="btn-ghost inline-flex items-center gap-2 font-semibold shrink-0"
            >
              All ten services
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="Talk to us"
        heading={`Need a quote for ${service.shortLabel.toLowerCase()}?`}
        body="Share your project brief, drawings or tender reference. Our team responds within one working day."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "View our projects", href: "/projects" }}
      />
    </>
  );
}
