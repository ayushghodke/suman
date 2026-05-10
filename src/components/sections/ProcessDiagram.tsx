import Image from "next/image";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";

const steps = [
  {
    n: "01",
    title: "Survey",
    body: "Site walk, single-line schematic, load study.",
  },
  {
    n: "02",
    title: "Design & Liaison",
    body: "Drawings, MSEDCL/MSETCL approvals, BOQ.",
  },
  {
    n: "03",
    title: "Execution",
    body: "Cabling, transformer, panel, testing & commissioning.",
  },
  {
    n: "04",
    title: "Charging & AMC",
    body: "Charging, handover, ongoing maintenance contract.",
  },
] as const;

export function ProcessDiagram() {
  return (
    <section className="relative overflow-hidden gradient-navy text-cloud py-20 md:py-28 hairline-amber-top">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url(/assets/photos/bg_blueprint_pattern.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative section-shell">
        <SectionEyebrow
          eyebrow="How we work"
          heading="Survey to AMC, end to end."
          body="A single accountable team from the first site walk to ongoing maintenance — no handoffs, no finger-pointing."
          tone="cloud"
        />

        {/* Desktop SVG */}
        <div className="mt-12 hidden md:block">
          <Image
            src="/assets/03_process_diagram.svg"
            alt="Four-step process: Survey, Design and Liaison, Execution, Charging and AMC"
            width={1600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Step cards (always visible — they reinforce the SVG) */}
        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative p-6 rounded-xl bg-cloud/[0.06] border border-cloud/15 backdrop-blur-sm"
            >
              <p className="font-mono text-amber text-xs font-bold tracking-widest">
                STEP {s.n}
              </p>
              <p className="mt-2 text-lg font-bold text-cloud">{s.title}</p>
              <p className="mt-2 text-sm text-cloud/75 leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
