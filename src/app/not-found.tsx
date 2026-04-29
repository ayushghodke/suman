import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-sm uppercase tracking-widest font-semibold text-amber">404</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-navy">
          We can&apos;t find that page.
        </h1>
        <p className="mt-4 text-base md:text-lg text-steel">
          The link may have moved, or the page may not exist yet. Try the home page or the services
          overview, or call us directly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-amber text-navy font-semibold px-6 py-3 rounded-md hover:bg-amber/90 transition"
          >
            Go to home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border-2 border-navy text-navy font-semibold px-6 py-3 rounded-md hover:bg-navy hover:text-cloud transition"
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
