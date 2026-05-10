import Image from "next/image";
import type { Badge } from "@/content/badges";

export function TrustBadge({
  badge,
  showLabel = false,
}: {
  badge: Badge;
  showLabel?: boolean;
}) {
  return (
    <div className="group flex flex-col items-center gap-3 p-4 rounded-lg transition hover:bg-cloud">
      <Image
        src={`/assets/${badge.file}`}
        alt={badge.label}
        width={140}
        height={140}
        className="w-24 h-24 md:w-28 md:h-28 transition group-hover:scale-105"
      />
      {showLabel && (
        <p className="text-xs font-semibold text-navy text-center max-w-[10rem] leading-snug">
          {badge.label}
        </p>
      )}
    </div>
  );
}
