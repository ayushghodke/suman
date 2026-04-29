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
      className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 md:p-8 border border-steel/10"
    >
      <div className="w-16 h-16 mb-5">
        <Image
          src={`/assets/${service.iconFile}`}
          alt=""
          role="presentation"
          width={120}
          height={120}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
      <p
        className="mt-2 text-sm text-steel leading-relaxed flex-1"
        data-todo={summaryIsTodo ? "" : undefined}
      >
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-blue font-semibold text-sm">
        Learn more
        <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
