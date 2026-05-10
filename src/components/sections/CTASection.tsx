import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  heading: string;
  body: string;
  primary: CTA;
  secondary?: CTA;
  /** Optional background image for full-bleed banners (e.g. 04_cta_tender_banner.svg) */
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
        className="relative overflow-hidden text-cloud hairline-amber-top"
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
        {/* Stronger left-side gradient for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,42,74,0.92) 0%, rgba(11,42,74,0.78) 45%, rgba(11,42,74,0.25) 80%, rgba(11,42,74,0) 100%)",
          }}
          aria-hidden
        />
        <div className="relative section-shell py-20 md:py-28">
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2
              className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]"
              data-todo={todoHeading ? "" : undefined}
            >
              {heading}
            </h2>
            <p
              className="mt-5 text-base md:text-lg text-cloud/85 leading-relaxed max-w-prose"
              data-todo={todoBody ? "" : undefined}
            >
              {body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={primary.href} className="btn btn-primary">
                {primary.label}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="btn btn-secondary-light"
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
      <div className="section-shell">
        <div className="relative rounded-2xl p-8 md:p-12 bg-white border border-line shadow-card overflow-hidden">
          {/* Decorative amber corner */}
          <span
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber/10 pointer-events-none"
            aria-hidden
          />
          <div className="relative">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2
              className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-navy"
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
              <Link href={primary.href} className="btn btn-primary">
                {primary.label}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn btn-secondary">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
