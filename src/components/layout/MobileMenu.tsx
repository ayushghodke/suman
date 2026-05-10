"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { primaryNav } from "@/content/nav";

/**
 * Mobile navigation drawer. Closes itself in 4 ways:
 *  - tapping a link
 *  - tapping the backdrop
 *  - pressing Escape
 *  - route change (handled via usePathname effect)
 *
 * Locks body scroll while open so the page beneath doesn't scroll.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close whenever the route changes (post-navigation cleanup)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="p-2 -mr-2 rounded-md text-navy hover:bg-navy/5 transition"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? (
          <X className="w-6 h-6" aria-hidden />
        ) : (
          <Menu className="w-6 h-6" aria-hidden />
        )}
      </button>

      {open && (
        <>
          {/* Backdrop — top offset matches the sticky header height
              (h-16 mobile, h-[72px] from md upward). */}
          <div
            className="fixed inset-x-0 top-16 md:top-[72px] bottom-0 bg-navy/40 z-30 animate-fade-in"
            onClick={close}
            aria-hidden
          />
          {/* Drawer */}
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full bg-cloud border-b border-line shadow-lg z-40 animate-fade-up"
            aria-label="Primary mobile"
          >
            <ul className="px-4 py-2 flex flex-col">
              {primaryNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      data-active={active ? "true" : undefined}
                      className="group flex items-center justify-between py-3 text-base font-semibold text-navy border-b border-line/60 last:border-0 hover:text-amber transition data-[active=true]:text-amber"
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className="w-4 h-4 text-steel/50 group-hover:text-amber group-hover:translate-x-0.5 transition"
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3 pb-4">
                <Link
                  href="/contact"
                  onClick={close}
                  className="btn btn-primary w-full"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
