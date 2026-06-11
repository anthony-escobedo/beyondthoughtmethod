import type { MetadataRoute } from "next";

import { absoluteUrl, localeRoutes } from "@/content/site";

const lastModified = new Date("2026-06-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(localeRoutes.en),
      lastModified,
    },
    {
      url: absoluteUrl(localeRoutes.es),
      lastModified,
    },
    {
      url: absoluteUrl(localeRoutes["pt-br"]),
      lastModified,
    },
  ];
}
