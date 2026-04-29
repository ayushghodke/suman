import Link from "next/link";
import Image from "next/image";

type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  heading: string;
  body: string;
  primary: CTA;
  secondary?: CTA;
  /** Optional background SVG for full-bleed banners (e.g. 04_cta_tender_banner.svg) */
  backgroundImage?: string;
  variant?: "boxed" | "banner";
  todoHeading?: boolean;
  todoBody?: boolean;
};

export function CTASection({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
  backgroundImage,
  variant = "boxed",
  todoHeading,
  todoBody,
}: Props) {
  if (variant === "banner" && backgroundImage) {
    return (
      <section
        aria-label={eyebrow ?? "Call to action"}
        className="relative overflow-hidden text-cloud"
      >
        <Image
          src={backgroundImage}
          alt=""
          role="presentation"
          width={1600}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
          priority={false}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-sm uppercase tracking-widest font-semibold text-amber">
                {eyebrow}
              </p>
            )}
            <h2
              className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight"
              data-todo={todoHeading ? "" : undefined}
            >
              {heading}
            </h2>
            <p
              className="mt-4 text-base md:text-lg text-cloud/90 leading-relaxed"
              data-todo={todoBody ? "" : undefined}
            >
              {body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={primary.href}
                className="inline-flex items-center justify-center bg-amber text-navy font-semibold px-6 py-3 rounded-md hover:bg-amber/90 transition"
              >
                {primary.label}
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center justify-center border-2 border-cloud text-cloud font-semibold px-6 py-3 rounded-md hover:bg-cloud hover:text-navy transition"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24" aria-label={eyebrow ?? "Call to action"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-amber rounded-lg p-8 md:p-12 bg-white">
          {eyebrow && (
            <p className="text-sm uppercase tracking-widest font-semibold text-amber">
              {eyebrow}
            </p>
          )}
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold text-navy"
            data-todo={todoHeading ? "" : undefined}
          >
            {heading}
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-steel leading-relaxed max-w-prose"
            data-todo={todoBody ? "" : undefined}
          >
            {body}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center bg-amber text-navy font-semibold px-6 py-3 rounded-md hover:bg-amber/90 transition"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center border-2 border-navy text-navy font-semibold px-6 py-3 rounded-md hover:bg-navy hover:text-cloud transition"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
