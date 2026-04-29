import Image from "next/image";
import type { Badge } from "@/content/badges";

export function TrustBadge({ badge, showLabel = false }: { badge: Badge; showLabel?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={`/assets/${badge.file}`}
        alt={badge.label}
        width={140}
        height={140}
        className="w-24 h-24 md:w-32 md:h-32"
      />
      {showLabel && (
        <p className="text-xs font-semibold text-navy text-center max-w-[10rem]">
          {badge.label}
        </p>
      )}
    </div>
  );
}
