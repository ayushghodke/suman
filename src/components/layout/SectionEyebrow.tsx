import { isTodo } from "@/lib/copy";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  tone?: "navy" | "cloud";
  level?: "h2" | "h3";
  className?: string;
};

/**
 * Small reusable eyebrow + heading + body lockup. Used at the top of
 * almost every section across the site so headings stay consistent.
 */
export function SectionEyebrow({
  eyebrow,
  heading,
  body,
  align = "left",
  tone = "navy",
  level = "h2",
  className = "",
}: Props) {
  const Heading = level;
  const headingTodo = isTodo(heading);
  const bodyTodo = body ? isTodo(body) : false;

  const headingColor = tone === "navy" ? "text-navy" : "text-cloud";
  const bodyColor = tone === "navy" ? "text-steel" : "text-cloud/85";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={`mt-3 text-3xl md:text-4xl font-extrabold tracking-tight ${headingColor}`}
        data-todo={headingTodo ? "" : undefined}
      >
        {heading}
      </Heading>
      {body && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${bodyColor}`}
          data-todo={bodyTodo ? "" : undefined}
        >
          {body}
        </p>
      )}
    </div>
  );
}
