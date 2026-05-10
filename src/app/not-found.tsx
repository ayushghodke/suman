import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="gradient-cloud-amber min-h-[70vh] flex items-center">
      <div className="section-shell py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-navy leading-[1.05]">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-5 text-base md:text-lg text-steel leading-relaxed max-w-prose">
            The link may have moved, or the page may not exist yet. Try the
            home page or our services overview, or call us directly — we&apos;re
            happy to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn btn-primary">
              Go to home
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              See services
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-navy/10 shadow-card-hover">
            <Image
              src="/assets/photos/error_404.png"
              alt="Disconnected electrical schematic forming the digits 4 0 4"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
