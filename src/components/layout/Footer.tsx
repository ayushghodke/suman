import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { footerColumns, legalNav } from "@/content/nav";
import { isTodo } from "@/lib/copy";
import { badges } from "@/content/badges";

export function Footer() {
  return (
    <footer className="bg-navy text-cloud mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — brand & contact */}
          <div>
            <p className="text-base md:text-lg font-extrabold tracking-tight">
              {site.name.toUpperCase()}
            </p>
            <p className="text-xs uppercase tracking-widest text-amber mt-1">
              {site.tagline}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                <span data-todo={isTodo(site.address.street) ? "" : undefined}>
                  {site.address.street}, {site.address.locality}, {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phones.primary.tel}`}
                  className="inline-flex items-center gap-2 hover:text-amber"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  {site.phones.primary.display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phones.secondary.tel}`}
                  className="inline-flex items-center gap-2 hover:text-amber"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  {site.phones.secondary.display}
                </a>
              </li>
              <li>
                <a
                  href={isTodo(site.email.primary) ? "#" : `mailto:${site.email.primary}`}
                  className="inline-flex items-center gap-2 hover:text-amber"
                  data-todo={isTodo(site.email.primary) ? "" : undefined}
                >
                  <Mail className="w-4 h-4" aria-hidden />
                  {site.email.primary}
                </a>
              </li>
            </ul>
          </div>

          {/* Columns 2-4 — link groups */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-amber transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credentials base bar */}
        <div className="mt-12 pt-8 border-t border-cloud/15 flex flex-wrap gap-x-6 gap-y-2 items-center text-xs text-cloud/80">
          {badges.map((b) => (
            <span key={b.file} className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
              {b.short}
            </span>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-8 pt-6 border-t border-cloud/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cloud/70">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legalNav.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="hover:text-amber">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
