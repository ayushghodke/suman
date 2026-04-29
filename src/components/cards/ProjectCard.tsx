import Link from "next/link";
import { Camera } from "lucide-react";
import type { Project } from "@/content/projects";
import { isTodo } from "@/lib/copy";

export function ProjectCard({ project }: { project: Project }) {
  const titleIsTodo = isTodo(project.title);
  const scopeIsTodo = isTodo(project.scopeSummary);
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-steel/10"
    >
      {/* Photo placeholder per brief §7 — navy block with camera icon */}
      <div className="aspect-[4/3] bg-navy text-cloud/70 flex flex-col items-center justify-center text-center p-6">
        <Camera className="w-10 h-10" aria-hidden />
        <p className="mt-3 text-xs uppercase tracking-widest text-amber">{project.category}</p>
        <p className="mt-2 text-xs text-cloud/60 max-w-xs">
          Photo: {isTodo(project.title) ? "project hero shot" : project.title} — to be provided.
        </p>
      </div>
      <div className="p-5">
        <h3
          className="text-lg font-semibold text-navy line-clamp-2"
          data-todo={titleIsTodo ? "" : undefined}
        >
          {project.title}
        </h3>
        <p
          className="mt-1 text-sm text-steel line-clamp-2"
          data-todo={scopeIsTodo ? "" : undefined}
        >
          {project.scopeSummary}
        </p>
      </div>
    </Link>
  );
}
