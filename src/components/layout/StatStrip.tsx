type Stat = {
  value: string;
  label: string;
  sublabel?: string;
};

type Props = {
  stats: Stat[];
};

/**
 * 4-up stat strip on a navy gradient with the blueprint pattern at low
 * opacity behind. Used on the homepage and the About page hero footer.
 */
export function StatStrip({ stats }: Props) {
  return (
    <section className="relative overflow-hidden gradient-navy text-cloud hairline-amber-top">
      {/* Backdrop pattern */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url(/assets/photos/bg_blueprint_pattern.png)", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="relative section-shell py-12 md:py-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {stats.map((s, i) => (
            <li key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-amber leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wider text-cloud">
                {s.label}
              </p>
              {s.sublabel && (
                <p className="mt-1 text-xs md:text-sm text-cloud/65">{s.sublabel}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
