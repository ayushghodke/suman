import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";

/**
 * Server component. Mobile menu uses <details>/<summary> so it functions
 * with JavaScript disabled (brief §12 — must degrade gracefully).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cloud/95 backdrop-blur-sm border-b border-steel/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-navy">
              {site.name.toUpperCase()}
            </span>
            <span className="hidden lg:inline text-xs text-steel uppercase tracking-widest">
              Est. {new Date().getFullYear() - site.yearsInBusiness}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-navy hover:text-blue transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-amber text-navy font-semibold px-5 py-2.5 rounded-md hover:bg-amber/90 transition"
          >
            Get a Quote
          </Link>

          {/* Mobile menu (no-JS friendly) */}
          <details className="lg:hidden group">
            <summary
              className="list-none cursor-pointer p-2 -mr-2 rounded-md text-navy"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 group-open:hidden" aria-hidden />
              <X className="w-6 h-6 hidden group-open:block" aria-hidden />
            </summary>
            <nav
              className="absolute left-0 right-0 top-full bg-cloud border-b border-steel/15 shadow-md"
              aria-label="Primary mobile"
            >
              <ul className="px-4 py-3 flex flex-col">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-semibold text-navy border-b border-steel/10 last:border-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-amber text-navy font-semibold px-5 py-3 rounded-md"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
