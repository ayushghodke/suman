import Image from "next/image";

/**
 * Full-bleed credentials strip — placed immediately below the hero on every
 * P0 page (brief §7). The SVG itself contains all six trust seals.
 */
export function CredentialsStrip() {
  return (
    <section
      aria-label="Credentials"
      className="bg-cloud border-y border-steel/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Image
          src="/assets/02_credentials_strip.svg"
          alt="Government licensed, MSEDCL & MSETCL approved, ISO 9001:2015 certified, MSME registered, GST compliant, 15 years of experience"
          width={1600}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
