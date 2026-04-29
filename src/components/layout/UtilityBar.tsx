import { Phone, Mail, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { isTodo } from "@/lib/copy";

export function UtilityBar() {
  return (
    <div className="hidden md:block bg-navy text-cloud text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${site.phones.primary.tel}`}
            className="inline-flex items-center gap-1.5 hover:text-amber transition"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            <span>{site.phones.primary.display}</span>
          </a>
          <a
            href={`tel:${site.phones.secondary.tel}`}
            className="inline-flex items-center gap-1.5 hover:text-amber transition"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            <span>{site.phones.secondary.display}</span>
          </a>
          {!isTodo(site.email.primary) && (
            <a
              href={`mailto:${site.email.primary}`}
              className="inline-flex items-center gap-1.5 hover:text-amber transition"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden />
              <span>{site.email.primary}</span>
            </a>
          )}
        </div>
        <div className="inline-flex items-center gap-1.5 text-amber font-semibold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
          <span>Govt Electrical Licensed</span>
        </div>
      </div>
    </div>
  );
}
