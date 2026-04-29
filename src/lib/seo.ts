import type { Metadata } from "next";
import { site } from "@/content/site";

type BuildArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({ title, description, path = "/", image }: BuildArgs): Metadata {
  const url = `${site.origin}${path}`;
  const ogImage = image ?? "/assets/01_hero_homepage.svg";
  return {
    title,
    description,
    metadataBase: new URL(site.origin),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      images: [{ url: ogImage, width: 1600, height: 900, alt: site.name }],
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    robots: { index: true, follow: true },
  };
}
