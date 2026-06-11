import type { Metadata } from "next";

import type { HomeContent } from "./types";
import { absoluteUrl, getLanguageAlternates, siteName } from "./site";

export function buildPageMetadata(content: HomeContent): Metadata {
  const canonicalUrl = absoluteUrl(content.seo.canonicalPath);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      url: canonicalUrl,
      siteName,
      locale: content.seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}
