import Image from "next/image";
import { badges } from "@/content/badges";

/**
 * Full-bleed credentials strip — placed below the hero on every P0 page.
 * Renders the six individual badge SVGs as a responsive grid so labels
 * stay readable at every viewport (the old composite SVG had baked-in
 * text that became illegible on mobile).
 */
export function CredentialsStrip() {
  return (
    <section
      aria-label="Credentials"
      className="bg-white border-y border-line"
    >
      <div className="section-shell py-8 md:py-10">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 md:mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-amber">
            Government Approved &amp; Compliance Ready
          </p>
          <p className="text-xs text-steel hidden md:block">
            Six credentials. One contractor.
          </p>
        </div>

        {/* Badge grid */}
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-6 md:gap-x-4">
          {badges.map((b) => (
            <li
              key={b.file}
              className="flex flex-col items-center text-center group"
            >
              <Image
                src={`/assets/${b.file}`}
                alt={b.label}
                width={140}
                height={140}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition group-hover:scale-105"
              />
              <p className="mt-2 text-[11px] sm:text-xs font-semibold text-navy leading-tight max-w-[8rem]">
                {b.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
