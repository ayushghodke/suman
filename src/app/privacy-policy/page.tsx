import { PageHero } from "@/components/layout/PageHero";
import { AlertTriangle } from "lucide-react";
import { privacyPolicy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: privacyPolicy.meta.title,
  description: privacyPolicy.meta.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        variant="centered"
        eyebrow="Legal"
        heading="Privacy Policy"
        subheading={`Last updated: ${privacyPolicy.lastUpdated}`}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-shell max-w-3xl">
          <div className="mb-10 p-4 rounded-md bg-amber/10 border border-amber/40 flex gap-3">
            <AlertTriangle
              className="w-5 h-5 text-amber-deep shrink-0 mt-0.5"
              aria-hidden
            />
            <p className="text-sm text-amber-deep leading-relaxed">
              <strong>Review notice:</strong> {privacyPolicy.reviewNotice}
            </p>
          </div>

          <div className="prose-body space-y-8">
            {privacyPolicy.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                  {s.heading}
                </h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
