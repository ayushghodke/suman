import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { isTodo } from "@/lib/copy";
import { getProjectImage } from "@/lib/imageMap";

export function ProjectCard({ project }: { project: Project }) {
  const titleIsTodo = isTodo(project.title);
  const scopeIsTodo = isTodo(project.scopeSummary);
  const image = getProjectImage(project.slug);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card-lift relative flex flex-col bg-white rounded-xl overflow-hidden border border-line shadow-card"
    >
      <div className="relative aspect-[4/3] bg-navy overflow-hidden">
        <Image
          src={image}
          alt=""
          role="presentation"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 image-overlay-bottom" aria-hidden />
        <span className="absolute top-3 left-3 inline-flex items-center text-[10px] uppercase tracking-widest font-bold bg-amber text-navy px-2 py-1 rounded">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full bg-cloud/15 text-cloud opacity-0 group-hover:opacity-100 transition">
          <ArrowUpRight className="w-4 h-4" aria-hidden />
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3
          className="text-base md:text-lg font-bold text-navy leading-snug line-clamp-2"
          data-todo={titleIsTodo ? "" : undefined}
        >
          {project.title}
        </h3>
        <p
          className="mt-2 text-sm text-steel leading-relaxed line-clamp-3"
          data-todo={scopeIsTodo ? "" : undefined}
        >
          {project.scopeSummary}
        </p>
      </div>
    </Link>
  );
}
