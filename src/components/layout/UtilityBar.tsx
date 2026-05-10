import { Phone, Mail, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/content/site";
import { isTodo } from "@/lib/copy";

export function UtilityBar() {
  return (
    <div className="hidden md:block gradient-navy text-cloud text-xs hairline-amber-top">
      <div className="section-shell">
        <div className="py-2.5 flex items-center justify-between gap-6">
          {/* Left: contacts */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phones.primary.tel}`}
              className="inline-flex items-center gap-1.5 hover:text-amber transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber" aria-hidden />
              <span>{site.phones.primary.display}</span>
            </a>
            <span className="opacity-30" aria-hidden>·</span>
            <a
              href={`tel:${site.phones.secondary.tel}`}
              className="inline-flex items-center gap-1.5 hover:text-amber transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber" aria-hidden />
              <span>{site.phones.secondary.display}</span>
            </a>
            {!isTodo(site.email.primary) && (
              <>
                <span className="opacity-30 hidden lg:inline" aria-hidden>·</span>
                <a
                  href={`mailto:${site.email.primary}`}
                  className="hidden lg:inline-flex items-center gap-1.5 hover:text-amber transition"
                >
                  <Mail className="w-3.5 h-3.5 text-amber" aria-hidden />
                  <span>{site.email.primary}</span>
                </a>
              </>
            )}
          </div>

          {/* Right: hours + license badge */}
          <div className="flex items-center gap-5">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-cloud/70">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              {site.hours.weekdays}
            </span>
            <span className="hidden lg:inline-block w-px h-3 bg-cloud/20" aria-hidden />
            <span className="inline-flex items-center gap-1.5 text-amber font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
              <span>Govt Electrical Licensed</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
