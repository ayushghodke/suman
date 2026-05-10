import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { projects, getProjectBySlug } from "@/content/projects";
import { getProjectImage } from "@/lib/imageMap";
import { isTodo } from "@/lib/copy";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const image = getProjectImage(slug);
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · Case study`}
        heading={project.title}
        subheading={project.scopeSummary}
        image={image}
        imageAlt={`${project.title} — flat illustration`}
        primaryCta={{ label: "Discuss a similar project", href: "/contact" }}
        secondaryCta={{ label: "All projects", href: "/projects" }}
      />

      <CredentialsStrip />

      {/* Project meta + scope detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-5">
            <p className="text-xs uppercase tracking-widest font-bold text-amber">
              Project at a glance
            </p>
            <Meta icon={<Building2 className="w-4 h-4" aria-hidden />} label="Client">
              <span data-todo={isTodo(project.client) ? "" : undefined}>
                {project.client}
              </span>
            </Meta>
            <Meta icon={<Briefcase className="w-4 h-4" aria-hidden />} label="Sector">
              {project.category}
            </Meta>
            <Meta icon={<MapPin className="w-4 h-4" aria-hidden />} label="Location">
              <span className="text-steel">From the project title</span>
            </Meta>
          </div>
          <div className="lg:col-span-8">
            <SectionEyebrow
              eyebrow="Scope summary"
              heading="What we delivered."
              body={project.scopeSummary}
            />
            <p className="mt-6 text-sm md:text-base text-steel leading-relaxed">
              The project was delivered with full statutory liaison
              (MSEDCL/MSETCL where applicable), drawings approved before
              execution, and signed-off completion certificates handed over to
              the client. We are happy to share equipment lists, single-line
              diagrams and post-commissioning test reports with procurement
              officers and tender committees on request.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-blue font-semibold hover:text-amber transition group"
            >
              Discuss a similar requirement
              <ArrowRight
                className="w-4 h-4 transition group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24 bg-cloud border-t border-line">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionEyebrow
              eyebrow="More case studies"
              heading="Related work."
            />
            <Link
              href="/projects"
              className="btn-ghost inline-flex items-center gap-2 font-semibold shrink-0"
            >
              All projects
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="boxed"
        eyebrow="Procurement & tender desks"
        heading="Need a past performance certificate?"
        body="On request we share past performance certificates and equipment lists matched to your tender's prequalification format."
        primary={{ label: "Submit a tender enquiry", href: "/government-tenders" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}

function Meta({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center w-8 h-8 rounded-md bg-amber/15 text-amber shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest font-bold text-steel">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-navy">{children}</p>
      </div>
    </div>
  );
}
