import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cloud/85 backdrop-blur-md border-b border-line">
      <div className="section-shell">
        <div className="flex items-center justify-between h-16 md:h-[72px] gap-4">
          {/* Logo lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label={site.name}
          >
            <span className="grid place-items-center w-9 h-9 rounded-md bg-navy text-amber transition group-hover:bg-amber group-hover:text-navy">
              <Zap className="w-5 h-5" strokeWidth={2.5} aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-navy uppercase">
                {site.name}
              </span>
              <span className="hidden md:block text-[10px] font-semibold tracking-widest text-steel uppercase">
                {site.yearsInBusiness} years · Govt Licensed Contractor
              </span>
            </span>
          </Link>

          {/* Right cluster — desktop nav + CTA, mobile hamburger */}
          <div className="flex items-center gap-2 lg:gap-7">
            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link text-sm font-semibold text-navy hover:text-navy"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn btn-primary !py-2.5 !px-5 text-sm"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>

            {/* Mobile menu (client component, auto-closes on navigation) */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
