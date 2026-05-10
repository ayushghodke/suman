import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects & Case Studies",
  description:
    "Selected electrical projects executed across Pune district — township indoor stations, outdoor DP structures, floriculture HT supplies, food-processing distribution.",
  path: "/projects",
});

const categories = ["All", "Real Estate", "Industrial", "Institutional", "Government", "Railway"] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        heading="Projects we've delivered across Pune district."
        subheading="From a 22/63 KVA DP structure for a spiritual trust at Pisoli, to 22×22 indoor receiving stations across XRBIA's Hinjwadi townships, to floriculture and food-processing sites across rural Pune."
        image="/assets/photos/hero_projects.png"
        imageAlt="Flat illustration of an indoor 22/630 KVA transformer station with cable trays overhead"
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "Browse services", href: "/services" }}
      />

      <CredentialsStrip />

      {/* Filters bar (visual only — full filter UX is out of scope for v1) */}
      <section className="bg-cloud border-b border-line py-6">
        <div className="section-shell flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-bold text-steel mr-3">
            Sectors:
          </span>
          {categories.map((c) => (
            <span
              key={c}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                c === "All"
                  ? "bg-navy text-cloud"
                  : "bg-white border border-line text-steel"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="section-shell">
          <SectionEyebrow
            eyebrow="Case studies"
            heading={`${projects.length} projects · selected highlights`}
            body="Tap any project for the scope summary. We're happy to share past performance certificates on request — much of our recent work is under township NDA."
            className="!mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="Procurement & tender desks"
        heading="Need a past performance certificate for a tender?"
        body="Our liaison desk turns around prequalification packages within one working day. Share your tender reference and we'll match credentials to the format."
        primary={{ label: "Submit a tender enquiry", href: "/government-tenders" }}
        secondary={{ label: "Quality & certifications", href: "/quality-certifications" }}
      />
    </>
  );
}
