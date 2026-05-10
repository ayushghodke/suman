import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Zap } from "lucide-react";
import { site } from "@/content/site";
import { footerColumns, legalNav } from "@/content/nav";
import { isTodo } from "@/lib/copy";
import { badges } from "@/content/badges";

export function Footer() {
  return (
    <footer className="relative gradient-navy text-cloud hairline-amber-top">
      <div className="section-shell pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="grid place-items-center w-10 h-10 rounded-md bg-amber text-navy">
                <Zap className="w-5 h-5" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="text-lg md:text-xl font-extrabold tracking-tight uppercase">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-cloud/75 leading-relaxed max-w-xs">
              {site.tagline}.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber" aria-hidden />
                <span
                  className="text-cloud/80"
                  data-todo={isTodo(site.address.street) ? "" : undefined}
                >
                  {site.address.street}, {site.address.locality}, {site.address.city},{" "}
                  {site.address.region} {site.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phones.primary.tel}`}
                  className="inline-flex items-center gap-3 text-cloud/85 hover:text-amber transition"
                >
                  <Phone className="w-4 h-4 text-amber" aria-hidden />
                  {site.phones.primary.display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phones.secondary.tel}`}
                  className="inline-flex items-center gap-3 text-cloud/85 hover:text-amber transition"
                >
                  <Phone className="w-4 h-4 text-amber" aria-hidden />
                  {site.phones.secondary.display}
                </a>
              </li>
              <li>
                <a
                  href={isTodo(site.email.primary) ? "#" : `mailto:${site.email.primary}`}
                  className="inline-flex items-center gap-3 text-cloud/85 hover:text-amber transition"
                  data-todo={isTodo(site.email.primary) ? "" : undefined}
                >
                  <Mail className="w-4 h-4 text-amber" aria-hidden />
                  {site.email.primary}
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber-light transition group"
            >
              Request a Site Visit
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-amber">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-cloud/80 hover:text-amber transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials trust bar */}
        <div className="mt-14 pt-8 border-t border-cloud/15">
          <p className="text-xs uppercase tracking-widest font-semibold text-cloud/60 mb-4">
            Credentials & Compliance
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-center text-sm text-cloud/85">
            {badges.map((b) => (
              <span key={b.file} className="inline-flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber"
                  aria-hidden
                />
                {b.short}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-cloud/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cloud/65">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legalNav.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="hover:text-amber transition">
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
