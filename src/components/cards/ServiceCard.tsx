import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { isTodo } from "@/lib/copy";

export function ServiceCard({ service }: { service: Service }) {
  const summaryIsTodo = isTodo(service.summary);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative card-lift flex flex-col bg-white rounded-xl p-6 md:p-7 border border-line shadow-card overflow-hidden"
    >
      {/* Top accent strip */}
      <span
        className="absolute top-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
        aria-hidden
      />

      <div className="grid place-items-center w-14 h-14 mb-5 rounded-lg bg-cloud transition group-hover:bg-amber/10">
        <Image
          src={`/assets/${service.iconFile}`}
          alt=""
          role="presentation"
          width={120}
          height={120}
          className="w-10 h-10"
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-navy leading-snug">
        {service.title}
      </h3>
      <p
        className="mt-2 text-sm text-steel leading-relaxed flex-1"
        data-todo={summaryIsTodo ? "" : undefined}
      >
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-blue font-semibold text-sm group-hover:text-amber transition">
        Learn more
        <ArrowRight
          className="w-4 h-4 transition group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
