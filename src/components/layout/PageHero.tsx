import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isTodo } from "@/lib/copy";

type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  /** Background image — required for "banner" variant, ignored for "centered". */
  image?: string;
  imageAlt?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  /**
   * - "banner" (default): full-bleed background image with dark navy gradient
   *   overlay; copy sits in the left 60% over the overlay.
   * - "centered": stacked, no image (used on text-only pages like /privacy).
   */
  variant?: "banner" | "centered";
};

export function PageHero({
  eyebrow,
  heading,
  subheading,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  variant = "banner",
}: Props) {
  const headingTodo = isTodo(heading);
  const subTodo = subheading ? isTodo(subheading) : false;

  // Centered variant — text-only hero, used for legal pages.
  if (variant === "centered") {
    return (
      <section className="gradient-cloud-amber border-b border-line">
        <div className="section-shell pt-14 md:pt-20 pb-12 md:pb-16 text-center">
          {eyebrow && (
            <p className="eyebrow eyebrow-plain justify-center">{eyebrow}</p>
          )}
          <h1
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-navy max-w-4xl mx-auto"
            data-todo={headingTodo ? "" : undefined}
          >
            {heading}
          </h1>
          {subheading && (
            <p
              className="mt-5 text-base md:text-lg text-steel leading-relaxed max-w-2xl mx-auto"
              data-todo={subTodo ? "" : undefined}
            >
              {subheading}
            </p>
          )}
        </div>
      </section>
    );
  }

  // Banner variant — full-bleed background image with overlay.
  return (
    <section
      className="relative overflow-hidden text-cloud hairline-amber-top"
      aria-label={eyebrow ?? heading}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
      )}
      {/* Dark gradient overlay — keeps text legible while letting the right
          side of the image breathe through. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,42,74,0.94) 0%, rgba(11,42,74,0.82) 38%, rgba(11,42,74,0.45) 70%, rgba(11,42,74,0.10) 100%)",
        }}
        aria-hidden
      />
      {/* Fallback background for image-less banner variants (rare) */}
      {!image && (
        <div className="absolute inset-0 gradient-navy" aria-hidden />
      )}

      <div className="relative section-shell pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1
            className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05]"
            data-todo={headingTodo ? "" : undefined}
          >
            {heading}
          </h1>
          {subheading && (
            <p
              className="mt-6 text-base md:text-lg text-cloud/85 leading-relaxed max-w-prose"
              data-todo={subTodo ? "" : undefined}
            >
              {subheading}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn btn-primary">
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn btn-secondary-light"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
