import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: contact.meta.title,
  description: contact.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        heading={contact.hero.heading}
        subheading={contact.hero.subheading}
        image={contact.hero.image}
        imageAlt={contact.hero.imageAlt}
      />

      {/* Channels */}
      <section className="py-12 md:py-16 bg-white border-b border-line">
        <div className="section-shell grid grid-cols-1 md:grid-cols-3 gap-6">
          {contact.channels.map((c) => (
            <div
              key={c.title}
              className="p-6 md:p-7 rounded-xl bg-cloud border border-line card-lift"
            >
              <p className="text-xs uppercase tracking-widest font-bold text-amber">
                {c.title}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-steel">
                {c.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <Link
                href={c.action.href}
                className="mt-5 inline-flex items-center gap-2 text-blue font-semibold text-sm hover:text-amber transition group"
              >
                {c.action.label}
                <ArrowRight
                  className="w-4 h-4 transition group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={contact.form.eyebrow}
              heading={contact.form.heading}
              body={contact.form.body}
            />
            <div className="mt-8 space-y-3 text-sm text-steel">
              <p className="font-semibold text-navy">Office hours</p>
              <p>{site.hours.weekdays}</p>
              <p>Sunday {site.hours.sunday}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-white border-t border-line">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionEyebrow
              eyebrow={contact.location.eyebrow}
              heading={contact.location.heading}
              body={contact.location.body}
            />
            <address className="mt-6 not-italic text-base text-navy leading-relaxed">
              {site.address.street},
              <br />
              {site.address.locality},
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              {site.address.country}
            </address>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-navy/10 shadow-card-hover">
              <Image
                src={contact.location.image}
                alt={contact.location.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
