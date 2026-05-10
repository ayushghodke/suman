import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isTodo } from "@/lib/copy";

type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  heading: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  cta?: CTA;
  tone?: "cloud" | "navy" | "white";
  className?: string;
};

/**
 * 50/50 image-and-copy section. Reused throughout marketing pages
 * to break up long-form content with imagery.
 */
export function SplitFeature({
  eyebrow,
  heading,
  body,
  bullets,
  image,
  imageAlt,
  imageSide = "right",
  cta,
  tone = "cloud",
  className = "",
}: Props) {
  const headingTodo = isTodo(heading);
  const bodyTodo = isTodo(body);

  const toneClasses =
    tone === "navy"
      ? "gradient-navy text-cloud"
      : tone === "white"
        ? "bg-white"
        : "bg-cloud";
  const headingColor = tone === "navy" ? "text-cloud" : "text-navy";
  const bodyColor = tone === "navy" ? "text-cloud/80" : "text-steel";
  const bulletDot = tone === "navy" ? "bg-amber" : "bg-amber";

  const orderImage = imageSide === "left" ? "lg:order-first" : "";
  const orderCopy = imageSide === "left" ? "lg:order-last" : "";

  return (
    <section className={`py-16 md:py-24 ${toneClasses} ${className}`}>
      <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className={`${orderImage} relative aspect-[4/3] rounded-xl overflow-hidden shadow-card-hover ring-1 ring-navy/10`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div className={orderCopy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2
            className={`mt-3 text-3xl md:text-4xl font-extrabold tracking-tight ${headingColor}`}
            data-todo={headingTodo ? "" : undefined}
          >
            {heading}
          </h2>
          <p
            className={`mt-5 text-base md:text-lg leading-relaxed ${bodyColor}`}
            data-todo={bodyTodo ? "" : undefined}
          >
            {body}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className={`flex gap-3 text-sm md:text-base ${bodyColor}`}>
                  <span
                    className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${bulletDot}`}
                    aria-hidden
                  />
                  <span data-todo={isTodo(b) ? "" : undefined}>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <Link
              href={cta.href}
              className="btn-ghost mt-8 inline-flex items-center gap-2 font-semibold"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
