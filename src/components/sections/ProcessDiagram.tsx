import Image from "next/image";

const steps = [
  { n: "01", title: "Survey", body: "Site walk, single-line schematic, load study." },
  { n: "02", title: "Design & Liaison", body: "Drawings, MSEDCL/MSETCL approvals, BOQ." },
  { n: "03", title: "Execution", body: "Cabling, transformer, panel, testing & commissioning." },
  { n: "04", title: "Charging & AMC", body: "Charging, handover, ongoing maintenance contract." },
] as const;

export function ProcessDiagram() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest font-semibold text-blue">How we work</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
          Survey to AMC, end to end
        </h2>

        <div className="mt-8 hidden md:block">
          <Image
            src="/assets/03_process_diagram.svg"
            alt="Four-step process: Survey, Design and Liaison, Execution, Charging and AMC"
            width={1600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Mobile fallback — stacked steps */}
        <ol className="mt-8 md:hidden space-y-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4 p-5 bg-white rounded-lg shadow-sm">
              <span className="font-mono text-amber text-sm font-bold">{s.n}</span>
              <div>
                <p className="text-base font-semibold text-navy">{s.title}</p>
                <p className="text-sm text-steel mt-1">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
