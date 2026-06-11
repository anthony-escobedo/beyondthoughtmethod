import type { CanonicalPath, Locale } from "./types";

export const siteUrl = "https://beyondthoughtmethod.com";

export const siteName = "Beyond Thought Method";

export const localeRoutes: Record<Locale, CanonicalPath> = {
  en: "/",
  es: "/es",
  "pt-br": "/pt-br",
};

export const xDefaultPath: CanonicalPath = "/";

export function absoluteUrl(path: CanonicalPath): string {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

export function getLanguageAlternates(): Record<string, string> {
  return {
    en: absoluteUrl(localeRoutes.en),
    es: absoluteUrl(localeRoutes.es),
    "pt-BR": absoluteUrl(localeRoutes["pt-br"]),
    "x-default": absoluteUrl(xDefaultPath),
  };
}
